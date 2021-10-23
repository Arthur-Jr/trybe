-- Uso do StoredProcedures:
USE sakila;
DELIMITER $$

CREATE PROCEDURE ObterAtoresMaisPopulares()
BEGIN
	SELECT A.actor_id, A.first_name, (
		SELECT COUNT(film_id) FROM film_actor AS FA
      WHERE A.actor_id = FA.actor_id
   ) AS `Quantidade de filmes`
   FROM actor AS A
   ORDER BY `Quantidade de filmes` DESC
   LIMIT 10;
END $$

DELIMITER ;

CALL ObterAtoresMaisPopulares();

-- 
USE sakila;
DELIMITER $$

CREATE PROCEDURE ObterFilmeInfo(IN Selected_category VARCHAR(20))
BEGIN
	SELECT F.film_id, F.title, FC.category_id, C.`name`
   FROM film AS F
   JOIN film_category AS FC
   ON F.film_id = FC.film_id
   JOIN category AS C
   ON FC.category_id = C.category_id
   WHERE C.`name` = Selected_category;
END $$

DELIMITER ;

CALL ObterFilmeInfo('Action');

-- 
USE sakila;
DELIMITER $$

CREATE PROCEDURE ChecaClienteStatus(IN client_email VARCHAR(50), OUT client_status VARCHAR(30))
BEGIN
	SELECT IF (C.`active` = 1, 'O cliente está ativo', 'O cliente está inativo')
   INTO client_status
   FROM customer AS C
   WHERE C.email = client_email;
END $$

DELIMITER ;

CALL ChecaClienteStatus('ASHLEY.RICHARDSON@sakilacustomer.org', @clientStatus);
SELECT @clientStatus;

CALL ChecaClienteStatus('JUDITH.COX@sakilacustomer.org', @clientStatus1);
SELECT @clientStatus1;

-- Uso do StoredFunctions:
USE sakila;
DELIMITER $$

CREATE FUNCTION PegarPagamentoTotal(id INT)
RETURNS INT READS SQL DATA
BEGIN
	RETURN (SELECT COUNT(*) FROM sakila.payment
   WHERE customer_id = id);
END $$

DELIMITER ;

SELECT PegarPagamentoTotal(5);

--
USE sakila;
DELIMITER $$

CREATE FUNCTION PegarFilmePeloInventoryId(id INT)
RETURNS VARCHAR(50) READS SQL DATA
BEGIN
	DECLARE result VARCHAR(50);
   SELECT title FROM sakila.film
   WHERE film_id = (
		SELECT film_id FROM sakila.inventory
      WHERE inventory_id = id
   ) INTO result;
   RETURN result;
END $$

DELIMITER ;

SELECT PegarFilmePeloInventoryId(5);

--
USE sakila;
DELIMITER $$

CREATE FUNCTION PegarQuantidadeDeFilmesPelaCategoria(selected_category VARCHAR(10))
RETURNS INT READS SQL DATA
BEGIN
	RETURN (
		SELECT COUNT(FC.film_id)
      FROM film_category AS FC
      JOIN category AS C
      ON C.category_id = FC.category_id
      WHERE C.`name` = selected_category
   );
END $$

DELIMITER ;

SELECT PegarQuantidadeDeFilmesPelaCategoria('Action') AS `Quantidade`;