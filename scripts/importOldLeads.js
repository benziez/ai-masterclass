import { Resend } from "resend";
import "dotenv/config"; // only if using .env for your API key

const resend = new Resend(process.env.RESEND_API_KEY);

// 👇 Add your previous signup emails here manually
const oldEmails = [
  "example1@gmail.com",
  "example2@gmail.com",
  "example3@gmail.com",
];

async function importOldLeads() {
  for (const email of oldEmails) {
    try {
      await resend.contacts.create({
        email: email,
        audienceId: "YOUR_AUDIENCE_ID_HERE", // same ID as above
      });
      console.log(`✅ Added: ${email}`);
    } catch (err) {
      console.log(`⚠️ Skipped ${email} (${err.message})`);
    }
  }
  console.log("✅ Done importing all leads!");
}

importOldLeads();
