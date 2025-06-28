# Accessibility Analyzer 🔍♿

A simple and powerful web app that analyzes any webpage for accessibility issues using [Pa11y](https://pa11y.org/). Built with **Next.js** and **Pa11y**, this tool helps developers, designers, and testers ensure their websites meet accessibility standards like WCAG.

---



---

## 🚀 Features

- ✅ Enter any URL and instantly get an accessibility report
- 🔍 Lists accessibility violations with descriptions, selectors, and code snippets
- 📈 Easy-to-read layout for quick debugging
- ⚡ Fast performance using Next.js and Pa11y
- 🎨 Developer-friendly UI

---

## 🏗️ Project Structure

```
Accessibility-Analyzer/
├── client/                # Frontend - Next.js App
│   ├── pages/
│   ├── components/
│   └── styles/
├── server/                # Backend - Express API
│   ├── routes/
│   └── utils/
├── public/
├── .gitignore
├── package.json
└── README.md
```

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
```

### 2. Install Dependencies

#### Frontend (client)
```bash
cd client
npm install
```

#### Backend (server)
```bash
cd ../server
npm install
```

### 3. Run the Application

#### Start Backend
```bash
npm run dev
```

#### Start Frontend
In a separate terminal:
```bash
cd client
npm run dev
```

The frontend should be running at `http://localhost:5173`.

---

## 🔗 How It Works

1. User enters a webpage URL on the frontend.
2. The frontend sends the URL to the Express backend.
3. The backend uses **Pa11y** to audit the given URL.
4. Accessibility issues are returned as a JSON response.
5. Frontend displays a readable and actionable report.

---

## 📦 Dependencies

- `next`
- `tailwindcss`
- `express`
- `cors`
- `pa11y`
- `axios`

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## ✨ Author

**Shivam Mislankar**  
🔗 [GitHub](https://github.com/shivammislankar)
