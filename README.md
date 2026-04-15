# 🚀 Personal API Deployment

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Nginx](https://img.shields.io/badge/Nginx-Reverse%20Proxy-brightgreen)
![PM2](https://img.shields.io/badge/PM2-Process%20Manager-blue)
![AWS](https://img.shields.io/badge/AWS-EC2-orange)
![Status](https://img.shields.io/badge/Status-Active-success)

---

## 📌 Overview


A simple REST API built with **Node.js + Express** and deployed on an AWS EC2 Linux server using **Nginx as a reverse proxy** and **PM2 for process management**.

It demonstrates core DevOps skills:
- Server provisioning
- API development
- Reverse proxy configuration
- Process management
- Public cloud deployment

---

## 🌐 Live Deployment

- **Base URL (IP):** http://98.93.86.84  
- **Domain:** http://bibilola-hng.duckdns.org  

---

## 📡 API Endpoints

### 🔹 GET /

Returns API status.

```json
{
  "message": "API is running"
}
```

---

### 🔹 GET /health

Returns system health status.

```json
{
  "message": "healthy"
}
```

---

### 🔹 GET /me

Returns developer information.

```json
{
  "name": "Oluwapelumi Odetayo",
  "email": "oluwapelumiodetayob@gmail.com",
  "github": "https://github.com/Oluwapelumiodetayo"
}
```

---

## ⚙️ Local Setup

### 1. Clone Repository
```bash
git clone https://github.com/Oluwapelumiodetayo/stage1-api.git
cd stage1-api
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Locally
```bash
node index.js
```

Server runs on:
```
http://localhost:3000
```

---

## 🚀 Deployment Architecture

```
Internet → Nginx (Port 80) → Node.js App (Port 3000) → PM2 Process Manager
```

---

## 🛠️ Production Setup

### Start Application with PM2
```bash
pm2 start index.js --name stage1-api
pm2 save
pm2 startup
```

---

### Nginx Reverse Proxy Configuration

```nginx
server {
    listen 80;
    server_name bibilola-hng.duckdns.org 98.93.86.84;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Restart Nginx:
```bash
sudo systemctl restart nginx
```

---

## 🏁 Conclusion

This project demonstrates a complete DevOps workflow from development to production using Node.js, Nginx, and PM2 on AWS EC2.


