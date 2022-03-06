CREATE DATABASE proyecto;


CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name, email) VALUES
    ('jose', 'jose@latam.com'),
    ('andres', 'andres@latam.com');


CREATE TABLE vehicules(
    id SERIAL PRIMARY KEY,
    branch VARCHAR(40),
    year INT 
);

INSERT INTO vehicules (branch, year) VALUES
    ('renault', '2010'),
    ('nissan', '1999');