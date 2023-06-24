const router = require('express').Router()
const controller  = require('../controllers/dbController')
const jwtController = require('../controllers/tokenController')
const bcrypt = require('bcrypt')

router.post(
  '/register',
  async (req, res) => {
    // Check for blank fields.
    console.log('routeHit')
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
      const { password, _id } = await controller.loginUser(req.body)
  
      // bcrypt validates password
      const passwordValidate = await bcrypt.compare(req.body.password, password)
  
      // on passwordValidate result JWT is set and sent in cookie
      if (passwordValidate){
        // Create Token
        // _id must be converted toString as initial request returns an unusable Object
        const token = jwtController.newToken(_id.toString())
        /* 
            @desc: setcookie options to httpOnly to prevent any javaScript from accessing the cookie on the clientSide
            @desc: make secure true so cookie can only be sent via HTTPS protocol
            @desc: path set to /api/tasks.  This will only send the cookie in the header when the user makes requests to tasks and no other routers.
          */

        return res.cookie(
          'auth',
          token,
          {
            httpOnly: true,
            path: '/apiv2'
          }
        // send confirmation to user to handle login
        ).json( { success: true } )
      }

      // if login is not successfull but still runs though try block the attempt Must fail.
      res.json( { success: false, response: 'Something went wrong signing you in.  Please contact your admin' } )
    } catch(e){
      // fail and reject login request if system or anyother failure
      res.json( { success: false, response: 'Something went wrong as a failure.' } )
    }
  }
)

router.get(
  '/logout',
  (req, res) => {
    // Destroy the authorisation token if user logs out.
    res.clearCookie('auth').send('confirmed')
  }
)

module.exports = router