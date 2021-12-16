CREATE VIEW top_3_artistas AS 
  SELECT A.Artist_name AS `artista`,
  (
    SELECT COUNT(F.Artist_ID)
    FROM SpotifyClone.User_followed_artists AS F
    WHERE A.Artist_ID = F.Artist_ID
  ) AS `seguidores`
  FROM SpotifyClone.Artists AS A
  ORDER BY `seguidores` DESC, `artista`
  LIMIT 3;
