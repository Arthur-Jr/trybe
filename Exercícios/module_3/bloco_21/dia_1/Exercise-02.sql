CREATE DATABASE IF NOT EXISTS Zoo;
USE Zoo;

CREATE TABLE animais(
  animal_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(30) DEFAULT 'Ainda não nomeado',
  sexo VARCHAR(10) NOT NULL,
  especie INT NOT NULL,
  responsavel INT NOT NULL
);

CREATE TABLE especies(
  especie_id INT PRIMARY KEY AUTO_INCREMENT,
  nome_especie VARCHAR(50) NOT NULL,
  localizacao INT NOT NULL
);

CREATE TABLE locais(
  localizacao_id INT PRIMARY KEY AUTO_INCREMENT,
  `local` VARCHAR(50) NOT NULL
);

CREATE TABLE cuidadores(
  cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
  primeiro_nome VARCHAR(20) NOT NULL,
  sobrenome VARCHAR(20) NOT NULL,
  data_de_inicio DATE NOT NULL
);

ALTER TABLE animais
  ADD FOREIGN KEY (especie) REFERENCES especies (especie_id),
  ADD FOREIGN KEY (responsavel) REFERENCES cuidadores (cuidador_id);
  
ALTER TABLE especies
  ADD FOREIGN KEY (localizacao) REFERENCES locais (localizacao_id);


INSERT INTO cuidadores (primeiro_nome, sobrenome, data_de_inicio)
VALUES ('Xablau', 'Silva', CURRENT_DATE());

INSERT INTO locais (`local`)
VALUES ('Área Norte');

INSERT INTO especies (nome_especie, localizacao)
VALUES ('Leão', 1);

INSERT INTO animais (nome, sexo, especie, responsavel)
VALUES ('Xablau Filho', 'Masculino', 1, 1);


SELECT A.nome AS Nome,
A.sexo AS Sexo,
E.nome_especie AS Especie,
L.`local` AS Localizacao,
CONCAT(C.primeiro_nome, ' ', C.sobrenome) AS Cuidador
FROM animais AS A
JOIN especies AS E
ON E.especie_id = A.especie
JOIN locais AS L
ON L.localizacao_id = E.localizacao
JOIN cuidadores AS C
ON C.cuidador_id = A.responsavel;
