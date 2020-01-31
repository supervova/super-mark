# Layout Outlines

## layouts/default.html

    .wrapper
      header.header
      {{ content }}
      {% unless page.home %} footer.footer
      nav.navbar
    #modal-search
    #modal

## Front

    .wrapper
      header.header
      main.intro.carousel
        article.carousel-inner
        aside.social-tools.dropdown
        nav.carousel-pager
      nav.navbar
    #modal-search
    #modal

## Page

    .wrapper
      header.header
      article.main
      footer.footer
      nav.navbar
    #modal-search
    #modal

## Post

    .wrapper
      header.header
      article.main
      footer.footer
      nav.navbar
    #modal-search
    #modal

## Blog index

    .wrapper
      header.header
      main.main
      footer.footer
      nav.navbar
    #modal-search
    #modal
