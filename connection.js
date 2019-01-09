exports.Connection(){
  var mysql = require('mysql');
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "RTLS"
  });
}


function GettUsers(){
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM Users", function (err, userselect, fields) {
    if (err) throw err;
    console.log(userselect);
  });
});
}

function GetAnchors(){
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM Anchors", function (err, anchorsselect, fields) {
    if (err) throw err;
    console.log(anchorsselect);
  });
});
}

function GetDevices(){
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM Devices", function (err, devicesselect, fields) {
    if (err) throw err;
    console.log(devicesselect);
  });
});
}
