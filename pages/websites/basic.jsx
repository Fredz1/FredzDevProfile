import { Container, Unstable_Grid2 as Grid, Typography } from "@mui/material"

import Image from 'next/image'

import smallProject from '../../public/assets/project/smallProject.jpg'


import Footer from '../../modules/Footer'
import TopMenu from '../../modules/TopMenu'

const Basic = () => {
  return (
    <Container>
      <TopMenu />
        {/* Top Container */}
        <Grid container>
          {/* image here */}
          <Grid md={6} px={2}>
            <Image priority src={ smallProject } alt="sample image" style={{objectFit: "contain", maxWidth: '100%', height: 'min-content' }}/> 
          </Grid>
          <Grid md={6}>
            <Typography variant="h5" textAlign='center' borderTop='1px solid black' borderBottom='1px solid black'>
              Basic Website
            </Typography>
            <Typography variant="body1" m={2}>
              {/* Describe website */}
              If you are a small business or individual looking to establish an online presence and provide relevant information about your services or products, then a Small Basic Website is an ideal choice. These websites, also known as one-pagers or landing pages, are designed to offer a simple and straightforward representation of your business or services. With a minimalistic design, concise text, and high-quality visuals, visitors can easily understand the purpose and offerings of your business. Check out the full package description below to learn more about how a Small Basic Website can benefit you.
            </Typography>
            <Typography variant="h5" textAlign='center' borderTop='1px solid black' borderBottom='1px solid black'>
              R2500 - R5000
            </Typography>
          </Grid>

          <Grid md={12} m={2} > 

            <Typography variant="body1">
              <strong>Responsive Design:</strong> A basic website is designed to be responsive, meaning it adjusts and adapts its layout and content to provide an optimal viewing experience across different devices and screen sizes, including desktops, tablets, and mobile phones.
            </Typography>
            
            <Typography variant="body1">
              <strong>Home Page:</strong> The home page serves as the main entry point to your website, providing an overview of your business, organization, or personal brand. It often includes a logo, navigation menu, introductory text or visuals, and highlights key sections or services.
            </Typography>

            <Typography variant="body1">
              <strong>Navigation Menu:</strong> A navigation menu is typically included in the header or sidebar of the website. It allows visitors to easily navigate between different pages or sections of the site, making it convenient to explore and access the content they are interested in.
            </Typography>

            <Typography variant="body1">
              <strong>About Us/About Me:</strong> This section provides information about your business, organization, or yourself. It may include details about your background, mission, values, and achievements, helping visitors gain a better understanding of your identity and purpose.
            </Typography>

            <Typography variant="body1">
              <strong>Services/Products:</strong> If applicable, a basic website often features a page dedicated to showcasing the services or products you offer. This section provides descriptions, images, pricing, and any other relevant details to inform visitors about what you provide.
            </Typography>

            <Typography variant="body1">
              <strong>Contact Page:</strong>  A contact page enables visitors to get in touch with you. It typically includes a contact form, your email address, phone number, and/or physical address. This feature allows users to ask questions, make inquiries, or provide feedback.
            </Typography>

            <Typography variant="body1">
              <strong>Social Media Integration:</strong>  Basic websites often integrate social media links or widgets to promote your presence on various social media platforms. This feature helps visitors connect with you on social media and expands your online reach.
            </Typography>

            <Typography variant="body1">
              <strong>Blog/News Section:</strong>  Depending on your needs, a basic website may include a blog or news section. This allows you to regularly publish articles, updates, or announcements to engage with your audience, share valuable content, and establish thought leadership.
            </Typography>

            <Typography variant="body1">
              <strong>Media Integration:</strong>  Websites often include the integration of media elements such as images, videos, or audio files. These media elements can be used to enhance the visual appeal, provide demonstrations, or deliver engaging content.
            </Typography>

            <Typography variant="body1">
              <strong>Basic SEO:</strong>  Basic search engine optimization (SEO) practices are usually implemented to ensure that your website can be found and ranked favorably by search engines. This may involve optimizing page titles, meta descriptions, headings, and URL structures, as well as incorporating relevant keywords.
            </Typography>
                  
          </Grid>

        </Grid>
        <Footer />
    </Container>
  );
}

export default Basic;
