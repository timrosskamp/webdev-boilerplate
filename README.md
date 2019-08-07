# Boilerplate for Web Development Projects

## Sass Extensions

**`svg` function**

```scss
.myclass {
    background-image: svg('file.svg', (
        path: (
            fill: color('primary')
        )
    )):
}
```