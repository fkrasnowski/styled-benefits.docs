---
title: Recomended Tools
name: recomended
---

## param.macro

[`param.macro`](https://github.com/citycide/param.macro) - this `babel` macro allows you to use shorter notation to write anonymous functions: `props => props.bg` becomes `it.bg`

Instead of writing:

```jsx
const Button = styled.button`
  background: ${props => props.bg};
  color: ${props => (props.mode === 'dark' ? 'black' : 'white')};
  padding: ${props => (props.size === 'big' ? '2rem' : '1rem')};
`
```

You can write:

```jsx
const Button = styled.button`
  background: ${it.bg};
  color: ${it.mode === 'dark' ? 'black' : 'white'};
  padding: ${it.size === 'big' ? '2rem' : '1rem'};
`
```

## Styled System

[Styled System](https://styled-system.com/) makes it easier to create component library. Check it [here](https://styled-system.com/).
