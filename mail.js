require("dotenv").config();
const nodemailer = require("nodemailer");

const { EMAIL_HOST, EMAIL_HOST_USER, EMAIL_HOST_PASSWORD, SMTP_PORT } =
  process.env;
class Mail {
  #transporter = null;
  constructor() {
    this.#transporter = this.#getTransporter();
  }

  #getTransporter() {
    return nodemailer.createTransport({
      host: EMAIL_HOST,
      port: SMTP_PORT,
      secure: true,
      auth: {
        user: EMAIL_HOST_USER,
        pass: EMAIL_HOST_PASSWORD,
      },
    });
  }
  async send({petition_reason, name, phone, vin, year, model}) {
    try {
      const info = await this.#transporter.sendMail({
        from: "bmw_services@mail.ru",
        to: EMAIL_HOST_USER,
        subject: "welcome to Test site",
        text: '',
        html: `<div>
        <div>Причина обращения: ${petition_reason}</div>
        <div>Ф.И.О.: ${name}</div>
        <div>Номер для связи: ${phone}</div>
        <div>VIN Автомобиля: ${vin}</div>
        <div>Год выпуска: ${year}</div>
        <div>Модель Автомобиля: ${model}</div>


        </div>`,
      });
      return info.messageId;
    } catch (e) {
      return e.message;
    }
  }
}

module.exports = new Mail();
