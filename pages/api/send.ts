import { LAGAL_EMAIL } from "@/app/constants";
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type FormValues = {
  email: string;
  message: string;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== "POST") {
      return res.status(405).end();
    }
    const body = JSON.parse(req.body) as FormValues;

    if (!body.email || !body.message) {
      return res.status(400).json({ error: "Email and message are required" });
    }

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [LAGAL_EMAIL],
      subject: "URGENT REQUEST",
      text: `
        From: ${body.email}
        Text: ${body.message}
      `,
    });

    if (error) {
      return res.status(500).end(error.message);
    }

    return res.status(200).end();
  } catch (error) {
    return res.status(500).end();
  }
};
