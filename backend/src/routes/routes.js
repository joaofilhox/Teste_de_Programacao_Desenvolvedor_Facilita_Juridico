const express = require("express")
const clients = require("../controllers/clients")
const { calculatedRoute } = require("../controllers/calculatingRoute")

const routes = express()

routes.get("/clients", clients.listClients)
routes.get("/calculateRoute", calculatedRoute)

routes.post("/register", clients.registerClient)

module.exports = routes
