
# Gerenciamento de Clientes
## Este projeto é uma aplicação Node.js que gerencia clientes e calcula a rota mais eficiente para visitá-los.

# :hammer: Ferramentas Utilizadas
- `Node.js: v14.17.0`
- `Express: v4.18.2`
- `Math.js: v12.3.0`
- `PostgreSQL: v8.11.3`
- `Nodemon: v3.0.3`
 ### Como Rodar o Projeto Localmente
1. Instalação das Dependências
Certifique-se de ter o Node.js e o npm instalados. Em seguida, execute o seguinte comando na raiz do projeto para instalar as dependências:

```
npm install
```

2. Configuração do Banco de Dados
Certifique-se de ter o PostgreSQL instalado e em execução.
Crie um banco de dados chamado "gerenciamento_clientes".
Configure as credenciais de acesso (host, port, user, password) no arquivo config/conexao.js.

3. Execução do Servidor
Inicie o servidor Node.js usando o seguinte comando:

```
npm run dev
```

O servidor será iniciado na porta 8080.

# 📁 Endpoints Disponíveis
* Listar Clientes: GET /clientes
* Calcular Rota: GET /calcularRota
* Cadastrar Cliente: POST /cadastrar
## Documentação da API
GET /clientes
Retorna a lista de todos os clientes cadastrados.

Exemplo de resposta:

```json
[
  {
    "id": 1,
    "nome": "Cliente 1",
    "email": "cliente1@example.com",
    "telefone": "123456789",
    "coordenada_x": 10,
    "coordenada_y": 20
  },
  // ...
]

```

GET /calcularRota
Calcula a rota mais eficiente para visitar todos os clientes.

Exemplo de resposta:

```json
[
  {
    "id": 1,
    "nome": "Cliente 1",
    "email": "cliente1@example.com",
    "telefone": "123456789",
    "x": 10,
    "y": 20
  },
  // ... (outros clientes na ordem da rota)
  {
    "id": 0,
    "empresa": "Facilita Jurídico",
    "email": "@facilita.jurídico",
    "telefone": "15 99852-6603",
    "x": 0,
    "y": 0
  }
]
```

POST /cadastrar
Cadastra um novo cliente. Requer um corpo de requisição JSON com os dados do cliente.

Exemplo de corpo de requisição:

```json
{
  "nome": "Novo Cliente",
  "email": "novo_cliente@example.com",
  "telefone": "987654321",
  "coordenada_x": 15,
  "coordenada_y": 25
}
```
Exemplo de resposta:

```json
{
  "id": 2,
  "nome": "Novo Cliente",
  "email": "novo_cliente@example.com",
  "telefone": "987654321",
  "coordenada_x": 15,
  "coordenada_y": 25
}
```

Observações
Certifique-se de ter o PostgreSQL instalado e configurado corretamente antes de iniciar o servidor. Para mais informações sobre a configuração do banco de dados, consulte o arquivo config/conexao.js.

