import React from 'react'
//import CVdoc from '../public/fredsDevProfile.pdf'

const DownloadCV = () => {
  
  return (
    <div>
      <h1>Work With Me</h1>
      <p>
        If you are interested in working with me, click the button below to download my CV.
      </p>
      
        <a media={CVdoc}  target="_blank" rel='noreferrer'>Open</a>
     
    </div>
  )

}

export default DownloadCV
