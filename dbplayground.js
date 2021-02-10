const db = require('./models')

// db.dinos.create({
//     name: 'fly-ee McFly-a-lot',
//     type: 'Pterodactylus',
//     diet: "carnivorous"
// })

db.dinos.findAll()
.then(console.log(dinos))