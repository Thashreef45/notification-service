import { Write } from "../../repository/mongo-repository"


class NofiyUser {
    private repository
    constructor({Write}:any){
        this.repository = Write 
    }

    execute  (data:any)  {
        this.repository(data)
    }

}


export default NofiyUser