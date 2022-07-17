const express = require("express")
const router = express.Router()
const axios= require("axios")
const { Auth, LoginCredentials } = require("two-step-auth");
var nodemailer = require('nodemailer');



//medication Order
router.get("/",async (req,res)=>
{
    let data= await axios.get("https://fhir-open.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d/MedicationOrder?patient=12724066")
    results= data.data.entry[0].resource.text.div
    res.send(results)
})

//medication Statement
router.get("/m",async (req,res)=>
{
    let data= await axios.get("https://fhir-open.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d/MedicationStatement?patient=12724066")
    results= data.data.entry[0].resource.text.div
    res.send(results)
})

//Appointment Statement
router.get("/A",async (req,res)=>
{
    let data= await axios.get("https://fhir-open.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d/Appointment?date=2020&patient=12724066")
    results= data.data.entry[0].resource.text.div
    res.send(results)
})
//encounter
router.get("/E",async (req,res)=>
{
    let data= await axios.get(" https://fhir-open.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d/Encounter?patient=12724066")
    results= data.data.entry[0].resource.text.div
    res.send(results)
    
})
//care plan

router.get("/C",async (req,res)=>
{
    let data= await axios.get("https://fhir-open.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d/CarePlan?patient=12724066&category=assess-plan")
    console.log(data.data.entry[0])
    results= data.data.entry[0].resource.text.div
    res.send(data.data.entry[0].resource.text.div)
    
})
//devices
router.get("/D",async (req,res)=>
{
    let data= await axios.get("https://fhir-open.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d/Device?patient=12724066")
    results= data.data.entry[0].resource.text.div
    res.send(results)
})

router.get("/otp",async (req,res)=>
{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rudreshgates@gmail.com',
          pass: 'Asmita17'
        }
      });
      
      var mailOptions = {
        from: 'rudreshgates@gmail.com',
        to: 'demopran@gmail.com',
        subject: 'OTP for PRAN Access',
        text: 'Here is your OTP for PRAN Personnel Portal : 161765'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
})
module.exports=router