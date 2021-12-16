CREATE VIEW historico_reproducao_usuarios AS
  SELECT U.User_name AS `usuario`,
  (
    SELECT S.Title
    FROM SpotifyClone.Songs AS S
    WHERE S.Song_ID = H.Song_ID
  ) AS `nome`
  FROM SpotifyClone.Users AS U
  JOIN SpotifyClone.`History` AS H
  ON U.User_ID = H.User_ID
  ORDER BY `usuario`, `nome`;
