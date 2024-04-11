import { model,Schema } from "mongoose";

const schema = new Schema({
    to : String,
    message : String,
    time : Date 
})


const registrationModel = model("registration",schema) 

export default registrationModel