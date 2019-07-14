const sqlite3 = require('sqlite3').verbose();



var db = require("./database.js")
// Get a all the jewelry care list
module.exports = function (app){
    app.get("/api/jewelrycares", (req, res, next) => {
        var sql = "select * from care"
        var params = []
        db.all(sql, params, (err, rows) => {
          if (err) {
            res.status(400).json({ "error": err.message });
            return;
          }
          // console.log(rows)
          res.json({
            "message": "success",
            "data": rows
          })
        });
      });

      // get a single jewelry care by ID
      app.get('/api/jewelrycare/:id', (req, res, next) => {
          var sql = 'select * from care where CareID = ?'
          var params = [req.params.id]
          db.get(sql, params, (err, row) => {
              if (err) {
                  res.status(400).json({ 'error': err.message })
                  return
              }
              res.json({
                  'message': 'success',
                  'data': row
              })
          })
      })
      app.get('/api/jewelrycare/:')
} 