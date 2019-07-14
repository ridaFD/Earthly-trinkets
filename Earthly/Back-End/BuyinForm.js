
module.exports = function (app) {
    var db = require('./database.js')
    app.post("/api/buy/", (req, res, next) => {
        // var errors=[]
        // if (!req.body.Name){
        //     errors.push("No password specified");
        // }
        // if (!req.body.Email){
        //     errors.push("No email specified");
        // }
        // if (errors.PhoneNumber){
        //     res.status(400).json({"error":errors.join(",")});
        //     return;
        // }
        // if (errors.ProductsID){
        //     res.status(400).json({"error":errors.join(",")});
        //     return;
        // }
        // if (errors.Quantity){
        //     res.status(400).json({"error":errors.join(",")});
        //     return;
        // }
        var data = {
            Name: req.body.name,
            Email: req.body.email,
            PhoneNumber: req.body.phonenumber,
            ProductsID: req.body.productsid,
            Quantity: parseInt(req.body.quantity),
            Message: req.body.message
        }
        console.log(data)
        var sql ='INSERT INTO Transactions (Name, Email, PhoneNumber, ProductsID, Quantity, Message) VALUES (?,?,?,?,?,?)'
        var params =[data.Name,data.Email, data.PhoneNumber, data.ProductsID, data.Quantity, data.Message]
        db.run(sql, params, function (err, result) {
            if (err){
                res.status(400).json({"error": err.message})
                return;
            }
            res.json({
                "message": "success",
                "data": "data",
                "id" : this.lastID
            })
        });
    })
}