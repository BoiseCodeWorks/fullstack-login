var express = require('express')
var bp = require('body-parser')
var app = express()
var cors = require('cors')
var port = 3000

app.use(cors())

require('./server-assets/db/mlab-config')

app.use(bp.json())
app.use(bp.urlencoded({
  extended: true
}))


let auth = require('./server-assets/auth/routes')
app.use(auth.session)
app.use(auth.router)

//Gate Keeper Must login to access any route below this code
app.use((req,res,next)=>{
  if (!req.session.uid) {
    return res.status(401).send({
      error: 'please login to continue'
    })
  }
  next()
})


///YOUR ROUTES HERE


//Catch all

app.get('*', (req, res, next) => {
  res.status(404).send({
    error: 'No matching routes'
  })
})


app.listen(port, () => {
  console.log('server running on port', port)
})