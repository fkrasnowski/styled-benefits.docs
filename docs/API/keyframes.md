---
title: Controlling Animations
name: keyframes
---

_Styled Benfits_ makes trigering animations easy with **interactions**, however; it might not be enough and more controll is needed. _Styled Benfits_ wraps your **keyframes** and allows triggering animations in **declarative** way by exposing functions like `play`, `pause`, `seek`.

## How to?

1. `import`:

   ```js
   import { getKeyframes, useKeyframes } from 'styled-benefits'
   ```

1. Add `getKeyframes(name: string)` to interactive component:

   ```jsx
   const AnimatedBall = interactive(styled(Ball)`
     ${getKeyframes('bounce')}
   `)
   ```

1. Utilize `useKeyframes(keyframes, options)` hook:

   ```jsx
   const bounceAnimation = keyframes`...`

   export default ({ isBouncing }) => {
     const bounce = useKeyframes(bounceAnimation)

     useEffect(() => {
       if (isBouncing) bounce.loop()
       else bounce.pause()
     }, [isBouncing, bounce])

     return <AnimatedBall bounce={bounce} />
   }
   ```

## Play/Pause animation

```jsx live column
const moveAround = keyframes`
  25% { transform: translate3d(100px, 0px, 0) }
  50% { transform: translate3d(100px, 100px, 0) }
  75% { transform: translate3d(0px, 100px, 0) }
  100% { transform: translate3d(0px, 0px, 0) }
`
const Box = interactive(styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: #3f88c5;
  transition: all 0.5s;
  ${getKeyframes('move')};
`)

const Space = styled.div`
  width: 150px;
  height: 150px;
`

const MovingBox = () => {
  const move = useKeyframes(moveAround)
  return (
    <>
      <Space>
        <Box move={move} />
      </Space>
      <button onClick={move.play}>Play</button>
      <button onClick={move.pause}>Pause</button>
    </>
  )
}

render(<MovingBox />)
```

## Seek animation

```jsx live column
const fancy = keyframes`
from {
  transform: rotate(0deg) scale(1);
  background: #3f88c5;
  border-radius: 10px;
}
to {
  transform: rotate(300deg) scale(1.5);
  background: #ce646f;
  border-radius: 50px;
}
`

const Box = interactive(styled.div`
  width: 100px;
  height: 100px;
  background: #3f88c5;
  ${getKeyframes('fancy')}
`)

const FancyBox = () => {
  const cool = useKeyframes(fancy)
  const step = useRef(throttle(cool.seek, 15)).current
  return (
    <>
      <br />
      <Box fancy={cool} />
      <br />
      <br />
      <input type='range' onChange={e => step(e.target.value / 100)} />
    </>
  )
}

render(<FancyBox />)
```

:::caution
Be aware of using `seek` with **range sliders** or **scroll events**. Remember to wrap `seek` execution with `throttle` or `raf` handlers
:::

## Avaliable methods

| Name                | Action                                                                                 |
| ------------------- | -------------------------------------------------------------------------------------- |
| `.play`             | Starts animation                                                                       |
| `.pause`            | Pauses animation                                                                       |
| `.loop`             | Starts animation and repeats infinite times                                            |
| `.reverse`          | Plays animation with reversed direction                                                |
| `.loopReverse`      | Like `.loop` but with revesed direction                                                |
| `.replay`           | If animation's paused starts from begining                                             |
| `.seek(percentage)` | Jumps to specific percentage of animation _(`percentage` - `number` between 0 and 1 )_ |

### Options

Provide them as second argument to `useKeyframes(keyframes, *options*)`

| Name        | Type                                                                   | Corresponding `css` property |
| ----------- | ---------------------------------------------------------------------- | ---------------------------- |
| `repeat`    | `number`                                                               | `animation-iteration-count`  |
| `direction` | `string` ('normal' \| 'reverse' \| 'alternate' \| 'alternate-reverse') | `animation-direction`        |
| `duration`  | `number` - **seconds**; **default** - `5 `                             | `animation-duration`         |
| `delay`     | `number` - **seconds**                                                 | `animation-delay`            |
| `easing`    | `string` ('ease' \| 'linear' \| 'cubic-bezier()' \| ...)               | `animation-timing-function`  |

#### Example

```js
useKeyframes(raise, {
  repeat: 2,
  direction: 'alternate',
  duration: 1.5,
  delay: 0.2,
  easing: 'linear',
})
```
