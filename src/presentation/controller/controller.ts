import NofiyUser from "../usecase/registration-notification"
import EmailSender from "../../infrastructure/services/nodemailer/email-service"
import { IEmail } from "../../interface/Email"


const emailService = new EmailSender()



export const registerationEvent = (data:string) => {

    const nofiyUser = new NofiyUser({emailService})
    nofiyUser.execute(JSON.parse(data))
    // emailService.sendEmail
}




