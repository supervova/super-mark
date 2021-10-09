---
title: <span class="eyebrow">Adobe Illustrator для веб-дизайнера</span> 5)&nbsp;Обводка
description: ☝️🧐 Все три режима выравнивания обводки по&nbsp;контуру&nbsp;— «по&nbsp;центру», «внутри» и&nbsp;«снаружи»&nbsp;— применимы только к&nbsp;закрытым контурам. Обводка открытых контуров выравнивается только по&nbsp;центру. Но&nbsp;это ограничение можно обойти с&nbsp;помощью диалога настройки толщины линии&nbsp;— см. ниже ⬇︎
date: 2020-10-03
categories: Illustrator
---

{% include blog/illustrator.html %}

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Переменная толщина обводки.</h2>
<p>Чтобы сделать толщину линии по&nbsp;периметру контура разной (как при использовании плоской кисти), нужно выбрать один из&nbsp;профилей в&nbsp;меню Variable Width Profile</p>
<figure><img src="{{ site.assets }}/img/blog/2020/10-03/01-variable-width-profile.png" alt="Переменная толщина обводки"></figure>
<figure><img src="{{ site.assets }}/img/blog/2020/10-03/02-variable-width-profile.png" alt="Переменная толщина обводки"></figure>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Инструмент толщины линий Width (⇧W)</h2>
<p>Позволяет создавать обводку с&nbsp;переменной шириной. Переменную ширину можно сохранять в&nbsp;виде профиля.</p>
<figure><img src="{{ site.assets }}/img/blog/2020/10-03/03-width.png" alt="Инструмент толщины линий"></figure>
<p>Инструмент полезен, как для имитации кисти в&nbsp;контурах иллюстраций, так и&nbsp;для создания сужающихся форм, например, для иконок.</p>
<figure><img src="{{ site.assets }}/img/blog/2020/10-03/04-width.png" alt="Инструмент толщины линий"></figure>
<ul>
  <li>При наведении инструмента Width на&nbsp;обводку, на&nbsp;контуре появляется точка толщины и&nbsp;маркеры изменения толщины. С&nbsp;их&nbsp;помощью можно изменить толщину обводки, а&nbsp;также добавлять, дублировать, перемещать и&nbsp;удалять точки ширины.</li>
  <li>Чтобы редактировать ширину линии не&nbsp;симметрично относительно контура, надо передвигать маркеры с&nbsp;нажатым Alt’ом.</li>
  <li>⌥-перетаскивание точки толщины дублирует&nbsp;ее (так&nbsp;же, как ⌥-перетаскивание дублирует другие сущности в&nbsp;AI)</li>
  <li>
    Точки толщины могут совпадать с&nbsp;опорными точками пути.
    <figure><img src="{{ site.assets }}/img/blog/2020/10-03/05-width.png" alt="Инструмент толщины линий"></figure>
  </li>
  <li>Двойной клик на&nbsp;точке толщины открывает диалог точной настройки.</li>
</ul>
<p>Изменение значения Total Width с&nbsp;выставленным флагом Adjust Adjoining Width Points изменяет толщину всей линии пропорционально.</p>
<figure><img src="{{ site.assets }}/img/blog/2020/10-03/06-width-point-edit.png" alt="Инструмент толщины линий"></figure>
<ul>
  <li>⬆︎ С&nbsp;помощью диалога настройки толщины линии, можно обойти ограничение по&nbsp;выравниванию обводки c&nbsp;открытым контуром. Если уменьшить на&nbsp;всех точках толщины один из&nbsp;Side-параметров до&nbsp;нуля, то&nbsp;обводка будет выровнена снаружи или внутри контура.</li>
  <li>
    При редактировании толщины линии, миниатюра профиля ширины меняется.
    <figure><img src="{{ site.assets }}/img/blog/2020/10-03/07-width.png" alt="Инструмент толщины линий"></figure>
  </li>
  <li>
    <strong>Чтобы сохранить профиль</strong> переменной толщины для дальнейшего использования, надо открыть меню профилей, нажать значок сохранения, в&nbsp;диалоге записать имя профиля и&nbsp;сохранить.
    <figure><img src="{{ site.assets }}/img/blog/2020/10-03/08-save-stroke-profile.png" alt="Инструмент толщины линий"></figure>
  </li>
</ul>
<p>Наиболее подходящая фигура для подбора пользовательских профилей толщины&nbsp;— знак бесконечности. Используя целые цифры в&nbsp;диалоге точных настроек, и&nbsp;удаляя ненужные точки толщины, можно добиться желаемых результатов.</p>
<figure><img src="{{ site.assets }}/img/blog/2020/10-03/09-infinity.png" alt="Инструмент толщины линий"></figure>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Пунктирные линии</h2>
<p>Чтобы штрихи пунктирной линии равномерно легли на&nbsp;закрытый контур, нужно выбрать опцию <strong>Aligns dashes</strong> to&nbsp;<strong>corners</strong> and path ends, adjusting lengths to&nbsp;fit. Однако она работает только с&nbsp;выравниванием обводки по&nbsp;центру контура.</p>
<figure><img src="{{ site.assets }}/img/blog/2020/10-03/10-dashed-line.png" alt="Пунктирные линии"></figure>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Контурные рисунки с&nbsp;закругленными концами.</h2>
<p>Выбрать скругленные концы (Round Cap) и&nbsp;скругленные стыки (Round Join)</p>
<figure><img src="{{ site.assets }}/img/blog/2020/10-03/11-stroke-corner.png" alt="Контурные рисунки с закругленными концами"></figure>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Шаблонные кисти</h2>
<p>Любой контур, фигуру можно сохранить, как шаблонную кисть.</p>
<figure><img src="{{ site.assets }}/img/blog/2020/10-03/12-brushes.png" alt="Шаблонные кисти"></figure>
<figure><img src="{{ site.assets }}/img/blog/2020/10-03/13-pattern-brush.png" alt="Шаблонные кисти"></figure>
<p>И&nbsp;затем использовать для обводки.</p>
<figure><img src="{{ site.assets }}/img/blog/2020/10-03/14-pattern-brush.png" alt="Шаблонные кисти"></figure>
<p>Чтобы перевести обводку шаблонной кисти в&nbsp;стандартный контур, выбрать Object ➜ Expand Appearance. Затем&nbsp;— ⌘J, чтобы соединить фрагменты в&nbsp;единый контур.</p>
<p>Теперь фигуру можно залить.</p>
<figure><img src="{{ site.assets }}/img/blog/2020/10-03/15-pattern-brush-shape.png" alt="Шаблонные кисти"></figure>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Градиентные обводки</h2>
<p>Стандартный стиль Apply gradient within stroke (Применение градиента внутри обводки)</p>
<figure><img src="{{ site.assets }}/img/blog/2020/10-03/16-gradient-stroke.png" alt="Градиентные обводки"></figure>
<p>Стиль Apply gradient across stroke (Применение градиента по&nbsp;диагонали обводки). Позволяет создавать размытые границы</p>
<figure><img src="{{ site.assets }}/img/blog/2020/10-03/17-gradient-stroke.png" alt="Градиентные обводки"></figure>
