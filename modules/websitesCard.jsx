import { Box, Card, CardContent, CardMedia, CardActionArea, Typography } from "@mui/material";

const WebsitesCard = ({title, price, image}) => {
  return (
    <Card sx={{maxWidth: 345}}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='345'
          image={image}
        />
        <CardContent>
          <Typography>
            {title}
          </Typography>
          <Typography>
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default WebsitesCard