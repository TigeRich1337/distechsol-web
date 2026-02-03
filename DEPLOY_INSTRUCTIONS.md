# How to Launch the Website (Deployment)

Since your project has two parts (Frontend and Backend), you need to run them slightly differently depending on whether you are developing locally or running on a server (production).

---

## 1. Local Development (Your PC)

To work on the site on your computer, you need two terminals open:

**Terminal 1: Frontend (React)**
```powershell
# Go to project root
cd distechsol-web
npm install
npm run dev
```
*This starts the website at `http://localhost:5173`.*

**Terminal 2: Backend (Server)**
```powershell
# Go to server folder
cd distechsol-web/server
npm install
node index.js
```
*This starts the email server at `http://localhost:3001`.*

---

## 2. Production (Server/Domain)

When you deploy to a real server (e.g., VPS, DigitalOcean, Hetzner), you shouldn't use `npm run dev`.

### Step A: Backend
On the server, it's best to use `pm2` so the backend stays alive even if it crashes.

1.  **Install dependencies**:
    ```bash
    cd server
    npm install
    # Install pm2 globally if not installed
    npm install -g pm2
    ```
2.  **Start the server**:
    ```bash
    pm2 start index.js --name "distech-backend"
    ```

### Step B: Frontend
On a server, you typically "build" the frontend and serve it with a web server like Nginx (recommended) or serve it statically.

**Option 1: Build Static Files (Best for Nginx/Apache)**
1.  **Build the site**:
    ```bash
    npm run build
    ```
    *This creates a `dist` folder with HTML/CSS/JS files.*
2.  **Point your web server (Nginx/Apache)** to the `dist` folder.

**Option 2: Preview Mode (Simple test)**
If you just want to run it quickly to check:
```bash
npm run build
npm run preview
```
*Note: `preview` is not recommended for high-traffic production.*
