import NofiyUser from "../usecase/pending -registration"
import * as repository from "../../repository/repository"





export const registerEvent = (data:any) => {

    const nofiyUser = new NofiyUser(repository) 
    nofiyUser.execute(data)
}




// --------data thruogh api if it necessary ---
// export const apiRegisterEvent = (data:any) => {
//     NofiyUser(data)
// }



