// components
import Head from 'next/head'
import Script from 'next/script'

// Google analytics utils
import * as gtag from '../util/googleTagManager'

// React Component Imports
import { useEffect } from "react"
import { useRouter } from "next/router"

//style
import '../Theme/taskApp.css'

//Theme
import FredzTheme from '../Theme/customTheme'
import '../Theme/global.css'

//Mui styles
import { CssBaseline } from '@mui/material'

import {UserContext} from '../contexts/userContext'

const App = ( { Component, pageProps } ) => {

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    }
  }, [router.events])

  return (
    <UserContext>
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

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id='ga4'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <CssBaseline>
        <FredzTheme>
          <Component {...pageProps} />
        </FredzTheme>
      </CssBaseline>
    </UserContext>
  )
}

export default App