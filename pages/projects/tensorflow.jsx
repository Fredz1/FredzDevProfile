import dynamic from 'next/dynamic'

import { Link } from '@mui/material';

const FaceLandmarksDetection = dynamic(() => import('../../components/FaceLandmarksDetection'), {  ssr: false})

const Tensorflow = () => {
  return (
    <div>
            <main>
                <h2
                    style={{
                        fontWeight: "normal"
                    }}>
                    <Link style={{ fontWeight: "bold" }} href={'/'}>Home</Link> / Face Landmark Detection 🤓
                </h2>
                <code style={{ marginBottom: '1rem' }}>Work in progress...</code>
                
                <FaceLandmarksDetection></FaceLandmarksDetection>
            </main>
        </div>
  );
}

export default Tensorflow;
