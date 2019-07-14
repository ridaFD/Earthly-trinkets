// Get a all the products
module.exports = function (app) {
    var db = require('./database.js')
    app.get("/api/events", (req, res, next) => {
        var sql = "Select * from Events"
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
}