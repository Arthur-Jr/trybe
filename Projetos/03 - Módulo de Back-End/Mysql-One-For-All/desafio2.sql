CREATE VIEW estatisticas_musicais AS
  SELECT COUNT(S.Song_ID) AS `cancoes`,
  (SELECT COUNT(A.Artist_ID) FROM SpotifyClone.Artists AS A) AS `artistas`,
  (SELECT COUNT(AL.Album_ID) FROM SpotifyClone.Albums AS AL) AS `albuns`
  FROM SpotifyClone.Songs AS S;
