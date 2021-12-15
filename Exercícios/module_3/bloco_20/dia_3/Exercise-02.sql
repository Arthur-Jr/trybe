CREATE DATABASE IF NOT EXISTS betrybe_automoveis;

USE betrybe_automoveis;

CREATE TABLE carros(
    id_carro INT PRIMARY KEY auto_increment,
    preco DECIMAL(12, 2) NOT NULL DEFAULT 0,
    data_atualizacao DATETIME,
    acao VARCHAR(15),
    disponivel_em_estoque BOOLEAN DEFAULT 0
) engine = InnoDB;

CREATE TABLE log_operacoes(
    operacao_id INT AUTO_INCREMENT PRIMARY KEY,
    tipo_operacao VARCHAR(15) NOT NULL,
    data_ocorrido DATE NOT NULL
) engine = InnoDB;

-- Uso do Triggers:
USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER trigger_car_insert
	BEFORE INSERT ON carros
   FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = now(),
   NEW.acao = 'INSERÇÃO',
   NEW.disponivel_em_estoque = 1;
END $$

DELIMITER ;

INSERT INTO carros(preco) VALUES (25000);
SELECT * FROM carros;

--
USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER trigger_carros_update
BEFORE UPDATE ON carros
FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = now(),
   NEW.acao = 'ATUALIZAÇÃO';
END $$

DELIMITER ;

UPDATE carros
SET preco = 30000
WHERE id_carro = 1;

SELECT * FROM betrybe_automoveis.carros;

--
USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER trigger_carros_delete
AFTER DELETE ON carros
FOR EACH ROW
BEGIN
	INSERT INTO log_operacoes(tipo_operacao, data_ocorrido)
   VALUES ('EXCLUSÃO', now());
END $$

DELIMITER ;

DELETE FROM carros
WHERE id_carro = 1;