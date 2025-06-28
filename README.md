# Accessibility Analyzer 🔍♿

A simple and powerful web app that analyzes any webpage for accessibility issues using [Pa11y](https://pa11y.org/). Built with **Next.js** and **Pa11y**, this tool helps developers, designers, and testers ensure their websites meet accessibility standards like WCAG.

---

## 🌐 Live Demo

> **Coming Soon**  
*(You can host it using Vercel or Netlify and update this section.)*

---

## 📸 Screenshots

| Home Page | Results Page |
|-----------|--------------|
| ![Homepage](./screenshots/home.png) | ![Results](./screenshots/results.png) |

---

## 🚀 Features

- ✅ Enter any URL and instantly get an accessibility report
- 🔍 Lists accessibility violations with descriptions, selectors, and code snippets
- 📈 Easy-to-read layout for quick debugging
- ⚡ Fast performance using Next.js and Pa11y
- 🎨 Developer-friendly UI

---

## 🏗️ Project Structure

Accessibility-Analyzer/
├── client/ # Frontend - Next.js App
│ ├── pages/
│ ├── components/
│ └── styles/
├── server/ # Backend - Express API
│ ├── routes/
│ └── utils/
├── public/
├── .gitignore
├── package.json
└── README.md

yaml
Copy code

---

## 🛠️ Tech Stack

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Node.js, Express
- **Accessibility Engine**: Pa11y
- **Styling**: Tailwind CSS
- **Package Manager**: npm

---

## 🧑‍💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/shivammislankar/Accessibility-Analyzer.git
cd Accessibility-Analyzer
2. Install Dependencies
Frontend (client)
bash
Copy code
cd client
npm install
Backend (server)
bash
Copy code
cd ../server
npm install
3. Run the Application
Start Backend
bash
Copy code
npm run dev
Start Frontend
In a separate terminal:

bash
Copy code
cd client
npm run dev
The frontend should be running at http://localhost:5173.

🔗 How It Works
User enters a webpage URL on the frontend.

The frontend sends the URL to the Express backend.

The backend uses Pa11y to audit the given URL.

Accessibility issues are returned as a JSON response.

Frontend displays a readable and actionable report.

📦 Dependencies
next

tailwindcss

express

cors

pa11y

axios

🤝 Contributing
Contributions, issues, and feature requests are welcome!

Fork the repository

Create a new branch (git checkout -b feature-name)

Commit your changes (git commit -m 'Add new feature')

Push to the branch (git push origin feature-name)

Open a Pull Request

📄 License
This project is licensed under the MIT License.

✨ Author
Shivam Mislankar
🔗 GitHub

vbnet
Copy code

Let me know if you want to add badges (build passing, license, etc.) or deployment instructions (e.g., Vercel).








Ask ChatGPT
