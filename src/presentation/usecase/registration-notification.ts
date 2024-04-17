import { IEmail } from "../../interface/Email"

class NofiyUser {
    private emailService
    constructor({emailService}:{emailService:any}){
        this.emailService = emailService
    }

    execute  (data:IEmail)  {
        //
        console.log(data,"data @ notification server")
    }

}


export default NofiyUser