CREATE DATABASE IF NOT EXISTS catalogo_de_albuns;
USE catalogo_de_albuns;

CREATE TABLE albuns(
  album_id INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(50) NOT NULL,
  preco DOUBLE NOT NULL,
  estilo_musical INT NOT NULL
);

CREATE TABLE estilos(
  estilo_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(20) NOT NULL
);

CREATE TABLE cancoes(
  cancoes_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(20) NOT NULL,
  estilo_musical INT NOT NULL,
  album INT NOT NULL,
  FOREIGN KEY (estilo_musical) REFERENCES estilos (estilo_id),
  FOREIGN KEY (album) REFERENCES albuns (album_id)
);

ALTER TABLE albuns
  ADD FOREIGN KEY (estilo_musical) REFERENCES estilos (estilo_id);


INSERT INTO estilos (nome)
VALUES ('Rock');

INSERT INTO albuns (titulo, preco, estilo_musical)
VALUES ('Stadium Arcadium', 50, 1);

INSERT INTO cancoes (nome, estilo_musical, album)
VALUES
  ('Dani California', 1, 1),
  ('Snow (Hey Oh)', 1, 1),
  ('Hump de Bump', 1, 1),
  ('Desecration Smile', 1, 1),
  ('Hard to Concentrate', 1, 1);


SELECT A.titulo AS `Nome do Album`,
E.nome AS `Estilo Musical`,
COUNT(*) AS `Quantidade de Música`
FROM albuns AS A
JOIN estilos AS E
ON A.estilo_musical = E.estilo_id
JOIN cancoes AS C
ON A.album_id = C.album
GROUP BY A.album_id;
