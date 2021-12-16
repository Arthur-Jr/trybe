SELECT (
  SELECT CONCAT(E.FIRST_NAME, ' ', E.LAST_NAME)
  FROM hr.employees AS E
  WHERE E.EMPLOYEE_ID = JH.EMPLOYEE_ID
) AS `Nome completo`,
DATE_FORMAT(JH.START_DATE, '%d/%m/%Y') AS `Data de início`,
DATE_FORMAT(JH.END_DATE, '%d/%m/%Y') AS `Data de rescisão`,
ROUND(DATEDIFF(END_DATE, START_DATE) / 365, 2) AS `Anos trabalhados`
FROM hr.job_history AS JH
WHERE JH.EMPLOYEE_ID <> 0
ORDER BY `Nome completo`, `Anos trabalhados`;

-- Referência do DATE FORMAT:
-- https://www.w3schools.com/sql/func_mysql_date_format.asp
-- https://stackoverflow.com/questions/7043794/get-mysql-month-to-use-leading-zeros
