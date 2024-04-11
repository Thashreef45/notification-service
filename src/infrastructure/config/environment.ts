import {config} from 'dotenv'
config()

const env = {
    Port : process.env.PORT,
    RabbitMQ_Connection : process.env.RabbitMQ_Connection ,
    MongoDb_Connection : process.env.MongoDb_Connection,
    MAIL_USERNAME : process.env.MAIL_USERNAME,
    MAIL_PASS : process.env.MAIL_PASS
}

export default env