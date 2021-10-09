---
title: '<span class="eyebrow">Adobe Illustrator для веб-дизайнера</span> 9)&nbsp;Векторная графика: техники рисунка'
description: В&nbsp;этих конспектах нет основ&nbsp;— рисования прямоуголников, овалов и&nbsp;т.&nbsp;п. Тут записано только&nbsp;то, что отличает Illustrator от&nbsp;других дизайнерских программ.
categories: Illustrator
date: 2021-03-06
---

{% include blog/illustrator.html %}

<ul>
  <li>⇧R&nbsp;— Деформация</li>
  <li>⌘D&nbsp;— Повтор дублирования с&nbsp;равными промежутками.</li>
</ul>
<p>Object ➜ Transform ➜ Transform Again</p>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;<a href="https://helpx.adobe.com/ru/illustrator/using/clipping-masks.html" target="_blank" rel="noopener noreferrer">Маски</a></h2>
<p class="list-caption">Нарисовать фигуру маски поверх маскируемого объекта и&nbsp;сделать одно из&nbsp;двух:</p>
<ul>
  <li>выбрать Object ➜ Clipping Mask ➜ Make (⌘7)</li>
  <li>нажать кнопку Make Mask в&nbsp;панели Transparency</li>
</ul>
<p class="list-caption">Или, только для маскируемых изображений:</p>
<ul>
  <li>нажать кнопку Make/Release Clipping Mask внизу панели слоев</li>
  <li>нажать кнопку Mask в&nbsp;контрольной панели.</li>
</ul>
<figure><img src="{{ site.assets }}/img/blog/2021/03-06/01-make-mask.png" alt="Кнопки маски" /></figure>
<p>Переключаться между маской и&nbsp;маскируемым изображением можно в&nbsp;палитре слоев или в&nbsp;контрольной панели.</p>
<figure><img src="{{ site.assets }}/img/blog/2021/03-06/02-clip-group.png" alt="Переключатель между маской и маскируемым изображением" /></figure>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;<a href="https://helpx.adobe.com/ru/illustrator/using/transparency-blending-modes.html#about_blending_modes" target="_blank" rel="noopener noreferrer">Режимы наложения</a></h2>
<p class="list-caption">Разбиты на&nbsp;5&nbsp;групп: затемнение, осветление, контраст, выворотка, HSL.</p>
<ul>
  <li>
    <strong>Затемнение</strong>. При наложении белого цвета изменений не&nbsp;происходит.
    <ul>
      <li><strong>Darken</strong> (замена темным). Те&nbsp;области верхнего слоя, которые темнее нижнего, сохраняются или усиливаются. Более светлые становятся прозрачными.</li>
      <li><strong>Multiply</strong> (умножение). Самый популярный режим наложения. Темнота подложки усиливает темными областями верхнего слоя.</li>
      <li><strong>Color Burn</strong> (затемнение основы). Максимально контрастное затемнение темных областей.</li>
    </ul>
  </li>
  <li>
    <strong>Осветление</strong>. При наложении черного цвета изменений не&nbsp;происходит.
    <ul>
      <li><strong>Lighten</strong> (замена светлым). Противоположность Darken. Светлые области верхнего слоя усиливаются, темные игнорируются.</li>
      <li><strong>Screen</strong> (осветление). Самый популярный режим осветления. Итоговый цвет всегда получается светлее. Эффект подобен проецированию на&nbsp;экран нескольких слайдов, один поверх другого.</li>
      <li><strong>Color Dodge</strong> (осветление основы). Цвет подложки становится светлее с&nbsp;учетом цвета верхнего слоя.</li>
    </ul>
  </li>
  <li>
    <strong>Контраст</strong>.
    <ul>
      <li><strong>Overlay</strong> (перекрытие). Самый популярный режим в&nbsp;группе. Совмещает в&nbsp;себе эффекты Screen и&nbsp;Multiply: светлое становится более светлым. Темное&nbsp;— более темным.</li>
      <li><strong>Soft Light</strong> (рассеянный свет). Эффект похож на&nbsp;освещение иллюстрации рассеянным источником света.</li>
      <li><strong>Hard Light</strong> (направленный свет). Эффект похож на&nbsp;освещение иллюстрации направленным источником света.</li>
    </ul>
  </li>
  <li>
    <strong>Выворотка</strong>.
    <ul>
      <li><strong>Difference</strong> (разница). Вычитает значение цвета подложки из&nbsp;цвета верхнего слоя или наоборот, в&nbsp;зависимости от&nbsp;того, какой из&nbsp;них ярче.</li>
      <li><strong>Exclusion</strong> (исключение). Режим аналогичен Difference, но&nbsp;менее контрастен.</li>
    </ul>
  </li>
  <li>
    <strong>HSL</strong>
    <ul>
      <li><strong>Hue</strong> (тон). Верхний слой меняет тон. Насыщенность и&nbsp;яркость такие&nbsp;же, как у&nbsp;подложки.</li>
      <li><strong>Saturation</strong> (насыщенность). Верхний слой меняет насыщенность. Тон и&nbsp;яркость такие&nbsp;же, как у&nbsp;подложки.</li>
      <li><strong>Color</strong> (цвет). Верхний слой меняет тон и&nbsp;насыщенность. Яркость такая&nbsp;же, как у&nbsp;подложки.</li>
      <li><strong>Luminosity</strong> (яркость). Верхний слой меняет яркость. Тон и&nbsp;насыщенность&nbsp;— такие&nbsp;же, как у&nbsp;подложки.</li>
    </ul>
  </li>
</ul>
<p>Примечание. Режимы «Разница», «Исключение», «Цветовой тон», «Насыщенность», «Цвет» и&nbsp;«Яркость» не&nbsp;применяются к&nbsp;плашечным цветам. В&nbsp;большинстве режимов наложения непрозрачный черный цвет скрывает нижний слой.</p>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Изоляция иллюстрации для редактирования</h2>
<p>Двойной клик на&nbsp;группу или контур изолирует ее&nbsp;от&nbsp;остальной графики.</p>
<p>Кроме того, в&nbsp;верхней панели есть кнопка изоляции.</p>
<figure><img src="{{ site.assets }}/img/blog/2021/03-06/03-isolate.png" alt="Кнопка изоляции" /></figure>
<p>Части составных контуров в&nbsp;изолированном режиме можно копировать, двигать и&nbsp;т.д. —&nbsp;так&nbsp;же, как в&nbsp;Sketch</p>
<figure><img src="{{ site.assets }}/img/blog/2021/03-06/04-isolation-mode.png" alt="Изолированный режим" /></figure>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Шаблонный слой&nbsp;— для срисовывания фотографий и&nbsp;эскизов.</h2>
<p>Шаблонный слой&nbsp;— это рабочий слой, который не&nbsp;попадает в&nbsp;экспортируемый файл и&nbsp;используется, главным образом, для фотографий или рисунков, которые нужно срисовать в&nbsp;векторном формате.</p>
<figure><img src="{{ site.assets }}/img/blog/2021/03-06/05-trace-image.png" alt="Шаблонный слой" /></figure>
<p class="list-caption">Чтобы сделать слой шаблонным, надо</p>
<ul>
  <li>дважды кликнуть в&nbsp;его строке в&nbsp;панели слоев</li>
  <li>в&nbsp;диалоге настроек выставить флаг Template</li>
  <li>в&nbsp;поле Dim images to&nbsp;указать желаемую степень прозрачности (50% по&nbsp;умолчанию, как правило, менять не&nbsp;нужно)</li>
</ul>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Инструмент сглаживания</h2>
<p>Помогает сгладить неудачно нарисованные плавные контуры. Надо провести по&nbsp;неудачному фрагменту&nbsp;— можно многократно, можно откатывая&nbsp;— добиваясь лучшего результата.</p>
<p>Инструмент может добавлять новые опорные точки, но&nbsp;результат, как правило, того стоит.</p>
<figure><img src="{{ site.assets }}/img/blog/2021/03-06/06-smooth-tool.png" alt="Инструмент сглаживания" /></figure>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;<a href="https://helpx.adobe.com/ru/illustrator/using/combining-objects.html#pathfinder" target="_blank" rel="noopener noreferrer">Обработка контуров: объединение и&nbsp;разделение объектов</a></h2>
<p>В&nbsp;первой строке палитры «Обработка контуров» (Pathfinder) собраны стандартные инструменты сочетания фигур:</p>
<ul>
  <li>Добавить к&nbsp;фигуре</li>
  <li>Вычесть из&nbsp;фигуры</li>
  <li>Область пересечения фигур</li>
  <li>Исключить область пересечения фигур.</li>
</ul>
<p>☝️🧐&nbsp;&nbsp;Чтобы результат получился редактируемым, следует нажать на&nbsp;одну из&nbsp;иконок с&nbsp;нажатым Alt’ом.</p>
<figure><img src="{{ site.assets }}/img/blog/2021/03-06/07-subtract.png" alt="Вычитание контура" /></figure>
<p>Во&nbsp;второй строке есть дополнительные инструменты, самый важный из&nbsp;которых&nbsp;— первый, Divide «Разделение». Он&nbsp;разделяет фигуры по&nbsp;контурам, сохранив все составные фрагменты.</p>
<figure><img src="{{ site.assets }}/img/blog/2021/03-06/08-divide.png" alt="Разделение" /></figure>
<figure><img src="{{ site.assets }}/img/blog/2021/03-06/09-divide.png" alt="Разделение" /></figure>
<p>Впрочем, того&nbsp;же самого можно сделать Shape Builder Tool.</p>
<p>
  ☝️🧐&nbsp;&nbsp;В&nbsp;меню палитры стоит выбрать полезные опции:<br />
  Remove Redundant Points и&nbsp;Divide and Outline Will Remove Unpainted Artwork
</p>
<figure><img src="{{ site.assets }}/img/blog/2021/03-06/10-pathfinder-options.png" alt="Меню палитры объединения контуров (Pathfinder)" /></figure>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Импорт изображений (⇧⌘P)</h2>
<ul>
  <li>
    Можно выбрать способ подключения: вложенный (полезен при совместной работе), ссылка (экономия на&nbsp;размере файла.)
    <figure><img src="{{ site.assets }}/img/blog/2021/03-06/11-place-image.png" alt="Можно выбрать способ подключения" /></figure>
  </li>
  <li>
    Выбрав изображение и&nbsp;кликнув по&nbsp;надписи Image или Linked File в&nbsp;левом углу контрольной панели, откроем панель изображений документа: как вложенных, там и&nbsp;связанных. В&nbsp;деталях связанного изображения можно кликнуть по&nbsp;пути к&nbsp;нему или иконке цепочки&nbsp;и, при необходимости заменить картинку.
    <figure><img src="{{ site.assets }}/img/blog/2021/03-06/12-linked-file.png" alt="Панель изображений" /></figure>
  </li>
  <li>
    <p>Кликнув, по&nbsp;иконке «стрелка и&nbsp;листок» в&nbsp;панели изображений перейдем к&nbsp;тому месту документа, где картинка используется.</p>
    <p>Кликнув по&nbsp;иконке редактирования, откроем картинку в&nbsp;Photoshop’е. Также можно выбрать Edit Original в&nbsp;контрольной панели.</p>
    <figure><img src="{{ site.assets }}/img/blog/2021/03-06/13-edit-original.png" alt="Edit Original" /></figure>
  </li>
  <li>
    Также панель изображений можно открыть, кликнув по&nbsp;иконке цепочки в&nbsp;панели свойств.
    <figure><img src="{{ site.assets }}/img/blog/2021/03-06/14-links.png" alt="Иконка цепочки" /></figure>
  </li>
</ul>
<figure><img src="{{ site.assets }}/img/blog/2021/03-06/0" alt="" /></figure>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;<a href="https://helpx.adobe.com/ru/illustrator/using/puppet-warp.html" target="_blank" rel="noopener noreferrer">Марионеточная деформация (Puppet tool)</a></h2>
<p>Позволяет изменять позы персонажей, как режиссеру кукольных мультфильмов.</p>
<p class="list-caption">☝️🧐&nbsp;&nbsp;Но&nbsp;поскольку редактирование приводит к&nbsp;созданию совершенно нового объекта, в&nbsp;веб-анимации применять нельзя&nbsp;— анимация получится покадровой, а&nbsp;значит, большого файлового размера. Для веб-анимации лучше рисовать подвижные части тела отдельными объектами и&nbsp;вращать и&nbsp;перемещать их&nbsp;в&nbsp;AI. Впрочем, Puppet tool можно использовать для планирования движений персонажа.</p>
<ul>
  <li>
    <p>Выбрать инструмент и&nbsp;расставить опорные точки (привязки)&nbsp;— те&nbsp;места в&nbsp;графике которые будут перемещаться и&nbsp;те, которые будут сохранять неподвижность. В&nbsp;рисунках людей и&nbsp;животных&nbsp;— это суставы конечностей, шея, поясница.</p>
    <figure><img src="{{ site.assets }}/img/blog/2021/03-06/15-puppet-wrap.png" alt="Марионеточная деформация" /></figure>
    <p>Помимо опорных точек вокруг фигуры появится полигональная сетка, отображающая карту возможных искривлений контура. Ее&nbsp;можно скрыть, убрав флаг в&nbsp;панели свойств.</p>
    <figure><img src="{{ site.assets }}/img/blog/2021/03-06/16-show-mesh.png" alt="Марионеточная деформация" /></figure>
  </li>
  <li>
    После расстановки точек, их&nbsp;можно передвигать, вращать вокруг них части фигуры.
    <figure><img src="{{ site.assets }}/img/blog/2021/03-06/17-puppet-wrap.png" alt="Марионеточная деформация" /></figure>
    <figure><img src="{{ site.assets }}/img/blog/2021/03-06/18-puppet-wrap.png" alt="Марионеточная деформация" /></figure>
  </li>
</ul>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Многократное дублирование с&nbsp;равными промежутками.</h2>
<p>Перетащить с&nbsp;alt’ом объект и&nbsp;тем самым дублировать его. Дублировать затем каждый новый объект с&nbsp;помощью ⌘D.</p>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Warp Tool (Деформация)&nbsp;— ⇧R.</h2>
<p>Предназначен для трансформации формы объекта, имитирующей «лепку». Визуально выглядит как смещения пальцем.</p>
<p>Выделите объект, который необходимо подвергнуть деформации и&nbsp;выберите Warp Tool в&nbsp;панели инструментов. Зажмите левую кнопку мыши, когда курсор находится рядом с&nbsp;выделенным объектом и&nbsp;проведите курсором по&nbsp;направлению к&nbsp;нему.</p>
<figure><img src="{{ site.assets }}/img/blog/2021/03-06/19-warp-tool.png" alt="Деформация" /></figure>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Инструмент «Мастер фигур» (Shaper Tool)</h2>
<figure><img src="{{ site.assets }}/img/blog/2021/03-06/20-shaper-tool.png" alt="«Мастер фигур»" /></figure>
<p>Позволяет рисовать линии, прямоугольники, многоугольники и&nbsp;окружности (в&nbsp;том числе&nbsp;— наклонённые на&nbsp;45º) с&nbsp;помощью мыши или с&nbsp;жестов на&nbsp;экране сенсорного устройства. Приблизительные эскизы превращаются в&nbsp;ровные динамические фигуры.</p>
<figure><img src="{{ site.assets }}/img/blog/2021/03-06/21-shaper-tool-freehand.png" alt="«Мастер фигур»" /></figure>
<ul>
  <li>
    Если рисовать многоугольник, он&nbsp;всегда будет гексагоном. Но&nbsp;количество узлов можно изменить, потянув за&nbsp;специальную ручку «мастером фигур».
    <figure><img src="{{ site.assets }}/img/blog/2021/03-06/22-shaper-tool-polygon.png" alt="«Мастер фигур»" /></figure>
  </li>
  <li>
    Чтобы соединить фигуры, можно мастером фигур нарисовать&nbsp;N или&nbsp;Z в&nbsp;области пересечения.
    <figure><img src="{{ site.assets }}/img/blog/2021/03-06/23-shaper-tool-combine.png" alt="«Мастер фигур»" /></figure>
  </li>
  <li>
    ￼ Составные части объединённой фигуры можно редактировать, если дважды кликнуть на&nbsp;ту&nbsp;часть, которую нужно поправить.
    <figure><img src="{{ site.assets }}/img/blog/2021/03-06/24-shaper-tool-edit-combined.png" alt="«Мастер фигур»" /></figure>
  </li>
  <li>Если начать рисовать зигзаг за&nbsp;границами фигуры, и&nbsp;продолжить на&nbsp;пересечении и&nbsp;фигура и&nbsp;область пересечения будут удалены.</li>
</ul>
<p>Если начать рисовать зигзаг за&nbsp;границами фигуры, и&nbsp;закончить, не&nbsp;залезая на&nbsp;пересечение, будет удалена только выступающая часть фигуры.</p>
