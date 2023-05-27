# Работа с конспектами по Иллюстратору

1. Скопировать конспект из Notes в Obsidian
2. Поправить markdown
3. Скачать все файлы с imgur в /src/img/blog — почему-то Jekyll отказывается показывать картинки с Imgur'а
4. Дублировать md-файл в /_posts. В названии файла заменить префикс на yyyy-mm-dd-illustrator-.
5. Заменить markdown-разметку картинок HTML

  ```html
  <figure><img src="{{ site.assets }}/img/blog/2023/mm-dd/**.png" alt=""></figure>
  ```

6. Добавить класс подзаголовкам.

```markdown
## Подзаголовок
{: .main-subhead .is-smaller }
```

