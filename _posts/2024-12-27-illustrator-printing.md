---
title: <span class="eyebrow">Adobe Illustrator для веб-дизайнера</span> 13) Печать
description: 'Предпечатная подготовка в Adobe Illustrator — ключевой этап создания печатных материалов: работа с цветами, настройка выпусков за обрез и использование типографских меток.'
date: 2024-12-27
categories: Illustrator
---

{% include accordion/illustrator-toc.html %}

## Цветовые модели и их конвертация

![Цветовые модели](/assets/img/blog/2024/12-28/document-color-models.png)

Переключение режима между RGB и CMYK доступно через **File ➜ Document Color Mode ➜ RGB/CMYK**.

⚠️ **Важно.** Цветовая гамма CMYK более ограничена, и цвета будут выглядеть тусклее по сравнению с RGB.

Рекомендуется разрабатывать дизайн в RGB и переводить в CMYK перед финальной печатью. При конвертации вручную округляйте значения с десятичными дробями до целых процентов.

![Swatch Options](https://i.imgur.com/w5FGBbB.png)

## Плашечные и триадные цвета для цветной печати

См. [официальную справку Adobe](https://helpx.adobe.com/ru/indesign/using/spot-process-colors.html).

- **Триадные цвета (process colors):** Используют CMYK (голубой, пурпурный, желтый, черный). Применяются для полноцветной печати.
- **Плашечные цвета (spot colors):** Заранее смешанные краски, точные по цветопередаче. Используются для специфических цветов, которые сложно воспроизвести в CMYK, например, Pantone.

⚠️ **Совет:** Задавайте плашечные цвета из поддерживаемой типографией системы соответствия, например Pantone.

**Pantone в Illustrator:**
`Swatch Libraries ➜ Color Books ➜ PANTONE…`

![Color Books](https://i.imgur.com/4KHL0vk.png)

## Подбор плашечного цвета для замены триадному

- Выберите объект и откройте **Edit ➜ Edit Colors ➜ Recolor Artwork**.
- Перейдите в библиотеку цветов Pantone.

    ![Recolor Artwork](https://i.imgur.com/FpzhJHH.png)

- Для работы с прозрачностью:
  - Сначала переведите смешанные цвета в обычные.
  - Создайте мозаичное изображение (**Object ➜ Rasterize ➜ Create Object Mosaic**).

    ![Количество столбцов и строк в мозаике](https://i.imgur.com/ZrRJURd.png)

- Сформируйте новую палитру оттенков из созданной мозаики, удалив ненужные цвета.
- Раскрасьте объект через **Live Paint Bucket** и назначьте палитру.

    ![Live Paint Bucket](https://i.imgur.com/KmoVZXD.png)

- Выберите палитру и каталог Pantone для финальной работы.

## Подготовка иллюстраций к цветоделению

- Убедитесь, что документ в CMYK.
- Переведите маски в составные контуры, чтобы избежать артефактов.
- Включите **Window ➜ Separations Preview**. Отключите ненужные цвета.

👉 **Подробнее:** [Подготовка к цветоделению в Illustrator](https://helpx.adobe.com/ru/illustrator/using/printing-color-separations.html).

## Выпуск за обрез (bleed) и типографские метки

- Настройте выпуск через **Document Setup**:

    ![Document Setup](https://i.imgur.com/STQOEIw.png)

  - Укажите значение выпуска: стандартно 5 мм (3 мм для простых макетов).
  - Выровняйте фон по границам выпуска.

    ![Выравнивание по границам выпуска](https://i.imgur.com/SEnS13Y.png)

- Для печати в PDF или PostScript:

  - Настройте размер через вкладку **Media Size**.
  - Увеличьте ширину/высоту на 70–100 пунктов для меток.
  - Включите **All Printer's Marks** и настройте **Offset** (20–60 пунктов).

    ![Увеличить Offset](https://i.imgur.com/NP2d1rh.png)
