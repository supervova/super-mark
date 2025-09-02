---
title: <span class="eyebrow">Adobe Illustrator для веб-дизайнера</span> 8)&nbsp;Текст
description: Вначале было про контуры и&nbsp;заливки, а&nbsp;потом было слово.
categories: Illustrator
date: 2021-01-30
---

{% include accordion/illustrator-toc.html %}


<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Форматирование</h2>
<p>Панели «Символ» и&nbsp;«Абзац» доступны из&nbsp;верхней панели свойств.</p>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/01-type-palette.png" alt="Панель «Символ»"></figure>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/02-paragraph-palette.png" alt="Панель «Абзац»"></figure>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Вставить текст из&nbsp;текстового файла</h2>
<p class="list-caption">File ➜ Place (⇧⌘P)</p>
<ul>
  <li>Выбрать файл на&nbsp;диске.</li>
  <li>В&nbsp;диалоге настроек форматирования расставить флаги нужных опций.</li>
  <li>Очертить курсором место для текстового блока (например, колонку в&nbsp;сетке направляющих).</li>
  <li>Отпустить кнопку мыши.</li>
</ul>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/03-margins.png" alt="Вставить текст из текстового файла"></figure>
<p>☝️🧐&nbsp;&nbsp;Для возможности растягивать текстовые блоки, должна быть включена ограничительная рамка: View ➜ Show Bounding Box (⇧⌘B)</p>
<p>Если в&nbsp;правом нижнем углу ограничительной рамки есть квадрат с&nbsp;плюсом, это значит, что весь текст не&nbsp;поместился в&nbsp;отведенную область.</p>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/04-resizing-bounding-box.png" alt="Весь текст не поместился в отведенную область"></figure>
<p>Для переноса продолжения/окончания в&nbsp;другое место, надо щелкнуть мышью по&nbsp;плюсу, и&nbsp;очертить новое место на&nbsp;том&nbsp;же или другом artboard’е.</p>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Автоматическое разделение текстового блока на&nbsp;колонки</h2>
<ul>
  <li>Выделить текстовой блок.</li>
  <li>Type ➜ Area Type Options.</li>
  <li>Настроить ширину колонок и&nbsp;пробел. </li>
</ul>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/05-columns.png" alt="Автоматическое разделение текстового блока на колонки"></figure>
<p>☝️🧐&nbsp;&nbsp;Панель Area Type Options можно использовать и&nbsp;настройки ширины-высоты обычных, одноколонных текстовых блоков.</p>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;«Текст из&nbsp;точки» и&nbsp;текстовая область (параграф)</h2>
<p>Если кликнуть текстовым инструментов в&nbsp;монтажную область и&nbsp;начать вводить, получится «текст из&nbsp;точки».</p>
<p>Этот формат наиболее удобен для работы с&nbsp;однострочными текстовыми блоками. Но&nbsp;растягивание его ограничительной рамки приведет к&nbsp;искажению символов.</p>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/06-point-type-resizing.png" alt="Текст из точки"></figure>
<p>Чтобы создать текстовую область, надо очертить ее&nbsp;текстовым инструментом.</p>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/07-area-type.png" alt="Создание текстовой области"></figure>
<p>Конвертировать строчный текст в&nbsp;параграф и&nbsp;обратно можно командами<br>
  Type ➜ Convert to&nbsp;Point Type&nbsp;/ Convert to&nbsp;Area Type или дважды кликнуть по&nbsp;горизонтальной ручке ограничительной рамки</p>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/08-convert-to-point-type.png" alt="Конвертировать строчный текст в параграф и обратно"></figure>
<p>Если дважды кликнуть по&nbsp;нижней ручке текстовой области, она уменьшится до&nbsp;размеров текста.</p>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/09-area-type-resizing.png" alt="Двойной клик по ручке текстовой области"></figure>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Стили параграфа</h2>
<ul>
  <li>Настроить размер шрифта, интерлиньяж, цвет и&nbsp;т.&nbsp;д.</li>
  <li>Открыть панели «Стиль параграфа».</li>
  <li>Нажать на&nbsp;значок нового стиля внизу панели, удерживая ⌥.</li>
  <li>Назвать новый стиль значащим именем.<br>
  </li>
</ul>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/10-paragraph-styles.png" alt="Стили параграфа"></figure>
<p>Если после назначения стиля, оформление параграфа менялось, напротив имени стиля в&nbsp;палитре появится знак плюс. Он&nbsp;сигнализирует о&nbsp;наличии локальных изменений. Чтобы отказаться от&nbsp;локальных изменений надо выбрать соответствующий параграф и&nbsp;кликнуть на&nbsp;имени стиля с&nbsp;нажатым ⌥</p>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/11-style-changed.png" alt="Оформление параграфа поменялось"></figure>
<p>Чтобы переопределить стиль, надо выбрать несколько символов или весь параграф с&nbsp;измененным стилем, и&nbsp;в&nbsp;меню палитры выбрать Redefine Paragraph Style</p>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/12-redefine-paragraph-style.png" alt="Переопределить стиль параграфа"></figure>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Текст вдоль контура</h2>
<ul>
  <li> Выбрать инструмент Type on&nbsp;Path.
    <figure><img src="{{ site.assets }}/img/blog/2021/01-30/13-type-on-path.png" alt="Инструмент Type on Path"></figure>
  </li>
  <li>Навести курсор на&nbsp;нужный контур.</li>
  <li>Курсор изменится, сигнализируя об&nbsp;особом режиме ввода текста</li>
</ul>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/14-type-on-path.png" alt="Курсор ввода текста по контуру"></figure>
<p>☝️🧐&nbsp;&nbsp;Чтобы написать что-то сверху окружности, нужно нажать курсором на&nbsp;ее&nbsp;нижнюю точку, а&nbsp;тексту назначить выключку по&nbsp;центру.</p>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/15-type-on-path.png" alt="Набор текст сверху окружности"></figure>
<ul>
  <li>Ввести текст.</li>
  <li>Выбрать текст и&nbsp;контур черной стрелкой.</li>
  <li>Появятся ручки (перпендикулярные линии) выравнивания.</li>
  <li>Перетягивая центральную, можно выравнять текст по&nbsp;контуру или переместить его на&nbsp;противоположную сторону контура (в&nbsp;примере&nbsp;— внутрь овала).</li>
  <li> Правой и&nbsp;левой ручкой тоже растянуть строку по&nbsp;контуру, чтобы вместить больше символов и&nbsp;точнее выровнять.
    <figure><img src="{{ site.assets }}/img/blog/2021/01-30/16-type-on-path.png" alt="Выравнивание текста на контуре ручками"></figure>
  </li>
  <li>Перетягивая перпендикуляр под знаком плюса справа надписи, можно увеличить длину строки.</li>
  <li>Чтобы изменить положение строки относительно контура (например, перенести текст внутрь круга), надо открыть настройки.</li>
</ul>
<p>Type ➜ Type on&nbsp;a&nbsp;Path ➜ Type on&nbsp;a&nbsp;Path Options...</p>
<p>Затем выбрать нужную опцию в&nbsp;Align to&nbsp;Path</p>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/17-type-on-path-options.png" alt="Align to Path"></figure>
<p>Настроить смещение базовой линии.</p>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/18-baseline-shift.png" alt="Смещение базовой линии"></figure>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Фильтр шрифтов по&nbsp;начертанию</h2>
<p>Если в&nbsp;комбобоксе ввести ключевые слова того или иного начертания, список будет соответствующим образом отфильтрован</p>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/19-filter-by-weight.png" alt="Фильтр шрифтов по начертанию"></figure>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Умная пунктуация</h2>
<p>Чтобы кавычки в&nbsp;тексте автоматически заменялись на&nbsp;типографские (ёлочки в&nbsp;русском языке), надо открыть настройки документа, перейти во&nbsp;вкладку Type, поставить флаг Use Typographer’s Quotes, выбрать язык и&nbsp;тип кавычек</p>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/20-document-setup.png" alt="Настройки документа"></figure>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/21-document-setup.png" alt="Настройки документа"></figure>
<p>Чтобы заменить существующие кавычки, тире и&nbsp;пунктуационные пробелы, включить лигатуры, надо открыть диалог Type ➜ Smart Punctuation, выбрать нужные опции и&nbsp;запустить поиск-замену.</p>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/22-smart-punctuation.png" alt="Умная пунктуация"></figure>
<p>Если что-то не&nbsp;было заменено автоматически, можно заменить вручную.</p>
<p>Edit ➜ Find and Replace</p>
<p>В&nbsp;меню @ можно выбрать специальный символ, который нужно найти или которым нужно заменить.</p>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/23-find-replace.png" alt="Поиск и замена"></figure>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Обтекание текстом</h2>
<p>Выделить объект&nbsp;— буквицу, иллюстрацию<br>
  (☝️🧐&nbsp;&nbsp;они должны быть на&nbsp;одном слое с&nbsp;текстом)<br>
  Object ➜ Text Wrap ➜ {Make, Release, Text Wrap Options}</p>
<p>Для обтекания текстом, как правило, используются ноль-объекты&nbsp;— фигуры без заливки и&nbsp;обводки. Их&nbsp;можно редактировать, не&nbsp;трогая графику, вокруг которой создается обтекание.</p>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/24-text-wrap.png" alt="Обтекание текстом"></figure>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Настройка переносов</h2>
<p>Для автоматической компоновки переносов в&nbsp;большом тексте лучше подходит опция Adobe Every-line Composer. Но&nbsp;опции компоновки действуют только на&nbsp;выделенные абзацы, так что если требуется ручная подгонка какого-то фрагмента можно выбрать и&nbsp;Adobe Single-line Composer</p>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/25-hyphenation.png" alt="Настройка переносов"></figure>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/26-hyphenation.png" alt="Настройка переносов"></figure>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Разгонка заголовка по&nbsp;ширине текстовой области</h2>
<p>Кликнуть текстовым инструментом в&nbsp;блоке заголовка<br>
  Type ➜ Fit Headline</p>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Выгонка и&nbsp;вгонка висячих <a href="https://ru.wikipedia.org/wiki/Висячая_строка" target="_blank" rel="noopener noreferrer">(блядских)</a> строк</h2>
<p>Чтобы втянуть предлог/союз/частицу на&nbsp;строку используют неразрывный пробел. Надо выделить две части речи и&nbsp;выбрать No&nbsp;Break в&nbsp;меню палитры символов.</p>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/27-no-break.png" alt="Выгонка и вгонка блядских строк"></figure>
<p>Для втягивания висячей строки можно редактировать текст, если на&nbsp;это есть права.</p>
<p>Или увеличивать/уменьшать межсловные и&nbsp;межбуквенные интервалы в&nbsp;абзаце, или интерлиньяж в&nbsp;колонке. Но&nbsp;это уже крайняя и&nbsp;нежелательная мера.</p>
<p>Можно увеличить предыдущую полосу на&nbsp;одну строку или уменьшить текущую полосу на&nbsp;одну строку.</p>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Специальные символы</h2>
<p>Специальные символы, содержащиеся в&nbsp;выбранном шрифте можно найти в&nbsp;палитре «Глифы»<br>
  Type ➜ Glyphs</p>
<p>В&nbsp;ячейках с&nbsp;треугольником в&nbsp;нижнем правом углу содержатся варианты символа&nbsp;— в&nbsp;основном, капитель (small caps), верхний (22) и&nbsp;нижний индексы.</p>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/28-glyphs.png" alt="Специальные символы"></figure>
<p>В&nbsp;фильтре Show можно выбрать разные группы символов. Например, орнамент</p>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/29-glyphs-filter.png" alt="Фильтр специальных символов."></figure>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Перевод текста в&nbsp;кривые</h2>
<p>Type ➜ Create Outlines&nbsp;— ⇧⌘O</p>
<p>☝️🧐&nbsp;&nbsp;В&nbsp;отличие от&nbsp;Photoshop’а исходный текст не&nbsp;сохраняется. Illustrator переводит шрифт в&nbsp;фигуры с&nbsp;заливкой.</p>
<p>👍&nbsp;&nbsp;Полученный контур надписи, можно выровнять по&nbsp;пиксельной сетке. Сначала с&nbsp;помощью кнопки на&nbsp;Align Selected Art To&nbsp;Pixel Grid панели управления или команды Object ➜ Make Pixel Perfect. Затем, по&nbsp;мере необходимости можно поправить контур вручную.</p>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/30-align-selected-art-to-pixel-grid.png" alt="Align Selected Art To Pixel Grid"></figure>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/31-text-outline-editing.png" alt="Перевод текста в кривые и выравнивание по пиксельной сетке"></figure>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/32-text-outline-editing.png" alt="Перевод текста в кривые и выравнивание по пиксельной сетке"></figure>
<p>☝️🧐&nbsp;&nbsp;Однако попытки выровнять по&nbsp;пиксельной сетке мелкие надписи приводят к&nbsp;нежелательным результатам.</p>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/33-text-outline-editing-issues.png" alt="Искажения после выравнивания по пиксельной сетке"></figure>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Скругление углов кривых текста</h2>
<p>Скруглять надо не&nbsp;ручками скругления&nbsp;— так не&nbsp;получится скруглить сразу все углы, потому что их&nbsp;характер разный.</p>
<p>Правильный вариант&nbsp;— ввести радиус в&nbsp;верхней панели.</p>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/34-rounded-corners.png" alt="Скругление углов кривых текста"></figure>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Масштабирование, вращение и&nbsp;смещение букв по&nbsp;одной</h2>
<p>Не&nbsp;нужно разбивать строку на&nbsp;символы. Для этих целей создан инструмент Touch Type</p>
<figure><img src="{{ site.assets }}/img/blog/2021/01-30/35-type-tool.png" alt="Масштабирование, вращение и смещение букв по одной"></figure>

<h2 class="main-subhead is-smaller">🔵&nbsp;&nbsp;Горячие клавиши</h2>
<p>⇧⌘.&nbsp;/ ⇧⌘, – Увеличить&nbsp;/ уменьшить кегль</p>
