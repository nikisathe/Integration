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
app.post('/check', (req, res) => {
  const college_code = req.body.college_code;
  
  const sql = 'SELECT * FROM college_list WHERE college_code = ?';
  college_connection.query(sql, [college_code], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'College code not found!' });
    } else {
      res.status(200).json({ success: true });
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
         
          res.status(200).json({ success: true });
      }

      return res.status(404).json({ error: "Student data not found" });
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
