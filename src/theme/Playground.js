import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import * as benefits from 'styled-benefits'
import throttle from 'lodash.throttle'

import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

const scope = { React, ...React, styled, ...benefits, keyframes, throttle }

const Playground = ({ code, theme, noInline, styles, column }) => (
  <LiveProvider code={code} scope={scope} theme={theme} noInline={noInline}>
    <div className={styles.codeBlockWrapper}>
      <div className={styles.codeBlock}>
        <LiveEditor />
      </div>
    </div>
    <LiveError />
    <div
      className={
        column
          ? `${styles.previewWrapper} ${styles.column}`
          : styles.previewWrapper
      }
    >
      <LivePreview />
    </div>
  </LiveProvider>
)

export default Playground
