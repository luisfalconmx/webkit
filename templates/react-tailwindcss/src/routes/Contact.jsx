import React from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t, i18n } = useTranslation()

  return (
    <>
      <Helmet>
        <title>This is title for home page</title>
      </Helmet>

      <h1>{t('contact')}</h1>

      <button onClick={() => i18n.changeLanguage('en')}>English</button>
      <br />
      <button onClick={() => i18n.changeLanguage('es')}>Spanish</button>
    </>
  )
}

export default Contact
