export const GTM_ID = process.env.GA_TRACKING_ANALYTICS

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}