# 🔗 URL Shortener Web Application – Affordmed Frontend Track

This is a React-based frontend submission for the **Affordmed Campus Hiring Evaluation – Frontend Track**.

---

## 📁 Project Structure

```
assignment/
├── assets/                  # Screenshots for README
├── public/
├── src/
│   ├── components/          # UI components like UrlForm
│   ├── pages/               # Route pages like Home
│   ├── middleware/          # Local React middleware/logger
│   ├── LoggingMiddleware/   # Logger + Auth integration
│   ├── utils/               # Utility files like validators
│   ├── App.jsx
│   └── index.js
├── .gitignore
└── README.md
```

---

## 🚀 Features

- ✅ Shorten up to 5 URLs at once
- 🔤 Optional custom shortcodes (alphanumeric, unique)
- 🕒 Optional expiry time in minutes (defaults to 30 minutes)
- ⚠️ Client-side form validation for URL format, shortcodes, and expiry
- 🔀 React Router-based redirection from shortened URL
- 📈 Basic click analytics with timestamp, referrer, and location
- 🎨 Responsive UI using Material UI

---

## ⚙️ Technologies Used

- React.js (Create React App)
- JavaScript
- Material UI (MUI)
- React Router DOM
- Axios
- UUID
- Custom Logging Middleware via HTTP

---

## 🔐 Logger Authentication (One-Time Setup)

The application uses a custom `log.js` file inside `src/LoggingMiddleware/`.

A token is fetched using the `auth.js` file and set globally via:

```js
setToken(yourAccessToken);
```

This ensures all logs (success, error, debug) are sent securely to:

```
http://20.244.56.144/evaluation-service/logs
```

✅ All API logs follow this format:
```js
Log("frontend", "info", "component", "Short URL created");
```

---

## 📸 Screenshots

### 🖥️ Desktop – URL Shortener Form

![Form Desktop](./assets/form-desktop.png)

### 🔗 Desktop – Shortened Result View

![Result Desktop](./assets/result-desktop.png)

### 📱 Mobile – Stats Page

![Stats Mobile](./assets/stats-mobile.png)

---

## 🧪 Run Locally

1. Navigate to the project folder:

```bash
cd assignment
npm install
npm start
```

2. Open in browser:
```
http://localhost:3000
```

---

## ✅ Submission Notes

- Logging integrated throughout using custom logger.
- Token and secret credentials are excluded using `.gitignore`.
- Committed screenshots inside `assets/`.
- Project name and commits do not contain my personal name or Affordmed.

---

## 🧑‍💻 Developed For

**Affordmed – Campus Hiring Evaluation (Frontend Track)**