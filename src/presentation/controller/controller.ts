import NofiyUser from "../usecase/pending -registration"
import * as repository from "../../repository/mongo-repository"
import PollNotification from "../usecase/notification-polling"
import EmailSender from "../../infrastructure/services/email-service"


const emailService = new EmailSender()



export const registerEvent = (data:any) => {

    const nofiyUser = new NofiyUser(repository) 
    nofiyUser.execute(JSON.parse(data))
}


export const notifier = () => {

    const notificatonPolling = new PollNotification(repository,emailService )
    notificatonPolling.execute()
}
notifier()




// --------data thruogh api if it necessary ---
// export const apiRegisterEvent = (data:any) => {
//     NofiyUser(data)
// }



