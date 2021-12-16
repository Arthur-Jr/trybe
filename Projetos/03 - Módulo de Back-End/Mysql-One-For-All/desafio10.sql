USE SpotifyClone;
DELIMITER $$

CREATE FUNCTION quantidade_musicas_no_historico (selected_id INT)
RETURNS INT READS SQL DATA
BEGIN
  RETURN (
    SELECT COUNT(H.Song_ID)
    FROM SpotifyClone.`History` AS H
    JOIN SpotifyClone.Users AS U
    ON U.User_ID = selected_id
    WHERE H.User_ID = U.User_ID
  );
END $$

DELIMITER ;
