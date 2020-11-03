---
id: variants
title: Variants
---

_Styled Benefits_ provides an extremely straight-forward way to define variants.
First `import` `variant`:

```js
import { variant } from 'styled-benefits'
```

Then use it as a normal `selector` in your styled component:

```jsx live
const Box = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background: #44bba4;
  ${variant('dark')} {
    background: #393e41;
  }
`
render(
  <>
    <Box />
    <Box variant='dark' />
  </>
)
```

_Variants_ work similarly to `:hover` or `@media` selectors if `variant` prop matches the function argument, corresponding style is selected.

## Style based on component props

_Styled Benefits_ includes more powerful tool to style components with properties. That is `withProps` function:

```js
import { withProps } from 'styled-benefits'
```

```jsx live column
const Input = styled.input`
  border-radius: 10px;
  border: none;
  background: #44bba4;
  ${withProps({ type: 'date' })} {
    background: #393e42;
  }
`

render(
  <>
    <Input />
    <br />
    <Input type='date' />
  </>
)
```

If you want to just check for the existence of the property, pass its name as a string:

```jsx live
const Button = styled.button`
  width: 100px;
  height: 40px;
  background: #3f88c5;
  ${withProps('primary')} {
    background: #e94f37;
  }
`
render(
  <>
    <Button>Regular</Button>
    <Button primary>Primary</Button>
  </>
)
```

You can check multiple props as well:

```jsx live
const Box = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background: #44bba4;
  ${withProps('blue')} {
    background: #3f88c5;
  }
  ${withProps('pink')} {
    background: #ce646f;
  }
  ${withProps('blue', 'pink')} {
    background: linear-gradient(#ce646f, #3f88c5);
  }
`
render(
  <>
    <Box blue />
    <Box pink />
    <Box blue pink />
  </>
)
```

## Alternatives

There are plenty of libraries that "_simplifies_" styling components via props. For example; popular [_Styled Map_](https://github.com/scf4/styled-map):

```jsx title=Styled_Map
const Box = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background: ${styledMap`
    dark: #393E41;
    light: #44BBA4;
  `};
`
```

It's pretty and has its use cases, but `withProps` from _Styled Benefits_ is more powerful tool.

If you're using [_Styled System_](https://styled-system.com/) it introduces its `variant`:

```jsx title=Styled_System
const Box = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  ${variant({
    variants: {
      dark: {
        bg: '#393E41',
      },
      light: {
        bg: '#44BBA4',
      },
    },
  })};
`
```

You can instantly see the difference between these approaches. `Styled System` is designed to work with style `objects`, while `Styled Benefits` works with `tagged template literals`:

```jsx title=Styled_Benefits_💗
const Box = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  ${variant('dark')} {
    background: #393e41;
  }
  ${variant('light')} {
    background: #44bba4;
  }
`
```
