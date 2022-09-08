CREATE TABLE turma(
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255),
    modulo VARCHAR(255) DEFAULT 0
);

CREATE TABLE estudante(
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    data_nasc DATE NOT NULL,
    turma_id VARCHAR(255),
    FOREIGN KEY (turma_id) REFERENCES turma (id)
);

CREATE TABLE docente(
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    data_nasc DATE NOT NULL,
    turma_id VARCHAR(255),
    FOREIGN KEY (turma_id) REFERENCES turma (id)
);