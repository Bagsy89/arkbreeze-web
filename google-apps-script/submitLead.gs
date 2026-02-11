/**
 * SolAir Solutions — Google Apps Script for Lead Capture
 *
 * HOW TO DEPLOY:
 * 1. Create a Google Sheet with these column headers in Row 1:
 *    Timestamp | Name | Email | Phone | Suburb | Roof Type | Message | Source
 *
 * 2. In the Sheet, go to Extensions → Apps Script
 *
 * 3. Paste this entire script into the editor, replacing any existing code
 *
 * 4. Click Deploy → New deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 *
 * 5. Copy the Web App URL and paste it into your .env.local file:
 *    GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ID/exec
 *
 * 6. (Optional) Set up email notifications below.
 */

// ============================================
// CONFIGURATION — Edit these values
// ============================================
const SHEET_NAME = 'Leads';  // Name of the sheet tab
const NOTIFICATION_EMAIL = '';  // Your email for instant lead notifications (leave empty to disable)
const SEND_CONFIRMATION_EMAIL = true;  // Send auto-reply to the lead

// ============================================
// EMAIL DRIP CAMPAIGN CONFIG
// ============================================
const ENABLE_DRIP_CAMPAIGN = true;

// Drip email schedule (days after initial submission)
const DRIP_SCHEDULE = [
  { day: 0, subject: 'Thanks {name} — Your SolarArk Guide', templateKey: 'welcome' },
  { day: 2, subject: 'How Much Could You Save This Summer?', templateKey: 'savings' },
  { day: 5, subject: 'What QLD Homeowners Are Saying', templateKey: 'social_proof' },
  { day: 8, subject: 'Your Roof Right Now: 70°C and Climbing', templateKey: 'urgency' },
  { day: 12, subject: 'Limited Install Slots — Book Your Free Assessment', templateKey: 'final_cta' },
];

// ============================================
// MAIN HANDLER — Do not modify
// ============================================
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) {
      return error('Sheet "' + SHEET_NAME + '" not found.');
    }

    const data = JSON.parse(e.postData.contents);

    // Append lead to sheet
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.suburb || '',
      data.roofType || '',
      data.message || '',
      data.source || 'Landing Page',
      'Active',  // Drip campaign status
      0,         // Drip emails sent
    ]);

    // Send instant notification to business owner
    if (NOTIFICATION_EMAIL) {
      MailApp.sendEmail({
        to: NOTIFICATION_EMAIL,
        subject: '🔔 New SolAir Lead: ' + data.name,
        htmlBody: buildNotificationEmail(data),
      });
    }

    // Send confirmation/welcome email to lead (Email 1 of drip)
    if (SEND_CONFIRMATION_EMAIL && data.email) {
      MailApp.sendEmail({
        to: data.email,
        subject: DRIP_SCHEDULE[0].subject.replace('{name}', data.name.split(' ')[0]),
        htmlBody: getDripEmailHtml('welcome', data),
      });
    }

    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return error(err.toString());
  }
}

function doGet() {
  return ContentService.createTextOutput(JSON.stringify({ status: 'ok', message: 'SolAir Lead API is running.' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function error(msg) {
  return ContentService.createTextOutput(JSON.stringify({ success: false, error: msg }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ============================================
// NOTIFICATION EMAIL
// ============================================
function buildNotificationEmail(data) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px;">
      <h2 style="color: #F5C518;">New Lead from SolAir Landing Page</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Name</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.name}</td></tr>
        <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
        <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Phone</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>
        <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Suburb</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.suburb || 'Not provided'}</td></tr>
        <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Roof Type</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.roofType || 'Not provided'}</td></tr>
        <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Message</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.message || 'None'}</td></tr>
      </table>
      <p style="margin-top: 16px; color: #666; font-size: 12px;">Submitted: ${data.timestamp}</p>
    </div>
  `;
}

// ============================================
// DRIP CAMPAIGN EMAILS
// ============================================
function getDripEmailHtml(templateKey, data) {
  const firstName = data.name ? data.name.split(' ')[0] : 'there';

  const templates = {
    // EMAIL 1: Welcome + Brochure (Day 0)
    welcome: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0A0A0A; color: #F0F0F0;">
        <div style="padding: 32px; text-align: center; border-bottom: 2px solid #F5C518;">
          <h1 style="color: #F5C518; font-size: 24px; margin: 0;">SolAir Solutions</h1>
        </div>
        <div style="padding: 32px;">
          <h2 style="color: #FFFFFF;">Hey ${firstName}, thanks for reaching out!</h2>
          <p>We've received your enquiry and one of our team will be in touch within 24 hours to arrange your <strong>free roof ventilation assessment</strong>.</p>
          <p>In the meantime, here's everything you need to know about SolarArk solar roof ventilation:</p>
          <ul>
            <li>Reduces roof space temperatures by <strong>up to 30°C</strong></li>
            <li><strong>100% solar powered</strong> — $0 running costs, ever</li>
            <li>Fights mould, condensation, and timber damage</li>
            <li>Backed by a <strong>10-year warranty</strong></li>
          </ul>
          <p>We'll be recommending the best SolarArk model for your home based on your roof size, orientation, and ventilation needs.</p>
          <p style="color: #9CA3AF; font-size: 14px;">Talk soon,<br>The SolAir Solutions Team<br>📞 1300 670 966</p>
        </div>
      </div>
    `,

    // EMAIL 2: Savings Education (Day 2)
    savings: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0A0A0A; color: #F0F0F0;">
        <div style="padding: 32px; text-align: center; border-bottom: 2px solid #F5C518;">
          <h1 style="color: #F5C518; font-size: 24px; margin: 0;">SolAir Solutions</h1>
        </div>
        <div style="padding: 32px;">
          <h2 style="color: #FFFFFF;">How much is your roof costing you?</h2>
          <p>Hey ${firstName},</p>
          <p>Did you know that on a 35°C day, your roof cavity can reach <strong>70°C</strong>? That heat radiates down into your living spaces, forcing your air conditioning to work up to <strong>40% harder</strong>.</p>
          <p>Here's what a SolarArk vent does to change that:</p>
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <tr><td style="padding: 8px; border: 1px solid #333;">Roof temp (before)</td><td style="padding: 8px; border: 1px solid #333; color: #EF4444; font-weight: bold;">70°C</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #333;">Roof temp (after)</td><td style="padding: 8px; border: 1px solid #333; color: #22C55E; font-weight: bold;">40°C</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #333;">Living space reduction</td><td style="padding: 8px; border: 1px solid #333; color: #F5C518; font-weight: bold;">Up to 6°C cooler</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #333;">Annual running cost</td><td style="padding: 8px; border: 1px solid #333; color: #22C55E; font-weight: bold;">$0</td></tr>
          </table>
          <p>The best part? Once installed, it runs <strong>forever on solar power</strong> — no electricity required.</p>
          <p style="color: #9CA3AF; font-size: 14px;">The SolAir Solutions Team<br>📞 1300 670 966</p>
        </div>
      </div>
    `,

    // EMAIL 3: Social Proof (Day 5)
    social_proof: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0A0A0A; color: #F0F0F0;">
        <div style="padding: 32px; text-align: center; border-bottom: 2px solid #F5C518;">
          <h1 style="color: #F5C518; font-size: 24px; margin: 0;">SolAir Solutions</h1>
        </div>
        <div style="padding: 32px;">
          <h2 style="color: #FFFFFF;">What QLD homeowners are saying</h2>
          <p>Hey ${firstName},</p>
          <p>Don't just take our word for it — here's what real homeowners have experienced after installing SolarArk ventilation:</p>
          <div style="background: #1A1A1A; padding: 16px; border-left: 3px solid #F5C518; margin: 16px 0;">
            <p style="font-style: italic;">"The difference has been incredible. Our upstairs bedrooms are noticeably cooler and the AC doesn't run all day anymore."</p>
            <p style="color: #F5C518; font-size: 14px;">— Mark T., Brisbane Northside</p>
          </div>
          <div style="background: #1A1A1A; padding: 16px; border-left: 3px solid #F5C518; margin: 16px 0;">
            <p style="font-style: italic;">"We were sceptical at first but the SolarArk vent has genuinely made our garage workshop usable in summer. Zero cost to run — we wish we'd done it years ago."</p>
            <p style="color: #F5C518; font-size: 14px;">— Sarah & James L., Gold Coast Hinterland</p>
          </div>
          <p>Ready for your home to feel the same difference?</p>
          <p style="color: #9CA3AF; font-size: 14px;">The SolAir Solutions Team<br>📞 1300 670 966</p>
        </div>
      </div>
    `,

    // EMAIL 4: Urgency (Day 8)
    urgency: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0A0A0A; color: #F0F0F0;">
        <div style="padding: 32px; text-align: center; border-bottom: 2px solid #F5C518;">
          <h1 style="color: #F5C518; font-size: 24px; margin: 0;">SolAir Solutions</h1>
        </div>
        <div style="padding: 32px;">
          <h2 style="color: #FFFFFF;">Your roof right now: 70°C and climbing</h2>
          <p>Hey ${firstName},</p>
          <p>Every sunny day without proper ventilation, your roof cavity is trapping extreme heat. Here's what that means for your home:</p>
          <ul>
            <li>🔥 <strong>Heat radiating</strong> into every room from the ceiling</li>
            <li>💸 <strong>Air conditioning working overtime</strong> — and it shows on your bill</li>
            <li>🦠 <strong>Moisture trapped</strong> in your roof space, breeding mould and damaging timber</li>
            <li>😤 <strong>Uncomfortable living</strong> — especially upstairs</li>
          </ul>
          <p>A single SolarArk solar vent eliminates all of this. <strong>No electricity. No running costs. No noise.</strong></p>
          <p>And with a 10-year warranty, it's a one-time investment that pays for itself in energy savings alone.</p>
          <p>If you haven't booked your free assessment yet, now's the time — <strong>before summer peaks</strong>.</p>
          <p style="color: #9CA3AF; font-size: 14px;">The SolAir Solutions Team<br>📞 1300 670 966</p>
        </div>
      </div>
    `,

    // EMAIL 5: Final CTA (Day 12)
    final_cta: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0A0A0A; color: #F0F0F0;">
        <div style="padding: 32px; text-align: center; border-bottom: 2px solid #F5C518;">
          <h1 style="color: #F5C518; font-size: 24px; margin: 0;">SolAir Solutions</h1>
        </div>
        <div style="padding: 32px;">
          <h2 style="color: #FFFFFF;">One last thing, ${firstName}...</h2>
          <p>We wanted to check in one final time.</p>
          <p>Our installation calendar fills up fast during peak summer — and we want to make sure you don't miss out on getting your home sorted before the worst of the heat.</p>
          <p>Here's what you get with SolAir:</p>
          <ul>
            <li>✅ <strong>Free assessment</strong> — no obligation</li>
            <li>✅ <strong>Fixed-price quote</strong> — no hidden costs</li>
            <li>✅ <strong>Professional installation</strong> — typically under 2 hours</li>
            <li>✅ <strong>10-year warranty</strong> — complete peace of mind</li>
          </ul>
          <p>If you'd like to go ahead, simply reply to this email or give us a call on <strong>1300 670 966</strong>.</p>
          <p>We'd love to help you beat the heat. 🌤️</p>
          <p style="color: #9CA3AF; font-size: 14px;">Cheers,<br>The SolAir Solutions Team</p>
        </div>
      </div>
    `,
  };

  return templates[templateKey] || templates.welcome;
}

// ============================================
// DRIP CAMPAIGN TRIGGER (Time-based)
// Set up a daily trigger to run this function:
// 1. In Apps Script, go to Triggers (clock icon)
// 2. Add trigger: sendDripEmails → Time-driven → Day timer → 9am-10am
// ============================================
function sendDripEmails() {
  if (!ENABLE_DRIP_CAMPAIGN) return;

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  const today = new Date();

  // Start from row 2 (skip header)
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const timestamp = new Date(row[0]);
    const email = row[2];
    const name = row[1];
    const status = row[8];  // Column I: campaign status
    const emailsSent = row[9] || 0;  // Column J: emails sent count

    if (status !== 'Active' || !email) continue;

    const daysSinceSubmission = Math.floor((today - timestamp) / (1000 * 60 * 60 * 24));

    // Find the next drip email to send
    for (let j = 0; j < DRIP_SCHEDULE.length; j++) {
      if (j <= emailsSent - 1) continue;  // Already sent (Email 1 sent on submit)
      if (j === 0) continue;  // Email 1 already sent on form submit

      if (daysSinceSubmission >= DRIP_SCHEDULE[j].day) {
        try {
          MailApp.sendEmail({
            to: email,
            subject: DRIP_SCHEDULE[j].subject.replace('{name}', name.split(' ')[0]),
            htmlBody: getDripEmailHtml(DRIP_SCHEDULE[j].templateKey, { name: name, email: email }),
          });

          // Update emails sent count
          sheet.getRange(i + 1, 10).setValue(j + 1);

          // If last email sent, mark as completed
          if (j === DRIP_SCHEDULE.length - 1) {
            sheet.getRange(i + 1, 9).setValue('Completed');
          }
        } catch (err) {
          Logger.log('Drip email error for ' + email + ': ' + err.toString());
        }
        break;  // Only send one email per lead per day
      }
    }
  }
}
