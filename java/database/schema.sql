BEGIN TRANSACTION;

DROP TABLE IF EXISTS pokemon_in_checklists, checklists, users, pkmn_art, types, pokemon;

CREATE TABLE users (
	user_id SERIAL,
	username varchar(50) NOT NULL UNIQUE,
	password_hash varchar(200) NOT NULL,
	role varchar(50) NOT NULL,
	CONSTRAINT PK_user PRIMARY KEY (user_id)
);

CREATE TABLE pokemon (
	id BIGINT PRIMARY KEY,
	pokedex_number BIGINT NOT NULL,
	name varchar(20) NOT NULL,
	type1 varchar(20),
	type2 varchar(20)
);

CREATE TABLE types (
	name varchar(20) PRIMARY KEY,
	color varchar (10) NOT NULL UNIQUE,
	icon_name varchar(50) NOT NULL UNIQUE
);

CREATE TABLE pkmn_art (
	id SERIAL,
	pokemon_id BIGINT NOT NULL,
	date_posted DATE
);

CREATE TABLE checklists (
	checklist_id SERIAL PRIMARY KEY,
	user_id BIGINT NOT NULL,
	name varchar (50) NOT NULL,
	description TEXT,
	icon_name varchar(50),
	color varchar(10)
);

CREATE TABLE pokemon_in_checklists (
	checklist_id BIGINT NOT NULL,
	pokemon_id BIGINT NOT NULL,
	date_added DATE
);

COMMIT TRANSACTION;
