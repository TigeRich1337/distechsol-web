# EmailJS Setup Instructions

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup wizard to connect your email
5. **Copy the Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

```
Subject: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent via DisTechSol contact form.
```

4. **Copy the Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abcDEF123xyz`)

## Step 5: Update ContactForm.jsx
Open `src/components/ContactForm.jsx` and replace these lines (around line 45-47):

```javascript
const serviceId = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

## Step 6: Test the Form
1. Navigate to `http://localhost:5175/contacts`
2. Fill out the form with test data
3. Submit and check your email at `office@distechsol.com`

## Important Notes
- Free tier allows 200 emails/month
- Emails may take 1-2 minutes to arrive
- Check spam folder if email doesn't appear
- For production, consider using environment variables for credentials

## Alternative: Environment Variables (Recommended for Production)
Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then update ContactForm.jsx:

```javascript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```
