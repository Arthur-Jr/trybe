USE hr;
DELIMITER $$

CREATE FUNCTION exibir_quantidade_pessoas_contratadas_por_mes_e_ano(selcted_month INT, selected_year INT)
RETURNS INT READS SQL DATA
BEGIN
  RETURN(
    SELECT COUNT(*) FROM hr.employees
    WHERE MONTH(HIRE_DATE) = selcted_month
    AND YEAR(HIRE_DATE) = selected_year
  );
END $$

DELIMITER ;

SELECT exibir_quantidade_pessoas_contratadas_por_mes_e_ano(6, 1987) AS `total`;
