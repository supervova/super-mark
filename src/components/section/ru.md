# Раздел

В общем случае, компонент `.section` задает вертикальные поля (`paddings`), фоновый цвет и изображение раздела.

Горизонтальные поля и ограничения по ширине (`max-width`) определяются свойствами вложенного компонента `container`. А сетка — свойствами потомка `.grid`.

```pug
.section
  .container.grid
```

В принципе, можно скрестить компонент `.section` с полноширинным вариантом компонента `.grid`. И тогда вложенные компоненты не понадобится. Однако, часто это вызывает больше проблем, чем выгоды. Например, изображение в ячейке сетки, гораздо сложнее частично вытащить из viewport'а, чем фоновое изображение.

См. также [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/content-visibility/)

## `is-full-bleed`

```pug
.section.is-full-bleed
  .container
    Content...

figure.section.is-full-bleed
  img(src='https://source.unsplash.com/e_DmszdpETY/1200x600',
    srcset='https://source.unsplash.com/e_DmszdpETY/2400x1200 2400w,\
    https://source.unsplash.com/e_DmszdpETY/1200x600 1200w,\
    https://source.unsplash.com/e_DmszdpETY/600x300 600w',\
    sizes='100vw', alt='low-angle photography of trees')
  figcaption Photo by Jonathan Borba on Unsplash
```

## `content-visibility`

[CSS-свойство `content-visibility`](https://web.dev/content-visibility/) ускоряет отрисовку страницы [в несколько раз](https://habr.com/ru/company/vdsina/blog/514760/)

Рекомендуется использовать со свойством `contain-intrinsic-size`.

☝️🧐 Однако `content-visibility` обрезает выходящие за границы элемента тени. Поэтому может применяться не для всех разделов.
