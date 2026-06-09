#  Stellar Way — Admin Panel

The official admin dashboard for the **Stellar Way** e-commerce & delivery platform. Built with **Next.js 16** and deployed on Vercel, it gives administrators full control over orders, riders, users, and platform analytics.

---

## Description

A comprehensive admin dashboard built with Next.js 16 and TypeScript. Admins can manage orders, approve or reject rider applications, monitor live deliveries on a map, view analytics charts, and handle all platform users — all secured with NextAuth.js role-based authentication.

---

## Features

- 📦 **Order Management** — View, update, and manage all customer orders
- 🛵 **Rider Management** — Review rider applications, approve/reject, monitor active riders
- 👤 **User Management** — Manage customer accounts and access
- 📊 **Analytics Dashboard** — Charts and reports on orders, revenue, and deliveries
- 🗺️ **Live Delivery Tracking** — Monitor real-time rider locations on map
- 🔔 **Notifications** — Instant alerts for new orders and rider activity
- 🔐 **Secure Auth** — Admin-only access via NextAuth.js

---

## 🌐 Live URL

> [https://stellar-way-admin.vercel.app](https://stellar-way-admin.vercel.app)

---

## 🔑 Credentials

| Role | Email | Password |
|---|---|---|
| Admin | `admin@stellarway.com` | `admin123` |

---

## 🚀 Installation & Setup

### Prerequisites

- **Node.js** v18+
- **npm** / yarn / pnpm / bun

### Steps

```bash
git clone https://github.com/imamhossenbu/stellar-way-admin
cd stellar-way-admin
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_API_URL=https://stellar-way-server.onrender.com/api/v1
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

> ⚠️ **Never commit your `.env.local` file to version control.**
