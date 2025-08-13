const fs = require('fs');
const chalk = require('chalk');

/* ==== Global Function==== */
global.prefa = [',', '!', '.', '#', '&'];
global.iconictechMenu = "\u0076\u0031";
global.autoRecording = false; // AUTO RECORDING
global.autoTyping = true; // AUTO TYPING
global.autorecordtype = false; // AUTO TYPING + RECORDING
global.autoread = true; // AUTO READ MESSAGES
global.autobio = true; // AUTO UPDATE BIO
global.chataudio = false; // ENABLE AUDIO REPLIES
global.autoswview = true; // STATUS VIEW 
global.chatbot = false; // ENABLE TEXT CHATBOT
global.emojiReact = false; // DEFAULT: ENABLED
global.codewave = 'codewave-unit.zone.id' //DON'T REMOVE BOT WILL NOT FUNCTIONING 
global.ownernomer = "263786115435";
global.ownername = "ICONICS-TECH";
global.ownernumber = '263786115435';

// ADD COUNTRY CODES TO BLOCK IN DM
global.blockedCountryCodes = ["+92", "91", "+62"]; 

/* ==== QUEEN RUVA AI BETA CONTROL ==== */
global.ytname = "YT: https://www.youtube.com/@iconic-tech";
global.socialm = "GitHub: https://github.com/iconic05";
global.location = "zimbabwe/bulawayo";
global.ownername = "iconic tech";
global.botname = "ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ";
global.packname = "ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ";
global.author = "ᴄʀᴇᴀᴛᴇᴅ ʙʏ ɪᴄᴏɴɪᴄ";
global.iconic_channel = "https://chat.whatsapp.com/LyFPHDvc5vMCglUFjv7Rlp";

// MODULE EXPORTS ° Block Dm Function Dev By Iconic Tech 
module.exports = {
    // Security settings
    security: {
        antiSpam: true,
        maxMessages: 10, // Messages per 10 seconds
        blockDuration: 300 // 5 minutes in seconds
    },
    
    // Anti-link and messages
    antilinkMessage: "⚠️ Group link sharing is restricted!",
    mess: {
        owner: "⛔ Owner access required!",
        wait: "⏳ Processing your request...",
        done: "✅ Task completed successfully!",
    }
};

// REPLY MESSAGES ° Don't Change The Function 
global.mess = {
    done: "✅ Task completed successfully!",
    prem: "🔒 Premium feature - upgrade to access this!",
    admin: "⛔ Admin privileges required",
    botAdmin: "🤖 Please make me admin to use this feature",
    owner: "🚫 Owner-only command detected",
    group: "💬 This command works in groups only",
    private: "📩 Please use this in private chat with me",
    wait: "⏳ Processing your request...",
    error: "❌ Oops! Something went wrong",
};

// WATCH FILE CHANGES ° DEVELOPED BY ICONIC TECH 
global.thumb = fs.readFileSync("./QueenMedia/ruva.jpg");

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Updated '${__filename}'`));
    delete require.cache[file];
    require(file);
});