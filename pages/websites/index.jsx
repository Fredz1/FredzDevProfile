import { Container, Unstable_Grid2 as Grid } from "@mui/material";
import WebsitesCard from "../../modules/websitesCard";
import TopMenu from '../../modules/TopMenu'

const Websites = () => {
  return (
    <Container>
      <TopMenu />
      {/* site option 1 */}
      <Grid container direction='row' spacing={2}>
        <Grid>
          <WebsitesCard title={'Basic Website'} price={'R2000-R5000'} image='https://picsum.photos/200'/>
        </Grid>
        <Grid>
          <WebsitesCard title={'Medium Website'} price={'R4000-R7500'} image='https://picsum.photos/200'/>
        </Grid>
        <Grid>
          <WebsitesCard title={'Ecommerce'} price={'R15000 - R40000'} image='https://picsum.photos/200'/>
        </Grid>
        <Grid>
          <WebsitesCard title={'Mobile Applications'} price={'Contact for order'} image='https://picsum.photos/200'/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Websites