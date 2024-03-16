CREATE DATABASE prec_faculty;
USE prec_faculty;

CREATE TABLE Teacher (
 Teacher_name VARCHAR(50)NOT NULL ,
  Teacher_username VARCHAR(20) NOT NULL,
  Teacher_password VARCHAR(20) NOT NULL,
  Teacher_subject VARCHAR(10) NOT NULL
 
);

INSERT INTO Teacher (Teacher_name,Teacher_username, Teacher_password, Teacher_subject)
VALUES
  ('Nikita sathe','Tuser1', 'pass1', 'Math'),
  ('priyanka chature','Tuser2', 'pass2', 'science'),
  ('kalayni gaikar','Tuser3', 'pass3', 'english');
   