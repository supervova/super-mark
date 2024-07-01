---
title: '<span class="eyebrow">Adobe Illustrator для веб-дизайнера</span> 9.1)&nbsp;Shape Builder Tool (Создание фигур)&nbsp;— ⇧M'
description: Этот инструмент делает Illustrator великой программой. Из-за этого инструмента я&nbsp;люблю Люстру.
categories: Illustrator
date: 2021-04-03 12:30
---

{% include accordion/illustrator-toc.html %}

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;tl;dr</h2>
<ol>
<li>Нарисовать контурный рисунок.</li>
  <li>Выделить, выбрать инструмент.</li>
  <li>Закрашивать, кликая внутри пересекающихся контуров или перетягивая курсор между фрагментами, которые нужно объединить в&nbsp;форму одного цвета.</li>
  <li>
    Убрать обводку выделенной группы.
    <figure><img src="{{ site.assets }}/img/blog/2021/04-03/01-border-0.png" alt="Убрать обводку выделенной группы"></figure>
  </li>
  <li>Удалить обрезки контуров, как любой другой ненужный мусор&nbsp;— выделяя черной стрелкой и&nbsp;нажимая Delete.</li>
  <li>Объединить разрозненные объекты pathfinder’ом.</li>
</ol>
<p>Предназначен для объединения пересекающихся фигур в&nbsp;новые. Позволяет моментально объединять и&nbsp;стирать кусочки фигур, разделенные границами объектов.</p>
<p>Также используется для заливки графики из&nbsp;открытых контуров.</p>
<figure><img src="{{ site.assets }}/img/blog/2021/04-03/02-shape-builder.png" alt="Shape Builder Tool — создание фигур"></figure>
<figure><img src="{{ site.assets }}/img/blog/2021/04-03/03-intersect.png" alt="Shape Builder Tool — создание фигур"></figure>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Использование</h2>
<ul>
  <li>
    Чтобы добавить область на&nbsp;пересечении фигур, выделить пересекающиеся объекты и&nbsp;выбрать Shape Builder Tool.
    <figure><img src="{{ site.assets }}/img/blog/2021/04-03/04-shape-builder-tool.png" alt="Shape Builder Tool — добавить область"></figure>
  </li>
  <li>Навести курсор на&nbsp;объекты&nbsp;— подсветится область, ограниченная краями объектов.</li>
  <li>Нажать левую кнопку мыши и&nbsp;«протянуть» через нужные области&nbsp;— они будут объединены в&nbsp;новый объект.</li>
  <li>
    По&nbsp;мере движения мыши каждая из&nbsp;встреченных областей будут подсвечиваться.
    <figure><img src="{{ site.assets }}/img/blog/2021/04-03/05-shape-builder.png" alt="Shape Builder Tool — добавить области"></figure>
  </li>
  <li>
    Удерживать Shift, чтобы выделить нужные пересечения рамкой.
    <figure><img src="{{ site.assets }}/img/blog/2021/04-03/06-shape-builder-join-frame.png" alt="Удерживать Shift, чтобы выделить нужные пересечения рамкой"></figure>
  </li>
  <li>
    <b>Чтобы вычесть области пересечения фигур</b>, надо выделять нужное с&nbsp;нажатым Alt’ом
    <figure><img src="{{ site.assets }}/img/blog/2021/04-03/07-shape-builder-minus.png" alt="Shape Builder Tool — вычесть области пересечения фигур"></figure>
    <figure><img src="{{ site.assets }}/img/blog/2021/04-03/08-shape-builder-minus.png" alt="Shape Builder Tool — вычесть области пересечения фигур"></figure>
  </li>
  <li>
    <b>Чтобы сделать пересечения отдельными закрытыми контурами</b>, надо дважды кликнуть в&nbsp;каждом из&nbsp;них, не&nbsp;перетаскивая. Затем можно будет удалить «обрезки»&nbsp;— ненужные контуры снаружи пересечений.
    <figure><img src="{{ site.assets }}/img/blog/2021/04-03/09-shape-builder.jpg" alt="Shape Builder Tool — сделать пересечения отдельными закрытыми контурами"></figure>
  </li>
</ul>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Настройки</h2>
<ul>
  <li>Дважды кликнуть на&nbsp;Shape Builder Tool.</li>
  <li>Выбрать Pick Color from Artwork&nbsp;— цвет объединённой фигуры будет таким&nbsp;же, как у&nbsp;той фигуры, с&nbsp;которой началось протягивание.</li>
  <li>
    Также можно изменить чувствительность инструмента&nbsp;— поставить флаг Gap Detection и&nbsp;размер игнорируемых при слиянии пробелов.
    <figure><img src="{{ site.assets }}/img/blog/2021/04-03/10-shape-builder-options.png" alt="Shape Builder Tool — изменить чувствительность инструмента"></figure>
  </li>
</ul>
<p>Если вместо Artwork, выбрать Swatches и&nbsp;поставить флаг Cursor Swatch Preview, над курсором появится мини-палитра с&nbsp;образцами документа. Образцы можно перелистывать стрелками вправо-влево. Нажатие таким курсором на&nbsp;фигуру, окрашивает ее&nbsp;в&nbsp;цвет центрального образца. </p>
<figure><img src="{{ site.assets }}/img/blog/2021/04-03/11-shape-builder-swatches.png" alt="Shape Builder Tool — выбор образца заливки"></figure>
