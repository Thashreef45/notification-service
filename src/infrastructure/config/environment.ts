import {config} from 'dotenv'
config()

const env = {
    Port : process.env.PORT,
    RabbitMQ_Connection : process.env.RabbitMQ_Connection ,
    MongoDb_Connection : process.env.MongoDb_Connection
}

export default env