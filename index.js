const { constants, hiscores } = require("osrs-api");
const express = require('express')
const app = express()
const axios = require('axios').default;

const port = 3000

var charStats = hiscores.getPlayer({ name: "jZERKk", type: constants.playerTypes.normal }).then(console.log())

app.get('/', (req, res) => res.send(charStats))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
