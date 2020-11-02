/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'
import siteConfig from '@generated/docusaurus.config'
//import prism renderer
import Prism from 'prism-react-renderer/prism'

const prismIncludeLanguages = PrismObject => {
  if (ExecutionEnvironment.canUseDOM) {
    const {
      themeConfig: { prism: { additionalLanguages = [] } = {} },
    } = siteConfig
    // window.Prism = PrismObject

    // additionalLanguages.forEach(lang => {
    //   require(`prismjs/components/prism-${lang}`) // eslint-disable-line
    // })

    // delete window.Prism

    // Add styled-components highlighting:

    Prism.languages.insertBefore('jsx', 'template-string', {
      'styled-template-string': {
        pattern: /(styled(\.\w+|\([^\)]*\))(\.\w+(\([^\)]*\))*)*|css|injectGlobal|createGlobalStyle|keyframes|\.extend|\.withComponent)`(?:\$\{[^}]+\}|\\\\|\\?[^\\])*?`/,
        lookbehind: true,
        greedy: true,
        inside: {
          interpolation: {
            pattern: /\${[^}]+}/,
            inside: {
              'interpolation-punctuation': {
                pattern: /^\${|}$/,
                alias: 'punctuation',
              },
              rest: Prism.languages.jsx,
            },
          },
          string: {
            pattern: /[\s\S]+/,
            // pattern: /.*/,
            inside: Prism.languages.css,
            alias: 'language-css',
          },
        },
      },
    })
  }
}

export default prismIncludeLanguages
