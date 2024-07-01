---
title: '<span class="eyebrow">Adobe Illustrator для веб-дизайнера</span> 9.2)&nbsp;Рисование фигур линиями и&nbsp;инструментом быстрой заливки'
description: Еще одна выдающаяся штук в Люстре.
categories: Illustrator
date: 2021-05-22
---

{% include accordion/illustrator-toc.html %}

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;tl;dr</h2>
<ol>
  <li>Нарисовать контурный рисунок.</li>
  <li>Выделить, нажать K.</li>
  <li>Раскрасить ведерком области внутри пересекающихся контуров.</li>
  <li>
    Убрать обводку выделенной группы.
    <figure><img src="{{ site.assets }}/img/blog/2021/05-22/01-remove-stroke.png" alt="Убрать обводку" /></figure>
  </li>
  <li>Object ➜ Live paint ➜ Expand</li>
  <li>Объединить разрозненные объекты pathfinder’ом.<br /></li>
</ol>
<p>В&nbsp;зависимости от&nbsp;привычек пользователя Live Paint Backet может заменить или дополнить Shape builder. В&nbsp;настройках Live Paint Backet можно указать размеры допустимых зазоров и&nbsp;таким образом закрашивать неплотно закрытые контурами области.</p>
<ul>
  <li>
    Нарисовать нужный контур&nbsp;— пером или линиями. Выделить с&nbsp;черной стрелкой.
    <figure><img src="{{ site.assets }}/img/blog/2021/05-22/02-select-stroke.png" alt="Выделить обводку" /></figure>
  </li>
  <li>
    Создать группу быстрой заливки быстрой заливки и&nbsp;выбрать соответствующий инструмент: Live Paint Backet&nbsp;— K.
    <figure><img src="{{ site.assets }}/img/blog/2021/05-22/03-live-paint-bucket.png" alt="Live Paint Backet — K" /></figure>
  </li>
  <li>
    Подвести курсор к&nbsp;нужному контуру&nbsp;— если, он&nbsp;закрыт, он&nbsp;выделиться.
    <figure><img src="{{ site.assets }}/img/blog/2021/05-22/04-live-paint-bucket.png" alt="Выделенный контур" /></figure>
  </li>
  <li>
    Кликнуть по&nbsp;выделенному контуру (но&nbsp;не&nbsp;внутри его), чтобы закрасить
    <figure><img src="{{ site.assets }}/img/blog/2021/05-22/05-live-paint-bucket.png" alt="Закрашенный контур" /></figure>
  </li>
  <li>
    Для точной настройки Live Paint Backet дважды щелкнуть по&nbsp;его иконке в&nbsp;панели инструментов:
    <ul>
      <li>Paint Fills, Paint Strokes&nbsp;— выбрать, что окрашивать: заливку</li>
      <li>Cursor Swatch Preview&nbsp;— показывать образцы цвета рядом с&nbsp;курсором,</li>
      <li>Параметры группы Highlight&nbsp;— стиль выделения<br /></li>
    </ul>
  </li>
</ul>
<p>
  ☝️🧐 Live Paint Backet незаменим для раскраски пересечений без повреждения исходных форм.
  <figure><img src="{{ site.assets }}/img/blog/2021/05-22/06-live-paint-bucket.png" alt="Раскраска пересечений без повреждения исходных форм" /></figure>
</p>
<p>
  ☝️🧐 Для быстрой заливки лучше подготовить специальную группу образцов.
  <figure><img src="{{ site.assets }}/img/blog/2021/05-22/07-live-paint-swatches.png" alt="Специальная группа образцов" /></figure>
</p>
<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Live Paint Selection</h2>
<figure><img src="{{ site.assets }}/img/blog/2021/05-22/08-live-paint-selection-tool.png" alt="Live Paint Selection" /></figure>
<p>Выбранные инструментом объекты нельзя перетащить. Нельзя выделить рабочие контуры, чтобы удалить</p>
<p>Выбрать не&nbsp;нужные линии и&nbsp;удалить&nbsp;— точно так&nbsp;же, как это было во&nbsp;Flash’е.</p>
<p>См. также <a href="/ru/blog/2020/edit-paths#join-tool">4) Редактирование контуров ➜ Инструмент соединения контуров</a>.</p>
