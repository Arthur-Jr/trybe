-- Uso de function em string: 
SELECT UCASE('trybe') AS `Name`;
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?',  'DuckDuckGo?', 'Google?');
SELECT CHAR_LENGTH('Uma frase qualquer');
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');
-- 

-- Uso do IF e Case: 
SELECT film_id, IF (title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme') 
AS 'conheço o filme?'
FROM sakila.film;

SELECT title, rating,
CASE
	WHEN rating = 'G' THEN 'Livre para todos'
   WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
   WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
   WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
   ELSE 'Proibido para menores de idade'
END AS `público-alvo`
FROM sakila.film;
-- 

-- Uso do DIV e MOD:
SELECT IF (15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar';

SELECT 220 DIV 12 AS `Grupos de pessoas`;

SELECT 220 MOD 12 AS `Lugares Sobrando`;
-- 

-- Uso do Round:
SELECT ROUND(15 + (RAND() * 5));

SELECT ROUND(15.7515971, 5);

SELECT FLOOR(39.494);

SELECT CEIL(85.234);
--

-- Uso do DATE e TIMEDIFF:
SELECT DATEDIFF('2030-01-20', CURRENT_DATE()) AS Diferença;

SELECT TIMEDIFF('11:00:00', '10:25:45') AS Diferença;
--

-- Uso do AVG , MIN , MAX , SUM e COUNT:
SELECT
	AVG(length) AS 'Média de Duração',
   MIN(length) AS 'Duração Mínima',
	MAX(length) AS 'Duração Máxima',
	SUM(length) AS 'Tempo de Exibição Total',
	COUNT(title) AS 'Filmes Registrados'
FROM sakila.film;
--

-- Uso do GROUP BY e HAVING:
SELECT `active`, COUNT(*) AS quantidade FROM sakila.customer GROUP BY `active`;

SELECT store_id, `active`, COUNT(*) AS quantidade FROM sakila.customer
GROUP BY store_id, `active`
ORDER BY store_id;

SELECT rating, AVG(rental_duration) AS média FROM sakila.film
GROUP BY rating
ORDER BY média DESC;

SELECT district, COUNT(address) AS Quantidade FROM sakila.address
GROUP BY district
ORDER BY Quantidade DESC;

SELECT rating, AVG(length) AS Média
FROM sakila.film
GROUP BY rating
HAVING Média BETWEEN 115.0 AND 121.50
ORDER BY Média DESC;

SELECT rating, SUM(replacement_cost) AS `SUM`
FROM sakila.film
GROUP BY rating
HAVING `SUM` > 3950.50
ORDER BY `SUM` ASC;
--

-- BreakOut Room:
SELECT language_id, MAX(replacement_cost) FROM sakila.film GROUP BY language_id;

SELECT rating, SUM(replacement_cost) FROM sakila.film
GROUP BY rating
LIMIT 1;

SELECT customer_id, ROUND(AVG(DATEDIFF(return_date, rental_date)), 1) AS return_time
FROM sakila.rental
GROUP BY customer_id
ORDER BY return_time ASC
LIMIT 1;
-- 