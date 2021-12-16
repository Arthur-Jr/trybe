CREATE VIEW perfil_artistas AS
  SELECT A.Artist_name AS `artista`,
  AL.Title AS `album`,
  (
    SELECT COUNT(F.User_ID)
    FROM SpotifyClone.User_followed_artists AS F
    WHERE F.Artist_ID = A.Artist_ID
  ) AS `seguidores`
  FROM SpotifyClone.Artists AS A
  JOIN SpotifyClone.Albums AS AL
  ON AL.Artist_ID = A.Artist_ID
  ORDER BY `seguidores` DESC, `artista`, `album`;
