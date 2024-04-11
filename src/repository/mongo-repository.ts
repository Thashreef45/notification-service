import registrationModel from "../infrastructure/mongodb/model"

//writ data to db
export const Write = async (data: any) => {
    // console.log("data",data,'>>date',new Date(data.time))

    // console.log(data,'Data @ repo layer')
    const insert = new registrationModel({
        uuid: data.uuid, to: data.to,
        time: new Date(data.time)
    })
    await insert.save()
}


//Read data from db which is greter than current time
export const Read = async () => {
    // console.log("read data ")
    const data = await registrationModel.find({/* $match greater than the currnet time*/ })
    return data
}



//Remove/Delete Data from db
export const removeEvents = async (data: [string]) => {
    // console.log(data,"Deletion @ repo")
    await registrationModel.deleteMany({ to: { $in: data } })
}

