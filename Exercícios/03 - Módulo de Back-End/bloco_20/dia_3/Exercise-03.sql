CREATE DATABASE IF NOT EXISTS BeeMovies;

USE BeeMovies;

CREATE TABLE movies(
    movie_id INT PRIMARY KEY auto_increment,
    ticket_price DECIMAL(12, 2) NOT NULL DEFAULT 0,
    ticket_price_estimation VARCHAR(15),
    release_year YEAR
) engine = InnoDB;

CREATE TABLE movies_logs(
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    movie_id INT NOT NULL,
    executed_action VARCHAR(15) NOT NULL,
    log_date DATE NOT NULL
) engine = InnoDB;

-- Exercício 01:
USE BeeMovies;
DELIMITER $$

CREATE TRIGGER trigger_movies_insert
BEFORE INSERT ON movies
FOR EACH ROW
BEGIN
	SET NEW.release_year = YEAR(CURRENT_DATE());
END $$

CREATE TRIGGER trigger_movies_logs_insert
AFTER INSERT ON movies
FOR EACH ROW
BEGIN
	INSERT INTO movies_logs(movie_id, executed_action, log_date)
   VALUES (NEW.movie_id, 'INSERT', now());
END $$

DELIMITER ;

INSERT INTO movies(ticket_price)
VALUES (40);

INSERT INTO movies(ticket_price)
VALUES (50);

-- Exercício 02:
USE BeeMovies;
DELIMITER $$

CREATE TRIGGER trigger_movies_update
BEFORE UPDATE ON movies
FOR EACH ROW
BEGIN
	SET NEW.ticket_price_estimation = IF (OLD.ticket_price > NEW.ticket_price, 'Decreasing', 'Increasing');
	INSERT INTO movies_logs(movie_id, executed_action, log_date)
		VALUES (NEW.movie_id, 'UPDATE', now());
END $$

DELIMITER ;

UPDATE movies
SET ticket_price = 100
WHERE movie_id = 1;

UPDATE movies
SET ticket_price = 20
WHERE movie_id = 2;

-- Exercício 03:
USE BeeMovies;
DELIMITER $$

CREATE TRIGGER trigger_movies_delete
AFTER DELETE ON movies
FOR EACH ROW
BEGIN
	INSERT INTO movies_logs(movie_id, executed_action, log_date)
	VALUES (OLD.movie_id, 'DELETE', now());
END $$

DELIMITER ;

DELETE FROM movies
WHERE movie_id = 1;

DELETE FROM movies
WHERE movie_id = 2;