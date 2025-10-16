import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "dhimannarinder746@gmail.com",
        pass: "zzze lonm xwoq cwcp",
      },
    })

    await transporter.sendMail({
      from: email,
      to: "dhimannarinder746@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      text: message,
      html: `<p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Message:</b> ${message}</p>`,
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Email error:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
