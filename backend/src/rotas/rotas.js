const express = require("express")
const clientes = require("../controladores/clientes")
const { rotaCalculada } = require("../controladores/calculandoRota")

const rotas = express()

rotas.get("/clientes", clientes.listarClientes)
rotas.get("/calcularRota", rotaCalculada)

rotas.post("/cadastrar", clientes.cadastrarCliente)

module.exports = rotas
