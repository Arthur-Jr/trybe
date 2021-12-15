-- Uso do WHERE:
SELECT * FROM sakila.customer
WHERE email LIKE '%SCHOFIELD%';

SELECT * FROM sakila.customer
WHERE `active` IS FALSE AND store_id = 2 AND first_name <> 'KENNETH'
ORDER BY first_name, last_name;

SELECT title, `description`, release_year, replacement_cost FROM sakila.film
WHERE (rating <> 'NC-17') AND replacement_cost >= 18.00
ORDER BY replacement_cost DESC, title ASC
LIMIT 100;

SELECT COUNT(*) AS `Clientes_ativos` FROM sakila.customer
WHERE `active` IS TRUE AND store_id = 1;

SELECT * FROM sakila.customer
WHERE active IS FALSE AND store_id = 1;

SELECT title FROM sakila.film
WHERE rating = 'NC-17'
ORDER BY rental_rate ASC, title ASC
LIMIT 50;
--

-- Uso do LIKE:
SELECT * FROM sakila.film
WHERE title LIKE '%ace%';

SELECT * FROM sakila.film
WHERE `description` LIKE '%china';

SELECT * FROM sakila.film
WHERE `description` LIKE '%girl%' AND title LIKE '%lord';

SELECT * FROM sakila.film
WHERE title LIKE '___gon%';

SELECT * FROM sakila.film
WHERE title LIKE '___gon%' AND `description` LIKE '%Documentary%';

SELECT * FROM sakila.film
WHERE title LIKE '%academy' OR title LIKE 'mosquito%';

SELECT * FROM sakila.film
WHERE `description` LIKE '%monkey%' AND `description` LIKE '%sumo%';
--

-- Uso do IN e o BETWEEN
SELECT * FROM sakila.payment
WHERE payment_id IN (269, 239, 126, 399, 142);

SELECT * FROM sakila.address
WHERE district IN ('Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');

SELECT first_name, last_name, email FROM sakila.customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name ASC;

SELECT email FROM sakila.customer
WHERE address_id BETWEEN 172 AND 176
ORDER BY email ASC;

SELECT COUNT(*) FROM sakila.payment
WHERE DATE(payment_date) BETWEEN '2005/05/01' AND '2005/08/01';

SELECT title, release_year, rental_duration FROM sakila.film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title ASC;

SELECT title, rating FROM sakila.film
WHERE rating IN ('G', 'PG', 'PG-13')
LIMIT 500;
--

-- Uso do DATE, YEAR...
SELECT COUNT(*) FROM sakila.payment
WHERE DATE(payment_date) = '2005-05-25';

SELECT COUNT(*) AS `Pagamentos` FROM sakila.payment
WHERE DATE(payment_date) BETWEEN '2005-07-01' AND '2005-08-22';

SELECT
	DATE(rental_date) AS `Data`,
    YEAR(rental_date) AS `Ano`,
    MONTH(rental_date) AS `Mês`,
    DAY(rental_date) AS `Dia`,
    HOUR(rental_date) AS `Hora`,
	MINUTE(rental_date) AS `Minutos`,
	SECOND(rental_date) AS `Segundos`
FROM sakila.rental
WHERE rental_id = 10330;

SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-28' AND HOUR(payment_date) >= 22;
--