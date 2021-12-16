CREATE VIEW faturamento_atual AS
  SELECT FORMAT(MIN(P.Price), 2) AS `faturamento_minimo`,
  FORMAT(MAX(P.Price), 2) AS `faturamento_maximo`,
  FORMAT(SUM(P.Price) / COUNT(U.User_ID), 2) AS `faturamento_medio`,
  FORMAT(SUM(P.Price), 2) AS `faturamento_total`
  FROM SpotifyClone.Plans AS P
  JOIN SpotifyClone.Users AS U
  ON U.Plan_ID = P.Plan_ID;

-- Referência ao FORMAT : https://www.w3schools.com/sql/func_mysql_format.asp
