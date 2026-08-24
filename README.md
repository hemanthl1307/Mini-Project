# MERN Mini Projects

A collection of beginner-to-intermediate mini projects built while learning the MERN stack (MongoDB, Express.js, React, Node.js). Each project focuses on a different set of core web development concepts — from DOM manipulation and state management to API integration.

## 🧩 Projects Included

| # | Project | Description |
|---|---------|-------------|
| 1 | ✅ Todo App | A task manager to add, edit, complete, and delete todos, with persistent storage. |
| 2 | 🧮 Calculator | A functional calculator supporting basic arithmetic operations with a clean UI. |
| 3 | 🎮 Simon Game | A memory-based game that replays and extends a color/sound pattern each round. |
| 4 | ⛅ Weather App | Fetches and displays real-time weather data for any city using a weather API. |

---

## 🛠️ Tech Stack

- **Frontend:** React.js, HTML5, CSS3, JavaScript (ES6+)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Other Tools:** Axios / Fetch API, REST APIs, Git & GitHub

---

## 📁 Project Structure

```
mern-mini-projects/
├── todo-app/          # React frontend    # Express + MongoDB backend
├── calculator/        # React frontend
├── simon-game/        # React frontend
├── weather-app/       # React frontend (consumes external Weather API)
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js and npm installed
- MongoDB installed locally or a MongoDB Atlas connection string

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/mern-mini-projects.git
   cd mern-mini-projects
   ```

2. Navigate into a project folder and install dependencies
   ```bash
   cd todo-app/client && npm install
   cd ../server && npm install
   ```

3. Set up environment variables (for apps that need them, e.g. Todo App, Weather App)
   Create a `.env` file in the relevant `server` or `client` folder:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   WEATHER_API_KEY=your_openweathermap_api_key
   ```

4. Run the app
   ```bash
   # backend
   npm run dev

   # frontend (in a separate terminal)
   npm start
   ```

---

## ✨ Features by Project

**Todo App**
- Add, update, delete, and mark tasks as complete
- Data persisted in MongoDB via Express REST API

**Calculator**
- Basic arithmetic operations (+, −, ×, ÷)
- Clear/reset and decimal support
- Responsive button-grid UI

**Simon Game**
- Randomized color/sound pattern generation
- Increasing difficulty each round
- Game-over and restart logic

**Weather App**
- Search weather by city name
- Displays temperature, conditions, humidity, and wind speed
- Integrates with a public weather API (e.g. OpenWeatherMap)

---


## 🤝 Contributing
Contributions, issues, and feature requests are welcome. Feel free to fork the repo and submit a pull request.

## 📄 License
This project is licensed under the MIT License.

## 👤 Author
**Hemanth L**
- GitHub: [@hemanthl1307](https://github.com/hemanthl1307)
