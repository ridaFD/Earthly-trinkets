
// Create express app
var express = require("express")
var app = express()
var db = require("./database.js")


const cors = require("cors")

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
// Server port
var HTTP_PORT = 8000 
// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});
// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
    
});
app.use(cors());

require('./Products')(app)
require('./ImagesProducts')(app)
require('./Events')(app)
require('./OneEvent')(app)
require('./JewelryCare')(app)
require('./BuyinForm')(app) 
require('./singleProducts')(app)
require('./contactus')(app)
require('./home')(app)
// require('./Admin')(app)


// require('./Admin')(app)


// Get a List of products
// app.get("/api/products", (req, res, next) => {
//     var sql = "select * from Products"
//     var params = []
//     db.all(sql, params, (err, rows) => {
//         if (err) {
//           res.status(400).json({"error":err.message});
//           return;
//         }
//         // console.log(rows)
//         res.json({
//             "message":"success",
//             "data":rows
//         })
//       });
// });
// // Get a single procuct by id
// app.get("/api/product/:id", (req, res, next) => {
//     var sql = "select * from Products where ProductsID = ?"
//     var params = [req.params.id]
//     db.get(sql, params, (err, row) => {
//         if (err) {
//           res.status(400).json({"error":err.message});
//           return;
//         }
//         res.json({
//             "message":"success",
//             "data":row
//         })
//       });
// });
// Get the all images
// app.get("/api/imagesproducts", (req, res, next) => {
//     var sql = "select * from ImagesProducts"
//     var params = []
//     db.all(sql, params, (err, rows) => {
//         if (err) {
//           res.status(400).json({"error":err.message});
//           return;
//         }
//         // console.log(rows)
//         res.json({
//             "message":"success",
//             "data":rows
//         })
//       });
// });
// Create a new product
// app.post("/api/product/", (req, res, next) => {
//     var errors=[]
//     if (!req.body.Name){
//         errors.push("No Name specified");
//     }
//     if (!req.body.Price){
//         errors.push("No Price specified");
//     }
//     if (!req.body.Type){
//         errors.push("No Type specified");
//     }
//     if (!req.body.Description){
//         errors.push("No Description specified");
//     }
//     if (!req.body.Category){
//         errors.push("No Category specified");
//     }
//     // if (errors.length){
//     //     res.status(400).json({"error":errors.join(",")});
//     //     return;
//     // }
//     var data = {
//         Name: req.body.Name,
//         Price: req.body.Price,
//         Type : req.body.Type,
//         Description : req.body.Description,
//         Category : req.body.Category
//     }
//     var sql ='INSERT INTO user (name, email, password) VALUES (?,?,?)'
//     var params =[data.name, data.email, data.password]
//     db.run(sql, params, function (err, result) {
//         if (err){
//             res.status(400).json({"error": err.message})
//             return;
//         }
//         res.json({
//             "message": "success",
//             "data": data,
//             "id" : this.lastID
//         })
//     });
// })
// Update an user
// app.patch("/api/user/:id", (req, res, next) => {
//     var data = {
//         name: req.body.name,
//         email: req.body.email,
//         password : req.body.password ? md5(req.body.password) : null
//     }
//     db.run(
//         `UPDATE user set 
//            name = COALESCE(?,name), 
//            email = COALESCE(?,email), 
//            password = COALESCE(?,password) 
//            WHERE id = ?`,
//         [data.name, data.email, data.password, req.params.id],
//         function (err, result) {
//             if (err){
//                 res.status(400).json({"error": res.message})
//                 return;
//             }
//             res.json({
//                 message: "success",
//                 data: data,
//                 changes: this.changes
//             })
//     });
// })
// // Delete an user
// app.delete("/api/user/:id", (req, res, next) => {
//     db.run(
//         'DELETE FROM user WHERE id = ?',
//         req.params.id,
//         function (err, result) {
//             if (err){
//                 res.status(400).json({"error": res.message})
//                 return;
//             }
//             res.json({"message":"deleted", changes: this.changes})
//     });
// })
// Default response for any other request

app.use(function(req, res){
    res.status(404);
});
