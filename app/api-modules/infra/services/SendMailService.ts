import type SMTPTransport from "nodemailer/lib/smtp-transport";
import nodemailer from "nodemailer";

const {
  SMTP_SERVICE: service = "",
  SMTP_PASSWORD: pass = "",
  SMTP_MAIL: user = "",
} = process.env;

export class SendMailService {
  public async sendMail(
    to: string,
    subject: string,
    html: string
  ): Promise<void> {
    const transporter = nodemailer.createTransport({
      service,
      auth: { user, pass },
    });

    await transporter.sendMail({ from: user, to, subject, html });
  }
}
