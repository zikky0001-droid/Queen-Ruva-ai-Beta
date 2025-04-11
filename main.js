//Creaed By Danny
//wa.me/255697608274

require('./settings')
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const express = require('express');
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const axios = require('axios')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetch, await, sleep, reSize } = require('./lib/myfunc')
const { default: GlobalTechIncConnect, delay, makeCacheableSignalKeyStore, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto, Browsers} = require("@whiskeysockets/baileys")
const PHONENUMBER_MCC = require('./lib/PairingPatch');
const NodeCache = require("node-cache")
const Pino = require("pino")
const readline = require("readline")
const { parsePhoneNumber } = require("libphonenumber-js")
const makeWASocket = require("@whiskeysockets/baileys").default

const store = makeInMemoryStore({
    logger: pino().child({
        level: 'silent',
        stream: 'store'
    })
})

let phoneNumber = "255697608274"
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))

const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
         
async function startGlobalTechInc() {
//------------------------------------------------------
let { version, isLatest } = await fetchLatestBaileysVersion()
const {  state, saveCreds } =await useMultiFileAuthState(`./session`)
    const msgRetryCounterCache = new NodeCache() // for retry message, "waiting message"
    const GlobalTechInc = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: !pairingCode, // popping up QR in terminal log
      browser: Browsers.windows('Firefox'), // for this issues https://github.com/WhiskeySockets/Baileys/issues/328
     auth: {
         creds: state.creds,
         keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
      },
      markOnlineOnConnect: true, // set false for offline
      generateHighQualityLinkPreview: true, // make high preview link
      getMessage: async (key) => {
         let jid = jidNormalizedUser(key.remoteJid)
         let msg = await store.loadMessage(jid, key.id)

         return msg?.message || ""
      },
      msgRetryCounterCache, // Resolve waiting messages
      defaultQueryTimeoutMs: undefined, // for this issues https://github.com/WhiskeySockets/Baileys/issues/276
   })
   
   store.bind(GlobalTechInc.ev)

    // login use pairing code
   // source code https://github.com/WhiskeySockets/Baileys/blob/master/Example/example.ts#L61
   if (pairingCode && !GlobalTechInc.authState.creds.registered) {
      if (useMobile) throw new Error('Cannot use pairing code with mobile api')

      let phoneNumber
      if (!!phoneNumber) {
         phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

         if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
            console.log(chalk.bgBlack(chalk.redBright("Start with country code of your WhatsApp Number, Example : 263******")))
            process.exit(0)
         }
      } else {
         phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Please type your WhatsApp number 😍\nExample: 263****** : `)))
         phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

         // Ask again when entering the wrong number
         if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
            console.log(chalk.bgBlack(chalk.redBright("lol 😂 i was kidding😁 enter your number now\nJust to have fun budy😁 enter number here")))

            phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Please type your WhatsApp number 😍\nThis is real 😍\nExample: 263****** : `)))
            phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
            rl.close()
         }
      }      setTimeout(async () => {
         let code = await GlobalTechInc.requestPairingCode(phoneNumber)
         code = code?.match(/.{1,4}/g)?.join("-") || code
         console.log(chalk.black(chalk.bgGreen(`Your  Pairing Code : `)), chalk.black(chalk.white(code)))
      }, 3000)
   }


    GlobalTechInc.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
            const mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (mek.key && mek.key.remoteJid === 'status@broadcast' )
            if (!GlobalTechInc.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
            const m = smsg(GlobalTechInc, mek, store)
            require("./iconic-tech")(GlobalTechInc, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })
        
        // Continue processing other commands here...
    //welcome 
const welcomeHandler = require('./welcome/welcome.js');

GlobalTechInc.ev.on('group-participants.update', async (update) => {
    try {
        await welcomeHandler(GlobalTechInc, update, store);
    } catch (err) {
        console.error("Group event handling error:", err);
    }
});
//NEW
GlobalTechInc.ev.on("messages.upsert", async (chatUpdate) => {
    const mek = chatUpdate.messages[0];
    if (!mek.message || mek.key.fromMe) return;

    const text = mek.message.conversation || mek.message.extendedTextMessage?.text;
    const sender = mek.key.participant || mek.key.remoteJid; // Get sender's ID
    const chatId = mek.key.remoteJid; // Get chat ID

    if (text && text.includes("chat.whatsapp.com")) {
        try {
            // Delete the message
            await GlobalTechInc.sendMessage(chatId, { text: "*🚫 No Group Links Allowed! Message Deleted.*" });
            await GlobalTechInc.sendMessage(chatId, { delete: mek.key });

            // Kick the sender
            await GlobalTechInc.groupParticipantsUpdate(chatId, [sender], "remove");
        } catch (error) {
            console.error("Error handling group link:", error);
        }
    }
});
//new project 
//INBOX 
const userStatus = new Map(); // Store user chat status

GlobalTechInc.ev.on("messages.upsert", async (chatUpdate) => {
    const mek = chatUpdate.messages[0];
    if (!mek.message || mek.key.fromMe) return;

    const chatId = mek.key.remoteJid;
    const text = mek.message.conversation || mek.message.extendedTextMessage?.text;

    // Check if the message is from a private chat (not a group)
    if (!chatId.includes("@g.us")) {
        // Check if the user has already started the bot
        if (!userStatus.has(chatId)) {
            userStatus.set(chatId, true); // Mark the user as started
            await GlobalTechInc.sendMessage(chatId, { text: "*🤖 I'm not available at the moment. I'll get back to you soon!*" });
        } else {
            // Check chat history
            const chatHistory = await GlobalTechInc.loadMessages(chatId, 5); // Load last 5 messages
            if (chatHistory.length === 0) {
                await GlobalTechInc.sendMessage(chatId, { text: "*🤖 I'm not available at the moment. I'll get back to you soon!*" });
            }
        }
    }
});
//-----------_-_-_-ALL NEWS HERE_-_-_-_-_-_-_-_-_

//_-_-_-_-_-_-__-STOP-_-_-_-_-_-_&_&_&_&_&_&_&_&_&_
    /* ========== AUTOMATIC REACTIONS ========== */
GlobalTechInc.ev.on('messages.upsert', async chatUpdate => {
  if (!global.reactSettings.enabled) return;
  
  const mek = chatUpdate.messages[0];
  if (!mek.key || mek.key.fromMe) return;

  // Skip system messages
  const isSystemMsg = mek.message?.protocolMessage || mek.message?.reactionMessage;
  if (isSystemMsg) return;

  // Skip no-react zones
  if (global.reactSettings.noReactZones.includes(mek.key.remoteJid)) return;

  // Cooldown check (60 seconds per chat)
  const lastReact = global.reactSettings.cooldown.get(mek.key.remoteJid) || 0;
  if (Date.now() - lastReact < 60000) return;

  // Send random reaction
  const emoji = global.reactSettings.emojis[
    Math.floor(Math.random() * global.reactSettings.emojis.length)
  ];

  await GlobalTechInc.sendMessage(mek.key.remoteJid, {
    react: { text: emoji, key: mek.key }
  });

  global.reactSettings.cooldown.set(mek.key.remoteJid, Date.now());
});
    //autostatus view
        GlobalTechInc.ev.on('messages.upsert', async chatUpdate => {
        	if (global.autoswview){
            mek = chatUpdate.messages[0]
            if (mek.key && mek.key.remoteJid === 'status@broadcast') {
            	await GlobalTechInc.readMessages([mek.key]) }
            }
    })

   
    GlobalTechInc.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }

    GlobalTechInc.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = GlobalTechInc.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            }
        }
    })

    GlobalTechInc.getName = (jid, withoutContact = false) => {
        id = GlobalTechInc.decodeJid(jid)
        withoutContact = GlobalTechInc.withoutContact || withoutContact
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = GlobalTechInc.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
                id,
                name: 'WhatsApp'
            } : id === GlobalTechInc.decodeJid(GlobalTechInc.user.id) ?
            GlobalTechInc.user :
            (store.contacts[id] || {})
        return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    GlobalTechInc.public = true

    GlobalTechInc.serializeM = (m) => smsg(GlobalTechInc, m, store)

GlobalTechInc.ev.on("connection.update", async (s) => {
    const { connection, lastDisconnect } = s;
    if (connection == "open") {
        console.log(chalk.magenta(`\n`));
        console.log(chalk.yellow(`✅ Connected to WhatsApp as: ${GlobalTechInc.user.name || GlobalTechInc.user.id}`));

        // Custom Branding Message
        console.log(chalk.cyan(`\n╔════════════════════════════════════════╗`));
        console.log(chalk.cyan(`║          🚀 QUEEN RUVA AI BETA 🚀          ║`));
        console.log(chalk.cyan(`║       Powered by ICONIC-TECH (2024)     ║`));
        console.log(chalk.cyan(`║                                          ║`));
        console.log(chalk.cyan(`║ 📌 YouTube: youtube.com/@iconictechofficial`));
        console.log(chalk.cyan(`║ 📌 GitHub: github.com/iconic-tech        ║`));
        console.log(chalk.cyan(`║ 📌 WhatsApp: +263 78 352 5824           ║`));
        console.log(chalk.cyan(`╚════════════════════════════════════════╝\n`));

        // Send a message to your number when bot is active
        await GlobalTechInc.sendMessage("263781863626@s.whatsapp.net", { 
            text: "🌟 *QUEEN RUVA AI BETA is now ONLINE!*\n\n_Powered by ICONIC-TECH Official._" 
        });
    }

    if (connection === "close" && lastDisconnect?.error?.output?.statusCode !== 401) {
        startGlobalTechInc(); // Auto-reconnect
    }
});
    GlobalTechInc.ev.on('creds.update', saveCreds)
    GlobalTechInc.ev.on("messages.upsert",  () => { })

    GlobalTechInc.sendText = (jid, text, quoted = '', options) => GlobalTechInc.sendMessage(jid, {
        text: text,
        ...options
    }, {
        quoted,
        ...options
    })
    GlobalTechInc.sendTextWithMentions = async (jid, text, quoted, options = {}) => GlobalTechInc.sendMessage(jid, {
        text: text,
        mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
        ...options
    }, {
        quoted
    })
    GlobalTechInc.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await GlobalTechInc.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }
    GlobalTechInc.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await GlobalTechInc.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }
    GlobalTechInc.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
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
    
    GlobalTechInc.getFile = async (PATH, save) => {
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
    
    GlobalTechInc.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
  let type = await GlobalTechInc.getFile(path, true);
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
    m = await GlobalTechInc.sendMessage(jid, message, { ...opt, ...options });
  } catch (e) {
    //console.error(e)
    m = null;
  } finally {
    if (!m) m = await GlobalTechInc.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options });
    file = null;
    return m;
  }
}

    GlobalTechInc.downloadMediaMessage = async (message) => {
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
return startGlobalTechInc()

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
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_, res) => res.send('GlobalTechInc WhatsApp Bot is running.'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
let watchFile = require.resolve(__filename);
fs.watchFile(watchFile, () => {
    fs.unwatchFile(watchFile);
    console.log(chalk.redBright(`Update ${__filename}`));
    delete require.cache[watchFile];
    require(watchFile);
});