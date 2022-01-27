/*Creating the database*/
CREATE DATABASE DESOFIW;

/*Using the created database*/
USE DESOFIW;

/*Creating table persons*/
CREATE TABLE Persons(
	person_id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    phone_number VARCHAR(8) NOT NULL,
    image VARCHAR(255),
    status CHAR(3) NOT NULL DEFAULT 'ACT' /*ACT | INA*/
);

/*Creating table users*/
CREATE TABLE Users(
	user_id INT AUTO_INCREMENT,
    person_id INT NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password CHAR(60) NOT NULL,
    status CHAR(3) NOT NULL DEFAULT 'ACT', /*ACT | INA | BLO*/
    recover_pin VARCHAR(255) NOT NULL,
    user_type CHAR(3) NOT NULL DEFAULT 'CLI',
    register_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_info_date DATETIME NOT NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(user_id, person_id),
    FOREIGN KEY (person_id) REFERENCES Persons(person_id)
);

/*Creating table login histoy*/
CREATE TABLE Login_history(
	login_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    user_id INT NOT NULL,
    attempt_date DATETIME NOT NULL,
    attempt_status VARCHAR(10) DEFAULT 'SUCCESS', /*SUCCESS | FAIL*/
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

