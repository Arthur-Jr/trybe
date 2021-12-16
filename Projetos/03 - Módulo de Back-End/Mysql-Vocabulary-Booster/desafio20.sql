USE hr;
DELIMITER $$

CREATE PROCEDURE exibir_historico_completo_por_funcionario(IN selected_email VARCHAR(100))
BEGIN
  SELECT CONCAT(E.FIRST_NAME, ' ', E.LAST_NAME) AS `Nome completo`,
  D.DEPARTMENT_NAME AS `Departamento`,
  J.JOB_TITLE AS `Cargo`
  FROM hr.employees AS E
  JOIN hr.job_history AS JH
  ON JH.EMPLOYEE_ID = E.EMPLOYEE_ID
  JOIN hr.departments AS D
  ON D.DEPARTMENT_ID = JH.DEPARTMENT_ID
  JOIN hr.jobs AS J
  ON J.JOB_ID = JH.JOB_ID
  WHERE E.EMAIL = selected_email
  ORDER BY `Departamento`, `Cargo`;
END $$

DELIMITER ;
