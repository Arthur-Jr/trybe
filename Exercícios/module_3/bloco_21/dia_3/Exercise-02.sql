-- Exercício 01: 
USE sakila;
CREATE FULLTEXT INDEX nome_index ON category (`name`);

-- Query cost = 0.35:
SELECT * FROM category
WHERE MATCH(`name`)
AGAINST ('action');

-- Query cost = 1.85:
SELECT *
FROM sakila.category
WHERE name LIKE '%action%';
-- 

-- Exercício 02:
USE sakila;

-- Query cost = 61.80:
SELECT * FROM address
WHERE postal_code = '36693';

CREATE INDEX postal_index ON address (`postal_code`);

-- Query cost = 0.35:
SELECT * FROM address
WHERE postal_code = '36693';
