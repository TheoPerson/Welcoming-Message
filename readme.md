<div align="center">
  <h1>👋 Discord Welcoming Bot</h1>
  <p>A simple and elegant Discord.js bot that automatically sends a welcoming message with an image banner to new server members.</p>
</div>

<div align="center">
  <img src="https://img.shields.io/github/last-commit/TheoPerson/Welcoming-Message?style=flat-square&color=36BCF7" alt="Last Commit" />
  <img src="https://img.shields.io/github/repo-size/TheoPerson/Welcoming-Message?style=flat-square&color=36BCF7" alt="Repo Size" />
  <img src="https://img.shields.io/badge/Discord.js-Ready-blue?style=flat-square&logo=discord" alt="Discord.js" />
</div>

<br />

## 📖 Overview

Whenever a new user joins your Discord server, this bot instantly welcomes them with a beautifully formatted message and a custom banner image. It helps create a warm, professional first impression for your community.

<img src="https://cdn.discordapp.com/attachments/890583358751531039/898923166032867328/unknown.png" alt="Welcome Message Example" />

## ✨ Features

- **Automatic Welcome:** Listens for the `guildMemberAdd` event to trigger instantly.
- **Image Embeds:** Supports attaching a welcome banner/image to the message.
- **Customizable Text:** Easily edit the welcome message text and formatting.
- **Channel Specific:** Sends the message to your designated welcome channel.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- `discord.js` package installed
- A Discord Bot Token

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/TheoPerson/Welcoming-Message.git
   cd Welcoming-Message
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure your bot:**
   Open `config.json` and add your bot token and the ID of your welcome channel:
   ```json
   {
       "token": "YOUR_BOT_TOKEN_HERE",
       "welcomeChannelId": "YOUR_CHANNEL_ID_HERE"
   }
   ```

4. **Run the bot:**
   ```bash
   node index.js
   ```

## 🛠️ Tech Stack

- **JavaScript (Node.js)**
- **Discord.js Library**

---

<div align="center">
  <h3>📬 Need Assistance?</h3>
  <p>Feel free to reach out if you have any questions or need help setting up.</p>
  <p>
    <a href="mailto:theoperson333@gmail.com"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
    <a href="https://twitter.com/JUG_SEC"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter" /></a>
    <a href="https://linkedin.com/in/theoperson"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  </p>
</div>
