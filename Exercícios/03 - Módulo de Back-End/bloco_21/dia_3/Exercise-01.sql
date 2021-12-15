-- Exercício 01:
USE sakila;
CREATE VIEW film_with_categories AS
  SELECT F.title AS `Title`,
    FC.category_id AS `Category`,
    C.`name` AS `Category_name`
    FROM sakila.film AS F
    JOIN film_category AS FC
    ON F.film_id = FC.film_id
    JOIN category AS C
    ON FC.category_id = C.category_id
    ORDER BY `Title` ASC;
    
SELECT * FROM film_with_categories;
--

-- Exercício 02:
USE sakila;
CREATE VIEW film_info AS
  SELECT A.actor_id AS `actor_id`,
  CONCAT(A.first_name, ' ', A.last_name) AS `actor`,
  (SELECT F.title FROM sakila.film AS F WHERE FC.film_id = F.film_id) AS `title`
  FROM sakila.actor AS A
  JOIN film_actor AS FC
  ON A.actor_id = FC.actor_id
  ORDER BY `actor` ASC;

SELECT * FROM film_info;
-- 

-- Exercício 03:
USE sakila;
CREATE VIEW address_info AS
  SELECT A.address_id AS `address_id`,
  A.address AS `address`,
  A.district AS `district`,
  C.city_id AS `city_id`,
  C.city AS `city`
  FROM address AS A
  JOIN city AS C
  ON A.city_id = C.city_id
  ORDER BY `city` ASC;

SELECT * FROM address_info;
-- 

-- Exercício 04:
USE sakila;
CREATE VIEW movies_languages AS
  SELECT F.title AS `title`,
  L.language_id AS `language_id`,
  L.`name` AS `language`
  FROM film AS F
  JOIN `language` AS L
  ON F.language_id = L.language_id
  ORDER BY `title`;
  
SELECT * FROM movies_languages; 