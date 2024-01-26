
# Gerenciamento de Clientes
## Este projeto é uma aplicação Node.js que gerencia clientes e calcula a rota mais eficiente para visitá-los.

# :hammer: Ferramentas Utilizadas
- `Node.js: v14.17.0`
- `Express: v4.18.2`
- `Math.js: v12.3.0`
- `PostgreSQL: v8.11.3`
- `dotenv: v16.4.1`
- `cors: v2.8.5`
- `Nodemon: v3.0.3`

 ### Como Rodar o Projeto Localmente
1. Instalação das Dependências
Certifique-se de ter o Node.js e o npm instalados. Em seguida, execute o seguinte comando na raiz do projeto para instalar as dependências:

```
npm install
```

2. Configuração do Banco de Dados
Certifique-se de ter o PostgreSQL instalado e em execução.
Crie um banco de dados chamado "client_management" e a tabela "clients".
Configure as credenciais de acesso no arquivo no arquivo `.env`.
```makefile
PORT=8080                  //Define a porta em que o servidor estará acessível localmente.
DB_HOST=localhost          //Especifica o local onde o banco de dados PostgreSQL está hospedado.
DB_PORT=5432               //Indica a porta utilizada para se conectar ao banco de dados PostgreSQL.
DB_USER=postgres           //Define o nome de usuário utilizado para acessar o banco de dados PostgreSQL.
DB_PASS=postgres           //Indica a senha associada ao usuário do banco de dados PostgreSQL.
DB_NAME=client_management  //Define o nome do banco de dados PostgreSQL a ser utilizado pelo aplicativo.
```

4. Execução do Servidor
Inicie o servidor Node.js usando o seguinte comando:

```
npm run dev
```

O servidor estará acessível em http://localhost:8080.

# 📁 Endpoints Disponíveis
* Listar Clientes: GET `/clients`
* Calcular Rota: GET `/calculateRoute`
* Cadastrar Cliente: POST `/register`
## Documentação da API
GET `/clients`
Retorna a lista de todos os clientes cadastrados.

Exemplo de resposta:

```json
[
  {
    "id": 1,
    "name": "Cliente 1",
    "email": "cliente1@example.com",
    "phone": "123456789",
    "coordinate_x": 10,
    "coordinate_y": 20
  },
  // ...
]

```

GET `/calculateRoute`
Calcula a rota mais eficiente para visitar todos os clientes.

Exemplo de resposta:

```json
[
  {
    "id": 1,
    "name": "Cliente 1",
    "email": "cliente1@example.com",
    "phone": "123456789",
    "x": 10,
    "y": 20
  },
  // ... (outros clientes na ordem da rota)
  {
    "id": 0,
    "company": "Facilita Jurídico",
    "email": "@facilita.jurídico",
    "phone": "15 99852-6603",
    "x": 0,
    "y": 0
  }
]
```

POST `/register`
Cadastra um novo cliente. Requer um corpo de requisição JSON com os dados do cliente.

Exemplo de corpo de requisição:

```json
{
  "name": "Novo Cliente",
  "email": "novo_cliente@example.com",
  "phone": "987654321",
  "coordinate_x": 15,
  "coordinate_y": 25
}
```
Exemplo de resposta:

```json
{
  "id": 2,
  "name": "Novo Cliente",
  "email": "novo_cliente@example.com",
  "phone": "987654321",
  "coordinate_x": 15,
  "coordinate_y": 25
}
```

Observações
Certifique-se de ter o PostgreSQL instalado e configurado corretamente antes de iniciar o servidor. Para mais informações sobre a configuração do banco de dados, consulte o arquivo config/conexao.js.

