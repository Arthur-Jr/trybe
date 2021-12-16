USE SpotifyClone;
DELIMITER $$

CREATE TRIGGER trigger_usuario_delete
BEFORE DELETE ON SpotifyClone.Users
FOR EACH ROW
BEGIN
  DELETE FROM SpotifyClone.User_followed_artists AS A
  WHERE A.User_ID = OLD.User_ID;
  DELETE FROM SpotifyClone.`History` AS H
  WHERE H.User_ID = OLD.User_ID;
END $$

DELIMITER ;
