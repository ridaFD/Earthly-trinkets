const sqlite3 = require('sqlite3').verbose();
var db = require("./database.js");


// module.exports = function (app) {
//     app.get("/api/images/slider",(req,res, next) => {
//         // res.json({
//         //     "message":'ok'
//         // })
//         var sql = "SELECT * FROM Products order by Date DESC LIMIT 3"
//         var params = []
//         db.all(sql, params, (err, rows) => {
//           if (err) {
//             res.status(400).json({ "error": err.message });
//             return;
//           }
//           // console.log(rows)
//           res.json({
//             "message": "success",
//             "data": rows
//           })
//     })
module.exports = function (app){
    app.get('/api/images/slider',(req,res,next)=>{
        var sql = "Select * from Products join ImagesProducts on Products.ProductsID = ImagesProducts.ProductsID group by Products.ProductsID ORDER by Products.Date Desc limit 3"
        var params = []
        db.all(sql,params,(err,rows)=>{
            if(err){
                console.log(err)
            }
            else{
                res.json({
                    "message":'ok',
                    "data":rows
                })
            }
        })
    })
    



// Query's latest Products
    app.get('/api/images/newProducts',(req,res,next)=>{
        var sql = "Select * from Products join ImagesProducts on Products.ProductsID = ImagesProducts.ProductsID group by Products.ProductsID ORDER by Products.Date Desc limit 3"
        var params = []
        db.all(sql,params,(err,rows)=>{
            if(err){
                console.log(err)
            }
            else{
                res.json({
                    "message":'ok',
                    "data":rows
                })
            }
        })
    })
    


// Query for New Events
app.get('/api/eventimages',(req,res,next)=>{
    var db = require('./database.js')
    var sql = "SELECT * FROM Events ORDER by Date limit 3"
    var params = []
    db.all(sql,params,(err,rows)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json({
                "message":'ok',
                "data":rows
            })
        }
    })
})

}
