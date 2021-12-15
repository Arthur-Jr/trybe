-- Uso do INSERT: 
SELECT * FROM sakila.staff;
SET SQL_SAFE_UPDATES = 0;

INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, `active`, username)
VALUES ('Arthur', 'Junior', 4, 'abc', 2, 1, 'AJ'),
('Arthur', 'Jorge', 4, 'abc', 2, 1, 'AJ');

INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.staff
LIMIT 5;

SELECT * FROM sakila.actor;

UPDATE sakila.staff
SET last_name = 'Junior'
WHERE last_name = 'Juinor';

UPDATE sakila.staff
SET first_name = 'Junior',  last_name = 'Arthur'
WHERE staff_id = 4;

SELECT * FROM sakila.category;
INSERT INTO sakila.category (`name`)
VALUE ('new_1'), ('new_2'), ('new_3');

SELECT * FROM sakila.store;
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUE (4, 2);
-- 

-- Uso do UPDATE:
SELECT * FROM sakila.actor;
UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

SELECT * FROM sakila.category;
UPDATE sakila.category
SET `name` = 'Science Fiction'
WHERE category_id = 14;

SELECT * FROM sakila.film;
UPDATE sakila.film
SET rental_rate = 25
WHERE rating IN ('G', 'PG', 'PG-13')
AND length > 100
AND replacement_cost > 20;

SELECT * FROM sakila.film;
UPDATE sakila.film 
SET 
    rental_rate = (CASE
        WHEN length <= 100 THEN 10
        ELSE 20
    END);
--

-- USO do DELETE 
SELECT * FROM sakila.film_actor;
DELETE FROM sakila.film_actor
WHERE actor_id = 12;

DELETE FROM sakila.actor
WHERE first_name = 'KARL';

SELECT * FROM sakila.actor WHERE first_name = 'MATTHEW';
DELETE FROM sakila.film_actor
WHERE actor_id IN (8, 103, 181);

DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';

SELECT * FROM sakila.film_text WHERE `description` LIKE '%saga%';
DELETE FROM sakila.film_text
WHERE `description` LIKE '%saga%';

TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;

SELECT * FROM sakila.film_actor;
SELECT * FROM sakila.film_category;