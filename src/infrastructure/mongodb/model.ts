import { model,Schema } from "mongoose";

const schema = new Schema({
    uuid : {
        required : true,
        type : String,
    },
    to :{
        required : true,
        type :  String,
    },
    time : {
        required : true,
        type :  Date,
    }
})


const registrationModel = model("registration",schema) 

export default registrationModel