# 🚀 Setup Instructions for Local Web Server

This guide explains how to set up a Node.js server on an AWS Lightsail instance.

---

## 📁 Step 1: Copy Project Files

Move your project files to the appropriate directory (e.g., htdocs):

    cp -r your-project /path/to/htdocs
    cd /path/to/htdocs

---

## 📦 Step 2: Install Dependencies

Install the required packages:

    sudo npm install
    sudo npm install http-proxy-middleware@2.0.7

---

## 🔁 Step 3: Install and Use `forever`

Install `forever` globally to keep your server running in the background:

    sudo npm install -g forever

💡 **Note:** If you are using `forever` programmatically, also install `forever-monitor`:

    npm install forever-monitor

---

## ▶️ Step 4: Start the Server

Navigate to your project directory and run the server:

    cd /path/to/your/project
    sudo forever start server.js
