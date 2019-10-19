const { constants, hiscores } = require("osrs-api");
const express = require('express')
const app = express()

const port = 3000

<<<<<<< HEAD
=======
var charStats = hiscores.getPlayer({ name: "jZERKk", type: constants.playerTypes.normal })
.then((res) => {
  console.log(res.attack)
})
>>>>>>> master

app.get('/:username', function(req, res, error){
  const username = req.params.username
  hiscores.getPlayer({ name: username, type: constants.playerTypes.normal })
  .then(function (playerData){
    res.send(playerData)
  })
  .catch(function(error){
    res.json("An error occurred")
  })
})



module.exports = app.listen(port)
