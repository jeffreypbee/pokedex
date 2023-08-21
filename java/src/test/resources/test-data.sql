BEGIN TRANSACTION;

INSERT INTO users (username,password_hash,role) VALUES ('user1','user1','ROLE_USER');
INSERT INTO users (username,password_hash,role) VALUES ('user2','user2','ROLE_USER');
INSERT INTO users (username,password_hash,role) VALUES ('user3','user3','ROLE_USER');

INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (1, 1, 'Bulbasaur', 'grass', 'poison');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (2, 2, 'Ivysaur', 'grass', 'poison');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (3, 3, 'Venusaur', 'grass', 'poison');

COMMIT TRANSACTION;
