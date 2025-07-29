# Рабочие заметки

## 👨🏻‍💻

☝️🧐 The combination of Jekyll built-in server + gulp watchers + Chrome Live Reload Extension is much more faster than the 'gulp only' process. And the first workflow allows us to use extension-free links. But for some reason, the watchFiles() does not work in the `serve` series. Therefore, I launch two processes in parallel:

```sh
gulp dev
```

### Deploy

```sh
gulp --p
zsh deploy.sh
```

## To do

- [ ] [Переделать 01-boilerplate](~/Sites/01-boilerplate/web/notes.md)

## Может быть

- [ ] Гостевая книга

- [ ] Блог ➜ Дельные советы - Топ-20
- [ ] Блог ➜ Дельные советы - Страница поста
- [ ] Блог ➜ Дельные советы - Лента (остальные) с постраничной навигацией
- [ ] Блог ➜ Дельные советы - Выборка по тегу (шаблон категорий)

### Блог – Дельные советы: топ-20

```pug
h1.visual-hidden Blog

ol.feed
  li
    article
      details
        summary: h2 Lorem ipsum dolor sit
        .feed__item-body
          p amet consectetur adipisicing elit.
        .feed__item-footer
          //- Голосовалка
          a.link.is-tag(href='/path/to/tag' rel='tag' data-role='copy-link') Успешность
          a.link.is-comment(href='/path/to/guest-book' data-role='comment-on-guest-book') Комментировать в гостевой книге
          details.popover
            summary Поделиться
            ul.popover_body
              li: a.link.is-share(href='/path/to/single-article-page' data-role='copy-link') Скопировать ссылки
              li: a.link.is-telegram(href='/path/to/share-via-telegram' data-role='share') Поделиться в Телеграме
              //- etc
```
