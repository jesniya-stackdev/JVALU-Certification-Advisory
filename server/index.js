import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

const {
  ZOHO_EMAIL,
  ZOHO_APP_PASSWORD,
  CONTACT_TO_EMAIL = ZOHO_EMAIL,
  PORT = 4000,
  ALLOWED_ORIGIN = '',
} = process.env

if (!ZOHO_EMAIL || !ZOHO_APP_PASSWORD) {
  console.error('Missing ZOHO_EMAIL or ZOHO_APP_PASSWORD in server/.env — see server/.env.example')
  process.exit(1)
}

const allowedOrigins = ALLOWED_ORIGIN.split(',').map((o) => o.trim()).filter(Boolean)

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: { user: ZOHO_EMAIL, pass: ZOHO_APP_PASSWORD },
})

const app = express()
app.use(express.json())
app.use(
  cors({
    origin: allowedOrigins.length ? allowedOrigins : true,
  })
)

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, service, message } = req.body || {}

  if (!name || !email || !message || !isValidEmail(email)) {
    return res.status(400).json({ error: 'Missing or invalid required fields.' })
  }

  try {
    await transporter.sendMail({
      from: `"JVALU Website" <${ZOHO_EMAIL}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New Consultation Request — ${service || 'General Enquiry'}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '—'}\nService of interest: ${service || 'General Enquiry'}\n\nMessage:\n${message}`,
    })
    res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Failed to send contact email:', err)
    res.status(502).json({ error: 'Failed to send email.' })
  }
})

app.get('/api/health', (_req, res) => res.json({ ok: true }))

app.listen(PORT, () => {
  console.log(`JVALU contact API listening on port ${PORT}`)
})
