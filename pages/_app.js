// Style
import '../styles/globals.css'

// components
import Layout from '../layouts/Layout'
import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'
import * as gtag from '../scripts/googleTag'
import { useEffect } from 'react'
import maker from '../scripts/hashMaker'

const MyApp = ({Component, pageProps}) => {
  
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', gtag.pageview)
    return () => {
      router.events.off('routeChangeComplete', gtag.pageview)
    }
  }, [router.events])

  


  return (
    <Layout>
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
        <meta name='twitter:url' content='https://fredz-dev-profile.vercel.app/en' />
        <meta name='twitter:title' content='Fredz Dev PWA App' />
        <meta name='twitter:description' content='Fred Williams Developer Profile and Blog' />
        <meta name='twitter:image' content='https://fredz-dev-profile.vercel.app/enm/icons/android-chrome-192x192.png' />
        <meta name='twitter:creator' content='@Fredwil25' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Fredz Dev App' />
        <meta property='og:description' content='Fredz Dev App Showcase' />
        <meta property='og:site_name' content='Fredz Dev App' />
        <meta property='og:url' content='https://fredz-dev-profile.vercel.app/en' />
        <meta property='og:image' content='https://fredz-dev-profile.vercel.app/en/icons/apple-touch-icon.png' />
        
      </Head>
      
    

      
      <Component {...pageProps} />
      
    </Layout>
  )
}

export default MyApp