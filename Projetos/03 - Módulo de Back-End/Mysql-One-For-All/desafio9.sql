USE SpotifyClone;
DELIMITER $$

CREATE PROCEDURE albuns_do_artista (IN selected_artist VARCHAR(50))
BEGIN
  SELECT A.Artist_name AS `artista`,
  AL.Title AS `album`
  FROM SpotifyClone.Artists AS A
  JOIN SpotifyClone.Albums AS AL
  ON A.Artist_ID = AL.Artist_ID
  WHERE A.Artist_name = selected_artist
  ORDER BY `album`;
END $$

DELIMITER ;
