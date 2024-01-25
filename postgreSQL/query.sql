CREATE DATABASE GerenciamentoClientes;

CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telefone VARCHAR(20) NOT NULL
);

-- Exemplo de inserção de cliente
INSERT INTO clientes (nome, email, telefone) VALUES ('Nome Cliente', 'cliente@email.com', '123-456-7890');