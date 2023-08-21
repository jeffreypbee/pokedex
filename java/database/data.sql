BEGIN TRANSACTION;

INSERT INTO users (username,password_hash,role) VALUES ('user','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_USER');
INSERT INTO users (username,password_hash,role) VALUES ('admin','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_ADMIN');

INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (1, 1, 'Bulbasaur', 'grass', 'poison');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (2, 2, 'Ivysaur', 'grass', 'poison');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (3, 3, 'Venusaur', 'grass', 'poison');

COMMIT TRANSACTION;
