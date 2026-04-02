import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

dotenv.config({ path: ".env.local" });
dotenv.config();

const app = express();
const port = Number(process.env.PORT || 8787);
let transporter;
let transporterKey = "";

app.use(cors());
app.use(express.json({ limit: "1mb" }));

function escapeHtml(text = "") {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function parseBool(value) {
  return /^true$/i.test(String(value || "").trim());
}

function loadConfig() {
  const host = (process.env.EMAIL_HOST || "").trim();
  const portRaw = (process.env.EMAIL_PORT || "").trim();
  const tlsRaw = (process.env.EMAIL_USE_TLS || "").trim();
  const user = (process.env.EMAIL_HOST_USER || "").trim();
  const pass = String(process.env.EMAIL_HOST_PASSWORD || "").trim();
  const adminEmail = (process.env.ADMIN_EMAIL || "").trim();

  const smtpPort = Number(portRaw);
  const useTls = parseBool(tlsRaw);

  const missing = [];
  if (!host) missing.push("EMAIL_HOST");
  if (!portRaw || Number.isNaN(smtpPort)) missing.push("EMAIL_PORT");
  if (!tlsRaw) missing.push("EMAIL_USE_TLS");
  if (!user) missing.push("EMAIL_HOST_USER");
  if (!pass) missing.push("EMAIL_HOST_PASSWORD");
  if (!adminEmail) missing.push("ADMIN_EMAIL");

  if (missing.length) {
    throw new Error(`Missing/invalid env vars: ${missing.join(", ")}`);
  }

  return { host, smtpPort, useTls, user, pass, adminEmail };
}

function getTransporter(config) {
  const nextKey = `${config.host}|${config.smtpPort}|${config.useTls}|${config.user}|${config.pass}`;
  if (transporter && transporterKey === nextKey) return transporter;

  transporterKey = nextKey;
  transporter = nodemailer.createTransport({
    host: config.host,
    port: config.smtpPort,
    secure: config.smtpPort === 465,
    auth: { user: config.user, pass: config.pass },
    requireTLS: config.useTls && config.smtpPort !== 465,
    pool: true,
    maxConnections: 5,
    maxMessages: 100,
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 20000,
  });

  return transporter;
}

const formValidator = (body) => {
  const required = [
    "name",
    "company",
    "companyLocation",
    "email",
    "phone",
    "role",
    "mfgType",
    "skuCount",
    "challenge",
  ];
  for (const key of required) {
    if (!String(body?.[key] || "").trim()) {
      return `${key} is required`;
    }
  }
  const email = String(body.email).trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "email must be valid";
  }
  return null;
};

app.post("/api/request-access", async (req, res) => {
  try {
    const validationError = formValidator(req.body);
    if (validationError) {
      return res.status(400).json({ success: false, error: validationError });
    }

    const { host, smtpPort, useTls, user, pass, adminEmail } = loadConfig();
    const { name, company, companyLocation, email, phone, role, mfgType, skuCount, challenge } =
      req.body;
    const smtp = getTransporter({ host, smtpPort, useTls, user, pass });

    const safe = {
      name: escapeHtml(name),
      company: escapeHtml(company),
      companyLocation: escapeHtml(companyLocation),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      role: escapeHtml(role),
      mfgType: escapeHtml(mfgType),
      skuCount: escapeHtml(skuCount),
      challenge: escapeHtml(challenge).replace(/\r\n|\n|\r/g, "<br/>"),
    };

    const subject = `New Access Request from ${String(name).replace(/[\r\n]+/g, " ")} (${String(company).replace(/[\r\n]+/g, " ")})`;

    const html = `
      <h2>New Request Access Submission</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px; font-family: Arial, sans-serif;">
        <tr style="border-bottom: 1px solid #e5e7eb;"><td style="padding: 12px; font-weight: bold; color: #374151; width: 200px;">Name</td><td style="padding: 12px; color: #1f2937;">${safe.name}</td></tr>
        <tr style="border-bottom: 1px solid #e5e7eb; background-color: #f9fafb;"><td style="padding: 12px; font-weight: bold; color: #374151;">Company</td><td style="padding: 12px; color: #1f2937;">${safe.company}</td></tr>
        <tr style="border-bottom: 1px solid #e5e7eb;"><td style="padding: 12px; font-weight: bold; color: #374151;">Company location</td><td style="padding: 12px; color: #1f2937;">${safe.companyLocation}</td></tr>
        <tr style="border-bottom: 1px solid #e5e7eb; background-color: #f9fafb;"><td style="padding: 12px; font-weight: bold; color: #374151;">Contact email</td><td style="padding: 12px; color: #1f2937;"><a href="mailto:${safe.email}">${safe.email}</a></td></tr>
        <tr style="border-bottom: 1px solid #e5e7eb;"><td style="padding: 12px; font-weight: bold; color: #374151;">Contact phone</td><td style="padding: 12px; color: #1f2937;">${safe.phone}</td></tr>
        <tr style="border-bottom: 1px solid #e5e7eb; background-color: #f9fafb;"><td style="padding: 12px; font-weight: bold; color: #374151;">Role</td><td style="padding: 12px; color: #1f2937;">${safe.role}</td></tr>
        <tr style="border-bottom: 1px solid #e5e7eb;"><td style="padding: 12px; font-weight: bold; color: #374151;">Manufacturing Type</td><td style="padding: 12px; color: #1f2937;">${safe.mfgType}</td></tr>
        <tr style="border-bottom: 1px solid #e5e7eb; background-color: #f9fafb;"><td style="padding: 12px; font-weight: bold; color: #374151;">Active SKUs</td><td style="padding: 12px; color: #1f2937;">${safe.skuCount}</td></tr>
        <tr style="background-color: #f9fafb;"><td style="padding: 12px; font-weight: bold; color: #374151; vertical-align: top;">Biggest Challenge</td><td style="padding: 12px; color: #1f2937;">${safe.challenge}</td></tr>
      </table>
    `;

    const info = await smtp.sendMail({
      from: user,
      to: adminEmail,
      subject,
      html,
    });

    return res.status(200).json({ success: true, messageId: info.messageId || null });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("request-access error:", message);
    return res.status(500).json({ success: false, error: message });
  }
});

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.listen(port, () => {
  console.log(`SMTP API running on http://localhost:${port}`);
});
