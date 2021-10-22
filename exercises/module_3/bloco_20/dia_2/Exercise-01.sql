-- Uso do INNER JOIN:
SELECT A.actor_id, A.first_name, FA.film_id 
FROM sakila.actor AS A
JOIN sakila.film_actor AS FA
ON A.actor_id = FA.actor_id;

SELECT S.first_name, S.last_name, A.address 
FROM sakila.staff AS S
JOIN sakila.address AS A
ON S.address_id = A.address_id;

SELECT C.customer_id, C.first_name, C.email, C.address_id, A.address
FROM sakila.customer AS C
JOIN sakila.address AS A
ON A.address_id = C.address_id
ORDER BY C.first_name DESC
LIMIT 100;

SELECT C.first_name, C.email, C.address_id, A.address, A.district
FROM sakila.customer AS C
JOIN sakila.address AS A
ON C.address_id = A.address_id AND C.first_name LIKE '%rene%' AND A.district = 'California';

SELECT C.first_name, COUNT(A.address) AS `Quantidade de endereço`
FROM sakila.customer AS C
JOIN sakila.address AS A
ON C.address_id = A.address_id
WHERE C.active = 1
GROUP BY C.first_name
ORDER BY C.first_name DESC;

SELECT S.first_name, S.last_name, ROUND(AVG(P.amount), 2) AS Média
FROM sakila.staff AS S
JOIN sakila.payment AS P
ON S.staff_id = P.staff_id
WHERE YEAR(P.payment_date) = 2006
GROUP BY S.first_name, S.last_name;

SELECT FA.actor_id, FA.film_id, A.first_name, F.title
FROM sakila.film_actor AS FA
JOIN sakila.actor AS A
ON FA.actor_id = A.actor_id
JOIN sakila.film AS F 
ON FA.film_id = F.film_id;

SELECT C.Name, CAR.NAME FROM hotel.Customers AS C
JOIN hotel.CarSales AS CARS
ON C.CustomerId = CARS.CustomerID
JOIN hotel.Cars AS CAR
ON CAR.id = CARS.CarID;

-- Uso do SELF JOIN: 
SELECT F1.film_id, F1.replacement_cost, F2.film_id, F2.replacement_cost
FROM sakila.film AS F1, sakila.film AS F2
WHERE F1.replacement_cost = F2.replacement_cost
AND F1.film_id <> F2.film_id;

SELECT F1.title, F1.rental_duration, F2.title, F2.rental_duration
FROM sakila.film AS F1, sakila.film AS F2
WHERE F1.rental_duration= F2.rental_duration
AND F1.rental_duration IN (2, 3, 4)
AND F1.film_id <> F2.film_id;

-- Uso do UNION:
SELECT first_name, last_name FROM sakila.actor
UNION ALL
SELECT first_name, last_name  FROM sakila.staff;

SELECT first_name FROM sakila.actor
WHERE first_name LIKE '%je%'
UNION ALL
SELECT first_name FROM sakila.customer
WHERE first_name LIKE '%tracy%';

(SELECT first_name FROM sakila.actor
ORDER BY actor_id DESC
LIMIT 5)
UNION
(SELECT first_name FROM sakila.staff
LIMIT 1)
UNION
(SELECT first_name FROM sakila.customer
LIMIT 5 OFFSET 15)
ORDER BY first_name ASC;

(SELECT first_name, last_name FROM sakila.actor
LIMIT 60)
UNION ALL
(SELECT first_name, last_name  FROM sakila.customer
LIMIT 60)
ORDER BY first_name, last_name
LIMIT 15 OFFSET 45;

-- Uso do EXISTS: 
SELECT B.id, B.title FROM hotel.Books AS B
WHERE NOT EXISTS (
	SELECT * FROM hotel.Books_Lent AS BL
   WHERE B.id = BL.book_id
);

SELECT B.id, B.title FROM hotel.Books AS B
WHERE EXISTS (
	SELECT * FROM hotel.Books_Lent AS BL
   WHERE B.id = BL.book_id
) AND B.title LIKE '%lost%';

SELECT C.Name FROM hotel.Customers AS C
WHERE NOT EXISTS (
	SELECT * FROM hotel.CarSales AS CR
   WHERE C.CustomerID = CR.CustomerID
);
