# 📈 DataBlitz
**Stock Market Tracking & Alert Platform**

DataBlitz is a modern stock market web application that enables users to track selected stocks, visualize market trends using interactive charts, and receive personalized alerts based on predefined conditions. Built with **Next.js** and powered by event-driven workflows, it focuses on real-time data monitoring, watchlist management, and intelligent notifications.

🌐 **Live App**: [DataBlitz](https://data-blitz.vercel.app)
<br/>

<img width="1919" height="935" alt="image" src="https://github.com/user-attachments/assets/fc79bf00-e8dc-4635-b607-40c75a5891c9" />
<img width="1886" height="928" alt="image" src="https://github.com/user-attachments/assets/9ff336ba-1f22-4df6-b585-b965d8c03d89" />

---

## 📊 Features

- 📈 **Real-time Stock Monitoring** – View live and historical stock data with interactive line and candlestick charts
- ⭐ **Personalized Watchlist** – Add and manage stocks for quick tracking and monitoring
- ⏰ **Smart Price Alerts** – Configure threshold-based alerts and receive automated email notifications
- 🔔 **Event-Driven Workflows** – Automated background jobs handle alert scheduling and delivery efficiently
- 🔐 **Secure Authentication** – User authentication and session management with Better Auth
- 📊 **Interactive Charts** – TradingView widget integration for professional-grade visualization

---

## 🧱 Tech Stack

| Frontend       | Backend       | Database     | Auth           | Notifications  | Market Data    | Charts          | Workflows  |
|----------------|---------------|--------------|----------------|----------------|----------------|-----------------|------------|
| React.js       | Node.js       | MongoDB      | Better Auth    | Nodemailer     | Finnhub API    | TradingView     | Inngest    |
| Next.js        | Express.js    |              |                |                |                |                 |            |
| Tailwind CSS   | TypeScript    |              |                |                |                |                 |            |

---

## 🌿 System Architecture

<img width="1805" height="853" alt="image" src="https://github.com/user-attachments/assets/2a79ce85-7ff5-4e7d-9aeb-8eb5b304bd79" />

---

## 🗂️ Project Structure
```bash
DataBlitz/
├── app/                 # Next.js app directory (pages & routes)
├── components/          # Reusable UI components
├── lib/                 # Utility functions and helpers
├── server/              # Backend APIs and workflows
├── inngest/             # Event-driven background jobs
├── public/              # Static assets
├── .env.example         # Environment variable template
├── package.json
└── README.md            # You're here!
```

---

## 🚀 How It Works

### 📊 Stock Data & Visualization
1. Stock data is fetched from **Finnhub API** in real-time.
2. Interactive charts are rendered using **TradingView widgets**.
3. Users can explore price trends, historical performance, and technical indicators.

### ⭐ Watchlist & Alert Management
1. Users add stocks to their personalized watchlist.
2. Alert conditions (price thresholds) are stored in **MongoDB**.
3. **Inngest** triggers background workflows to continuously monitor conditions.

### 📧 Automated Notifications
1. When alert conditions are met, events are triggered.
2. Automated email notifications are sent via **Nodemailer**.
3. Event-driven execution ensures scalability and reliability without blocking the main application.

---

## 🛠️ Installation & Setup

### 📦 Prerequisites
- Node.js v18+
- MongoDB database
- Finnhub API key ([Get yours here](https://finnhub.io/))
- Inngest account ([Sign up here](https://www.inngest.com/))
- Email credentials for notifications (Gmail/SMTP)

---

### 🔌 Clone the Repository
```bash
git clone https://github.com/TiwariAry/DataBlitz.git
cd DataBlitz
```

---

### ⚙️ Setup Instructions

#### 1. Install Dependencies
```bash
npm install
```

#### 2. Configure Environment Variables

Create a `.env` file in the root directory:
```env
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
FINNHUB_API_KEY=your_finnhub_api_key
BETTER_AUTH_SECRET=your_auth_secret
INNGEST_EVENT_KEY=your_inngest_key
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password
```

#### 3. Start the Application
```bash
npm run dev
```

#### 4. Start Inngest Dev Server

Open a new terminal and run:
```bash
npx inngest-cli@latest dev
```

Visit: `http://localhost:3000`

---

## 🧠 Learnings & Highlights

- Designed and implemented a **scalable event-driven alerting system** using Inngest
- Integrated **third-party financial APIs** (Finnhub) with a full-stack Next.js application
- Built **secure authentication** and user-specific data management with Better Auth
- Gained expertise in **background job orchestration** and automated email notifications
- Learned real-time data handling and **interactive chart integration** with TradingView

---

## 📣 Future Enhancements

- 🔔 Multi-condition alerts (volume thresholds, percentage changes)
- 📱 Push notifications for mobile devices
- 📈 Advanced analytics with technical indicators and trend patterns
- 🧾 Admin dashboard for stock and user monitoring
- 🗑️ Delete/edit alerts and watchlist items
- 🔍 Search functionality for stocks and filters

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.  
Let's make **DataBlitz** even better together.

---

## 📄 License

This project is licensed under the [MIT License](https://github.com/TiwariAry/DataBlitz/blob/main/LICENSE).  
Feel free to fork, modify, and build upon it.

---

## 👨‍💻 Author

**Aryan Tiwari**  
📫 [LinkedIn](https://www.linkedin.com/in/aryan-tiwari-6844a9250)  
💻 [GitHub](https://github.com/TiwariAry)

---
