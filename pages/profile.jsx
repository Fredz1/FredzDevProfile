import {Container, Box, Unstable_Grid2 as Grid, Typography, Link} from '@mui/material'

import Image from 'next/image'

import Header from '../modules/TopMenu'
import Footer from '../modules/Footer'

import profilePic from '../public/assets/images/profilePic.jpg'

const textStyling = [
  
]

const Profile = () => {

  const whatsAppMessage = "https://wa.me/27761349290?text=I%20am%20interested%20in%20working%20with%20a%20you."

  return (
    <Container >
      <Header />
      <Grid container sx={{placeItems: 'center'}}> 

        <Grid xs={12} md={5}>
          <Container>
            <Image src={profilePic} alt='Profile Image' style={{objectFit: "contain", maxWidth:"100%"}} />
            <Link underline='none' href='tel:+27761349290'>
              <Typography variant='body1'>
                Number: 0761349290
              </Typography>
            </Link>
            <Link underline='none' href={whatsAppMessage} target='_blank'>
              <Typography variant='body1'>
                Whatsapp Me
              </Typography>
            </Link>

          </Container>
        </Grid> 

        <Grid xs={12} md={7}>
          <Typography variant='h3' >
            Bio
          </Typography>
          <Typography variant='body1' lineHeight={1.5}>
            Fred is a passionate full stack developer with a keen interest in creating innovative and user-centric web applications. With 6 years of experience in the field, Fred has honed a diverse skill set and a deep understanding of the intricacies of web development.
          </Typography>

          <Typography variant='body1' lineHeight={1.5}>
            Born with an innate curiosity for technology, Fred embarked on a journey to explore the world of programming. This initial fascination grew into a full-fledged career, as Fred dedicated countless hours to mastering the art of crafting elegant and efficient code.
          </Typography>

          <Typography variant='body1' lineHeight={1.5}>
            As a full stack developer, Fred possesses a wide range of technical expertise. Proficient in front-end development, Fred creates captivating user interfaces using HTML5, CSS3, and JavaScript, employing modern frameworks such as React.js and Angular.js to build dynamic and responsive applications. On the back-end, Fred excels in server-side programming languages like Node.js and Python, utilizing frameworks like Express.js and Django to develop powerful and scalable systems. With a strong command of SQL and NoSQL databases, Fred expertly designs and optimizes data structures for seamless information management.
          </Typography>
          
          <Typography variant='body1' lineHeight={1.5}>
            Throughout Freds career, they have had the privilege of working on various exciting projects that have challenged their skills and expanded their horizons. [Highlight a notable project you have worked on, showcasing your skills and achievements.] This experience has solidified Freds ability to collaborate effectively with clients and teams, employing agile methodologies to deliver exceptional results within strict deadlines.
          </Typography>

          <Typography variant='body1' lineHeight={1.5}>
            In addition to their technical prowess, Fred has been recognized for their dedication and commitment to their craft. [Mention any awards, certifications, or recognition you have received in your field.] This recognition serves as a testament to Freds drive for excellence and their ability to consistently surpass expectations.
          </Typography>
        </Grid>

      </Grid>
      <Footer />
    </Container>
  )
}

export default Profile
