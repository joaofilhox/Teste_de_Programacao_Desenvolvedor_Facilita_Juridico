const pool = require("../config/connection")

const listClients = async (req, res) => {
  try {
    const { name, email, phone } = req.body
    let query = "SELECT * FROM clients WHERE 1=1"
    const values = []

    if (name) {
      query += " AND name = $1"
      values.push(name)
    }

    if (email) {
      query += " AND email = $" + (values.length + 1)
      values.push(email)
    }

    if (phone) {
      query += " AND phone = $" + (values.length + 1)
      values.push(phone)
    }

    const result = await pool.query(query, values)
    return res.status(200).json(result.rows)
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor" })
  }
}

const registerClient = async (req, res) => {
  const { name, email, phone, coordinate_x, coordinate_y } = req.body

  try {
    const emailAlreadyRegistered = await pool.query(
      "SELECT * FROM clients WHERE email = $1",
      [email]
    )

    if (emailAlreadyRegistered.rowCount > 0) {
      return res.status(400).json({
        message: "Já existe usuário cadastrado com o e-mail informado.",
      })
    }

    const query =
      "INSERT INTO clients (name, email, phone, coordinate_x, coordinate_y) VALUES ($1, $2, $3, $4, $5) RETURNING *"
    const values = [name, email, phone, coordinate_x, coordinate_y]

    const { rows } = await pool.query(query, values)

    const clientRegistered = {
      id: rows[0].id,
      name: rows[0].name,
      email: rows[0].email,
      phone: rows[0].phone,
      coordinate_x: rows[0].coordinate_x,
      coordinate_y: rows[0].coordinate_y,
    }

    return res.status(201).json(clientRegistered)
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor" })
  }
}

module.exports = {
  listClients,
  registerClient,
}
