CREATE DATABASE client_management;

CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20) NOT NULL,
    coordinate_x FLOAT,
    coordinate_y FLOAT
);
