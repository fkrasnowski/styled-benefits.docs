---
title: Usage With Other Tools
name: other-tools
---

## babel-plugin-emotion

In order to use **_components as selectors_** in _Emotion_ you need to install **_*babel_plugin_emotion*_**. Interactive components works well as selectors too:

```jsx
const A = interactive(styled.a`
  color: pink;
  ...
`)

// That works fine 👍
const Wrapper = interactive(styled.div`
  ${A} {
    color: green;
  }
  ...
`)
```

## React Spring

**_Styled Benefits_** works fine with **_React Spring_**. Just keep the order of functions:

```jsx
const Animated = interactive(styled(animated.div)`
 ...
`)
```

## Framer Motion

Above rules applies to **_Framer Motion_**:

```jsx
const Motion = interactive(styled(motion.div)`
 ...
`)
```

## Linaria

_Styled Benefits_ won't work with [**_Linaria_**](https://github.com/callstack/linaria). Currently _Styled Benefits_ works only with styled-components / Emotion. It needs access to styled component object which is not present in [**_Linaria_**](https://github.com/callstack/linaria)
