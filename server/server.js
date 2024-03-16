const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const college_connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'college',
});

college_connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the college database!');
});
const student_connection_PREC01 = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '', 
  database: "PREC01"
});

student_connection_PREC01.connect((error) => {
  if (error) {
      console.error("Error while connecting to Amrt student database:", error);
      process.exit(1);
  } else {
      console.log("PREC Student database connected");
  }
});
const faculty_connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "prec_faculty",
});
faculty_connection.connect((error) => {
  if (error) {
    console.error("Error while connecting to faculty database:", error);
    process.exit(0);
  } else {
    console.log("faculty database connect");
  } 
  
});
const parent_connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "parent",
});
parent_connection.connect((error) => {
  if (error) {
    console.error("Error while connecting to parent database:", error);
    process.exit(0);
  } else {
    console.log("parent database connect");
  } 
  
});
app.post('/check', (req, res) => {
  const college_code = req.body.college_code;
  
  const sql = 'SELECT * FROM college_list WHERE college_code = ?';
  college_connection.query(sql, [college_code], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Internal server error' });
     
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'College code not found!' });
    } else {
     return res.status(200).json({ success: true });
    }
  });
});

app.post('/login', (req, res) => {
  const stud_username = req.body.stud_username;
  const stud_password = req.body.stud_password;

  const query_prec = 'SELECT * FROM student WHERE stud_username = ? AND stud_password = ?';

  student_connection_PREC01.query(query_prec, [stud_username, stud_password], (err, result_prec) => {
      if (err) {
          console.error("Error executing PREC student query", err);
          return res.status(500).json({ message: "Internal server error" });
      }

      if (result_prec.length > 0) {
         
        return  res.status(200).json({ success: true });
      }

      return res.status(404).json({ error: "Student data not found" });
  });
});

app.post("/parentlogin", (req, res) => {
  const parent_username = req.body.parent_username;
  const parent_password = req.body.parent_password;

  const query_parent =
    "SELECT * FROM parentinfo WHERE parent_username = ? and parent_password = ?";

  parent_connection.query(
    query_parent,
    [parent_username, parent_password],
    (err, result_parent) => {
      if (err) {
        console.error("error executing parent query", err);
       return res.status(500).json({ message: "internal server error" });
        
      }

      if (result_parent.length > 0) {
       return res.status(200).json({success: true});
     
       
      }else {
       return res.status(404).json({error:"parent data found"})
      }
     
    }
  );
});

app.post("/Facultylogin", (req, res) => {
  const Teacher_username = req.body.Teacher_username;
  const Teacher_password = req.body.Teacher_password;

  const query_Teacher_prec =
    "SELECT * FROM Teacher WHERE Teacher_username = ? and Teacher_password = ?";

  faculty_connection.query(
    query_Teacher_prec,
    [Teacher_username, Teacher_password],
    (err, result_Teacher) => {
      if (err) {
        console.error("Error executing faculty login query", err);
        return res.status(500).json({ message: "Internal server error" });
        
      }

      if (result_Teacher.length > 0) {
         return res.status(200).json({ success: true });
      } else {
       return res.status(404).json({ error: "Teacher data not found" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
