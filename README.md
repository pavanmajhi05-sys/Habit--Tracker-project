# 🔐 Secure Notes App

A privacy-focused note-taking app with **AES-256 encryption** built using React + Vite + Tailwind CSS.

## 📌 Project Info
- **Internship Project** — Elevate Labs
- **Project #15** — Privacy-Focused Notes App with Encryption

## ✨ Features
- 🔐 AES-256-GCM encryption using Browser Web Crypto API
- 🔒 Password protected vault (lock/unlock)
- 📝 Create, edit, delete notes
- 📌 Pin important notes
- 📁 Archive notes
- 🔍 Search across all notes
- 🌙 Dark / Light mode toggle
- 💾 Auto-saves to localStorage after every change
- 📱 Fully responsive design

## 🛠️ Tools & Technologies
| Tool | Purpose |
|------|---------|
| React.js | Frontend UI |
| Vite | Build tool |
| Tailwind CSS | Styling |
| Web Crypto API | AES-256 Encryption |
| localStorage | Data storage |

## 🚀 How to Run Locally

### Prerequisites
- Node.js installed
- npm installed

### Steps
```bash
# Clone the repository
git clone https://github.com/pavanmajhi05-sys/Habit--Tracker-project.git

# Go into the folder
cd secure-notes

# Install dependencies
npm install

# Run the app
npm run dev
```

Open your browser and go to:
```
http://localhost:5173
```

## 📁 Project Structure
```
secure-notes/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    └── index.css
```

## 🔐 How Encryption Works
1. User creates a password on first launch
2. All notes are encrypted using **AES-256-GCM** before saving to localStorage
3. Notes can only be decrypted with the correct password
4. If password is forgotten, data cannot be recovered (by design)

## 👤 Author
- **Majhi Pavan**
- Internship @ Elevate Labs