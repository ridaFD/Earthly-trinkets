var db = require("./database.js")

// Get a all the Admin list
module.exports = function (app){
    app.get("/api/admins", (req, res, next) => {
        var sql = "select * from Admin"
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

      // get a single Admin by ID
      app.get('/api/admin/:id', (req, res, next) => {
          var sql = 'select * from Admin where AdminID = ?'
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
} 
