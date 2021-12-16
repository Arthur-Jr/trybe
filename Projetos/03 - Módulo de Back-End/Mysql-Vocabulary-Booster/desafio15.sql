USE hr;
DELIMITER $$ 

CREATE PROCEDURE buscar_media_por_cargo(IN selected_cargo VARCHAR(50))
BEGIN
  SELECT ROUND(AVG(E.SALARY), 2) AS `Média salarial`
  FROM hr.employees AS E
  WHERE E.JOB_ID = (
    SELECT J.JOB_ID FROM hr.jobs AS J
    WHERE J.JOB_TITLE = selected_cargo
  );
END $$

DELIMITER ;

-- Referência ao course, bloco 21 dia 3 para resolver esse requisito.
