# Примиси и переменные

## Медиазапрос для портретных планшетов

Высота экрана [некоторых телефонов](https://gs.statcounter.com/screen-resolution-stats/mobile/worldwide/#monthly-202106-202206-bar) превышает 768px – ширину экрана iPad'а: 780×360, 800×360, 812×375, 844×390, 851×393, 869×412, 873×393, 892×412, 896×414, 915×412.

Поэтому на таких телефонах в альбомной ориентации к сайтам будут применяться стили записанные в стандартном, основанном на `min-width` планшетном медиазапросе.

Чтобы этого избежать, мы добавили в планшетный медиазапрос дополнительное условие.

```css
@custom-media --tablet
  screen and (min-width: 768px),
  (not (pointer: coarse) and (orientation: landscape));
```

## Шрифты

- Don't use system-ui (Tahoma in Win7), Segoe UI and Cantarell. These fonts are ugly
- Don't quoted special keywords: inherit, serif, sans-serif, cursive, fantasy, system-ui, monospace, ui-serif,ui-sans-serif, ui-monospace, and ui-rounded.
- Don't quoted prefixed system fonts such as -apple-system and BlinkMacSystemFont.
- To avoid mistakes in escaping, it is recommended to quote font family names that contain white space, digits, or punctuation characters other than hyphens.
However quotes are required around font-family names only when they are not valid CSS identifiers. For example, a font family name requires quotes around it if it contains $, ! or /, but does not require quotes just because it contains spaces or a (non-initial) number or underscore.

### Цвета

- Base backgrounds. For the sake of design, we can violate the recommendations in contrast, but only where, it will not spoil the UX.
- Use @-moz-document url-prefix() { background-color: hsl(0 0% 100% .92);} for FireFox
- Base inks. Inks are foreground colors for headlines, body copy and icons.

## Light theme

Light theme (default) can be forced with the `data-theme="light"` attributes and the `[data-theme='dark']` selectors.

### Dark theme

```scss
@mixin dark-theme {
  color-scheme: dark;

  // The saturation and lightness reduced a relative 20%.
  --s: 64%;

  --color-brand-primary: hsl(var(--h), var(--s), 44%);

  --color-background-base: hsl(var(--h) 10% 10%);
  --color-background-2ry: hsl(var(--h) 10% 15%);
  --color-background-z3: hsl(var(--h) 5%  20%);
  --color-background-z5: hsl(var(--h) 5% 25%);

  --color-ink-base: hsl(var(--h) 15% 85%);
  --color-ink-2ry: hsl(var(--h) 5% 65%);

  --color-ink-shadow: var(--h) 50% 3%;

  // Etc
}
```

#### Уровень настроек системы (автоматический режим)

```scss
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    @include dark-theme;
  }
}
```

#### Уровень сайта/приложения

Включается в пользовательском атрибуте `data-theme`.

```scss

[data-theme='light'],
:root:not([data-theme='dark']) {/* светлая тема */}

[data-theme='dark'] {
  @include dark-theme;
}
```

Допускаются и вложенные темы.

```pug
html(data-theme='light')
  section(data-theme='dark')
    .component(data-theme='light')
```

### Многослойность и zindex

Слои, предлагаемые [Material design](https://material.io/design/environment/elevation.html)

- Модальное окно: 24dp
- Выдвижная панель: 16dp
- FAB: 6dp
- Фиксированная «шапка» и нижняя панель навигации: 4dp
- Кнопка: 2dp
- Карточка: от 1dp до 8dp (для перетягивания)

При этом надо учитывать, что модальные окна и выдвижные панели, если их создавать с помощью элемента `dialog` занимают специальный `top level` на странице, изолированы от потока основного содержания и не нуждаются в zindex'е.

Поэтому в 01-boilerplate их zindex'ы не записываются в переменные.

## Анимационный дизайн

- Длительность анимации зависит от объекта, его размеров и растояния, которое он преодолевает на экране. Расчитать можно по одному из ключевых факторов.
  - Размер объекта. Минимальная продолжительность – 100–200 мс – для кнопок и пр. маленьких компонентов. Максимальная – 500–700 мс – для переходов или анимаций всего экрана.
  - Дистанция. 100 мс на каждые 10vw.
  - Сложность анимации. 2-5 одновременно анимируемых объектов – 300–400 мс. 6–10 объектов – 500–700 мс.
- Для типичных переходов и трансформаций можно использовать шкалу тайминга, выраженную в переменных (исходные значения взяты у [IBM](https://carbondesignsystem.com/guidelines/motion/overview/#duration)).

  ```scss
  // Микровзаимодействия с малыми объектами: кнопками, переключателями etc
  $duration-xxs: .07s !default;

  /* Микровзаимодействия типа переходов fade out / fade in (затемнения / выхода
  из затемнения; растворения / выхода из прозрачности) */
  $duration-xxs:  .11s !default;

  /* Микровзаимодействия, раскрытие небольших блоков, перемещения на небольшие
  расстояния */
  $duration-sm:  .15s !default;

  // Раскрытие средних блоков, тосты, системные сообщения
  $duration-md:  .24s !default;

  // Раскрытие больших блоков, важные сообщения
  $duration-lg:  .4s !default;

  // Смена фонового цвета
  $duration-xl:  .7s !default;
  ```

- Длительность сложных полноэкранных анимаций можно задавать увеличением одного из стартных периодов в несколько раз. Например, `$duration-lg * 4`.
- Для расчета новой шкалы можно использовать коэффициент геометрической прогрессии – также, как в размерной шкале шрифта. Например, малую септиму: 1.778 (9:16).
- Элементы в идеале должны исчезать с экрана быстрее, чем появляться. Для этого используем свойство `transition` в обоих положениях.

  ```scss
  .el { transition: all ($duration-md * .8) $motion-easing-disappearance; }
  .el.is-hidden { transition: all $duration-md $motion-easing-appearance; }
  ```
