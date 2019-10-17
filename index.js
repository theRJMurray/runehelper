const { hiscores } = require("osrs-json-api");
const express = require('express')
const app = express()
const axios = require('axios').default;
var path = require('path');

const port = 3000

// const charStats = hiscores.getPlayer({ name: "jZERKk", type: constants.playerTypes.normal })
// .then(function(res){
//   var g = (res.overall.rank)
//   console.log(g)
// })

hiscores
.getPlayer('jZERKk')
.then((res) => res.json())
.then((data) => {
  
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
