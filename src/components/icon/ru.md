# Using Icons

## Markup

```pug
svg.icon(aria-hidden='true' focusable='false')
  use(href='/assets/img/components/icon/sprite.svg#icon-name')
```

## Adapt SVG Favicon for dark mode

```html
<svg>
  <style>
    @media (prefers-color-scheme: dark) {
      :root {
        /* Make it brighter */
        filter: brightness(2);

        /* or invert it */
        filter: invert(100%);
      }
    }
  </style>

  <!-- more stuff -->
</svg>
```
