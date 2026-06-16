# 🚀 Next-Gen Learning Dashboard

A modern, animated student learning dashboard built with **Next.js (App Router)**, **Supabase**, **Tailwind CSS**, and **Framer Motion**.  
This project demonstrates a production-style frontend architecture with server-side data fetching and smooth UI interactions.

---

## ScreenShot

<img width="959" height="478" alt="Screenshot 2026-06-16 222547" src="https://github.com/user-attachments/assets/28c379fa-9402-4eaa-b7bd-b6a95e3f1db3" />

---

## 📌 Features

- 🧩 Bento grid based dashboard layout
- 🌙 Dark mode UI with modern SaaS styling
- ⚡ Server Components for data fetching (Next.js App Router)
- 📊 Dynamic course data from Supabase PostgreSQL
- 🎞 Smooth animations using Framer Motion
- 📈 Animated progress bars for course completion
- 📉 Activity visualization (contribution-style graph)
- 🧭 Interactive sidebar with active state animation
- 📱 Fully responsive design (desktop, tablet, mobile)

---

## 🧱 Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Supabase (PostgreSQL + API)**
- **Framer Motion**
- **Lucide React Icons**

---

## 🗄️ Database Schema (Supabase)

Table: `courses`

| Column     | Type        | Description                  |
|------------|------------|------------------------------|
| id         | uuid        | Primary key                  |
| title      | text        | Course title                 |
| progress   | integer     | Completion percentage        |
| icon_name  | text        | Icon identifier (Lucide)     |
| created_at | timestamp   | Auto-generated timestamp     |

---

## ⚙️ Architecture

### 🔹 Server Side
- Course data is fetched using **Next.js Server Components**
- Supabase client used for secure backend communication

### 🔹 Client Side
- Framer Motion used for all UI animations
- Sidebar, charts, and interactions handled in client components

---

## 🎨 UI/UX Highlights

- Smooth staggered animations on page load
- Spring-based hover interactions
- Layout-aware sidebar active indicator using `layoutId`
- Animated progress bars (0 → value transition)
- Minimal, futuristic dark theme

---

## 📦 Setup Instructions

### 1. **Clone the repository**


```bash
git clone https://github.com/your-username/learning-dashboard.git
```


2. **Navigate to the project directory:**

   
```bash
cd learning-dashboard
```

3. **Install dependencies:**

```bash
npm install
```

4. **⚙️ Environment Variables**

To run this project locally, create a `.env` file in the root directory and add the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```


4. **Run the development server:**

```bash
npm run dev
```
