CREATE TABLE IF NOT EXISTS shop(
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(250) DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS pictures(
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(250) DEFAULT NULL,
  author VARCHAR(250) DEFAULT NULL,
  shop_id INTEGER DEFAULT NULL,
  CONSTRAINT pictures_fk FOREIGN KEY (shop_id) REFERENCES shop (id)
);

INSERT INTO shop (name) VALUES ('Gracia');
INSERT INTO shop (name) VALUES ('Sant Marti');
INSERT INTO shop (name) VALUES ('Eixample');
INSERT INTO shop (name) VALUES ('Horta');
INSERT INTO shop (name) VALUES ('Clot');

INSERT INTO pictures (title, author, shop_id) VALUES ('The Starry Night', 'Vincent van Gogh', 1);
INSERT INTO pictures (title,author,shop_id) VALUES ('Girl with a Pearl Earring','Johannes Vermeer',1);
INSERT INTO pictures (title,author,shop_id) VALUES ('The Last Supper','Leonaro da Vinci',2);
INSERT INTO pictures (title,author,shop_id) VALUES ('Blue (Moby Dick)','Jackson Pollock',2);