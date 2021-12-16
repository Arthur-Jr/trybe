SELECT C1.ContactName AS `Nome`,
C1.Country AS `País`,
COUNT(C2.Country) AS `Número de compatriotas`
FROM w3schools.customers AS C1, w3schools.customers AS C2
WHERE C1.Country = C2.Country
AND C1.CustomerID <> C2.CustomerID
GROUP BY C1.CustomerID
ORDER BY `Nome` ASC;
