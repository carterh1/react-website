var mysql = require('mysql');

var con = mysql.createConnection({
  host: "160.153.129.234",
  user: "admin_Heather",
  password: "Carter12",
  database: "onceuponalimeBlog"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM tbl_post ORDER BY date", function (err, result, fields){
    if (err) throw err;
    console.log(result);
  })
})
