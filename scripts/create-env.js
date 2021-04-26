const fs = require('fs')
const clientId = `clientId=${process.env.clientId}\n`
const googleMapsApiKey = `googleMapsApiKey=${process.env.googleMapsApiKey}`

fs.writeFileSync('./.env', `${clientId}${googleMapsApiKey}`)