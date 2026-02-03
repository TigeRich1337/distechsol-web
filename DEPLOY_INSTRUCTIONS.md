# How to Launch the Website (Deployment)

## 1. Local Development (Your PC)

```powershell
# Go to project root
npm run dev
```

*Note: The contact form will not send actual emails when running locally unless you have a local PHP server properly configured. But you can check the Network tab in your browser's Developer Tools to see the request being sent.*

## 2. Hostinger / Shared Hosting (Deployment)

This site is now optimized for shared hosting like Hostinger.

### Step 1: Build the Site
Run the following command in your terminal:

```powershell
npm run build
```

This will create a `dist` folder in your project directory. This folder contains:
- `index.html` (The main page)
- `assets/` (Images, CSS, JS)
- `send-mail.php` (The script to send emails)

### Step 2: Upload to Hostinger
1.  Go to your Hostinger File Manager (public_html).
2.  Upload **all files** from inside the `dist` folder to `public_html`.
3.  That's it!

### Step 3: Configure Email
1.  Open `send-mail.php` in Hostinger File Manager.
2.  Find the line: `$recipient_email = "office@distechsol.com";`
3.  Change it to the email address where you want to receive contact form submissions.
4.  (Optional) If you want to use SMTP instead of standard `mail()`, you can modify this file. Standard `mail()` usually works fine on Hostinger.
