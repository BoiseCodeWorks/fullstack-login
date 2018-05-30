var router = require('express').Router()
var Boards = require('../models/board')

router.post('/api/boards', (req, res, next) => {
  var board = req.body
  board.creator = req.session.uid
  Boards.create(board)
    .then(newBoard => {
      res.status(200).send(newBoard)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//finds all boards by creator id
router.get('/api/boards', (req, res, next) => {
  Boards.find({creator: req.session.uid})
    .then(boards => {
      res.status(200).send(boards)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})


module.exports = {
  router
}