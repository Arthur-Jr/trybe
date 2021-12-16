CREATE DATABASE IF NOT EXISTS SpotifyClone;
USE SpotifyClone;

CREATE TABLE `Users`(
  User_ID INT PRIMARY KEY AUTO_INCREMENT,
  User_name VARCHAR(50) NOT NULL,
  User_age INT NOT NULL,
  Plan_ID INT NOT NULL
);

CREATE TABLE `Plans`(
  Plan_ID INT PRIMARY KEY AUTO_INCREMENT,
  Price DOUBLE NOT NULL,
  Plan_title VARCHAR(20)
);

ALTER TABLE `Users`
  ADD FOREIGN KEY (Plan_ID) REFERENCES `Plans` (Plan_ID);
  
CREATE TABLE `Artists`(
  Artist_ID INT AUTO_INCREMENT,
  Artist_name VARCHAR(50) NOT NULL,
  CONSTRAINT PRIMARY KEY (Artist_ID)
);

CREATE TABLE `User_followed_artists`(
  User_ID INT NOT NULL,
  Artist_ID INT NOT NULL,
  FOREIGN KEY (User_ID) REFERENCES `Users` (User_ID),
  FOREIGN KEY (Artist_ID) REFERENCES `Artists` (Artist_ID),
  CONSTRAINT PRIMARY KEY (User_ID, Artist_ID)
);

CREATE TABLE `Albums`(
  Album_ID INT PRIMARY KEY AUTO_INCREMENT,
  Title VARCHAR(100) NOT NULL,
  Artist_ID INT NOT NULL,
  FOREIGN KEY (Artist_ID) REFERENCES `Artists` (Artist_ID)
);

CREATE TABLE `Songs`(
  Song_ID INT PRIMARY KEY AUTO_INCREMENT,
  Title VARCHAR(50) NOT NULL,
  Album_ID INT NOT NULL,
  FOREIGN KEY (Album_ID) REFERENCES `Albums` (Album_ID)
);

CREATE TABLE `History`(
  User_ID INT NOT NULL,
  Song_ID INT NOT NULL,
  FOREIGN KEY (User_ID) REFERENCES `Users` (User_ID),
  FOREIGN KEY (Song_ID) REFERENCES `Songs` (Song_ID),
  CONSTRAINT PRIMARY KEY (User_ID, Song_ID)
);

INSERT INTO `Plans` (Price, Plan_title)
VALUES
  (0, 'gratuito'),
  (5.99, 'universitário'),
  (7.99, 'familiar');
  
INSERT INTO `Artists` (Artist_name)
VALUES
  ('Walter Phoenix'),
  ('Peter Strong'),
  ('Lance Day'),
  ('Freedie Shannon');

INSERT INTO `Users` (User_name, User_age, Plan_ID)
VALUES
  ('Thati', 23, 1),
  ('Cintia', 35, 3),
  ('Bill', 20, 2),
  ('Roger', 45, 1);

INSERT INTO `User_followed_artists` (User_ID, Artist_ID)
VALUES
  (1, 1),
  (1, 4),
  (1, 3),
  (2, 1),
  (2, 3),
  (3, 2),
  (3, 1),
  (4, 4);

INSERT INTO `Albums` (Title, Artist_ID)
VALUES
  ('Envious', 1),
  ('Exuberant', 1),
  ('Hallowed Steam', 2),
  ('Incandescent', 3),
  ('Temporary Culture', 4);
  
INSERT INTO `Songs` (Title, Album_ID)
VALUES
  ('Soul For Us', 1),
  ('Reflections Of Magic', 1),
  ('Dance With Her Own', 1),
  ('Troubles Of My Inner Fire', 2),
  ('Time Fireworks', 2),
  ('Magic Circus', 3),
  ('Honey, So Do I', 3),
  ("Sweetie, Let's Go Wild", 3),
  ('She Knows', 3),
  ('Fantasy For Me', 3),
  ('Celebration Of More', 4),
  ('Rock His Everything', 4),
  ('Home Forever', 4),
  ('Diamond Power', 4),
  ("Honey, Let's Be Silly", 4),
  ('Thang Of Thunder', 5),
  ('Words Of Her Life', 5),
  ('Without My Streets', 5);
  
INSERT INTO `History` (User_ID, Song_ID)
VALUES
  (1, 1),
  (1, 6),
  (1, 14),
  (1, 16),
  (2, 13),
  (2, 17),
  (2, 2),
  (2, 15),
  (3, 4),
  (3, 16),
  (3, 6),
  (4, 3),
  (4, 18),
  (4, 11);
