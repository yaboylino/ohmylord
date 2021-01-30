const nodemailer = require("nodemailer")

export default async function main(req, res) {
  const email = req.body.body

  let transporter = nodemailer.createTransport({
    host: "ohmylord.nl",
    port: 465,
    secure: true,
    auth: {
      user: "contact@ohmylord.nl",
      pass: "Kst3aq-RNH9cUC%m"
    }
  })

  let info = await transporter.sendMail({
    from: `Contact Form ${email.voornaam} ${email.achternaam} <${email.email}>`,
    to: "prodby@ohmylord.nl",
    subject: `${email.onderwerp}`,
    text: `${email.bericht}`
  })

  console.log("Message sent: %s", info.messageId)
  res.status(200).json({ message: "Sent" })
}
