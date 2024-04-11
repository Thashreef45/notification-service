import { error } from "console";
import { connect } from "mongoose";


const connectDb = (link:string) => {
    connect(link)
        .then(() => console.log("DB connected"))
        .catch((error) => {
            console.log(error?.message)
        })
}

export default connectDb

