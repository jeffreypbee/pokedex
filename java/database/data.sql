BEGIN TRANSACTION;

INSERT INTO users (username,password_hash,role) VALUES ('user','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_USER');
INSERT INTO users (username,password_hash,role) VALUES ('admin','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_ADMIN');

INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (1, 1, 'Bulbasaur', 'grass', 'poison');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (2, 2, 'Ivysaur', 'grass', 'poison');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (3, 3, 'Venusaur', 'grass', 'poison');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (4, 4, 'Charmander', 'fire');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (5, 5, 'Charmeleon', 'fire');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (6, 6, 'Charizard', 'fire', 'flying');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (7, 7, 'Squirtle', 'water');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (8, 8, 'Wartortle', 'water');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (9, 9, 'Blastoise', 'water');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (150, 150, 'Mewtwo', 'psychic');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (151, 151, 'Mew', 'psychic');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (152, 152, 'Chikorita', 'grass');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (153, 153, 'Bayleef', 'grass');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (154, 154, 'Meganium', 'grass');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (161, 161, 'Sentret', 'normal');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (162, 162, 'Furret', 'normal');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (169, 169, 'Crobat', 'poison', 'flying');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (175, 175, 'Togepi', 'fairy');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (176, 176, 'Togetic', 'fairy');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (179, 179, 'Mareep', 'electric');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (180, 180, 'Flaafy', 'electric');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (181, 181, 'Ampharos', 'electric');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (198, 198, 'Murkrow', 'dark', 'flying');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (204, 204, 'Pineco', 'bug');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (205, 205, 'Forretress', 'bug', 'steel');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (220, 220, 'Swinub', 'ice', 'ground');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (221, 221, 'Piloswine', 'ice', 'ground');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (251, 251, 'Celebi', 'psychic', 'grass');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (285, 285, 'Shroomish', 'grass');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (286, 286, 'Breloom', 'grass', 'fighting');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (303, 303, 'Mawile', 'steel', 'fairy');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (318, 318, 'Carvanha', 'water', 'dark');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (319, 319, 'Sharpedo', 'water', 'dark');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (333, 333, 'Swablu', 'normal', 'flying');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (334, 334, 'Altaria', 'dragon', 'flying');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (343, 343, 'Baltoy', 'ground', 'psychic');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (344, 344, 'Claydol', 'ground', 'psychic');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (352, 352, 'Kecleon', 'normal');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (385, 385, 'Jirachi', 'steel', 'psychic');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (386, 386, 'Deoxys', 'psychic');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (407, 407, 'Roserade', 'grass', 'poison');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (425, 425, 'Drifloon', 'ghost', 'flying');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (426, 426, 'Drifblim', 'ghost', 'flying');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (430, 430, 'Honchkrow', 'dark', 'flying');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (456, 456, 'Finneon', 'water');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (457, 457, 'Lumineon', 'water');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (556, 556, 'Maractus', 'grass');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (568, 568, 'Trubbish', 'poison');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (569, 569, 'Garbodor', 'poison');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (582, 582, 'Vanillite', 'ice');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (583, 583, 'Vanillish', 'ice');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (584, 584, 'Vanilluxe', 'ice');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (607, 607, 'Litwick', 'ghost', 'fire');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (608, 608, 'Lampent', 'ghost', 'fire');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (609, 608, 'Chandelure', 'ghost', 'fire');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (626, 626, 'Bouffalant', 'normal');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (636, 636, 'Larvesta', 'bug', 'fire');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (637, 637, 'Volcarona', 'bug', 'fire');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (661, 661, 'Fletchling', 'normal', 'flying');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (662, 662, 'Fletchinder', 'fire', 'flying');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (663, 663, 'Talonflame', 'fire', 'flying');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (684, 684, 'Swirlix', 'fairy');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (685, 685, 'Slurpuff', 'fairy');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (698, 698, 'Amaura', 'rock', 'ice');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (699, 699, 'Aurorus', 'rock', 'ice');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (701, 701, 'Hawlucha', 'fighting', 'flying');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (780, 780, 'Drampa', 'normal', 'dragon');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (840, 840, 'Applin', 'grass', 'dragon');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (841, 841, 'Flapple', 'grass', 'dragon');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (842, 842, 'Appletun', 'grass', 'dragon');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (848, 848, 'Toxel', 'electric', 'poison');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (849, 849, 'Toxtricity', 'electric', 'poison');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (866, 866, 'Mr. Rime', 'ice', 'psychic');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (874, 874, 'Stonjourner', 'rock');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (878, 878, 'Cufant', 'steel');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (879, 879, 'Copperajah', 'steel');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (902, 902, 'Basculegion', 'water', 'ghost');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (906, 906, 'Sprigatito', 'grass');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (907, 907, 'Floragato', 'grass');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (908, 908, 'Meowscarada', 'grass', 'dark');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (909, 909, 'Fuecoco', 'fire');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (910, 910, 'Crocalor', 'fire');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (911, 911, 'Skeledirge', 'fire', 'ghost');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (912, 912, 'Quaxly', 'water');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (913, 913, 'Quaxwell', 'water');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (914, 914, 'Quaquaval', 'water', 'fighting');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (915, 915, 'Lechonk', 'normal');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (916, 916, 'Oinkologne', 'normal');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (935, 935, 'Charcadet', 'fire');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (936, 936, 'Armarouge', 'fire', 'psychic');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (937, 937, 'Ceruledge', 'fire', 'ghost');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (940, 940, 'Wattrel', 'electric', 'flying');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (941, 941, 'Kilowattrel', 'electric', 'flying');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (948, 948, 'Toedscool', 'ground', 'grass');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (949, 949, 'Toadscruel', 'ground', 'grass');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (950, 950, 'Klawf', 'rock');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (973, 973, 'Flamigo', 'flying', 'fighting');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (974, 974, 'Cetoddle', 'ice');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (975, 975, 'Cetitan', 'ice');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (976, 976, 'Veluza', 'water', 'psychic');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (977, 977, 'Dondozo', 'water');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (978, 978, 'Tatsugiri', 'water', 'dragon');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (979, 979, 'Annihilape', 'fighting', 'ghost');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (980, 980, 'Clodsire', 'poison', 'ground');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (981, 981, 'Farigiraf', 'normal', 'psychic');
INSERT INTO pokemon(id, pokedex_number, name, type1) VALUES (982, 982, 'Dudunsparce', 'normal');
INSERT INTO pokemon(id, pokedex_number, name, type1, type2) VALUES (983, 983, 'Kingambit', 'dark', 'steel');


INSERT INTO pkmn_art(pokemon_id) VALUES (3);

COMMIT TRANSACTION;
