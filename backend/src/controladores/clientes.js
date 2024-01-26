const pool = require("../config/conexao")

const listarClientes = async (req, res) => {
  try {
    const { nome, email, telefone } = req.body
    let query = "SELECT * FROM clientes WHERE 1=1"
    const values = []

    if (nome) {
      query += " AND nome = $1"
      values.push(nome)
    }

    if (email) {
      query += " AND email = $" + (values.length + 1)
      values.push(email)
    }

    if (telefone) {
      query += " AND telefone = $" + (values.length + 1)
      values.push(telefone)
    }

    const result = await pool.query(query, values)
    return res.status(200).json(result.rows)
  } catch (error) {
    console.error("Erro ao listar clientes:", error)
    return res.status(500).json({ mensagem: "Erro interno do servidor" })
  }
}

const cadastrarCliente = async (req, res) => {
  const { nome, email, telefone, coordenada_x, coordenada_y } = req.body

  try {
    const emailJaRegistrado = await pool.query(
      "SELECT * FROM clientes WHERE email = $1",
      [email]
    )

    if (emailJaRegistrado.rowCount > 0) {
      return res.status(400).json({
        message: "Já existe usuário cadastrado com o e-mail informado.",
      })
    }

    const query =
      "INSERT INTO clientes (nome, email, telefone, coordenada_x, coordenada_y) VALUES ($1, $2, $3, $4, $5) RETURNING *"
    const values = [nome, email, telefone, coordenada_x, coordenada_y]

    const { rows } = await pool.query(query, values)

    const clienteCadastrado = {
      id: rows[0].id,
      nome: rows[0].nome,
      email: rows[0].email,
      telefone: rows[0].telefone,
      coordenada_x: rows[0].coordenada_x,
      coordenada_y: rows[0].coordenada_y,
    }

    return res.status(201).json(clienteCadastrado)
  } catch (error) {
    console.error("Erro ao cadastrar cliente:", error)
    return res.status(500).json({ mensagem: "Erro interno do servidor" })
  }
}

module.exports = {
  listarClientes,
  cadastrarCliente,
}
