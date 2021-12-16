(
  SELECT country AS `País` FROM w3schools.suppliers
  ORDER BY country
)
UNION
(
  SELECT country FROM w3schools.customers
  ORDER BY country
)
ORDER BY `País`
LIMIT 5;
