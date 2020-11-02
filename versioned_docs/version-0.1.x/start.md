---
title: Getting Started
name: start
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Motivation

If you're using styled-compoents/Emotion you probably wonder how to make your components more **interactive** and **scalable**? How to handle multiple variants and transitions? Mentioned libraries cares only how to attach **css** to _React_ components and that's all. The only **intuitive** way of making transitions is `:hover`, `:active` selector. You can write **complex** logic to handle some touch events/keyframes and/or utilize **animation** library like _React Motion_. But then you end up with your style **fragmented** between those libraries...

And that's where **_Styled Benefits_** comes in. With its **intuitive API**. You can handle complex transitions right in your `styled` `css` tag, keeping the performance of **css transitions** and **keyframes**, using css like **declarative** way to handle **variants**, and just be happy and productive again 😍

## Try It!

The **documentation** is full of **live code examples**. Change some lines in the code below:

```jsx live
const Benefits = styled.img`
  width: 100px;
`

const Container = interactive(styled.div`
  width: 200px;
  height: 150px;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  ${whileHold} {
    background: black;
    img {
      filter: drop-shadow(16px 16px 20px red) invert(90%);
    }
  }
  ${whileMouseHover} {
    transform: scale(1.2);
  }
`)

render(
  <Container>
    <Benefits src='/static/img/styled-benefits-logo.svg' alt='Logo' />
  </Container>
)
```

## Installation

<Tabs
defaultValue="npm"
values={[
{label: 'NPM', value: 'npm'},
{label: 'Yarn', value: 'yarn'},
]}>
<TabItem value="npm">

```sh
npm i --save styled-benefits
```

</TabItem>
<TabItem value="yarn">

```sh
yarn add styled-benefits
```

</TabItem>
</Tabs>

:::note
It has no **peer** dependencies
:::
