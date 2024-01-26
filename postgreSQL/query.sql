CREATE DATABASE gerenciamento_clientes;

CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    coordenada_x FLOAT,
    coordenada_y FLOAT
);
