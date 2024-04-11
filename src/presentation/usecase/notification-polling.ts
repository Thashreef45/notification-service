
class PollNotification {

    private repository :any
    private emailService:any
    constructor(respository:any,emailService:any){
        this.repository = respository
        this.emailService = emailService
    }

    execute () {
        let num = 0
        let arr:any = []
        setInterval(async()=>{

            num++
            console.log("Polling",num)

            const data = await this.repository.Read()
            data.forEach((element:any) => {

                this.SendNotification(element.to,"subject","body")
                arr.push(element.to)

            });
            this.DeleteNotifiedEvents(arr)
            arr = []

        },90000)
        //60000 -- 1 minute
        //90000 --- 1.5 minute
        //120000 -- 2 minute
        

    }


    private SendNotification (to:string,subject:string,body:string) {
        // "to","subject","body"
        this.emailService.sendEmail(to,subject,body)
    }


    private DeleteNotifiedEvents (data:any)  {
        //delete Notified Events
        console.log(data,'data to be deleted/removed from DB after notified')
        this.repository.removeEvents(data)
    }


}

export default PollNotification