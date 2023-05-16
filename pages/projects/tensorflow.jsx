import TopMenu from '../../modules/TopMenu'
import Footer from '../../modules/Footer'

import dynamic from 'next/dynamic'

import { Link, Box, Typography } from '@mui/material'

const FaceLandmarksDetection = dynamic(() => import('../../components/FaceLandmarksDetection'), {  ssr: false})

const Tensorflow = () => {
  return (
    <>
      <TopMenu />
      <Box>
        <Typography variant='h4'>             
          <Link style={{ fontWeight: "bold" }} href={'/'}>Home</Link> / Face Landmark Detection 🤓
        </Typography>
        <FaceLandmarksDetection></FaceLandmarksDetection>
      </Box>
      <Footer />
    </>
  )
}

export default Tensorflow
