// Get a all the products
module.exports = function (app) {
    var db = require('./database.js')
    app.get("/api/products", (req, res, next) => {
        var sql = "Select * from Products join ImagesProducts on Products.ProductsID = ImagesProducts.ProductsID Group by Products.ProductsID"
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
    
    // Get a single procuct by id
    app.get("/api/product/:id", (req, res, next) => {
        var sql = 'select * FROM Products where ProductsID = ?'
        var params = [req.params.id]
        db.get(sql, params, (err, row) => {
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

    app.get("/api/product/delete/:id", (req, res, next) => {
        console.log('here', req.params.id)
        db.run(
            'DELETE FROM ImagesProducts WHERE ProductsID = ?',
            req.params.id,
            function (err, result) {
                if (err){
                    res.status(400).json({"error": res.message})
                    return;
                }
                db.run(
                    'DELETE FROM Products WHERE ProductsID = ?',
                    req.params.id,
                    function (err, result) {
                        if (err){
                            res.status(400).json({"error": res.message})
                            return;
                        }
                        res.json({"message":"deleted", changes: this.changes})
                });
                })
        });

        app.post("/api/product", (req, res, next) => {
            // var errors=[]
            // if (!req.body.title){
            //     errors.push("No title specified");
            // }
            // if (!req.body.description){
            //     errors.push("No description specified");
            // }
            // if (!req.body.price){
            //     errors.push("No price specified");
            // }
            // if (!req.body.construction_time){
            //     errors.push("No construction_time specified");
            // }
            // if (!req.body.categorie){
            //     errors.push("No categorie specified");
            // }
            // if (!req.body.image){
            //     errors.push("No image specified");
            // }
            // if (errors.length){
            //     res.status(400).json({"error":errors.join(",")});
            //     return;
            // }
            var data = {
                Name: req.body.name,
                Price: req.body.price,
                Material: req.body.material,
                Description: req.body.description,
                Category: req.body.category,
                Date: req.body.date
            }
            

            var sql ='INSERT INTO Products (Name, Price, Material, Description, Category, Date) VALUES (?,?,?,?,?,?)'
            var params =[data.Name, data.Price, data.Material, data.Description, data.Category, "data.Date"]
        
            db.run(sql, params, function (err, result) {
                if (err){
                    res.status(400).json({"error": err.message})
                    return;
                }
                res.json({
                    "message": "success",
                    "data": data,
                    "id" : this.lastID
                })
            });
        });

        app.post("/api/image", (req, res, next) => {
            // var errors=[]
            // if (!req.body.title){
            //     errors.push("No title specified");
            // }
            // if (!req.body.description){
            //     errors.push("No description specified");
            // }
            // if (!req.body.price){
            //     errors.push("No price specified");
            // }
            // if (!req.body.construction_time){
            //     errors.push("No construction_time specified");
            // }
            // if (!req.body.categorie){
            //     errors.push("No categorie specified");
            // }
            // if (!req.body.image){
            //     errors.push("No image specified");
            // }
            // if (errors.length){
            //     res.status(400).json({"error":errors.join(",")});
            //     return;
            // }
            var data = {
                ImgName: req.body.name,
                ProductsID: req.body.id
            }
            
            var sql ='INSERT INTO ImagesProducts (ImgName, ProductsID) VALUES (?,?)'
            var params =[data.ImgName, data.ProductsID]
        
            db.run(sql, params, function (err, result) {
                if (err){
                    res.status(400).json({"error": err.message})
                    return;
                }
                res.json({
                    "message": "success",
                    "data": data,
                    "id" : this.lastID
                })
            });
        });
    
}