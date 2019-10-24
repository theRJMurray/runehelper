const { constants, hiscores } = require("osrs-api");
const express = require('express')
const path = require('path')
const app = express()
const port = 5000



app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + 'index.html'))
});

app.get('/search/:username', function(req, res, error){
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
