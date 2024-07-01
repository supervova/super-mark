# Логотип

Торговая марка / торговый знак компании или проекта собирается из:

- фирменного знака (`.logo__mark`)
- логотипа  (`.logo__type`) — шрифтового начертания названия
- тэглайна (`.logo__tagline`) — слогана или описания деятельности компании в двух-трех словах.

Фирменный знак и логотип реализуются в виде адаптивных изображений:

- png — для экранов стандартного разрешения
- и svg — для экранов повышенной плотности пикселей.

Выбор форматов обусловлен неудовлетворительным отображением SVG на стандартных экранах в браузерах Chromium: Chrome, Opera, Yandex. Png-картинки на них выглядят нормально, а векторная графика — без полутонового сглаживания. На Retin'е и аналогах проблема исчезает, поэтому им передается SVG — один и тот же файл одинаково хорошо смотрится и при 2-кратной и при 3-кратной плотности.

## Разметка

```pug
a.header__logo.logo(href='/' aria-label='Company Name - Homepage')
  img.logo__mark(
    src='/img/components/logo/logomark.png'
    srcset='/img/components/logo/logomark.png, /img/components/logo/logomark.svg 2x'
    width='48'
    height='48'
    alt='Company Name — Logomark'
  )
  figure.logo__hgroup
    picture.logo__type
      source(
        srcset='/img/components/logo/logotype-compact.png, /img/components/logo/logotype-compact.svg 2x'
        media='(max-width: 767px)'
      )
      source(
        srcset='/img/components/logo/logotype-md.png, /img/components/logo/logotype-md.svg 2x'
        media='(min-width: 768px) and (max-width: 1023px)'
      )
      source(
        srcset='/img/components/logo/logotype.png, /img/components/logo/logotype.svg 2x'
        media='(min-width: 1024px)'
      )
      img(src='/img/components/logo/logotype.svg' width='198' height='26' alt='Company Name — Logotype')
    figcaption.logo__tagline
      What the company does?
```
