import Head from 'next/head'

const _404 = () => {
  return (
    <div>
      <Head>
        <title>404</title>
      </Head>
      <div>Oops that doesnt exist</div>
      <p>_404</p>
    </div>
  )
}

export default _404