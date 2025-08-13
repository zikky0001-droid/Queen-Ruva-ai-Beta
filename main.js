require('./config')
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const express = require('express');
const chalk = require('chalk')
const FileType = require('file-type')
const simpleGit = require('simple-git');
const git = simpleGit();
const { execSync } = require('child_process');
const CryptoJS = require("crypto-js");
const path = require('path')
const axios = require('axios')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./database/exifFunct')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetch, await, sleep, reSize } = require('./database/queen-ruva')
const { default: IconicTechIncConnect, delay, makeCacheableSignalKeyStore, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto, Browsers} = require("baileys")
const PHONENUMBER_MCC = require('./database/countyCodes');
const NodeCache = require("node-cache")
const Pino = require("pino")
const readline = require("readline")
const { parsePhoneNumber } = require("libphonenumber-js")
const makeWASocket = require("baileys").default

const app = express();
const PORT = process.env.PORT || 9090;

  app.get('/', (_, res) => res.send('IconicTechInc WhatsApp Bot is running.'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});



const store = {
    messages: {},
    contacts: {},
    chats: {},
    groupMetadata: async (jid) => {
        return {}
    },
    bind: function(ev) {
        ev.on('messages.upsert', ({ messages }) => {
            messages.forEach(msg => {
                if (msg.key && msg.key.remoteJid) {
                    this.messages[msg.key.remoteJid] = this.messages[msg.key.remoteJid] || {}
                    this.messages[msg.key.remoteJid][msg.key.id] = msg
                }
            })
        })
        
        ev.on('contacts.update', (contacts) => {
            contacts.forEach(contact => {
                if (contact.id) {
                    this.contacts[contact.id] = contact
                }
            })
        })
        
        ev.on('chats.set', (chats) => {
            this.chats = chats
        })
    },
    loadMessage: async (jid, id) => {
        return this.messages[jid]?.[id] || null
    }
}

let phoneNumber = "263786115435"
let owner = [];
try {
    owner = JSON.parse(fs.readFileSync('./database/json/owner.json'));
    const requiredOwners = ["263783525824", "263714388643", "263786115435"];
    for (const number of requiredOwners) {
        if (!owner.includes(number)) {
            owner.push(number);
        }
    }
    fs.writeFileSync('./database/json/owner.json', JSON.stringify(owner, null, 2));
} catch (err) {
    owner = ["263783525824", "263714388643", "263786115435"];
    fs.writeFileSync('./database/json/owner.json', JSON.stringify(owner, null, 2));
}
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
         
async function startIconicTechInc() {
//------------------------------------------------------
let { version, isLatest } = await fetchLatestBaileysVersion()
const { state, saveCreds } = await useMultiFileAuthState("./session")
const msgRetryCounterCache = new NodeCache() // for retry message, "waiting message"

let IconicTechInc = makeWASocket({
    logger: pino({ level: 'silent' }),
    printQRInTerminal: false, // disable QR printing in terminal
    version: [2, 3000, 1017531287], // your specific version array
    browser: Browsers.ubuntu('Edge'), // set browser to Edge on Ubuntu
    auth: state, // directly use state for auth
    markOnlineOnConnect: true, // set false for offline
    generateHighQualityLinkPreview: true, // make high preview link
    getMessage: async (key) => {
        const jid = jidNormalizedUser(key.remoteJid)
        const msg = await store.loadMessage(jid, key.id)
        return msg?.message || ""
    },
    msgRetryCounterCache, // Resolve waiting messages
    defaultQueryTimeoutMs: undefined, // for this issues https://github.com/WhiskeySockets/Baileys/issues/276
})

store.bind(IconicTechInc.ev)

    // login use pairing code
   // source code https://github.com/WhiskeySockets/Baileys/blob/master/Example/example.ts#L61
// Color cycling function for cool effects
if (pairingCode && IconicTechInc?.authState?.creds && !IconicTechInc.authState.creds.registered) {
    try {
        // Display initial header with bot info
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        const dateString = now.toLocaleDateString();

        console.log(chalk.magentaBright(`╭──────────────────────────────────────────╮`));
        console.log(chalk.magentaBright(`│                                          │`));
        console.log(chalk.magentaBright(`│          🚀 QUEEN RUVA AI BETA 🚀        │`));
        console.log(chalk.magentaBright(`│       Powered by ICONIC-TECH (2024)      │`));
        console.log(chalk.magentaBright(`│                                          │`));
        console.log(chalk.magentaBright(`│  ⏰ ${timeString.padEnd(36)}│`));
        console.log(chalk.magentaBright(`│  📅 ${dateString.padEnd(36)}│`));
        console.log(chalk.magentaBright(`│                                          │`));
        console.log(chalk.magentaBright(`╰──────────────────────────────────────────╯`));
        await delay(1500);

        if (useMobile) {
            console.log(chalk.redBright(`╭──────────────────────────────────────────╮`));
            console.log(chalk.redBright(`│                                          │`));
            console.log(chalk.redBright(`│           ❌ ERROR DETECTED ❌           │`));
            console.log(chalk.redBright(`│                                          │`));
            console.log(chalk.redBright(`│  Cannot use pairing code with mobile API  │`));
            console.log(chalk.redBright(`│                                          │`));
            console.log(chalk.redBright(`│  Please use QR code instead               │`));
            console.log(chalk.redBright(`│                                          │`));
            console.log(chalk.redBright(`╰──────────────────────────────────────────╯`));
            await delay(1000);
            throw new Error('Cannot use pairing code with mobile api');
        }

        console.log(chalk.cyanBright(`╭──────────────────────────────────────────╮`));
        console.log(chalk.cyanBright(`│                                          │`));
        console.log(chalk.cyanBright(`│          📱 NUMBER VERIFICATION 📱       │`));
        console.log(chalk.cyanBright(`│                                          │`));
        console.log(chalk.cyanBright(`│  Please enter your WhatsApp number        │`));
        console.log(chalk.cyanBright(`│  with country code:                       │`));
        console.log(chalk.cyanBright(`│                                          │`));
        console.log(chalk.cyanBright(`│  Example: 263781863626                    │`));
        console.log(chalk.cyanBright(`│                                          │`));
        console.log(chalk.cyanBright(`╰──────────────────────────────────────────╯`));
        await delay(1000);
        
        let phoneNumber = await question(chalk.greenBright(`➤ Your number: `));
        phoneNumber = phoneNumber?.replace(/[^0-9]/g, '') || '';
        await delay(500);

        // First verification check
        if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
            console.log(chalk.yellowBright(`╭──────────────────────────────────────────╮`));
            console.log(chalk.yellowBright(`│                                          │`));
            console.log(chalk.yellowBright(`│          🔄 TRY AGAIN PLEASE 🔄          │`));
            console.log(chalk.yellowBright(`│                                          │`));
            console.log(chalk.yellowBright(`│  The number format is incorrect!         │`));
            console.log(chalk.yellowBright(`│                                          │`));
            console.log(chalk.yellowBright(`│  Make sure to include country code:       │`));
            console.log(chalk.yellowBright(`│  Example: 263781863626                    │`));
            console.log(chalk.yellowBright(`│                                          │`));
            console.log(chalk.yellowBright(`╰──────────────────────────────────────────╯`));
            await delay(1500);

            phoneNumber = await question(chalk.greenBright(`➤ Correct number: `));
            phoneNumber = phoneNumber?.replace(/[^0-9]/g, '') || '';
            await delay(500);

            // Second verification check
            if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
                console.log(chalk.redBright(`╭──────────────────────────────────────────╮`));
                console.log(chalk.redBright(`│                                          │`));
                console.log(chalk.redBright(`│          ❌ VERIFICATION FAILED ❌        │`));
                console.log(chalk.redBright(`│                                          │`));
                console.log(chalk.redBright(`│  Invalid number format after 2 attempts  │`));
                console.log(chalk.redBright(`│                                          │`));
                console.log(chalk.redBright(`│  Process exiting...                      │`));
                console.log(chalk.redBright(`│                                          │`));
                console.log(chalk.redBright(`╰──────────────────────────────────────────╯`));
                rl.close();
                process.exit(1);
            }
        }

        console.log(chalk.blueBright(`╭──────────────────────────────────────────╮`));
        console.log(chalk.blueBright(`│                                          │`));
        console.log(chalk.blueBright(`│          ⏳ GENERATING CODE ⏳            │`));
        console.log(chalk.blueBright(`│                                          │`));
        console.log(chalk.blueBright(`│  Please wait while we generate your       │`));
        console.log(chalk.blueBright(`│  pairing code...                          │`));
        console.log(chalk.blueBright(`│                                          │`));
        console.log(chalk.blueBright(`╰──────────────────────────────────────────╯`));
        await delay(3000);

        // Get pairing code with proper error handling
        const code = await new Promise(async (resolve, reject) => {
            try {
                let result = await IconicTechInc.requestPairingCode(phoneNumber);
                result = result?.match(/.{1,4}/g)?.join("-") || result;
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });

        console.log(chalk.greenBright(`╭──────────────────────────────────────────╮`));
        console.log(chalk.greenBright(`│                                          │`));
        console.log(chalk.greenBright(`│          🔐 PAIRING SUCCESSFUL 🔐        │`));
        console.log(chalk.greenBright(`│                                          │`));
        console.log(chalk.greenBright(`│  Your pairing code:                      │`));
        console.log(chalk.greenBright(`│  ${chalk.bold.whiteBright(String(code).padEnd(36))}│`));
        console.log(chalk.greenBright(`│                                          │`));
        console.log(chalk.greenBright(`│  ⚠️ This code expires in 5 minutes       │`));
        console.log(chalk.greenBright(`│                                          │`));
        console.log(chalk.greenBright(`│  Powered by ICONIC-TECH                  │`));
        console.log(chalk.greenBright(`│  Queen Ruva AI Beta                      │`));
        console.log(chalk.greenBright(`│                                          │`));
        console.log(chalk.greenBright(`╰──────────────────────────────────────────╯`));
        
    } catch (error) {
        console.error(chalk.red('Error during pairing process:'), error);
        rl.close();
        process.exit(1);
    } finally {
        rl.close();
    }
}

// Delay function
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let lastAudioTime = 0;
const audioDelay = 2000; // 2-second delay between audio replies

IconicTechInc.ev.on('messages.upsert', async ({ messages }) => {
    const m = messages[0];
    if (!m.message || m.key.fromMe || m.isGroup || !global.chataudio) return;

    try {
        const currentTime = Date.now();
        if (currentTime - lastAudioTime < audioDelay) {
            console.log('[AUDIO BOT] Rate limit exceeded, skipping message');
            return;
        }

        const text = m.message.conversation || m.message.extendedTextMessage?.text;
        if (!text) return;

        // Show 🎵 reaction (processing)
        await IconicTechInc.sendMessage(m.key.remoteJid, { 
            react: { 
                text: '🎵', 
                key: m.key 
            } 
        });

        // Step 1: Get AI reply (from your chatbot API)
        const response = await axios.get('https://api.nexoracle.com/ai/chatgpt', {
            params: { 
                apikey: '63b406007be3e32b53',
                prompt: text 
            }
        });

        const aiReply = response.data?.result;
        if (!aiReply) throw new Error("No AI reply generated");

        // Step 2: Convert AI reply to audio (TTS)
        const lang = 'en'; // Change language if needed
        const ttsUrls = [
            `https://translate.google.com/translate_tts?ie=UTF-8&tl=${lang}&client=tw-ob&q=${encodeURIComponent(aiReply)}`,
            `https://api.voicerss.org/?key=YOUR_API_KEY&hl=${lang}&src=${encodeURIComponent(aiReply)}`, // Replace with your API key
            `https://api.streamelements.com/kappa/v2/speech?voice=Brian&text=${encodeURIComponent(aiReply)}`
        ];

        // Try each TTS API until one works
        let audioSent = false;
        for (const url of ttsUrls) {
            try {
                await IconicTechInc.sendMessage(m.key.remoteJid, {
                    audio: { url },
                    mimetype: 'audio/mpeg',
                }, { quoted: m });
                
                audioSent = true;
                lastAudioTime = currentTime;
                break; // Exit loop if successful
            } catch (error) {
                console.error(`[TTS FAILED] ${url}:`, error.message);
            }
        }

        // Fallback: Send AI reply as text if TTS fails
        if (!audioSent) {
            await IconicTechInc.sendMessage(m.key.remoteJid, {
                text: `[Audio Error] Could not generate TTS. Here's the reply:\n\n${aiReply}`
            }, { quoted: m });
        }

    } catch (error) {
        console.error('[AUDIO BOT ERROR]', error);
        await IconicTechInc.sendMessage(m.key.remoteJid, { 
            react: { 
                text: '❌', 
                key: m.key 
            } 
        });
        await IconicTechInc.sendMessage(m.key.remoteJid, {
            text: 'Error: ' + (error.message || 'Failed to process audio.')
        }, { quoted: m });
    }
});
// Chatbot Implementation (Text Only)
let lastTextTime = 0;
const messageDelay = 2000; // 2 second delay between responses

IconicTechInc.ev.on('messages.upsert', async ({ messages }) => {
    const m = messages[0];
    if (!m.message) return;

    // Don't respond to the bot's own messages
    if (m.key.fromMe) return;

    // Text Chatbot Only
    if (!m.isGroup && global.chatbot) {
        try {
            const currentTime = Date.now();
            if (currentTime - lastTextTime < messageDelay) {
                console.log('Message skipped: Rate limit exceeded');
                return;
            }

            const text = m.message.conversation || m.message.extendedTextMessage?.text;
            if (!text) return;

            // Add reaction to show the message is being processed
            await IconicTechInc.sendMessage(m.key.remoteJid, { 
                react: { 
                    text: '💬', 
                    key: m.key 
                } 
            });

            // Using the new API endpoint
            const response = await axios.get('https://api.nexoracle.com/ai/chatgpt', {
                params: { 
                    apikey: '63b406007be3e32b53',
                    prompt: text 
                }
            });

            // Handle the response based on the structure you provided
            if (response.data?.status && response.data?.result) {
                await IconicTechInc.sendMessage(m.key.remoteJid, {
                    text: response.data.result
                }, { quoted: m });
                lastTextTime = currentTime;
            } else {
                throw new Error('Invalid API response structure');
            }
        } catch (error) {
            console.error('Chatbot error:', error);
            // Change reaction to show error
            await IconicTechInc.sendMessage(m.key.remoteJid, { 
                react: { 
                    text: '❌', 
                    key: m.key 
                } 
            });
            
            // Send error message with more details if needed
            let errorMessage = 'Sorry, I encountered an error processing your message.';
            if (error.response?.status === 429) {
                errorMessage = "I'm getting too many requests. Please try again later.";
            }
            
            await IconicTechInc.sendMessage(m.key.remoteJid, {
                text: errorMessage
            }, { quoted: m });
        }
    }
});

  IconicTechInc.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
            const mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (mek.key && mek.key.remoteJid === 'status@broadcast' )
            if (!IconicTechInc.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
            const m = smsg(IconicTechInc, mek, store)
            require("./queen-ruva")(IconicTechInc, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })  
    
    
        // Continue processing other commands here...
    //welcome 
const welcomeFuncHandler = require('./database/welcomeFunc.js');

IconicTechInc.ev.on('group-participants.update', async (update) => {
    try {
        await welcomeFuncHandler(IconicTechInc, update, store);
    } catch (err) {
        console.error("Group event handling error:", err);
    }
});
//NEW
IconicTechInc.ev.on("messages.upsert", async (chatUpdate) => {
    const mek = chatUpdate.messages[0];
    if (!mek.message || mek.key.fromMe) return;

    const text = mek.message.conversation || mek.message.extendedTextMessage?.text;
    const sender = mek.key.participant || mek.key.remoteJid; // Get sender's ID
    const chatId = mek.key.remoteJid; // Get chat ID

    if (text && text.includes("chat.whatsapp.com")) {
        try {
            // Delete the message
            await IconicTechInc.sendMessage(chatId, { text: "*🚫 No Group Links Allowed! Message Deleted.*" });
            await IconicTechInc.sendMessage(chatId, { delete: mek.key });

            // Kick the sender
            await IconicTechInc.groupParticipantsUpdate(chatId, [sender], "remove");
        } catch (error) {
            console.error("Error handling group link:", error);
        }
    }
});
//new project 
//INBOX 

//-----------_-_-_-ALL NEWS HERE_-_-_-_-_-_-_-_-_

//_-_-_-_-_-_-__-STOP-_-_-_-_-_-_&_&_&_&_&_&_&_&_&_
    /* ========== AUTOMATIC REACTIONS ========== */
// Global toggle (true = reactions ON, false = reactions OFF)


IconicTechInc.ev.on('messages.upsert', async chatUpdate => {
  if (!global.emojiReact) return; // Skip if disabled
  
  const mek = chatUpdate.messages[0];
  if (!mek.key || mek.key.fromMe) return;

  // Skip system messages (reactions, protocol msgs, etc.)
  if (mek.message?.protocolMessage || mek.message?.reactionMessage) return;

  // Send a random reaction (hardcoded emojis)
  const emojis = ['👍', '❤️', '😂', '😮', '😢', '🔥'];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  await IconicTechInc.sendMessage(mek.key.remoteJid, {
    react: { text: randomEmoji, key: mek.key }
  });
});
    //anticall
    
//spam
// Anti-spam protection
const userMessageCount = new Map();
const userWarnings = new Map();

IconicTechInc.ev.on('messages.upsert', async (chatUpdate) => {
    const mek = chatUpdate.messages[0];
    if (!mek.key || mek.key.fromMe) return;
    
    const sender = mek.key.participant || mek.key.remoteJid;
    const currentTime = Date.now();
    
    // Get formatted date and time
    const now = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const currentDate = now.toLocaleDateString('en-US', dateOptions);
    const currentTimeFormatted = now.toLocaleTimeString('en-US', timeOptions);

    // Initialize user tracking if not exists
    if (!userMessageCount.has(sender)) {
        userMessageCount.set(sender, {
            count: 0,
            lastMessageTime: currentTime,
            warningSent: false
        });
    }
    
    const userData = userMessageCount.get(sender);
    userData.count += 1;
    userData.lastMessageTime = currentTime;
    
    // Check message rate (more than 10 messages in 10 seconds)
    if (userData.count > 10 && (currentTime - userData.lastMessageTime) < 10000) {
        if (!userData.warningSent) {
            // Send warning message with bot branding
            await IconicTechInc.sendMessage(sender, {
                text: `┏━━━━━━━━━━━━━━━━━━━━━━┓
┃  ⚠️ *QUEEN RUVA AI BETA* ⚠️  
┣━━━━━━━━━━━━━━━━━━━━━━┫
┃ *SPAM DETECTED!*
┃
┃ 📅 Date: ${currentDate}
┃ ⏰ Time: ${currentTimeFormatted}
┃
┃ You're sending messages too fast.
┃ Please slow down or you'll be
┃ temporarily blocked.
┃
┃ 🛠️ *Creator:* Iconic Tech
┗━━━━━━━━━━━━━━━━━━━━━━┛`
            });
            userData.warningSent = true;
            return;
        }
        
        // Block user if they continue after warning
        await IconicTechInc.sendMessage(sender, {
            text: `┏━━━━━━━━━━━━━━━━━━━━━━┓
┃  ⚠️ *QUEEN RUVA AI BETA* ⚠️  
┣━━━━━━━━━━━━━━━━━━━━━━┫
┃ *TEMPORARY BLOCK*
┃
┃ 📅 Date: ${currentDate}
┃ ⏰ Time: ${currentTimeFormatted}
┃
┃ You've been blocked for 5 minutes
┃ due to excessive messaging.
┃
┃ 🛠️ *Creator:* Iconic Tech
┗━━━━━━━━━━━━━━━━━━━━━━┛`
        });
        await IconicTechInc.updateBlockStatus(sender, 'block');
        
        // Unblock after 5 minutes
        setTimeout(async () => {
            await IconicTechInc.updateBlockStatus(sender, 'unblock');
            const unblockTime = new Date();
            const unblockDate = unblockTime.toLocaleDateString('en-US', dateOptions);
            const unblockTimeFormatted = unblockTime.toLocaleTimeString('en-US', timeOptions);
            
            await IconicTechInc.sendMessage(sender, {
                text: `┏━━━━━━━━━━━━━━━━━━━━━━┓
┃  ✅ *QUEEN RUVA AI BETA* ✅  
┣━━━━━━━━━━━━━━━━━━━━━━┫
┃ *BLOCK LIFTED*
┃
┃ 📅 Date: ${unblockDate}
┃ ⏰ Time: ${unblockTimeFormatted}
┃
┃ You may now message again.
┃ Please maintain proper messaging
┃ etiquette.
┃
┃ 🛠️ *Creator:* Iconic Tech
┗━━━━━━━━━━━━━━━━━━━━━━┛`
            });
            userMessageCount.delete(sender);
            userWarnings.delete(sender);
        }, 300000);
    }
    
    // Reset counter after 10 seconds
    setTimeout(() => {
        if (userMessageCount.has(sender)) {
            const userData = userMessageCount.get(sender);
            if (currentTime - userData.lastMessageTime >= 10000) {
                userMessageCount.delete(sender);
                userWarnings.delete(sender);
            } else if (userData.count > 0) {
                userData.count -= 1;
            }
        }
    }, 10000);
});



IconicTechInc.ev.on('messages.upsert', async chatUpdate => {
        	if (global.autoswview){
            mek = chatUpdate.messages[0]
            if (mek.key && mek.key.remoteJid === 'status@broadcast') {
            	await IconicTechInc.readMessages([mek.key]) }
            }
    })
   
    IconicTechInc.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }

    IconicTechInc.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = IconicTechInc.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            }
        }
    })

    IconicTechInc.getName = (jid, withoutContact = false) => {
        id = IconicTechInc.decodeJid(jid)
        withoutContact = IconicTechInc.withoutContact || withoutContact
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = IconicTechInc.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
                id,
                name: 'WhatsApp'
            } : id === IconicTechInc.decodeJid(IconicTechInc.user.id) ?
            IconicTechInc.user :
            (store.contacts[id] || {})
        return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    IconicTechInc.public = true

    IconicTechInc.serializeM = (m) => smsg(IconicTechInc, m, store)

IconicTechInc.ev.on("connection.update", async (s) => {
    const { connection, lastDisconnect } = s;
    
    if (connection === "open") {
        // Get current time and date
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: true 
        });
        
        const dateString = now.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });

        // Get bot information
        const botNumber = IconicTechInc.user.id.split(':')[0] + '@s.whatsapp.net';
        const status = IconicTechInc.user.status || "Online and Ready!";

        // Display connection banner
        console.clear();
        console.log(chalk.magenta(`\n`));
        console.log(chalk.yellow(`✅ Connected to WhatsApp as: ${IconicTechInc.user.name || IconicTechInc.user.id}`));

        // WhatsApp-styled information box
        console.log(chalk.cyan(`╭──────────────────────────────────────────╮`));
        console.log(chalk.cyan(`│                                          │`));
        console.log(chalk.cyan(`│          🚀 QUEEN RUVA AI BETA 🚀        │`));
        console.log(chalk.cyan(`│       Powered by ICONIC-TECH (2024)      │`));
        console.log(chalk.cyan(`│                                          │`));
        console.log(chalk.cyan(`│  ⏰ Time: ${timeString.padEnd(30)}│`));
        console.log(chalk.cyan(`│  📅 Date: ${dateString.padEnd(30)}│`));
        console.log(chalk.cyan(`│                                          │`));
        console.log(chalk.cyan(`│  📱 Bot Number: ${botNumber.padEnd(20)}│`));
        console.log(chalk.cyan(`│  🟢 Status: ${status.padEnd(27)}│`));
        console.log(chalk.cyan(`│                                          │`));
        console.log(chalk.cyan(`│  📌 YouTube: @iconictechofficial          │`));
        console.log(chalk.cyan(`│  📌 GitHub: github.com/iconic-tech        │`));
        console.log(chalk.cyan(`│  📌 Support: +263 78 352 5824            │`));
        console.log(chalk.cyan(`│  📌 Official Updates:                     │`));
        console.log(chalk.cyan(`│     https://whatsapp.com/channel/0029... │`));
        console.log(chalk.cyan(`│                                          │`));
        console.log(chalk.cyan(`╰──────────────────────────────────────────╯\n`));

        // Send connection notification
        await IconicTechInc.sendMessage("263716304574@s.whatsapp.net", { 
            text: `🌟 *QUEEN RUVA AI BETA is now ONLINE!*\n\n` +
                  `⏰ *Time:* ${timeString}\n` +
                  `📅 *Date:* ${dateString}\n` +
                  `📱 *Bot Number:* ${botNumber}\n` +
                  `🟢 *Status:* ${status}\n\n` +
                  `*Follow for official updates:*\n` +
                  `https://whatsapp.com/channel/0029ValX2Js9RZAVtDgMYj0r\n\n` +
                  `_Powered by ICONIC-TECH Official._`
        });

        // Send server info
        const os = require('os');
        const serverInfo = `🖥️ *Server Status*\n\n` +
                         `• Hostname: ${os.hostname()}\n` +
                         `• Platform: ${os.platform()} ${os.arch()}\n` +
                         `• CPU: ${os.cpus()[0].model} (${os.cpus().length} cores)\n` +
                         `• Memory: ${(os.freemem()/1024/1024).toFixed(2)}MB free\n` +
                         `• Uptime: ${formatUptime(os.uptime())}\n` +
                         `• Node.js: ${process.version}`;
        
        await IconicTechInc.sendMessage("263716304574@s.whatsapp.net", { text: serverInfo });
    }

    // Auto-reconnect logic
    if (connection === "close" && lastDisconnect?.error?.output?.statusCode !== 401) {
        startIconicTechInc();
    }
});

// Helper function
function formatUptime(seconds) {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    return `${days}d ${hours}h ${mins}m`;
}

    IconicTechInc.ev.on('creds.update', saveCreds)
    IconicTechInc.ev.on("messages.upsert",  () => { })

    IconicTechInc.sendText = (jid, text, quoted = '', options) => IconicTechInc.sendMessage(jid, {
        text: text,
        ...options
    }, {
        quoted,
        ...options
    })
    IconicTechInc.sendTextWithMentions = async (jid, text, quoted, options = {}) => IconicTechInc.sendMessage(jid, {
        text: text,
        mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
        ...options
    }, {
        quoted
    })
    IconicTechInc.ev.on('messages.upsert', async (chatUpdate) => {
  const mek = chatUpdate.messages[0];
  if (!mek.key || mek.key.fromMe) return; // Skip self messages

  const senderJid = mek.key.participant || mek.key.remoteJid;
  
  // Skip group messages (only block DMs)
  if (!senderJid.endsWith('@s.whatsapp.net')) return;

  // Extract phone number (remove @s.whatsapp.net)
  const phoneNumber = senderJid.split('@')[0];
  
  // Check if the number starts with a blocked country code
  const isBlocked = global.blockedCountryCodes.some(code => 
    phoneNumber.startsWith(code.replace('+', '')) // +1 => 1
  );

  if (isBlocked) {
    await IconicTechInc.updateBlockStatus(senderJid, 'block'); // Block user
    console.log(`Blocked ${senderJid} (Country Code Filter)`);
  }
});
    IconicTechInc.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await IconicTechInc.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }
    IconicTechInc.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await IconicTechInc.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }
    IconicTechInc.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }
    
    IconicTechInc.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }
    
    IconicTechInc.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
  let type = await IconicTechInc.getFile(path, true);
  let { res, data: file, filename: pathFile } = type;

  if (res && res.status !== 200 || file.length <= 65536) {
    try {
      throw {
        json: JSON.parse(file.toString())
      };
    } catch (e) {
      if (e.json) throw e.json;
    }
  }

  let opt = {
    filename
  };

  if (quoted) opt.quoted = quoted;
  if (!type) options.asDocument = true;

  let mtype = '',
    mimetype = type.mime,
    convert;

  if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker';
  else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image';
  else if (/video/.test(type.mime)) mtype = 'video';
  else if (/audio/.test(type.mime)) {
    convert = await (ptt ? toPTT : toAudio)(file, type.ext);
    file = convert.data;
    pathFile = convert.filename;
    mtype = 'audio';
    mimetype = 'audio/ogg; codecs=opus';
  } else mtype = 'document';

  if (options.asDocument) mtype = 'document';

  delete options.asSticker;
  delete options.asLocation;
  delete options.asVideo;
  delete options.asDocument;
  delete options.asImage;

  let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype };
  let m;

  try {
    m = await IconicTechInc.sendMessage(jid, message, { ...opt, ...options });
  } catch (e) {
    //console.error(e)
    m = null;
  } finally {
    if (!m) m = await IconicTechInc.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options });
    file = null;
    return m;
  }
}

    IconicTechInc.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }

        return buffer
    }
    }
return startIconicTechInc()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})
let watchFile = require.resolve(__filename);
fs.watchFile(watchFile, () => {
    fs.unwatchFile(watchFile);
    console.log(chalk.redBright(`Update ${__filename}`));
    delete require.cache[watchFile];
    require(watchFile);
});