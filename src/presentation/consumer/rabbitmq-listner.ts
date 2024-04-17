import * as amqp from 'amqplib'
import * as controller from '../controller/controller'


const registration = 'registration-notification'
const test = 'hey-queue'

const Registration = async (port: string) => {
    try {
        const connection = await amqp.connect(String(port))
        const channel = await connection.createChannel()

        
        /*       Declare queues     */
        await channel.assertQueue(test)
        await channel.assertQueue(registration)


        /*               Listners              */

        //testing queue
        channel.consume(test, (data: any) => {
            channel.ack(data)
            controller.registerationEvent(data?.content.toString())
        })


        //registration queue
         channel.consume(registration, (data: any) => {
            channel.ack(data)
            controller.registerationEvent(data?.content.toString())
        })




        ConnctionSuccessLog()
    } catch (error ) {
        console.log(error)
    }
}



export default Registration






const ConnctionSuccessLog = () => {
    console.log(`
    ╭─────────────────────────────────────────────────────────────╮
    │                                                             │
    │                  RabbitMq Server Connect                    │
    │                                                             │
    ╰─────────────────────────────────────────────────────────────╯
    ` )
}
