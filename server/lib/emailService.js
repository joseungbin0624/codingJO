const nodemailer = require('nodemailer');

const emailService = {
  transporter: nodemailer.createTransport({
    service: 'Gmail', // 이메일 서비스 제공자
    auth: {
      user: process.env.EMAIL_USER, // 환경 변수에서 이메일 주소 가져오기
      pass: process.env.EMAIL_PASS, // 환경 변수에서 이메일 비밀번호 가져오기
    },
  }),

  async sendEmail({ to, subject, text, html }) {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
      html,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email sent: ', info.response);
    } catch (error) {
      console.error('Failed to send email: ', error);
    }
  },
};

module.exports = emailService;
