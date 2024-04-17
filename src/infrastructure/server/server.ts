import express, { Application } from 'express';
import RabbitMqServer from '../../presentation/consumer/rabbitmq-listner';
import env from '../config/environment';


class server {
  public app: Application

  constructor() {
    this.app = express()
    this.messageConsumers()
  }


  private messageConsumers() {
    RabbitMqServer(String(env.RabbitMQ_Connection))
  }


  public run(): void {
    // console.log(new Date('2001-12-05'))
    this.app.listen(Number(env.Port), () => console.log(`
    ╭─────────────────────────────────────────────────────────────╮
    │                                                             │
    │      Notification service is currently running on : ${env.Port}    │
    │                                                             │
    ╰─────────────────────────────────────────────────────────────╯
    `))
  }

}


export default server