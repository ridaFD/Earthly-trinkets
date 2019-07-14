var db = require("./database.js")
// app.use(express.static("public"));

// Get all the Images Product
module.exports = function (app) {
  app.get("/api/images", (req, res, next) => {
    var sql = "select * from ImagesProducts"
    var params = []
    db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }
      
      res.json({
        "message": "success",
        "data": rows
      })
    });
  });
  // app.get("/gallery/read", (req, res) => {
  //   var sql = "select * from Galleries";
  //   var params = [];
  //   db.all(sql, params, (err, galleries) => {
  //     if (err) {
  //       res.status(400).json({
  //         error: err.message
  //       });
  //       return;
  //     }
  //     const new_galleries = galleries.map(gallery => {
  //       gallery.name =
  //         "http://localhost:8000/arts/" + gallery.name;
  //       return gallery;
  //     });
  //     res.json({
  //       message: "success",
  //       data: galleries
  //     });
  //   });
  // });


  // Get a single Image by id
  app.get("/api/image/:id", (req, res, next) => {
    var sql = "Select * from Products join ImagesProducts on Products.ProductsID = ImagesProducts.ProductsID where Products.ProductsID = ?"
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
}
