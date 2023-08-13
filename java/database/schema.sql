BEGIN TRANSACTION;

DROP TABLE IF EXISTS users, types;

CREATE TABLE users (
	user_id SERIAL,
	username varchar(50) NOT NULL UNIQUE,
	password_hash varchar(200) NOT NULL,
	role varchar(50) NOT NULL,
	CONSTRAINT PK_user PRIMARY KEY (user_id)
);

CREATE TABLE types (
	type_id SERIAL PRIMARY KEY,
	name varchar(20) NOT NULL UNIQUE,
	color varchar (10) NOT NULL UNIQUE,
	icon_name varchar(50) NOT NULL UNIQUE
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
	date_added DATETIME
);

COMMIT TRANSACTION;
