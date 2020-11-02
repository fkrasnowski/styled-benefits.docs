---
name: interactions
title: Interactions
---

As you know _css_ includes events like `:hover`, `:active`, but there are very **limited** for making elements **interactive**. The `:hover` pseudoclass ataches styles when mouse pointer is over element. It works well on desktop but on **mobile** device its behavoir is rather unwanted sometimes even **terrible**. It stands out from the **_moblie first era_**.

## Interactive

**Interactions** are the **key** feature of _Styled Benefits_. They combine the **ease of use** of pseudoclasses with **predictability** and **advanced** **transition** support.

To make your component interactive:

1. `import` `interactive`:

   ```js
   import { interactive } from 'styled-benefits'
   ```

1. wrap your styled component with `interactive`:
   ```js
   const Box = interactive(styled.div`...`)
   ```
1. `import` and attach event as selector:

   ```js
   import { interactive, whileHold } from 'styled-benefits'
   ```

   ```jsx {6-8}
   const Box = interactive(styled.div`
     width: 100px;
     height: 100px;
     border-radius: 10px;
     background: #3f88c5;
     ${whileHold} {
       background: #ce646f;
     }
   `)
   ```

## Avaliable interactions

| Interaction       |  Trigered by  | When                                           |
| ----------------- | :-----------: | ---------------------------------------------- |
| `whileTap`        |     touch     | While element is being pressed                 |
| `whileMouseHold`  |     mouse     | While click and hold on element                |
| `whileMouseHover` |     mouse     | While pointer hovers over element              |
| `whileHold`       | mouse & touch | Composition of `whileTap` and `whileMouseHold` |
| `afterTap`        |     touch     | After `whileTap`                               |
| `afterMouseHover` |     mouse     | After `whileMouseHover`                        |
| `afterHold`       | mouse & touch | After `whileHold`                              |
| `afterClick`      | mouse & touch | After element is clicked                       |

:::info
`whileMouseHover` applies **only** on mouse events unlike css `:hover` which is emulated in touch devices
:::

## Examples

### `whileHold`

**Click/tap** and **hold** to apply changes

```jsx live
const Box = interactive(styled.div`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background: #3f88c5;
  transition: all 0.2s;
  ${whileHold} {
    background: #ce646f;
    transform: scale(0.9);
  }
`)

render(<Box />)
```

:::note
This:

```css
${whileHold} {...}
```

Is the same as:

```css
${whileMouseHold},
${whileTap} {
  ...
}
```

:::

### `afterHold`

`afterHold(duration?: number)`

`duration` - **time** in **seconds** for how long style will be applied after some action has finished.
Passing `duration` is **optional**. If not present it's `0.2` by **default**

```jsx live
const Box = interactive(styled.div`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background: #3f88c5;
  transition: all 0.2s;
  ${whileHold} {
    background: #ce646f;
    transform: scale(0.9);
  }
  ${afterHold} {
    transform: scale(1.4);
  }
`)

render(<Box />)
```

### `afterClick`

`afterClick` allows component to react to **clicks**

```jsx live
const spin = keyframes`
  50% { transform: scale(0.5) rotate(180deg) }
  100% { transform: scale(1) rotate(360deg) }
`

const Box = interactive(styled.div`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background: #3f88c5;
  ${afterClick(0.5)} {
    animation: ${spin} 0.5s;
  }
`)

render(<Box />)
```

:::tip
**after...** selectors are great for trigering **animations**. Just attach `keyframes` from **styled-componetns/Emotion** and adjust **duration**> The style is applied like in **example above**
:::

:::note credit
This **api** is inspired by [**_Framer Motion_**](https://www.framer.com/motion/) ❤
:::
