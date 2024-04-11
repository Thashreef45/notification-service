import nodemailer from 'nodemailer'
import env from '../config/environment';



class EmailSender {


    async sendEmail(
      to: string,
      subject: string,
      body: string
    ){
      try {
        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: env.MAIL_USERNAME,
            pass: env.MAIL_PASS,
          },
        });
        const info = await transporter.sendMail({
          from: env.MAIL_USERNAME, // sender address
          to: to,
          subject: subject, // Subject line
          // text: "Hello world?", // plain text body
          html: body, // html body
        });
        console.log("mail has been send ", info.messageId);
        // return StatusCode.OK;
        return 
      } catch (error) {
        console.log(error);
        // return StatusCode.INTERNAL_ERROR;
        return
      }
    }
  }

  export default EmailSender