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
      <meta name="description" content="Contact details of Fred Williams" />
      <meta name="keywords" content="Developer, Profile, FullStack Web Development, Contact" />
      <meta name="author" content="Frederick Williams" />
    </Head> 

      <ContactHead />
    </div>
  )
}

export default contact