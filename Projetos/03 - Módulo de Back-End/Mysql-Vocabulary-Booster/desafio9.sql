SELECT CONCAT(E.FirstName, ' ', E.LastName) AS `Nome completo`,
(
  SELECT COUNT(*)
  FROM w3schools.orders AS O
  WHERE E.EmployeeID = O.EmployeeID
) AS `Total de pedidos`
FROM w3schools.employees AS E
WHERE EXISTS (
  SELECT * FROM w3schools.orders
  WHERE EmployeeID = E.EmployeeID
)
ORDER BY `Total de pedidos` ASC;
