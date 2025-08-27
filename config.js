// ┌───────────────────────────────────────────────────────┐
// │                                                       │
// │           QUEEN RUVA AI - CONFIGURATION FILE         │
// │                                                       │
// └───────────────────────────────────────────────────────┘

/* ================== REQUIREMENTS ===================== */
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

/* ================= GLOBAL SETTINGS =================== */
// Original global variables preserved exactly as provided
global.prefa = [',', '!', '.', '#', '&'];
global.iconictechMenu = "\u0076\u0031";
global.autoRecording = false; // AUTO RECORDING
global.autoTyping = true; // AUTO TYPING
global.autorecordtype = false; // AUTO TYPING + RECORDING
global.autoread = true; // AUTO READ MESSAGES
global.autobio = true; // AUTO UPDATE BIO
global.welcome = true; // WELCOME MESSAGES
global.antilink = true; // ANTI-LINK PROTECTION
global.chataudio = false; // AUDIO REPLIES
global.autoswview = true; // STATUS VIEW 
global.chatbot = false; // TEXT CHATBOT
global.emojiReact = true; // EMOJI REACTIONS
global.codewave = 'codewave-unit.zone.id';
global.ownername = "ICONICS-TECH";
global.ownernumber = '263786115435';
global.blockedCountryCodes = ["+92", "91", "+62"];

/* ================ BOT INFORMATION ==================== */
global.ytname = "YT: https://www.youtube.com/@iconic-tech";
global.socialm = "GitHub: https://github.com/iconic05";
global.location = "zimbabwe/bulawayo";
global.botname = "ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ";
global.packname = "ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ";
global.author = "ᴄʀᴇᴀᴛᴇᴅ ʙʏ ɪᴄᴏɴɪᴄ";
global.iconic_channel = "https://chat.whatsapp.com/LyFPHDvc5vMCglUFjv7Rlp";

/* =============== MESSAGE CONFIGURATION ================ */
global.mess = {
    antilink: "⚠️ Group link sharing is restricted!",
    owner: "⛔ Owner access required!",
    wait: "⏳ Processing your request...",
    done: "✅ Task completed successfully!",
    prem: "🔒 Premium feature - upgrade to access this!",
    admin: "⛔ Admin privileges required",
    botAdmin: "🤖 Please make me admin to use this feature",
    error: "❌ Oops! Something went wrong",
    group: "💬 This command works in groups only",
    private: "📩 Please use this in private chat with me"
};

/* ================ THUMBNAIL SETUP ==================== */
const thumbnails = ["ruva.jpg", "ruva2.jpg"]; // Add more as needed
const randomThumb = thumbnails[Math.floor(Math.random() * thumbnails.length)];
global.thumb = fs.readFileSync(path.join("./QueenMedia", randomThumb));

/* ================ FILE WATCHER ======================= */
const file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Updated '${__filename}'`));
    delete require.cache[file];
    require(file);
});

// ┌───────────────────────────────────────────────────────┐
// │        DO NOT REMOVE - ESSENTIAL STRUCTURE           │
// │   Contact support at:                                │
// │   https://codewave-unit.zone.id/support/contact-us   │
// └───────────────────────────────────────────────────────┘