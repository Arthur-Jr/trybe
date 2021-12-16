CREATE VIEW cancoes_premium AS
  SELECT S.Title AS `nome`,
  COUNT(H.Song_ID) AS `reproducoes`
  FROM SpotifyClone.Users AS U
  JOIN SpotifyClone.`History` AS H
  ON U.User_ID = H.User_ID
  JOIN SpotifyClone.Songs AS S
  ON H.Song_ID = S.Song_ID
  WHERE U.Plan_ID <> 1
  GROUP BY S.Title
  ORDER BY `nome`;
