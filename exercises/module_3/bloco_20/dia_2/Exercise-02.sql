
DROP SCHEMA IF EXISTS Pixar;
CREATE SCHEMA Pixar;
USE Pixar;

CREATE TABLE Theater (
  id INTEGER auto_increment PRIMARY KEY NOT NULL,
  name VARCHAR(30) NOT NULL,
  location VARCHAR(30) NULL
);

CREATE TABLE Movies (
  id INTEGER auto_increment PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
  director VARCHAR(30) NULL,
  year INT NOT NULL,
  length_minutes INT NOT NULL,
  theater_id INTEGER,
  FOREIGN KEY (theater_id) REFERENCES Theater (id)
);

CREATE TABLE BoxOffice (
  movie_id INTEGER,
  FOREIGN KEY (movie_id) REFERENCES Movies (id),
  rating DECIMAL(2,1) NOT NULL,
  domestic_sales INT NOT NULL,
  international_sales INT NOT NULL

);

INSERT INTO Theater(name, location)
    VALUES ('Cinemark', 'São Paulo'),
            ('Brodway theater', 'Nova York'),
            ('Phoenix theater', 'Londres'),
            ('Le Champo', 'Paris'),
            ('TLC Chinese Theater', 'Los Angeles'),
            ('Regal Tikahtnu', 'Alaska');

INSERT INTO Movies(title, director, year, length_minutes, theater_id)
  VALUES ('Toy Story', 'John Lasseter', 1995, 81, 1),
         ('Vida de inseto', 'Andrew Staton', 1998, 95, 3),
         ('Ratatuille', 'Brad Bird', 2010, 115, NULL),
         ('UP', 'Pete Docter', 2009, 101, 2),
         ('Carros', 'John Lasseter', 2006, 117, NULL),
         ('Toy Story 2', 'John Lasseter', 1999, 93, 5),
         ('Valente', 'Brenda Chapman', 2012, 98, NULL),
         ('Monstros SA', 'Pete Docter', 2001, 92, NULL),
         ('Procurando Nemo', 'Jon Lasseter', 2003, 107, 4),
         ('Os Incríveis', 'Brad Bird', 2004, 116, NULL),
         ('WALL-E', 'Pete Docter', 2008, 104, NULL);


INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
  VALUES (1, 8.3, 190000000, 170000000),
         (2, 7.2, 160000000, 200600000),
         (3, 7.9, 245000000, 239000000),
         (4, 6.1, 330000000, 540000000),
         (5, 7.8, 140000000, 310000000),
         (6, 5.8, 540000000, 600000000),
         (7, 7.5, 250000000, 190000000),
         (8, 8.5, 300000000, 250000000),
         (10, 7.4, 460000000, 510000000),
         (9, 6.8, 450000000, 370000000),
         (11, 9.9, 290000000, 280000000);
         
-- Exercício 01:
SELECT M.title, BO.domestic_sales, BO.international_sales
FROM Pixar.Movies AS M
JOIN Pixar.BoxOffice AS BO
ON M.id = BO.movie_id; 

-- Exercício 02:
SELECT M.title, BO.domestic_sales, BO.international_sales
FROM Pixar.Movies AS M
JOIN Pixar.BoxOffice AS BO
ON M.id = BO.movie_id
WHERE BO.domestic_sales < BO.international_sales;

-- Exercício 03:
SELECT M.title, BO.rating
FROM Pixar.Movies AS M
JOIN Pixar.BoxOffice AS BO
ON M.id = BO.movie_id
ORDER BY rating DESC;

-- Exercício 04:
SELECT T.name, T.location, M.title, M.year
FROM Pixar.Theater AS T
LEFT JOIN Pixar.Movies AS M
ON T.id = M.theater_id
ORDER BY T.name ASC;

-- Exercício 05:
SELECT T.name, T.location, M.title, M.year
FROM Pixar.Theater AS T
RIGHT JOIN Pixar.Movies AS M
ON T.id = M.theater_id
ORDER BY T.name ASC;

-- Exercício 06:
SELECT B.rating,
(Select M.title
	FROM Pixar.Movies AS M 
	WHERE M.id = B.movie_id
) AS rating
FROM Pixar.BoxOffice AS B
WHERE B.rating > 7.5;

SELECT B.rating, M.title FROM Pixar.BoxOffice AS B
JOIN Pixar.Movies AS M
ON M.id = B.movie_id
WHERE B.rating > 7.5;

-- Exercício 07:
SELECT M.title,
(Select B.rating
	FROM Pixar.BoxOffice AS B
	WHERE M.id = B.movie_id
) AS rating
FROM Pixar.Movies AS M 
WHERE M.`year` > 2009;

SELECT B.rating, M.title FROM Pixar.BoxOffice AS B
JOIN Pixar.Movies AS M
ON M.id = B.movie_id
WHERE M.`year` > 2009;

-- Exercício 08:
SELECT T.`name`, T.location FROM Pixar.Theater AS T
WHERE EXISTS (
	SELECT * FROM Pixar.Movies AS  M
   WHERE T.id = M.theater_id
);

-- Exercício 09:
SELECT T.`name`, T.location FROM Pixar.Theater AS T
WHERE NOT EXISTS (
	SELECT * FROM Pixar.Movies AS  M
   WHERE T.id = M.theater_id
);

-- Exercício 10:
SELECT M.*, B.rating FROM Pixar.BoxOffice AS B
JOIN Pixar.Movies AS M
ON M.id = B.movie_id
WHERE B.rating > 8
AND theater_id IS NOT NULL;

-- Exercício 11:
SELECT M1.title, M1.length_minutes, M2.title, M2.length_minutes, M2.director
FROM Pixar.Movies AS M1, Pixar.Movies AS M2
WHERE M1.director = M2.director
AND M1.id <> M2.id
ORDER BY M2.director;

-- Exercício 12:
SELECT M.title, M.length_minutes
FROM Pixar.Movies AS M
WHERE (
	SELECT B.international_sales
   FROM Pixar.BoxOffice AS B
   WHERE M.id = B.movie_id
) >= 500000000
AND M.length_minutes > 110;

SELECT M.title, M.length_minutes
FROM Pixar.Movies AS M
JOIN Pixar.BoxOffice AS B
ON M.id = B.movie_id
WHERE B.international_sales > 500000000
AND M.length_minutes > 110;
