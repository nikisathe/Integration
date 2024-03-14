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

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
