// component
import ContactHead from '../components/ContactHead'

// modules
import Head from 'next/head'

const contact = () => {
  return (
    <div>
      <Head>
        <title>
          Contact Me
        </title>
      </Head>
      <ContactHead />
    </div>
  )
}

export default contact