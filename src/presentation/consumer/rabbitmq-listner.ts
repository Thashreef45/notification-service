import * as amqp from 'amqplib'
import { registerEvent } from '../controller/controller'


const Registration = async(port:string,queue:string) => {
    try {
        const connection = await amqp.connect(String(port))
        const channel = await connection.createChannel()

        await channel.assertQueue(queue)
        channel.consume(queue, (data: any) => {
            channel.ack(data)
            registerEvent(data?.content.toString())
        })

    } catch (error) {
        console.log(error)
    }
}

export default Registration

