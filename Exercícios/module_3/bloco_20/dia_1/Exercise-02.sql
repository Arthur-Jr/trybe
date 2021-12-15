-- Exercício 1: 
SELECT MAX(SALARY) AS Maior_salário FROM hr.employees;

-- Exercício 2:
SELECT MAX(SALARY) - MIN(SALARY) AS Diferença_salário FROM hr.employees;

-- Exercício 3:
SELECT JOB_ID, AVG(SALARY) AS Média_salarial FROM hr.employees
GROUP BY JOB_ID
ORDER BY Média_salarial DESC;

-- Exercício 4:
SELECT SUM(SALARY) AS `SOMA` FROM hr.employees;

-- Exercício 5:
SELECT
	ROUND(MAX(SALARY), 2) AS `MAX`,
   ROUND(MIN(SALARY), 2) AS `MIN`,
   ROUND(AVG(SALARY), 2) AS `AVG`,
	ROUND(SUM(SALARY), 2) AS `SUM`
FROM hr.employees;

-- Exercício 6:
SELECT JOB_ID, COUNT(JOB_ID) AS Total FROM hr.employees
WHERE JOB_ID = 'IT_PROG';

-- Exercício 7:
SELECT JOB_ID, SUM(SALARY) AS Total FROM hr.employees
GROUP BY JOB_ID;

-- Exercício 8:
SELECT JOB_ID, SUM(SALARY) AS Total FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

-- Exercício 9:
SELECT JOB_ID, AVG(SALARY) AS Média FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG'
ORDER BY Média DESC;

-- Exercício 10:
SELECT DEPARTMENT_ID, ROUND(AVG(SALARY), 2) AS Média, COUNT(DEPARTMENT_ID) AS `employees` FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING `employees` > 10;

-- Exercício 11:
SET SQL_SAFE_UPDATES = 0;

UPDATE hr.employees
SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, LEFT(PHONE_NUMBER, 3), '777')
WHERE PHONE_NUMBER LIKE '515%';

SELECT * FROM hr.employees;

-- Exercício 12:
SELECT FIRST_NAME FROM hr.employees
WHERE CHAR_LENGTH(FIRST_NAME) >= 8;

-- Exercício 13:
SELECT EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE) AS HIRE_YEAR FROM hr.employees;

-- Exercício 14:
SELECT EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE) AS HIRE_DATE FROM hr.employees;

-- Exercício 15:
SELECT EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE) AS HIRE_MONTH FROM hr.employees;

-- Exercício 16:
SELECT UCASE(FIRST_NAME) FROM hr.employees;

-- Exercício 17:
SELECT LAST_NAME, HIRE_DATE FROM hr.employees
WHERE LEFT(HIRE_DATE, 7) = '1987-07';

-- Exercício 18:
SELECT FIRST_NAME, LAST_NAME, DATEDIFF(CURRENT_DATE(), DATE(HIRE_DATE)) AS WORK_TIME FROM hr.employees;

-- 