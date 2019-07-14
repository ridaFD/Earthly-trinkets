module.exports = function (app) {
    var db = require('./database.js')
    // Get a single procuct by id
    app.get("/api/OneEvent/:id", (req, res, next) => {
        var sql = "select * from Events where EventsID = ?"
        console.log(req.params.id)
        db.get(sql,[req.params.id], (err, row) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            res.json({
                "message": "success",
                "data": row
            })
        });
    });
}