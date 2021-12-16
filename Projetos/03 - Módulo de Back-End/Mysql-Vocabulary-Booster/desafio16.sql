USE hr;
DELIMITER $$

CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario(selected_email VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
  RETURN (
    SELECT COUNT(H.JOB_ID)
    FROM hr.job_history AS H
    WHERE H.EMPLOYEE_ID = (
      SELECT E.EMPLOYEE_ID
      FROM hr.employees AS E
      WHERE E.EMAIL = selected_email
    )
  );
END $$

DELIMITER ;

SELECT buscar_quantidade_de_empregos_por_funcionario('NKOCHHAR') AS `total_empregos`;
