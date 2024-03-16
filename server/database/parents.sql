CREATE DATABASE parent;
USE parent ;

CREATE TABLE parentinfo (
 parent_name VARCHAR(50)NOT NULL ,
  parent_username VARCHAR(20) NOT NULL,
parent_password VARCHAR(20) NOT NULL,
Permanent_Address VARCHAR(10) NOT NULL
 );

INSERT INTO parentinfo (parent_name,parent_username, parent_password,Permanent_Address )
VALUES
  ('Nikita sathe','ptuser1', 'pass1', 'nagar'),
  ('priyanka chature','ptuser2', 'pass2', 'ashawi'),
  ('kalayni gaikar','ptuser3', 'pass3', 'loni');
   