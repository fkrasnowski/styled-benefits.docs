import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_feeling_happy.svg',
    description: (
      <>
        <strong>Styled Benefits</strong> makes your component interactive with
        few lines and <strong>descriptive</strong> selectors
      </>
    ),
  },
  {
    title: 'Easy to Implement',
    imageUrl: 'img/undraw_true_love.svg',
    description: (
      <>
        <strong>Styled Benefits</strong> is designed to be smoothly integrated
        with your existing codebase
      </>
    ),
  },
  {
    title: 'True Power of css-in-js',
    imageUrl: 'img/undraw_Ride_till_I_can_no_more.svg',
    description: (
      <>
        <strong>Styled Benefits</strong> lets you unleash the dormant potential
        of css-in-js. It allows you to fulfill your desires with{' '}
        <strong>terse</strong> and <strong>concise</strong> syntax
      </>
    ),
  },
]

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className='text--center'>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Logo({ imageUrl, label }) {
  return (
    <div className='text--center'>
      <img className={styles.featureImage} src={imageUrl} alt={label} />
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description={siteConfig.tagline}
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className='container'>
          <Logo imageUrl='img/styled-benefits-logo.svg' />
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className='hero__subtitle'>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/start')}
            >
              Get Started 💅
            </Link>
          </div>
          <p className={styles.annotation}>
            Logo is modified image created by{' '}
            <a href='https://twitter.com/webalys'>Vincent Le Moign</a> as a part
            of <a href='https://www.streamlineicons.com/'>Streamline</a>.
            Licensed under{' '}
            <a href='https://creativecommons.org/licenses/by/4.0/deed.en'>
              (CC BY 4.0)
            </a>
          </p>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className='container'>
              <div className='row'>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Home
