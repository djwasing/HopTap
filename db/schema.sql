drop database if exists whiskey_db;
create database whiskey_db;
use whiskey_db;

CREATE TABLE whiskeyTable (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR (100) NULL,
sampled BOOLEAN DEFAULT false,
PRIMARY KEY (id) 
);