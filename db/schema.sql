create database whiskey_db;
use whiskey_db;

CREATE TABLE whiskeyTable (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR (100) NULL,
sampled tinyint(1),
PRIMARY KEY (id) 
);