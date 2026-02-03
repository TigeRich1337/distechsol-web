# Backend Email Server Setup Guide

## Quick Start

### 1. Configure Email Settings
Open `server/.env` and fill in your SMTP credentials:

```env
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### 2. Start the Backend Server
```bash
cd server
npm start
```

Server will run on `http://localhost:3001`

### 3. Start the Frontend
In a new terminal:
```bash
npm run dev
```

Frontend will run on `http://localhost:5175`

---

## Gmail Setup (Recommended)

### Step 1: Enable 2-Factor Authentication
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification**

### Step 2: Create App Password
1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. Select **Mail** and **Windows Computer**
3. Click **Generate**
4. Copy the 16-character password

### Step 3: Update .env File
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx  # App Password from step 2
RECIPIENT_EMAIL=office@distechsol.com
```

---

## Outlook/Office365 Setup

```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-regular-password
RECIPIENT_EMAIL=office@distechsol.com
```

---

## Custom SMTP Server

```env
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=noreply@yourdomain.com
SMTP_PASS=your-smtp-password
RECIPIENT_EMAIL=office@distechsol.com
```

---

## Testing

1. Start both servers (backend and frontend)
2. Navigate to `http://localhost:5175/contacts`
3. Fill out the form with test data
4. Submit and check `office@distechsol.com` for the email

---

## Production Deployment

### Backend Deployment Options:
- **Heroku**: Free tier available
- **Railway**: Easy deployment
- **Render**: Free tier with auto-deploy
- **VPS**: Full control (DigitalOcean, Linode, etc.)

### Update Frontend for Production:
Create `.env` file in project root:
```env
VITE_API_URL=https://your-backend-url.com
```

---

## Troubleshooting

### "SMTP Configuration Error"
- Check SMTP credentials in `.env`
- Verify App Password for Gmail
- Ensure 2FA is enabled for Gmail

### "Connection timeout"
- Check firewall settings
- Verify SMTP port (587 or 465)
- Try different SMTP_SECURE value

### "Authentication failed"
- For Gmail: Use App Password, not regular password
- For Outlook: Use regular password
- Check username is full email address

---

## Security Notes

- ✅ Never commit `.env` file to Git
- ✅ Use environment variables in production
- ✅ Rate limiting is enabled (5 emails per 15 min per IP)
- ✅ Server validates all inputs
- ✅ CORS is configured for security

---

## Features

✅ **No Email Limits** - Send unlimited emails
✅ **Rate Limiting** - Prevents spam (5 emails/15min per IP)
✅ **Email Validation** - Server-side validation
✅ **Professional Templates** - HTML formatted emails
✅ **Error Handling** - Graceful error messages
✅ **Reply-To Support** - Easy to respond to inquiries
