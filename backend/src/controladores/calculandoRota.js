const math = require("mathjs")
const pool = require("../config/conexao")

const rotaCalculada = async (req, res) => {
  try {
    const clientes = await pool.query("SELECT * FROM clientes")

    if (clientes.rowCount === 0) {
      return res.status(404).json({ message: "Nenhum cliente cadastrado." })
    }

    const coordenadas = clientes.rows.map((cliente) => ({
      id: cliente.id,
      nome: cliente.nome,
      email: cliente.email,
      telefone: cliente.telefone,
      x: cliente.coordenada_x,
      y: cliente.coordenada_y,
    }))

    const calcularDistancia = (ponto1, ponto2) =>
      math.distance([ponto1.x, ponto1.y], [ponto2.x, ponto2.y])

    const encontrarVizinhoMaisProximo = (ponto, pontosDisponiveis) => {
      let distanciaMinima = Number.MAX_SAFE_INTEGER
      let vizinhoMaisProximo = null

      for (const pontoDisponivel of pontosDisponiveis) {
        const distancia = calcularDistancia(ponto, pontoDisponivel)

        if (distancia < distanciaMinima) {
          distanciaMinima = distancia
          vizinhoMaisProximo = pontoDisponivel
        }
      }

      return vizinhoMaisProximo
    }

    const rota = []
    let pontoAtual = { x: 0, y: 0 }

    while (coordenadas.length > 0) {
      const vizinhoMaisProximo = encontrarVizinhoMaisProximo(
        pontoAtual,
        coordenadas
      )
      rota.push(vizinhoMaisProximo)
      pontoAtual = vizinhoMaisProximo
      coordenadas.splice(
        coordenadas.findIndex((ponto) => ponto.id === vizinhoMaisProximo.id),
        1
      )
    }

    rota.push({ id: 0, x: 0, y: 0 })

    return res.status(200).json(rota)
  } catch (error) {
    console.error("Erro ao calcular rota:", error)
    return res.status(500).json({ mensagem: "Erro interno do servidor" })
  }
}

module.exports = {
  rotaCalculada,
}
