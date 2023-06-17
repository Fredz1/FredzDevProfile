import multer from 'multer'


export const config = {
  api: {
    bodyParser: false
  }
}

const upload = multer()



export default function handler(req, res) {
  //if it is not a post request then reject
  if(req.method !== "POST") res.json({success: false, reponse: 'Incorrect method'})

  upload(
    ( req, res, err ) => {
      if( err ) res.json( { success: false, response:'Something went wrong with the form upload' } )

      res.json({success: true, response: 'worked'})
    }
  )


}