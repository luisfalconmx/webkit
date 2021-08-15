import React from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import useCounter from '@hooks/useCounter'

const Home = () => {
  const { t, i18n } = useTranslation()
  const { counter, increase, decrement, reset } = useCounter()

  return (
    <>
      <Helmet>
        <title>This is title for home page</title>
      </Helmet>

      <h1>{t('home')}</h1>
      <br />
      <br />

      <button onClick={() => i18n.changeLanguage('en')}>English</button>
      <br />
      <button onClick={() => i18n.changeLanguage('es')}>Spanish</button>

      <br />
      <br />
      <br />
      <br />

      <div>{counter}</div>
      <button onClick={decrement}>-</button>
      <br />
      <button onClick={reset}>reset</button>
      <br />
      <button onClick={increase}>+</button>
      <br />
    </>
  )
}

export default Home
