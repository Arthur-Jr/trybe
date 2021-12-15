DROP SCHEMA IF EXISTS Pixar;
CREATE SCHEMA Pixar;
USE Pixar;

CREATE TABLE Movies (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
  director VARCHAR(30) NULL,
  year INT NOT NULL,
  length_minutes INT NOT NULL
);

CREATE TABLE BoxOffice (
  movie_id INTEGER,
  FOREIGN KEY (movie_id) REFERENCES Movies (id),
  rating DECIMAL(2,1) NOT NULL,
  domestic_sales INT NOT NULL,
  international_sales INT NOT NULL
);

INSERT INTO Movies(title, director, year, length_minutes)
  VALUES ('Toy Story', 'John Lasseter', 1995, 81),
         ('Vida de inseto', 'Andrew Staton', 1998, 95),
         ('ratatui', 'Brad Bird', 2010, 115),
         ('UP', 'Pete Docter', 2009, 101),
         ('Carros', 'John Lasseter', 2006, 117),
         ('Toy Story 2', 'John Lasseter', 1999, 93),
         ('Valente', 'Brenda Chapman', 2012, 98);


INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
  VALUES (1, 8.3, 190000000, 170000000),
         (2, 7.2, 160000000, 200600000),
         (3, 7.9, 245000000, 239000000),
         (4, 6.1, 330000000, 540000000),
         (5, 7.8, 140000000, 310000000),
         (6, 5.8, 540000000, 600000000),
         (7, 7.5, 250000000, 190000000);
         
-- Exercício 1:
SELECT * FROM Pixar.Movies;
INSERT INTO Pixar.Movies (Title, director, `year`, length_minutes)
	VALUE ('Monstros SA', 'Pete Docter', 2001, 92),
			('Procurando Nemo', 'John Lasseter', 2003, 107),
			('Os Incríveis', 'Brad Bird', 2004, 116),
			('WALL-E', 'Pete Docter', 2008, 104);
   
-- Exercício 2:
SELECT * FROM Pixar.BoxOffice;
INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales)
	VALUE (9, 6.8, 450000000, 370000000);
   
-- Exercício 3:
SELECT * FROM Pixar.Movies;
UPDATE Pixar.Movies
SET director = 'Andrew Staton'
WHERE id = 9;

-- Exercício 4:
SELECT * FROM Pixar.Movies;
UPDATE Pixar.Movies
SET title = 'Ratatouille', `year` = 2007
WHERE id = 3;

-- Exercício 5:
SELECT * FROM Pixar.BoxOffice;
INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales)
	VALUE (8, 8.5, 300000000, 250000000),
			(10, 7.4, 460000000, 510000000),
         (11, 9.9, 290000000, 280000000);

-- Exercício 6:
SELECT * FROM Pixar.Movies;
DELETE FROM Pixar.BoxOffice
WHERE movie_id = 11;

DELETE FROM Pixar.Movies
WHERE id = 11;

-- Exercício 7:
SELECT * FROM Pixar.Movies
WHERE director = 'Andrew Staton';

DELETE FROM Pixar.BoxOffice
WHERE movie_id IN (2, 9);

DELETE FROM Pixar.Movies
WHERE id IN (2, 9);

-- Exercício 8:
SET SQL_SAFE_UPDATES = 0;

SELECT * FROM Pixar.BoxOffice;
UPDATE Pixar.BoxOffice
SET rating = 9.0
WHERE domestic_sales > 400000000;

-- Exercício 9:
SET SQL_SAFE_UPDATES = 0;

SELECT * FROM Pixar.BoxOffice;
UPDATE Pixar.BoxOffice
SET rating = 6.0
WHERE domestic_sales > 200000000 AND international_sales < 300000000;

-- Exercício 10:
SET SQL_SAFE_UPDATES = 0;

SELECT * FROM Pixar.Movies WHERE length_minutes < 100;
DELETE FROM Pixar.BoxOffice
WHERE movie_id IN (1, 6, 7, 8);

DELETE FROM Pixar.Movies
WHERE length_minutes < 100;