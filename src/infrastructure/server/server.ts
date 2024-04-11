import express, { Application } from 'express';
import RabbitMqServer from '../../presentation/consumer/rabbitmq-listner';
import connectDb from '../mongodb/connection';
import env from '../config/environment';


class server {
  public app: Application

  constructor() {
    this.app = express()
    this.messageConsumers()
    this.ConnectDb()
  }


  private messageConsumers(){
    RabbitMqServer(String(env.RabbitMQ_Connection),"hey-queue")
  }

  private ConnectDb () {
    const link = String(env.MongoDb_Connection)
    connectDb(link)
  }


  public run ():void {
    // console.log(new Date('2001-12-05'))
    this.app.listen(Number(env.Port),()=>console.log(`
    ╭─────────────────────────────────────────────────────────────╮
    │                                                             │
    │      Notification service is currently running on : ${env.Port}    │
    │                                                             │
    ╰─────────────────────────────────────────────────────────────╯
    
    `))
  }
  
}


export default server