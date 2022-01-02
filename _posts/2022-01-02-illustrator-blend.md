---
title: <span class="eyebrow">Adobe Illustrator для веб-дизайнера</span> 9.5)&nbsp;Переходы (Blend)
description: В&nbsp;терминологии AI&nbsp;— это группа объектов, цветов или контуров, созданная и&nbsp;распределенная между двумя исходными объектами.
date: 2022-01-02
categories: Illustrator
---

{% include blog/illustrator.html %}

<p>Переходы цвета&nbsp;— это, по&nbsp;сути, градиенты по&nbsp;сложному контуру и&nbsp;внутренние тени.</p>
<figure><img src="{{ site.assets }}/img/blog/2022/01-02/01-blend.png" alt="Переходы в Illustrator"></figure>
<figure><img src="{{ site.assets }}/img/blog/2022/01-02/02-blend.png" alt="Переходы в Illustrator"></figure>

<p class="list-caption">Создаются:</p>
<ul>
<li>инструментом Blend&nbsp;— последовательно нажав каждый объект в&nbsp;любом месте, кроме опорных точек</li>
<li>или командой Object ➜ Blend ➜ Make.</li>
</ul>

<figure><img src="{{ site.assets }}/img/blog/2022/01-02/03-blend-tool.png" alt="Инструмент Blend"></figure>

<h2 class="main-subhead is-smaller">🔵 Настройки</h2>
<p>Диалог открывается, если выделить два исходных объекта и&nbsp;дважды кликнуть на&nbsp;инструменте.</p>
<figure><img src="{{ site.assets }}/img/blog/2022/01-02/04-blend-options.png" alt="Настройки перехода"></figure>

<p class="list-caption">Можно выбрать способ перехода:</p>
<ul>
<li>Smooth Color&nbsp;— Illustrator автоматически вычислит число шагов перехода.</li>
<li>Specified Steps&nbsp;— Заданное число шагов</li>
<li>Specified Distance&nbsp;— Заданное расстояние между шагами перехода.</li>
</ul>

<p class="list-caption">Также можно выбрать ориентацию:</p>
<ul>
<li>перпендикулярно контуру исходного объекта</li>
<li>
перпендикулярно оси&nbsp;Х страницы (см. рисунок).
<figure><img src="{{ site.assets }}/img/blog/2022/01-02/05-blend-orientation.png" alt="Изменение траектории перехода"></figure>
</li>
<li>
У&nbsp;переходов есть свои настройки прозрачности.
<figure><img src="{{ site.assets }}/img/blog/2022/01-02/06-blend-opacity.png" alt="Настройки прозрачности перехода"></figure>
</li>
<li>
Переходы можно делать последовательно через несколько объектов, чтобы контролировать направление перехода.
<figure><img src="{{ site.assets }}/img/blog/2022/01-02/07-edit-blend.png" alt="Переход через несколько объектов"></figure>
</li>
</ul>

<h2 class="main-subhead is-smaller">🔵 Изменение траектории переходов</h2>
<p>Чтобы отредактировать траекторию переходов, надо выделить группу белой стрелкой, выбрать перо, или инструмент кривизны и&nbsp;отредактировать вектор.</p>
<p>☝️🧐 Чем длиннее ручка опорной точки, тем больше расстояние между экземплярами по&nbsp;ее&nbsp;направлению.</p>
<figure><img src="{{ site.assets }}/img/blog/2022/01-02/08-edit-blend-path.png" alt="Изменение траектории перехода"></figure>
<p>Также можно направить переход по&nbsp;заранее подготовленному контуру.</p>

<ul>
<li>Выбрать начальный и&nbsp;конечный объекты и&nbsp;сделать переход: Object ➜ Blend ➜ Make. </li>
<li>Выбрать группу перехода и&nbsp;открыть настройки: Object ➜ Blend ➜ Blend options. Выбрать отступы: Specified Steps или Smooth Color. Выбрать ориентацию&nbsp;— в&nbsp;большинстве случаев подходит Align to&nbsp;Path.</li>
<li>На&nbsp;новом слое начертить контур траектории. Выбрать его и&nbsp;группу перехода и&nbsp;заменить траекторию: Object ➜ Blend ➜ Replace spine.</li>
<li>Перед экспортом разобрать группу перехода: Object ➜ Expand.</li>
</ul>
<p>Один из&nbsp;основных способов применения переходов&nbsp;— искривленные градиенты.</p>
<figure><img src="{{ site.assets }}/img/blog/2022/01-02/09-warp-blend.png" alt="Искривленные градиенты"></figure>

<h2 class="main-subhead is-smaller">🔵 Возможные ошибки</h2>
<p>Переходы осуществляются от&nbsp;опорной точке к&nbsp;опорной точке. И&nbsp;если количество точек разное, или один из&nbsp;исходных объектов отзеркален, шаги перехода могут искажаться.</p>
<p>В&nbsp;этом случае можно заменить второй объект, дублировав первый и&nbsp;отредактировав имеющиеся опорные точки.</p>
<p>Или экспериментировать с&nbsp;инструментом «Перехода»: первый клик в&nbsp;начальную опорную точку, второй клик&nbsp;— в&nbsp;ее&nbsp;двойника на&nbsp;втором объекте. Если не&nbsp;получается, менять направление, пробовать другие точки или сегменты.</p>
<figure><img src="{{ site.assets }}/img/blog/2022/01-02/10-blend-anchor-point.png" alt="Первый клик в начальную опорную точку"></figure>
<p>Иногда помогают изменения положения точек второго объекта&nbsp;— если их&nbsp;траектория прямая, без вращения, переход получается плавнее. Так, например, лучше получается squircle.</p>
<figure><img src="{{ site.assets }}/img/blog/2022/01-02/11-squircle.png" alt="Переход в квадрокружность"></figure>

<h2 class="main-subhead is-smaller">🔵 Эффекты трансформации</h2>
<p>К&nbsp;переходам можно применять эффекты трансформации&nbsp;— для создания фоновых узоров.</p>
<p>Distort &amp;&nbsp;Transform ➜ Tweak&nbsp;/ Zig Zag&nbsp;/ Roughen</p>
<figure><img src="{{ site.assets }}/img/blog/2022/01-02/12-blend-transform.png" alt="Применение к переходу эффекта трансформации"></figure>
