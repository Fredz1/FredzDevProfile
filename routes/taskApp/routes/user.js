const controller = require('../controllers/dbController')
const jwtController = require('../controllers/tokenController')
const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()

router.post(
  '/register',
  async (req, res) => {
    // Check for blank fields.
    if (req.body.name === '' || req.body.surname === '' || req.body.email === '' || req.body.password===''){
      res.json({success: false, response: 'Please complete all fields'})
    }

    // Save the user in db
    const addToDB = await controller.addUser(req.body)

    // handle result of save request
    addToDB ? res.json({success: true}) : res.json( { success: false, response: 'Existing user' } )

  }
)

router.post(
  '/login',
  async(req, res) => {
    try{
      // Check for blank field inputs
      if(req.body.email === '' || req.body.password === ''){
        res.json( { success:false, response: 'Please complete all fields.' } )
      }

  
      
      // send request to DB for password and _id to add to JWtoken
      const { password, _id, name } = await controller.loginUser( req.body )
      console.log(password)
      // bcrypt validates password
      const passwordValidate = await bcrypt.compare( req.body.password, password )
      // on passwordValidate result JWT is set and sent in cookie
      if ( passwordValidate ){
        /* 
            @desc: set-cookie options to httpOnly to prevent any javaScript from accessing the cookie on the clientSide
            @desc: make secure true so cookie can only be sent via HTTPS protocol
            @desc: path set to /api/tasks.  This will only send the cookie in the header when the user makes requests to tasks and no other routers.
            @desc: create token
          */

        return res.cookie(
          'auth',
          jwtController.newToken( _id.toString() ),
          {
            secure: true,
            name: 'taskerApp',
            httpOnly: true,
            path: '/apiv2',
            maxAge: 1000 * 60 * 60 * 24 * 7
          }
        // send confirmation to user to handle login
        ).json( { success: true, response: { name } } )
      }

      // if login is not successful but still runs though try block the attempt Must fail.
      res.json( { success: false, response: 'Something went wrong signing you in.  Please contact your admin' } )
    } catch(e){
      console.log(e)
      // fail and reject login request if system or any other failure
      res.json( { success: false, response: 'Something went wrong.' } )
    }
  }
)

router.get(
  '/logout',
  (req, res) => {
    // Destroy the authorization token if user logs out.
    res.clearCookie('auth').json({success: true})
  }
)

module.exports = router