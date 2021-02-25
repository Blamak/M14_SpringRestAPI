CREATE TABLE IF NOT EXISTS Shop(
  shop_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(250) DEFAULT NULL,
  capacity INTEGER DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS Pictures(
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(250) DEFAULT NULL,
  author VARCHAR(250) DEFAULT NULL,
  shop_id INTEGER DEFAULT NULL,
  CONSTRAINT pictures_fk FOREIGN KEY (shop_id) REFERENCES Shop (shop_id)
);

INSERT INTO Shop (name) VALUES ('Gracia');
INSERT INTO Shop (name) VALUES ('Sant Marti');
INSERT INTO Shop (name) VALUES ('Eixample');
INSERT INTO Shop (name) VALUES ('Horta');
INSERT INTO Shop (name) VALUES ('Clot');

INSERT INTO Pictures (title,author,shop_id) VALUES ('The Starry Night', 'Vincent van Gogh', 1);
INSERT INTO Pictures (title,author,shop_id) VALUES ('Girl with a Pearl Earring','Johannes Vermeer',1);
INSERT INTO Pictures (title,author,shop_id) VALUES ('The Last Supper','Leonaro da Vinci',2);
INSERT INTO Pictures (title,author,shop_id) VALUES ('Blue (Moby Dick)','Jackson Pollock',2);