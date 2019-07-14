// Get a all the products
module.exports = function (app) {
    var db = require('./database.js')
    app.get("/api/single/singleproduct/:id", (req, res, next) => {
        var sql = "Select * from Products join ImagesProducts on Products.ProductsID = ImagesProducts.ProductsID where Products.ProductsID = ?"
        var params = [req.params.id]
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