// components
import Head from 'next/head'

//style
import '../Theme/taskApp.css'

//Theme
import FredzTheme from '../Theme/customTheme'
import '../Theme/global.css'

//Mui styles
import { CssBaseline } from '@mui/material'

const App = ( { Component, pageProps } ) => {

  return (
    <>
      <Head>
        <meta name='application-name' content='Fred Dev Portfolio' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Fred Dev Portfolio' />
        <meta name='description' content='Fred Dev Portfolio' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-config' content='/icons/browserconfig.xml' />
        <meta name='msapplication-TileColor' content='#2B5797' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#000000' />
        <link rel='apple-touch-icon' href='/icons/touch-icon-iphone.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/icons/touch-icon-ipad.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/icons/touch-icon-iphone-retina.png' />
        <link rel='apple-touch-icon' sizes='167x167' href='/icons/touch-icon-ipad-retina.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#5bbad5' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <meta name='twitter:card' content='summary' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Fredz Dev App' />
        <meta property='og:description' content='Fredz Dev App Showcase' />
        <meta property='og:site_name' content='Fredz Dev App' />
      </Head>
      <CssBaseline>
        <FredzTheme>
          <Component {...pageProps} />
        </FredzTheme>
      </CssBaseline>
    </>
  )
}

export default App