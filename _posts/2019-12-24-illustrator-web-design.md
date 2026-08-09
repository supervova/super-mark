---
title: <span class="eyebrow">Adobe Illustrator для веб-дизайнера</span> 1) Введение
description: 'Этой заметкой я&nbsp;открываю цикл материалов об&nbsp;использовании Adobe Illustrator в&nbsp;веб-дизайне.'
image: /img/blog/2019/12-24/illustrator-characters-guides-01.png
date: 2019-12-24
categories: Illustrator
---

{% include accordion/illustrator-toc.html %}

<h2>Назначение и&nbsp;уникальные функции</h2>
<p>По&nbsp;моему мнению, по&nbsp;ряду позиций Illustrator проигрывает в&nbsp;удобстве Sketch’у: заливка, работа со&nbsp;слоями и&nbsp;монтажными областями, экспорт в&nbsp;SVG... Поэтому использую&nbsp;AI только для тех задач, для которых он&nbsp;по-настоящему незаменим.</p>
<ul>
<li>Контуры векторных иллюстраций, особенно сложные с&nbsp;предварительной заливкой. Уникальные инструменты и&nbsp;функции Illustrator’а для этого, основного этапа работы над графикой:
<ul>
<li>Shape Builder</li>
<li>Скругление углов произвольного контура</li>
<li>Произвольные направляющие</li>
<li>Инструмент толщины линий (Adobe добавил его еще в&nbsp;бывший Flash&nbsp;&mdash; Animate)</li>
<li>Perspective Grid</li>
<li>Пользовательские кисти, используемые в&nbsp;частности, для рисования бровей, ресниц, волос, меха.<br>
Заливаю контуры я&nbsp;плоскими цветами, подбирая гармоничные сочетания в&nbsp;«Каталоге цветов». Но&nbsp;градиенты, тени и&nbsp;т.п. накладываю уже в&nbsp;Sketch’е.</li>
</ul>
</li>
<li>Искривленные градиенты с&nbsp;помощью переходов.</li>
<li>Создание полноцветной графики для анимации в&nbsp;After Effects.</li>
<li>Создание полноцветной графики для печати.</li>
<li>Сложные декоративное оформление надписей&nbsp;— для этой цели использую палитру «Оформление».</li>
</ul>
<h2>Общий алгоритм</h2>
<p><strong>Создать документ</strong> с&nbsp;одной или несколькими монтажными областями. Размер зависит от&nbsp;экспортируемого файла: дизайн-макета, иллюстрации или иконки.</p>
<p><strong>Настроить нужные сетки</strong> или произвольные направляющие.</p>
<p>Preferences ➜ Guides &amp;&nbsp;Grid. Базовая разлиновка. Например, Gridline every 8px, subdivision 8.</p>
<p>Для иконок создать сетку границ и&nbsp;базовых фигур.</p>
<ul>
<li>Разделить линиями монтажную область пополам по&nbsp;вертикали и&nbsp;горизонтали.</li>
<li>Провести диагонали из&nbsp;угла в&nbsp;угол.</li>
<li>Начертить границы содержимого: квадрат, круг, вертикальный и&nbsp;горизонтальный треугольник.</li>
<li>Добавить вдвое меньший круг или круги по&nbsp;золотому сечению.</li>
<li>Выделить всё. View ➜ Guides ➜ Make Guides (⌘5)</li>
</ul>
<img src="{{ site.assets }}/img/blog/2019/12-24/illustrator-make-guides.png" alt="Сделать направляющие из фигур">
<p>Другой вариант сетки иконок&nbsp;— квадрат разделенный 4×4 и&nbsp;рекурсивные квадраты, вписанные в&nbsp;круги</p>
<img src="{{ site.assets }}/img/blog/2019/12-24/illustrator-recursive-squares-grid.png" alt="Вариант сетки иконок">
<ul>
<li><strong>Для дизайн-макета</strong> сделать сетку базовой линии, колонки и&nbsp;<a href="https://www.pinterest.ru/pin/245938829631827772/">модульную сетку</a> с&nbsp;помощью Rectangle Grid&nbsp;— см.&nbsp;п. «Линии и&nbsp;сетки».</li>
<li><strong>Для иллюстрации</strong>&nbsp;— сетку третей, четвертей, золотого сечения, сетку Эндрю Лумиса или <a href="https://www.pinterest.ru/paschka/grids-grid-systems-systematic-design/">какую-нибудь экзотическую сетку</a>. Можно добавить круги по&nbsp;золотому сечению&nbsp;— для разработки геометрических деталей композиции.<br>
</li>
</ul>
<img src="{{ site.assets }}/img/blog/2019/12-24/illustrator-andrew-loomis-grid.png" alt="Сетка по Эндрю Лумису">
<img src="{{ site.assets }}/img/blog/2019/12-24/illustrator-custom-grid.png" alt="Произвольная сетка">
<p><strong>При перерисовки изображений</strong> можно создать несколько пользовательских направляющих из&nbsp;кругов, эллипсов, прочих базовых фигур и&nbsp;линий. И&nbsp;затем рисовать по&nbsp;ним пером и&nbsp;инструментом кривизны.</p>
<img src="{{ site.assets }}/img/blog/2019/12-24/illustrator-guides-for-logo.png" alt="Направляющие для логотипа">
<img src="{{ site.assets }}/img/blog/2019/12-24/illustrator-characters-guides-01.png" alt="Шрифтовые направляющие">
<img src="{{ site.assets }}/img/blog/2019/12-24/illustrator-characters-guides-02.png" alt="Шрифтовые направляющие">
<p><strong>Если нужно, скопировать и&nbsp;вставить</strong> сетки&nbsp;/ направляющие в&nbsp;другие области (⌘F).</p>
<ul>
<li>View ➜ Guides ➜ Lock Guides</li>
<li>Переименовать слой в&nbsp;guides</li>
<li>Добавить слои для графики</li>
</ul>
<p><strong>Создать палитру проекта,</strong> сохранив в&nbsp;образцы необходимые цвета, как глобальные. Работать с&nbsp;образцами в&nbsp;Illustrator’е удобнее, чем выбирать цвет пипеткой или настраивать в&nbsp;процессе в&nbsp;палитре.</p>
<p><strong>Иконки и&nbsp;логотипы </strong><a href="https://www.youtube.com/watch?v=m24A8lsQWXQ">рисовать базовыми фигурами, линиями</a> по&nbsp;сеткам, с&nbsp;включенной привязкой к&nbsp;пиксельной сетке.</p>
<p>Комбинировать фигуры с&nbsp;помощью <strong>Shape Builder Tool</strong>.</p>
<img src="{{ site.assets }}/img/blog/2019/12-24/illustrator-shape-builder-tool.png" alt="Инструмент «Создание фигур»">
<img src="{{ site.assets }}/img/blog/2019/12-24/logo-construction-giraffe-w-circles.gif" alt="Отрисовка по направляющим">

<p><strong>Иллюстрации выполнять в&nbsp;более свободной технике.</strong></p>
<ul>
<li>Прямые линии и&nbsp;мелкие дуги рисовать пером и&nbsp;«кривизной», отключив привязку к&nbsp;пиксельной сетке, минимизируя количество опорных точек.</li>
<li>Но&nbsp;включать привязку к&nbsp;пиксельной сетке, когда нужно провести четкие горизонтальные и&nbsp;вертикальные линии, нарисовать прямоугольники.</li>
<li>Большие дуги рисовать овалами. Там где можно&nbsp;— по&nbsp;кругам-направляющим в&nbsp;пропорциях золотого сечения. Также круги-направляющие гармонической пропорции использовать для разработки геометрических деталей композиции.
<img src="{{ site.assets }}/img/blog/2019/12-24/illustrator-supermark.png" alt="Иллюстрация для SuperSenior'а">
</li>
<li>Комбинировать фигуры либо Shape Building Tool, либо эффектами обработки контуров.
<img src="{{ site.assets }}/img/blog/2019/12-24/illustrator-pathfinder.png" alt="Палитра «Обработка контуров»">
</li>
</ul>
<p>☝️🧐 Чтобы посмотреть на&nbsp;иллюстрацию без рамок монтажных областей их&nbsp;можно скрыть&nbsp;— ⇧⌘H</p>
<p>☝️🧐 Все необходимые свойства выделенного объекта можно изменить в&nbsp;панели свойств. В&nbsp;том числе&nbsp;— прозрачность и&nbsp;режимы наложения.</p>
<img src="{{ site.assets }}/img/blog/2019/12-24/illustrator-properties-opacity.png" alt="Панель свойств">
<p>Когда этого не&nbsp;достаточно, использовать дополнительные панели: «Оформление», «Градиент», «Символ» и&nbsp;т.д.</p>
<p><strong>В&nbsp;контурным рисунке применять инструмент сглаживания углов</strong>, клавиатурную и&nbsp;интерфейсную. конвертацию опорных точек.</p>
<img src="{{ site.assets }}/img/blog/2019/12-24/illustrator-rounding-corner.png" alt="Скругление углов контура">
<img src="{{ site.assets }}/img/blog/2019/12-24/illustrator-conver-anchors.png" alt="Кнопки смены типа опорных точек">
<p><strong>Перед экспортом в&nbsp;SVG оптимизировать контуры:</strong></p>
<ul>
<li>Object ➜ Merge Transparency</li>
<li>Object ➜ Path ➜ Clean Up</li>
<li>Object ➜ Path ➜ Simplify (осторожно!)</li>
</ul>
