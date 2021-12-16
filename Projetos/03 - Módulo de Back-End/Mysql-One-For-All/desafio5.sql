CREATE VIEW top_2_hits_do_momento AS 
  SELECT S.Title AS `cancao`,
  (
    SELECT COUNT(H.Song_ID)
    FROM SpotifyClone.`History` AS H
    WHERE H.Song_ID = S.Song_ID
  ) AS `reproducoes`
  FROM SpotifyClone.Songs AS S
  ORDER BY `reproducoes` DESC, `cancao`
  LIMIT 2;
