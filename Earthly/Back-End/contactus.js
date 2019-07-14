
module.exports = function (app) {

const nodemailer=require('nodemailer')
app.post('/contact',(req,res)=>{
console.log(req.body)
    const transport = {
        service :"Gmail",
        auth:{
            user: "prefab.houses.lb@gmail.com",
            pass :"Pass4prefab"
        }
    }
     const transporter = nodemailer.createTransport(transport);
     const option = {
         from :`${req.body.name} : <${req.body.email}>`,
         to : "ridafakherlden@gmail.com",
         subject :"Hello Mrs Maissaa",
         html :` <h3>Message Contact</h3>
                    <ul>
                        <li>Name :${req.body.name}</li>
                        <li>Email :${req.body.email}</li>
                    </ul>
                    <h3>Message</h3>
                    <p>${req.body.message}</p>`
     }
     transporter.sendMail(option , (err,info)=>{
         err ? console.log(err) : console.log("Email has sent....")
     })
    })
}