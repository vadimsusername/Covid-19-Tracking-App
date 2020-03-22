
DROP DATABASE IF EXISTS covid19_db;
CREATE database covid19_db;

USE covid19_db;

CREATE TABLE countries (
    id INT(10) AUTO_INCREMENT NOT NULL,
    countryName VARCHAR(100),
    incidents INT(200),
    deaths INT(200),
    PRIMARY KEY(id)
);

USE covid19_db;
CREATE TABLE countries_history (
    id INT(10) AUTO_INCREMENT NOT NULL,
    country VARCHAR(100),
    date DATE,
    confirmed INT(100),
    deaths INT(200),
    PRIMARY KEY(id)
);

USE covid19_db;
CREATE TABLE countries_searched (
    id INT(10) AUTO_INCREMENT NOT NULL,
    country VARCHAR(100),
    PRIMARY KEY(id)
)