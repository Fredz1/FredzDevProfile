import { Container, Box, Unstable_Grid2 as Grid, List, ListItem, Typography } from "@mui/material"

import Image from 'next/image'

import TopMenu from '../../modules/TopMenu'

const Medium = () => {
  return (
    <Container>
      <TopMenu />
      <Grid container direction='column'>
        {/* Top Container */}
        <Grid container direction='row'>
          {/* image here */}
          <Grid md={6}>
            <Image src="https://picsum.photos/200/300" alt="test" height={400} width={400}/> 
          </Grid>
          <Grid md={6}>
            <Typography variant="h5">
              Meduim website
            </Typography>
            <Typography variant="h6">
              R2000 - R5000
            </Typography>
            <Typography variant="body1">
              {/* Describe website */}
              If you are a medium size business or individual looking to solidify an online presence and provide relevant information about your services or products, then a Small Basic Website is an ideal choice. These websites, also known as one-pagers or landing pages, are designed to offer a simple and straightforward representation of your business or services. With a minimalistic design, concise text, and high-quality visuals, visitors can easily understand the purpose and offerings of your business. Check out the full package description below to learn more about how a Small Basic Website can benefit you.
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="h6">Includes</Typography>
            <List>
              <ListItem>
                Menu
              </ListItem>
              <ListItem>
                Contact Form
              </ListItem>
            </List>

            <Typography variant="h6">Pages</Typography>
            <List>
              <ListItem>
                Home
              </ListItem>
              <ListItem>
                About Us
              </ListItem>
              <ListItem>
                Services(non-e-commerce)
              </ListItem>
              <ListItem>
                Contact
              </ListItem>
            </List>
            <List>
              <ListItem>
                Social Media Links
              </ListItem>
              <ListItem>
                Generic Images
              </ListItem>
              <ListItem>
                Built on NextJS
              </ListItem>
              <ListItem>
                Minor Changes 
              </ListItem>
            </List>

            <Typography variant="h6">Excludes</Typography>
            <List>
              <ListItem>
                Graphic Design i.e. Brand and Logo
              </ListItem>
              <ListItem>
                Hosting
              </ListItem>
              <ListItem>
                Maintenence
              </ListItem>
              <ListItem>
                Any writting or publishing
              </ListItem>
              <ListItem>
                SEO
              </ListItem>
              <ListItem>
                Marketing
              </ListItem>
              <ListItem>
                Any Content
              </ListItem>
            </List>

            <Typography variant="h6">Client should provide</Typography>
            <List>
              <ListItem>
                Logo
              </ListItem>
              <ListItem>
                Payment Upfront - 50% or 100%
              </ListItem>
              <ListItem>
                Images(these should be royalty-free)
              </ListItem>
            </List>
            {/* Make note that the client is aware that if they need any custom work then extra costs maybe incured */}

                
          </Grid>

        </Grid>
      </Grid>
    </Container>
  );
}

export default Medium;
