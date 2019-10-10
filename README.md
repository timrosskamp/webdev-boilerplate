# Boilerplate for Web Development Projects

## Settings

### Colors

Configuration:

```scss
$--colors: (
    'primary': (
        '0': rgb(0, 62, 107),
        '1': hsl(205, 67%, 45%),
        '2': #85c5f4
    ),
    'neutral': (
        
    ),
    'white': #fff
);
```

Usage:

```scss
.myclass {
    background: color('primary', 0);  // rgb(0, 62, 107)
    color: color('white');            // #fff
}
```

### Text Size

Configuration:

```scss
$--text-sizes: (
    "-2": 12px 18px,
    "-1": 14px 23px,
    "0":  16px 26px,
    "1":  18px 28px,
    "2":  20px 30px,
    "3":  24px 32px,
    "4":  30px 34px,
    "5":  36px 38px,
    "6":  48px 48px
);
```

Usage:

```scss
.myclass {
    @include text-size(0); // font-size: 16px; line-height: 26px;
    font-size: text-size(0); // 16px
    line-height: line-height(0); // 26px
}
```

### Breakpoints

Configuration:

```scss
$--breakpoints: (
    'xs': 480px,
    's':  668px,
    'm':  1024px,
    'l':  1280px,
    'xl': 1680px,
);
```

Usage:

```scss
.myclass {
    max-width: breakpoint('m');  // 1024px

    @include breakpoint('m'){  // @media(min-width: 1024px)
        color: red;
    }
    @include breakpoint('s', 'max'){  // @media(max-width: 480px)
        color: blue;
    }
}
```

### Spacing

Configuration:

```scss
$--spacing: (
    "-3": 4px,
    "-2": 8px,
    "-1": 12px,
    "0":  16px,
    "1":  24px,
    "2":  32px,
    "3":  48px,
    "4":  64px,
    "5":  96px,
    "6":  128px,
    "7":  192px,
    "8":  256px
);
```

Usage:

```scss
.myclass {
    padding: spacing(1);
}
```

### Interpolation

Usage:

```scss
.myclass {
    @include interpolate('font-size', 480px, 1280px, 24px, 46px);
}
```

### Z-Depth

Configuration:

```scss
$--z-depth: (
    "1": 0 3px 6px 0 rgba(0, 0, 0, 0.05),
    "2": 0 5px 10px 0 rgba(0, 0, 0, 0.07),
    "3": 0 7px 14px 0 rgba(0, 0, 0, 0.09),
    "4": 0 9px 18px 0 rgba(0, 0, 0, 0.11),
    "5": 0 11px 22px 0 rgba(0, 0, 0, 0.13),
    "6": 0 13px 26px 0 rgba(0, 0, 0, 0.15)
);
```

Usage:

```scss
.myclass {
    box-shadow: z-depth(2);
}
```

## Tools

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

**`inline-svg` function**

```scss
.myclass {
    background-image: inline-svg('<svg>...</svg>');
}
```