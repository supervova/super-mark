# Email: надо еще поработать

TODO:

1) См. ~/Sites/michael-ravits/overtok/src/scss

2) Try to build other providers templates w/ Pug snippets
[Lee Munroe](https://github.com/leemunroe/responsive-html-email-template)
[MailChimp](https://github.com/mailchimp/email-blueprints/tree/master/responsive-templates)

Вложенность верстки Foundation — 15–19 уровней. MailChimp - 10-12
(даже в 3-колоночном макете). У MJML — 12–14. У Ли Манро — 10.

3) Сделать новый проект под это дело, перетащив туда только gulpfile
eslintrc, stylelintrc, папку sass и *.pug
Структуру сделать под стандартный проект:
src/
 emails/
   css # папка полуфабрикатов
   messages # сообщения с готовыми текстами
   pug # base и инклуды
   sass # стили
   snippets # сниппеты для добавления в VSC / ST
   templates # разметка с «рыбой» / переменными

4) Наделать снипетов и миксинов: col-lg-12, col-lg-6-6, col-lg-4-8,
col-lg-8-4, col-sm-1-3, col-sm-2-2, col-sm-3-1

5) Переделать стили под MailChimp — перенести всю типографику из
блоков селекторов-тегов td/th в блоки селекторы-классы
.{header, body, footer}Content (.{header, body, footer}-content)

6) Переделать стили сетки
[CSS Framework for Emails](https://github.com/Slicejack/bojler/tree/master/scss/objects)

7) Посмотреть, какие еще оставить в <head>, а какие перенести
в атрибуты style
[CSS Framework for Emails](https://github.com/Slicejack/bojler/tree/master/scss)

8) Добавить hero
[CSS Framework for Emails](https://github.com/Slicejack/bojler/tree/master/scss)

9) Utilize creds, aws, mail tasks из Foundation

10) Почитать и внедрить:
👉 Evernote ➜ #(UI Components): #Email

11) Play w/ [MJML](https://mjml.io/)
