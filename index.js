const express= require("express")
const dotnev= require("dotenv")
var cors = require('cors')

dotnev.config({path : "./config/config.env"})

const app =express()
app.use(cors())
const PORT= process.env.PORT || 5000
// app.all('*', (req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3001");
//     next();
// });


app.use("/",require("./routes/data"))

app.listen(PORT,console.log(`Server running ${process.env.NODE_ENV} on port ${PORT}`))
console.log("hello")