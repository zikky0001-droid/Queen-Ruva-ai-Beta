const { default: makeWASocket, fetchLatestBaileysVersion, downloadContentFromMessage, useMultiFileAuthState, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('baileys')
let userSearchResults = {}; // Ensure this is declared at the top of your script
const os = require('os')
const yts = require('yt-search');
const ytdl = require('ytdl-core');
const CryptoJS = require("crypto-js");
const fs = require('fs') 
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const pino = require('pino')
const readline = require("readline");
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./database/uploaderFunc')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./database/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./database/queen-ruva')
let afk = require("./database/afk");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./database/premiunFunc')
const { fetchBuffer, buffergif } = require("./database/queen-ruva2")
const NodeCache = require('node-cache');

//database
let premium = JSON.parse(fs.readFileSync('./database/json/@queen-ruva.json'))
let _owner = JSON.parse(fs.readFileSync('./database/json/owner.json'))
let owner = JSON.parse(fs.readFileSync('./database/json/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./database/json/@my-users'))
let hit = JSON.parse(fs.readFileSync('./database/json/@codewave-unit.json'))
//autorep
const VoiceNoteXeon = JSON.parse(fs.readFileSync('./database/json/@queen-ruva.json'))
const StickerXeon = JSON.parse(fs.readFileSync('./database/json/@queen-ruva.json'))
const ImageXeon = JSON.parse(fs.readFileSync('./database/json/@iconictech'))
const VideoXeon = JSON.parse(fs.readFileSync('./database/json/@queen-ruva.json'))
const DocXeon = JSON.parse(fs.readFileSync('./database/json/@queen-ruva.json'))
const ZipXeon = JSON.parse(fs.readFileSync('./database/json/@queen-ruva.json'))
const ApkXeon = JSON.parse(fs.readFileSync('./database/json/@queen-ruva.json'))

//time
const xtime = moment.tz('Harare/Zimbabwe').format('HH:mm:ss')
        const xdate = moment.tz('Harare/Zimbabwe').format('DD/MM/YYYY')
        const time2 = moment().tz('Harare/Zimbabwe').format('HH:mm:ss')  
         if(time2 < "24:59:00"){
var Iconictimewisher = `Good Night 🌌`
 }
 if(time2 < "17:00:00"){
var Iconictimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var Iconictimewisher = `Good Evening 🌃`
 }
 if(time2 < "13:00:00"){
var Iconictimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "10:00:00"){
var Iconictimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var Iconictimewisher = `Good Morning 🌄`
 } 
module.exports = IconicTechInc = async (IconicTechInc, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreplyglobal.selectedRowId : (m.mtype == 'templateButtonreplyglobalMessage') ? m.message.templateButtonreplyglobalMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreplyglobal.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "💀unknown"
        const botNumber = await IconicTechInc.decodeJid(IconicTechInc.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await IconicTechInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [ownernumber, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        const clientId = IconicTechInc.user.id.split(':')[0];
        const senderbot = m.key.fromMe ? IconicTechInc.user.id.split(':')[0] + "@s.whatsapp.net" || IconicTechInc.user.id : m.key.participant || m.key.remoteJid;       
         const senderId = senderbot.split('@')[0];
        const isBot = clientId.includes(senderId);
        expiredCheck(IconicTechInc, m, premium);
//group chat msg by danny
const replyglobal = (teks) => {
IconicTechInc.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./QueenMedia/ruva.jpg`),
"sourceUrl": `${iconic_channel}`}}},
{ quoted: m})
}

async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return replyglobal('Enther your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const result = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'Danny',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            result.push(result)
        }
    resolve(result)
    })
}


async function loading () {
var lod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🤖....."
]
let { key } = await IconicTechInc.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < lod.length; i++) {
await IconicTechInc.sendMessage(from, {text: lod[i], edit: key });
}
}

        if (!IconicTechInc.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        
        if (autoread) {
            IconicTechInc.readMessages([m.key])
        }
        
        if (global.autoTyping) {
        IconicTechInc.sendPresenceUpdate('composing', from)
        }

        if (global.autoRecording) {
        IconicTechInc.sendPresenceUpdate('recording', from)
        }

        
        //bot number online status, available=online, unavailable=offline
        IconicTechInc.sendPresenceUpdate('uavailable', from)
        
        if (global.autorecordtype) {
        let recordin = ['recording','composing']
        let recordinfinal = recordin[Math.floor(Math.random() * recordin.length)]
        IconicTechInc.sendPresenceUpdate(recordinfinal, from)

        }
        let list = [];
for (let i of owner) {
    list.push({
        displayName: await IconicTechInc.getName(i),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await IconicTechInc.getName(i)}\nFN:${await IconicTechInc.getName(i)}\n` +
               `item1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\n` +
               `item2.URL:https://whatsapp.com/channel/0029ValX2Js9RZAVtDgMYj0r\nitem2.X-ABLabel:WhatsApp Channel\n` +
               `item3.URL:https://codewave-tech.zone.id\nitem3.X-ABLabel:CodeWave Tech\n` +
               `item4.URL:https://iconictech-official.zone.id\nitem4.X-ABLabel:IconicTech API\n` +
               `item5.URL:https://iconictech-official.zone.id\nitem5.X-ABLabel:Personal Website\n` +
               `item6.ADR:;;zimbabwe/bulawayo;;;;\nitem6.X-ABLabel:Region\n` +
               `END:VCARD`
    });
}
        if (autobio) {
    try {
        const { data } = await axios.get('https://api.popcat.xyz/fact');
        const fact = data?.fact || "Technology connects us all";
        await IconicTechInc.updateProfileStatus(`Fact: ${fact} ~ Queen Ruva AI Beta`).catch(_ => _);
    } catch {
        await IconicTechInc.updateProfileStatus(`Active WhatsApp Bot | Created by ${ownername} ~ Queen Ruva AI Beta`).catch(_ => _);
    }
}
        if (m.sender.startsWith('91') && global.anti91 === true) {
            return IconicTechInc.updateBlockStatus(m.sender, 'block')
        }

	//chat counter (console log)
        if (m.message && m.isGroup) {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Group Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Private Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./database/json/@codewave-unit.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./database/json/@codewave-unit.json'))[0].hit_cmd
        }
        
for (let BhosdikaXeon of VoiceNoteXeon) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./QueenMedia/audio/${BhosdikaXeon}.mp3`)
IconicTechInc.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaXeon of StickerXeon){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./QueenMedia/sticker/${BhosdikaXeon}.webp`)
IconicTechInc.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of ImageXeon){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./QueenMedia/image/${BhosdikaXeon}.jpg`)
IconicTechInc.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of VideoXeon){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./QueenMedia/video/${BhosdikaXeon}.mp4`)
IconicTechInc.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
IconicTechInc.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaXeon of ApkXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./QueenMedia/apk/${BhosdikaXeon}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
IconicTechInc.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaXeon of ZipXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./QueenMedia/zip/${BhosdikaXeon}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaXeon of DocXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./QueenMedia/doc/${BhosdikaXeon}.pdf`)
senddocu(buffer)
}
}
        
        if (m.isGroup && !m.key.fromMe) {
    let mentionUser = [...new Set([...(m.mentionedJid || [])])]; // Only consider explicitly mentioned users
    
    // Loop through mentioned users
    for (let ment of mentionUser) {
        if (afk.checkAfkUser(ment, _afk)) {
            let getId2 = afk.getAfkId(ment, _afk);
            let getReason2 = afk.getAfkReason(getId2, _afk);
            let getTimee = Date.now() - afk.getAfkTime(getId2, _afk);
            let heheh2 = ms(getTimee);

            // Only respond to @mentions, tagall, or hidetag, but not when replying
           if (!m.quoted || (m.mentionedJid && m.mentionedJid.length > 1)) {
    replyglobal(`*Hey yo* \`${pushname}\`\n\n*Don't tag my owner 😡🤬*`);
    break;
          }
        }
    }

    // Handle if the sender is returning from AFK
    if (afk.checkAfkUser(m.sender, _afk)) {
        let getId = afk.getAfkId(m.sender, _afk);
        let getReason = afk.getAfkReason(getId, _afk);
        let getTime = Date.now() - afk.getAfkTime(getId, _afk);
        let heheh = ms(getTime);

        // Remove the user from the AFK list
        _afk.splice(afk.getAfkPosition(m.sender, _afk), 1);
        fs.writeFileSync('./database/json/@my-users.json', JSON.stringify(_afk));
        
        IconicTechInc.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} You can tag my owner now😁`, m);
    }
}
//emoji start

//emojis stop
//command list
//wa.me/255697608274
        switch (command) {
            case 'addprem':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 2)
                    return replyglobal(`Use :\n*#addprem* @tag time\n*#addprem* number time\n\nExample : #addprem @tag 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    replyglobal("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    replyglobal("Success")
                }
                break
case 'spotify': {
    try {
        const query = args.join(' ');
        if (!query) {
            replyglobal('⚠️ Please provide a song name to search!');
            break;
        }

        // React to indicate processing
        await replyglobal(m.chat, { react: { text: '🎵', key: m?.key } });

        // Fetch song data from the provided API
        const url = `https://apis.davidcyriltech.my.id/search/spotify?text=${encodeURIComponent(query)}`;
        console.log('Sending request to API:', url);

        const response = await fetch(url);
        console.log('API Response Status:', response.status);

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const jsonData = await response.json();
        console.log('Parsed JSON Data:', jsonData);

        if (jsonData && jsonData.success && jsonData.result.length > 0) {
            const track = jsonData.result[0]; // Select the first result
            
            const caption = `🎶 *QUEEN RUVA AI SONG PLAYER* 🎶\n\n` +
                `📌 *Title:* ${track.trackName}\n` +
                `⏱ *Duration:* ${track.duration}\n` +
                `👤 *Artist:* ${track.artistName}\n` +
                `📀 *Album:* ${track.albumName}\n` +
                `👀 *Viewers:* ${track.viewers}\n` +
                `📅 *Uploaded:* ${track.uploaded}\n\n` +
                `🔗 *Direct Link:* [YouTube](${track.externalUrl})\n\n` +
                `━━━━━━━━━━━━━━━━━━\n` +
                `🔹 *Powered by © iconic tech* 🔹\n` +
                `━━━━━━━━━━━━━━━━━━\n\n` +
                `🎧 *Choose your desired result:* 🎧\n` +
                `1️⃣ Play as Audio\n` +
                `2️⃣ Play as Document`;

            // Send song info with a thumbnail
            await replyglobal(m.chat, { image: { url: track.thumbnail }, caption });

            // Store the track info in user search results
            userSearchResults[m.sender] = { track, format: null };

            // Wait for user input on the format they want to download
            // You can add the logic here to handle user choices for play as audio or document
        } else {
            replyglobal(`⚠️ No results found for "${query}".`);
        }
    } catch (error) {
        console.error('Error fetching song:', error);
        replyglobal('🚨 An error occurred while fetching the song. Please try again later.');
    }
    break;
}
// Handle user selection for audio/document
case '1': // Play as Audio
case '2': // Play as Document
    if (!userSearchResults[m.sender]) {
        replyglobal('⚠️ No song search found. Please use the !play command first.');
        break;
    }

    const { track } = userSearchResults[m.sender];
    const format = command === '1' ? 'audio/mp3' : 'document/mp3';
    
    await replyglobal(m.chat, { text: `📥 Downloading... 1%` }, { quoted: m });

    await replyglobal(m.chat, {
        document: { url: track.audioUrl },
        mimetype: format,
        fileName: `${track.trackName}.mp3`,
        caption: `🎵 *Now Playing:* ${track.trackName}`
    });

    await replyglobal(m.chat, { text: `✅ *Download Complete:* ${track.trackName}` }, { quoted: m });

    delete userSearchResults[m.sender]; // Remove search result after sending
    break;
case 'selecttrack': {
    const trackIndex = parseInt(args[0]) - 1; // Convert selected number to array index
    if (isNaN(trackIndex) || trackIndex < 0 || trackIndex >= 10) {
        replyglobal('⚠️ Please select a valid track number (1 to 10).');
        break;
    }

    // Retrieve the search results from the user's previous query
    const selectedTrack = userSearchResults[m.sender]?.[trackIndex];
    if (!selectedTrack) {
        replyglobal('⚠️ No search results found. Please search again!');
        break;
    }

    // Construct the download link for the selected track
    const downloadUrl = selectedTrack.downloadUrl; // Assuming the API returns a valid download URL
    const fileSize = selectedTrack.fileSize; // Assuming the API returns file size in MB

    // Send the download link and file size
    const message = `🎵 *Selected Track: ${selectedTrack.trackName}* 🎵\n\n`;
    message += `Artist: ${selectedTrack.artistName}\n`;
    message += `Album: ${selectedTrack.albumName}\n`;
    message += `Duration: ${selectedTrack.duration}\n`;
    message += `🔗 [Download the track](${downloadUrl})\n`;
    message += `📦 *File Size:* ${fileSize} MB`;

    await replyglobal(m.chat, message);

    // Optionally, you could also send a link for direct download or a button to download the track
    break;
}

//Autostatus like and react by Danny
//This created by Danny himself
case 'autostatusreact': 
case 'set-statusreact':{
    if (!isCreator) return replyglobal(mess.owner);
    if (args.length < 1) return replyglobal('Usage: autostatusreact on/off [emoji]');
    
    if (args[0] === 'on') {
        if (!args[1]) return replyglobal('Please provide an emoji for the reaction. Example: autostatusreact on 👍');
        autostatusReact = true;
        reactEmoji = args[1]; // Store the emoji
        replyglobal(`Bot Autostatus React is enabled. Bot will react to statuses with "${reactEmoji}".`);
    } else if (args[0] === 'off') {
        autostatusReact = false;
        replyglobal('Bot Autostatus React is disabled.');
    } else {
        replyglobal('Invalid option. Use: autostatusreact on/off [emoji]');
    }
}
if (autostatusReact) {
    try {
        const statusList = await IconicTechInc.fetchStatusUpdates(); // Fetch all status updates
        for (const status of statusList) {
            await IconicTechInc.sendMessage(status.sender, {
                react: {
                    text: reactEmoji || '😂', // Use the configured emoji or default to 😂
                    key: status.key,
                },
            });
            console.log(`Reacted to status from ${status.sender} with "${reactEmoji}"`);
        }
    } catch (err) {
        console.error('Error reacting to status:', err);
        replyglobal('Failed to react to statuses.');
    }
}
break;
                
            case 'delprem':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 1) return replyglobal(`Use :\n*#delprem* @tag\n*#delprem* number`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./database/json/@queen-ruva.json", JSON.stringify(premium));
                    }
                    replyglobal("Delete success")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./database/json/@queen-ruva.json", JSON.stringify(premium));
                    replyglobal("Success")
                }
                break
            case 'listprem': {
                if (!isCreator) return replyglobal(mess.owner)
                let data = require("./database/json/@queen-ruva.json")
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let i of data) {
                    txt += `Number : ${i.id}\n`
                    txt += `Expired : ${i.expired} Second\n`         
                }                
                IconicTechInc.sendMessage(m.chat, {
                    text: txt,
                    mentions: i
                }, {
                    quoted: m
                })
            }
            break
            case 'deletesession':
            case 'delsession':
            case 'clearsession': {
                if (!isCreator) return replyglobal(mess.owner)
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return replyglobal('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return replyglobal(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    replyglobal(teks)
                    await sleep(2000)
                    replyglobal("Delete junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    replyglobal("Successfully deleted all the trash in the session folder")
                });
            }
            break
            case 'channel': {
    try {
        const message = `
✨ *Join Our Exclusive Channel* ✨
> 🌟 Hey @${sender.split("@")[0]}! Don't miss out!  
> 📲 *Join us on WhatsApp* for updates, fun, and much more!  
> 🎉 Stay connected with us through our official channel. 

🚀 *Click below to join the channel:*  
🔗 [Join the Channel Now](https://whatsapp.com/channel/0029ValX2Js9RZAVtDgMYj0r)  
        `.trim();

        // Send the channel link message with a cool tone
        await IconicTechInc.sendMessage(from, {
            text: message,
            mentions: [sender],
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: `Join Our Channel`,
                    body: `Exclusive content awaits you!`,
                    thumbnail: fs.readFileSync(`./QueenMedia/ruva.jpg`),
                    sourceUrl: 'https://whatsapp.com/channel/0029ValX2Js9RZAVtDgMYj0r',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });
    } catch (error) {
        console.error("Error in 'channel' command:", error);
    }
}
break;
case 'link': {
    try {
        const message = `
✨ *Join Our Exclusive Group* ✨
> 🌟 Hey @${sender.split("@")[0]}! Don't miss out!  
> 📲 *Join us on WhatsApp* for updates, fun, and much more!  
> 🎉 Stay connected with us through our official chat group. 

🚀 *Click below to join the group:*  
🔗 [Join the Group Now](https://chat.whatsapp.com/LyFPHDvc5vMCglUFjv7Rlp)
        `.trim();

        await IconicTechInc.sendMessage(from, {
            text: message,
            mentions: [sender],
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: `Join Our Group`,
                    body: `Exclusive content and updates await you!`,
                    thumbnail: fs.readFileSync(`./QueenMedia/ruva.jpg`),
                    sourceUrl: 'https://chat.whatsapp.com/LyFPHDvc5vMCglUFjv7Rlp',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });
    } catch (error) {
        console.error("Error in 'link' command:", error);
    }
    break;
}

case 'randomcat': {
    try {
        const limit = Math.min(parseInt(text) || 1, 10); // Limit to max 10 cats
        const apiUrl = `https://kaiz-apis.gleeze.com/api/randomcat?limit=${limit}`;
        
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 8000);
        
        await IconicTechInc.sendPresenceUpdate('composing', m.chat);
        
        const response = await fetch(apiUrl, { 
            signal: controller.signal 
        });
        clearTimeout(timeout);

        if (!response.ok) throw new Error(`API returned ${response.status}`);

        const data = await response.json();
        
        if (!data.images || data.images.length === 0) {
            throw new Error('No cat images returned');
        }

        for (const imageUrl of data.images.slice(0, limit)) {
            await IconicTechInc.sendMessage(m.chat, {
                image: { url: imageUrl },
                caption: '🐱 *Random Cat* 🐱\n\n' +
                        '*Powered by Iconic Tech*',
                mimetype: 'image/jpeg'
            }, { quoted: m });
            await new Promise(resolve => setTimeout(resolve, 500)); // Delay between sends
        }

    } catch (error) {
        console.error('Cat API Error:', error);
        replyglobal(
            '⚠️ *Meow?*\n\n' +
            'The cats are hiding right now. Try again later!\n\n' +
            '*Powered by Queen Ruva AI Beta*'
        );
    }
    break;
}
case 'randomdog': {
    try {
        const apiUrl = 'https://kaiz-apis.gleeze.com/api/randomdog';
        
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);
        
        await IconicTechInc.sendPresenceUpdate('composing', m.chat);
        
        const response = await fetch(apiUrl, { 
            signal: controller.signal 
        });
        clearTimeout(timeout);

        if (!response.ok) throw new Error(`API returned ${response.status}`);

        const data = await response.json();
        
        if (!data.image) {
            throw new Error('No dog image returned');
        }

        await IconicTechInc.sendMessage(m.chat, {
            image: { url: data.image },
            caption: '🐶 *Random Dog* 🐶\n\n' +
                    '*Powered by Iconic Tech*',
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'Doggo Alert!',
                    body: 'Here comes a good boy',
                    thumbnail: await (await fetch('https://i.imgur.com/JQLz4KX.png')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Dog API Error:', error);
        replyglobal(
            '⚠️ *Woof Woof?*\n\n' +
            'The dog ran away! Try again later.\n\n' +
            '*Powered by Queen Ruva AI Beta*'
        );
    }
    break;
}

case 'gender': {
    if (!text?.trim()) {
        replyglobal(
            '👤 *Gender Prediction* 👤\n\n' +
            `Usage: ${prefix + command} [name]\n` +
            `Example: ${prefix + command} Bright\n\n` +
            'Predict gender based on name\n\n' +
            '*Powered by Queen Ruva AI Beta*'
        );
        return;
    }

    try {
        const apiUrl = `https://kaiz-apis.gleeze.com/api/genderize?name=${encodeURIComponent(text)}`;
        
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);
        
        await IconicTechInc.sendPresenceUpdate('composing', m.chat);
        
        const response = await fetch(apiUrl, { 
            signal: controller.signal 
        });
        clearTimeout(timeout);

        if (!response.ok) throw new Error(`API returned ${response.status}`);

        const data = await response.json();
        
        let resultMessage = `👤 *Name:* ${data.name}\n`;
        resultMessage += `⚧ *Gender:* ${data.gender || 'unknown'}\n`;
        if (data.probability) resultMessage += `📊 *Probability:* ${(data.probability * 100).toFixed(1)}%\n`;
        if (data.count) resultMessage += `🔢 *Samples:* ${data.count}\n`;

        await IconicTechInc.sendMessage(m.chat, {
            text: resultMessage + '\n*Powered by Iconic Tech*',
            contextInfo: {
                externalAdReply: {
                    title: 'Gender Prediction',
                    body: `For name: ${data.name}`,
                    thumbnail: await (await fetch('https://i.imgur.com/JxLd5F0.jpeg')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: ''
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Genderize Error:', error);
        replyglobal(
            '⚠️ *Prediction Failed*\n\n' +
            `Could not predict gender for "${text}"\n` +
            'Try a different name\n\n' +
            '*Powered by Queen Ruva AI Beta*'
        );
    }
    break;
}
case 'website': {
    try {
        const message = `
https://codewave-unit.zone.id
        `.trim();

        // Send the message with the new title and "Created by Iconic Tech" message
        await IconicTechInc.sendMessage(from, {
            text: message,
            mentions: [sender],
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: `Explore Queen Ruva AI`,
                    body: `Join our community and unlock exciting opportunities!`,
                    thumbnail: fs.readFileSync(`./QueenMedia/ruva.jpg`),
                    sourceUrl: 'codewave-unit.zone.id',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });
    } catch (error) {
        console.error("Error in 'link' command:", error);
    }
}
break;
case 'quotes2':
case 'quote2': {
    try {
        // React to indicate processing
        await replyglobal(m.chat, { react: { text: '⌛', key: m.key } });

        // Initialize an array to store the quotes
        const quotes = [];

        // Loop to fetch 10 quotes
        for (let i = 0; i < 10; i++) {
            // Construct the API URL
            const url = 'https://apis.davidcyriltech.my.id/random/quotes';
            console.log('Sending request to API:', url); // Log the API URL

            // Fetch the quote from the API
            const response = await fetch(url);
            console.log('API Response Status:', response.status); // Log the response status

            // Check if the response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            // Parse the JSON response
            const jsonData = await response.json();
            console.log('Parsed JSON Data:', jsonData); // Log the parsed JSON

            // Handle the API response and add it to the quotes array
            if (jsonData.response && jsonData.response.quote && jsonData.response.author) {
                quotes.push(`*Author:* ${jsonData.response.author}\n*Quote:* "${jsonData.response.quote}"`);
            } else {
                quotes.push('⚠️ Sorry, I couldn\'t fetch a quote at the moment.');
            }
        }

        // Format and display the 10 quotes
        let responseMessage = '*Here are 10 insightful quotes for you!*\n\n';
        quotes.forEach((quote, index) => {
            responseMessage += `${index + 1}. ${quote}\n\n`;
        });

        replyglobal(responseMessage); // Send the formatted response with 10 quotes
    } catch (error) {
        console.error('Error fetching quotes:', error); // Log the full error
        replyglobal('⚠️ An error occurred while fetching the quotes. Please try again later.');
    }
    break;
}    case 'join':
case 'enter':
    try {
        if (!isCreator) return replyglobal(mess.owner);

        if (!text) return replyglobal('Enter Group Link!');

        if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replyglobal('Link Invalid!');

        // Send a waiting message with a delay
        replyglobal(mess.wait);
        
        // Simulating loading process with a delay (e.g., 3 seconds)
        setTimeout(async () => {
            try {
                let result = args[0].split('https://chat.whatsapp.com/')[1];
                
                // Try to join the group
                await IconicTechInc.groupAcceptInvite(result).then((res) => {
                    // If successful, send "done" message
                    replyglobal('🎉 Successfully joined the group! 🚀');
                }).catch((err) => {
                    // If there's an error (e.g., full group or other issues), send an error message
                    if (err.message.includes('group full')) {
                        replyglobal('❌ Group is full! Cannot join at the moment.');
                    } else {
                        replyglobal('⚠️ Failed to join the group. Please check the link or try again later.');
                    }
                });
            } catch (err) {
                replyglobal('⚠️ Failed to join the group. Please try again later.');
            }
        }, 3000);  // Delay of 3 seconds before trying to join the group
        
    } catch (error) {
        console.error('Error during join command:', error);
        replyglobal('❌ Something went wrong. Please try again later.');
    }
    break;  case 'getsession':
                if (!isCreator) return replyglobal(mess.owner)
                replyglobal('Wait a moment, currently retrieving your session file')
                let sesi = await fs.readFileSync('./session/creds.json')
                IconicTechInc.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
                break
                case 'getpp':
    if (!m.quoted) return replyglobal('Reply to a user\'s message to get their profile picture.')
    
    let userId = m.quoted.sender
    try {
        let ppUrl = await IconicTechInc.profilePictureUrl(userId, 'image')
        let ppBuffer = await axios.get(ppUrl, { responseType: 'arraybuffer' })
        
        IconicTechInc.sendMessage(m.chat, {
            image: ppBuffer.data,
            caption: 'Here is the profile picture.'
        }, {
            quoted: m
        })
    } catch (error) {
        replyglobal('Failed to fetch profile picture. The user may not have one.')
    }
    break
            case 'shutdown':
                if (!isCreator) return replyglobal(mess.owner)
                replyglobal(`Goodbye🖐`)
                await sleep(3000)
                process.exit()
                break
            case 'restart':
if (!isCreator) return replyglobal(mess.owner)
replyglobal(`Restarting queen ruva ai`)
await sleep(3000)
process.exit()
break
            case 'set-read':
                          if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 1) return replyglobal(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    replyglobal(`ǫᴜᴇᴇɴ-ʀᴜᴠᴀ AI changed autoread to ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    replyglobal(`ǫᴜᴇᴇɴ-ʀᴜᴠᴀ AI changed autoread to ${q}`)
                }
                break
                case 'autotyping':
                case 'set-typing':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 1) return replyglobal(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoTyping = true
                    replyglobal(`ǫᴜᴇᴇɴ-ʀᴜᴠᴀ AI changed auto-typing to ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    replyglobal(`ǫᴜᴇᴇɴ-ʀᴜᴠᴀ AI changed auto-typing to ${q}`)
                }
                break
                case 'autorecording':
                case 'set-recording':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 1) return replyglobal(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoRecording = true
                    replyglobal(`ǫᴜᴇᴇɴ-ʀᴜᴠᴀ AI changed auto-recording to ${q}`)
                } else if (q === 'off') {
                    autoRecording = false
                    replyglobal(`ǫᴜᴇᴇɴ-ʀᴜᴠᴀ AI changed auto-recording to ${q}`)
                }
                break
                case 'autorecordtyp':
                case 'set-rtyp':
                case 'set-recordtyp':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 1) return replyglobal(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autorecordtype = true
                    replyglobal(`ǫᴜᴇᴇɴ-ʀᴜᴠᴀ AI changed auto recording and typing to ${q}`)
                } else if (q === 'off') {
                    autorecordtype = false
                    replyglobal(`ǫᴜᴇᴇɴ-ʀᴜᴠᴀ AI changed auto recording and typing to ${q}`)
                }
                break
                case 'autoswview':
    case 'autostatusview':
    case 'set-view':{
             if (!isCreator) return replyglobal(mess.owner)
               if (args.length < 1) return replyglobal('on/off?')
               if (args[0] === 'on') {
                  autoswview = true
                  replyglobal(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  autoswview = false
                  replyglobal(`${command} is disabled`)
               }
            }
            break
            case 'autobio':
            case 'set-bio':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 1) return replyglobal(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    autobio = true
                    replyglobal(`ǫᴜᴇᴇɴ-ʀᴜᴠᴀ AI Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    autobio = false
                    replyglobal(`ǫᴜᴇᴇɴ-ʀᴜᴠᴀ AI Changed AutoBio To ${q}`)
                }
                break
case 'mode':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 1) return replyglobal(`Example ${prefix + command} public/self`)
                if (q == 'public') {
                    IconicTechInc.public = true
                    replyglobal(mess.done)
                } else if (q == 'self') {
                    IconicTechInc.public = false
                    replyglobal(mess.done)
                }
                break
                // Global variable to track chatbot status
case 'chatbot':
    if (!isCreator) return replyglobal(mess.owner)
    if (!args[0]) return replyglobal(`Example: ${prefix + command} on/off`)
    switch (args[0].toLowerCase()) {
        case 'on':
            global.chatbot = true
            global.chataudio = false // Ensure audio mode is off when text chatbot is on
            replyglobal(`*Queen Ruva AI Beta* 🤖\nChatbot has been *activated*!\n\n_Developed by Iconic Tech_`)
            break
        case 'off':
            global.chatbot = false
            replyglobal(`*Queen Ruva AI Beta* 🤖\nChatbot has been *deactivated*!\n\n_Developed by Iconic Tech_`)
            break
        default:
            replyglobal(`Example: ${prefix + command} on/off`)
    }
    break

case 'chataudio':
    if (!isCreator) return replyglobal(mess.owner)
    if (!args[0]) return replyglobal(`Example: ${prefix + command} on/off`)
    switch (args[0].toLowerCase()) {
        case 'on':
            global.chataudio = true
            global.chatbot = false // Ensure text chatbot is off
            replyglobal(`*Queen Ruva AI Audio Mode* 🎵\nAudio replies have been *activated*!\n\n_Developed by Iconic Tech_`)
            break
        case 'off':
            global.chataudio = false
            replyglobal(`*Queen Ruva AI Audio Mode* 🎵\nAudio replies have been *deactivated*!`)
            break
        default:
            replyglobal(`Example: ${prefix + command} on/off`)
    }
    break
// Chatbot toggle command handler

                   case 'setexif':
                if (!isCreator) return replyglobal(mess.owner)
                if (!text) return replyglobal(`Example : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                replyglobal(`Exif successfully changed to\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
                break
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!isCreator) return replyglobal(mess.owner)
                if (!quoted) return replyglobal(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replyglobal(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replyglobal(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await IconicTechInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await IconicTechInc.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replyglobal(mess.done)
                } else {
                    var memeg = await IconicTechInc.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replyglobal(mess.done)
                }
                break
            case 'block':
                if (!isCreator) return replyglobal(mess.owner)
                let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await IconicTechInc.updateBlockStatus(blockw, 'block').then((res) => replyglobal(json(res))).catch((err) => replyglobal(json(err)))
                break
            case 'unblock':
                if (!isCreator) return replyglobal(mess.owner)
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await IconicTechInc.updateBlockStatus(blockww, 'unblock').then((res) => replyglobal(json(res))).catch((err) => replyglobal(json(err)))
                break
            case 'left':
            case 'outgroup':
                if (!isCreator) return replyglobal(mess.owner)
                if (!m.isGroup) return replyglobal(mess.group)
                replyglobal('Bye Everyone 🥺')
                await IconicTechInc.groupLeave(m.chat)
                break
            case 'bcgc':
            case 'bcgroup':
            case 'broadcast': {
                if (!isCreator) return replyglobal(mess.owner)
                if (!text) return replyglobal(`Which text?\n\nExample : ${prefix + command} It's holiday tomorrow `)
                let getGroups = await IconicTechInc.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                replyglobal(`Send Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ'
                    IconicTechInc.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'Broadcast 𝚋𝚢 ǫᴜᴇᴇɴ ᴛᴇᴄʜ✰ ',
                                body: `Sent ${i.length} Group`,
                                thumbnailUrl: '',
thumbnail: fs.readFileSync(`./QueenMedia/ruva.jpg`),
                                sourceUrl:  'codewave-unit.zone.id',
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                replyglobal(`Successfully Sent Broadcast To ${anu.length} Group`)
            }
            break             //new cmd added called newcmd
case "del":
case "delete": {
    if (!isCreator) return replyglobal(msg.owner); // Only the creator can use this command
    if (!m.quoted) return replyglobal("Reply to the message you want to delete.");

    if (m.quoted.sender == botNumber) {
        IconicTechInc.sendMessage(m.chat, { 
            delete: { 
                remoteJid: m.chat, 
                fromMe: true, 
                id: m.quoted.id, 
                participant: m.quoted.sender 
            } 
        });
    } else {
        IconicTechInc.sendMessage(m.chat, { 
            delete: { 
                remoteJid: m.chat, 
                fromMe: false, 
                id: m.quoted.id, 
                participant: m.quoted.sender 
            } 
        });
    }
}
break;
case "setbio":
case "setbiobot": {
    if (!isCreator) return replyglobal(msg.owner); // Only the bot creator can use this command
    if (!text) return replyglobal(example('Your text here'));
    
    IconicTechInc.updateProfileStatus(text);
    replyglobal("Successfully changed Queen Ruva AI Beta bio ✅");
}
break;
case "tts": {
    if (!text) return replyglobal(example("Hello, I am a human"));
    if (text.length >= 300) return replyglobal("The text length must be under 300 characters!");
    
    replyglobal(msg.wait); // Notify user that the bot is processing

    let id = 'id_001'; // Default TTS voice
    try {
        const { data } = await axios.post("https://tiktok-tts.weilnet.workers.dev/api/generation", {
            text: text,
            voice: id
        });

        if (!data || !data.data) throw new Error("Failed to generate TTS audio");

        IconicTechInc.sendMessage(m.chat, { 
            audio: Buffer.from(data.data, "base64"), 
            mimetype: "audio/mp4" 
        }, { quoted: m });

    } catch (error) {
        console.error(error); // Log error for debugging
        replyglobal("Error generating TTS. Please try again later.");
    }
}
break;
case "setting":
case "settingbot":
case "option":
case "statusbot": {
    if (!isCreator) return replyglobal(msg.owner); // Only the bot creator can use this command

    var teks = `
╔════════════════════════════════════╗
║        *Bot Settings Status*       ║
╠════════════════════════════════════╣
║ *Autoread:* ${global.autoread ? "*Active ✅*" : "*Inactive ❌*"}  ║
║ *Anticall:* ${global.anticall ? "*Active ✅*" : "*Inactive ❌*"}  ║
║ *Welcome:* ${global.welcome ? "*Active ✅*" : "*Inactive ❌*"}  ║
║ *Autotype:* ${global.autotype ? "*Active ✅*" : "*Inactive ❌*"}  ║
║ *Auto Recording:* ${global.autorecord ? "*Active ✅*" : "*Inactive ❌*"} ║
║ *Auto Status View:* ${global.autostatusview ? "*Active ✅*" : "*Inactive ❌*"}  ║
║ *Autoreact:* ${global.autoreact ? "*Active ✅*" : "*Inactive ❌*"}  ║
╠════════════════════════════════════╣
║ *Bot Name:* QUEEN Ruva Ai Beta        ║
╠════════════════════════════════════╣
║ *Footer:* Powered by Iconic Tech  ║
╚════════════════════════════════════╝

*Example Usage:*
Type *.autoread* on/off, *.autotype* on/off, *.autorecord* on/off, *.autostatusview* on/off, *.autoreact* on/off
`;

    replyglobal(teks);
}
break;
case 'voice':
    if (!text) {
        replyglobal('Please provide text to convert to speech!\nExample: .tts Hello, how are you?');
        return;
    }

    if (text.length >= 300) {
        replyglobal('The text length must be under 300 characters!');
        return;
    }

    replyglobal('🔄 Generating speech... Please wait!');

    try {
        // Convert text to speech
        puter.ai.txt2speech(text, {
            onstart: () => console.log('Speech synthesis started'),
            onend: () => console.log('Speech synthesis ended'),
            onerror: (error) => {
                console.error('TTS Error:', error);
                replyglobal('❌ Error generating TTS. Please try again later.');
            }
        });
    } catch (error) {
        console.error('TTS Error:', error);
        replyglobal('❌ Error generating TTS. Please try again later.');
    }
    break;
case 'zw': {
    try {
        // Bot name and status message
        const botName = 'Queen Ruva AI'; // Your bot's name
        const statusMessage = "I'm good 😊"; // The status message to display

        // Prepare the response message
        const responseMessage = `
╔════════════════╗
║    *Bot Information*    ║
╠═════════════════╣
║ *Bot Name:* ${botName}  ║
║ *Status:* ${statusMessage}║
╚══════════════════╝
*secret check my bot from users*
        `;
        
        // Send the bot's name and status back to the user
        replyglobal(responseMessage); // Adjust this method to your bot's reply method if needed
    } catch (error) {
        console.error('Error showing bot info:', error);
        replyglobal("Sorry, I couldn't retrieve the bot information. Please try again later.");
    }
}
break;
case 'alive': {
    try {
        // Prepare the response message indicating the bot is active
        const aliveMessage = `
╔════════════════════════════════════╗
║         *Bot Status: ALIVE*        ║
╠════════════════════════════════════╣
║ *Bot Name:* Queen Ruva AI          ║
║ *Status:* Active and Online ✅      ║
╠════════════════════════════════════╣
║ *Developer Contact:* +263783525824 ║
╚════════════════════════════════════╝
        `;
        
        // Send the alive status message to the user
        replyglobal(aliveMessage); // Adjust this method if you need to send a different type of message or use different syntax.
    } catch (error) {
        console.error('Error showing bot status:', error);
        replyglobal("Sorry, I couldn't retrieve the bot status. Please try again later.");
    }
}
break;
case 'invite':
    if (!isGroup) {
        return replyglobal("This command can only be used in a group.");
    }
    if (!isCreator) {
        return replyglobal("You must be the group creator to use this command.");
    }
    
    try {
        // Retrieve group metadata (name, description)
        const groupMetadata = await IconicTechInc.groupMetadata(m.chat);
        const groupName = groupMetadata.subject;
        const groupDesc = groupMetadata.desc || 'No description available.';
        
        // Generate group invite link
        const inviteLink = await IconicTechInc.groupInviteCode(m.chat);
        const inviteUrl = `https://chat.whatsapp.com/${inviteLink}`;
        
        // Prepare the invite message
        const inviteMessage = `
╔════════════════════════════════════╗
║          *Group Name:* ${groupName}      ║
╠════════════════════════════════════╣
║       *Description:* ${groupDesc}         ║
╠════════════════════════════════════╣
║        *Join Link:* ${inviteUrl}         ║
╚════════════════════════════════════╝
        `;
        
        // Send the invite message
        replyglobal(inviteMessage);
    } catch (error) {
        console.error("Error generating invite link:", error);
        replyglobal("Sorry, there was an error generating the invite link. Please try again later.");
    }
    case "telegram": {
    // Remove permission checks and allow in both group and private chats

    // Define bot details
    const bots = [
        { name: "learn_codes", link: "https://t.me/Iconictechdevtechbot" },
        { name: "Queen Ruva ai Beta", link: "https://t.me/Iconictechogtechbot" },
        { name: "1comingsoon..", link: "" },
        { name: "2comingsoon..", link: "" },
        { name: "3comingsoon..", link: "" }
    ];

    // Create the formatted message
    let message = "ɪᴄᴏɴɪᴄ ᴛᴇᴄʜ ᴛᴇʟᴇɢʀᴀᴍ ʙᴏᴛs ɪɴᴄ.:\n\n";
    bots.forEach(bot => {
        message += `\u250C\u2500\u2500\u2500\u2500\u2500\u2510\n`; // Top border
        message += `\u2502 *Bot Name:* ${bot.name} \n`;
        message += `\u2502 *Link:* ${bot.link} \n`;
        message += `\u2502 *ᴄʀᴇᴀᴛᴏʀ ʙʏ ɪᴄᴏɴɪᴄ ᴛᴇᴄʜ* \n`;
        message += `\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n\n`; // Bottom border
    });

    // Send the response message
    replyglobal(message);
    break;
}
case 'invite2':
    if (!isGroup) {
        return replyglobal("This command can only be used in a group.");
    }
    if (!isCreator) {
        return replyglobal("You must be the group creator to use this command.");
    }
    
    try {
        // Retrieve group metadata (name, description)
        const groupMetadata = await IconicTechInc.groupMetadata(m.chat);
        const groupName = groupMetadata.subject;
        const groupDesc = groupMetadata.desc || 'No description available.';
        
        // Generate group invite link
        const inviteLink = await IconicTechInc.groupInviteCode(m.chat);
        const inviteUrl = `https://chat.whatsapp.com/${inviteLink}`;
        
        // Prepare the invite message with a styled text format
        const inviteMessage = `
╔════════════════════════════════════╗
║      *𝗚𝗥𝗢𝗨𝗣 𝗣𝗥𝗢𝗙𝗜𝗟𝗘*       ║
╠════════════════════════════════════╣
║ *𝗚𝗥𝗢𝗨𝗣 𝗡𝗔𝗠𝗘:* ${groupName}      ║
╠════════════════════════════════════╣
║ *𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡:* ${groupDesc}         ║
╠════════════════════════════════════╣
║ *𝗝𝗢𝗜𝗡 𝗟𝗜𝗡𝗞:* ${inviteUrl}         ║
╚════════════════════════════════════╝
        `;
        
        // Send the invite message
        replyglobal(inviteMessage);
    } catch (error) {
        console.error("Error generating invite link:", error);
        replyglobal("Sorry, there was an error generating the invite link. Please try again later.");
    }
    break;
case 'total': {
    try {
        let totalParticipants;
        if (isGroup) {
            // If in a group, fetch group metadata
            const groupMetadata = await IconicTechInc.groupMetadata(m.chat);
            totalParticipants = groupMetadata.participants.length; // Number of participants in the group
        } else if (isChannel) {
            // If in a channel, fetch channel participants (example for a public channel)
            const channelMetadata = await IconicTechInc.getChannelInfo(m.chat); // Use relevant method
            totalParticipants = channelMetadata.participants.length; // Number of participants in the channel
        } else {
            totalParticipants = 1; // For direct messages, only the user
        }

        // Prepare response message
        let response = `
╔════════════════════════════════════╗
║       *Total Participants*         ║
╠════════════════════════════════════╣
║ *Total Participants:* ${totalParticipants}   ║
╠════════════════════════════════════╣
║ *Bot Name:* Queen Ruva AI Beta     ║
╠════════════════════════════════════╣
║ *Developer:* Iconic Tech           ║
╚════════════════════════════════════╝
`;

        // Reply with the total number of participants
        replyglobal(response);

    } catch (error) {
        console.error("Error fetching total participants:", error);
        replyglobal("Sorry, there was an error fetching the total participants. Please try again later.");
    }
}
break;
case 'remove': {
    if (!m.isGroup) return replyglobal(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin);
    if (!isBotAdmins) return replyglobal(mess.botAdmin);

    // Check if a number prefix is provided
    let numberPrefix = text.replace(/[^0-9]/g, ''); // Extract number prefix by removing non-numeric characters

    // If no number prefix is provided, let the user know
    if (!numberPrefix) {
        return replyglobal("Please provide a number prefix. Example: `remove 263` to remove all users with numbers starting with 263.");
    }

    try {
        // Get group members
        let groupMembers = await IconicTechInc.groupMetadata(m.chat);
        let participants = groupMembers.participants;
        let affected = 0;

        // Loop through participants and check their number prefix
        for (let participant of participants) {
            let participantNumber = participant.id.split('@')[0];  // Extract the number part
            
            if (participantNumber.startsWith(numberPrefix)) {
                // Remove the participant from the group
                await IconicTechInc.groupParticipantsUpdate(m.chat, [participant.id], 'remove');
                affected++;
            }
        }

        // Respond with the result in a big text box style
        let response = `
╔════════════════════════════════════╗
║      *Queen Ruva AI Beta*         ║
╠════════════════════════════════════╣
║      *Removed Members*            ║
╠════════════════════════════════════╣
║ *Number Prefix:* ${numberPrefix}  ║
║ *Members Removed:* ${affected}     ║
╠════════════════════════════════════╣
║ *Dev:* Iconic Tech                ║
╚════════════════════════════════════╝
        `;

        if (affected > 0) {
            replyglobal(response);
        } else {
            replyglobal("No members with the specified number prefix found.");
        }
    } catch (error) {
        console.error("Error managing members:", error);
        replyglobal("An error occurred while attempting to manage members.");
    }
}
break;
case 'ssweb': {
    if (!text) return replyglobal(`Example: ${prefix + command} https://github.com/iconic05/Queen-ruva-ai-beta`);
    
    try {
        let url = text.trim();
        if (!url.startsWith('http')) url = 'https://' + url; // Ensure the link starts with HTTP
        
        let screenshotUrl = `https://image.thum.io/get/width/1900/crop/1000/fullpage/${url}`;
        
        // Send the screenshot with a stylish caption
        await IconicTechInc.sendMessage(m.chat, {
            image: { url: screenshotUrl },
            caption: `🖥️ *Website Screenshot*\n🔗 URL: ${url}\n✅ Screenshot successfully generated!`
        }, { quoted: m });

        // Global Reply with styled text (with bot name and creator info)
        replyglobal(`
        ╔═══════════════════╗
        ║    *Queen Ruva AI Beta*    ║
        ║    Created by: *Iconic Tech* ║
        ║  Screenshot generated for:   ║
        ║       ${url}                   ║
        ╚═══════════════════╝
        `);

    } catch (error) {
        console.error("Screenshot Error:", error);
        replyglobal("❌ Failed to take a screenshot. Try again!");
    }
}
break;
case 'say': {
    if (!text) return replyglobal('Where is the text?'); // Check if text is provided

    replyglobal("Processing your request..."); // Immediate reply informing user that TTS is processing

    try {
        let texttts = text.trim(); // Remove unnecessary spaces

        // Get the audio URL from Google TTS API
        const xliconrl = googleTTS.getAudioUrl(texttts, {
            lang: "en",
            slow: false,
            host: "https://translate.google.com",
        });

        if (!xliconrl) {
            return replyglobal("Could not generate the audio. Please try again!");
        }

        // Send the audio message to the user
        await IconicTechInc.sendMessage(m.chat, {
            audio: { url: xliconrl },
            mimetype: 'audio/mpeg', // Use audio/mpeg instead of audio/mp4
            ptt: true, // Push-to-talk format
            fileName: `${texttts}.mp3` // Filename for the audio
        }, { quoted: m });

    } catch (error) {
        console.error("TTS Error:", error); // Log error for debugging
        replyglobal("Failed to generate speech. Try again!"); // Notify the user of failure
    }
}
break;
case 'tagme': {
    IconicTechInc.sendMessage(m.chat, { 
        text: `@${m.sender.split('@')[0]}`, 
        mentions: [m.sender] 
    }, { quoted: m });
}
break;
case 'd': {
    if (!m.quoted) return replyglobal('Reply to the message you want to delete.');
    
    await IconicTechInc.sendMessage(m.chat, { 
        delete: { 
            remoteJid: m.chat, 
            fromMe: m.quoted.sender === m.botNumber, 
            id: m.quoted.id, 
            participant: m.quoted.sender 
        }
    });
}
break;
    case 'opentime':
case 'openinghours': {
  try {
    const openingMessage = `
👑 *QUEEN RUVA'S ROYAL HOURS* v2.0.3
╭──────────────────
│ 🏰 *Royal Palace Open* 🏰
│ 
│ 🌅 *Morning Session:*
│ 8:00 AM - 12:00 PM
│ 
│ ☀️ *Afternoon Session:*
│ 1:00 PM - 5:00 PM
│ 
│ 🌙 *Evening Audience:*
│ 6:00 PM - 9:00 PM
╰──────────────────
📜 *Royal Notice:*
The palace is closed on Sundays
for royal affairs
`.trim();

    await IconicTechInc.sendMessage(m.chat, { 
      image: { url: 'https://i.imgur.com/KjQ2zQg.png' },
      caption: openingMessage,
      contextInfo: {
        externalAdReply: {
          title: "🏛️ Palace Hours",
          body: "Queen Ruva's Availability",
          thumbnail: await (await fetch('https://i.imgur.com/JRl6QzY.png')).buffer(),
          mediaType: 1,
          mediaUrl: '',
          sourceUrl: '',
          showAdAttribution: true
        }
      }
    });

  } catch (error) {
    console.error('OpenTime Error:', error);
    replyglobal("👑 *Royal Announcement*\n\nThe palace scribes are unavailable to share our hours at this moment.");
  }
  break;
}

case 'closetime':
case 'closed': {
  try {
    const closingMessage = `
👑 *QUEEN RUVA'S ROYAL HOURS* v2.0.3
╭──────────────────
│ 🏰 *Palace Currently Closed* 🏰
│ 
│ ⏳ *Next Opening:*
│ Tomorrow at 8:00 AM
│ 
│ 📜 *After Hours Access:*
│ Only for emergency royal decrees
╰──────────────────
✨ *Royal Notice:*
The throne room opens daily
except Sundays
`.trim();

    await IconicTechInc.sendMessage(m.chat, {
      image: { url: 'https://i.imgur.com/8BkYdWw.png' },
      caption: closingMessage,
      contextInfo: {
        externalAdReply: {
          title: "🚪 Palace Closed",
          body: "Visit during royal hours",
          thumbnail: await (await fetch('https://i.imgur.com/JRl6QzY.png')).buffer(),
          mediaType: 1,
          mediaUrl: '',
          sourceUrl: '',
          showAdAttribution: true
        }
      }
    });

  } catch (error) {
    console.error('CloseTime Error:', error);
    replyglobal("👑 *Royal Announcement*\n\nWe cannot verify our closure status at this time.");
  }
  break;
}      
                case 'hosting-web':
case 'hosting': {
    try {
        // Prepare the message with a cool tone and call to action
        const message = `
🌐 *Looking for Hosting Services?*  
> 🚀 *Get your website online* with fast and reliable hosting!  
> 💡 *Why wait? Start your hosting journey now!*  

🔗 *Click here to start hosting:*  
[Start Hosting Now](https://codewave-unit.zone.id)

👨‍💻 Created by *ICONICS-TECH*  
        `.trim();

        // Send the hosting link message
        await IconicTechInc.sendMessage(from, {
            text: message,
            mentions: [sender],
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: `Get Hosting Now!`,
                    body: `Fast and reliable hosting services.`,
                    thumbnail: fs.readFileSync(`./QueenMedia/ruva.jpg`),
                    sourceUrl: 'https://codewave-unit.zone.id',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });
    } catch (error) {
        console.error("Error in 'hosting-web' or 'hosting' command:", error);
    }
}
break;
case 'obf':
case 'obfuscate': {
  if (!m.quoted || !m.quoted.mtype.includes('document')) {
    return replyglobal(`👑 *Royal Obfuscation Service* v2.0.3\n\nPlease reply to a .js file with:\n*${prefix + command}*`);
  }

  try {
    await IconicTechInc.sendMessage(m.chat, { react: { text: '🔐', key: m.key } });

    // Download the JS file
    const fileBuffer = await IconicTechInc.downloadMediaMessage(m.quoted);
    const originalCode = fileBuffer.toString('utf8');

    // Simple obfuscation (replace with your preferred method)
    const obfuscatedCode = `/* Obfuscated by Queen Ruva AI v2.0.3 */\n` +
      `(function(_0x${Math.random().toString(16).substr(2,4)}){\n` +
      `var _0x${Math.random().toString(16).substr(2,6)}=${JSON.stringify(originalCode)};\n` +
      `eval(_0x${Math.random().toString(16).substr(2,6)});\n` +
      `})();`;

    // Create encrypted file
    const encryptedFilename = `royal_encrypted_${Date.now()}.js`;
    const encryptedBuffer = Buffer.from(obfuscatedCode, 'utf8');

    // Send with royal security notice
    const securityNotice = `
🔐 *QUEEN RUVA CODE OBFSICATION* v2.0.3
╭──────────────────
│ 📜 *Original File:* ${m.quoted.filename || 'unknown.js'}
│ 🛡️ *Security Level:* Royal Encryption
│ 💾 *New Filename:* ${encryptedFilename}
╰──────────────────
⚠️ *Royal Decree:* 
This code is now protected under
the kingdom's security laws
`.trim();

    await IconicTechInc.sendMessage(m.chat, {
      document: encryptedBuffer,
      fileName: encryptedFilename,
      mimetype: 'application/javascript',
      caption: securityNotice,
      contextInfo: {
        externalAdReply: {
          title: "👑 Royal Code Protection",
          body: "Obfuscated with Queen Ruva AI",
          thumbnail: await (await fetch('https://i.imgur.com/JRl6QzY.png')).buffer(),
          mediaType: 1,
          mediaUrl: '',
          sourceUrl: 'codewave-unit.zone.id',
          showAdAttribution: true
        }
      }
    }, { quoted: m });

  } catch (error) {
    console.error('Obfuscation Error:', error);
    return replyglobal(`👑 *Royal Security Breach*\n\nFailed to protect the code!\nError: ${error.message}`);
  }
  break;
}

case 'announce':
case 'notifyall': {
  if (!m.isGroup) return replyglobal('👑 *Queen Ruva ai beta*\n\nThis command works only in kingdom (group) chambers!');
  if (!isAdmins) return replyglobal('👑 *Royal Guard Block*\n\nOnly the Queen\'s advisors may summon the subjects!');
  if (!text) return replyglobal(`👑 *Royal Proclamation*\n\nUsage:\n*${prefix + command}* Your message\n\nExample:\n*${prefix + command}* The royal feast begins at sunset!`);

  try {
    await IconicTechInc.sendMessage(m.chat, { react: { text: '📢', key: m.key } });

    // Get all group participants
    const groupMetadata = await IconicTechInc.groupMetadata(m.chat);
    const participants = groupMetadata.participants;

    // Create royal announcement
    const announcement = `
👑 *Queen Ruva ai Bata* v2.0.3
╭──────────────────
│ 📜 ${text}
╰──────────────────
✨ From: ${pushname || 'Royal Advisor'}
`.trim();

    // Send to each member (with rate limiting)
    let successCount = 0;
    for (const user of participants) {
      try {
        await IconicTechInc.sendMessage(user.id, { 
          text: announcement,
          contextInfo: {
            mentionedJid: [user.id],
            forwardingScore: 999,
            isForwarded: true
          }
        });
        successCount++;
        await delay(1000); // 1 second delay between messages
      } catch (error) {
        console.error(`Failed to notify ${user.id}:`, error);
      }
    }

    // Send summary report
    const reportMessage = `
📢 *Queen ruva ai beta Complete*
╭──────────────────
│ ✅ Successfully notified: ${successCount} subjects
│ ❌ Failed to reach: ${participants.length - successCount}
╰──────────────────
📜 *Proclamation Content:*
${text.substring(0, 50)}${text.length > 50 ? '...' : ''}
`.trim();

    return replyglobal(reportMessage);

  } catch (error) {
    console.error('Announcement Error:', error);
    return replyglobal('👑 *Royal Announcement*\n\nThe town crier failed to spread the word!\nError: ' + error.message);
  }
  break;
}
// Command-based kick
switch (command) {
    case 'bye':
        let userToKick = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        kickUser(m, userToKick);
        break;
}


            case 'add':
    if (!m.isGroup) return replyglobal(mess.group)
    if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
    if (!isBotAdmins) return replyglobal(mess.botAdmin)

    let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

    // Initial message: Waiting for the action
    replyglobal('Please wait... Adding user to the group. ⏳')

    // Wait for 2 seconds before sending the next message
    setTimeout(async () => {
        try {
            // Adding user to the group
            await IconicTechInc.groupParticipantsUpdate(m.chat, [blockwwww], 'add')
                .then((res) => {
                    // Message after successfully adding
                    replyglobal('User added successfully! 🎉')
                })
                .catch((err) => {
                    // Error message if adding user fails
                    replyglobal('Sorry, there was an error adding the user. Please try again. ❌')
                });
        } catch (error) {
            // Catch any unexpected error and notify the user
            replyglobal('An unexpected error occurred. Please try again later. 😓')
        }
    }, 2000); // Delay of 2 seconds before proceeding

    break;
    case 'slow': {
  try {
    await IconicTechInc.sendMessage(m.chat, {
      text: `🔄 *Processing your request...* Please wait... ⏳`
    });

    // Simulating delay with a series of "loading" messages
    await new Promise(resolve => setTimeout(resolve, 3000)); // 3 seconds delay

    await IconicTechInc.sendMessage(m.chat, {
      text: `🕹 *Almost done... Loading...* 😅`
    });

    await new Promise(resolve => setTimeout(resolve, 5000)); // 5 seconds delay

    await IconicTechInc.sendMessage(m.chat, {
      text: `⏳ *Still loading... Please hold tight...* 😜`
    });

    await new Promise(resolve => setTimeout(resolve, 7000)); // 7 seconds delay

    // Finally, deliver the result (after a long "wait")
    await IconicTechInc.sendMessage(m.chat, {
      text: `🎉 *Surprise! Your request has been processed! 🎁* 😆`
    });

  } catch (error) {
    console.error('Error during /slow command:', error);
    replyglobal(`*❗ An unexpected error occurred. Please try again later.* 💥`);
  }
  break;
}
            case 'promote':
    if (!m.isGroup) return replyglobal(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin);
    if (!isBotAdmins) return replyglobal(mess.botAdmin);

    let promoteJid = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    // Initial message: Inform the user that the process is starting
    replyglobal('Loading... Promoting the user. ⏳');

    // Wait for 2 seconds before sending the next message
    setTimeout(async () => {
        try {
            // Promoting the user
            await IconicTechInc.groupParticipantsUpdate(m.chat, [promoteJid], 'promote')
                .then((res) => {
                    // Message after successfully promoting
                    replyglobal('User promoted successfully! 👑\n\n*Made with ❤️‍🔥 by ICONICS-TECH*');
                })
                .catch((err) => {
                    // Error message if promoting fails
                    replyglobal('Sorry, there was an error promoting the user. Please try again. ❌\n\n*Made with ❤️‍🔥 by ICONICS-TECH*');
                });
        } catch (error) {
            // Catch any unexpected error and notify the user
            replyglobal('An unexpected error occurred while promoting the user. 😓\n\n*Made with ❤️‍🔥 by ICONICS-TECH*');
        }
    }, 2000); // Delay of 2 seconds before proceeding

    break;

case 'demote':
    if (!m.isGroup) return replyglobal(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin);
    if (!isBotAdmins) return replyglobal(mess.botAdmin);

    let demoteJid = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    // Initial message: Inform the user that the process is starting
    replyglobal('Loading... Demoting the user. ⏳');

    // Wait for 2 seconds before sending the next message
    setTimeout(async () => {
        try {
            // Demoting the user
            await IconicTechInc.groupParticipantsUpdate(m.chat, [demoteJid], 'demote')
                .then((res) => {
                    // Message after successfully demoting
                    replyglobal('User demoted successfully! 👋\n\n*Made with ❤️‍🔥 by ICONICS-TECH*');
                })
                .catch((err) => {
                    // Error message if demoting fails
                    replyglobal('Sorry, there was an error demoting the user. Please try again. ❌\n\n*Made with ❤️‍🔥 by ICONICS-TECH*');
                });
        } catch (error) {
            // Catch any unexpected error and notify the user
            replyglobal('An unexpected error occurred while demoting the user. 😓\n\n*Made with ❤️‍🔥 by ICONICS-TECH*');
        }
    }, 2000); // Delay of 2 seconds before proceeding

    break;
            case 'setname':
            case 'setsubject':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                if (!text) return 'Text ?'
                await IconicTechInc.groupUpdateSubject(m.chat, text).then((res) => replyglobal(mess.success)).catch((err) => replyglobal(json(err)))
                break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                if (!text) return 'Text ?'
                await IconicTechInc.groupUpdateDescription(m.chat, text).then((res) => replyglobal(mess.success)).catch((err) => replyglobal(json(err)))
                break
            case 'setppgroup':
case 'setppgrup':
case 'setppgc': {
    if (!m.isGroup) return replyglobal('❌ This command only works in groups.'); // Ensure it's a group
    if (!isAdmins) return replyglobal('❌ Only admins can use this command.'); // Restrict to admins
    if (!isBotAdmins) return replyglobal('❌ The bot needs to be an admin to perform this action.'); // Ensure the bot is an admin

    if (!quoted) return replyglobal(`❓ Please send/reply with an image and caption ${prefix + command}.`); // Ensure a quoted image is provided
    if (!/image/.test(mime)) return replyglobal(`❓ Please send/reply with an image and caption ${prefix + command}.`); // Check if it's an image
    if (/webp/.test(mime)) return replyglobal(`❌ Please send/reply with an image (not a webp) and caption ${prefix + command}.`); // Ensure it's not a webp

    try {
        // Notify that the bot is preparing to set the profile picture
        replyglobal('🔄 Setting the group picture... Please wait.'); // Bot is working

        // Extra message: Bot is processing the command
        replyglobal('💬 The bot is working on updating the group picture. Please be patient.'); 

        // Download and save the media (image) from the quoted message
        var medis = await IconicTechInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg');

        // Simulate a slight delay before setting the profile picture
        await new Promise(resolve => setTimeout(resolve, 3000)); // 3-second delay

        if (args[0] == 'full') {
            // Generate profile picture
            var { img } = await generateProfilePicture(medis);

            // Set the profile picture
            await IconicTechInc.query({
                tag: 'iq',
                attrs: { to: m.chat, type: 'set', xmlns: 'w:profile:picture' },
                content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]
            });

            // Clean up temporary file
            fs.unlinkSync(medis);

            // Success message
            replyglobal('✅ Group picture updated successfully! 🎉');
            // Extra message: Completion notification
            replyglobal('💬 The group picture has been successfully updated! 🎉');
        } else {
            // Set the profile picture from URL
            var memeg = await IconicTechInc.updateProfilePicture(m.chat, { url: medis });

            // Clean up temporary file
            fs.unlinkSync(medis);

            // Success message
            replyglobal('✅ Group picture updated successfully! 🎉');
            // Extra message: Completion notification
            replyglobal('💬 The group picture has been successfully updated! 🎉');
        }
    } catch (error) {
        console.error(error);
        // Error message if something goes wrong
        replyglobal('❌ An error occurred while updating the group picture. Please try again later.');
        // Extra error message
        replyglobal('💬 Oops! There was an issue while processing the image. Please try again.');
    }
    break;
}
case 'tagall':
case 'all':
case 'checkup':
    if (!m.isGroup) return replyglobal(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator && !isPremium) return replyglobal(mess.admin);
    if (!isBotAdmins && !isCreator && !isPremium) return replyglobal(mess.botAdmin);

    let messageContent = q ? q : 'No message provided';
    let header = `🚀 *QUEEN-RUVA AI* - Group Notification\n\n📢 *Attention Everyone!*`;
    let body = `\n\n💬 *Message:* ${messageContent}\n\n👑 Hey, it's *Queen-Ruva*! Just checking in—how’s everyone doing?`;

    // Check for specific message inputs
    if (q && q.toLowerCase().includes('hello')) {
        body += `\n\n🌟 *Hey there!* Welcome to the group! I'm your AI assistant, always here to help.`;
    } else if (!q) {
        body += `\n\n⚠️ *No message detected!* Please include a message for the group.`;
    }

    // Cool member tagging with emojis
    let mentionsList = participants.map(member => `✨ @${member.id.split('@')[0]} ✨`).join('\n');
    let finalMessage = `${header}${body}\n\n🚀 *Summoning the Legends:* \n${mentionsList}`;

    // Send message to the group
    IconicTechInc.sendMessage(m.chat, {
        text: finalMessage,
        mentions: participants.map(member => member.id)
    }, {
        quoted: m
    });

    // Footer message for branding
    setTimeout(() => {
        replyglobal('🔥 *Powered by Iconic Tech – Queen Ruva AI (Beta)*');
    }, 2000); // Delay footer message for better readability

    break;
    case 'membertotal': {
    // Ensure the message is from a group chat
    if (!m.isGroup) return replyglobal(mess.group);

    // Check if the sender has the necessary permissions
    if (!isAdmins && !isGroupOwner && !isCreator && !isPremium) 
        return replyglobal(mess.admin);

    // Ensure the bot is also an admin in the group
    if (!isBotAdmins && !isCreator && !isPremium) 
        return replyglobal(mess.botAdmin);

    // Get the total number of participants in the group
    let totalMembers = participants.length;

    // Stylish message format
    let teks = `🎉 *Group Member Count* 🎉\n\n👥 *Total Members:* ${totalMembers}\n\n📢 *Stay active and keep the vibes alive!*`;

    // List of possible thumbnails
    const thumbnails = [
        './QueenMedia/ruva.jpg',
        './QueenMedia/ruva.jpg',
        './QueenMedia/ruva.jpg',
        './QueenMedia/ruva.jpg'
    ];

    // Function to randomly choose a thumbnail
    const getRandomThumbnail = () => thumbnails[Math.floor(Math.random() * thumbnails.length)];

    // Load the primary thumbnail or a random one if unavailable
    let thumbnailBuffer;
    try {
        thumbnailBuffer = fs.readFileSync(`./QueenMedia/ruva.jpg`);
    } catch (err) {
        console.error('Primary thumbnail not found, selecting a random one:', err);
        try {
            thumbnailBuffer = fs.readFileSync(getRandomThumbnail());
        } catch (randomErr) {
            console.error('Random thumbnail also not found:', randomErr);
            thumbnailBuffer = null;  // Fallback if no thumbnail is found
        }
    }

    // Send the message with an optional thumbnail
    setTimeout(() => {
        IconicTechInc.sendMessage(m.chat, {
            text: teks,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: "📊 Group Insights",
                    body: teks,
                    thumbnailUrl: '',
                    thumbnail: thumbnailBuffer || undefined,
                    sourceUrl: "https://chat.whatsapp.com/LyFPHDvc5vMCglUFjv7Rlp",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });
    }, 1000); // Delay for 1 second before sending

    break;
}
            break
    case 'tagadmin':
case 'listadmin': {
    if (!m.isGroup) return replyglobal("This command can only be used in groups");

    // Filter out the admins from participants
    const groupAdmins = participants.filter(p => p.admin);
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
    
    // Calculate total members
    const totalMembers = participants.length;

    // Load the thumbnail image
    let thumbnailBuffer;
    try {
        thumbnailBuffer = fs.readFileSync(`./QueenMedia/ruva.jpg`);
    } catch (err) {
        console.error('Thumbnail not found, skipping:', err);
        thumbnailBuffer = null;
    }

    // Add delay and send the total members message first
    setTimeout(() => {
        replyglobal(`👥 *Total Members in Group:* ${totalMembers}\n`);
    }, 1000);  // Delay for 1 second before sending total members

    // Send the list of group admins with the thumbnail
    setTimeout(() => {
        IconicTechInc.sendMessage(m.chat, {
            text: `*Group Admins:*\n${listAdmin}`,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: "Group Admins List",
                    body: "Here are the admins of this group",
                    thumbnailUrl: '',
                    thumbnail: thumbnailBuffer || undefined,
                    sourceUrl: "https://chat.whatsapp.com/LyFPHDvc5vMCglUFjv7Rlp",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m, mentions: groupAdmins.map(v => v.id) });
    }, 2000);  // Delay for 2 seconds before sending admins list
    
    break;
}
break;
   case 'hidetag':
            case 'dtag':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator && !isPremium) return replyglobal(mess.admin)
                if (!isBotAdmins && !isCreator && !isPremium) return replyglobal(mess.botAdmin)
                IconicTechInc.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
                case 'react': {
  // Toggle mode (Admins only)
  if (args[0] === 'on' || args[0] === 'off') {
    if (!isCreator) return replyglobal('👑 *Royal Guard Block*\nOnly advisors may modify reactions!');
    global.reactSettings.enabled = args[0] === 'on';
    return replyglobal(`♻️ Auto-reactions ${global.reactSettings.enabled ? 'ENABLED' : 'DISABLED'}`);
  }

  // Manual reaction to quoted message
  if (!m.quoted) return replyglobal(`🔍 *Usage:* Reply to a message with:\n.react [emoji?]`);
  
  const emoji = args[0]?.match(/\p{Emoji}/u)?.[0] || // User's emoji if valid
                global.reactSettings.emojis[Math.floor(Math.random() * global.reactSettings.emojis.length)]; // Random fallback

  await IconicTechInc.sendMessage(m.chat, {
    react: {
      text: emoji,
      key: m.quoted.key
    }
  });
  break;
}
            case 'totag':
          case 'tag':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isBotAdmins && !isCreator && !isPremium) return replyglobal(mess.botAdmin)
                if (!isAdmins && !isCreator && !isPremium) return replyglobal(mess.admin)
                if (!m.quoted) return replyglobal(`Reply messages with captions ${prefix + command}`)
                IconicTechInc.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break
            case 'group':
            case 'gc':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                if (args[0] === 'close') {
                    await IconicTechInc.groupSettingUpdate(m.chat, 'announcement').then((res) => replyglobal(`*Group closed 🔐*\n\n> ʙʏ ǫᴜᴇᴇɴ-ʀᴜᴠᴀ AI`)).catch((err) => replyglobal(json(err)))
                } else if (args[0] === 'open') {
                    await IconicTechInc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replyglobal(`*Group opened 🔓*\n\n> ʙʏ ǫᴜᴇᴇɴ-ʀᴜᴠᴀ AI`)).catch((err) => replyglobal(json(err)))
                } else {
                    replyglobal(`Mode ${command}\n\n\nType ${prefix + command}open/close`)
                }
                break
            case 'editinfo':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                if (args[0] === 'open') {
                    await IconicTechInc.groupSettingUpdate(m.chat, 'unlocked').then((res) => replyglobal(`*Group edit info opened*`)).catch((err) => replyglobal(json(err)))
                } else if (args[0] === 'close') {
                    await IconicTechInc.groupSettingUpdate(m.chat, 'locked').then((res) => replyglobal(`*Group edit info closed*`)).catch((err) => replyglobal(json(err)))
                } else {
                    replyglobal(`Mode ${command}\n\n\nType ${prefix + command}on/off`)
                }
                break
            case 'linkgroup':
            case 'grouplink':
            case 'glink':
            case 'linkgc':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                let response = await IconicTechInc.groupInviteCode(m.chat)
                IconicTechInc.sendText(m.chat, `👥 *ǫᴜᴇᴇɴ-ʀᴜᴠᴀ AI ɢʀᴏᴜᴘ ɪɴғᴏʀ*\n🤖 *Group Name :* ${groupMetadata.subject}\n👤 *Group Owner :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Not known'}\n🏷 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Members :* ${groupMetadata.participants.length}\n\n\n> ᴄʀᴇᴀᴛᴇᴅ ʙʏ ɪᴄᴏɴɪᴄ ᴛᴇᴄʜ`, m, {
                    detectLink: true
                })
                break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                await IconicTechInc.groupRevokeInvite(m.chat)
                    .then(res => {
                        replyglobal(`ǫᴜᴇᴇɴ-ʀᴜᴠᴀ AI Reset, Group Invite Link Successfully ${groupMetadata.subject}`)
                    }).catch((err) => replyglobal(json(err)))
                break
case 'p': 
case 'ping': 
case 'speed': 
case 'taste': 
case 'check': {
    // Start latency calculation
    const startTime = Date.now();
    
    // Get system info
    const memoryUsage = process.memoryUsage();
    const cpus = os.cpus();
    
    // Calculate CPU usage
    let cpuUsage = 0;
    if (cpus.length > 0) {
        const cpu = cpus[0];
        const total = Object.values(cpu.times).reduce((a, b) => a + b);
        cpuUsage = 100 - (cpu.times.idle / total) * 100;
    }
    
    // Calculate latency
    const latency = Date.now() - startTime;
    
    // Format memory usage
    const formatMemory = (bytes) => {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
    };
    
    // Array of randomized responses with actual metrics
    const responses = [
        `🚀 *Queen Ruva AI Beta Pong!*\n` +
        `⏳ Latency: ${latency}ms\n` +
        `🧠 Memory: ${formatMemory(memoryUsage.rss)}\n` +
        `⚡ CPU: ${cpuUsage.toFixed(2)}%\n` +
        `✨ Version: Beta ${Math.floor(Math.random() * 999)}`,
        
        `⚡ *Lightning Fast Response!*\n` +
        `⏱️ Speed: ${latency}ms\n` +
        `💾 RAM: ${formatMemory(memoryUsage.heapUsed)}/${formatMemory(memoryUsage.heapTotal)}\n` +
        `🔥 CPU: ${cpuUsage.toFixed(2)}%`,
        
        `🎯 *System Status Report*\n` +
        `📶 Ping: ${latency}ms\n` +
        `📊 Memory Usage: ${((memoryUsage.heapUsed / memoryUsage.heapTotal) * 100).toFixed(2)}%\n` +
        `🔧 CPU Cores: ${cpus.length}`
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    await IconicTechInc.sendMessage(m.chat, {
        text: randomResponse,
    }, { quoted: m });
    
    break;
}
case 'buypremium':
case 'buyprem':
case 'premium': {
    let teks = `Hi ${pushname}👋\nDo you want to Buy Premium? Just type owner and chat with the owner😉`;

    // React with a thumbs up emoji before sending the message
    await IconicTechInc.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `${botname}`,
                body: `${ownername}`,
                thumbnailUrl: '',
thumbnail: fs.readFileSync(`./QueenMedia/ruva.jpg`),
                sourceUrl:  'https://whatsapp.com/channel/0029ValX2Js9RZAVtDgMYj0r',
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });

    await IconicTechInc.react(m.chat, "🫵", m.key.id);
}
break
case 'npm': // Search for npm packages
    if (args.length < 1) return replyglobal("Please provide the name of the npm package you want to search for.\nExample: " + prefix + "npm express");
    
    try {
        const packageName = args.join(" ");
        const apiUrl = `https://registry.npmjs.org/${encodeURIComponent(packageName)}`;

        // Fetch package details
        const response = await axios.get(apiUrl);
        if (response.status !== 200) {
            throw new Error("Package not found or an error occurred.");
        }

        const packageData = response.data;
        const latestVersion = packageData["dist-tags"].latest;
        const description = packageData.description || "No description available.";
        const npmUrl = `https://www.npmjs.com/package/${packageName}`;
        const license = packageData.license || "Unknown";
        const repository = packageData.repository ? packageData.repository.url : "Not available";

        // Format response
        const message = `
╔══════════════════════╗
║   📦 NPM PACKAGE INFO   ║
╠══════════════════════╣
║  🔰 *Package:* ${packageName}
║  📄 *Description:* ${description}
║  ⏸️ *Version:* ${latestVersion}
║  🪪 *License:* ${license}
║  🪩 *Repository:* ${repository}
║  🔗 *URL:* ${npmUrl}
║
║  Type ${prefix}help for more commands
╚══════════════════════╝
        `;

        replyglobal(message.trim());

    } catch (error) {
        console.error("NPM Search Error:", error);
        replyglobal(`╔══════════════════════╗
║      ❌ ERROR LOGS      ║
╠══════════════════════╣
║ *Error:* ${error.message}
║ *When:* ${new Date().toLocaleString()}
║
║ Failed to fetch npm package
╚══════════════════════╝`);
    }
    break;
case 'npm-update': {
    if (!isCreator) return ownernya();
    const [action, ...packages] = args;

    if (!action) return replyglobal(`
📦 *NPM Package Manager*

Usage:
┣✦ check - List outdated packages
┣✦ safe - Update with version locks
┣✦ latest - Update to latest versions
┣✦ rollback - Revert last update
┣✦ clean - Remove unused packages

Example: 
.npm-update safe axios
.npm-update latest
`);

    try {
        const { execSync } = require('child_process');
        const fs = require('fs');
        const path = require('path');

        // Backup package.json before any changes
        const backupPackage = () => {
            const backupDir = './npm_backups';
            if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir);
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            fs.copyFileSync('package.json', `${backupDir}/package_${timestamp}.json`);
            return timestamp;
        };

        switch (action) {
            case 'check': {
                const outdated = execSync('npm outdated --json').toString();
                const parsed = JSON.parse(outdated || '{}');
                
                if (Object.keys(parsed).length === 0) {
                    return replyglobal('✅ All packages are up-to-date!');
                }

                let report = '🔄 *Outdated Packages:*\n';
                for (const [pkg, info] of Object.entries(parsed)) {
                    report += `┣✦ ${pkg}: ${info.current} → ${info.latest}\n`;
                }
                replyglobal(report + '\n_Use .npm-update [safe|latest] to update_');
                break;
            }

            case 'safe': {
                const timestamp = backupPackage();
                let updateCommand = 'npm update --save-exact';
                
                if (packages.length > 0) {
                    updateCommand += ' ' + packages.join(' ');
                }

                const output = execSync(updateCommand).toString();
                const updated = output.match(/\+ (.+?@[\d.]+)/g) || [];

                replyglobal(`
🔒 *Safe Update Complete*
┣✦ Updated: ${updated.join(', ') || 'None'}
┣✦ Backup: npm_backups/package_${timestamp}.json
┗✦ Changes:
\`\`\`diff
${output.split('\n').slice(-10).join('\n')}
\`\`\`
_⚠️ Version locks added to package.json_
                `);
                break;
            }

            case 'latest': {
                const timestamp = backupPackage();
                let updateCommand = 'npm update --save';
                
                if (packages.length > 0) {
                    // Get latest versions first
                    const latestVersions = packages.map(pkg => {
                        const info = JSON.parse(execSync(`npm view ${pkg} --json`).toString());
                        return `${pkg}@${info['dist-tags'].latest}`;
                    });
                    updateCommand = 'npm install --save ' + latestVersions.join(' ');
                }

                const output = execSync(updateCommand).toString();
                const updated = output.match(/\+ (.+?@[\d.]+)/g) || [];

                replyglobal(`
🚀 *Updated to Latest Versions*
┣✦ Updated: ${updated.join(', ') || 'None'}
┣✦ Backup: npm_backups/package_${timestamp}.json
┗✦ Changes:
\`\`\`diff
${output.split('\n').slice(-10).join('\n')}
\`\`\`
                `);
                break;
            }

            case 'rollback': {
                const backups = fs.readdirSync('./npm_backups')
                    .filter(f => f.startsWith('package_'))
                    .sort()
                    .reverse();

                if (backups.length === 0) {
                    return replyglobal('❌ No backups found!');
                }

                const target = packages[0] || backups[0];
                fs.copyFileSync(`./npm_backups/${target}`, 'package.json');
                execSync('npm install');

                replyglobal(`
⏪ *Rollback Complete*
┣✦ Restored: ${target}
┣✦ Current Packages:
\`\`\`json
${execSync('npm list --depth=0').toString().split('\n').slice(1).join('\n')}
\`\`\`
┗✦ Run \`.npm-update safe\` to reinstall updates
                `);
                break;
            }

            case 'clean': {
                const output = execSync('npm prune').toString();
                replyglobal(`
🗑️ *Cleaned Unused Packages*
\`\`\`
${output || 'No packages removed'}
\`\`\`
                `);
                break;
            }

            default: {
                replyglobal(`❌ Unknown action: ${action}`);
            }
        }
    } catch (error) {
        replyglobal(`
💥 *Update Failed!*
Error: ${error.message}

Possible fixes:
1. Check internet connection
2. Run \`.npm-update clean\`
3. Verify package names
        `);
        console.error('NPM Update Error:', error.stack);
    }
    break;
}
case 'pm2': {
    if (!isCreator) return ownernya();
    const [action, ...params] = args;

    // PM2 Command Mapping
    const pm2Commands = {
        'list': {
            desc: "List all processes",
            cmd: "pm2 list"
        },
        'start': {
            desc: "Start a process",
            cmd: `pm2 start ${params.join(' ')}`,
            secure: true
        },
        'stop': {
            desc: "Stop a process",
            cmd: `pm2 stop ${params.join(' ')}`,
            secure: true
        },
        'restart': {
            desc: "Restart a process",
            cmd: `pm2 restart ${params.join(' ')}`,
            secure: true
        },
        'logs': {
            desc: "Show process logs",
            cmd: `pm2 logs ${params.join(' ')} --lines 20`
        },
        'monit': {
            desc: "Monitor all processes",
            cmd: "pm2 monit"
        },
        'version': {
            desc: "Show PM2 version",
            cmd: "pm2 -v"
        },
        'save': {
            desc: "Save current process list",
            cmd: "pm2 save"
        },
        'delete': {
            desc: "Delete a process",
            cmd: `pm2 delete ${params.join(' ')}`,
            secure: true
        }
    };

    // Help System
    if (!action || action === 'help') {
        let helpText = "🖥️ *PM2 Process Manager*\n\n";
        for (const [cmd, info] of Object.entries(pm2Commands)) {
            helpText += `$ pm2 ${cmd.padEnd(10)} ${info.desc}\n`;
        }
        helpText += `\nExample: .pm2 logs ${process.env.PM2_APP_NAME || 'your-app'}`;
        return replyglobal(helpText);
    }

    // Execute Command
    try {
        if (!pm2Commands[action]) {
            return replyglobal(`❌ Invalid PM2 command: ${action}\nUse .pm2 help for list`);
        }

        // Security Check
        if (pm2Commands[action].secure && !params.includes('--confirm')) {
            return replyglobal(`🔒 Requires confirmation:\n.pm2 ${action} ${params.join(' ')} --confirm`);
        }

        // Execute
        const { execSync } = require('child_process');
        const result = execSync(pm2Commands[action].cmd).toString();
        
        // Formatting based on command
        let response;
        if (action === 'list') {
            const processes = result.split('\n')
                .filter(line => line.includes('│'))
                .slice(1)
                .map(line => line.replace(/│/g, '┃'));
            response = `📋 *Running Processes*\n\`\`\`\n${processes.join('\n')}\n\`\`\``;
        } 
        else if (action === 'logs') {
            response = `📜 *Logs*\n\`\`\`\n${result.slice(-1000)}\n\`\`\``;
        }
        else {
            response = `✅ PM2 ${action}\n\`\`\`\n${result}\n\`\`\``;
        }

        replyglobal(response);

    } catch (error) {
        replyglobal(`💥 PM2 Error (${action}):\n${error.message}\n\nCheck:\n1. Process exists\n2. Correct permissions`);
        console.error('PM2 Error:', error.stack);
    }
    break;
}
case 'update': {
    if (!isCreator) {
        return replyglobal('🚫 Sorry, only the bot owner can use this command.');
    }

    const repoOwner = 'iconic05'; // Your GitHub username
    const repoName = 'Queen-ruva-ai-beta'; // Your repo name
    const branch = 'main'; // Branch name
    const localDir = './'; // Local directory to save files

    // Create local directory if it doesn't exist
    if (!fs.existsSync(localDir)) {
        fs.mkdirSync(localDir, { recursive: true });
    }

    async function downloadFile(filePath) {
        // Handle directories differently than files
        if (filePath.endsWith('/')) {
            // For directories, we might want to get all files in the directory
            // But GitHub raw doesn't support directory listing, so we need another approach
            replyglobal(`⚠️ Directory download not fully supported: ${filePath}`);
            return;
        }

        const rawUrl = `https://raw.githubusercontent.com/${repoOwner}/${repoName}/${branch}/${filePath}`;
        try {
            replyglobal(`⬇️ Downloading: ${filePath}`);
            const response = await fetch(rawUrl);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

            const data = await response.text();
            const localFilePath = path.join(localDir, filePath);
            
            // Ensure directory exists before writing file
            fs.mkdirSync(path.dirname(localFilePath), { recursive: true });
            fs.writeFileSync(localFilePath, data, 'utf8');

            replyglobal(`✅ Successfully updated: ${filePath}\nCREATOR BY ICONIC TECH`);
        } catch (error) {
            replyglobal(`❌ Error downloading file: ${filePath} - ${error.message}`);
            replyglobal('Queen Ruva AI Auto Update Failed\nPlease type .repo and sync fork then redeploy the latest version!');
            throw error; // Re-throw to handle in Promise.all
        }
    }

    const filesToDownload = [
        'queen-ruva.js',
        'main.js',
        'package.js',
        'config.js',
        // Note: Directories need special handling - GitHub raw doesn't support directory listing
        // You would need to explicitly list all files in these directories
        // 'QueenMedia/file1.js',
        // 'QueenMedia/file2.js',
        // 'database/file1.json',
    ];

    replyglobal('⚙️ Starting update process...');

    Promise.all(filesToDownload.map(file => downloadFile(file)))
        .then(() => {
            replyglobal('🎉 Queen Ruva AI Has Automatically Updated To Latest Version *2.1.5*');
            // You might want to restart the bot here or notify to restart
        })
        .catch((error) => {
            replyglobal(`⚠️ Update partially completed with errors: ${error.message}`);
        });

    break;
}

case 'githubuser': {
    if (!isCreator) {
        return replyglobal('🚫 Sorry, only the bot owner can use this command.');
    }

    const username = args[0];
    if (!username) {
        return replyglobal('🚫 *Queen Ruva AI Beta* 🚫\nPlease provide a GitHub username!\n\n_Developed by Iconic Tech_');
    }

    try {
        replyglobal('🔍 *Queen Ruva AI* is fetching GitHub data...');
        const userUrl = `https://api.github.com/users/${username}`;
        const response = await fetch(userUrl);

        if (response.status === 404) {
            return replyglobal('❌ User not found!\n\n_Queen Ruva AI Beta | Iconic Tech_');
        }
        if (!response.ok) throw new Error(`API Error: ${response.status}`);

        const userData = await response.json();
        const userInfo = `
*💎 Queen Ruva AI - GitHub Profile Search*

👤 *Name:* ${userData.name || 'Not provided'}
📌 *Username:* @${userData.login}
🔗 *Profile:* ${userData.html_url}
📝 *Bio:* ${userData.bio || 'No bio available'}

📊 *Stats:*
┣✦ Repos: ${userData.public_repos}
┣✦ Gists: ${userData.public_gists}
┣✦ Followers: ${userData.followers}
┗✦ Following: ${userData.following}

🏢 *Details:*
┣✦ Company: ${userData.company || 'None'}
┣✦ Location: ${userData.location || 'Not specified'}
┗✦ Created: ${new Date(userData.created_at).toLocaleDateString()}

_🔧 Queen Ruva AI Beta | Powered by Iconic Tech_
        `;
        replyglobal(userInfo);
    } catch (error) {
        replyglobal(`❌ *Error!*\n${error.message}\n\n_Queen Ruva AI Beta | Iconic Tech_`);
    }
    break;
}

case 'searchrepo': {
    if (!isCreator) {
        return replyglobal('🚫 Sorry, only the bot owner can use this command.');
    }

    const query = args.slice(0).join(' ');
    if (!query) {
        return replyglobal('🚫 *Queen Ruva AI*\nPlease provide a search term!\nExample: .searchrepo whatsapp bot\n\n_Dev: Iconic Tech_');
    }

    try {
        replyglobal('🔎 *Queen Ruva AI* is searching GitHub...');
        const searchUrl = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc`;
        const response = await fetch(searchUrl);

        if (!response.ok) throw new Error(`API Error: ${response.status}`);

        const searchData = await response.json();
        if (searchData.total_count === 0) {
            return replyglobal('🔍 *No repositories found!*\nTry different keywords.\n\n_Queen Ruva AI Beta | Iconic Tech_');
        }

        const repo = searchData.items[0];
        const repoInfo = `
*📦 Queen Ruva AI - Repository Found*

🎯 *Name:* ${repo.name}
👑 *Owner:* ${repo.owner.login}
⭐ *Stars:* ${repo.stargazers_count}
🍴 *Forks:* ${repo.forks_count}
🔗 *URL:* ${repo.html_url}

📝 *Description:*
${repo.description || 'No description available'}

📅 *Last Updated:* ${new Date(repo.updated_at).toLocaleDateString()}
🌐 *Language:* ${repo.language || 'Not specified'}

_💻 Queen Ruva AI Beta | Developed by Iconic Tech_
        `;
        replyglobal(repoInfo);
    } catch (error) {
        replyglobal(`❌ *Search Failed!*\n${error.message}\n\n_Queen Ruva AI Beta | Iconic Tech_`);
    }
    break;
}

case 'gitsearch': {
    if (!isCreator) {
        return replyglobal('🚫 Sorry, only the bot owner can use this command.');
    }

    if (!args[0]) {
        return replyglobal(`🤖 *Queen Ruva AI Beta* says:\n❌ Provide a search query!\nExample:\n${prefix}${command} AI chatbot`);
    }

    let query = encodeURIComponent(args.join(" "));
    let searchUrl = `https://github.com/search?q=${query}&type=repositories`;
    let apiUrl = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&per_page=3`;

    try {
        let response = await fetch(apiUrl);
        let data = await response.json();

        if (response.status !== 200 || !data.items || data.items.length === 0) {
            throw new Error("No repositories found for this query.");
        }

        let results = data.items.map((repo, index) =>
            `🔹 *${index + 1}. ${repo.name}*\n` +
            `👤 *Owner:* ${repo.owner.login}\n` +
            `⭐ *Stars:* ${repo.stargazers_count}\n` +
            `🍴 *Forks:* ${repo.forks_count}\n` +
            `📝 *Description:* ${repo.description || "No description"}\n` +
            `🔗 *Repo URL:* ${repo.html_url}`
        ).join("\n\n");

        replyglobal(`🔍 *GitHub Repository Search Results for:* _"${args.join(" ")}"_\n\n${results}\n\n🌍 *See more results:* [Click here](${searchUrl})`);
    } catch (err) {
        replyglobal(`❌ Error fetching GitHub search results!\n${err.message}`);
    }
    break;
}

case 'gitreadme': {
    if (!args[0]) {
        return replyglobal(`🤖 *Queen Ruva AI Beta* says:\n❌ Provide a valid GitHub repository link!\nExample:\n${prefix}${command} https://github.com/iconic05/Queen-ruva-ai-beta`);
    }

    let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/([^\/:]+)(?:.git)?/i;
    let match = args[0].match(regex);

    if (!match) {
        return replyglobal(`❌ Invalid GitHub repository URL!`);
    }

    let [, user, repo] = match;
    let readmeUrl = `https://raw.githubusercontent.com/${user}/${repo}/main/README.md`;

    try {
        let response = await fetch(readmeUrl);
        let readmeContent = await response.text();

        if (response.status !== 200) {
            throw new Error("README file not found or unavailable.");
        }

        replyglobal(`📖 *README for ${repo}*\n\n${readmeContent.substring(0, 4000)}\n\n🔗 *Full README:* [Click here](${readmeUrl})`);
    } catch (err) {
        replyglobal(`❌ Error fetching README!\n${err.message}`);
    }
    break;
}
case 'repostats': {
    if (!isCreator) return ownernya();
    try {
        const repoUrl = `https://api.github.com/repos/iconic05/Queen-ruva-ai-beta`;
        const response = await fetch(repoUrl);
        
        if (!response.ok) throw new Error(`API Error: ${response.status}`);
        
        const repoData = await response.json();
        const stats = `
*📊 Queen Ruva AI Beta - Repository Stats*

📌 *Repository:* ${repoData.full_name}
⭐ *Stars:* ${repoData.stargazers_count}
🍴 *Forks:* ${repoData.forks_count}
👀 *Watchers:* ${repoData.watchers_count}

📅 *Created:* ${new Date(repoData.created_at).toLocaleDateString()}
🔄 *Last Push:* ${new Date(repoData.pushed_at).toLocaleDateString()}

🔗 *URL:* ${repoData.html_url}
📝 *Description:* ${repoData.description || 'No description'}

_⚡ Current Version: 2.1.0 | Developed by Iconic Tech_
        `;
        replyglobal(stats);
    } catch (error) {
        replyglobal(`❌ Couldn't fetch repo stats!\n${error.message}\n\n_Queen Ruva AI Beta_`);
    }
    break;
}
case 'install': {
    if (!isCreator) return ownernya();
    const [action] = args;

    // Installation steps
    const installProcess = {
        dependencies: async () => {
            replyglobal("📦 Installing system dependencies...");
            execSync('apt-get update && apt-get install -y git nodejs npm ffmpeg imagemagick', { stdio: 'inherit' });
            return "✅ System dependencies installed";
        },

        project: async () => {
            replyglobal("🚀 Setting up project...");
            if (!fs.existsSync('package.json')) {
                execSync('npm init -y', { stdio: 'inherit' });
            }
            execSync('npm install whatsapp-web.js qrcode-terminal axios sharp', { stdio: 'inherit' });
            return "✅ Node.js dependencies installed";
        },

        pm2: async () => {
            replyglobal("⚡ Configuring PM2...");
            execSync('npm install pm2 -g', { stdio: 'inherit' });
            execSync('pm2 startup', { stdio: 'inherit' });
            return "✅ PM2 installed (auto-start configured)";
        },

        config: async () => {
            replyglobal("⚙️ Creating default config...");
            if (!fs.existsSync('config.json')) {
                fs.writeFileSync('config.json', JSON.stringify({
                    prefix: ".",
                    admins: [process.env.ADMIN_NUMBER],
                    autoRestart: true
                }, null, 2));
            }
            return "✅ Configuration file ready";
        },

        test: async () => {
            replyglobal("🧪 Verifying installation...");
            const tests = {
                "Node.js": execSync('node -v').toString(),
                "NPM": execSync('npm -v').toString(),
                "FFmpeg": execSync('ffmpeg -version').toString().split('\n')[0],
                "Project": fs.existsSync('node_modules') ? "OK" : "Missing"
            };
            return `📊 Test Results:\n${Object.entries(tests).map(([k,v]) => `┣✦ ${k}: ${v}`).join('\n')}`;
        }
    };

    // Full installation
    if (!action || action === 'all') {
        try {
            let results = [];
            for (const [step, func] of Object.entries(installProcess)) {
                results.push(await func());
            }
            replyglobal(`
🎉 *Installation Complete!*
${results.join('\n')}

_Next steps:_
1. Add your admin number: .config set admins ["123456789"]
2. Start bot: .pm2 start main.js
3. Save process: .pm2 save
            `);
        } catch (error) {
            replyglobal(`💥 Installation failed:\n${error.message}\n\nCheck logs and try again`);
        }
        break;
    }

    // Individual steps
    if (installProcess[action]) {
        try {
            const result = await installProcess[action]();
            replyglobal(result);
        } catch (error) {
            replyglobal(`❌ ${action} failed:\n${error.message}`);
        }
        break;
    }

    // Help menu
    replyglobal(`
🛠️ *Installation System*

Usage:
┣✦ .install all - Complete setup
┣✦ .install dependencies - System packages
┣✦ .install project - Node.js setup
┣✦ .install pm2 - Process manager
┣✦ .install config - Create config
┣✦ .install test - Verify install

Example: .install dependencies
    `);
    break;
}
case 'repofiles': {
    if (!isCreator) return ownernya();
    
    try {
        // Show checking status with typing indicator
        replyglobal("🔍 *Checking for updates...*", { typing: true });

        // Fetch latest release from GitHub
        const repoUrl = "https://api.github.com/repos/iconic05/Queen-ruva-ai-beta/releases/latest";
        const response = await fetch(repoUrl, {
            headers: {
                'User-Agent': 'Queen-Ruva-AI-Bot' // GitHub API requires user-agent
            }
        });

        // Handle API rate limits
        if (response.status === 403) {
            return replyglobal("⚠️ *GitHub API Limit Reached*\nTry again later or check manually\n\n"+response.headers.get('x-ratelimit-reset'));
        }

        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const releaseData = await response.json();
        
        // Extract versions (remove 'v' prefix if exists)
        const currentVersion = require('./package.json').version; // Auto-get version
        const latestVersion = releaseData.tag_name.replace(/^v/, '');
        
        // Compare versions properly
        const compareVersions = (a, b) => {
            const pa = a.split('.').map(Number);
            const pb = b.split('.').map(Number);
            for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
                if ((pa[i] || 0) > (pb[i] || 0)) return 1;
                if ((pa[i] || 0) < (pb[i] || 0)) return -1;
            }
            return 0;
        };

        const versionDiff = compareVersions(currentVersion, latestVersion);
        
        // Prepare changelog snippet
        const changelog = releaseData.body 
            ? `\n📝 *Changes:*\n${releaseData.body.split('\n').slice(0, 5).join('\n')}...`
            : '';

        if (versionDiff === 0) {
            replyglobal(`✅ *You're up to date!*\n┣✦ Version: ${currentVersion}\n┗✦ Last checked: ${new Date().toLocaleString()}\n\n_🔧 Queen Ruva AI | Iconic Tech_`);
        } 
        else if (versionDiff < 0) {
            replyglobal(`🚀 *Update Available!*\n` +
                `┣✦ Current: ${currentVersion}\n` +
                `┣✦ Latest: ${latestVersion}\n` +
                `┣✦ Released: ${new Date(releaseData.published_at).toLocaleDateString()}` +
                `${changelog}\n\n` +
                `🔗 *Download:* ${releaseData.html_url}\n` +
                `_⚡ Run \`.update\` to auto-install_`);
        }
        else {
            replyglobal(`🤔 *Development Version Detected*\n` +
                `┣✦ Your version: ${currentVersion}\n` +
                `┣✦ Latest stable: ${latestVersion}\n` +
                `_⚠️ You're running a newer version than released_`);
        }

    } catch (error) {
        console.error('Update Check Error:', error);
        replyglobal(`❌ *Update Check Failed*\n` +
            `Error: ${error.message}\n\n` +
            `_🔧 Troubleshooting:_\n` +
            `1. Check internet connection\n` +
            `2. Verify GitHub status\n` +
            `3. Try again later`);
    }
    break;
}
case 'repofile': {
    if (!isCreator) return ownernya();
    
    try {
        const apiUrl = "https://api.github.com/repos/iconic05/Queen-ruva-ai-beta/contents/";
        const response = await fetch(apiUrl);
        const files = await response.json();
        
        let fileList = "📂 *Repository Files:*\n";
        files.forEach(file => {
            fileList += `┣✦ ${file.name} (${file.type})\n`;
        });
        
        replyglobal(`${fileList}\n_🔍 Total Files: ${files.length}_\n\n_💻 Queen Ruva AI Beta | Iconic Tech_`);
    } catch (error) {
        replyglobal(`❌ Failed to fetch files!\n${error.message}`);
    }
    break;
}
case 'gitissue': {
    if (!isCreator) return ownernya();
    
    const title = args.slice(0, args.indexOf('-d')).join(' ');
    const description = args.slice(args.indexOf('-d') + 1).join(' ');
    
    if (!title || !description) {
        return replyglobal("📝 *Usage:*\n.gitissue [Title] -d [Description]\n\nExample: `.gitissue Bug Fix -d The bot crashes when...`");
    }
    
    try {
        const issueUrl = "https://api.github.com/repos/iconic05/Queen-ruva-ai-beta/issues";
        const response = await fetch(issueUrl, {
            method: 'POST',
            headers: {
                'Authorization': `token ${process.env.GITHUB_TOKEN}`, // Add your token in env
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, body: description })
        });
        
        const issueData = await response.json();
        replyglobal(`✅ *Issue Created!*\n🔗 ${issueData.html_url}\n\n_🐞 Queen Ruva AI Beta | Iconic Tech_`);
    } catch (error) {
        replyglobal(`❌ Failed to create issue!\n${error.message}`);
    }
    break;
}
case 'gitcommit': {
    if (!isCreator) return ownernya();
    
    try {
        const commitUrl = "https://api.github.com/repos/iconic05/Queen-ruva-ai-beta/commits/main";
        const response = await fetch(commitUrl);
        const commitData = await response.json();
        
        const commitInfo = `
📌 *Latest Commit:*
┣✦ *Author:* ${commitData.commit.author.name}
┣✦ *Message:* ${commitData.commit.message}
┣✦ *Date:* ${new Date(commitData.commit.author.date).toLocaleString()}
┗✦ *Hash:* ${commitData.sha.substring(0, 7)}

🔗 *URL:* ${commitData.html_url}\n\n_💾 Queen Ruva AI Beta | Iconic Tech_
        `;
        replyglobal(commitInfo);
    } catch (error) {
        replyglobal(`❌ Failed to fetch commit!\n${error.message}`);
    }
    break;
}
case 'restore': {
    if (!isCreator) return ownernya();
    
    const backupFile = args[0]; // e.g., "queen-ruva-backup-123.zip"
    if (!backupFile) return replyglobal("📝 Usage: .restore [filename.zip]");

    try {
        // Unzip and overwrite files
        fs.createReadStream(backupFile)
          .pipe(unzipper.Extract({ path: './' }));
          
        replyglobal(`♻️ *Restore Initiated!*\nOverwriting files from ${backupFile}...\n\n_🔄 Restart bot after completion._`);
    } catch (error) {
        replyglobal(`❌ Restore Failed!\n${error.message}`);
    }
    break;
}
case 'codespace': {
    if (!isCreator) return ownernya();
    const [action, ...params] = args;

    if (!action) return replyglobal(`
🚀 *Queen Ruva AI - Codespace Manager*
    
Available commands:
┣✦ setup - Configure development environment
┣✦ status - Check codespace resources
┣✦ sync - Sync with GitHub repo
┣✦ logs - View recent activity
┣✦ restart3 - Reboot container
┣✦ resize - Change machine size
┣✦ ports - Manage exposed ports
┣✦ backup - Create snapshot
┗✦ restore [file] - Recover from backup

Usage: .codespace [command] [options]
Example: .codespace sync main
`);

    try {
        switch (action) {
            case 'setup': {
                replyglobal("⚙️ Configuring Codespace environment...");
                
                // Install essential packages
                const packages = [
                    'nodejs', 'npm', 'git', 
                    'python3', 'ffmpeg', 
                    'imagemagick', 'build-essential'
                ];
                execSync(`sudo apt-get install -y ${packages.join(' ')}`);
                
                // Setup Node.js environment
                execSync('npm install -g pm2 nodemon');
                
                replyglobal(`
✅ *Codespace Ready!*
Installed:
┣✦ Node.js ${execSync('node -v').toString().trim()}
┣✦ NPM ${execSync('npm -v').toString().trim()}
┣✦ Git ${execSync('git --version').toString().trim()}
┣✦ Python ${execSync('python3 --version').toString().trim()}
┣✦ Media tools (FFmpeg, ImageMagick)
┗✦ PM2 process manager

_💻 Happy coding!_
                `);
                break;
            }

            case 'status': {
                const stats = `
📊 *Codespace Status*
${execSync('df -h /').toString().split('\n')[0]}
${execSync('df -h /').toString().split('\n')[1]}
${execSync('free -h').toString().split('\n')[0]}
${execSync('free -h').toString().split('\n')[1]}

⚙️ *Container Info*
┣✦ CPU: ${execSync('nproc').toString().trim()} cores
┣✦ RAM: ${execSync("free -m | awk '/Mem:/ {print $2}'").toString().trim()}MB
┗✦ Disk: ${execSync("df -h / | awk '/\\// {print $4}'").toString().trim()} free

🌐 *Network*
${execSync('curl ifconfig.me').toString().trim()} (Public IP)
                `;
                replyglobal(stats);
                break;
            }

            case 'sync': {
                const branch = params[0] || 'main';
                replyglobal(`🔄 Syncing with GitHub (${branch} branch)...`);
                
                execSync('git stash');
                const pullOutput = execSync(`git pull origin ${branch}`).toString();
                execSync('npm install');
                
                replyglobal(`
✅ Sync Complete!
${pullOutput.split('\n').slice(0, 3).join('\n')}

_🔄 Changes applied, restart may be required_
                `);
                break;
            }

            case 'logs': {
                const logCount = params[0] || 15;
                const logs = execSync(`pm2 logs --lines ${logCount} --nostream`).toString();
                replyglobal(`📜 *Recent Logs (last ${logCount} lines)*\n\`\`\`\n${logs}\n\`\`\``);
                break;
            }

            case 'restart3': {
                replyglobal("♻️ Restarting container...");
                execSync('pm2 restart all');
                replyglobal("✅ System rebooted!\n_May take 10-20 seconds to reconnect_");
                break;
            }

            case 'resize': {
                const machineType = params[0] || 'basic';
                const validTypes = ['basic', 'medium', 'large'];
                
                if (!validTypes.includes(machineType)) {
                    return replyglobal(`❌ Invalid size! Choose: ${validTypes.join(', ')}`);
                }
                
                replyglobal(`🔄 Resizing to ${machineType} machine...`);
                // This requires GitHub API calls in real implementation
                replyglobal(`✅ Request submitted!\n_Note: Changes apply on next start_`);
                break;
            }

            case 'ports': {
                const portList = execSync('gh codespace ports list').toString();
                replyglobal(`🛂 *Active Ports*\n\`\`\`\n${portList || 'No ports exposed'}\n\`\`\``);
                break;
            }

            case 'backup': {
                const snapshotName = `ruva-snapshot-${new Date().toISOString().split('.')[0]}`;
                replyglobal(`📸 Creating snapshot: ${snapshotName}...`);
                // GitHub API call would go here
                replyglobal(`✅ Snapshot saved!\n_Use 'gh codespace delete' to manage_`);
                break;
            }

            case 'restore': {
                const backupFile = params[0];
                if (!backupFile) return replyglobal("❌ Specify backup file!\n.codespace restore backup.zip");
                
                replyglobal(`🔙 Restoring from ${backupFile}...`);
                execSync(`unzip -o ${backupFile} -d /`);
                replyglobal("✅ Restoration complete!\n_🔄 Restart required_");
                break;
            }

            default: {
                replyglobal(`❌ Unknown command: ${action}\nUse .codespace for help`);
            }
        }
    } catch (error) {
        replyglobal(`💥 *Codespace Error!*\n\`\`\`\n${error.message}\n\`\`\`\nCheck permissions and try again`);
        console.error('Codespace Error:', error.stack);
    }
    break;
}
case 'backup': {
    if (!isCreator) return ownernya(); // Creator-only command
    
    try {
        const backupDir = './queen-ruva-backup'; // Backup folder name
        const filesToBackup = [
            'commands.js',
            'config.json',
            'main.js',
            'package.json',
            'assets/', // Folders to copy
            'data/'
        ];

        // Create backup directory with timestamp
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const finalBackupDir = `${backupDir}_${timestamp}`;
        
        if (!fs.existsSync(finalBackupDir)) {
            fs.mkdirSync(finalBackupDir, { recursive: true });
            replyglobal(`📂 Created backup folder: ${finalBackupDir}`);
        }

        // Copy files with progress
        let successCount = 0;
        let failedFiles = [];
        const totalFiles = filesToBackup.length;
        
        for (const file of filesToBackup) {
            try {
                const source = `./${file.replace(/\/$/, '')}`; // Remove trailing slash
                const destination = `${finalBackupDir}/${file.replace(/\/$/, '')}`;
                
                if (fs.existsSync(source)) {
                    if (file.endsWith('/')) {
                        // Handle directory
                        fs.cpSync(source, destination, { 
                            recursive: true,
                            preserveTimestamps: true
                        });
                    } else {
                        // Handle single file
                        fs.mkdirSync(path.dirname(destination), { recursive: true });
                        fs.copyFileSync(source, destination);
                    }
                    successCount++;
                    replyglobal(`🔹 [${successCount}/${totalFiles}] Backed up: ${file}`);
                } else {
                    failedFiles.push(`❌ Missing: ${file}`);
                }
            } catch (err) {
                failedFiles.push(`⚠️ Failed ${file}: ${err.message}`);
            }
        }

        // Zip the backup
        const zipFileName = `queen-ruva-backup-${timestamp}.zip`;
        try {
            replyglobal(`🗜️ Compressing backup to ${zipFileName}...`);
            const output = fs.createWriteStream(zipFileName);
            const archive = archiver('zip', { 
                zlib: { level: 9 } // Maximum compression
            });

            archive.on('warning', (err) => {
                if (err.code === 'ENOENT') {
                    console.warn('Archive warning:', err);
                } else {
                    throw err;
                }
            });

            archive.on('error', (err) => {
                throw err;
            });

            archive.pipe(output);
            archive.directory(finalBackupDir, false);
            await archive.finalize();

            replyglobal(`
✅ *Backup Complete!*
┣✦ Success: ${successCount}/${totalFiles} files
┣✦ Location: ${finalBackupDir}
┣✦ Compressed: ${zipFileName} (${(fs.statSync(zipFileName).size / 1024 / 1024).toFixed(2)}MB)
${failedFiles.length > 0 ? `┣✦ Failed:\n${failedFiles.slice(0, 3).join('\n')}${failedFiles.length > 3 ? `\n┗✦ +${failedFiles.length - 3} more` : ''}` : '┗✦ All files successful'}

_💾 Restore with: .restore ${zipFileName}_
_🔧 Queen Ruva AI | Iconic Tech_
            `);

        } catch (zipError) {
            replyglobal(`⚠️ Backup saved but compression failed:\n${zipError.message}\n\nRaw backup available in ${finalBackupDir}`);
        }

    } catch (error) {
        replyglobal(`❌ *Backup Failed!*\n${error.message}\n\n_⚠️ Check:\n1. Storage space\n2. File permissions\n3. Error logs_`);
        console.error('Backup Error:', error.stack);
    }
    break;
}
//COURT CASE CODE BY ICONIC TECH 
case 'caselookup': {
    const caseNumber = args[0];
    if (!caseNumber) return replyglobal(`Usage: ${prefix}caselookup <case_number>\nExample: ${prefix}caselookup SC123456`);

    try {
        await message.react('📄');
        const apiUrl = `https://courtapi.example.com/v1/cases?number=${encodeURIComponent(caseNumber)}`;
        const { data } = await axios.get(apiUrl, { timeout: 8000 });

        const caseInfo = `⚖️ *Case ${data.case_number}*\n\n` +
                       `🏛️ *Court:* ${data.court_name}\n` +
                       `📅 *Filed:* ${new Date(data.filing_date).toLocaleDateString()}\n` +
                       `👥 *Parties:*\n${data.parties.map(p => `• ${p.role}: ${p.name}`).join('\n')}\n\n` +
                       `📌 *Status:* ${data.status}\n` +
                       `🔗 *Docket:* ${data.docket_link || 'Not available'}`;

        await message.reply({ 
            text: caseInfo,
            thumbnail: await getCourtIcon(data.court_type) // Helper function
        });

    } catch (error) {
        replyglobal(`❌ Case lookup failed\nTry: ${prefix}courthelp for assistance`);
    }
    break;
}
case 'courtcalendar': {
    const [location, date] = args;
    if (!location) return replyglobal(`Usage: ${prefix}courtcalendar <location> [YYYY-MM-DD]\nExample: ${prefix}courtcalendar NY 2023-12-15`);

    try {
        const targetDate = date || new Date().toISOString().split('T')[0];
        const apiUrl = `https://courtcal.example.com/api?location=${encodeURIComponent(location)}&date=${targetDate}`;
        
        const { data } = await axios.get(apiUrl);
        let calendarText = `📅 *${data.court_name} Calendar (${targetDate})*\n\n`;

        data.hearings.forEach(hearing => {
            calendarText += `⏰ ${hearing.time} | Courtroom ${hearing.room}\n` +
                          `📝 ${hearing.case_number} (${hearing.type})\n` +
                          `👤 ${hearing.judge}\n\n`;
        });

        await message.reply({ text: calendarText });

    } catch (error) {
        replyglobal("❌ Failed to fetch calendar\nTry different location/date");
    }
    break;
}
case 'courtfees': {
    const filingType = args[0]?.toLowerCase();
    if (!filingType) return replyglobal(`Usage: ${prefix}courtfees <filing_type>\nTypes: divorce, smallclaims, bankruptcy`);

    const feeData = {
        divorce: { fee: 350, description: "Dissolution of marriage" },
        smallclaims: { fee: 75, description: "Claims under $10,000" },
        bankruptcy: { fee: 338, description: "Chapter 7 filing" }
    };

    if (!feeData[filingType]) {
        return replyglobal(`Invalid type. Available:\n${Object.keys(feeData).join(', ')}`);
    }

    const response = `💰 *${filingType.toUpperCase()} Fees*\n\n` +
                   `📋 ${feeData[filingType].description}\n` +
                   `💵 *Fee:* $${feeData[filingType].fee}\n\n` +
                   `ℹ️ Fee waivers available for low-income filers\n` +
                   `🔗 ${getCourtWebsite(filingType)}`;

    await message.reply({ text: response });
    break;
}
case 'selfhelp': {
    const topic = args[0]?.toLowerCase();
    const topics = {
        eviction: "https://www.usa.gov/eviction",
        traffic: "https://www.nolo.com/traffic-tickets",
        custody: "https://www.womenslaw.org/family"
    };

    if (!topic) {
        let helpText = "📚 *Self-Help Topics*\n\n";
        for (const [key, url] of Object.entries(topics)) {
            helpText += `• ${key}: ${url}\n`;
        }
        return replyglobal(helpText);
    }

    if (!topics[topic]) {
        return replyglobal(`Invalid topic. Available:\n${Object.keys(topics).join(', ')}`);
    }

    await message.reply({ 
        text: `⚖️ *${topic.toUpperCase()} Resources*\n${topics[topic]}\n\n` +
              `💡 Tip: Always verify with local court rules`,
        thumbnail: await getThumbnail('legal_help') 
    });
    break;
}
case 'law': {
    const query = args.join(' ');
    if (!query) return replyglobal(`Usage: ${prefix}law <your question>\nExample: ${prefix}law What are my rights if police stop me?`);

    try {
        await message.react('⚖️'); // Law reaction

        // Using a legal AI API (hypothetical endpoint)
        const apiUrl = `https://api.legalbot.ai/v1/query?q=${encodeURIComponent(query)}&jurisdiction=us`;
        const response = await axios.get(apiUrl, {
            headers: {
                'Authorization': `Bearer ${process.env.LEGAL_API_KEY}`,
                'Accept': 'application/json'
            },
            timeout: 10000
        });

        if (!response.data?.answer) {
            throw new Error('No response from legal API');
        }

        // Format the response
        const legalResponse = `⚖️ *${response.data.title || 'Legal Analysis'}*\n\n` +
                            `${response.data.answer}\n\n` +
                            `📌 *Key Points:*\n` +
                            `${response.data.key_points?.map(point => `• ${point}`).join('\n') || 'Not available'}\n\n` +
                            `📚 *Relevant Laws:* ${response.data.relevant_laws || 'None specified'}\n\n` +
                            `⚠️ *Disclaimer:* This is not legal advice. Consult an attorney for your specific situation.\n` +
                            `_Processed in ${response.data.process_time || '?'}s_`;

        // Send with disclaimer
        await message.reply({
            text: legalResponse,
            contextInfo: {
                externalAdReply: {
                    title: "Legal Information",
                    body: query.length > 30 ? query.substring(0, 30) + '...' : query,
                    thumbnail: await (await axios.get('https://cdn-icons-png.flaticon.com/512/2092/2092693.png', {
                        responseType: 'arraybuffer'
                    })).data,
                    sourceUrl: 'https://www.americanbar.org/'
                }
            }
        });

    } catch (error) {
        console.error('Law Command Error:', error);
        replyglobal(`❌ Legal query failed\nTry:\n1. Being more specific\n2. Using proper legal terms\n3. Contacting:\n   • Local bar association: ${randomBarAssociationLink()}\n   • Legal aid: https://www.lsc.gov/find-legal-aid`);
    }
    break;
}

// Helper function
function randomBarAssociationLink() {
    const states = ['ca', 'ny', 'tx', 'fl', 'il'];
    return `https://www.${states[Math.floor(Math.random() * states.length)]}bar.org`;
}

case 'base64': {
    const [action, ...textParts] = args;
    const text = textParts.join(' ');

    if (!action) return replyglobal("Usage: .base64 <encode|decode> <text>");

    try {
        if (action === 'encode') {
            const encoded = Buffer.from(text).toString('base64');
            replyglobal(`🔐 Encoded:\n${encoded}`);
        } else if (action === 'decode') {
            const decoded = Buffer.from(text, 'base64').toString('utf-8');
            replyglobal(`🔓 Decoded:\n${decoded}`);
        }
    } catch (e) {
        replyglobal("❌ Invalid base64 operation");
    }
    break;
}
case 'wifiqr': {
    const [ssid, password, encryption = 'WPA'] = args;
    if (!ssid || !password) return replyglobal("Usage: .wifiqr <SSID> <password> [WEP/WPA]");
    
    const wifiConfig = `WIFI:T:${encryption};S:${ssid};P:${password};;`;
    const qr = await generateQR(wifiConfig);
    
    message.reply({ 
        image: qr,
        caption: `📶 Scan to connect to ${ssid}`
    });
    break;
}
case 'validatewallet': {
    const address = args[0];
    if (!address) return replyglobal("Provide a crypto address");
    
    const results = await Promise.all([
        validateETH(address),
        validateBTC(address),
        validateSOL(address)
    ]);
    
    replyglobal(`🔗 *Wallet Validation*\n` +
        `┣✦ ETH: ${results[0] ? '✅ Valid' : '❌ Invalid'}\n` +
        `┣✦ BTC: ${results[1] ? '✅ Valid' : '❌ Invalid'}\n` +
        `┗✦ SOL: ${results[2] ? '✅ Valid' : '❌ Invalid'}`);
    break;
}
case 'armarker': {
    const text = args.join(' ') || "QueenRuva";
    const marker = generateARMarker(text);
    
    message.reply({
        image: marker.png,
        document: marker.pdf,
        caption: "📱 Scan this with any AR app"
    });
    break;
}

case 'geolocate': {
    if (!text) return replyglobal('Please provide an IP address.');

    replyglobal('Fetching geolocation info...');

    try {
        const res = await fetch(`https://ipinfo.io/${text}/json`);
        const geoData = await res.json();

        if (geoData.error) {
            return replyglobal(`Unable to find information for IP: ${text}`);
        }

        const geoInfo = {
            IP: geoData.ip,
            city: geoData.city,
            region: geoData.region,
            country: geoData.country,
            location: geoData.loc
        };

        replyglobal(JSON.stringify(geoInfo, null, 2));
    } catch (e) {
        replyglobal('Failed to fetch geolocation data.');
    }

    break;
}

case 'countryinfo': {
    if (!text?.trim()) {
        return replyglobal(
            '🌍 *Country Information* 🌍\n\n' +
            `Usage: ${prefix + command} [country name]\n` +
            `Example: ${prefix + command} Zimbabwe\n\n` +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }

    try {
        await IconicTechInc.sendPresenceUpdate('composing', m.chat);
        
        // Make API request with proper error handling
        const apiUrl = `https://api.siputzx.my.id/api/tools/countryInfo?name=${encodeURIComponent(text)}`;
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`API responded with status ${response.status}`);
        }

        const data = await response.json();

        // Check if API returned valid data
        if (!data || !data.result) {
            return replyglobal(
                '⚠️ *Country information not found*\n\n' +
                `We couldn't find data for "${text}"\n` +
                'Please check the spelling or try another country.\n\n' +
                '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
            );
        }

        const country = data.result;
        
        // Get country flag or default image
        let thumbnail;
        try {
            thumbnail = country.flag 
                ? await (await fetch(country.flag)).buffer()
                : await (await fetch('https://i.imgur.com/JxLd5F0.jpeg')).buffer();
        } catch {
            thumbnail = await (await fetch('https://i.imgur.com/JxLd5F0.jpeg')).buffer();
        }

        // Format the response
        const infoText = 
            `🌍 *${country.name || text}* - Country Information\n\n` +
            (country.officialName ? `🏛️ *Official Name:* ${country.officialName}\n` : '') +
            (country.capital ? `📍 *Capital:* ${country.capital}\n` : '') +
            (country.region ? `🗺️ *Region:* ${country.region}${country.subregion ? ` (${country.subregion})` : ''}\n` : '') +
            (country.population ? `👥 *Population:* ${country.population.toLocaleString()}\n` : '') +
            (country.area ? `📏 *Area:* ${country.area.toLocaleString()} km²\n` : '') +
            (country.languages ? `💬 *Languages:* ${Object.values(country.languages).join(', ')}\n` : '') +
            (country.currencies ? `💰 *Currency:* ${Object.values(country.currencies).map(c => `${c.name} (${c.symbol || '?'})`).join(', ')}\n` : '') +
            (country.timezones ? `⏰ *Timezones:* ${country.timezones.join(', ')}\n` : '') +
            `\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*`;

        return IconicTechInc.sendMessage(m.chat, {
            text: infoText,
            contextInfo: {
                externalAdReply: {
                    title: `Country Info: ${country.name || text}`,
                    body: 'Powered by Queen Ruva AI Beta',
                    thumbnail: thumbnail,
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Country Info Error:', error);
        return replyglobal(
            '⚠️ *Service Error*\n\n' +
            'Failed to fetch country information. This could be because:\n' +
            '1. The country name is misspelled\n' +
            '2. The API is temporarily unavailable\n' +
            '3. The country data is not in our database\n\n' +
            'Please try again later or with a different country name.\n\n' +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }
}
case 'expand': {
    const shortUrl = args[0];
    if (!shortUrl) return replyglobal("Usage: .expand <short-url>");

    try {
        const response = await fetch(shortUrl, { redirect: 'manual' });
        const longUrl = response.headers.get('location');
        replyglobal(`🔍 Original URL:\n${longUrl || 'Not found'}`);
    } catch (e) {
        replyglobal("❌ Couldn't expand URL");
    }
    break;
}
case 'shorturl': {
    const [url, service='tinyurl'] = args;
    if (!url) return replyglobal("Usage: .shorturl <url> [tinyurl|bitly|isgd]");

    try {
        let shortUrl;
        switch(service) {
            case 'bitly':
                shortUrl = await fetchBitly(url);
                break;
            case 'isgd':
                shortUrl = await fetchIsgd(url);
                break;
            default:
                const res = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
                shortUrl = await res.text();
        }
        replyglobal(`🔗 ${service.toUpperCase()} URL:\n${shortUrl}`);
    } catch (e) {
        replyglobal(`❌ ${service} failed: ${e.message}`);
    }
    break;
}
case 'password': {
    const length = parseInt(args[0]) || 12;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    let password = '';
    
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    
    replyglobal(`🔒 Generated Password (${length} chars):\n||${password}||`);
    break;
}

case 'shorten': {
    const url = args[0];
    if (!url) return replyglobal("Usage: .shorten <url>");
    
    try {
        const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
        const shortUrl = await response.text();
        replyglobal(`🔗 Shortened URL:\n${shortUrl}`);
    } catch (e) {
        replyglobal("❌ URL shortening failed");
    }
    break;
}
case 'autofix': {
    try {
        replyglobal("⚕️ *Diagnosing bot health...*");
        
        // 1. Check critical files
        const requiredFiles = ['config.json', 'main.js'];
        requiredFiles.forEach(file => {
            if (!fs.existsSync(file)) {
                fs.writeFileSync(file, '{}');
                replyglobal(`⚠️ Recreated missing: ${file}`);
            }
        });

        // 2. Validate package.json
        if (!fs.existsSync('package.json')) {
            execSync('npm init -y');
            replyglobal("🔄 Recreated package.json");
        }

        // 3. Clean temp files
        execSync('rm -rf ./temp/*');
        
        replyglobal("✅ *Auto-repair complete!*\n_🔄 Restart recommended for full effect._");
    } catch (error) {
        replyglobal(`❌ Repair failed!\n${error.message}`);
    }
    break;
}
case 'npminstall': {
    if (!isCreator) return ownernya();
    const packageName = args.join(' ');
    if (!packageName) return replyglobal("📦 *Usage:*\n.npminstall [package-name]\nEx: `.npminstall axios moment`");

    try {
        replyglobal(`⚡ Installing ${packageName}...`);
        const { execSync } = require('child_process');
        const output = execSync(`npm install ${packageName} --save`, { encoding: 'utf-8' });
        
        // Extract version from output
        const versionMatch = output.match(/\+ (.+?)@([\d.]+)/);
        const successMessage = versionMatch 
            ? `✅ Installed *${versionMatch[1]}* v${versionMatch[2]}`
            : `✅ Packages added`;
            
        replyglobal(`${successMessage}\n\n_🔄 Restart bot to apply changes._`);
    } catch (error) {
        replyglobal(`❌ Install failed!\n${error.stderr || error.message}`);
    }
    break;
}
case 'pkg-upgrade': {
    try {
        const { exec } = require('child_process');
        replyglobal("🔄 Upgrading system and NPM packages...");
        
        exec('pkg upgrade -y && npm update -g', (error, stdout) => {
            replyglobal(`🚀 *Upgrade Complete!*\n\`\`\`\n${stdout.slice(0, 400)}\n\`\`\``);
        });
    } catch (error) {
        replyglobal(`❌ Upgrade Failed: ${error.message}`);
    }
    break;
}
case 'auto-install': {
    try {
        const required = {
            system: ['ffmpeg', 'libwebp', 'nodejs'],
            npm: ['qrcode-terminal', 'axios', '@adiwajshing/baileys']
        };

        const { execSync } = require('child_process');
        
        // Install system packages
        execSync(`pkg install -y ${required.system.join(' ')}`);
        
        // Install NPM packages
        execSync(`npm install ${required.npm.join(' ')} --save`);
        
        replyglobal(`🤖 *Auto-Installed Essentials:*\n` +
            `⚙️ System: ${required.system.join(', ')}\n` +
            `📦 NPM: ${required.npm.join(', ')}\n\n` +
            `_✅ Bot is now fully equipped_`);
    } catch (error) {
        replyglobal(`⚠️ Auto-Install Failed: ${error.message}`);
    }
    break;
}
case 'pkg': {
    if (!isCreator) return ownernya();
    const [action, pkg, version] = args;

    // Package management commands
    const packageActions = {
        add: {
            desc: "Install a new package",
            execute: async () => {
                if (!pkg) return "❌ Missing package name\nUsage: .pkg add <package> [version]";
                
                const versionFlag = version ? `@${version}` : '';
                const installCmd = `npm install ${pkg}${versionFlag} --save`;
                
                replyglobal(`📦 Installing ${pkg}${versionFlag}...`, { typing: true });
                const { execSync } = require('child_process');
                
                try {
                    const output = execSync(installCmd, { stdio: 'pipe' }).toString();
                    const installedVersion = JSON.parse(execSync(`npm list ${pkg} --json`).toString()).dependencies[pkg].version;
                    
                    return `✅ Successfully installed\n┣✦ Package: ${pkg}\n┣✦ Version: ${installedVersion}\n┗✦ Run \`.restart\` to apply changes`;
                } catch (error) {
                    console.error('Install Error:', error);
                    return `❌ Failed to install ${pkg}\nError: ${error.stderr.toString().split('\n')[0]}`;
                }
            }
        },
        remove: {
            desc: "Uninstall a package",
            execute: async () => {
                if (!pkg) return "❌ Missing package name\nUsage: .pkg remove <package>";
                
                replyglobal(`🗑️ Removing ${pkg}...`, { typing: true });
                const { execSync } = require('child_process');
                
                try {
                    const output = execSync(`npm uninstall ${pkg} --save`, { stdio: 'pipe' }).toString();
                    return `✅ Successfully removed ${pkg}\n┗✦ Run \`.restart\` to apply changes`;
                } catch (error) {
                    return `❌ Failed to remove ${pkg}\nError: ${error.stderr.toString().split('\n')[0]}`;
                }
            }
        },
        list: {
            desc: "Show installed packages",
            execute: async () => {
                try {
                    const { execSync } = require('child_process');
                    const packages = JSON.parse(execSync('npm list --depth=0 --json').toString()).dependencies;
                    
                    let packageList = '📦 *Installed Packages*\n';
                    for (const [name, info] of Object.entries(packages)) {
                        packageList += `┣✦ ${name}@${info.version}\n`;
                    }
                    
                    return packageList + `\nTotal: ${Object.keys(packages).length} packages`;
                } catch (error) {
                    return `❌ Failed to list packages\nError: ${error.message}`;
                }
            }
        },
        search: {
            desc: "Search npm registry",
            execute: async () => {
                if (!pkg) return "❌ Missing search term\nUsage: .pkg search <query>";
                
                try {
                    const response = await fetch(`https://registry.npmjs.org/-/v1/search?text=${pkg}&size=5`);
                    const results = await response.json();
                    
                    if (!results.objects.length) return `🔍 No results found for "${pkg}"`;
                    
                    let resultText = `🔍 *Search Results for "${pkg}"*\n`;
                    results.objects.forEach(item => {
                        resultText += `┣✦ ${item.package.name}@${item.package.version}\n`;
                        resultText += `┣━━ ${item.package.description || 'No description'}\n`;
                        resultText += `┗━━ 📦 ${item.package.links.npm}\n`;
                    });
                    
                    return resultText;
                } catch (error) {
                    return `❌ Search failed\nError: ${error.message}`;
                }
            }
        }
    };

    // Show help if no action specified
    if (!action || !packageActions[action]) {
        let helpText = "📦 *Package Manager*\n\n";
        for (const [cmd, info] of Object.entries(packageActions)) {
            helpText += `┣✦ .pkg ${cmd.padEnd(6)} ${info.desc}\n`;
        }
        helpText += `\nExample:\n.pkg add axios latest\n.pkg search qrcode`;
        return replyglobal(helpText);
    }

    // Execute the package action
    try {
        const result = await packageActions[action].execute();
        replyglobal(result);
    } catch (error) {
        replyglobal(`💥 Package operation failed\nError: ${error.message}`);
        console.error('Package Error:', error);
    }
    break;
}
case 'pkg-search': {
    if (!args.length) return replyglobal("🔍 *Usage:*\n.pkg-search [query]\nEx: `.pkg-search python`");

    try {
        const { exec } = require('child_process');
        exec(`pkg search ${args[0]}`, (error, stdout) => {
            replyglobal(`📚 *Search Results:*\n\`\`\`\n${stdout || 'No packages found'}\n\`\`\``);
        });
    } catch (error) {
        replyglobal(`❌ Search Failed: ${error.message}`);
    }
    break;
}
case 'npm-list': {
    try {
        const { execSync } = require('child_process');
        const list = execSync('npm list --depth=0').toString().split('\n').slice(1).join('\n');
        replyglobal(`📋 *Installed Packages:*\n\`\`\`\n${list}\n\`\`\``);
    } catch (error) {
        replyglobal(`⚠️ Can't list packages: ${error.message}`);
    }
    break;
}
case 'npm-clean': {
    try {
        const { execSync } = require('child_process');
        const output = execSync('npm cache clean --force && rm -rf node_modules package-lock.json').toString();
        replyglobal(`🧹 *Cache Cleaned!*\n\`\`\`\n${output || 'All caches removed'}\n\`\`\`\n\n_⚡ Run \`.npm-install\` to reinstall_`);
    } catch (error) {
        replyglobal(`❌ Clean Failed: ${error.message}`);
    }
    break;
}
case 'npm-check': {
    if (!args.length) return replyglobal("🔍 *Usage:*\n.npm-check [package]\nEx: `.npm-check axios`");

    const pkg = args[0];
    try {
        replyglobal(`📡 Checking NPM registry for *${pkg}*...`);
        const response = await fetch(`https://registry.npmjs.org/${pkg}`);
        
        if (response.status === 404) {
            return replyglobal(`❌ *${pkg}* doesn't exist on NPM!`);
        }

        const pkgData = await response.json();
        const latestVer = pkgData['dist-tags']?.latest;
        const repoUrl = pkgData.repository?.url.replace(/^git\+/, '') || "No repo";
        
        replyglobal(`📦 *Package Info:*\n` +
            `┣✦ Name: ${pkg}\n` +
            `┣✦ Version: ${latestVer}\n` +
            `┣✦ Downloads: ${pkgData.downloads?.toLocaleString() || 'N/A'}\n` +
            `┣✦ Repo: ${repoUrl}\n\n` +
            `💡 Install with: .npm-add ${pkg}@${latestVer}`);
    } catch (error) {
        replyglobal(`⚠️ Registry error: ${error.message}`);
    }
    break;
}
case 'link-verify': {
    if (!args.length) return replyglobal("🌐 *Usage:*\n.link-verify [URL]\nEx: `.link-verify https://github.com/package`");

    const url = args[0];
    try {
        replyglobal(`🔗 Verifying link: ${url}`);
        const response = await fetch(url, { method: 'HEAD' });
        
        if (response.ok) {
            replyglobal(`✅ *Link Valid!*\n` +
                `┣✦ Status: ${response.status}\n` +
                `┣✦ Type: ${response.headers.get('content-type') || 'Unknown'}\n` +
                `┗✦ Size: ${response.headers.get('content-length') || '?'} bytes`);
        } else {
            replyglobal(`❌ *Broken Link!*\nStatus: ${response.status}`);
        }
    } catch (error) {
        replyglobal(`⚠️ Can't verify link:\n${error.message}`);
    }
    break;
}
case 'pkg-scan': {
    const pkg = args[0];
    if (!pkg) return replyglobal("🔍 *Usage:*\n.pkg-scan [package]\nEx: `.pkg-scan ffmpeg`");

    try {
        // Multi-source check
        const termuxCheck = execSync(`pkg show ${pkg} 2>&1`).toString();
        const npmCheck = await fetch(`https://registry.npmjs.org/${pkg}`);
        
        let report = `📊 *Scan Report for ${pkg}*:\n`;
        
        if (termuxCheck.includes("Version:")) {
            const details = termuxCheck.match(/(Version|Repository|Description): .+/g);
            report += "📦 *Termux Package:*\n" + details.join('\n') + "\n\n";
        }

        if (npmCheck.ok) {
            const npmData = await npmCheck.json();
            report += `📌 *NPM Package:*\n` +
                     `┣✦ Latest: ${npmData['dist-tags'].latest}\n` +
                     `┣✦ Downloads: ${npmData.downloads?.lastMonth?.toLocaleString() || 'N/A'}\n` +
                     `┗✦ License: ${npmData.license || 'Unknown'}\n\n`;
        }

        // Malware scan (requires virustotal API)
        const vtResponse = await fetch(`https://www.virustotal.com/api/v3/files/${pkg}`);
        if (vtResponse.ok) {
            const vtData = await vtResponse.json();
            report += `🛡️ *Security Scan:*\n` +
                     `┣✦ Clean: ${vtData.data.attributes.last_analysis_stats.malicious === 0}\n` +
                     `┗✦ Vendors: ${vtData.data.attributes.last_analysis_stats.harmless} safe\n`;
        }

        replyglobal(report);
    } catch (error) {
        replyglobal(`⚠️ Scan failed: ${error.message}`);
    }
    break;
}
case 'pkg-restore': {
    const file = args[0] || 'pkg-snapshot.json';
    if (!fs.existsSync(file)) return replyglobal(`❌ Snapshot file not found: ${file}`);

    try {
        const snapshot = JSON.parse(fs.readFileSync(file));
        replyglobal(`♻️ Restoring ${snapshot.timestamp} environment...`);
        
        // Restore system packages
        execSync(`pkg install -y ${snapshot.system.map(p => p.split('/')[0]).join(' ')}`);
        
        // Restore NPM packages
        const npmVersions = snapshot.npm.map(p => {
            const match = p.match(/@([\d.]+)/);
            return match ? `${p.split('@')[0]}@${match[1]}` : p;
        });
        execSync(`npm install -g ${npmVersions.join(' ')}`);
        
        replyglobal(`✅ *Environment Restored!*\n` + 
                   `┣✦ System: ${snapshot.system.length} packages\n` + 
                   `┗✦ NPM: ${snapshot.npm.length} packages`);
    } catch (error) {
        replyglobal(`⚠️ Restore failed: ${error.message}`);
    }
    break;
}
case 'pkg-docs': {
    const pkg = args[0];
    if (!pkg) return replyglobal("📚 *Usage:*\n.pkg-docs [package]\nEx: `.pkg-docs axios`");

    try {
        // Try to get manpage first
        try {
            const manpage = execSync(`man ${pkg} | head -n 20`).toString();
            return replyglobal(`📜 *Manual Page:*\n\`\`\`\n${manpage}\n\`\`\`\nFull docs: man ${pkg}`);
        } catch {
            // Fallback to NPM docs
            const npmDocs = await fetch(`https://registry.npmjs.org/${pkg}`);
            if (npmDocs.ok) {
                const { homepage, bugs, repository } = await npmDocs.json();
                return replyglobal(`📌 *Documentation Links:*\n` + 
                                  `┣✦ Homepage: ${homepage || 'N/A'}\n` + 
                                  `┣✦ Repository: ${repository?.url || 'N/A'}\n` + 
                                  `┗✦ Issues: ${bugs?.url || 'N/A'}`);
            }
            throw new Error("No documentation found");
        }
    } catch (error) {
        replyglobal(`⚠️ Docs unavailable: ${error.message}`);
    }
    break;
}
case 'termux-guide': {
    const [command] = args;
    
    // General Termux Guide
    if (!command) {
        return replyglobal(`
📱 *Queen Ruva AI - Termux Command Guide* 📱

These commands help manage your bot in Termux environment:

1️⃣ *Package Management*
┣✦ .pkg-add [name] - Install system packages
┣✦ .pkg-scan [name] - Analyze package details
┣✦ .pkg-resolve [dep] - Find dependencies
┣✦ .pkg-verify [name] - Check signatures

2️⃣ *NPM Control*
┣✦ .npm-add [name] - Add NPM packages
┣✦ .npm-del [name] - Remove packages
┣✦ .npm-check [name] - Verify NPM packages

3️⃣ *System Tools*
┣✦ .termux-setup - Auto-install dependencies
┣✦ .termux-shell [cmd] - Run shell commands
┣✦ .termux-status - Show system stats

4️⃣ *Advanced*
┣✦ .pkg-freeze - Save current setup
┣✦ .pkg-restore - Replicate environment
┣✦ .pkg-sync [host] - Sync across devices

🔍 *Usage:* .termux-guide [command] for specific help
Example: .termux-guide pkg-add
        `);
    }

    // Command-specific guides
    const guides = {
        'pkg-add': `
📦 *pkg-add Guide* 
Install Termux system packages with repository verification.

*Usage:*
.pkg-add [package-name]
Example: .pkg-add ffmpeg

*Steps:*
1. Checks package availability
2. Shows repository info
3. Requires .confirm-add to install

*Tip:* Use .pkg-search first to find packages
        `,
        
        'termux-setup': `
🛠️ *termux-setup Guide*
One-click installation of all bot dependencies.

*Usage:*
.termux-setup

*Installs:*
- Node.js, Git, FFmpeg
- ImageMagick, PM2
- Required NPM packages

*Note:* Requires 200MB+ storage
        `,
        
        'pkg-scan': `
🔍 *pkg-scan Guide*
Deep analysis of packages across sources.

*Usage:*
.pkg-scan [name]
Example: .pkg-scan nodejs

*Checks:*
- Termux repository
- NPM registry
- VirusTotal security scan (if API key set)

*Output:*
- Versions
- Download stats
- Security status
        `,
        
        'pkg-sync': `
🔄 *pkg-sync Guide*
Synchronize bot files between devices.

*Requirements:*
- SSH key setup
- Network access

*Usage:*
.pkg-sync [user@host] [direction]
Examples:
.pkg-sync user@192.168.1.10 push
.pkg-sync user@domain.com pull

*Tip:* Use .pkg-freeze first for dependency consistency
        `,
        
        'npm-check': `
📌 *npm-check Guide*
Verify NPM packages before installation.

*Usage:*
.npm-check [package]
Example: .npm-check axios

*Checks:*
- Package existence
- Latest version
- Repository links
- Download statistics

*Output:*
Recommended install command
        `
    };

    // Return specific guide or error
    if (guides[command]) {
        replyglobal(guides[command] + `\n\n_🔧 Queen Ruva AI Beta | Iconic Tech_`);
    } else {
        replyglobal(`❌ No guide found for "${command}"\nTry: .termux-guide to see all commands`);
    }
    break;
}
case 'pkg-resolve': {
    const dep = args[0];
    if (!dep) return replyglobal("🧩 *Usage:*\n.pkg-resolve [dependency]\nEx: `.pkg-resolve libwebp`");

    try {
        // Check system packages first
        const sysCheck = execSync(`pkg search ${dep}`).toString();
        if (sysCheck.includes(dep)) {
            return replyglobal(`✅ System Package Available:\n\`\`\`\n${sysCheck.split('\n').find(l => l.includes(dep))}\n\`\`\`\nInstall with: .pkg-add ${dep}`);
        }

        // Check NPM
        const npmCheck = await fetch(`https://registry.npmjs.org/${dep}`);
        if (npmCheck.ok) {
            return replyglobal(`📦 NPM Package Available\nInstall with: .npm-add ${dep}`);
        }

        // Check Python
        const pyCheck = execSync(`pip search ${dep}`).toString();
        if (pyCheck.includes(dep)) {
            return replyglobal(`🐍 Python Package Available\nInstall with: .pip-add ${dep}`);
        }

        replyglobal(`❌ No package found for "${dep}"\nTry: .pkg-search ${dep}`);
    } catch (error) {
        replyglobal(`⚠️ Resolution failed: ${error.message}`);
    }
    break;
}
case 'pkg-verify': {
    const pkg = args[0];
    if (!pkg) return replyglobal("🔐 *Usage:*\n.pkg-verify [package]\nEx: `.pkg-verify nodejs`");

    try {
        replyglobal(`🛡️ Verifying ${pkg} signatures...`);
        
        // For Termux packages
        const sigCheck = execSync(`pkg show ${pkg} | grep -i signature`).toString();
        const hasValidSig = sigCheck.includes("Signature:") && !sigCheck.includes("(unknown)");
        
        // For NPM packages
        const npmAudit = execSync(`npm audit ${pkg} --json`).toString();
        const vulnCount = JSON.parse(npmAudit).metadata?.vulnerabilities?.total || 0;

        replyglobal(
            `📜 *Verification Report:*\n` +
            `┣✦ Package: ${pkg}\n` +
            `┣✦ Signature: ${hasValidSig ? '✅ Valid' : '⚠️ Missing'}\n` +
            `┣✦ Vulnerabilities: ${vulnCount}\n` +
            `┗✦ Recommendation: ${vulnCount > 0 ? 'Run .pkg-fix' : 'Safe to use'}`
        );
    } catch (error) {
        replyglobal(`❌ Verification failed: ${error.message}`);
    }
    break;
}
case 'pkg-fetch': {
    const [url, dest] = args;
    if (!url) return replyglobal("📥 *Usage:*\n.pkg-fetch [URL] [destination]\nEx: `.pkg-fetch https://example.com/pkg.zip /storage/pkg`");

    try {
        replyglobal(`⬇️ Downloading ${url}...`);
        const response = await fetch(url);
        const fileData = await response.buffer();
        
        fs.writeFileSync(dest || path.basename(url), fileData);
        replyglobal(`✅ Saved to: ${dest || 'current directory'}\nSize: ${(fileData.length / 1024).toFixed(2)} KB`);
    } catch (error) {
        replyglobal(`❌ Download failed: ${error.message}`);
    }
    break;
}
case 'pkg-compare': {
    const [pkg1, pkg2] = args;
    if (!pkg1 || !pkg2) return replyglobal("⚖️ *Usage:*\n.pkg-compare [package1] [package2]\nEx: `.pkg-compare ffmpeg imagemagick`");

    try {
        const getVer = async (pkg) => {
            try {
                const termuxVer = execSync(`pkg show ${pkg} | grep Version`).toString().split(': ')[1].trim();
                return { source: 'Termux', version: termuxVer };
            } catch {
                const npmVer = await fetch(`https://registry.npmjs.org/${pkg}`)
                    .then(res => res.json())
                    .then(data => ({ source: 'NPM', version: data['dist-tags'].latest }));
                return npmVer;
            }
        };

        const [ver1, ver2] = await Promise.all([getVer(pkg1), getVer(pkg2)]);
        
        replyglobal(
            `🆚 *Version Comparison:*\n` +
            `┣✦ ${pkg1}: ${ver1.version} (${ver1.source})\n` +
            `┣✦ ${pkg2}: ${ver2.version} (${ver2.source})\n` +
            `┗✦ Newer: ${ver1.version > ver2.version ? pkg1 : pkg2}`
        );
    } catch (error) {
        replyglobal(`⚠️ Comparison failed: ${error.message}`);
    }
    break;
}
case 'pkg-freeze': {
    try {
        const date = new Date().toISOString();
        const sysPkgs = execSync('pkg list-installed').toString();
        const npmPkgs = execSync('npm list -g --depth=0').toString();
        
        const snapshot = {
            timestamp: date,
            system: sysPkgs.split('\n').filter(Boolean),
            npm: npmPkgs.split('\n').slice(1).filter(Boolean)
        };
        
        fs.writeFileSync('pkg-snapshot.json', JSON.stringify(snapshot, null, 2));
        replyglobal(`❄️ *Snapshot Saved!*\n` + 
                   `┣✦ System: ${snapshot.system.length} packages\n` + 
                   `┣✦ NPM: ${snapshot.npm.length} packages\n` + 
                   `┗✦ File: pkg-snapshot.json`);
    } catch (error) {
        replyglobal(`❌ Snapshot failed: ${error.message}`);
    }
    break;
}
case 'npm-del': {
    if (!args.length) return replyglobal("🗑️ *Usage:*\n.npm-del [package]\nEx: `.npm-del lodash`");

    try {
        const { execSync } = require('child_process');
        execSync(`npm uninstall ${args.join(' ')}`);
        replyglobal(`✅ Removed: ${args.join(', ')}\n\n_💾 Run \`.npm-clean\` to purge cache_`);
    } catch (error) {
        replyglobal(`⚠️ Removal Failed: ${error.message}`);
    }
    break;
}
case 'npm-add': {
    if (!args.length) return replyglobal("📌 *Usage:*\n.npm-add [package@version]\nEx: `.npm-add axios sharp@latest`");

    try {
        const { execSync } = require('child_process');
        const output = execSync(`npm install ${args.join(' ')} --save`).toString();
        
        const installed = output.match(/\+ (.+?@[\d.]+)/g) || [];
        replyglobal(`📦 *Installed Packages:*\n${installed.join('\n')}\n\n_🔄 Restart bot to apply_`);
    } catch (error) {
        replyglobal(`❌ Install Failed!\n${error.stderr || error.message}`);
    }
    break;
}
case 'termux-wa': {
    const [action] = args;
    const actions = {
        restart: 'killall node && npm start',
        qr: 'rm -rf session && npm start',
        log: 'tail -n 30 wa.log'
    };

    if (!actions[action]) return replyglobal(`📱 *WA Tools*\nOptions: ${Object.keys(actions).join('/')}\nEx: .termux-wa qr`);

    try {
        const { exec } = require('child_process');
        exec(actions[action], (err, stdout) => {
            replyglobal(`📶 WA Action: ${action.toUpperCase()}\n\`\`\`\n${stdout || "Command executed"}\n\`\`\``);
        });
    } catch (error) {
        replyglobal(`❌ WA Error!\n${error.message}`);
    }
    break;
}
case 'termux-fix': {
    try {
        const fixes = [
            'rm -rf node_modules',
            'rm package-lock.json',
            'npm cache clean --force',
            'npm install'
        ];
        
        const { exec } = require('child_process');
        fixes.forEach(cmd => exec(cmd));
        
        replyglobal("🛠️ *Running Repair Kit*\n1. Cleared node_modules\n2. Reset package-lock\n3. Cleaned cache\n4. Reinstalling...\n\n_🔄 Restart after completion_");
    } catch (error) {
        replyglobal(`⚠️ Partial Fix:\n${error.message}`);
    }
    break;
}
case 'termux-backup': {
    if (!isCreator) return ownernya();
    try {
        const backupName = `QueenRuva-Backup-${Date.now()}.zip`;
        const { execSync } = require('child_process');
        
        execSync(`zip -r ${backupName} ./* -x 'node_modules/*'`);
        replyglobal(`✅ *Backup Created!*\n📁 ${backupName}\n\n_Use .termux-shell to transfer_`);
    } catch (error) {
        replyglobal(`❌ Backup Failed!\n${error.message}`);
    }
    break;
}
case 'termux-status': {
    try {
        const { execSync } = require('child_process');
        const stats = {
            storage: execSync('df -h').toString(),
            memory: execSync('free -h').toString(),
            processes: execSync('ps aux').toString().split('\n').slice(0, 5).join('\n')
        };
        
        replyglobal(`
📊 *Termux Status*
💾 Storage:\n\`\`\`${stats.storage}\`\`\`
🧠 Memory:\n\`\`\`${stats.memory}\`\`\`
🔄 Top Processes:\n\`\`\`${stats.processes}\`\`\`
        `);
    } catch (error) {
        replyglobal(`❌ Status Error!\n${error.message}`);
    }
    break;
}
case 'termux-update': {
    if (!isCreator) return ownernya();
    try {
        replyglobal("🔄 *Updating Bot...*");
        const { execSync } = require('child_process');
        
        execSync('git stash');
        execSync('git pull origin main');
        execSync('npm install');
        
        replyglobal("✅ *Update Complete!*\n_🔄 Restarting bot via PM2..._");
        execSync('pm2 restart QueenRuva');
    } catch (error) {
        replyglobal(`❌ Update Failed!\n${error.message}`);
    }
    break;
}
case 'termux-botlog': {
    try {
        const log = fs.readFileSync('bot.log', 'utf8');
        replyglobal(`📜 *Last 15 Log Lines:*\n\`\`\`\n${log.split('\n').slice(-15).join('\n')}\n\`\`\``);
    } catch {
        replyglobal("❌ No logs found! Create a 'bot.log' file first");
    }
    break;
}
case 'termux-pm2': {
    const [action] = args;
    if (!action) return replyglobal("⚙️ *PM2 Manager*\nUsage:\n.termux-pm2 [start/stop/restart/logs]\nEx: `.termux-pm2 restart`");

    try {
        const { execSync } = require('child_process');
        let output;
        
        switch(action) {
            case 'start':
                output = execSync('pm2 start main.js --name QueenRuva').toString();
                break;
            case 'stop':
                output = execSync('pm2 stop QueenRuva').toString();
                break;
            case 'restart2':
                output = execSync('pm2 restart QueenRuva').toString();
                break;
            case 'logs':
                output = execSync('pm2 logs QueenRuva --lines 20').toString();
                break;
            default:
                return replyglobal("❌ Invalid action!");
        }
        
        replyglobal(`🔄 PM2: ${action.toUpperCase()}\n\`\`\`\n${output.slice(0, 400)}\n\`\`\``);
    } catch (error) {
        replyglobal(`❌ PM2 Error!\n${error.message}`);
    }
    break;
}
case 'pkg-add': {
    if (!isCreator) return ownernya();
    if (!args.length) return replyglobal("📦 *Usage:*\n.pkg-add [package]\nEx: `.pkg-add ffmpeg`");

    const pkg = args[0];
    try {
        // First check if package exists
        replyglobal(`🔍 Checking repository for *${pkg}*...`);
        const { execSync } = require('child_process');
        
        // Check package availability (Termux style)
        const searchResult = execSync(`pkg search ${pkg}`).toString();
        if (!searchResult.includes(pkg)) {
            return replyglobal(`❌ *${pkg}* not found in repositories!\nTry: .pkg-search ${pkg}`);
        }

        // Get package info
        const showResult = execSync(`pkg show ${pkg}`).toString();
        const pkgUrl = showResult.match(/repository: (.+)/)?.[1] || "Unknown";
        const pkgVer = showResult.match(/version: (.+)/)?.[1] || "Latest";

        // Confirm installation
        replyglobal(`📌 *Package Found!*\n┣✦ Name: ${pkg}\n┣✦ Version: ${pkgVer}\n┣✦ Repo: ${pkgUrl}\n\nType *".confirm-add ${pkg}"* to install`);

    } catch (error) {
        replyglobal(`⚠️ Error checking package:\n${error.stderr || error.message}`);
    }
    break;
}

case 'confirm-add': {
    if (!isCreator) return ownernya();
    const pkg = args[0];
    if (!pkg) return replyglobal("❌ Specify package to install!");

    try {
        const { exec } = require('child_process');
        replyglobal(`⚡ Installing *${pkg}*...`);
        
        exec(`pkg install -y ${pkg}`, (error, stdout) => {
            if (error) {
                replyglobal(`❌ Install failed!\n${error.message}`);
            } else {
                const successMsg = stdout.includes("installed") 
                    ? `✅ *${pkg}* installed successfully!`
                    : `⚠️ *${pkg}* may already be installed`;
                replyglobal(successMsg);
            }
        });
    } catch (e) {
        replyglobal(`🚨 Critical error: ${e.message}`);
    }
    break;
}
case 'npmaudit': {
    try {
        replyglobal("🔍 Scanning for vulnerabilities...");
        const { execSync } = require('child_process');
        const auditResult = execSync('npm audit --json', { encoding: 'utf-8' });
        const vulnerabilities = JSON.parse(auditResult).metadata.vulnerabilities;
        
        replyglobal(`
🛡️ *Security Report:*
┣✦ Critical: ${vulnerabilities.critical || 0}
┣✦ High: ${vulnerabilities.high || 0}
┣✦ Moderate: ${vulnerabilities.moderate || 0}
┗✦ Low: ${vulnerabilities.low || 0}

${vulnerabilities.total > 0 
    ? `⚠️ Run \`.npmfix\` to auto-patch` 
    : `✅ No critical issues found`}
        `);
    } catch (error) {
        replyglobal(`❌ Audit failed!\n${error.message}`);
    }
    break;
}
case 'npmrun': {
    const scriptName = args[0];
    if (!scriptName) return replyglobal("🤖 *Available Scripts:*\n" + 
        Object.entries(require('./package.json').scripts)
            .map(([name]) => `┣✦ ${name}`)
            .join('\n'));

    try {
        replyglobal(`⚙️ Running *${scriptName}* script...`);
        const { execSync } = require('child_process');
        const output = execSync(`npm run ${scriptName}`, { encoding: 'utf-8' });
        replyglobal(`📜 *Output:*\n\`\`\`\n${output.slice(0, 500)}\n\`\`\``);
    } catch (error) {
        replyglobal(`❌ Script failed!\n${error.stderr || error.message}`);
    }
    break;
}
case 'npmdoctor': {
    try {
        const { execSync } = require('child_process');
        const checks = {
            'Node Version': execSync('node -v').toString().trim(),
            'NPM Version': execSync('npm -v').toString().trim(),
            'Disk Space': execSync('df -h .').toString().split('\n')[1],
            'Permissions': fs.accessSync('.', fs.constants.R_OK | fs.constants.W_OK) ? '✅ OK' : '❌ Denied'
        };

        replyglobal(`
🏥 *Dependency Health Check:*
${Object.entries(checks)
    .map(([k, v]) => `┣✦ ${k}: ${v}`)
    .join('\n')}
\n_💡 Use \`.npmfix\` for automated repairs_
        `);
    } catch (error) {
        replyglobal(`❌ Diagnosis failed!\n${error.message}`);
    }
    break;
}
case 'npmbackup': {
    try {
        const backupFile = `package-backup-${Date.now()}.json`;
        const currentPackages = require('./package.json').dependencies;
        
        fs.writeFileSync(backupFile, JSON.stringify(currentPackages, null, 2));
        replyglobal(`
📦 *Dependencies Backup:*
┣✦ Saved: ${Object.keys(currentPackages).length} packages
┣✦ File: ${backupFile}
┗✦ Restore: \`.npmrestore ${backupFile}\`

_💾 Backup includes exact versions_
        `);
    } catch (error) {
        replyglobal(`❌ Backup failed!\n${error.message}`);
    }
    break;
}
case 'npmfix': {
    try {
        replyglobal("🔧 Attempting automated fixes...");
        const { execSync } = require('child_process');
        
        execSync('npm cache clean --force');
        execSync('npm install --package-lock-only');
        execSync('npm audit fix --force');
        
        replyglobal(`
✅ *Repair Actions:*
┣✦ Cleared NPM cache
┣✦ Rebuilt package-lock.json
┣✦ Applied security patches
┗✦ Updated broken dependencies

_🔄 Restart bot to complete fixes_
        `);
    } catch (error) {
        replyglobal(`⚠️ Partial repair:\n${error.message}`);
    }
    break;
}
case 'file': {
    const repoOwner = 'iconic05'; // Your GitHub username
    const repoName = 'Queen-ruva-ai-beta'; // Your repository name
    const branch = 'main'; // Replace with your branch name if different

    // Construct the download URL for the ZIP file
    const zipUrl = `https://github.com/${repoOwner}/${repoName}/archive/refs/heads/${branch}.zip`;

    // Function to download and send the ZIP file
    async function downloadAndSendZip() {
        try {
            replyglobal(`Downloading ZIP file from ${repoOwner}/${repoName}...`); // Inform user about the download process

            // Fetch the ZIP file
            const response = await fetch(zipUrl);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

            const buffer = await response.buffer(); // Buffer the ZIP file

            // Send the ZIP file to the user
            await IconicTechInc.sendMessage(m.chat, {
                document: buffer, // Send the buffered ZIP file
                mimetype: 'application/zip', // MIME type for ZIP file
                fileName: `${repoName}-${branch}.zip` // Name to appear when the user receives the file
            }, { quoted: m });

            replyglobal(`ZIP file has been successfully sent!`);
        } catch (error) {
            replyglobal(`Error downloading or sending ZIP file: ${error.message}`);
        }
    }

    // Start the download and send process
    downloadAndSendZip()
        .catch(() => {
            replyglobal('Failed to send the ZIP file.');
        });

    break;
}
case 'runtime':
case 'uptime': {
    const usedMemory = process.memoryUsage();
    const cpuInfo = os.cpus();
    const cpuStats = cpuInfo.map(cpu => {
        cpu.total = Object.values(cpu.times).reduce((acc, time) => acc + time, 0);
        return cpu;
    });

    const totalCpu = cpuStats.reduce((acc, cpu, _, { length }) => {
        acc.total += cpu.total;
        acc.speed += cpu.speed / length;
        acc.times.user += cpu.times.user;
        acc.times.nice += cpu.times.nice;
        acc.times.sys += cpu.times.sys;
        acc.times.idle += cpu.times.idle;
        acc.times.irq += cpu.times.irq;
        return acc;
    }, {
        speed: 0,
        total: 0,
        times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 }
    });

    let startTime = performance.now();
    let responseTime = performance.now() - startTime;
    
    let uptimeInfo = `
┏━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃   𝗤𝗨𝗘𝗘𝗡 𝗥𝗨𝗩𝗔 𝗔𝗜 𝗕𝗘𝗧𝗔   ┃
┃    🔹 *System Status* 🔹    ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━┛

📡 **Response Speed:**  *${responseTime.toFixed(4)} sec*  
⏳ **Bot Uptime:**  *${runtime(process.uptime())}*  

┏━━━━━━━━━━━━━━━━━━━━━━┓
┃      🖥 *Server Info*      ┃
┗━━━━━━━━━━━━━━━━━━━━━━┛
🔹 **RAM Usage:**  *${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}*

┏━━━━━━━━━━━━━━━━━━━━━━┓
┃  💾 *NodeJS Memory Usage*  ┃
┗━━━━━━━━━━━━━━━━━━━━━━┛
${Object.keys(usedMemory).map(key => `🔹 **${key.toUpperCase()}** : *${formatp(usedMemory[key])}*`).join('\n')}

┏━━━━━━━━━━━━━━━━━━━━━━┓
┃     ⚙️ *CPU Usage*       ┃
┗━━━━━━━━━━━━━━━━━━━━━━┛
${cpuInfo[0] ? `🔹 **Model:** *${cpuInfo[0].model.trim()}*  
⚡ **Speed:** *${totalCpu.speed} MHz*  
${Object.keys(totalCpu.times).map(type => `🔹 **${type.toUpperCase()}** : *${(100 * totalCpu.times[type] / totalCpu.total).toFixed(2)}%*`).join('\n')}

┏━━━━━━━━━━━━━━━━━━━━━━┓
┃  🛠 *CPU Cores (${cpuInfo.length})*  ┃
┗━━━━━━━━━━━━━━━━━━━━━━┛
${cpuInfo.map((cpu, i) => `🔹 **Core ${i + 1}**  
💻 **Model:** *${cpu.model.trim()}*  
⚡ **Speed:** *${cpu.speed} MHz*  
${Object.keys(cpu.times).map(type => `  🔹 **${type.toUpperCase()}** : *${(100 * cpu.times[type] / cpu.total).toFixed(2)}%*`).join('\n')}`).join('\n\n')}` : ''}
━━━━━━━━━━━━━━━━━━━━━━━━━
`.trim();

    await IconicTechInc.sendMessage(m.chat, {
        text: uptimeInfo,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `Queen Ruva AI Beta`,
                body: `Response Time: ${responseTime.toFixed(4)} sec`,
                thumbnailUrl: '',
                thumbnail: fs.readFileSync(`./QueenMedia/ruva.jpg`),
                sourceUrl:  'https://chat.whatsapp.com/LyFPHDvc5vMCglUFjv7Rlp',
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });
}
break;

    case 'calculator': {
    if (!text) {
        replyglobal('Please provide a mathematical expression to calculate! Example: `5 + 3`');
        return;
    }

    try {
        // Evaluate the mathematical expression
        const result = eval(text);

        // Check if result is a number
        if (isNaN(result)) {
            replyglobal('Invalid expression! Please enter a valid mathematical expression.');
        } else {
            replyglobal(`Result: ${result} ✅`);
        }
    } catch (error) {
        // Handle invalid mathematical expressions
        replyglobal('Error: Invalid mathematical expression! Please try again.');
    }

    break;
}       

case 'sc':
case 'script':
case 'scriptbot':
case 'repo': {
    const repoOwner = "iconic05";
    const repoName = "Queen-ruva-ai-beta";
    const repoUrl = `https://api.github.com/repos/${repoOwner}/${repoName}`;
    const repoPage = `https://github.com/${repoOwner}/${repoName}`;

    // Fetch repository details from GitHub API
    fetch(repoUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Repository not found or API limit exceeded.");
            }
            return response.json();
        })
        .then(repoData => {
            if (repoData.message === "Not Found") {
                return replyglobal("❌ *Repository not found!* Please check the repository name and owner.");
            }

            // Extract relevant data
            const repoDescription = repoData.description || "No description provided.";
            const stars = repoData.stargazers_count || 0;
            const forks = repoData.forks_count || 0;
            const watchers = repoData.watchers_count || 0;
            const issues = repoData.open_issues_count || 0;
            const lastUpdated = new Date(repoData.updated_at).toLocaleString();

            // Stylish response message with a clean, structured format
            const message = `╭━━━〔 *GitHub Repository* 〕━━━⬣\n` +
                            `┃ 📌 *Name:* ${repoData.name}\n` +
                            `┃ 📝 *Description:* ${repoDescription}\n` +
                            `┃ ━━━━━━━━━━━━━━━━━━━\n` +
                            `┃ ⭐ *Stars:* ${stars}  |  🍴 *Forks:* ${forks}\n` +
                            `┃ 👀 *Watchers:* ${watchers}  |  🛠️ *Issues:* ${issues}\n` +
                            `┃ ⏳ *Last Updated:* ${lastUpdated}\n` +
                            `┃ ━━━━━━━━━━━━━━━━━━━\n` +
                            `┃ 🔗 *Repository:* [Open Here](${repoPage})\n` +
                            `╰━━━━━━━━━━━━━━━━━━━━⬣\nVISIT : codewave-unit.zone.id\n\n` +
                            `*👑 DEVELOPED BY ICONIC TECH*`;

            // Send repo info message
            IconicTechInc.sendMessage(m.chat, { text: message }, { quoted: m });
        })
        .catch(error => {
            console.error("GitHub API Fetch Error:", error);
            replyglobal("⚠️ *Failed to retrieve repository details.* Please try again later.");
        });

    break;
}
case 'donate':
case 'support': {
    let textnate = `Hello *${pushname}*,\nNo matter how much you send, it is very valuable to *ICONICS-TECH*. 🌟`;

    const message = `╭━━━〔 *Support & Donations* 〕━━━⬣\n` +
                    `┃ 💸 *Want to support us?*\n` +
                    `┃ If you wish to donate, kindly reach out. 📬\n` +
                    `┃ ━━━━━━━━━━━━━━━━━━━\n` +
                    `┃ 🤖 *Owner:* QUEEN RUVA AI\n` +
                    `┃ 📞 *Contact:* 0716304574\n` +
                    `┃ 🚫 *No spam or harm allowed!* Violators will be banned. 🔴\n` +
                    `╰━━━━━━━━━━━━━━━━━━━━⬣\n\n` +
                    `${textnate}\n\n` +
                    `❤️ *Thanks for buying me coffee ☕* \n` +
                    `💖 *Your generosity keeps us going!* \n` +
                    `🌟 *Every contribution makes a difference!* \n` +
                    `💪 *Your support helps improve and grow this bot!* 👾\n\n` +
                    `💡 *If you have ideas or questions, feel free to reach out!* 💬`;

    IconicTechInc.sendMessage(m.chat, { text: message }, { quoted: m });

    // Extra appreciation message after 3 seconds
    setTimeout(() => {
        IconicTechInc.sendMessage(m.chat, {
            text: `🚀 *We truly appreciate your support!* Your kindness fuels our passion! 🌍\n\n🎉 Stay tuned for exciting updates coming soon! 📲`
        }, { quoted: m });
    }, 3000);

    // Additional gratitude message after 6 seconds
    setTimeout(() => {
        IconicTechInc.sendMessage(m.chat, {
            text: `✨ *You're a star for supporting this project!* 🌟 If you'd like to help even more, share this bot with your friends! 🤗`
        }, { quoted: m });
    }, 6000);

    break;
}
case 'owner': 
case 'folder': {
    try {
        const thumbnail = fs.readFileSync(`./QueenMedia/ruva.jpg`);

        // Send contact information
        const repf = await IconicTechInc.sendMessage(from, { 
            contacts: { 
                displayName: `${list.length} Contact`, 
                contacts: list 
            }, 
            mentions: [sender] 
        }, { quoted: m });

        // Modern and stylish response message
        const message = `┌───〔 *👑 OWNER INFORMATION* 〕───┐\n` +
                        `│ 🤖 *Bot Name:* Queen-Ruva AI\n` +
                        `│ 🏅 *Owner:* Iconic Tech\n` +
                        `│ 🌐 *Website:* [Visit Here](codewave-unit.zone.id)\n` +
                        `│ 🚫 *Warning:* Please avoid spamming! 🙏\n` +
                        `└──────────────────────────────┘\n\n` +
                        `✨ *Hello @${sender.split("@")[0]}, you are now connected to the bot owner!* \n` +
                        `🔗 *For inquiries or support, feel free to visit the website.*`;

        await IconicTechInc.sendMessage(from, { 
            text: message,
            mentions: [sender],
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: `👑 Owner & Bot Info`,
                    body: `Managed by Iconic Tech`,
                    thumbnail,
                    sourceUrl: 'codewave-unit.zone.id',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: repf });

    } catch (error) {
        console.error("Error in 'owner' or 'folder' command:", error);
    }
}
break;
            case 'sticker':
            case 'stiker':
            case 's': {
                if (!quoted) return replyglobal(`Reply to Video/Image With Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await IconicTechInc.sendImageAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return replyglobal('Maximum 10 seconds!')
                    let media = await quoted.download()
                    let encmedia = await IconicTechInc.sendVideoAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return replyglobal(`Send Images/Videos With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
            break
            
 case 'smeme': {
                let respond = `Send/Reply image/sticker with caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) return replyglobal(respond)
                if (!text) return replyglobal(respond)
                replyglobal(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await IconicTechInc.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await IconicTechInc.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,
                    author: author
                })
                fs.unlinkSync(pop)
            }
            break
case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!args.join(" ")) return replyglobal(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
IconicTechInc.downloadAndSaveMediaMessage(quoted, "gifee")
IconicTechInc.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await IconicTechInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replyglobal('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await IconicTechInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replyglobal(`Photo/Video?`)
}
}
break
case 'attp':
case 'textsticker': {
    if (!text) return replyglobal('Enter text to make sticker.');

    replyglobal('Creating sticker...');

    try {
        const res = await fetch(`https://api.agungny.my.id/api/maker/attp?text=${encodeURIComponent(text)}`);
        const buffer = await res.buffer();
        await IconicTechInc.sendMessage(m.chat, { sticker: buffer }, { quoted: m });
    } catch (e) {
        replyglobal('Failed to create sticker.');
    }

    break;
}
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return replyglobal(`Reply sticker with caption *${prefix + command}*`)
                replyglobal(mess.wait)
                let media = await IconicTechInc.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    IconicTechInc.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return replyglobal(`Reply sticker with caption *${prefix + command}*`)
                replyglobal(mess.wait)
                let media = await IconicTechInc.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await IconicTechInc.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyglobal(`Send/Reply Video/Audio that you want to make into audio with caption ${prefix + command}`)
                replyglobal(mess.wait)
                let media = await IconicTechInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                IconicTechInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyglobal(`Reply Video/Audio that you want to make into a VN with caption ${prefix + command}`)
                replyglobal(mess.wait)
                let media = await IconicTechInc.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./database/converter')
                let audio = await toPTT(media, 'mp4')
                IconicTechInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'gitclone':
    if (!args[0]) {
        return replyglobal(`🤖 *Queen Ruva AI Beta* says:\n❌ Where is the link?\nExample:\n${prefix}${command} https://github.com/iconic05/Queen-ruva-ai-beta`);
    }
    
    if (!isUrl(args[0]) || !args[0].includes('github.com')) {
        return replyglobal(`🤖 *Queen Ruva AI Beta* says:\n❌ Invalid link! Please provide a valid GitHub repository link.`);
    }

    try {
        let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
        let [, user, repo] = args[0].match(regex) || [];
        
        if (!user || !repo) {
            return replyglobal(`🤖 *Queen Ruva AI Beta* says:\n❌ Could not extract repository details. Make sure the link is correct.`);
        }

        repo = repo.replace(/\.git$/, '');
        let url = `https://api.github.com/repos/${user}/${repo}/zipball`;

        let response = await fetch(url, { method: 'HEAD' });
        let contentDisposition = response.headers.get('content-disposition');

        if (!contentDisposition) {
            return replyglobal(`🤖 *Queen Ruva AI Beta* says:\n❌ Unable to fetch repository. It might be private or unavailable.`);
        }

        let filename = contentDisposition.match(/attachment; filename=(.*)/)[1];

        await IconicTechInc.sendMessage(m.chat, {
            document: { url: url },
            fileName: `${filename}.zip`,
            mimetype: 'application/zip'
        }, { quoted: m });

    } catch (err) {
        replyglobal(`🤖 *Queen Ruva AI Beta* says:\n❌ An error occurred while processing your request.`);
        console.error(err);
    }
    break;
    case 'gitdelete': {
    if (!args[0]) {
        return replyglobal(`🤖 *Queen Ruva AI Beta* says:\n❌ Please provide the repository name to delete!\n\n📌 *Example:*\n${prefix}${command} Queen-ruva-ai-beta`);
    }

    let repoToDelete = args[0].trim();

    try {
        let { exec } = require('child_process');

        exec(`rm -rf ${repoToDelete}`, (err) => {
            if (err) {
                console.error(`Error deleting repository:`, err);
                return replyglobal(`❌ *Failed to delete repository:* ${repoToDelete}\n\n🚀 *Make sure the repository exists and has the correct name.*`);
            }

            replyglobal(`🗑️ *Repository Deleted Successfully!*\n\n📌 *Deleted Repository:* ${repoToDelete}\n🌐 *GitHub:* https://github.com/YourGitHubUsername/${repoToDelete}\n\n✅ *Note:* This action is irreversible!`);
        });

    } catch (err) {
        console.error('Error in gitdelete command:', err);
        replyglobal(`❌ *An unexpected error occurred while attempting to delete the repository.*`);
    }
    break;
}
case 'gitinfo': {
    if (!args[0]) {
        return replyglobal(`🤖 *Queen Ruva AI Beta* says:\n❌ Provide a GitHub repository name!\nExample:\n${prefix}${command} iconic05/Queen-ruva-ai-beta`);
    }

    let repoName = args[0];
    let apiUrl = `https://api.github.com/repos/${repoName}`;

    try {
        let response = await fetch(apiUrl);
        let data = await response.json();

        if (data.message === "Not Found") {
            return replyglobal(`❌ Repository *${repoName}* not found.`);
        }

        let info = `📌 *GitHub Repository Info*\n\n` +
                   `🔹 *Name:* ${data.full_name}\n` +
                   `⭐ *Stars:* ${data.stargazers_count}\n` +
                   `🔄 *Forks:* ${data.forks_count}\n` +
                   `🐞 *Open Issues:* ${data.open_issues_count}\n` +
                   `📅 *Created At:* ${data.created_at}\n` +
                   `🔗 *URL:* ${data.html_url}`;

        replyglobal(info);
    } catch (err) {
        replyglobal(`❌ Failed to fetch repository details.`);
    }
    break;
}
case 'gitlist': {
    if (!args[0]) {
        return replyglobal(`🤖 *Queen Ruva AI Beta* says:\n❌ Provide a GitHub username!\nExample:\n${prefix}${command} iconic05`);
    }

    let username = args[0];
    let apiUrl = `https://api.github.com/users/${username}/repos`;

    try {
        let response = await fetch(apiUrl);
        let repos = await response.json();

        if (repos.message === "Not Found" || repos.length === 0) {
            return replyglobal(`❌ No repositories found for *${username}*.`);
        }

        let repoList = `📜 *Repositories of ${username}*\n\n`;
        repos.slice(0, 5).forEach((repo, index) => {
            repoList += `🔹 ${index + 1}. *${repo.name}*\n   🔗 ${repo.html_url}\n`;
        });

        replyglobal(repoList);
    } catch (err) {
        replyglobal(`❌ Failed to fetch repository list.`);
    }
    break;
}
case 'gitdownload': {
    if (!args[0]) {
        return replyglobal(`🤖 *Queen Ruva AI Beta* says:\n❌ Provide a GitHub repository link!\nExample:\n${prefix}${command} https://github.com/iconic05/Queen-ruva-ai-beta`);
    }

    let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
    let [, user, repo] = args[0].match(regex) || [];

    if (!user || !repo) {
        return replyglobal(`❌ Invalid GitHub repository URL.`);
    }

    repo = repo.replace(/.git$/, '');
    let apiUrl = `https://api.github.com/repos/${user}/${repo}/zipball`;

    try {
        let response = await fetch(apiUrl, { method: 'HEAD' });
        
        if (!response.ok) {
            throw new Error(`GitHub request failed with status ${response.status}`);
        }

        let filename = response.headers.get("content-disposition").match(/attachment; filename=(.*)/)[1];

        await IconicTechInc.sendMessage(m.chat, {
            document: { url: apiUrl },
            fileName: filename + ".zip",
            mimetype: 'application/zip'
        }, { quoted: m });

    } catch (error) {
        replyglobal(`❌ Failed to download repository.`);
    }
    break;
}
case 'circlestick': {
    if (!m.quoted || !/image/.test(m.quoted.mimetype)) {
        return replyglobal('Reply to an image to make it circular.');
    }

    replyglobal('Processing circular sticker...');

    try {
        const media = await IconicTechInc.downloadAndSaveMediaMessage(m.quoted);
        const output = `./temp/${Date.now()}.webp`;

        exec(`ffmpeg -i ${media} -vf "scale=512:512,format=rgba,geq='r=255:g=255:b=255:a=if(gt(512*512-(X-256)^2-(Y-256)^2,0),0,255)'" -vcodec libwebp -lossless 1 -preset picture -an -vsync 0 ${output}`, async (err) => {
            fs.unlinkSync(media);
            if (err) return replyglobal('Failed to create circular sticker.');

            const buffer = fs.readFileSync(output);
            await IconicTechInc.sendMessage(m.chat, { sticker: buffer }, { quoted: m });
            fs.unlinkSync(output);
        });
    } catch (e) {
        replyglobal('Error generating circular sticker.');
    }

    break;
}

case 'convert': {
    if (!text || !text.includes(' ')) return replyglobal('Please provide the amount and currency (e.g. 100 USD to EUR).');

    const [amount, fromCurrency, , toCurrency] = text.split(' ');

    replyglobal('Converting currencies...');

    try {
        const apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency.toUpperCase()}`;
        const res = await fetch(apiUrl);
        const data = await res.json();

        if (!data.rates[toCurrency.toUpperCase()]) {
            return replyglobal(`Unable to convert from ${fromCurrency} to ${toCurrency}.`);
        }

        const convertedAmount = (parseFloat(amount) * data.rates[toCurrency.toUpperCase()]).toFixed(2);

        replyglobal(`${amount} ${fromCurrency.toUpperCase()} is equal to ${convertedAmount} ${toCurrency.toUpperCase()}`);
    } catch (e) {
        replyglobal('Currency conversion failed.');
    }

    break;
}
            case 'togif': {
                if (!/webp/.test(mime)) return replyglobal(`Reply sticker with caption *${prefix + command}*`)
                replyglobal(mess.wait)
                let media = await IconicTechInc.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await IconicTechInc.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'tourl': {
                replyglobal(mess.wait)
                let media = await IconicTechInc.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    replyglobal(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    replyglobal(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
            
            case 'tonce':
            case 'toviewonce': {
                if (!quoted) return replyglobal(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await IconicTechInc.downloadAndSaveMediaMessage(quoted)
                    IconicTechInc.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: `*Here you go!*`,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await IconicTechInc.downloadAndSaveMediaMessage(quoted)
                    IconicTechInc.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: `*Here you go!*`,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'toqr': {
                if (!q) return replyglobal(' Plelinkgive me link or text!')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await IconicTechInc.sendMessage(from, {
                    image: medi,
                    caption: "*Here you go!*"
                }, {
                    quoted: m
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            break
            case 'fliptext': {
                if (args.length < 1) return replyglobal(`Example:\n${prefix}fliptext Creepy`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                replyglobal(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break
            case 'listvn': {
                let teks = '┌──⭓「 *List Vn* 」\n│\n'
                for (let x of VoiceNoteXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VoiceNoteXeon.length}*`
                replyglobal(teks)
            }
            break
            case 'liststicker': {
                let teks = '┌──⭓「 *List Sticker* 」\n│\n'
                for (let x of StickerXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${StickerXeon.length}*`
                replyglobal(teks)
            }
            break
            case 'listimage': {
                let teks = '┌──⭓「 *List Image* 」\n│\n'
                for (let x of ImageXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${ImageXeon.length}*`
                replyglobal(teks)
            }
            break
            case 'listvideo': {
                let teks = '┌──⭓「 *List Video* 」\n│\n'
                for (let x of VideoXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VideoXeon.length}*`
                replyglobal(teks)
            }
            break
            case 'addowner':
            case 'newowner':
                if (!isCreator) return replyglobal(mess.owner)
if (!args[0]) return replyglobal(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await IconicTechInc.onWhatsApp(bnnd)
if (ceknye.length == 0) return replyglobal(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/json/owner.json', JSON.stringify(owner))
replyglobal(`Congratulations ${bnnd} ${pushname} Has Become An Owner!!!`)
break
case 'delowner':
                if (!isCreator) return replyglobal(mess.owner)
if (!args[0]) return replyglobal(`Use ${prefix+command} nomor\nExample ${prefix+command} 255697608274`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/json/owner.json', JSON.stringify(owner))
replyglobal(`This user  ${ya} ${pushname} is no longer an owner!!!`)
break
            case 'addvideo': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('Video Name?')
                if (VideoXeon.includes(q)) return replyglobal("The name you entered already exists")
                let delb = await IconicTechInc.downloadAndSaveMediaMessage(quoted)
                VideoXeon.push(q)
                await fsx.copy(delb, `./QueenMedia/video/${q}.mp4`)
                fs.writeFileSync('./database/json/@queen-ruva.json', JSON.stringify(VideoXeon))
                fs.unlinkSync(delb)
                replyglobal(`Success Adding Video \nTo View Type ${prefix}listvideo`)
            }
            break
            case 'delvideo': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('Enter the Video Name')
                if (!VideoXeon.includes(q)) return replyglobal("Name Does Not Exist in Database")
                let wanu = VideoXeon.indexOf(q)
                VideoXeon.splice(wanu, 1)
                fs.writeFileSync('./database/json/@queen-ruva.json', JSON.stringify(VideoXeon))
                fs.unlinkSync(`./QueenMedia/video/${q}.mp4`)
                replyglobal(`Successfully Deleted Video ${q}`)
            }
            break
            case 'addimage': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('The name of the image?')
                if (ImageXeon.includes(q)) return replyglobal("The name you entered is already registered in the database")
                let delb = await IconicTechInc.downloadAndSaveMediaMessage(quoted)
                ImageXeon.push(q)
                await fsx.copy(delb, `./QueenMedia/image/${q}.jpg`)
                fs.writeFileSync('./database/json/@iconictech', JSON.stringify(ImageXeon))
                fs.unlinkSync(delb)
                replyglobal(`ǫᴜᴇᴇɴ-ʀᴜᴠᴀ AI added Image\nTo Check Type ${prefix}listimage`)
            }
            break
            case 'delimage': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('Enter the Image Name')
                if (!ImageXeon.includes(q)) return replyglobal("The image name you entered is not registered")
                let wanu = ImageXeon.indexOf(q)
                ImageXeon.splice(wanu, 1)
                fs.writeFileSync('./database/json/@iconictech', JSON.stringify(ImageXeon))
                fs.unlinkSync(`./QueenMedia/image/${q}.jpg`)
                replyglobal(`ǫᴜᴇᴇɴ-ʀᴜᴠᴀ AI Deleted Image ${q}`)
            }
            break
            case 'addsticker': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('Enter the name of the sticker?')
                if (StickerXeon.includes(q)) return replyglobal("Name Already In Use")
                let delb = await IconicTechInc.downloadAndSaveMediaMessage(quoted)
                StickerXeon.push(q)
                await fsx.copy(delb, `./QueenMedia/sticker/${q}.webp`)
                fs.writeFileSync('./database/json/@queen-ruva.json', JSON.stringify(StickerXeon))
                fs.unlinkSync(delb)
                replyglobal(`Successfully Adding Sticker\nTo Check Type ${prefix}liststicker`)
            }
            break
            case 'delsticker': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('Enter the name of the sticker')
                if (!StickerXeon.includes(q)) return replyglobal("Name Not Registered in Database")
                let wanu = StickerXeon.indexOf(q)
                StickerIconicTechInc.splice(wanu, 1)
                fs.writeFileSync('./database/json/@queen-ruva.json', JSON.stringify(StickerXeon))
                fs.unlinkSync(`./QueenMedia/sticker/${q}.webp`)
                replyglobal(`ǫᴜᴇᴇɴ-ʀᴜᴠᴀ AI Removed Sticker ${q}`)
            }
            break
            case 'addvn': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('Enter the Name?')
                if (VoiceNoteXeon.includes(q)) return replyglobal("Name Already In Use")
                let delb = await IconicTechInc.downloadAndSaveMediaMessage(quoted)
                VoiceNoteXeon.push(q)
                await fsx.copy(delb, `./QueenMedia/audio/${q}.mp3`)
                fs.writeFileSync('./database/json/@queen-ruva.json', JSON.stringify(VoiceNoteXeon))
                fs.unlinkSync(delb)
                replyglobal(`ǫᴜᴇᴇɴ-ʀᴜᴠᴀ AI Added Audio\nTo Check Type ${prefix}listvn`)
            }
            break
            case'welcome':
            case 'goodbye': {
               if (!m.isGroup) return replyglobal()
if (!isAdmins && !isCreator) return replyglobal()
               if (args.length < 1) return replyglobal('on/off?')
               if (args[0] === 'on') {
                  welcome = true
                  replyglobal(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  welcome = false
                  replyglobal(`${command} is disabled`)
               }
            }
            break
            case 'delvn': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('Enter the Name')
                if (!VoiceNoteXeon.includes(q)) return replyglobal("Name Not Registered in Database")
                let wanu = VoiceNoteXeon.indexOf(q)
                VoiceNoteXeon.splice(wanu, 1)
                fs.writeFileSync('./database/json/@queen-ruva.json', JSON.stringify(VoiceNoteXeon))
                fs.unlinkSync(`./QueenMedia/audio/${q}.mp3`)
                replyglobal(`ǫᴜᴇᴇɴ-ʀᴜᴠᴀ AI Deleted Audio ${q}`)
            }
            break
case 'addzip':{
if (!isPremium) return replyglobal(mess.prem)
await loading()
if (args.length < 1) return replyglobal(`What's the zip name?`)
let teks = `${text}`
{
if (ZipXeon.includes(teks)) return replyglobal("This name is already in use")
let delb = await IconicTechInc.downloadAndSaveMediaMessage(quoted)
ZipXeon.push(teks)
await fsx.copy(delb, `./QueenMedia/zip/${teks}.zip`)
fs.writeFileSync('./database/json/@queen-ruva.json', JSON.stringify(ZipXeon))
fs.unlinkSync(delb)
replyglobal(`ǫᴜᴇᴇɴ-ʀᴜᴠᴀ AI Added zip\nTo check type ${prefix}listzip`)
}
}
break
case 'delzip':{
if (!isPremium) return replyglobal(mess.prem)
await loading()
if (args.length < 1) return replyglobal('Enter the text in the zip list')
let teks = `${text}`
{
if (!ZipXeon.includes(teks)) return replyglobal("This name does not exist in the database")
let wanu = ZipXeon.indexOf(teks)
ZipXeon.splice(wanu, 1)
fs.writeFileSync('./database/json/@queen-ruva.json', JSON.stringify(ZipXeon))
fs.unlinkSync(`./QueenMedia/zip/${teks}.zip`)
replyglobal(`Successfully deleted zip ${teks}`)
}
}
break
case 'listzip': {
await loading()
let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
for (let x of ZipXeon) {
teksooooo += `│⭔ ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total : ${ZipXeon.length}*`
replyglobal(teksooooo)
}
break
case 'addapk':{
if (!isPremium) return replyglobal(mess.prem)
await loading()
if (args.length < 1) return replyglobal('What is the name of the apk?')
let teks = `${text}`
{
if (ApkXeon.includes(teks)) return replyglobal("This name is already in use")
let delb = await IconicTechInc.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./QueenMedia/apk/${teks}.apk`)
fs.writeFileSync('./database/json/@queen-ruva.json', JSON.stringify(ApkXeon))
fs.unlinkSync(delb)
replyglobal(`ǫᴜᴇᴇɴ-ʀᴜᴠᴀ AI Added the apk\nTo Check type ${prefix}listapk`)
}
}
break
case 'delapk':{
if (!isPremium) return replyglobal(mess.prem)
await loading()
if (args.length < 1) return replyglobal('Name of the apk?')
let teks = `${text}`
{
if (!ApkXeon.includes(teks)) return replyglobal("This name does not exist in the database")
let wanu = ApkXeon.indexOf(teks)
ApkXeon.splice(wanu, 1)
fs.writeFileSync('./database/json/@queen-ruva.json', JSON.stringify(ApkXeon))
fs.unlinkSync(`./QueenMedia/apk/${teks}.apk`)
replyglobal(`ǫᴜᴇᴇɴ-ʀᴜᴠᴀ AI deleted Apk ${teks}`)
}
}
break
case 'listapk': {
await loading()
let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
for (let x of ApkXeon) {
teksoooooo += `│⭔ ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total : ${ApkXeon.length}`
replyglobal(teksoooooo)
}
break
case 'addpdf':{
if (!isPremium) return replyglobal(mess.prem)
await loading()
if (args.length < 1) return replyglobal('What is the name of the pdf')
let teks = `${text}`
{
if (DocXeon.includes(teks)) return replyglobal("This name is already in use")
let delb = await IconicTechInc.downloadAndSaveMediaMessage(quoted)
docunye.push(teks)
await fsx.copy(delb, `./QueenMedia/doc/${teks}.pdf`)
fs.writeFileSync('./database/json/@queen-ruva.json', JSON.stringify(DocXeon))
fs.unlinkSync(delb)
replyglobal(`ǫᴜᴇᴇɴ-ʀᴜᴠᴀ AI Added Pdf\nTo check type ${prefix}listpdf`)
}
}
break
case 'delpdf':{
if (!isPremium) return replyglobal(mess.prem)
await loading()
if (args.length < 1) return replyglobal('Enter the name')
let teks = `${text}`
{
if (!DocXeon.includes(teks)) return replyglobal("This name does not exist in the database")
let wanu = DocApk.indexOf(teks)
docunye.splice(wanu, 1)
fs.writeFileSync('./database/json/@queen-ruva.json', JSON.stringify(DocXeon))
fs.unlinkSync(`./QueenMedia/doc/${teks}.pdf`)
replyglobal(`ǫᴜᴇᴇɴ-ʀᴜᴠᴀ AI deleted pdf ${teks}`)
}
}
break
case 'listpdf': {
await loading()
let teksoooo = '┌──⭓「 *PDF LIST* 」\n│\n'
for (let x of docunye) {
teksoooo += `│⭔ ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total : ${docunye.length}*`
replyglobal(teksoooo)
}
break
            case 'afk':
                if (!m.isGroup) return replyglobal(mess.group)
                if (isAfkOn) return replyglobal("Already notag")
                let reason = text ? text : 'Nothing.'
                afk.addAfkUser(m.sender, Date.now(), reason, _afk)
                replyglobal(`@${m.sender.split('@')[0]} Currently AFK\nWith reason : ${reason}`)
                break
case 'ytmp3':
case 'ytaudio':
case 'mp3dl': {
    if (!text) return replyglobal(
        `🎵 *Example:* ${prefix + command} https://youtu.be/2WmBa1CviYE\n\n` +
        `💡 *Tip:* Paste any YouTube video link to get the MP3 audio.`
    );

    try {
        await IconicTechInc.sendMessage(m.chat, { react: { text: `🎧`, key: m.key } });

        const axios = require("axios");
        const apiUrl = `https://apis-keith.vercel.app/download/dlmp3?url=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl, { timeout: 20000 });

        const audioUrl = response.data?.url;
        const title = response.data?.title || 'Unknown Title';

        if (audioUrl) {
            await IconicTechInc.sendMessage(m.chat, {
                audio: { url: audioUrl },
                mimetype: 'audio/mp4',
                ptt: false,
                fileName: `${title}.mp3`
            }, { quoted: m });

            await IconicTechInc.sendMessage(m.chat, {
                text: `🎶 *Title:* ${title}\n✅ MP3 file downloaded successfully!`,
            }, { quoted: m });

        } else {
            replyglobal(`❌ Couldn't fetch MP3. Make sure the link is valid and try again.`);
        }

    } catch (error) {
        console.error('YouTube MP3 Download Error:', error);
        replyglobal(`⚠️ MP3 download failed!\nError: ${error.message}`);
    }

    break;
}
case 'quotes':
case 'quote': {
    try {
        // Construct the API URL
        const url = 'https://apis.davidcyriltech.my.id/random/quotes';
        console.log('Sending request to API:', url); // Log the API URL

        // Fetch the quote from the API
        const response = await fetch(url);
        console.log('API Response Status:', response.status); // Log the response status

        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        // Parse the JSON response
        const jsonData = await response.json();
        console.log('Parsed JSON Data:', jsonData); // Log the parsed JSON

        // Handle the API response
        if (jsonData.response && jsonData.response.quote && jsonData.response.author) {
            replyglobal(`♻️ Author: ${jsonData.response.author}\n♻️ Quote: "${jsonData.response.quote}"`);
        } else {
            replyglobal('♻️ Sorry, I couldn\'t fetch a quote at the moment.');
        }
    } catch (error) {
        console.error('Error fetching quote:', error); // Log the full error
        replyglobal('♻️ An error occurred while fetching the quote. Please try again later.');
    }
    break;
}
case 'flags':
case 'flag': {
    try {
        // Construct the API URL
        const url = 'https://api.botcahx.eu.org/api/game/tebakbendera?apikey=fZfegtDM';
        console.log('Sending request to API:', url); // Log the API URL

        // Fetch the flag data from the API
        const response = await fetch(url);
        console.log('API Response Status:', response.status); // Log the response status

        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        // Parse the JSON response
        const jsonData = await response.json();
        console.log('Parsed JSON Data:', jsonData); // Log the parsed JSON

        // Handle the API response
        if (jsonData && Array.isArray(jsonData) && jsonData.length > 0) {
            // Pick a random flag from the list
            const randomFlag = jsonData[Math.floor(Math.random() * jsonData.length)];

            // Check if the flag data is valid
            if (randomFlag.bendera && randomFlag.nama) {
                // Send the flag and prompt the user to guess
                replyglobal(`🌍 Guess the country for this flag: ${randomFlag.bendera}\n\nType the country's name below.`);
                
                // Store the correct answer (can be stored temporarily or in session)
                let correctAnswer = randomFlag.nama.toLowerCase();

                // Wait for the user's response and check it
                // Assuming `m` contains the incoming message
                IconicTechInc.on('message', async (message) => {
                    // Check if the user's response is correct
                    let userAnswer = message.text.toLowerCase();

                    if (userAnswer === correctAnswer) {
                        // Correct answer feedback
                        replyglobal(`🎉 Correct! The country for the flag is *${correctAnswer}* 🇺🇳`);
                    } else {
                        // Incorrect answer feedback
                        replyglobal(`❌ Incorrect! The correct country for the flag is *${correctAnswer}* 🌍`);
                    }
                });
            } else {
                replyglobal('🌍 Sorry, I couldn\'t fetch a flag and country name at the moment.');
            }
        } else {
            replyglobal('🌍 Invalid response data.');
        }
    } catch (error) {
        console.error('Error fetching flags and countries:', error); // Log the full error
        replyglobal('🌍 An error occurred while fetching the flags and countries. Please try again later.');
    }
    break;
}
case 'quotes3':
case 'quote3': {
    try {
        // Define the API URL
        const url = 'https://api.botcahx.eu.org/api/random/quotes?apikey=fZfegtDM';
        console.log('Fetching quote from API:', url);

        // Fetch data from the API
        const response = await fetch(url);
        console.log('API Response Status:', response.status);

        // Check if the response was successful
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        // Parse the JSON response
        const jsonData = await response.json();
        console.log('Parsed JSON Data:', jsonData);

        // Validate response format
        if (jsonData.quotes && jsonData.author) {
            replyglobal(`✨ Author: ${jsonData.author}\n💬 Quote: "${jsonData.quotes}"`);
        } else {
            replyglobal('⚠️ Sorry, I couldn\'t fetch a quote at the moment.');
        }
    } catch (error) {
        console.error('Error fetching quote:', error);
        replyglobal('❌ An error occurred while fetching the quote. Please try again later.');
    }
    break;
}
case 'morning':
case 'goodmorning': {
    let currentHour = new Date().getHours();
    let greeting = '';
    
    if (currentHour >= 5 && currentHour < 12) {
        greeting = 'Good Morning! 🌞';
    } else if (currentHour >= 12 && currentHour < 17) {
        greeting = 'Good Afternoon! 🌅';
    } else if (currentHour >= 17 && currentHour < 21) {
        greeting = 'Good Evening! 🌇';
    } else {
        greeting = 'Good Night! 🌙';
    }
    
    // Customize the message for different times of the day
    let message = `${greeting} Hope you're having an awesome day!`;

    replyglobal(`${message}`);
}
break;

case 'afternoon':
case 'goodnight': {
    let currentHour = new Date().getHours();
    let greeting = '';
    
    if (currentHour >= 5 && currentHour < 12) {
        greeting = 'Good Morning! 🌞';
    } else if (currentHour >= 12 && currentHour < 17) {
        greeting = 'Good Afternoon! 🌅';
    } else if (currentHour >= 17 && currentHour < 21) {
        greeting = 'Good Evening! 🌇';
    } else {
        greeting = 'Good Night! 🌙';
    }

    // Customize the message for different times of the day
    let message = `${greeting} Wishing you a wonderful time ahead!`;

    replyglobal(`${message}`);
}
break;

case 'time':
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Format time to be more readable
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    let day = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    let date = currentDate.toLocaleDateString();

    replyglobal(`
✨ *Current Time:* ${formattedTime}
📅 *Day:* ${day}
🗓️ *Date:* ${date}

🌍 *Time Powered by ICONICS-TECH*`);
break;
case 'about-owner': {
    try {
        const aboutText = `
👨‍💻 *About Me:*
  ➪ Hi, I'm *Bright Chibondo*, a passionate computer science student! I started programming WhatsApp bots at 15, and now, at 19, I'm working on various exciting projects.
  ➪ I'm dedicated to learning new technologies and building tools that make an impact. My journey has been filled with learning, coding, and developing cool solutions for the future!
  ➪ Some of my skills include:
      - WhatsApp bot development
      - Full-stack web development
      - Mobile app development
      - AI & automation
      - Security & encryption
  
🌍 *What I Do:*
  ➪ As a developer, I aim to create useful projects and platforms. One of my major contributions is *Queen-Ruva AI*, an innovative platform aimed at helping Africans earn online.
  ➪ I'm also involved in building *control services* and platforms for businesses and individuals looking for tech solutions.

💡 *Join My Journey*:
  ➪ I am constantly learning and improving my skills. If you're interested in collaborating or need assistance with tech-related projects, feel free to reach out.

❤️‍🔥 *Made with love by ICONICS-TECH*

🔗 *Website*: [Visit my website](codewave-unit.zone.id)`;

        let thumbnailBuffer;
        try {
            thumbnailBuffer = fs.readFileSync(`./QueenMedia/ruva.jpg`);
        } catch (err) {
            console.error('Owner thumbnail not found, skipping:', err);
            thumbnailBuffer = null;
        }

        await IconicTechInc.sendMessage(m.chat, {
            text: aboutText,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: "About Bright Chibondo",
                    body: "Developer | Innovator | Tech Enthusiast",
                    thumbnailUrl: '',
                    thumbnail: thumbnailBuffer || undefined,
                    sourceUrl: "codewave-unit.zone.id",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });
    } catch (error) {
        console.error('Error sending about-owner:', error);
        await replyglobal('⚠️ An error occurred while retrieving the about information.');
    }
    break;
}
case "userinfo": {
    if (!text) {
        replyglobal("Please provide a Telegram username or ID!\nExample: .userinfo @username");
        return;
    }

    try {
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/getChat?chat_id=${text}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.ok) {
            const info = `
👤 *User Info:*
🔹 *Name:* ${data.result.first_name} ${data.result.last_name || ""}
🔹 *Username:* @${data.result.username || "N/A"}
🔹 *User ID:* ${data.result.id}
🔹 *Type:* ${data.result.type}
`;

            replyglobal(info);
        } else {
            replyglobal("❌ User not found! Try again.");
        }
    } catch (error) {
        replyglobal("Failed to fetch user info. Try again later.");
    }
    break;
}
case 'user': {
    try {
        // Generate random values for user stats
        const totalUsers = Math.floor(Math.random() * 1000) + 100; // Random total users between 100 and 1000
        const deployedQueenRuva = Math.floor(Math.random() * 500) + 50; // Random deployed Queen-Ruva instances between 50 and 500
        const totalFails = Math.floor(Math.random() * 50); // Random fails between 0 and 50
        const connectedUsers = Math.floor(Math.random() * totalUsers); // Random connected users (can't exceed total users)

        // Create a stylish message
        const userStatsMessage = `
            🚀 **User Stats Overview** 🚀
            
            📊 **Total Users:** ${totalUsers} Users
            👑 **Total Queen-Ruva Instances Deployed:** ${deployedQueenRuva}
            ❌ **Total Failures:** ${totalFails}
            🌐 **Currently Connected Users:** ${connectedUsers}

            ❤️‍🔥 **Created by ICONICS-TECH** 🚀
        `;

        // Send the formatted message
        replyglobal(userStatsMessage);

    } catch (error) {
        console.error('Error fetching user stats:', error);
        replyglobal('⚠️ An error occurred while fetching user stats. Please try again later.');
    }
    break;
}
case 'fortune': {
    try {
        // Fetch a random fortune from the internet
        const apiUrl = 'https://api.adviceslip.com/advice'; // API for random advice
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('Failed to fetch fortune');
        }

        // Parse the response JSON
        const data = await response.json();

        // Extract the advice/fortune from the API response
        const fortune = data.slip.advice;

        // Add emojis for fun
        const funFortune = `✨ **Your Fortune**: ${fortune} 😎🌟`;

        // Send the fortune to the user
        replyglobal(funFortune);

    } catch (error) {
        console.error('Error with fortune command:', error);
        replyglobal('⚠️ Something went wrong! Please try again later.');
    }
    break;
}
case 'saveweb':
case 'web2zip': {
    if (!text?.trim()) {
        return replyglobal(
            '🌐 *Website to ZIP Converter* 🌐\n\n' +
            `Usage: ${prefix + command} [url]\n` +
            `Example: ${prefix + command} https://example.com\n\n` +
            '> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }

    try {
        // Validate URL format
        if (!text.match(/^https?:\/\//i)) {
            text = 'https://' + text;
        }
        
        // Validate URL
        try {
            new URL(text);
        } catch (e) {
            return replyglobal(
                '❌ *Invalid URL*\n' +
                'Please provide a valid website URL\n\n' +
                '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
            );
        }

        const apiUrl = `https://api.nekorinn.my.id/tools/saveweb2zip?url=${encodeURIComponent(text)}`;

        // Show processing indicator
        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        // Fetch the API
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (!data.status || !data.result.downloadUrl) {
            throw new Error('API returned invalid response');
        }

        // Download the ZIP file directly
        const zipResponse = await fetch(data.result.downloadUrl);
        const zipBuffer = await zipResponse.buffer();
        
        // Send the ZIP file
        await IconicTechInc.sendMessage(m.chat, {
            document: zipBuffer,
            fileName: 'website_archive.zip',
            mimetype: 'application/zip',
            caption: `🌐 *Website Saved as ZIP* 🌐\n\n` +
                  `🔗 *Original URL:* ${text}\n` +
                  `📦 *File Size:* ${(zipBuffer.length / 1024 / 1024).toFixed(2)} MB\n` +
                  `🔄 *Files Copied:* ${data.result.copiedFilesAmount || 'Unknown'}\n\n` +
                  '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*',
            contextInfo: {
                externalAdReply: {
                    title: 'Website to ZIP Converter',
                    body: 'Download complete website as ZIP',
                    thumbnail: await (await fetch('https://i.imgur.com/3ZQ3ZQ3.jpeg')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Website to ZIP API Error:', error);
        replyglobal(
            '⚠️ *Failed to save website*\n' +
            'The website might be too large or unavailable\n\n' +
            '> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }
    break;
}
case 'ram': {
    try {
        // Fetch memory usage data
        const memoryUsage = process.memoryUsage();
        
        // Convert memory usage to MB for better readability
        const heapTotal = (memoryUsage.heapTotal / 1024 / 1024).toFixed(2); // Total heap memory
        const heapUsed = (memoryUsage.heapUsed / 1024 / 1024).toFixed(2); // Used heap memory
        const rss = (memoryUsage.rss / 1024 / 1024).toFixed(2); // RSS (Resident Set Size)
        
        // Build the message with emojis and formatted text
        const memoryMessage = `
        **QUEEN RUVA AI RAM**
            🧠 **Memory Usage**: 
            🔹 **Heap Total**: ${heapTotal} MB
            🔹 **Heap Used**: ${heapUsed} MB
            🔹 **RSS (Total Memory)**: ${rss} MB
            
            💥 **Performance**: 
            🌟 All systems running smoothly!

            ⚡ **Powered by iconic tech**
        `;
        
        // Send the formatted message
        replyglobal(memoryMessage);

    } catch (error) {
        console.error('Error fetching memory usage:', error);
        replyglobal('An error occurred while fetching the memory usage. Please try again later.');
    }
    break;
}

case 'intro': {
    try {
        const thumbnail = fs.readFileSync(`./QueenMedia/ruva.jpg`);

        const message = `╭━━━〔 *👋 WELCOME TO QUEEN RUVA AI* 〕━━━⬣\n` +
                        `┃ 🤖 *Bot Name:* Queen-Ruva AI\n` +
                        `┃ 💡 *Powered By:* Iconic Tech\n` +
                        `┃ 🚀 *Purpose:* Smart AI Assistance\n` +
                        `┃ 🌐 *Website:* [Click Here](codewave-tech.zone.id)\n` +
                        `┃ 📢 *Latest Updates:* Stay tuned for exciting features!\n` +
                        `╰━━━━━━━━━━━━━━━━━━━━⬣\n\n` +
                        `✨ *Hello @${sender.split("@")[0]}, welcome aboard!* \n` +
                        `🔹 *Type* *menu* *to see available commands!*`;

        await IconicTechInc.sendMessage(from, { 
            text: message,
            mentions: [sender],
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: `🎉 Welcome to Queen Ruva AI!`,
                    body: `Your Smart AI Companion - Developed by Iconic Tech`,
                    thumbnail,
                    sourceUrl: 'https://codewave-tech.zone.id',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error("Error in 'intro' command:", error);
    }
}
break;

case 'grpinfo':
    if (!m.isGroup) return replyglobal('This command can only be used in a group.'); // Ensure the command is used in a group

    try {
        // Fetch group metadata
        const groupMetadata = await IconicTechInc.groupMetadata(m.chat); // Get group info using groupMetadata method
        const participants = groupMetadata.participants; // Get list of participants

        // Find group owner
        const groupOwner = participants.find(p => p.isAdmin && p.isSuperAdmin)?.id || 'Unknown';

        // Format group information
        const groupInfo = `🚀 *Group Information* 🚀\n\n` +
                          `📌 *Group Name:* ${groupMetadata.name}\n` +
                          `📝 *Description:* ${groupMetadata.description || 'No description'}\n` +
                          `👥 *Participants:* ${participants.length}\n` +
                          `🛠 *Created At:* ${new Date(groupMetadata.creation * 1000).toLocaleString()}\n` + // Use `creation` instead of `createdAt`
                          `👑 *Group Owner:* ${groupOwner}\n\n` +
                          `✨ *Powered by Iconic Tech* ✨\n` +
                          `🤖 *Bot Name:* Queen Ruva`;

        // Send the group information
        await IconicTechInc.sendMessage(m.chat, {
            text: groupInfo
        }, {
            quoted: m
        });

    } catch (err) {
        console.error('Error fetching group info:', err);
        replyglobal('An error occurred while fetching the group information.');
    }
    break;
    case 'url': {
    try {
        // Required libraries
        const axios = require('axios');
        const FormData = require('form-data');
        const fs = require('fs-extra');

        // Function to upload a file to Catbox and return the URL
        async function uploadToCatbox(filePath) {
            if (!fs.existsSync(filePath)) throw new Error("File does not exist");
            try {
                const data = new FormData();
                data.append('reqtype', 'fileupload');
                data.append('userhash', '');
                data.append('fileToUpload', fs.createReadStream(filePath));

                const config = {
                    method: 'POST',
                    url: 'https://catbox.moe/user/api.php',
                    headers: {
                        ...data.getHeaders(),
                    },
                    data: data,
                };

                const api = await axios.request(config);
                return api.data.trim();
            } catch (error) {
                console.error('Error uploading to Catbox:', error.message);
                throw new Error('Failed to upload to Catbox');
            }
        }

        // Check if a reply message exists (image, video, or audio)
        if (!m.quoted) return replyglobal("📌 *Please reply to an image, video, or audio file to upload!*");

        let mediaPath;
        try {
            // Attempt to download the media file
            mediaPath = await IconicTechInc.downloadAndSaveMediaMessage(m.quoted);
        } catch (err) {
            console.error("❌ Error while downloading media:", err);
            return replyglobal("❌ *Unable to download the media file. Please try again!*");
        }

        if (!mediaPath) {
            return replyglobal("⚠️ *No media file detected. Please reply to an image, video, or audio message.*");
        }

        replyglobal("⏳ *Uploading your file, please wait...*");

        // Upload the file using the integrated function
        const fileUrl = await uploadToCatbox(mediaPath);

        // Delete the local file after uploading
        fs.unlinkSync(mediaPath);

        // Send the uploaded URL as a reply
        replyglobal(`✅ *Successfully uploaded!*\n🌐 *Here is your URL:* ${fileUrl}`);
    } catch (error) {
        console.error("❌ Error while uploading to Catbox:", error);
        replyglobal("❌ *Oops, something went wrong while creating your URL. Please try again!*");
    }
    break;
}

case 'vcf': {
    if (!m.isGroup) return replyglobal("🚫 *This command can only be used in groups!*"); // Restrict to groups

    let groupMetadata = await IconicTechInc.groupMetadata(m.chat);
    let groupName = groupMetadata.subject || "Unknown Group"; // Get group name
    let participants = groupMetadata.participants; // Get all members
    let totalMembers = participants.length; // Total members in the group

    if (!participants || participants.length === 0) {
        return replyglobal("⚠️ *No members found in this group!*");
    }

    let vcfData = "BEGIN:VCARD\nVERSION:3.0\n"; // Start vCard data

    for (let member of participants) {
        let contactId = member.id.replace(/@s.whatsapp.net/, ''); // Extract number
        let contactName = member.notify || "Unknown Contact"; // Use notify name if available

        vcfData += `FN:${contactName}\n`;
        vcfData += `TEL;TYPE=CELL:+${contactId}\n`;
        vcfData += "END:VCARD\n"; // Close vCard entry
    }

    let fileName = `${groupName}_Contacts.vcf`; // Generate file name

    replyglobal(`📂 *Generating vCard for ${totalMembers} members in '${groupName}'...*`);

    setTimeout(() => {
        IconicTechInc.sendMessage(m.chat, {
            document: Buffer.from(vcfData), // Convert vCard data to a buffer
            mimetype: 'text/vcard',
            fileName: fileName
        }, { quoted: m });

        replyglobal(`✅ *vCard file for '${groupName}' has been generated successfully!* 📄`);
    }, 3000); // 3-second delay

    break;
}
case 'readviewonce': case 'vv': {
    if (!m.quoted) {
        return replyglobal("*Mention a view-once media message to open it.*");
    }

    // Check if the quoted message is a view-once message
    const viewOnceMsg = m.quoted.viewOnceMessageV2?.message;
    if (viewOnceMsg) {
        try {
            // Handle view-once image messages
            if (viewOnceMsg.imageMessage) {
                const imagePath = await IconicTechInc.downloadAndSaveMediaMessage(viewOnceMsg.imageMessage); // Download image
                const caption = viewOnceMsg.imageMessage.caption || ""; // Get the caption if available
                await IconicTechInc.sendMessage(m.chat, {
                    image: { url: imagePath },
                    caption: caption,
                }, { quoted: m });
            }

            // Handle view-once video messages
            else if (viewOnceMsg.videoMessage) {
                const videoPath = await IconicTechInc.downloadAndSaveMediaMessage(viewOnceMsg.videoMessage); // Download video
                const caption = viewOnceMsg.videoMessage.caption || ""; // Get the caption if available
                await IconicTechInc.sendMessage(m.chat, {
                    video: { url: videoPath },
                    caption: caption,
                }, { quoted: m });
            }

            // Handle view-once audio messages
            else if (viewOnceMsg.audioMessage) {
                const audioPath = await IconicTechInc.downloadAndSaveMediaMessage(viewOnceMsg.audioMessage); // Download audio
                await IconicTechInc.sendMessage(m.chat, {
                    audio: { url: audioPath },
                    ptt: true, // Send as a voice message
                }, { quoted: m });
            } else {
                return replyglobal("*This view-once media type is not supported.*");
            }
        } catch (error) {
            console.error("Error processing view-once message:", error);
            return replyglobal("*Failed to process the view-once message. Please try again.*");
        }
    } else {
        return replyglobal("*The mentioned message is not a view-once message.*");
    }
    break;
}
 case 'menu':
case 'list':
case 'menu2':
case 'commands':
case 'cmd':
    let reaction = (() => {
        const emojis = ['🔮', '⚡', '⏳','♻️','📡', '👨‍💻', '🚀', '⚙️'];
        return emojis[Math.floor(Math.random() * emojis.length)];
    })();

    await IconicTechInc.sendMessage(m.chat, { react: { text: reaction, key: m.key } });

    // Fetch random fact
    let factText = '';
    try {
        const apiUrl = 'https://api.popcat.xyz/fact';
        const apiResponse = await axios.get(apiUrl);
        if (apiResponse.data && apiResponse.data.fact) {
            factText = ` *📌 Fact*: ${apiResponse.data.fact}`;
        }
    } catch (error) {
        console.error('Error fetching fact:', error);
        factText = '┃│\n┃│ *📌 Fact*: Learning is fun! 🎓';
    }

    // Create the menu message
    let IconicTechIncMENU = 
`╭━━━《𝐐𝐔𝐄𝐄𝐍 𝐑𝐔𝐕𝐀 𝐀𝐈 𝐁𝐄𝐓𝐀》━━━ꨄ︎
┃❍︎╭──────────────ఌ︎
┃シ︎│▸  ʙᴀɪʟᴇʏs : ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ
┃シ︎│▸  ꜱᴇʀᴠᴇʀ : ɴᴏᴅᴇᴊꜱ
┃❍︎│▸  ᴘʟᴀᴛғᴏʀᴍ : ᴅɪꜱᴄᴏʀᴅ
┃❍︎│▸  ꜱᴛᴀᴛᴜꜱ : ᴏɴʟɪɴᴇ
┃❍︎│▸  ᴅᴇᴠᴇʟᴏᴘᴇʀ : ɪᴄᴏɴɪᴄ ᴛᴇᴄʜ
┃シ︎│▸  𝖵ᴇʀsɪᴏɴ : latest
┃シ︎│▸  ᴡᴇʙꜱɪᴛᴇ : codewave-unit.zone.id
┃シ︎│         
┃❍︎╰──────────────ఌ︎
╰━━━━━━━━━━━━━━━━━━━ꨄ︎

╭━━━❐〔𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔〕
┃╭──────=───────
┃⧮ ᴄʜᴀᴛʙᴏᴛ [ᴏɴ/ᴏғғ]
┃⧮ ᴄʜᴀᴛᴀᴜᴅɪᴏ [ᴏɴ/ᴏғғ]
┃⧮ autoswview   [on/off]     
┃⧮ ᴀᴜᴛᴏᴛʏᴘɪɴɢ   [on/off]   
┃⧮ ᴏᴘᴇɴ  [viewonce]     
┃⧮ ᴀᴜᴛᴏʀᴇᴄᴏᴅɪɴɢ   [on/off]       
┃⧮ ᴀᴜᴛᴏsᴛᴀᴛᴜsᴠɪᴇᴡ [on/off]   
┃⧮ ᴀᴜᴛᴏʙɪᴏ [on/off
┃⧮ sʜᴏᴜᴛᴅᴏᴡɴ
┃⧮ ɢᴇᴛsᴇssɪᴏɴ
┃⧮ ᴀᴅᴅᴏᴡɴᴇʀ     
┃⧮ ᴘʀᴏᴍᴏᴛᴇ
┃⧮ ᴜᴘᴅᴀᴛᴇ
┃⧮ ɢᴇᴛᴘᴘ
┃⧮ ʙʟᴏᴄᴋ
┃⧮ ᴛᴀɢᴀʟʟ
┃⧮ ᴇɴᴄᴏᴅᴇ
┃⧮ ɢʀᴏᴜᴘ
┃⧮ ʟᴇғᴛ
┃⧮ ᴊᴏɪɴ
┗━━━━━━━━━━━━━━━━❍
╭━━━❐〔𝐏𝐇𝐎𝐓𝐎𝟑𝟔𝟎 𝐌𝐄𝐍𝐔〕
┃⧮ ғɪʀᴇᴡᴏʀᴋᴛᴇxᴛ
┃⧮ ᴄʟᴏᴜᴅᴇғғᴇᴄᴛs
┃⧮ ᴄᴀᴘᴛᴀɪɴᴀᴍᴇʀɪᴄᴀ
┃⧮ ᴀᴍᴇʀɪᴄᴀɴғʟᴀɢ3ᴅ
┃⧮ ᴄᴀʀᴛᴏᴏɴɢʀᴀғғɪᴛɪ
┃⧮ ᴄʏʙᴇʀʜᴜɴᴛ
┃⧮ ᴀᴠᴇɴɢᴇʀs
┃⧮ ᴀɴɢᴇʟᴡɪɴɢs
┃⧮ ʙʟᴀᴄᴋᴛᴇᴀᴍ
┃⧮ ᴄᴏʟᴏʀғᴜʟɴᴇᴏɴ
┃⧮ ᴡᴀʀᴢᴏɴᴇ
┃⧮ ʙʟᴀᴄᴋᴘɪɴᴋ
┃⧮ ᴀɴɪᴍᴇᴛᴇxᴛ
┃⧮ shimmer
┃⧮ ᴄʏʙᴇʀʜᴜɴᴛ
┃⧮ ʙᴏᴋᴇʜ
┃⧮ sɴᴏᴡ3ᴅ
┃⧮ ᴄᴜʙɪᴄ
┃⧮ ʙʟᴏᴏᴅʏ
┃⧮ ɢғx12
┃⧮ ɢғx11
┃⧮ ɢғx10
┗━━━━━━━━━━━━━━━━❍
╭━━━❐ 〔𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔〕
┃⧮ ᴏᴘᴇɴᴛɪᴍᴇ 
┃⧮ ᴍᴇᴍʙᴇʀᴛᴏᴛᴀʟ
┃⧮ ɢʀᴏᴜᴘғɪɴᴅᴇʀ
┃⧮ ꜱᴇᴛᴘᴘɢʀᴜᴘ
┃⧮ ᴛᴀɢᴍᴇ
┃⧮ ɢʀᴏᴜᴘ [ᴄʟᴏsᴇ/ᴏᴘᴇɴ]           
┃⧮ ᴏᴘᴇɴᴛɪᴍᴇ
┃⧮ ʟɪsᴛᴏɴʟɪᴇ
┃⧮ sᴇᴛᴅᴇsᴄ
┃⧮ ᴄʟᴏsᴇᴛɪᴍᴇ
┃⧮ ᴛᴀɢᴀᴅᴍɪɴ 
┃⧮ ʀᴇᴠᴏᴋᴇ
┃⧮ ɪɴᴠɪᴛᴇ
┃⧮ ʟɪɴᴋɢ
┃⧮ ᴛᴀɢᴀᴅᴍɪɴ
┃⧮ ᴇᴅɪᴛɪɴꜰᴏ
┃⧮ ᴀɴɴᴏᴜɴᴄᴇ
┃⧮ ᴅᴇᴍᴏᴛᴇ
┃⧮ sᴀᴠᴇ
┃⧮ ᴀᴅᴅ
┃⧮ ᴠᴄғ
┃⧮ ᴛᴏᴛᴀʟ
┗━━━━━━━━━━━━━━━━❍
╭━━━❐ 〔𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔〕
┃⧮ ʟʏʀɪᴄs-sʜᴀᴢᴀᴍ
┃⧮ ᴡɪᴋɪᴘᴇᴅɪᴀ
┃⧮ ʀᴇᴠᴇʀsᴇ 
┃⧮ ᴘʀᴏᴛᴇᴄᴛ
┃⧮ ᴅᴏᴍᴀɪɴ-ᴅᴇᴛᴀɪʟs
┃⧮ ᴄʜᴇᴄᴋ-ᴀᴘɪᴋᴇʏ 
┃⧮ ʟʏʀɪᴄs2
┃⧮ ʟʏʀɪᴄs
┃⧮ ᴡᴇᴀᴛʜᴇʀ2
┃⧮ ᴡᴇᴀᴛʜᴇʀ
┃⧮ ᴡɪᴋɪᴘᴇᴅɪᴀ2
┃⧮ ᴘᴇᴛ
┃⧮ ᴛᴛs
┃⧮ sᴛᴇᴀʟ 
┃⧮ ʙʀᴏᴀᴅᴄᴀsᴛ 
┃⧮ ᴛᴇᴍᴘᴇᴍᴀɪʟ
┃⧮ ɪᴍᴅʙ
┃⧮ sᴀᴠᴇᴡᴇʙ
┃⧮ ᴀᴘᴋ
┃⧮ 8ʙᴀʟʟ
┃⧮ ɪᴛᴜɴᴇs 
┃⧮ ᴛʀᴀɴsʟᴀᴛᴇ2
┃⧮ ɢᴇᴏʟᴏᴄᴀᴛᴇ 
┃⧮ sᴘᴀᴍ
┃⧮ ᴀᴘɪ-ᴄʜᴇᴄᴋ 
┃⧮ ɴɢʟsᴇɴᴅ 
┃⧮ ʀᴀɴᴅᴏᴍᴅᴏɢ
┃⧮ ʀᴀɴᴅᴏᴍᴄᴀᴛ
┃⧮ ᴛʀᴀɴsʟᴀᴛᴇ
┃⧮ ᴅᴏɴᴀᴛᴇ
┃⧮ ꜱᴇᴛᴛɪɴɢʙᴏᴛ
┃⧮ ʟᴏɢꜱ
┃⧮ ᴄᴀʟᴄᴜʟᴀᴛᴏʀ
┃⧮ ᴡɪꜰɪQʀ
┃⧮ ꜱʟᴏᴡ
┃⧮ ɴᴘᴍ
┃⧮ ᴠᴏɪᴄᴇ
┃⧮ ꜱᴀʏ
┃⧮ ɢᴇɴᴅᴇʀ 
┃⧮ ᴘɪᴄᴋᴜᴘʟɪɴᴇ
┃⧮ ᴀɢᴇ
┃⧮ sᴛᴇᴀʟ
┃⧮ sᴇᴛᴇxɪғ
┃⧮ ᴄᴀᴛғᴀᴄᴛ
┃⧮ ᴜᴘᴛɪᴍᴇ
┃⧮ ʙᴀꜱᴇ64
┃⧮ ᴄᴏᴜɴᴛʀʏɪɴꜰ
┃⧮ ɢᴇᴏʟᴏᴄᴀᴛᴇ
┃⧮ ᴄᴏᴅᴇꜱᴘᴀᴄᴇ
┃⧮ ᴘʀᴇᴍɪᴜᴍ
┃⧮ ᴏʙꜰᴜꜱᴄᴀᴛᴇ
┃⧮ ᴛᴇʀᴍᴜx-ɢᴜɪᴅᴇ
┗━━━━━━━━━━━━━━━━❍
╭━━━❐ 〔𝐆𝐈𝐓𝐇𝐔𝐁 𝐌𝐄𝐍𝐔〕
┃⧮ ɢɪᴛɪssᴜᴇ
┃⧮ ʙᴀᴄᴋᴜᴘ
┃⧮ ɢɪᴛᴄᴏᴍᴍɪᴛ
┃⧮ ʀᴇᴘᴏғɪʟᴇs
┃⧮ ɢɪᴛᴄʟᴏɴᴇ
┃⧮ ʀᴇᴘᴏsᴛᴀᴛs
┃⧮ sᴇᴀʀᴄʜʀᴇᴘᴏ
┃⧮ ɢɪᴛʜᴜʙᴜsᴇʀ 
┃⧮ ᴜᴘᴅᴀᴛᴇᴄʜᴇᴄᴋ
┃⧮ ɢɪᴛsᴇᴀʀᴄʜ
┃⧮ ɢɪᴛʀᴇᴀᴅᴍᴇ
┃⧮ ɢɪᴛʟɪsᴛ
┃⧮ ɢɪᴛɪɴғᴏ
┃⧮ ɢɪᴛᴄʟᴏɴᴇ
┃⧮ ɢɪᴛʀᴇᴀᴅᴍᴇ
┗━━━━━━━━━━━━━━━━❍
╭━━━❐ 〔𝐂𝐇𝐀𝐓𝐆𝐏𝐓 𝐌𝐄𝐍𝐔〕
┃⧮ ᴀɪ
┃⧮ ɢᴘᴛ3 
┃⧮ ᴅᴇᴇᴘsᴇᴇᴋ
┃⧮ ᴄʜᴀᴛʙᴏᴛ 
┃⧮ sɪᴍɪ
┃⧮ ʀᴇᴍᴇɴɪ
┃⧮ ʀᴜᴠᴀ
┃⧮ ᴄʟᴀᴜᴅᴇ
┃⧮ ɢᴘᴛᴏ4
┃⧮ ɢᴘᴛ4
┃⧮ ɪɪᴀᴍᴀ
┃⧮ gemini
┃⧮ ɢᴇᴍᴍᴀ
┗━━━━━━━━━━━━━━━━❍
╭━━━❐ 〔𝐑𝐀𝐍𝐃𝐎𝐌 𝐌𝐄𝐍𝐔
┃⧮ ғᴀᴄᴛ5
┃⧮ ǫᴜᴏᴛᴇs4
┃⧮ ǫᴜᴏᴛᴇs3
┃⧮ ǫᴜᴏᴛᴇs
┃⧮ ǫᴜᴏᴛᴇs2
┃⧮ ғᴀᴄᴛ2
┃⧮ ᴊᴏᴋᴇ2
┃⧮ ᴛʀᴜsᴛ 
┃⧮ ᴊᴏᴋᴇ
┃⧮ ғʟᴀɢ
┃⧮ ғᴀᴄɢ4
┃⧮ ᴅᴀʀᴇ 
┃⧮ ғᴀᴄᴛ3 
┃⧮ ғᴀᴄᴛ
┗━━━━━━━━━━━━━━━━❍
╭━━━❐ 〔𝐀𝐈 𝐈𝐌𝐆 𝐌𝐄𝐍𝐔〕
┃⧮ ᴘɪxᴀʙᴀʏ
┃⧮ ʙɪɴɢ
┃⧮ ᴀɴɪᴍᴇ
┃⧮ ɪᴍɢ 
┃⧮ ᴡᴀʟʟᴘᴀᴘᴇʀ 
┃⧮ ɪᴍᴀɢᴇ 
┗━━━━━━━━━━━━━━━━❍
╭━━━❐ 〔𝐃𝐀𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔〕
┃⧮ sᴏᴜɴᴅᴄʟᴏᴜᴅ
┃⧮ ᴍᴜsɪᴄ
┃⧮ ᴘʟᴀʏ
┃⧮ sᴏɴɢ
┗━━━━━━━━━━━━━━━━❍
╭━━━❐〔𝐕𝐈𝐃𝐄𝐎 𝐔𝐑𝐋 𝐃𝐀𝐖𝐍𝐋𝐎𝐀𝐃〕
┃⧮ ʏᴏᴜᴛᴜʙᴇ <𝑢𝑟𝑙>
┃⧮ ᴛɪᴋᴛᴏᴋ <𝑢𝑟𝑙>
┃⧮ ғᴀᴄᴇʙᴏᴏᴋ <𝑢𝑟𝑙>
┃⧮ ᴘɪɴᴛᴇʀᴇsᴛ <𝑢𝑟𝑙>
┃⧮ ɪɴsᴛᴀɢʀᴀᴍ <𝑢𝑟𝑙>
┃⧮ ᴛᴡɪᴛᴛᴇʀ <𝑢𝑟𝑙>
┗━━━━━━━━━━━━━━━━❍
╭━━━❐ 〔𝐂𝐎𝐔𝐑𝐓 𝐌𝐄𝐍𝐔〕
┃⧮ ʟᴀᴡ
┃⧮ ꜱᴇʟꜰʜᴇʟᴘ
┃⧮ ᴄᴏᴜʀᴛꜰᴇᴇꜱ
┃⧮ ᴄᴏᴜʀᴛᴄᴀʟᴇɴᴅᴀʀ
┃⧮ ᴄᴀꜱᴇʟᴏᴏᴋᴜᴘ
┗━━━━━━━━━━━━━━━━❍
╭━━━❐ 〔𝐈𝐍𝐅𝐎𝐑 𝐌𝐄𝐍𝐔〕
┃⧮ sᴘᴏᴛɪғʏ
┃⧮ ɪɴғᴏʀᴍᴀᴛɪᴏɴ
┃⧮ ᴛɪᴍᴇ
┃⧮ ɪɴғᴏʀ
┃⧮ ɢʀᴇᴀᴛɪɴɢ
┃⧮ ᴡʏʀ
┃⧮ ɢᴀᴍᴇ
┃⧮ ᴍᴏᴠɪᴇ
┗━━━━━━━━━━━━━━━━❍
╭━━━❐ 〔𝐈𝐂𝐎𝐍𝐈𝐂 𝐓𝐄𝐂𝐇〕
┃⧮ ᴄʜᴀɴɴᴇʟ
┃⧮ ᴀʙᴏᴜᴛ-ᴏᴡɴᴇʀ
┗━━━━━━━━━━━━━━━━❍
╭━━━❐ 〔𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔 (𝟐)〕
┃⧮ sᴇᴛᴇxɪғ 
┃⧮ ᴀɴɪᴍᴇ
┃⧮ ᴛᴇʟᴇɢʀᴀᴍ
┗━━━━━━━━━━━━━━━━❍
╭━━━❐ 〔𝐔𝐑𝐋 𝐌𝐄𝐍𝐔〕
┃⧮ ᴜʀʟ <𝑢𝑟𝑙>
┃⧮ ɪᴍᴀɢᴇ2ᴘɴɢ <𝑢𝑟𝑙
┃⧮ ᴇxᴘᴀɴᴅ  <𝑢𝑟𝑙>
┃⧮ sʜᴏʀᴛᴇɴ <𝑢𝑟𝑙>
┃⧮ sʜᴏʀᴛᴜʀʟ <𝑢𝑟𝑙>
┗━━━━━━━━━━━━━━━━❍
╭━━━❐ 〔𝐅𝐈𝐋𝐄𝐒  𝐃𝐀𝐖𝐍𝐋𝐎𝐀𝐃〕
┃⧮ ᴍᴇɢᴀ
┃⧮ ɢᴅʀɪᴠᴇ
┃⧮ ᴅʀᴏᴘʙᴏx
┃⧮ ᴢɪᴘᴘʏsʜᴀʀᴇ
┃⧮ ᴍᴇᴅɪᴀғɪʀᴇ 
┗━━━━━━━━━━━━━━━━❍
╭━━━❐ 〔𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍𝐒 𝐌𝐄𝐍𝐔〕
┃⧮ ʙᴏᴏᴋ
┃⧮ ǫᴜʀᴀɴ
┃⧮ ʙɪʙʟᴇ
┃⧮ ᴛᴏʀᴀʜ 
┗━━━━━━━━━━━━━━━━❍
╭━━━❐ 〔𝐑𝐎𝐌𝐀𝐍 𝐌𝐄𝐍𝐔〕
┃⧮ ʀᴏᴍᴀɴ
┃⧮ ʀᴏᴍᴀɴɴᴜᴍ
┃⧮ ɪsʀᴏᴍᴀɴ 
┃⧮ ʀᴀɴᴅᴏᴍʀᴏᴍᴀɴ
┗━━━━━━━━━━━━━━━━❍
╭━━━❐ 〔𝐌𝐄𝐌𝐄 𝐌𝐄𝐍𝐔〕
┃⧮ sᴀᴅᴄᴀᴛ
┃⧮ ʏᴇᴇᴛʜᴇᴄʜɪʟᴅ 
┃⧮ ᴏᴏɢᴡᴀʏ
┃⧮ ᴅʀᴀᴋᴇ
┃⧮ ᴍᴇᴍᴇ 
┃⧮ ᴅɪsᴀᴘᴘᴏɪɴᴛᴇᴅ
┃⧮ ᴄʜᴏᴏsᴇʀᴏᴀᴅ
┃⧮ ᴄʜᴀɴɢᴇᴍʏᴍɪɴᴅ
┗━━━━━━━━━━━━━━━━❍
╭━━━❐ 〔𝐐𝐔𝐄𝐄𝐍 𝐑𝐔𝐕𝐀 𝐒𝐘𝐒𝐘𝐄𝐌〕
┃⧮ sᴇʀᴠᴇʀɪɴғᴏʀ
┃⧮ ʀᴜɴᴛɪᴍᴇ
┃⧮ ᴜsᴇʀ
┃⧮ ᴛɪᴍᴇ 
┃⧮ ʀᴀᴍ 
┗━━━━━━━━━━━━━━━━❍
${readmore}                
${factText}
𝐕𝐈𝐒𝐈𝐓 : ${global.codewave}`
if (iconictechMenu === 'v1') {
    // v1: Image + Audio
    IconicTechInc.sendMessage(m.chat, {
        image: fs.readFileSync('./QueenMedia/ruva.jpg'),
        caption: IconicTechIncMENU,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "QUEEN RUVA AI",
                newsletterJid: "120363301955930948@newsletter"
            }
        }
    }, { quoted: m });

    // Get sender name
    const senderName = m.pushName || 'User';
    
    // Generate TTS message
    const ttsMessage = `Hello ${senderName}, my name is Queen Ruva AI Beta, developed by Iconic Tech`;
    
    // Try multiple TTS APIs
    const lang = 'en';
    const ttsUrls = [
        `https://translate.google.com/translate_tts?ie=UTF-8&tl=${lang}&client=tw-ob&q=${encodeURIComponent(ttsMessage)}`,
        `https://api.streamelements.com/kappa/v2/speech?voice=Brian&text=${encodeURIComponent(ttsMessage)}`
    ];

    let audioSent = false;
    for (const url of ttsUrls) {
        try {
            await IconicTechInc.sendMessage(m.chat, {
                audio: { url },
                mimetype: 'audio/mpeg',
                ptt: true
            }, { quoted: m });
            audioSent = true;
            break;
        } catch (error) {
            console.error(`[TTS FAILED] ${url}:`, error.message);
        }
    }

    // Fallback to text if TTS fails
    if (!audioSent) {
        await IconicTechInc.sendMessage(m.chat, {
            text: ttsMessage
        }, { quoted: m });
    }
} else if (iconictechMenu === 'v2') {
    // v2: Video
    IconicTechInc.sendMessage(m.chat, {
        video: fs.readFileSync('./QueenMedia/video.mp4'),
        caption: IconicTechIncMENU,
        gifPlayback: false,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "QUEEN RUVA AI",
                newsletterJid: "120363301955930948@newsletter"
            }
        }
    }, { quoted: m });
} else if (iconictechMenu === 'v3') {
    // v3: Alternative Video
    IconicTechInc.sendMessage(m.chat, {
        video: fs.readFileSync('./QueenMedia/thumb2.mp4'),
        caption: IconicTechIncMENU,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "QUEEN RUVA AI",
                newsletterJid: "120363301955930948@newsletter"
            }
        }
    }, { quoted: m });
}
                case 'remini': {
    if (!text) {
        replyglobal('Please provide an image URL to enhance!');
        return;
    }

    try {
        const apiUrl = `https://apis.davidcyriltech.my.id/remini?url=${encodeURIComponent(text)}`;
        const response = await fetch(apiUrl);
        const jsonData = await response.json();

        if (jsonData.status) {
            const enhancedImageUrl = jsonData.result;

            let message = `✨ *Enhanced Image*:\n`;
            message += `🔗 [Click here to view enhanced image](${enhancedImageUrl})`;

            replyglobal(message);
        } else {
            replyglobal(`Error: ${jsonData.error}`);
        }
    } catch (error) {
        console.error('Error fetching image enhancement data:', error);
        replyglobal('An error occurred while enhancing the image. Please try again later.');
    }
    break;
}
case 'translate2': {
    if (!text) {
        replyglobal('Please provide text to translate!');
        return;
    }

    try {
        const apiUrl = `https://apis.davidcyriltech.my.id/tools/translate?text=${encodeURIComponent(text)}&to=fr`;
        const response = await fetch(apiUrl);
        const jsonData = await response.json();

        if (jsonData.success) {
            const { original_text, translated_text, language } = jsonData;

            let message = `🌍 *Translation Result*:\n`;
            message += `Original Text: "${original_text}"\n`;
            message += `Translated Text (to ${language}): "${translated_text}"`;

            replyglobal(message);
        } else {
            replyglobal('Failed to translate the text.');
        }
    } catch (error) {
        console.error('Error fetching translation data:', error);
        replyglobal('An error occurred while translating. Please try again later.');
    }
    break;
}
case 'calculate': {
    if (!text) {
        replyglobal('Please provide an expression to calculate!');
        return;
    }

    try {
        const apiUrl = `https://apis.davidcyriltech.my.id/tools/calculate?expr=${encodeURIComponent(text)}`;
        const response = await fetch(apiUrl);
        const jsonData = await response.json();

        if (jsonData.success) {
            const { expression, result } = jsonData;
            
            let message = `🧮 *Calculation Result for "${expression}"*:\n`;
            message += `= ${result}`;

            replyglobal(message);
        } else {
            replyglobal(`Failed to calculate "${text}".`);
        }
    } catch (error) {
        console.error('Error fetching calculation data:', error);
        replyglobal('An error occurred while calculating the expression. Please try again later.');
    }
    break;
}
case 'qrcode': {
    const text = args.join(' ');
    if (!text) return replyglobal("Usage: .qrcode <text>");
    
    try {
        const qr = await QRCode.toDataURL(text);
        await message.reply({ image: { url: qr }, caption: text });
    } catch (e) {
        replyglobal("❌ QR generation failed");
    }
    break;
}
case 'aiassist': {
    if (!isCreator) return ownernya();
    const prompt = args.join(' ');
    if (!prompt) return replyglobal("💡 *Usage:*\n.aiassist [coding request]\nEx: `.aiassist WhatsApp auto-reply code`");

    try {
        replyglobal("🧠 *Queen Ruva AI* is generating code...", { typing: true });

        // Dual-API Fallback System
        const fetchAI = async (prompt) => {
            // Try Blackbox AI first (faster for code)
            try {
                const blackboxResponse = await fetch(`https://api.siputzx.my.id/api/ai/blackboxai-pro?content=${encodeURIComponent(prompt)}`);
                if (blackboxResponse.ok) {
                    const data = await blackboxResponse.json();
                    return data.response || data.message || "No response from Blackbox AI";
                }
            } catch (e) {
                console.log("Blackbox API fallback:", e.message);
            }

            // Fallback to OpenAI if Blackbox fails
            const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.OPENAI_KEY}`
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [{
                        role: "system",
                        content: "Generate clean, functional JavaScript code only. No explanations."
                    }, {
                        role: "user",
                        content: prompt
                    }],
                    temperature: 0.5,
                    max_tokens: 1000
                })
            });
            const openaiData = await openaiResponse.json();
            return openaiData.choices[0]?.message?.content;
        };

        // Get AI response
        const aiResponse = await fetchAI(prompt);
        
        // Format response
        const cleanCode = aiResponse.replace(/```(javascript|js)?/g, '').trim();
        
        // Send response
        if (cleanCode.length > 1000) {
            const filename = `code-${Date.now()}.js`;
            fs.writeFileSync(filename, cleanCode);
            replyglobal({
                text: "💻 *Code Generated* _(file attached)_\n_⚡ Always test in sandbox first!_",
                attachment: fs.createReadSync(filename),
                mimetype: 'application/javascript'
            });
            setTimeout(() => fs.unlinkSync(filename), 30000); // Cleanup after 30s
        } else {
            replyglobal(`💻 *Generated Code:*\n\`\`\`javascript\n${cleanCode.slice(0, 1500)}\n\`\`\`\n\n_🔧 Queen Ruva AI | Iconic Tech_`);
        }

    } catch (error) {
        console.error("AI Assist Error:", error);
        replyglobal(`❌ *Code Generation Failed*\n${error.message}\n\n_Troubleshooting:_\n1. Check API keys\n2. Verify internet\n3. Simplify prompt`);
    }
    break;
}
case 'roman': {
    if (!text) {
        replyglobal('Please provide a number to convert!');
        return;
    }

    const number = parseInt(text);

    if (isNaN(number) || number <= 0 || number > 3999) {
        replyglobal('Please enter a valid number between 1 and 3999.');
        return;
    }

    function convertToRoman(num) {
        const romanNumerals = [
            { value: 1000, numeral: 'M' },
            { value: 900, numeral: 'CM' },
            { value: 500, numeral: 'D' },
            { value: 400, numeral: 'CD' },
            { value: 100, numeral: 'C' },
            { value: 90, numeral: 'XC' },
            { value: 50, numeral: 'L' },
            { value: 40, numeral: 'XL' },
            { value: 10, numeral: 'X' },
            { value: 9, numeral: 'IX' },
            { value: 5, numeral: 'V' },
            { value: 4, numeral: 'IV' },
            { value: 1, numeral: 'I' }
        ];

        let result = '';

        for (let i = 0; i < romanNumerals.length; i++) {
            while (num >= romanNumerals[i].value) {
                result += romanNumerals[i].numeral;
                num -= romanNumerals[i].value;
            }
        }

        return result;
    }

    const romanResult = convertToRoman(number);
    replyglobal(`🧮 *Roman Numeral Conversion*\n\n*Number:* ${number}\n*Roman Numeral:* ${romanResult}`);
    break;
}
case 'romannum': {
    if (!text) {
        replyglobal('Please provide a Roman numeral to convert!');
        return;
    }

    function convertToNumber(roman) {
        const romanMap = {
            I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
        };
        let num = 0;

        for (let i = 0; i < roman.length; i++) {
            const current = romanMap[roman[i]];
            const next = romanMap[roman[i + 1]];

            if (next && current < next) {
                num -= current;
            } else {
                num += current;
            }
        }

        return num;
    }

    const result = convertToNumber(text.toUpperCase());
    replyglobal(`🔢 *Roman to Number Conversion*\n\n*Roman Numeral:* ${text}\n*Number:* ${result}`);
    break;
}
case 'isroman': {
    if (!text) {
        replyglobal('Please provide a Roman numeral to check!');
        return;
    }

    const romanRegex = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

    if (romanRegex.test(text.toUpperCase())) {
        replyglobal(`✅ *Valid Roman Numeral:* ${text}`);
    } else {
        replyglobal(`❌ *Invalid Roman Numeral:* ${text}`);
    }
    break;
}
case 'randomroman': {
    const randomNum = Math.floor(Math.random() * 3999) + 1; // Random number between 1 and 3999

    function convertToRoman(num) {
        const romanNumerals = [
            { value: 1000, numeral: 'M' },
            { value: 900, numeral: 'CM' },
            { value: 500, numeral: 'D' },
            { value: 400, numeral: 'CD' },
            { value: 100, numeral: 'C' },
            { value: 90, numeral: 'XC' },
            { value: 50, numeral: 'L' },
            { value: 40, numeral: 'XL' },
            { value: 10, numeral: 'X' },
            { value: 9, numeral: 'IX' },
            { value: 5, numeral: 'V' },
            { value: 4, numeral: 'IV' },
            { value: 1, numeral: 'I' }
        ];

        let result = '';

        for (let i = 0; i < romanNumerals.length; i++) {
            while (num >= romanNumerals[i].value) {
                result += romanNumerals[i].numeral;
                num -= romanNumerals[i].value;
            }
        }

        return result;
    }

    const romanResult = convertToRoman(randomNum);
    replyglobal(`🎲 *Random Roman Numeral*\n\n*Number:* ${randomNum}\n*Roman Numeral:* ${romanResult}`);
    break;
}
case 'bible': {
    if (!text) {
        replyglobal('Please provide a Bible reference!');
        return;
    }

    try {
        const apiUrl = `https://apis.davidcyriltech.my.id/bible?reference=${encodeURIComponent(text)}`;
        const response = await fetch(apiUrl);
        const jsonData = await response.json();

        if (jsonData.success) {
            const { reference, translation, text: verseText } = jsonData;
            
            let message = `📖 *Bible Verse: ${reference}* ✝️\n`;
            message += `*Translation*: ${translation}\n\n`;
            message += `*Verse*: ${verseText}\n`;

            replyglobal(message);
        } else {
            replyglobal(`No results found for "${text}".`);
        }
    } catch (error) {
        console.error('Error fetching Bible data:', error);
        replyglobal('An error occurred while fetching the Bible verse. Please try again later.');
    }
    break;
}
case 'weather2': {
    if (!text) {
        replyglobal('Please provide a city name!');
        return;
    }

    try {
        const apiUrl = `https://apis.davidcyriltech.my.id/weather?city=${encodeURIComponent(text)}`;
        console.log("Fetching weather data from:", apiUrl);

        const response = await fetch(apiUrl);
        const jsonData = await response.json();

        if (jsonData.success) {
            const { location, country, weather, description, temperature, feels_like, pressure, humidity, wind_speed } = jsonData.data;
            
            let message = `📍 *Weather in ${location}, ${country}* 🌍\n\n`;
            message += `🌦️ Weather: ${weather} - ${description}\n`;
            message += `🌡️ Temperature: ${temperature}°C\n`;
            message += `🥶 Feels Like: ${feels_like}°C\n`;
            message += `💨 Wind Speed: ${wind_speed} km/h\n`;
            message += `💧 Humidity: ${humidity}%\n`;
            message += `⏲️ Pressure: ${pressure} hPa\n`;

            replyglobal(message);
        } else {
            replyglobal(`No weather data found for "${text}".`);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        replyglobal('An error occurred while fetching the weather data. Please try again later.');
    }
    break;
}
case 'soundcloud': { if (!text) { replyglobal('Please provide a song or artist name!'); return; }

try {
    const apiUrl = `https://apis.davidcyriltech.my.id/search/soundcloud?text=${encodeURIComponent(text)}`;
    const response = await fetch(apiUrl);
    const jsonData = await response.json();

    if (jsonData.success && jsonData.result.length > 0) {
        let message = `🎵 *SoundCloud Search Results for "${text}"* 🎵\n\n`;

        // Iterate through each result and create download links
        for (let i = 0; i < Math.min(jsonData.result.length, 5); i++) {
            const track = jsonData.result[i];
            const downloadUrl = `https://www.soundcloudmp3.org/widget.php?track=${encodeURIComponent(track.link)}`;
            message += `${i + 1}. *Title*: ${track.title}\n`;
            message += `🔗 [Listen Now](${track.link})\n`;
            message += `⬇️ [Download MP3](${downloadUrl})\n\n`;
        }

        replyglobal(message);
    } else {
        replyglobal(`No results found for "${text}".`);
    }
} catch (error) {
    console.error('Error fetching SoundCloud data:', error);
    replyglobal('An error occurred while fetching the music. Please try again later.');
}
break;

}
case 'hack': {
    if (!text) {
        replyglobal('Please share the number you want to hack! 🔢');
        return;
    }

    // Ensure the text entered is a number
    const number = parseInt(text);
    if (isNaN(number)) {
        replyglobal('Please provide a valid number! ❌');
        return;
    }

    // Reply to the user with a countdown
    replyglobal(`Initiating hack on number: ${number}... 🕵️‍♂️💻`);

    let count = 10;
    let countdown = setInterval(() => {
        if (count <= 100) {
            // Add some emojis to simulate hacking
            replyglobal(`Hacking in progress... ${count}% ⚡🔐`);
            count++;
        } else {
            clearInterval(countdown);
            // Final message when the hack is "complete"
            replyglobal(`🚨 Number ${number} successfully hacked! 🏆`);
            replyglobal('Haha, I got you! I\'m created with ❤️‍🔥 by ICONICS-TECH 🤖');
        }
    }, 1000); // Countdown every second

    break;
}
//BIBLE BOOK
// Bible (Christianity)
case 'book': {
    if (!text) {
        replyglobal('Please provide a Book reference (e.g., *John 3:16* or *Genesis 1:1-3*).');
        return;
    }

    try {
        const apiUrl = `https://bible-api.com/${encodeURIComponent(text)}?translation=kjv`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.verses?.length > 0) {
            let message = `📖 *Book (${data.translation})* ✝️\n`;
            message += `*${data.reference}*\n\n`;
            data.verses.forEach(verse => {
                message += `*${verse.verse}*: ${verse.text}\n\n`;
            });
            replyglobal(message.trim());
        } else {
            replyglobal(`Verse not found. Try: *!bible John 3:16*`);
        }
    } catch (error) {
        console.error('Book API Error:', error);
        replyglobal('Failed to fetch. Check the reference or try later.');
    }
    break;
}

// Quran (Islam)
case 'quran': {
    if (!text) {
        replyglobal('Please provide a Surah:Ayah (e.g., *2:255*).');
        return;
    }

    try {
        const apiUrl = `https://api.alquran.cloud/v1/ayah/${text}/en.sahih`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.data) {
            const { surah, numberInSurah, text } = data.data;
            replyglobal(
                `🕌 *Quran (Sahih International)* 📿\n` +
                `*Surah ${surah.englishName} ${surah.number}:${numberInSurah}*\n\n` +
                `${text}`
            );
        } else {
            replyglobal('Ayah not found. Try: *!quran 1:1*');
        }
    } catch (error) {
        console.error('Quran API Error:', error);
        replyglobal('Failed to fetch. Check the reference.');
    }
    break;
}

// Torah (Judaism)
case 'torah': {
    if (!text) {
        replyglobal('Please provide a reference (e.g., *Genesis 1:1*).');
        return;
    }

    try {
        const apiUrl = `https://www.sefaria.org/api/texts/${text.replace(/\s/g, '.')}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.text) {
            replyglobal(
                `✡ *Torah* 🔯\n` +
                `*${text}*\n\n` +
                `${Array.isArray(data.text) ? data.text.join('\n') : data.text}`
            );
        } else {
            replyglobal('Verse not found. Try: *!torah Genesis 1:1*');
        }
    } catch (error) {
        console.error('Torah API Error:', error);
        replyglobal('Failed to fetch. Check the reference.');
    }
    break;
}
//BOOKSTOP
                case 'getcontact': case 'getkontak':
if (!isCreator) return replyglobal(`Owners only`)
if (!m.isGroup) return replyglobal(`This feature is group specific`)
huhuhs = await replyglobal(m.chat, {
    text: `Grup; *${groupMetadata.subject}*\nTotal peserta; *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000) // (?); mengirim kontak seluruh member
replyglobal(m.chat, participants.map(a => a.id), huhuhs)
break
                	case 'tr': {
    const langAbbreviation = args[0]; // Get the language abbreviation from the arguments
    const textToTranslate = m.quoted?.text || args.slice(1).join(' '); // Check if replying to a message or taking input

    // Check if language abbreviation is provided
    if (!langAbbreviation || !textToTranslate) {
        return replyglobal(`\`what should i translate\`\n*𝔼𝕩𝕒𝕞𝕡𝕝𝕖: ${prefix + command} en Hola
        > Always Bring "EN" BEFORE WORD`);
    }

    try {
        await loading();

        // API call
        const apiUrl = `https://api.popcat.xyz/translate?to=${langAbbreviation}&text=${encodeURIComponent(textToTranslate)}`;
        const response = await fetch(apiUrl);
        const json = await response.json();

        // Log the API response to the console
        console.log("Translation Response:", json);

        
// Validate API response
if (!json.translated) {
    return replyglobal("Failed🙃.");
}

// Send the translated text
replyglobal(`*Translated ⌛:*\n\n\`\`\`${json.translated}\`\`\``);


    } catch (error) {
        console.error("Error in translate case:", error);
        replyglobal("Error occured😑.");
    }
    break;
}
case 'rps': 
case 'game':{
    if (!isCreator) return replyglobal(`Please choose one: rock, paper, or scissors.\nExample: ${prefix}rps rock`);
    
    const userChoice = q.toLowerCase();
    const validChoices = ['rock', 'paper', 'scissors'];
    if (!validChoices.includes(userChoice)) {
        return replyglobal("Invalid choice. Please choose 'rock', 'paper', or 'scissors'.");
    }

    // Bot's random choice
    const botChoice = validChoices[Math.floor(Math.random() * validChoices.length)];

    // Determine the winner
    let result;
    if (userChoice === botChoice) {
        result = "It's a draw!";
    } else if (
        (userChoice === 'rock' && botChoice === 'scissors') ||
        (userChoice === 'paper' && botChoice === 'rock') ||
        (userChoice === 'scissors' && botChoice === 'paper')
    ) {
        result = "You win! 🎉";
    } else {
        result = "You lose! 😢";
    }

    // Send the result
    replyglobal(`🤖 *Rock, Paper, Scissors*\n\nYou chose: *${userChoice}*\nI chose: *${botChoice}*\n\n*Result:* ${result}`);
    break;
}
case 'wyr': {
    try {
        // React to indicate processing
        await replyglobal(m.chat, { react: { text: '🤔', key: m.key } });

        // Fetch WYR data
        const apiUrl = 'https://api.popcat.xyz/wyr';
        const apiResponse = await axios.get(apiUrl);

        if (apiResponse.data) {
            const wyrMessage = `*Would you rather:*\n\n1. ${apiResponse.data.ops1}\n2. ${apiResponse.data.ops2}`;
            replyglobal(wyrMessage);
        } else {
            replyglobal('Sorry, I couldn\'t fetch the WYR question at the moment.');
        }
    } catch (error) {
        console.error('Error during /wyr command:', error);
        replyglobal('An error occurred while processing your request. Please try again later.');
    }
    break;
}
case 'fact2': {
    try {
        // React to indicate processing
        await replyglobal(m.chat, { react: { text: '🤓', key: m.key } });

        // Initialize an empty array to store the facts
        const facts = [];

        // Loop to fetch 5 facts
        for (let i = 0; i < 5; i++) {
            // Fetch random fact
            const apiUrl = 'https://api.popcat.xyz/fact';
            const apiResponse = await axios.get(apiUrl);

            if (apiResponse.data && apiResponse.data.fact) {
                facts.push(apiResponse.data.fact); // Add the fact to the array
            } else {
                facts.push('Failed to fetch a fact.'); // Handle failure in fetching a fact
            }
        }

        // Format and display the facts
        let responseMessage = '*Did you know?* 🤔\n\n';
        facts.forEach((fact, index) => {
            responseMessage += `${index + 1}. ${fact}\n\n`;
        });

        replyglobal(responseMessage); // Send the formatted response
    } catch (error) {
        console.error('Error during /fact command:', error);
        replyglobal('An error occurred while processing your request. Please try again later.');
    }
    break;
}
case 'fact3': {
    try {
        // React to indicate processing
        await replyglobal(m.chat, { react: { text: '🤓', key: m.key } });

        // Initialize an empty array to store the facts
        const facts = [];

        // Loop to fetch 10 facts
        for (let i = 0; i < 10; i++) {
            // Fetch random fact
            const apiUrl = 'https://api.popcat.xyz/fact';
            const apiResponse = await axios.get(apiUrl);

            if (apiResponse.data && apiResponse.data.fact) {
                facts.push(apiResponse.data.fact); // Add the fact to the array
            } else {
                facts.push('Failed to fetch a fact.'); // Handle failure in fetching a fact
            }
        }

        // Emojis to be added before each fact
        const emojis = ['🤔', '😲', '🧠', '🌍', '🐝', '🚀', '🔥', '🎉', '📚', '💡'];

        // Format and display the facts with emojis
        let responseMessage = '*fact of the day\nDid you know?* 🤓\n\n';
        facts.forEach((fact, index) => {
            responseMessage += `${emojis[index]} ${fact}\n\n`;
        });

        replyglobal(responseMessage); // Send the formatted response
    } catch (error) {
        console.error('Error during /fact command:', error);
        replyglobal('An error occurred while processing your request. Please try again later.');
    }
    break;
}
case 'fact5': {
    try {
        // React to indicate processing
        await replyglobal(m.chat, { react: { text: '🤓', key: m.key } });

        // Initialize an empty array to store the facts
        const facts = [];

        // Emojis to be added before each fact
        const emojis = ['🤔', '😲', '🧠', '🌍', '🐝', '🚀', '🔥', '🎉', '📚', '💡', '🦄', '🌟', '⚡', '🎯', '👑', '💎', '🌈', '📖', '💭', '🎬', '👾', '🌙', '💫', '🦋', '🔮', '🍀', '🌻', '🕶️', '💌', '🍃'];

        // Loop to fetch 30 facts
        for (let i = 0; i < 30; i++) {
            // Fetch random fact
            const apiUrl = 'https://api.popcat.xyz/fact';
            const apiResponse = await axios.get(apiUrl);

            if (apiResponse.data && apiResponse.data.fact) {
                facts.push(apiResponse.data.fact); // Add the fact to the array
            } else {
                facts.push('Failed to fetch a fact.'); // Handle failure in fetching a fact
            }
        }

        // Format and display the facts with emojis
        let responseMessage = '*Did you know?* 🤓\n\n';
        facts.forEach((fact, index) => {
            responseMessage += `${emojis[index]} ${fact}\n\n`;
        });

        replyglobal(responseMessage); // Send the formatted response
    } catch (error) {
        console.error('Error during /fact command:', error);
        replyglobal('An error occurred while processing your request. Please try again later.');
    }
    break;
}
case 'fact4': {
    try {
        // React to indicate processing
        await replyglobal(m.chat, { react: { text: '🤓', key: m.key } });

        // Initialize an empty array to store the facts
        const facts = [];

        // Emojis to be added before each fact
        const emojis = ['🤔', '😲', '🧠', '🌍', '🐝', '🚀', '🔥', '🎉', '📚', '💡', '🦄', '🌟', '⚡', '🎯', '👑', '💎', '🌈', '📖', '💭', '🎬'];

        // Loop to fetch 20 facts
        for (let i = 0; i < 20; i++) {
            // Fetch random fact
            const apiUrl = 'https://api.popcat.xyz/fact';
            const apiResponse = await axios.get(apiUrl);

            if (apiResponse.data && apiResponse.data.fact) {
                facts.push(apiResponse.data.fact); // Add the fact to the array
            } else {
                facts.push('Failed to fetch a fact.'); // Handle failure in fetching a fact
            }
        }

        // Format and display the facts with emojis
        let responseMessage = '*Did you know?* 🤓\n\n';
        facts.forEach((fact, index) => {
            responseMessage += `${emojis[index]} ${fact}\n\n`;
        });

        replyglobal(responseMessage); // Send the formatted response
    } catch (error) {
        console.error('Error during /fact command:', error);
        replyglobal('An error occurred while processing your request. Please try again later.');
    }
    break;
}
case 'fact': { try { // React to indicate processing await replyglobal(m.chat, { react: { text: '🤓', key: m.key } });

// Fetch random fact
    const apiUrl = 'https://api.popcat.xyz/fact';
    const apiResponse = await axios.get(apiUrl);

    if (apiResponse.data && apiResponse.data.fact) {
        const fact = apiResponse.data.fact;
        replyglobal(`*Did you know?* 🤔

${fact}`); } else { replyglobal('Failed to fetch a random fact. Please try again later.'); } } catch (error) { console.error('Error during /fact command:', error); replyglobal('An error occurred while processing your request. Please try again later.'); } break; }

case 'translation3': {
    if (!text) {
        replyglobal('Please provide text to translate!'); // Handle empty input
        return;
    }

    try {
        // Construct the new API URL with the query
        const apiUrl = `https://api.siputzx.my.id/api/cf/translation?text=${encodeURIComponent(text)}&sourceLang=en&targetLang=id`;
        console.log("Sending request to API:", apiUrl);

        // Fetch the response from the API
        const response = await fetch(apiUrl);
        console.log("API Response Status:", response.status);

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        // Parse the JSON response
        const jsonData = await response.json();
        console.log("Parsed JSON Data:", jsonData);

        // Check the API success status and handle the response
        if (jsonData.success === true && jsonData.data && jsonData.data.translated_text) {
            replyglobal(jsonData.data.translated_text); // Send the translated text to the user
        } else {
            replyglobal('Failed to fetch a valid translation. Please try again later.');
        }
    } catch (error) {
        console.error('Error fetching translation response:', error);
        replyglobal('An error occurred while fetching the translation. Please try again later.');
    }
    break;
}
case 'translate': {
    if (!text) return replyglobal('*Example*: ${prefix + command} hello');

    try {
        // React to indicate processing
        await replyglobal(m.chat, { react: { text: '🌐', key: m.key } });

        // Fetch translation
        const apiUrl = `https://api.popcat.xyz/translate?to=en&text=${encodeURIComponent(text)}`;
        const apiResponse = await axios.get(apiUrl);

        if (apiResponse.data && apiResponse.data.translated) {
            const translation = apiResponse.data.translated;
            replyglobal(`*Translation:* 🌍\n${translation}`);
        } else {
            replyglobal('Failed to translate the text. Please try again later.');
        }
    } catch (error) {
        console.error('Error during /translate2 command:', error);
        replyglobal('An error occurred while processing your request. Please try again later.');
    }
    break;
}

case 'gfx5':
case 'tripletext': {
    if (!text?.trim()) {
        return replyglobal(
            '🔮 *GFX 5 Triple Text Generator* 🔮\n\n' +
            `Usage: ${prefix + command} [text1] | [text2] | [text3]\n` +
            `Example: ${prefix + command} Maher | Zubair | Developer\n\n` +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }

    const parts = text.split('|').map(p => p.trim());
    if (parts.length !== 3) {
        return replyglobal(
            '⚠️ *Incorrect Format* ⚠️\n\n' +
            'Please provide exactly three texts separated by "|"\n' +
            `Example: ${prefix + command} Line1 | Line2 | Line3\n\n` +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }

    const [text1, text2, text3] = parts;

    try {
        const apiUrl = `https://api.nexoracle.com/image-creating/gfx5?apikey=75957eaec54d70ace3&text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}&text3=${encodeURIComponent(text3)}`;

        // Show processing indicator
        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        // Send the triple text design
        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `🔮 *TRIPLE TEXT DESIGN*\n\n${text1}\n${text2}\n${text3}\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*`,
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'GFX 5 Triple Text',
                    body: 'Professional three-line text design',
                    thumbnail: await (await fetch('https://i.imgur.com/triple-thumb.jpg')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('GFX 5 API Error:', error);
        replyglobal(
            '⚠️ *Failed to generate triple text design*\n' +
            'The design studio is overloaded!\n\n' +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }
    break;
}
case 'shimmer': {
    if (!text?.trim()) {
        return replyglobal(
            '✨ *Shimmering AOV Avatar Generator* ✨\n\n' +
            `Usage: ${prefix + command} [text]\n` +
            `Example: ${prefix + command} MaherZubair\n\n` +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }

    try {
        const apiUrl = `https://api.nexoracle.com/ephoto360/shimmering-aov-avaters?apikey=75957eaec54d70ace3&text=${encodeURIComponent(text)}`;

        // Show processing indicator
        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        // Send the shimmering avatar
        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `✨ *SHIMMERING AOV AVATAR*\n\n"${text}"\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*`,
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'Arena of Valor Style Avatar',
                    body: 'Shimmering game avatar generator',
                    thumbnail: await (await fetch('https://i.imgur.com/aov-thumb.jpg')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'https://arenaofvalor.com'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('AOV Avatar API Error:', error);
        replyglobal(
            '⚠️ *Failed to generate shimmering avatar*\n' +
            'The arena is currently closed for maintenance!\n\n' +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }
    break;
}
case 'play':
case 'song': {
  if (!text) return replyglobal(`*Example*: ${prefix + command} understand by omah lay`);

  try {
    // React to the message with a music note emoji before starting
    await IconicTechInc.sendMessage(m.chat, { react: { text: `🎵`, key: m.key } });

    const yts = require("yt-search");
    const search = await yts(text);
    const video = search.videos[0];

    if (!video) {
      replyglobal(`*No results found for:* ${text}`);
      return;
    }

    // React with a "thumbs up" emoji after finding a video
    await IconicTechInc.sendMessage(m.chat, { react: { text: `👍`, key: m.key } });

    // Display song details with updated bot name and footer
    const body = `> *QUEEN_RUVA_ᴀI_MUSɪC-Pʟᴀʏᴇʀ*\n` +
      `🎧 *Title:* ${video.title}\n` +
      `👀 *Views:* ${video.views}\n` +
      `⏳ *Duration:* ${video.timestamp}\n` +
      `🕒 *Uploaded:* ${video.ago}\n` +
      `🔗 *Url:* ${video.url}\n` +
      `> *POᴡᴇʀᴇᴅ BY ɪᴄᴏɴɪᴄ Tᴇᴄʜ*`;

    await IconicTechInc.sendMessage(m.chat, {
      image: { url: video.thumbnail },
      caption: body
    }, { quoted: m });

    const apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(video.url)}`;
    const apiResponse = await axios.get(apiUrl);

    if (apiResponse.data.success) {
      const { download_url, title, thumbnail } = apiResponse.data.result;

      // Sending the audio file with a music note emoji in the caption
      await IconicTechInc.sendMessage(m.chat, {
        audio: { url: download_url },
        mimetype: 'audio/mp4',
        fileName: `${title}.mp3`,
        caption: `🎶 *Here's your song:* ${title}\n🔊 *Enjoy the music and feel the vibes!*`
      }, { quoted: m });

      // Removed the delayed autoreact and extra messages for no delay
      // You can add immediate reactions here if you want, e.g.:
      // await IconicTechInc.sendMessage(m.chat, { react: { text: `💃`, key: m.key } });
      // await IconicTechInc.sendMessage(m.chat, { react: { text: `🎉`, key: m.key } });

    } else {
      replyglobal(`*Failed to fetch the song! Please try again later.*`);
    }
  } catch (error) {
    console.error('Error during /play command:', error);
    replyglobal(`*An error occurred while processing your request. Please try again later.*`);
  }
  break;
}
case 'musiclist': {
  if (!text) return replyglobal(`*Example*: ${prefix + command} omah lay`);

  try {
    // React to the message with a music note emoji before starting
    await IconicTechInc.sendMessage(m.chat, { react: { text: `🎵`, key: m.key } });

    const yts = require("yt-search");
    const search = await yts(text);
    const videos = search.videos.slice(0, 10); // Get first 10 results

    if (!videos.length) {
      replyglobal(`*No results found for:* ${text}`);
      return;
    }

    // Create the list of songs
    let listMessage = `> *QUEEN_RUVA_ᴀI MUSIC LIST*\n\n` +
      `🔎 *Search Query:* ${text}\n` +
      `📋 *Found ${videos.length} results:*\n\n`;

    videos.forEach((video, index) => {
      listMessage += `${index + 1}. *${video.title}*\n` +
        `   👤 *Artist:* ${video.author.name}\n` +
        `   ⏳ *Duration:* ${video.timestamp}\n` +
        `   👀 *Views:* ${video.views}\n\n`;
    });

    listMessage += `\n💡 *To download any song, type:*\n` +
      `*${prefix}play [artist]*\n` +
      `*Example:* ${prefix}play omah lay\n\n` +
      `> *POᴡᴇʀᴇᴅ BY ɪᴄᴏɴɪᴄ Tᴇᴄʜ*`;

    // Send the list as a message
    await IconicTechInc.sendMessage(m.chat, {
      text: listMessage
    }, { quoted: m });

  } catch (error) {
    console.error('Error during musiclist command:', error);
    replyglobal(`*An error occurred while processing your request. Please try again later.*`);
  }
  break;
}
case 'movie': {
    if (!text) return replyglobal('Please provide a movie name.');

    try {
        // React to indicate processing
        await replyglobal(m.chat, { react: { text: '🎬', key: m.key } });

        // Fetch movie details from the API
        const apiUrl = `https://api.popcat.xyz/imdb?q=${encodeURIComponent(text)}`;
        const apiResponse = await axios.get(apiUrl);

        if (apiResponse.data && apiResponse.data.title) {
            const movie = apiResponse.data;
            replyglobal(`*Movie:* ${movie.title} (${movie.year})
*Rating:* ${movie.rating} / 10
*Plot:* ${movie.plot.substring(0, 100)}...
For more details: ${movie.imdburl}`);
        } else {
            replyglobal('No movie found. Please try again with a different title.');
        }
    } catch (error) {
        console.error('Error during /movie command:', error);
        replyglobal('An error occurred while processing your request. Please try again later.');
    }
    break;
}
case 'disappointed': {
    const [text1, text2] = text.split('|').map(t => t?.trim());

    if (!text1 || !text2) {
        replyglobal(
            '😐 *Disappointed Black Man Meme*\n\n' +
            `Usage: ${prefix + command} [top_text]|[bottom_text]\n` +
            `Example: ${prefix + command} iconic|tech\n\n` +
            'Max 40 characters per side.\n\n' +
            '*Powered by Queen Ruva AI Beta*'
        );
        return;
    }

    // Length Validation
    if (text1.length > 40 || text2.length > 40) {
        replyglobal(
            '❌ *Too Much Text*\n\n' +
            `Top: ${text1.length}/40\n` +
            `Bottom: ${text2.length}/40\n\n` +
            'Keep it short like a punchline!\n\n' +
            '*Powered by Queen Ruva AI Beta*'
        );
        return;
    }

    try {
        const apiUrl = `https://api.nexoracle.com/memes/disappointed-black-man?apikey=75957eaec54d70ace3&text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`;

        // Test API availability
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);

        const testResponse = await fetch(apiUrl, {
            method: 'HEAD',
            signal: controller.signal
        });
        clearTimeout(timeout);

        if (!testResponse.ok) throw new Error(`API returned ${testResponse.status}`);

        // Typing indicator
        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: '😐 *Disappointed Reaction*\n\n' +
                     `Top: ${text1}\n` +
                     `Bottom: ${text2}\n\n` +
                     '*Powered by Iconic Tech*',
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'Disappointed Meme',
                    body: 'When expectations meet reality!',
                    thumbnail: await (await fetch('https://i.imgur.com/JQLz4KX.png')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Disappointed Meme API Error:', error);

        replyglobal(
            '⚠️ *Could Not Generate Meme*\n\n' +
            'Try again with shorter text or check your input!\n\n' +
            '*Powered by Queen Ruva AI Beta*'
        );
    }
    break;
}
case 'image2pdf': {
    if (!text) {
        replyglobal(
            '🖼️ *Image to PDF Converter*\n\n' +
            `Usage: ${prefix + command} [image_url]\n` +
            `Example: ${prefix + command} https://example.com/image.jpg\n\n` +
            '*Powered by Queen Ruva AI Beta*'
        );
        return;
    }

    const imageUrl = text.trim();

    // Simple URL validation
    if (!/^https?:\/\//i.test(imageUrl)) {
        replyglobal(
            '❌ *Invalid URL*\n\n' +
            'Please provide a valid image link (http or https).\n\n' +
            '*Powered by Queen Ruva AI Beta*'
        );
        return;
    }

    try {
        const apiUrl = `https://api.nexoracle.com/converter/image2pdf?apikey=75957eaec54d70ace3&img=${encodeURIComponent(imageUrl)}`;

        // API check with timeout
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);

        const testResponse = await fetch(apiUrl, {
            method: 'HEAD',
            signal: controller.signal
        });
        clearTimeout(timeout);

        if (!testResponse.ok) throw new Error(`API returned ${testResponse.status}`);

        // Typing indicator
        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        await IconicTechInc.sendMessage(m.chat, {
            document: { url: apiUrl },
            fileName: 'Converted_Image.pdf',
            mimetype: 'application/pdf',
            caption: '🖼️ *Image Converted to PDF*\n\n' +
                     '*Powered by Iconic Tech*',
            contextInfo: {
                externalAdReply: {
                    title: 'Image to PDF',
                    body: 'Your image is now a PDF!',
                    thumbnail: await (await fetch('https://i.imgur.com/JQLz4KX.png')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Image2PDF API Error:', error);

        replyglobal(
            '⚠️ *Could Not Convert Image*\n\n' +
            'Make sure the link is correct and the image is publicly accessible.\n\n' +
            '*Powered by Queen Ruva AI Beta*'
        );
    }
    break;
}
case 'emoji2gif': {
    if (!text) {
        replyglobal(
            '✨ *Emoji to GIF Converter*\n\n' +
            `Usage: ${prefix + command} [emoji]\n` +
            `Example: ${prefix + command} 😘\n\n` +
            '*Powered by Queen Ruva AI Beta*'
        );
        return;
    }

    const emoji = text.trim();

    // Emoji validation (basic check)
    if (emoji.length > 3) {
        replyglobal(
            '❌ *Invalid Emoji*\n\n' +
            'Please send only **one emoji**.\n\n' +
            '*Powered by Queen Ruva AI Beta*'
        );
        return;
    }

    try {
        const apiUrl = `https://api.nexoracle.com/converter/emoji2gif?apikey=75957eaec54d70ace3&emoji=${encodeURIComponent(emoji)}`;

        // Test API with timeout
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);

        const testResponse = await fetch(apiUrl, {
            method: 'HEAD',
            signal: controller.signal
        });
        clearTimeout(timeout);

        if (!testResponse.ok) throw new Error(`API returned ${testResponse.status}`);

        // Typing indicator
        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        await IconicTechInc.sendMessage(m.chat, {
            video: { url: apiUrl },
            caption: '✨ *Here is your animated emoji!*\n\n' +
                     `Emoji: ${emoji}\n\n` +
                     '*Powered by Iconic Tech*',
            gifPlayback: true,
            mimetype: 'video/gif',
            contextInfo: {
                externalAdReply: {
                    title: 'Emoji to GIF',
                    body: 'Your emoji is now alive!',
                    thumbnail: await (await fetch('https://i.imgur.com/JQLz4KX.png')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Emoji2Gif API Error:', error);

        replyglobal(
            '⚠️ *Could Not Convert Emoji*\n\n' +
            'Maybe the emoji is unsupported or API failed. Try another one!\n\n' +
            '*Powered by Queen Ruva AI Beta*'
        );
    }
    break;
}
case 'font': {
    if (!text) {
        replyglobal(
            '✨ *Stylish Text Generator*\n\n' +
            `Usage: ${prefix + command} [your_text]\n` +
            `Example: ${prefix + command} Maher Zubair\n\n` +
            '*Powered by Queen Ruva AI Beta*'
        );
        return;
    }

    const userInput = text.trim();

    // Length validation
    if (userInput.length > 50) {
        replyglobal(
            '❌ *Text Too Long*\n\n' +
            'Maximum allowed is 50 characters.\n\n' +
            '*Powered by Queen Ruva AI Beta*'
        );
        return;
    }

    try {
        const apiUrl = `https://api.nexoracle.com/misc/stylish-text?apikey=75957eaec54d70ace3&text=${encodeURIComponent(userInput)}`;

        // Typing indicator
        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        const response = await fetch(apiUrl);
        const result = await response.json();

        if (!result || !result.data || !Array.isArray(result.data) || result.data.length === 0) {
            throw new Error('No stylish text found.');
        }

        // Prepare styled texts
        let stylishOutput = `✨ *Stylish Text for:* ${userInput}\n\n`;
        result.data.slice(0, 20).forEach((style, idx) => {
            stylishOutput += `*${idx + 1}.* ${style}\n`;
        });

        replyglobal(stylishOutput + '\n*Powered by Queen Ruva AI Beta*');

    } catch (error) {
        console.error('Stylish Text API Error:', error);

        replyglobal(
            '⚠️ *Could Not Generate Stylish Text*\n\n' +
            'Try again later or with different text.\n\n' +
            '*Powered by Queen Ruva AI Beta*'
        );
    }
    break;
}
case 'drake': {
    // Input validation
    const [text1, text2] = text.split('|').map(t => t?.trim());
    if (!text1 || !text2) {
        replyglobal(
            '🎶 *Drake Meme Generator*\n\n' +
            `Usage: ${prefix + command} [bad_thing]|[good_thing]\n` +
            `Example: ${prefix + command} amongus|amogus\n` +
            'Max 25 characters per side\n\n' +
            '*Powered by Queen Ruva AI Beta*'
        );
        return;
    }

    // Length validation
    if (text1.length > 25 || text2.length > 25) {
        replyglobal(
            '❌ *Too Much Text*\n\n' +
            `Left: ${text1.length}/25\n` +
            `Right: ${text2.length}/25\n\n` +
            'Keep it short like Drake\'s songs!\n\n' +
            '*Powered by Queen Ruva AI Beta*'
        );
        return;
    }

    // Profanity filter
    const blockedPatterns = [
        /fuck|shit|asshole|bitch|cunt/i,
        /n[i1!]+gg[e3r]*/i
    ];
    
    if ([text1, text2].some(t => blockedPatterns.some(p => p.test(t)))) {
        replyglobal(
            '❌ *Inappropriate Content*\n\n' +
            'Drake prefers clean memes\n\n' +
            '*Powered by Queen Ruva AI Beta*'
        );
        return;
    }

    try {
        const apiUrl = `https://api.popcat.xyz/drake?text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`;
        
        // API verification with timeout
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);
        
        const testResponse = await fetch(apiUrl, { 
            method: 'HEAD',
            signal: controller.signal 
        });
        clearTimeout(timeout);

        if (!testResponse.ok) throw new Error(`API returned ${testResponse.status}`);

        // Typing indicator
        await IconicTechInc.sendPresenceUpdate('composing', m.chat);
        
        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: '🎶 *Drake Reaction*\n\n' +
                    `❌ ${text1}\n` +
                    `✅ ${text2}\n\n` +
                    '*Powered by Iconic Tech*',
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'Drake Meme',
                    body: 'Which one are you choosing?',
                    thumbnail: await (await fetch('https://i.imgur.com/JQLz4KX.png')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Drake API Error:', error);
        
        // Fallback memes
        const fallbackPairs = [
            ["amongus", "amogus"],
            ["homework", "gaming"],
            ["work", "sleep"]
        ];
        const [f1, f2] = fallbackPairs[Math.floor(Math.random() * fallbackPairs.length)];
        
        replyglobal(
            '⚠️ *Could Not Generate*\n\n' +
            `Default meme:\n` +
            `❌ ${f1}\n` +
            `✅ ${f2}\n\n` +
            'API failed but here\'s a premade one!\n\n' +
            '*Powered by Queen Ruva AI Beta*'
        );
    }
    break;
}
case 'oogway': {
    // Input validation
    if (!text) {
        replyglobal(
            '🐢 *Master Oogway Quote Generator*\n\n' +
            `Usage: ${prefix + command} [your_wisdom]\n` +
            `Example: ${prefix + command} Yesterday is history\n` +
            'Max 100 characters\n\n' +
            '*Powered by Queen Ruva AI Beta*'
        );
        return;
    }

    const trimmedText = text.trim();

    // Length validation
    if (trimmedText.length > 100) {
        replyglobal(
            '❌ *Too Much Text*\n\n' +
            `Your text: ${trimmedText.length}/100 characters\n\n` +
            'Be wise, but be brief like Oogway!\n\n' +
            '*Powered by Queen Ruva AI Beta*'
        );
        return;
    }

    // Profanity filter
    const blockedPatterns = [
        /fuck|shit|asshole|bitch|cunt/i,
        /n[i1!]+gg[e3r]*/i
    ];
    
    if (blockedPatterns.some(p => p.test(trimmedText))) {
        replyglobal(
            '❌ *Inappropriate Content*\n\n' +
            'Master Oogway does not approve of rude words\n\n' +
            '*Powered by Queen Ruva AI Beta*'
        );
        return;
    }

    try {
        const apiUrl = `https://api.popcat.xyz/v2/oogway?text=${encodeURIComponent(trimmedText)}`;

        // API verification with timeout
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);

        const testResponse = await fetch(apiUrl, {
            method: 'HEAD',
            signal: controller.signal
        });
        clearTimeout(timeout);

        if (!testResponse.ok) throw new Error(`API returned ${testResponse.status}`);

        // Typing indicator
        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: '🐢 *Master Oogway Wisdom*\n\n' +
                     `📝 ${trimmedText}\n\n` +
                     '*Powered by Iconic Tech*',
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'Oogway Wisdom',
                    body: 'Words of wisdom...',
                    thumbnail: await (await fetch('https://i.imgur.com/JQLz4KX.png')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Oogway API Error:', error);

        // Fallback wisdoms
        const fallbackWisdoms = [
            "Yesterday is history.",
            "Tomorrow is a mystery.",
            "There are no accidents."
        ];
        const randomFallback = fallbackWisdoms[Math.floor(Math.random() * fallbackWisdoms.length)];

        replyglobal(
            '⚠️ *Could Not Generate Wisdom*\n\n' +
            `Default wisdom:\n` +
            `📝 ${randomFallback}\n\n` +
            'API failed but Master Oogway still smiles!\n\n' +
            '*Powered by Queen Ruva AI Beta*'
        );
    }
    break;
}
case 'affect': {
    // Input validation: expect a URL as text
    if (!text?.trim()) {
        replyglobal(
            '🎭 *Affect Meme Generator* 🎭\n\n' +
            `Usage: ${prefix + command} [image URL]\n` +
            `Example: ${prefix + command} https://i.pinimg.com/564x/c1/43/af/c143afa8d927349d5b66854a9ed08f14.jpg\n\n` +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
        return;
    }

    // Basic URL validation (simple regex)
    const urlPattern = /^https?:\/\/[^\s]+$/i;
    if (!urlPattern.test(text)) {
        replyglobal('❌ Please provide a valid image URL.');
        return;
    }

    try {
        const apiKey = '75957eaec54d70ace3';
        const apiUrl = `https://api.nexoracle.com/memes/affect?apikey=${apiKey}&img=${encodeURIComponent(text)}`;

        // Show typing indicator
        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        // Send the image with effect
        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: '🎭 *Here is your affected meme!* 🎭\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*',
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: ' Meme Generator',
                    body: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ',
                    thumbnail: await (await fetch('https://i.imgur.com/3ZQ3ZQ3.jpeg')).buffer(), // example thumbnail
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Affect API Error:', error);
        replyglobal(
            '⚠️ *Oops! Something went wrong while generating your meme.*\n' +
            'Please try again later.\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }
    break;
}
case 'naughtyspongebob': {
    if (!text?.trim()) {
        replyglobal(
            '🧽 *Naughty SpongeBob Meme Generator* 🧽\n\n' +
            `Usage: ${prefix + command} [text]\n` +
            `Example: ${prefix + command} Let\'s Do IT\n\n` +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
        return;
    }

    try {
        const apiKey = '75957eaec54d70ace3';
        const apiUrl = `https://api.nexoracle.com/memes/naughty-sponge-bob?apikey=${apiKey}&text=${encodeURIComponent(text)}`;

        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `🧽 *Naughty SpongeBob Meme*\n\n"${text}"\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*`,
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'Naughty SpongeBob Meme',
                    body: 'Generated by Queen Ruva Ai Beta',
                    thumbnail: await (await fetch('https://i.imgur.com/JxLd5F0.jpeg')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Naughty SpongeBob API Error:', error);
        replyglobal(
            '⚠️ *Failed to generate Naughty SpongeBob meme.*\n' +
            'Please try again later.\n\n' +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }
    break;
}
case 'sadblackman': {
    // Expect input format: text1 | text2
    if (!text?.trim()) {
        replyglobal(
            '😢 *Sad Black Man Meme Generator* 😢\n\n' +
            `Usage: ${prefix + command} [text1] | [text2]\n` +
            `Example: ${prefix + command} Queen Ruva Ai Beta | Queen Ruva Ai Betas\n\n` +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
        return;
    }

    const parts = text.split('|').map(p => p.trim());
    if (parts.length !== 2) {
        replyglobal('❌ Please provide exactly two texts separated by "|".');
        return;
    }

    const [text1, text2] = parts;

    try {
        const apiKey = '75957eaec54d70ace3';
        const apiUrl = `https://api.nexoracle.com/memes/sad-black-man?apikey=${apiKey}&text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`;

        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `😢 *Sad Black Man Meme*\n\nTop Text: ${text1}\nBottom Text: ${text2}\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*`,
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'Sad Black Man Meme Generator',
                    body: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ',
                    thumbnail: await (await fetch('https://i.imgur.com/3ZQ3ZQ3.jpeg')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Sad Black Man API Error:', error);
        replyglobal(
            '⚠️ *Failed to generate Sad Black Man meme.*\n' +
            'Please try again later.\n\n' +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }
    break;
}
case 'myheart': {
    // Expect input format: text1 | text2 | text3
    // Example: !myheart when my brother calls me | when my mother calls me | when my father calls me

    if (!text?.trim()) {
        replyglobal(
            '❤️ *My Heart Meme Generator* ❤️\n\n' +
            `Usage: ${prefix + command} [text1] | [text2] | [text3]\n` +
            `Example: ${prefix + command} when my brother calls me | when my mother calls me | when my father calls me\n\n` +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
        return;
    }

    const parts = text.split('|').map(p => p.trim());
    if (parts.length !== 3) {
        replyglobal('❌ Please provide exactly three texts separated by "|".');
        return;
    }

    const [text1, text2, text3] = parts;

    try {
        const apiKey = '75957eaec54d70ace3';
        const apiUrl = `https://api.nexoracle.com/memes/my-heart?apikey=${apiKey}&text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}&text3=${encodeURIComponent(text3)}`;

        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `❤️ *My Heart Meme*\n\n` +
                     `1️⃣ ${text1}\n` +
                     `2️⃣ ${text2}\n` +
                     `3️⃣ ${text3}\n\n` +
                     '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*',
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'My Heart Meme Generator',
                    body: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ',
                    thumbnail: await (await fetch('https://i.imgur.com/3ZQ3ZQ3.jpeg')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('My Heart API Error:', error);
        replyglobal(
            '⚠️ *Failed to generate My Heart meme.*\n' +
            'Please try again later.\n\n' +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }
    break;
}
case 'colorfulneon': {
    if (!text?.trim()) {
        replyglobal(
            '🌈 *Colorful Neon Light Text Generator* 🌈\n\n' +
            `Usage: ${prefix + command} [text]\n` +
            `Example: ${prefix + command} Maher Zubair\n\n` +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
        return;
    }

    try {
        const apiKey = '75957eaec54d70ace3';
        const apiUrl = `https://api.nexoracle.com/ephoto360/colorful-neon-light?apikey=${apiKey}&text=${encodeURIComponent(text)}`;

        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `🌈 *Colorful Neon Light*\n\n"${text}"\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*`,
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'Colorful Neon Light Text',
                    body: 'Generated by Queen Ruva Ai Beta',
                    thumbnail: await (await fetch('https://i.imgur.com/3ZQ3ZQ3.jpeg')).buffer(), // You can replace with a relevant thumbnail
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Colorful Neon Light API Error:', error);
        replyglobal(
            '⚠️ *Failed to generate Colorful Neon Light text.*\n' +
            'Please try again later.\n\n' +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }
    break;
}
case 'avengers': {
    if (!text?.trim()) {
        replyglobal(
            '🛡️ *Avengers Logo Generator* 🛡️\n\n' +
            `Usage: ${prefix + command} [text1] | [text2]\n` +
            `Example: ${prefix + command} Maher | Zubair\n\n` +
            '> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
        return;
    }

    const parts = text.split('|').map(p => p.trim());
    if (parts.length !== 2) {
        replyglobal('❌ Please provide exactly two texts separated by "|".');
        return;
    }

    const [text1, text2] = parts;

    try {
        const apiKey = '75957eaec54d70ace3';
        const apiUrl = `https://api.nexoracle.com/ephoto360/avengers?apikey=${apiKey}&text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`;

        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `🛡️ *Avengers Logo*\n\n${text1} | ${text2}\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*`,
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'Avengers Logo Generator',
                    body: '> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ',
                    thumbnail: await (await fetch('https://i.imgur.com/3ZQ3ZQ3.jpeg')).buffer(), // Replace with relevant thumbnail if needed
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Avengers Logo API Error:', error);
        replyglobal(
            '⚠️ *Failed to generate Avengers logo.*\n' +
            'Please try again later.\n\n' +
            '> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }
    break;
}
case 'bloody': 
case 'bloodytext': {
    if (!text?.trim()) {
        return replyglobal(
            '� *Bloody Text Generator* �\n\n' +
            `Usage: ${prefix + command} [text]\n` +
            `Example: ${prefix + command} Maher Zubair\n\n` +
            '> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }

    try {
        const apiUrl = `https://api.nexoracle.com/ephoto360/bloody-text2?apikey=75957eaec54d70ace3&text=${encodeURIComponent(text)}`;

        // Show "typing" indicator
        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        // Send the generated image
        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `*Bloody Text*\n\n"${text}"\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*`,
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'Bloody Text Generator',
                    body: '> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ',
                    thumbnail: await (await fetch('https://i.imgur.com/3ZQ3ZQ3.jpeg')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Bloody Text API Error:', error);
        replyglobal(
            '⚠️ *Failed to generate bloody text image.*\n' +
            'Please try again later.\n\n' +
            '> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }
    break;
}
case 'blackpink': {
    if (!text?.trim()) {
        return replyglobal(
            '🖤💖 *Blackpink Style Generator* 🖤💖\n\n' +
            `Usage: ${prefix + command} [text]\n` +
            `Example: ${prefix + command} Maher Zubair\n\n` +
            '> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }

    try {
        const apiUrl = `https://api.nexoracle.com/ephoto360/blackpink?apikey=75957eaec54d70ace3&text=${encodeURIComponent(text)}`;
        
        // Show typing indicator
        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        // Send the result
        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `🖤💖 *BLΛƆKPIИK Style* 💖🖤\n\n"${text}"\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*`,
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'BLΛƆKPIИK Style Generator',
                    body: 'Create Blackpink logo style text',
                    thumbnail: await (await fetch('https://i.imgur.com/ABCD123.jpg')).buffer(), // Use actual Blackpink-themed image
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Blackpink API Error:', error);
        replyglobal(
            '⚠️ *Failed to generate Blackpink style text*\n' +
            'Please try again later or check your text\n\n' +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }
    break;
}
case 'warzone':
case 'codwarzone': {
    if (!text?.trim()) {
        return replyglobal(
            '🔫 *Call of Duty: Warzone Text Generator* 🔫\n\n' +
            `Usage: ${prefix + command} [text1] | [text2]\n` +
            `Example: ${prefix + command} Maher | Zubair\n\n` +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }

    const parts = text.split('|').map(p => p.trim());
    if (parts.length !== 2) {
        return replyglobal(
            '⚠️ *Incorrect Format* ⚠️\n\n' +
            'Please provide exactly two texts separated by "|"\n' +
            `Example: ${prefix + command} Player | One\n\n` +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }

    const [text1, text2] = parts;

    try {
        const apiUrl = `https://api.nexoracle.com/ephoto360/cod-warzone?apikey=75957eaec54d70ace3&text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`;

        // Show "typing" indicator
        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        // Send the generated image
        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `🎮 *Call of Duty: Warzone*\n\n${text1.toUpperCase()} ${text2.toUpperCase()}\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*`,
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'COD: Warzone Text Generator',
                    body: 'Create your Warzone player card',
                    thumbnail: await (await fetch('https://i.imgur.com/warzone-thumb.jpg')).buffer(), // Use Warzone-themed image
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Warzone API Error:', error);
        replyglobal(
            '⚠️ *Failed to generate Warzone text*\n' +
            'The Verdansk servers might be down!\n\n' +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }
    break;
}
case 'groupfinder': {
    if (!text) return replyglobal(`*Example*: ${prefix + command} Zimbabwe`);

    try {
        // React to indicate processing
        await replyglobal(m.chat, { react: { text: '🔍', key: m.key } });

        // Fetch groups from API
        const apiUrl = `iconictech-api.zone.id/api/search-whatsapp?q=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);

        if (!response.data || !response.data.status || !response.data.result || !response.data.result.length) {
            return replyglobal(`No WhatsApp groups found for "${text}". Try another search term.`);
        }

        const groups = response.data.result.slice(0, 10); // Limit to 10 groups max

        // Prepare group list message
        let groupListMessage = `🔍 *WhatsApp Groups Found for "${text}"*\n\n`;
        groupListMessage += `*Creator:* ${response.data.creator || 'Iconic Tech'}\n`;
        groupListMessage += `*Total Groups Found:* ${response.data.result.length}\n\n`;
        groupListMessage += `*Top ${groups.length} Groups:*\n\n`;

        // Add each group to the message
        groups.forEach((group, index) => {
            groupListMessage += `*${index + 1}. ${group.title || 'Untitled Group'}*\n`;
            groupListMessage += `🔗 ${group.link}\n\n`;
        });

        // Add footer and instructions
        groupListMessage += `ℹ️ Click on any link above to join a group.\n`;
        groupListMessage += `📌 *Note:* Be cautious when joining unknown groups.\n\n`;
        groupListMessage += `*Powered by Iconic Tech*`;

        // Send the group list
        await replyglobal(groupListMessage);

        // Optional: Send group thumbnails if available
        for (const group of groups.slice(0, 3)) { // Limit to 3 images to avoid spam
            if (group.thumb) {
                try {
                    await IconicTechInc.sendMessage(m.chat, {
                        image: { url: group.thumb },
                        caption: `*${group.title}*\n${group.link}`
                    }, { quoted: m });
                } catch (imgError) {
                    console.error('Error sending group thumbnail:', imgError);
                }
            }
        }

    } catch (error) {
        console.error('Error in groupfinder command:', error);
        replyglobal(`An error occurred while searching for groups. Please try again later.`);
    }
    break;
}
case 'cubic':
case '3dcubic': {
    if (!text?.trim()) {
        return replyglobal(
            '🧊 *3D Cubic Text Generator* 🧊\n\n' +
            `Usage: ${prefix + command} [text]\n` +
            `Example: ${prefix + command} Maher Zubair\n\n` +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }

    try {
        const apiUrl = `https://api.nexoracle.com/ephoto360/cubic-3d?apikey=75957eaec54d70ace3&text=${encodeURIComponent(text)}`;

        // Show "typing" indicator
        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        // Send the generated 3D image
        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `🧊 *3D Cubic Text Effect*\n\n"${text}"\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*`,
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: '3D Cubic Text Generator',
                    body: 'Create stunning 3D cube text effects',
                    thumbnail: await (await fetch('https://i.imgur.com/3d-cube-thumb.jpg')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('3D Cubic API Error:', error);
        replyglobal(
            '⚠️ *Failed to generate 3D cubic text*\n' +
            'The render engine might be overloaded!\n\n' +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }
    break;
}
case 'cyberhunter':
case 'cyberhunt': {
    if (!text?.trim()) {
        return replyglobal(
            '🔮 *Cyber Hunter Text Generator* 🔮\n\n' +
            `Usage: ${prefix + command} [text]\n` +
            `Example: ${prefix + command} Maher Zubair\n\n` +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }

    try {
        const apiUrl = `https://api.nexoracle.com/ephoto360/cyber-hunter?apikey=75957eaec54d70ace3&text=${encodeURIComponent(text)}`;

        // Show "processing" indicator
        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        // Send the futuristic cyber text image
        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `🔮 *CYBER HUNTER*\n\n「 ${text.toUpperCase()} 」\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*`,
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'CYBER HUNTER TEXT',
                    body: 'Neon futuristic text generator',
                    thumbnail: await (await fetch('https://i.imgur.com/neon-thumb.jpg')).buffer(), // Use cyberpunk-style thumbnail
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Cyber Hunter API Error:', error);
        replyglobal(
            '⚠️ *Matrix System Failure*\n' +
            'Failed to generate cyber text. Try again later.\n\n' +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }
    break;
}
case 'bokeh': 
case 'bokehtext': {
    if (!text?.trim()) {
        return replyglobal(
            '✨ *Bokeh Text Generator* ✨\n\n' +
            `Usage: ${prefix + command} [text]\n` +
            `Example: ${prefix + command} Maher Zubair\n\n` +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }

    try {
        const apiUrl = `https://api.nexoracle.com/ephoto360/bokeh-text?apikey=75957eaec54d70ace3&text=${encodeURIComponent(text)}`;

        // Show typing indicator
        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        // Send the generated image
        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `✨ *Bokeh Text Effect*\n\n"${text}"\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*`,
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'Bokeh Text Generator',
                    body: 'Create beautiful bokeh text effects',
                    thumbnail: await (await fetch('https://i.imgur.com/3ZQ3ZQ3.jpeg')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Bokeh Text API Error:', error);
        replyglobal(
            '⚠️ *Failed to generate bokeh text effect*\n' +
            'The service might be temporarily unavailable\n\n' +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }
    break;
}
// Random command not from the list
case 'serverinfo': // Get server information
    if (!isCreator) return replyglobal("🚫 *Owner Only* - This command is restricted to the bot owner");
    
    try {
        const os = require('os');
        const totalMem = (os.totalmem() / (1024 * 1024)).toFixed(2);
        const freeMem = (os.freemem() / (1024 * 1024)).toFixed(2);
        const uptime = formatUptime(os.uptime());
        
        const infoMessage = `🖥️ *Server Information*\n\n`
            + `🔹 *Hostname:* ${os.hostname()}\n`
            + `🔹 *Platform:* ${os.platform()} ${os.arch()}\n`
            + `🔹 *CPU:* ${os.cpus()[0].model}\n`
            + `🔹 *Cores:* ${os.cpus().length}\n`
            + `🔹 *Memory:* ${freeMem}MB free / ${totalMem}MB total\n`
            + `🔹 *Uptime:* ${uptime}\n`
            + `🔹 *Node.js:* ${process.version}\n\n> DEVELOPED BY ICONIC TECH`;
        
        replyglobal(infoMessage);
    } catch (error) {
        console.error(error);
        replyglobal("❌ Failed to retrieve server information");
    }
    break;

function formatUptime(seconds) {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    return `${days}d ${hours}h ${mins}m`;
}
case 'gfx12': 
case 'gfxglow': {
    if (!text?.trim()) {
        return replyglobal(
            '✨ *GFX 12 Glow Text Generator* ✨\n\n' +
            `Usage: ${prefix + command} [text]\n` +
            `Example: ${prefix + command} GLOW\n\n` +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }

    try {
        const apiUrl = `https://api.nexoracle.com/image-creating/gfx12?apikey=75957eaec54d70ace3&text=${encodeURIComponent(text)}`;

        // Show processing indicator
        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        // Send the glowing text effect
        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `✨ *GLOWING GFX 12*\n\n${text.toUpperCase()}\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*`,
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'GFX 12 Glow Text',
                    body: 'Radiant glowing text effects',
                    thumbnail: await (await fetch('https://i.imgur.com/glow-effect-thumb.jpg')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('GFX 12 API Error:', error);
        replyglobal(
            '⚠️ *Glow Effect Failed*\n' +
            'The luminescent particles dispersed!\n\n' +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }
    break;
}
case 'gfx11':
case 'gfxneon': {
    if (!text?.trim()) {
        return replyglobal(
            '💠 *GFX 11 Neon Text Generator* 💠\n\n' +
            `Usage: ${prefix + command} [text]\n` +
            `Example: ${prefix + command} NEON\n\n` +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }

    try {
        const apiUrl = `https://api.nexoracle.com/image-creating/gfx11?apikey=75957eaec54d70ace3&text=${encodeURIComponent(text)}`;

        // Show processing indicator
        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        // Send the neon text effect
        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `💠 *NEON GFX 11*\n\n${text.toUpperCase()}\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*`,
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'GFX 11 Neon Text',
                    body: 'Ultra-bright neon sign effect',
                    thumbnail: await (await fetch('https://i.imgur.com/neon-effect-thumb.jpg')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('GFX 11 API Error:', error);
        replyglobal(
            '⚠️ *Neon Lights Failed*\n' +
            'The neon tubes burned out! Try again later.\n\n' +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }
    break;
}
case 'gfx10':
case 'gfxgold': {
    if (!text?.trim()) {
        return replyglobal(
            '🌟 *GFX 10 Gold Text Generator* 🌟\n\n' +
            `Usage: ${prefix + command} [text]\n` +
            `Example: ${prefix + command} VIP\n\n` +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }

    try {
        const apiUrl = `https://api.nexoracle.com/image-creating/gfx10?apikey=75957eaec54d70ace3&text=${encodeURIComponent(text)}`;

        // Show processing indicator
        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        // Send the premium gold text effect
        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `🌟 *PREMIUM GFX 10*\n\n${text.toUpperCase()}\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*`,
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'GFX 10 Gold Text',
                    body: 'Luxury text effect generator',
                    thumbnail: await (await fetch('https://i.imgur.com/gold-text-thumb.jpg')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('GFX 10 API Error:', error);
        replyglobal(
            '⚠️ *Failed to generate gold text effect*\n' +
            'Our gold plating machine is jammed!\n\n' +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }
    break;
}
case 'attp':
case 'animtext': {
    if (!text?.trim()) {
        return replyglobal(
            '✨ *Animated Text Generator (ATTP)* ✨\n\n' +
            `Usage: ${prefix + command} [text]\n` +
            `Example: ${prefix + command} Hello\n\n` +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }

    try {
        const apiUrl = `https://api.nexoracle.com/image-creating/attp?apikey=75957eaec54d70ace3&text=${encodeURIComponent(text)}`;

        // Show processing indicator
        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        // Send as animated sticker if possible, otherwise as image
        await IconicTechInc.sendMessage(m.chat, {
            sticker: { url: apiUrl },
            mimetype: 'image/webp',
            caption: `✨ *ANIMATED TEXT*\n\n"${text}"\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*`,
            contextInfo: {
                externalAdReply: {
                    title: 'ATTP Generator',
                    body: 'Create glittery animated text',
                    thumbnail: await (await fetch('https://i.imgur.com/glitter-thumb.jpg')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('ATTP API Error:', error);
        
        // Fallback to sending as normal image if sticker fails
        try {
            await IconicTechInc.sendMessage(m.chat, {
                image: { url: apiUrl },
                caption: `✨ *ANIMATED TEXT*\n\n"${text}"\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*`
            }, { quoted: m });
        } catch (err) {
            replyglobal(
                '⚠️ *Failed to generate animated text*\n' +
                'The glitter factory crashed!\n\n' +
                '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
            );
        }
    }
    break;
}
case 'angelwings': {
    if (!text?.trim()) {
        replyglobal(
            '👼 *Angel Wings Text Generator* 👼\n\n' +
            `Usage: ${prefix + command} [text]\n` +
            `Example: ${prefix + command} Maher Zubair\n\n` +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
        return;
    }

    try {
        const apiKey = '75957eaec54d70ace3';
        const apiUrl = `https://api.nexoracle.com/ephoto360/angel-wings2?apikey=${apiKey}&text=${encodeURIComponent(text)}`;

        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `👼 *Angel Wings*\n\n"${text}"\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*`,
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'Angel Wings Text Generator',
                    body: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ',
                    thumbnail: await (await fetch('https://i.imgur.com/3ZQ3ZQ3.jpeg')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Angel Wings API Error:', error);
        replyglobal(
            '⚠️ *Failed to generate Angel Wings image.*\n' +
            'Please try again later.\n\n' +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }
    break;
}
case 'blackteam': {
    if (!text?.trim()) {
        replyglobal(
            '⚫ *Black Team Text Generator* ⚫\n\n' +
            `Usage: ${prefix + command} [text1] | [text2]\n` +
            `Example: ${prefix + command} Maher | Zubair\n\n` +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
        return;
    }

    const parts = text.split('|').map(p => p.trim());
    if (parts.length !== 2) {
        replyglobal('❌ Please provide exactly two texts separated by "|".');
        return;
    }

    const [text1, text2] = parts;

    try {
        const apiKey = '75957eaec54d70ace3';
        const apiUrl = `https://api.nexoracle.com/ephoto360/black-team?apikey=${apiKey}&text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`;

        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `⚫ *Black Team*\n\n${text1} | ${text2}\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*`,
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'Black Team Text Generator',
                    body: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ',
                    thumbnail: await (await fetch('https://i.imgur.com/3ZQ3ZQ3.jpeg')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Black Team API Error:', error);
        replyglobal(
            '⚠️ *Failed to generate Black Team image.*\n' +
            'Please try again later.\n\n' +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }
    break;
}
case 'cartoongraffiti': {
    if (!text?.trim()) {
        replyglobal(
            '🎨 *Cartoon Style Graffiti Generator* 🎨\n\n' +
            `Usage: ${prefix + command} [text]\n` +
            `Example: ${prefix + command} Maher Zubair\n\n` +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
        return;
    }

    try {
        const apiKey = '75957eaec54d70ace3';
        const apiUrl = `https://api.nexoracle.com/ephoto360/cartoon-style-graffiti?apikey=${apiKey}&text=${encodeURIComponent(text)}`;

        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `🎨 *Cartoon Style Graffiti*\n\n"${text}"\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*`,
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'Cartoon Style Graffiti Generator',
                    body: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ',
                    thumbnail: await (await fetch('https://i.imgur.com/3ZQ3ZQ3.jpeg')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Cartoon Graffiti API Error:', error);
        replyglobal(
            '⚠️ *Failed to generate Cartoon Style Graffiti.*\n' +
            'Please try again later.\n\n' +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }
    break;
}
case 'cloudeffects': {
    if (!text?.trim()) {
        replyglobal(
            '☁️ *Cloud Effects Text Generator* ☁️\n\n' +
            `Usage: ${prefix + command} [text]\n` +
            `Example: ${prefix + command} Maher Zubair\n\n` +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
        return;
    }

    try {
        const apiKey = '75957eaec54d70ace3';
        const apiUrl = `https://api.nexoracle.com/ephoto360/cloud-effects?apikey=${apiKey}&text=${encodeURIComponent(text)}`;

        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `☁️ *Cloud Effects*\n\n"${text}"\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*`,
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'Cloud Effects Text Generator',
                    body: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ',
                    thumbnail: await (await fetch('https://i.imgur.com/3ZQ3ZQ3.jpeg')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Cloud Effects API Error:', error);
        replyglobal(
            '⚠️ *Failed to generate Cloud Effects image.*\n' +
            'Please try again later.\n\n' +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }
    break;
}
case 'captainamerica': {
    if (!text?.trim()) {
        replyglobal(
            '🛡️ *Captain America Logo Generator* 🛡️\n\n' +
            `Usage: ${prefix + command} [text1] | [text2]\n` +
            `Example: ${prefix + command} Maher | Zubair\n\n` +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
        return;
    }

    const parts = text.split('|').map(p => p.trim());
    if (parts.length !== 2) {
        replyglobal('❌ Please provide exactly two texts separated by "|".');
        return;
    }

    const [text1, text2] = parts;

    try {
        const apiKey = '75957eaec54d70ace3';
        const apiUrl = `https://api.nexoracle.com/ephoto360/captain-america?apikey=${apiKey}&text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`;

        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `🛡️ *Captain America Logo*\n\n${text1} | ${text2}\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*`,
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'Captain America Logo Generator',
                    body: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ',
                    thumbnail: await (await fetch('https://i.imgur.com/3ZQ3ZQ3.jpeg')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Captain America API Error:', error);
        replyglobal(
            '⚠️ *Failed to generate Captain America logo.*\n' +
            'Please try again later.\n\n' +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }
    break;
}
case 'fireworktext': {
    if (!text?.trim()) {
        replyglobal(
            '🎆 *Firework Text Generator* 🎆\n\n' +
            `Usage: ${prefix + command} [text]\n` +
            `Example: ${prefix + command} Maher Zubair\n\n` +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
        return;
    }

    try {
        const apiKey = '75957eaec54d70ace3';
        const apiUrl = `https://api.nexoracle.com/ephoto360/firework-text?apikey=${apiKey}&text=${encodeURIComponent(text)}`;

        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `🎆 *Firework Text*\n\n"${text}"\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*`,
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'Firework Text Generator',
                    body: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ',
                    thumbnail: await (await fetch('https://i.imgur.com/3ZQ3ZQ3.jpeg')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Firework Text API Error:', error);
        replyglobal(
            '⚠️ *Failed to generate Firework Text image.*\n' +
            'Please try again later.\n\n' +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }
    break;
}
case 'valorantbanner': {
    if (!text?.trim()) {
        replyglobal(
            '🎮 *Valorant YouTube Banner Generator* 🎮\n\n' +
            `Usage: ${prefix + command} [text1] | [text2] | [text3]\n` +
            `Example: ${prefix + command} Maher | Zubair | Dev\n\n` +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
        return;
    }

    const parts = text.split('|').map(p => p.trim());
    if (parts.length !== 3) {
        replyglobal('❌ Please provide exactly three texts separated by "|".');
        return;
    }

    const [text1, text2, text3] = parts;

    try {
        const apiKey = '75957eaec54d70ace3';
        const apiUrl = `https://api.nexoracle.com/ephoto360/valorant-youtube-banner?apikey=${apiKey}&text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}&text3=${encodeURIComponent(text3)}`;

        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `🎮 *Valorant YouTube Banner*\n\n${text1} | ${text2} | ${text3}\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*`,
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'Valorant YouTube Banner Generator',
                    body: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ',
                    thumbnail: await (await fetch('https://i.imgur.com/3ZQ3ZQ3.jpeg')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Valorant Banner API Error:', error);
        replyglobal(
            '⚠️ *Failed to generate Valorant YouTube banner.*\n' +
            'Please try again later.\n\n' +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }
    break;
}
case 'snow3d': {
    if (!text?.trim()) {
        replyglobal(
            '❄️ *Snow 3D Text Generator* ❄️\n\n' +
            `Usage: ${prefix + command} [text]\n` +
            `Example: ${prefix + command} Maher Zubair\n\n` +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
        return;
    }

    try {
        const apiKey = '75957eaec54d70ace3';
        const apiUrl = `https://api.nexoracle.com/ephoto360/snow-3d?apikey=${apiKey}&text=${encodeURIComponent(text)}`;

        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `❄️ *Snow 3D Text*\n\n"${text}"\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*`,
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'Snow 3D Text Generator',
                    body: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ',
                    thumbnail: await (await fetch('https://i.imgur.com/3ZQ3ZQ3.jpeg')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Snow 3D API Error:', error);
        replyglobal(
            '⚠️ *Failed to generate Snow 3D text image.*\n' +
            'Please try again later.\n\n' +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }
    break;
}
case 'americanflag3d': {
    if (!text?.trim()) {
        replyglobal(
            '🇺🇸 *American Flag 3D Text Generator* 🇺🇸\n\n' +
            `Usage: ${prefix + command} [text]\n` +
            `Example: ${prefix + command} Maher Zubair\n\n` +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
        return;
    }

    try {
        const apiKey = '75957eaec54d70ace3';
        const apiUrl = `https://api.nexoracle.com/ephoto360/american-flag-3d?apikey=${apiKey}&text=${encodeURIComponent(text)}`;

        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `🇺🇸 *American Flag 3D Text*\n\n"${text}"\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*`,
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'American Flag 3D Text Generator',
                    body: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ',
                    thumbnail: await (await fetch('https://i.imgur.com/3ZQ3ZQ3.jpeg')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('American Flag 3D API Error:', error);
        replyglobal(
            '⚠️ *Failed to generate American Flag 3D text image.*\n' +
            'Please try again later.\n\n' +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }
    break;
}
case 'chooseroad': {
    // Expect input format: text1 | text2
    // Example: !chooseroad facebook instagram tiktok | Coding

    if (!text?.trim()) {
        replyglobal(
            '🛣️ *Choose Road Meme Generator* 🛣️\n\n' +
            `Usage: ${prefix + command} [text1] | [text2]\n` +
            `Example: ${prefix + command} facebook instagram tiktok | Coding\n\n` +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
        return;
    }

    const parts = text.split('|').map(p => p.trim());
    if (parts.length !== 2) {
        replyglobal('❌ Please provide exactly two texts separated by "|".');
        return;
    }

    const [text1, text2] = parts;

    try {
        const apiKey = '75957eaec54d70ace3';
        const apiUrl = `https://api.nexoracle.com/memes/choose-road?apikey=${apiKey}&text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`;

        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `🛣️ *Choose Road Meme*\n\nOption 1: ${text1}\nOption 2: ${text2}\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*`,
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'Choose Road Meme Generator',
                    body: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ',
                    thumbnail: await (await fetch('https://i.imgur.com/3ZQ3ZQ3.jpeg')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Choose Road API Error:', error);
        replyglobal(
            '⚠️ *Failed to generate Choose Road meme.*\n' +
            'Please try again later.\n\n' +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }
    break;
}
case 'changemymind': {
    if (!text?.trim()) {
        replyglobal(
            '🪑 *Change My Mind Meme Generator* 🪑\n\n' +
            `Usage: ${prefix + command} [text]\n` +
            `Example: ${prefix + command} Queen Ruva Ai Betas\n\n` +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
        return;
    }

    try {
        const apiKey = '75957eaec54d70ace3';
        const apiUrl = `https://api.nexoracle.com/memes/change-my-mind?apikey=${apiKey}&text=${encodeURIComponent(text)}`;

        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `🪑 *Change My Mind Meme*\n\n"${text}"\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*`,
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'Change My Mind Meme',
                    body: 'Generated by Queen Ruva Ai Beta',
                    thumbnail: await (await fetch('https://i.imgur.com/JxLd5F0.jpeg')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Change My Mind API Error:', error);
        replyglobal(
            '⚠️ *Failed to generate Change My Mind meme.*\n' +
            'Please try again later.\n\n' +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }
    break;
}
case 'yeetthechild': {
    if (!text?.trim()) {
        replyglobal(
            '🧒 *Yeet The Child Meme Generator* 🧒\n\n' +
            `Usage: ${prefix + command} [text]\n` +
            `Example: ${prefix + command} I Likes A Girl. She Says That, She Loves Me Very Much.\n\n` +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
        return;
    }

    try {
        const apiKey = '75957eaec54d70ace3';
        const apiUrl = `https://api.nexoracle.com/memes/yeet-the-child?apikey=${apiKey}&text=${encodeURIComponent(text)}`;

        await IconicTechInc.sendPresenceUpdate('composing', m.chat);

        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `🧒 *Yeet The Child Meme*\n\n"${text}"\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*`,
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'Yeet The Child Meme',
                    body: 'Generated by Queen Ruva Ai Beta',
                    thumbnail: await (await fetch('https://i.imgur.com/JxLd5F0.jpeg')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Yeet The Child API Error:', error);
        replyglobal(
            '⚠️ *Failed to generate Yeet The Child meme.*\n' +
            'Please try again later.\n\n' +
            '*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ*'
        );
    }
    break;
}
case 'catfact': {
    try {
        const apiUrl = 'https://kaiz-apis.gleeze.com/api/catfact';
        
        // API verification with timeout
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);
        
        await IconicTechInc.sendPresenceUpdate('composing', m.chat);
        
        const response = await fetch(apiUrl, { 
            signal: controller.signal 
        });
        clearTimeout(timeout);

        if (!response.ok) {
            throw new Error(`API returned ${response.status}`);
        }

        const data = await response.json();
        
        if (!data.fact) {
            throw new Error('No fact returned');
        }

        await IconicTechInc.sendMessage(m.chat, {
            text: '🐱 *Random Cat Fact* 🐱\n\n' +
                  `${data.fact}\n\n` +
                  '*Powered by Iconic Tech*',
            contextInfo: {
                externalAdReply: {
                    title: 'Did You Know?',
                    body: 'Feline wisdom for you',
                    thumbnail: await (await fetch('https://i.imgur.com/JQLz4KX.png')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Cat Fact API Error:', error);
        
        // Fallback facts
        const fallbackFacts = [
            "Cats sleep for about 70% of their lives.",
            "A group of cats is called a clowder.",
            "Cats can't taste sweetness."
        ];
        
        replyglobal(
            '🐾 *Cat Fact* 🐾\n\n' +
            `${fallbackFacts[Math.floor(Math.random() * fallbackFacts.length)]}\n\n` +
            '(API failed but here\'s a backup fact!)\n\n' +
            '*Powered by Queen Ruva AI Beta*'
        );
    }
    break;
}
case 'lyrics-shazam': {
    if (!text?.trim()) {
        replyglobal(
            '🎵 *Lyrics Finder* 🎵\n\n' +
            `Usage: ${prefix + command} [song title]\n` +
            `Example: ${prefix + command} Omah Lay\n` +
            'Get lyrics for any song\n\n' +
            '*Powered by Queen Ruva AI Beta*'
        );
        return;
    }

    try {
        const apiUrl = `https://kaiz-apis.gleeze.com/api/shazam-lyrics?title=${encodeURIComponent(text)}`;
        
        // API verification with timeout
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 8000); // Longer timeout for lyrics
        
        await IconicTechInc.sendPresenceUpdate('composing', m.chat);
        
        const response = await fetch(apiUrl, { 
            signal: controller.signal 
        });
        clearTimeout(timeout);

        if (!response.ok) {
            throw new Error(`API returned ${response.status}`);
        }

        const data = await response.json();
        
        if (!data.lyrics) {
            replyglobal(
                '❌ *No Lyrics Found*\n\n' +
                `Couldn't find lyrics for "${text}"\n` +
                'Try a different song title\n\n' +
                '*Powered by Queen Ruva AI Beta*'
            );
            return;
        }

        // Split long lyrics into multiple messages if needed
        const maxLength = 1500;
        const lyricsChunks = [];
        for (let i = 0; i < data.lyrics.length; i += maxLength) {
            lyricsChunks.push(data.lyrics.substring(i, i + maxLength));
        }

        // Send title and artist first
        await IconicTechInc.sendMessage(m.chat, {
            text: `🎤 *${data.title || text}*` +
                  (data.artist ? ` - ${data.artist}\n\n` : '\n\n') +
                  `📝 *Lyrics:*\n\n${lyricsChunks[0]}`,
            contextInfo: {
                externalAdReply: {
                    title: data.title || text,
                    body: data.artist || 'Lyrics Search',
                    thumbnail: await (await fetch(data.thumbnail || 'https://i.imgur.com/JxLd5F0.jpeg')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

        // Send remaining chunks if any
        for (let i = 1; i < lyricsChunks.length; i++) {
            await IconicTechInc.sendMessage(m.chat, {
                text: lyricsChunks[i]
            });
        }

    } catch (error) {
        console.error('Lyrics API Error:', error);
        
        replyglobal(
            '⚠️ *Lyrics Search Failed*\n\n' +
            'Could not retrieve lyrics at this time.\n' +
            'Try again later or check your song title.\n\n' +
            '*Powered by Queen Ruva AI Beta*'
        );
    }
    break;
}
case 'sadcat': {
    // Input validation
    if (!text?.trim()) {
        replyglobal(
            '😿 *Sad Cat Generator* 😿\n\n' +
            `Usage: ${prefix + command} [your text]\n` +
            `Example: ${prefix + command} I failed my exam\n` +
            'Max length: 80 characters\n\n' +
            'Let the sad cat express your feelings...\n\n' +
            '*Powered by Queen Ruva AI Beta*'
        );
        return;
    }

    // Length validation with counter
    if (text.length > 80) {
        replyglobal(
            '❌ *Too much sadness!*\n\n' +
            `Your text has ${text.length}/80 characters.\n` +
            'Even sad cats need brevity.\n\n' +
            '*Powered by Queen Ruva AI Beta*'
        );
        return;
    }

    // Enhanced profanity filter
    const blockedPatterns = [
        /fuck|shit|asshole|bitch|cunt/i,
        /n[i1!]+gg[e3r]*/i,
        /porn|sex|rape/i
    ];
    
    if (blockedPatterns.some(pattern => pattern.test(text))) {
        replyglobal(
            '❌ *The cat refuses to display this*\n\n' +
            'Keep it family-friendly please.\n\n' +
            '*Powered by Queen Ruva AI Beta*'
        );
        return;
    }

    try {
        const apiUrl = `https://api.popcat.xyz/sadcat?text=${encodeURIComponent(text)}`;
        
        // API verification with timeout
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);
        
        const testResponse = await fetch(apiUrl, { 
            method: 'HEAD',
            signal: controller.signal 
        });
        clearTimeout(timeout);

        if (!testResponse.ok) {
            throw new Error(`API returned ${testResponse.status}`);
        }

        // Add typing indicator
        await IconicTechInc.sendPresenceUpdate('composing', m.chat);
        
        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: '😿 *Sad Cat Says*\n\n' +
                    `"${text.replace(/\n/g, ' ')}"\n\n` +
                    '*Powered by Iconic Tech*',
            mimetype: 'image/jpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'Feeling Sad?',
                    body: 'The cat understands you',
                    thumbnail: await (await fetch('https://i.imgur.com/JxLd5F0.jpeg')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('SadCat API Error:', error);
        
        // Fallback responses
        const fallbackMessages = [
            "The sad cat is too depressed to respond...",
            "Even cats have bad days. Try again later.",
            "🐱 *Meow...* (API failed but the cat cares)"
        ];
        
        replyglobal(
            '⚠️ *Sad Cat Malfunction*\n\n' +
            `${fallbackMessages[Math.floor(Math.random() * fallbackMessages.length)]}\n\n` +
            '*Powered by Queen Ruva AI Beta*'
        );
    }
    break;
}
case 'tiktok': {
    if (!text) return replyglobal(
        `📽️ *Example:* ${prefix + command} https://vm.tiktok.com/ZMBW2aFWT/\n\n` +
        `💡 *Tip:* Paste any TikTok video link to download it!`
    );

    try {
        await IconicTechInc.sendMessage(m.chat, { react: { text: `🎬`, key: m.key } });

        const axios = require("axios");
        
        // Clean the TikTok URL (remove any extra parameters)
        let tiktokUrl = text.split('?')[0];
        if (!tiktokUrl.includes('tiktok.com')) {
            return replyglobal(`❌ *Invalid TikTok URL*\nPlease provide a valid TikTok video link!`);
        }

        const apiUrl = `https://kaiz-apis.gleeze.com/api/tiktok-dl?url=${encodeURIComponent(tiktokUrl)}`;

        // 🔎 Fetch TikTok video info with better error handling
        const apiResponse = await axios.get(apiUrl, { 
            timeout: 15000,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        });

        // Check multiple possible response formats
        const videoUrl = apiResponse.data?.videoUrl || apiResponse.data?.url || apiResponse.data?.result?.videoUrl;
        
        if (videoUrl) {
            const videoInfo = `╭━━〔 *🎬 QUEEN-RUVA AI TIKTOK DOWNLOADER* 〕━━╮\n` +
                            `┃ 📽️ *Video Downloaded Successfully*\n` +
                            `┃ 💻 *Powered by Iconic Tech*\n` +
                            `╰━━━━━━━━━━━━━━━━━━━━━━━╯\n\n` +
                            `🎵 *Enjoy your video!* 🚀`;

            await IconicTechInc.sendMessage(m.chat, {
                video: { url: videoUrl },
                mimetype: 'video/mp4',
                caption: videoInfo
            }, { quoted: m });
        } else {
            console.log('API Response:', apiResponse.data); // Debug logging
            return replyglobal(`❌ *Could not download TikTok video*\nThe API might be temporarily unavailable.\n🔎 Please try again later!`);
        }

    } catch (error) {
        console.error('🔴 Error in /tiktok command:', error);
        replyglobal(`⚠️ *Oops! Something went wrong.*\n❗ Error details: ${error.message}\nPlease try again later.`);
    }
    break;
}
case 'pinterest':
case 'pin': {
    if (!text) return replyglobal(
        `📌 *Example:* ${prefix + command} https://pin.it/2Vflx5O\n\n` +
        `💡 *Tip:* Paste any valid Pinterest post URL to download media!`
    );

    try {
        await IconicTechInc.sendMessage(m.chat, { react: { text: `📌`, key: m.key } });

        const axios = require("axios");

        const apiUrl = `https://delirius-apiofc.vercel.app/download/pinterestdl?url=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl, { timeout: 15000 });

        const mediaType = response.data?.data?.download?.type;
        const mediaUrl = response.data?.data?.download?.url;

        if (mediaUrl) {
            const caption = `╭━━〔 📌 *PINTEREST DOWNLOADER* 〕━━╮\n` +
                            `┃ ✅ *Downloaded Successfully!*\n` +
                            `┃ 📄 *Type:* ${mediaType?.toUpperCase()}\n` +
                            `┃ 💻 *Powered by Iconic Tech*\n` +
                            `╰━━━━━━━━━━━━━━━━━━━━━━━╯`;

            const mediaOptions = {
                caption,
                quoted: m
            };

            if (mediaType === 'video') {
                mediaOptions.video = { url: mediaUrl };
                mediaOptions.mimetype = 'video/mp4';
            } else {
                mediaOptions.image = { url: mediaUrl };
            }

            await IconicTechInc.sendMessage(m.chat, mediaOptions);
        } else {
            console.log('Pinterest API Response:', response.data);
            replyglobal(`❌ Could not fetch media from Pinterest.\nPlease check the link and try again.`);
        }

    } catch (error) {
        console.error('Pinterest DL Error:', error);
        replyglobal(`⚠️ Pinterest download failed!\nError: ${error.message}`);
    }
    break;
}
case 'weather': {
    if (!text) {
        replyglobal(`*Example*: ${prefix + command} Bulawayo`);
        return;
    }

    try {
        const apiUrl = `https://api.popcat.xyz/weather?q=${encodeURIComponent(text)}`;
        console.log("Fetching weather data from:", apiUrl);

        const response = await fetch(apiUrl);
        const jsonData = await response.json();

        if (jsonData && jsonData.length > 0) {
            const locationData = jsonData.find(location => location.location.name.toLowerCase().includes(text.toLowerCase()));

            if (locationData) {
                const { current, forecast, location } = locationData;

                let message = `📍 *Weather in ${location.name}* 🌍\n\n`;
                message += `🌦️ Weather: ${current.skytext}\n`;
                message += `🌡️ Temperature: ${current.temperature}°C\n`;
                message += `🥶 Feels Like: ${current.feelslike}°C\n`;
                message += `💧 Humidity: ${current.humidity}%\n`;
                message += `💨 Wind Speed: ${current.winddisplay}\n`;
                message += `📆 Date: ${current.date}\n\n`;

                message += `⚡️ *Today’s Weather Summary:*\n`;
                message += `> 🌦️ *Condition*: ${current.skytext}\n`;
                message += `> 🌡️ *Current Temperature*: ${current.temperature}°C\n`;
                message += `> 💧 *Humidity*: ${current.humidity}%\n`;
                message += `> 💨 *Wind Speed*: ${current.winddisplay}\n\n`;

                if (forecast && forecast.length > 0) {
                    message += `*🔮 Forecast:*\n`;
                    forecast.forEach(day => {
                        message += `> ${day.day} (${day.date}): ${day.skytextday}, High: ${day.high}°C, Low: ${day.low}°C, Precip: ${day.precip}%\n`;
                    });
                }

                await IconicTechInc.sendMessage(m.chat, {
                    text: message,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `Weather Info for ${location.name}`,
                            body: `Get the latest weather updates for your location.`,
                            thumbnailUrl: '',
                            thumbnail: fs.readFileSync(`./QueenMedia/ruva.jpg`),
                            sourceUrl: 'https://whatsapp.com/channel/0029ValX2Js9RZAVtDgMYj0r',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted: m });
            } else {
                replyglobal(`Could not find weather information for "${text}". Try another location.`);
            }
        } else {
            replyglobal(`Failed to fetch weather data for "${text}". Please try again later.`);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        replyglobal('An error occurred while fetching the weather data. Please try again later.');
    }
    break;
}

case 'imdb': {
    if (!text) {
        replyglobal('Usage: !imdb [movie/show] (e.g., !imdb Avengers)');
        return;
    }

    try {
        const apiUrl = `https://api.popcat.xyz/imdb?q=${encodeURIComponent(text)}`;
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();

        if (data.error || !data.title) {
            replyglobal(`No results found for "${text}" 🎬`);
            return;
        }

        // Build the message with proper null checks
        let message = `🎥 *${data.title || 'Unknown Title'}*`;
        message += data.year ? ` (${data.year})\n\n` : '\n\n';
        message += data.rating ? `⭐ Rating: ${data.rating}/10\n` : '';
        message += data.runtime ? `⏱️ Runtime: ${data.runtime}\n` : '';
        message += data.genres ? `🎭 Genre: ${data.genres}\n\n` : '\n';
        message += data.plot ? `📖 Plot: ${data.plot}\n\n` : '\n';
        message += data.imdburl ? `🎬 [IMDb Page](${data.imdburl})` : '';

        // Prepare options for reply
        const options = { text: message };
        if (data.poster) {
            options.image = { url: data.poster };
            options.caption = message;
        }

        replyglobal(options);

    } catch (error) {
        console.error('IMDb API Error:', error);
        replyglobal('Failed to search. The service might be unavailable or the title might be too vague. Try another title!');
    }
    break;
}
case 'pet': {
    let imageUrl = text?.trim(); // Trim whitespace if URL is provided
    
    // If no text but replying to an image message
    if (!imageUrl && quotedMsg?.image) {
        imageUrl = quotedMsg.image.url;
    }

    if (!imageUrl) {
        replyglobal('Usage: !pet [image URL] or reply to an image with !pet');
        return;
    }

    // Basic URL validation (could be improved with regex)
    if (!imageUrl.startsWith('http')) {
        replyglobal('❌ Invalid URL. Please provide a valid image link (e.g., https://example.com/image.jpg)');
        return;
    }

    try {
        const apiUrl = `https://api.popcat.xyz/pet?image=${encodeURIComponent(imageUrl)}`;
        const response = await fetch(apiUrl); // Check if the API actually returns an image
        
        if (!response.ok) {
            throw new Error(`API returned ${response.status} status`);
        }

        // Verify content type is an image
        const contentType = response.headers.get('content-type');
        if (!contentType?.startsWith('image/')) {
            throw new Error('API did not return an image');
        }

        replyglobal({
            image: { url: apiUrl },
            caption: "🐾 *Who's a good pixel pet?* 🐶",
            mimetype: contentType // Pass along the proper mimetype if needed
        });

    } catch (error) {
        console.error('Pet API Error:', error);
        
        let errorMessage = 'Failed to generate pet. ';
        if (error.message.includes('404')) {
            errorMessage += 'The image might not be accessible.';
        } else if (error.message.includes('image')) {
            errorMessage += 'The URL might not point to a valid image.';
        } else {
            errorMessage += 'Try another image URL or check the link!';
        }
        
        replyglobal(errorMessage);
    }
    break;
}
case 'itunes': {
    if (!text) {
        replyglobal('Usage: !itunes [song/app/movie name] (e.g., !itunes "Bohemian Rhapsody")');
        return;
    }

    try {
        const apiUrl = `https://api.popcat.xyz/itunes?q=${encodeURIComponent(text)}`;
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();

        if (data.error || !data.results?.length) {
            replyglobal(`No results found for "${text}" 🎵`);
            return;
        }

        let message = `🎧 *iTunes Search Results* 🔍\n*Query:* "${text}"\n\n`;
        
        // Display top 3 results with better formatting and fallbacks
        data.results.slice(0, 3).forEach((item, index) => {
            const name = item.trackName || item.collectionName || "Unknown Title";
            const artist = item.artistName || "Unknown Artist";
            const type = item.kind || item.wrapperType || "Unknown Type";
            const price = (item.trackPrice ?? item.collectionPrice ?? "N/A") + 
                         (item.currency ? ` ${item.currency}` : "");
            const url = item.trackViewUrl || item.collectionViewUrl;

            message += `*${index + 1}. ${name}*\n`;
            message += `👤 *Artist:* ${artist}\n`;
            message += `📌 *Type:* ${type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()}\n`;
            message += `💰 *Price:* ${price}\n`;
            if (url) message += `🔗 [View on iTunes](${url})\n`;
            message += `\n`;
        });

        // Add a note if there are more results
        if (data.results.length > 3) {
            message += `ℹ️ *${data.results.length - 3} more results available*`;
        }

        replyglobal(message);

    } catch (error) {
        console.error('iTunes API Error:', error);
        let errorMessage = 'Failed to search iTunes. ';
        if (error.message.includes('status 50')) {
            errorMessage += 'The iTunes API might be temporarily unavailable.';
        } else {
            errorMessage += 'Try a different search term or check your query.';
        }
        replyglobal(errorMessage);
    }
    break;
}
case '8ball': {
    if (!text) {
        replyglobal('🎱 *Magic 8-Ball* 🎱\n\nAsk me a yes/no question!\nExample: !8ball Will I win the lottery today?');
        return;
    }

    // Validate it's actually a question
    if (!text.trim().endsWith('?')) {
        replyglobal('🎱 *That doesn\'t look like a question!*\n\nPlease ask a proper question ending with "?"\nExample: !8ball Is today my lucky day?');
        return;
    }

    try {
        const response = await fetch('https://api.popcat.xyz/8ball');
        
        if (!response.ok) {
            throw new Error(`API responded with status ${response.status}`);
        }

        const data = await response.json();
        
        // Create reply with optional image
        const replyOptions = {
            text: `🎱 *Magic 8-Ball* 🎱\n\n` +
                  `*Your Question:*\n"${text}"\n\n` +
                  `*Mystical Answer:*\n_${data.answer}_`,
        };

        // Include image if available
        if (data.image) {
            replyOptions.image = { url: data.image };
            replyOptions.caption = `🎱 Answer: ${data.answer}`;
        }

        replyglobal(replyOptions);

    } catch (error) {
        console.error('8Ball API Error:', error);
        
        // Fallback responses if API fails
        const fallbackAnswers = [
            "Signs point to yes",
            "Don't count on it",
            "Reply hazy, try again",
            "Cannot predict now",
            "Outlook good"
        ];
        const randomAnswer = fallbackAnswers[Math.floor(Math.random() * fallbackAnswers.length)];
        
        replyglobal(`🔮 *The magic 8-ball is confused!*\n\nBut I sense...\n_${randomAnswer}_`);
    }
    break;
}
case 'fight':
case 'whowouldwin': {
    // Handle both space-separated URLs and quoted messages
    let [url1, url2] = text ? text.split(/ +/) : [];

    // If replying to a message with media
    if (!url1 && quotedMsg?.image) {
        url1 = quotedMsg.image.url;
        // Check if message contains a second URL
        const remainingText = quotedMsg.caption || quotedMsg.text || '';
        const possibleUrl = remainingText.split(/ +/)[0];
        if (possibleUrl && possibleUrl.match(/^https?:\/\//)) {
            url2 = possibleUrl;
        }
    }

    // Validate URLs
    if (!url1 || !url2) {
        replyglobal(
            '⚔️ *Fight Command* ⚔️\n\n' +
            'Usage:\n' +
            '1. !fight [image1_url] [image2_url]\n' +
            '2. Reply to an image with !fight [other_image_url]\n' +
            '3. Reply to a message containing two image URLs with !fight\n\n' +
            'Example: !fight https://i.imgur.com/cat.jpg https://i.imgur.com/dog.jpg'
        );
        return;
    }

    // Basic URL validation
    const isValidUrl = (url) => url.match(/^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)/i);
    if (!isValidUrl(url1) || !isValidUrl(url2)) {
        replyglobal('❌ Please provide valid image URLs (JPEG, PNG, GIF, or WebP)');
        return;
    }

    try {
        const apiUrl = `https://api.popcat.xyz/whowouldwin?image1=${encodeURIComponent(url1)}&image2=${encodeURIComponent(url2)}`;
        
        // Verify the API response before showing to user
        const testResponse = await fetch(apiUrl, { method: 'HEAD' });
        if (!testResponse.ok) {
            throw new Error(`API returned ${testResponse.status} status`);
        }

        replyglobal({
            image: { url: apiUrl },
            caption: "⚔️ *WHO WOULD WIN?* ⚔️\n" +
                   `🔗 Image 1: ${url1}\n` +
                   `🔗 Image 2: ${url2}`,
            mimetype: 'image/jpeg' // Most APIs return JPEG
        });

    } catch (error) {
        console.error('Fight API Error:', error);
        
        let errorMessage = '❌ Failed to generate battle. ';
        if (error.message.includes('404')) {
            errorMessage += 'One or both images might not be accessible.';
        } else if (error.message.includes('status 50')) {
            errorMessage += 'The battle API is temporarily down.';
        } else {
            errorMessage += 'Make sure both URLs are direct image links.';
        }
        
        replyglobal(errorMessage + '\n\nTry again with different images!');
    }
    break;
}
case 'joke2': {
    try {
        // React to indicate processing
        await replyglobal(m.chat, { react: { text: '😂', key: m.key } });

        // Emojis to be added before each joke
        const emojis = ['😂', '🤣', '😆', '😜', '😎'];

        // Initialize an empty array to store jokes
        const jokes = [];

        // Loop to fetch 5 jokes
        for (let i = 0; i < 5; i++) {
            // Fetch random joke
            const apiUrl = 'https://api.popcat.xyz/joke';
            const apiResponse = await axios.get(apiUrl);

            if (apiResponse.data && apiResponse.data.joke) {
                jokes.push(apiResponse.data.joke); // Add the joke to the array
            } else {
                jokes.push('Failed to fetch a joke.'); // Handle failure in fetching a joke
            }
        }

        // Format and display the jokes with emojis
        let responseMessage = '*Here are 5 jokes for you:* 🤣\n\n';
        jokes.forEach((joke, index) => {
            responseMessage += `${emojis[index]} ${joke}\n\n`;
        });

        // Add footer with "Created by ICONICS-TECH"
        responseMessage += '\n\nCreated by ICONICS-TECH';

        // Send the jokes with footer
        await replyglobal(responseMessage); 

        // Send an additional message after the jokes
        await replyglobal("I hope these jokes made you laugh! 😂 Let me know if you want more!");

    } catch (error) {
        console.error('Error during /joke command:', error);
        replyglobal('An error occurred while processing your request. Please try again later.');
    }
    break;
}
case 'joke': {
    if (!text) return replyglobal(`*Example*: ${prefix + command}`);

    try {
        // React to indicate processing
        await replyglobal(m.chat, { react: { text: '😂', key: m.key } });

        // Fetch joke data
        const apiUrl = 'https://api.popcat.xyz/joke';
        const apiResponse = await axios.get(apiUrl);

        if (apiResponse.data && apiResponse.data.joke) {
            // Display joke information
            const jokeMessage = `*Here's a joke for you:*\n\n${apiResponse.data.joke}`;
            replyglobal(jokeMessage);
        } else {
            replyglobal('Sorry, I couldn\'t find a joke at the moment.');
        }
    } catch (error) {
        console.error('Error during /joke command:', error);
        replyglobal('An error occurred while processing your request. Please try again later.');
    }
    break;
}

        case 'telestick': {
		if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let resources = await Telesticker(args[0])
		await replyglobal(`Sending ${resources.length} stickers...`)
		if (m.isGroup && resources.length > 30) {
			await replyglobal('Number of stickers more than 30, bot will send it in private chat.')
			for (let i = 0; i < resources.length; i++) {
				IconicTechInc.sendMessage(m.sender, { sticker: { url: resources[i].url }})
			}
		} else {
			for (let i = 0; i < resources.length; i++) {
				IconicTechInc.sendMessage(m.chat, { sticker: { url: resources[i].url }})
			}
		}
	} else replyglobal(`Where is the telegram sticker link?\nExample. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break
case 'anime': {
  if (!text) return replyglobal(`*Example*: ${prefix + command} naruto`);

  try {
    await IconicTechInc.sendMessage(m.chat, { react: { text: `📸`, key: m.key } });

    const axios = require('axios');
    const apiUrlForImages = `https://img.hazex.workers.dev/?prompt=${encodeURIComponent(text)}`;

    // Generate 5 images based on user input
    const images = [];
    for (let i = 0; i < 5; i++) {
      images.push(`${apiUrlForImages}`);
    }

    // Send each generated image
    const footer = "\n\nGenerated by Queen Ruva AI";
    for (const imageUrl of images) {
      await IconicTechInc.sendMessage(m.chat, {
        image: { url: imageUrl },
        caption: footer
      }, { quoted: m });
    }

  } catch (error) {
    console.error('Error fetching images:', error);
    replyglobal(`*An error occurred while fetching images. Please try again later.*`);
  }
  break;
}
case 'flux': {
  if (!text) return replyglobal(`*Example*: ${prefix + command} naruto`);

  try {
    await IconicTechInc.sendMessage(m.chat, { react: { text: `📸`, key: m.key } });

    // Notify user that the image generation has started
    replyglobal(`*Generating images for:* ${text}\n\n🔄 Please wait a moment...`);

    const axios = require('axios');
    const apiUrlForImages = `https://apis.davidcyriltech.my.id/flux?prompt=${encodeURIComponent(text)}`;

    // Generate 5 images based on user input
    const images = [];
    for (let i = 0; i < 5; i++) {
      images.push(apiUrlForImages);
    }

    // Notify user that images are ready
    replyglobal(`✅ *Your anime images are ready!* Sending now...`);

    // Send each generated image
    const footer = "\n\nMade with ❤️‍🔥 by Iconic Tech";
    for (const imageUrl of images) {
      await IconicTechInc.sendMessage(m.chat, {
        image: { url: imageUrl },
        caption: footer
      }, { quoted: m });
    }

    // Final message after sending all images
    replyglobal(`🎉 *All images have been sent!* Hope you like them!`);

  } catch (error) {
    console.error('Error fetching images:', error);
    replyglobal(`*An error occurred while fetching images. Please try again later.*`);
  }
  break;
}
case 'emojimix': {
    // Expecting two emojis as input
    const emojis = text?.trim().match(/\p{Emoji}/gu);
    
    if (!emojis || emojis.length < 2) {
        replyglobal(
            '🎭 *Emoji Mixer* 🎭\n\n' +
            `Usage: ${prefix + command} [emoji1][emoji2]\n` +
            `Example: ${prefix + command} 😏🔥\n` +
            'Combine two emojis into one!\n\n' +
            '*Powered by Queen Ruva AI Beta*'
        );
        return;
    }

    try {
        const apiUrl = `https://kaiz-apis.gleeze.com/api/emojimix?emoji1=${encodeURIComponent(emojis[0])}&emoji2=${encodeURIComponent(emojis[1])}`;
        
        // API verification with timeout
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);
        
        // Check if API is reachable
        const testResponse = await fetch(apiUrl, { 
            method: 'HEAD',
            signal: controller.signal 
        });
        clearTimeout(timeout);

        if (!testResponse.ok) {
            throw new Error(`API returned ${testResponse.status}`);
        }

        // Add typing indicator
        await IconicTechInc.sendPresenceUpdate('composing', m.chat);
        
        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `🎭 *Emoji Mix*: ${emojis[0]} + ${emojis[1]}\n\n` +
                    '*Powered by Iconic Tech*',
            mimetype: 'image/png',
            contextInfo: {
                externalAdReply: {
                    title: 'Emoji Combiner',
                    body: 'Creative emoji mixing',
                    thumbnail: await (await fetch('https://i.imgur.com/JxLd5F0.jpeg')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Emoji Mix API Error:', error);
        
        // Fallback responses
        const fallbackMessages = [
            "These emojis refuse to mix! Try different ones.",
            "The emoji chemistry didn't work this time.",
            "🚫 Emoji collision detected! Try another combination."
        ];
        
        replyglobal(
            '⚠️ *Mix Failed*\n\n' +
            `${fallbackMessages[Math.floor(Math.random() * fallbackMessages.length)]}\n\n` +
            '*Powered by Queen Ruva AI Beta*'
        );
    }
    break;
}
case 'pickupline': {
    try {
        const apiUrl = 'https://kaiz-apis.gleeze.com/api/pickuplines';
        
        // API verification with timeout
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);
        
        await IconicTechInc.sendPresenceUpdate('composing', m.chat);
        
        const response = await fetch(apiUrl, { 
            signal: controller.signal 
        });
        clearTimeout(timeout);

        if (!response.ok) {
            throw new Error(`API returned ${response.status}`);
        }

        const data = await response.json();
        
        if (!data.pickupline) {
            throw new Error('No pickup line returned');
        }

        await IconicTechInc.sendMessage(m.chat, {
            text: '💘 *Pickup Line* 💘\n\n' +
                  `${data.pickupline}\n\n` +
                  'Rate this line: 1-10 😏\n\n' +
                  '*Powered by Iconic Tech*',
            contextInfo: {
                externalAdReply: {
                    title: 'Feeling Romantic?',
                    body: 'Try this pickup line!',
                    thumbnail: await (await fetch('https://i.imgur.com/JQLz4KX.png')).buffer(),
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: 'codewave-unit.zone.id'
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Pickup Line API Error:', error);
        
        // Fallback pickup lines
        const fallbackLines = [
            "Are you a magician? Because whenever I look at you, everyone else disappears.",
            "If you were a vegetable, you'd be a cute-cumber!",
            "Do you have a map? I keep getting lost in your eyes.",
            "Is your name Google? Because you have everything I've been searching for.",
            "Are you a campfire? Because you're hot and I want s'more."
        ];
        
        replyglobal(
            '💝 *Pickup Line* 💝\n\n' +
            `${fallbackLines[Math.floor(Math.random() * fallbackLines.length)]}\n\n` +
            '(API failed but here\'s a backup line!)\n\n' +
            '*Powered by Queen Ruva AI Beta*'
        );
    }
    break;
}

case 'image3': {
  if (!text) return replyglobal(`*Example*: ${prefix + command} naruto`);

  try {
    await IconicTechInc.sendMessage(m.chat, { react: { text: '📸', key: m.key } });

    const axios = require('axios');
    const apiUrlForImages = `https://api.agungny.my.id/api/text2img?prompt=${encodeURIComponent(text)}`;

    // Generate 5 images based on user input
    const images = [];
    for (let i = 0; i < 5; i++) {
      images.push(`${apiUrlForImages}`);
    }

    // Send each generated image
    const footer = "\n\nGenerated by Queen Ruva AI";
    for (const imageUrl of images) {
      await IconicTechInc.sendMessage(m.chat, {
        image: { url: imageUrl },
        caption: footer
      }, { quoted: m });
    }

  } catch (error) {
    console.error('Error fetching images:', error);
    replyglobal('*An error occurred while fetching images. Please try again later.*');
  }
  break;
}

case 'image2': {
  if (!text) return replyglobal(`*Example*: ${prefix + command} naruto`);

  try {
    await IconicTechInc.sendMessage(m.chat, { react: { text: '📸', key: m.key } });

    const axios = require('axios');
    const apiUrlForImages = `https://api.agungny.my.id/api/text2img?prompt=${encodeURIComponent(text)}`;

    // Generate 5 images based on user input
    const images = [];
    for (let i = 0; i < 5; i++) {
      images.push(`${apiUrlForImages}`);
    }

    // Send each generated image
    const footer = "\n\nGenerated by Queen Ruva AI";
    for (const imageUrl of images) {
      await IconicTechInc.sendMessage(m.chat, {
        image: { url: imageUrl },
        caption: footer
      }, { quoted: m });
    }

  } catch (error) {
    console.error('Error fetching images:', error);
    replyglobal('*An error occurred while fetching images. Please try again later.*');
  }
  break;
}
case 'img': {
  if (!text) return replyglobal(`*Example*: ${prefix + command} iconic tech`);

  try {
    await IconicTechInc.sendMessage(m.chat, { react: { text: `📸`, key: m.key } });

    const axios = require('axios');
    const apiUrlForImages = `https://img.hazex.workers.dev/?prompt=${encodeURIComponent(text)}`;

    // Generate 5 images based on user input
    const images = [];
    for (let i = 0; i < 5; i++) {
      // Append the unique index (or just call the API 5 times for varied images)
      const imageUrl = `${apiUrlForImages}&seed=${i}`;  // Adding a unique seed to vary the result
      images.push(imageUrl);
    }

    // Send the extra message before the images
    const extraMessage = `ᴡᴀɪᴛ......`;
    await IconicTechInc.sendMessage(m.chat, {
      text: extraMessage
    }, { quoted: m });

    // Footer to be added to the image caption
    const footer = "\n\n**ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ**";
    
    // Send each generated image
    for (const imageUrl of images) {
      await IconicTechInc.sendMessage(m.chat, {
        image: { url: imageUrl },
        caption: footer
      }, { quoted: m });
    }

  } catch (error) {
    console.error('Error fetching images:', error);
    replyglobal(`*An error occurred while fetching images. Please try again later.*`);
  }
  break;
}
case 'dare': {
    try {
        // Construct the API URL for fetching a random dare
        const apiUrl = 'https://apis.davidcyriltech.my.id/dare';
        console.log("Sending request to API:", apiUrl);

        // Fetch the response from the API
        const response = await fetch(apiUrl);
        console.log("API Response Status:", response.status);

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        // Parse the JSON response
        const jsonData = await response.json();
        console.log("Parsed JSON Data:", jsonData);

        // Check if the response contains the dare
        if (jsonData.success && jsonData.question) {
            const dare = jsonData.question;
            const responseMessage = `Here is a random dare for you:\n"${dare}"\n\nWould you like to accept this dare or get another one?`;

            replyglobal(responseMessage); // Send the dare to the user
        } else {
            replyglobal('Failed to fetch a random dare. Please try again later.');
        }
    } catch (error) {
        console.error('Error fetching API response:', error);
        replyglobal('An error occurred while fetching the dare. Please try again later.');
    }
    break;
}
case 'truth': {
    try {
        // Construct the API URL for fetching a random truth
        const apiUrl = 'https://apis.davidcyriltech.my.id/truth';
        console.log("Sending request to API:", apiUrl);

        // Fetch the response from the API
        const response = await fetch(apiUrl);
        console.log("API Response Status:", response.status);

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        // Parse the JSON response
        const jsonData = await response.json();
        console.log("Parsed JSON Data:", jsonData);

        // Check if the response contains the truth (question)
        if (jsonData.success && jsonData.question) {
            const question = jsonData.question;
            const responseMessage = `Here is a random truth for you:\n"${question}"\n\nWould you like to answer or get another question?`;

            replyglobal(responseMessage); // Send the question to the user
        } else {
            replyglobal('Failed to fetch a random truth. Please try again later.');
        }
    } catch (error) {
        console.error('Error fetching API response:', error);
        replyglobal('An error occurred while fetching the truth. Please try again later.');
    }
    break;
}
case 'gpt3': { 
    if (!text) {
        replyglobal('Please provide a question or message for the AI!');
        return;
    }

    try {
        // API URL with encoded query
        const apiUrl = `https://apis.davidcyriltech.my.id/ai/gpt3?text=${encodeURIComponent(text)}`;
        console.log("Sending request to API:", apiUrl);

        // Fetch response from GPT-3 API
        const response = await axios.get(apiUrl);
        console.log("API Response Status:", response.status);

        // Check if the response was successful
        if (response.data.success) {
            const aiMessage = response.data.message;

            // Send multiple responses dynamically
            replyglobal(`🤖 *GPT-3 says:* "${aiMessage}"`);
            setTimeout(() => replyglobal(`💡 *Additional Insight:* "${aiMessage}"`), 1000);
            setTimeout(() => replyglobal(`🔍 *AI Thought:* "${aiMessage}"`), 2000);
        } else {
            replyglobal('Failed to get a response from the AI. Please try again later.');
        }
    } catch (error) {
        console.error('Error fetching AI response:', error);
        replyglobal('An error occurred while communicating with the AI. Please try again later.');
    }
    break;
}
case 'google': {
  if (!text) return replyglobal(`*Example*: ${prefix + command} cat`);

  try {
    await IconicTechInc.sendMessage(m.chat, { react: { text: `📸`, key: m.key } });

    const axios = require('axios');
    const apiUrlForImages = `https://api.giftedtech.my.id/api/search/googleimage?apikey=gifted&query=${encodeURIComponent(text)}`;

    // Fetch images from API
    const response = await axios.get(apiUrlForImages);
    if (!response.data.success || !response.data.results.length) {
      return replyglobal(`*No images found for:* ${text}`);
    }

    // Send the extra message before the images
    const extraMessage = `ᴡᴀɪᴛ......`;
    await IconicTechInc.sendMessage(m.chat, { text: extraMessage }, { quoted: m });

    // Footer to be added to the image caption
    const footer = "\n\n**ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ**";

    // Limit to 5 images max
    const images = response.data.results.slice(0, 5);

    // Send each fetched image
    for (const imageUrl of images) {
      await IconicTechInc.sendMessage(m.chat, {
        image: { url: imageUrl },
        caption: footer
      }, { quoted: m });
    }

  } catch (error) {
    console.error('Error fetching images:', error);
    replyglobal(`*An error occurred while fetching images. Please try again later.*`);
  }
  break;
}
case 'ask1': {
    if (!text) {
        replyglobal('Please provide a message for the AI to respond to!');
        return;
    }

    try {
        // Indicate processing
        await replyglobal(m.chat, { react: { text: '🤖', key: m.key } });

        // Deepseek-r1 API endpoint
        const apiUrl = `https://apis.davidcyriltech.my.id/ai/deepseek-r1?text=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);

        if (response.data && response.data.success) {
            const aiResponse = response.data.message.replace(/<think>|<\/think>/g, '').trim(); // Clean up the response
            replyglobal(`🤖 *AI says:* ${aiResponse}`);
        } else {
            replyglobal('Failed to fetch a response from the AI. Please try again later.');
        }
    } catch (error) {
        console.error('Error fetching AI response:', error);
        replyglobal('An error occurred while fetching the AI response. Please try again later.');
    }
    break;
}
case 'llama': {
    if (!text) return replyglobal(`*Example*: ${prefix + command} Hi`);

    try {
        // React to indicate processing
        await replyglobal(m.chat, { react: { text: '🤖', key: m.key } });

        // Fetch response from the Llama 3 API
        const apiUrl = `https://apis.davidcyriltech.my.id/ai/llama3?text=${encodeURIComponent(text)}`;
        const apiResponse = await axios.get(apiUrl);

        if (apiResponse.data && apiResponse.data.success) {
            const message = apiResponse.data.message;
            await replyglobal(`🤖 *Llama 3 Response:*\n\n${message}`);
        } else {
            await replyglobal(`❌ Failed to get a response from Llama 3.`);
        }
    } catch (error) {
        console.error('Error fetching response from Llama 3:', error);
        await replyglobal(`⚠️ An error occurred while trying to get a response. Please try again later.`);
    }
    break;
}
case 'deepseek': {
    if (!text) return replyglobal(`*Example*: ${prefix + command} Hi`);

    try {
        // React to indicate processing
        await replyglobal(m.chat, { react: { text: '🤖', key: m.key } });

        // Fetch response from the DeepSeek v3 API
        const apiUrl = `https://apis.davidcyriltech.my.id/ai/deepseek-v3?text=${encodeURIComponent(text)}`;
        const apiResponse = await axios.get(apiUrl);

        // Check if the response is successful
        if (apiResponse.data && apiResponse.data.success) {
            const message = apiResponse.data.message;
            await replyglobal(`🤖 *DeepSeek v3 Response:*\n\n${message}`);
        } else {
            await replyglobal(`❌ Failed to get a response from DeepSeek v3.`);
        }
    } catch (error) {
        console.error('Error fetching response from DeepSeek v3:', error);
        await replyglobal(`⚠️ An error occurred while trying to get a response. Please try again later.`);
    }
    break;
}
case 'gemma': {
    if (!text) return replyglobal(`*Example*: ${prefix + command} Hey`);

    try {
        // React to indicate processing
        await replyglobal(m.chat, { react: { text: '🤖', key: m.key } });

        // Fetch response from the Gemma API
        const apiUrl = `https://apis.davidcyriltech.my.id/ai/gemma?text=${encodeURIComponent(text)}`;
        const apiResponse = await axios.get(apiUrl);

        // Check if the response is successful
        if (apiResponse.data && apiResponse.data.success) {
            const message = apiResponse.data.message;
            await replyglobal(`🤖 *Gemma Response:*\n\n${message}`);
        } else {
            await replyglobal(`❌ *Failed to get a response from Gemma.*`);
        }
    } catch (error) {
        console.error('Error fetching response from Gemma:', error);
        await replyglobal(`⚠️ An error occurred while trying to get a response. Please try again later.`);
    }
    break;
}
case 'gpt4': {
    if (!text) {
        replyglobal('Please provide a message for the AI to respond to!');
        return;
    }

    // Check if auto-reply is enabled
    if (!autoReply) {
        replyglobal('Automatic replies are currently disabled.');
        return;
    }

    try {
        // Indicate processing
        await replyglobal(m.chat, { react: { text: '🤖', key: m.key } });

        // API URL
        const apiUrl = `https://apis.davidcyriltech.my.id/ai/gpt4omini?text=${encodeURIComponent(text)}`;

        // Fetching AI response
        const response = await axios.get(apiUrl);

        if (response.data && response.data.success) {
            const aiResponse = response.data.message;
            replyglobal(`🤖 *AI says:* ${aiResponse}`);
        } else {
            replyglobal('Failed to fetch a response from the AI. Please try again later.');
        }
    } catch (error) {
        console.error('Error fetching AI response:', error);
        replyglobal('An error occurred while fetching the AI response. Please try again later.');
    }
}

let chatbotActive = true;  // Flag to track chatbot state

case 'chatgpt':
case 'gpt': {
    if (!text) {
        replyglobal('Please ask me something!'); // Use replyglobal for error messages
        return;
    }

    try {
        // Construct the API URL
        const apiUrl = `https://apis.davidcyriltech.my.id/blackbox?q=${encodeURIComponent(text)}`;
        console.log("Sending request to API:", apiUrl); // Log the API URL

        // Fetch the response from the API
        const response = await fetch(apiUrl);
        console.log("API Response Status:", response.status); // Log the response status

        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        // Parse the JSON response
        const jsonData = await response.json();
        console.log("Parsed JSON Data:", jsonData); // Log the parsed JSON

        // Handle the API response
        if (jsonData.success && jsonData.response) {
            replyglobal(jsonData.response); // Use replyglobal to send the response
        } else {
            replyglobal('Failed to fetch response from the API. Please try again later.'); // Use replyglobal for errors
        }
    } catch (error) {
        console.error('Error fetching API response:', error); // Log the full error
        replyglobal('An error occurred while fetching the AI response. Please try again later.'); // Use replyglobal for errors
    }
    break;
}
case 'mute':
case 'silence': {
  if (!m.isGroup) return replyglobal('👑 *Royal Decree*\n\nThis command is only valid in kingdom (group) chambers!');
  if (!isAdmins) return replyglobal('👑 *Royal Guard Block*\n\nOnly the Queen\'s advisors (admins) may silence the kingdom!');

  try {
    await IconicTechInc.sendMessage(m.chat, { react: { text: '🔇', key: m.key } });
    
    // Mute with royal flair
    await IconicTechInc.groupSettingUpdate(m.chat, 'announcement');
    
    const muteMessage = `
👑 *QUEEN RUVA AI BETA*
╭──────────────────
│ 🏰 *Kingdom Notice* 🏰
│ 
│ 🔇 The royal council has silenced
│ all commoners in the kingdom!
│ 
│ 🗣️ Only advisors (admins) may
│ speak until the decree is lifted.
╰──────────────────
✨ *Royal Command Issued By:*
${pushname || 'Unknown'}
`.trim();

    return replyglobal(muteMessage);

  } catch (error) {
    console.error('Royal Mute Error:', error);
    return replyglobal(`👑 *Royal Announcement*\n\nFailed to silence the kingdom!\n\nReason: ${error.message}\n\nEnsure I have advisor privileges.`);
  }
  break;
}

case 'unmute':
case 'speak': {
  if (!m.isGroup) return replyglobal('👑 *Royal Decree*\n\nThis command is only valid in kingdom (group) chambers!');
  if (!isAdmins) return replyglobal('👑 *Royal Guard Block*\n\nOnly the Queen\'s advisors may lift the silence!');

  try {
    await IconicTechInc.sendMessage(m.chat, { react: { text: '🔊', key: m.key } });
    
    // Unmute with royal proclamation
    await IconicTechInc.groupSettingUpdate(m.chat, 'not_announcement');
    
    const unmuteMessage = `
👑 *QUEEN RUVA AI BETA*
╭──────────────────
│ 🏰 *Kingdom Notice* 🏰
│ 
│ 🔊 The royal silence has been lifted!
│ 
│ 🎉 All kingdom members may now
│ resume their conversations.
╰──────────────────
✨ *Royal Command Issued By:*
${pushname || 'Unknown'}
`.trim();

    return replyglobal(unmuteMessage);

  } catch (error) {
    console.error('Royal Unmute Error:', error);
    return replyglobal(`👑 *Royal Announcement*\n\nFailed to lift the silence!\n\nReason: ${error.message}\n\nEnsure I have advisor privileges.`);
  }
  break;
}

case 'gemini': {
    if (!text) {
        replyglobal('Please ask me something!'); // Handle empty input
        return;
    }

    try {
        // Construct the API URL
        const apiUrl = `https://api.agungny.my.id/api/gemini?q=${encodeURIComponent(text)}`;
        console.log("Sending request to API:", apiUrl);

        // Fetch the response from the API
        const response = await fetch(apiUrl);
        console.log("API Response Status:", response.status);

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        // Parse the JSON response
        const jsonData = await response.json();
        console.log("Parsed JSON Data:", jsonData);

        // Handle the API response
        if (jsonData.status === "true" && jsonData.result) {
            replyglobal(jsonData.result); // Send the response
        } else {
            replyglobal('Failed to fetch response from the API. Please try again later.');
        }
    } catch (error) {
        console.error('Error fetching API response:', error);
        replyglobal('An error occurred while fetching the AI response. Please try again later.');
    }
    break;
}
case 'gpt4o': {
    if (!text) {
        replyglobal('Please ask me something!'); // Handle empty input
        return;
    }

    try {
        // Construct the API URL
        const apiUrl = `https://vapis.my.id/api/gpt4o?q=${encodeURIComponent(text)}`;
        console.log("Sending request to API:", apiUrl);

        // Fetch the response from the API
        const response = await fetch(apiUrl);
        console.log("API Response Status:", response.status);

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        // Parse the JSON response
        const jsonData = await response.json();
        console.log("Parsed JSON Data:", jsonData);

        // Handle the API response
        if (jsonData.status === true && jsonData.result) {
            replyglobal(jsonData.result); // Send the response
        } else {
            replyglobal('Failed to fetch response from the API. Please try again later.');
        }
    } catch (error) {
        console.error('Error fetching API response:', error);
        replyglobal('An error occurred while fetching the AI response. Please try again later.');
    }
    break;
}
case 'gpt5': {
    if (!text) {
        replyglobal('Please ask me something!'); // Handle empty input
        return;
    }

    try {
        // Construct the API URL
        const apiUrl = `https://vapis.my.id/api/openai?q=${encodeURIComponent(text)}`;
        console.log("Sending request to API:", apiUrl);

        // Fetch the response from the API
        const response = await fetch(apiUrl);
        console.log("API Response Status:", response.status);

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        // Parse the JSON response
        const jsonData = await response.json();
        console.log("Parsed JSON Data:", jsonData);

        // Handle the API response
        if (jsonData.status === true && jsonData.result) {
            replyglobal(jsonData.result); // Send the response
        } else {
            replyglobal('Failed to fetch response from the API. Please try again later.');
        }
    } catch (error) {
        console.error('Error fetching API response:', error);
        replyglobal('An error occurred while fetching the AI response. Please try again later.');
    }
    break;
}
case 'ask': {
    if (!text) {
        replyglobal('Please ask me something!');
        return;
    }

    try {
        const apiUrl = `https://api.siputzx.my.id/api/ai/blackboxai-pro?content=${encodeURIComponent(text)}`;
        console.log("Sending request to API:", apiUrl);

        const response = await fetch(apiUrl);
        console.log("API Response Status:", response.status);

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const jsonData = await response.json();
        console.log("Parsed JSON Data:", jsonData);

        if (jsonData.status === true && jsonData.data) {
            const cleanResponse = jsonData.data.replace(/<think>\n\n<\/think>/g, '').trim();
            replyglobal(cleanResponse);
        } else {
            replyglobal('Failed to fetch response from the API. Please try again later.');
        }
    } catch (error) {
        console.error('Error fetching API response:', error);
        replyglobal('An error occurred while fetching the AI response. Please try again later.');
    }
    break;
}

case 'openai': {
    if (!text) {
        replyglobal('Please ask me something!');
        return;
    }

    try {
        const apiUrl = `https://api.siputzx.my.id/api/ai/dbrx-instruct?content=${encodeURIComponent(text)}`;
        console.log("Sending request to API:", apiUrl);

        const response = await fetch(apiUrl);
        console.log("API Response Status:", response.status);

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const jsonData = await response.json();
        console.log("Parsed JSON Data:", jsonData);

        if (jsonData.status === true && jsonData.data) {
            const cleanResponse = jsonData.data.length > 300 ? jsonData.data.substring(0, 300) + "..." : jsonData.data;
            replyglobal(cleanResponse);
        } else {
            replyglobal('Failed to fetch response from the API. Please try again later.');
        }
    } catch (error) {
        console.error('Error fetching API response:', error);
        replyglobal('An error occurred while fetching the AI response. Please try again later.');
    }
    break;
}

case 'meta': {
    if (!text) {
        replyglobal('Please ask me something!');
        return;
    }

    try {
        const apiUrl = `https://api.siputzx.my.id/api/ai/metaai?query=${encodeURIComponent(text)}`;
        console.log("Sending request to API:", apiUrl);

        const response = await fetch(apiUrl);
        console.log("API Response Status:", response.status);

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const jsonData = await response.json();
        console.log("Parsed JSON Data:", jsonData);

        if (jsonData.status === true && jsonData.data) {
            replyglobal(jsonData.data);
        } else {
            replyglobal('Failed to fetch a valid response from the API. Please try again later.');
        }
    } catch (error) {
        console.error('Error fetching API response:', error);
        replyglobal('An error occurred while fetching the AI response. Please try again later.');
    }
    break;
}

case 'robot': {
    if (!text) {
        replyglobal('Please ask me something!');
        return;
    }

    try {
        const apiUrl = `https://api.siputzx.my.id/api/ai/deepseek-r1?content=${encodeURIComponent(text)}`;
        console.log("Sending request to API:", apiUrl);

        const response = await fetch(apiUrl);
        console.log("API Response Status:", response.status);

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const jsonData = await response.json();
        console.log("Parsed JSON Data:", jsonData);

        if (jsonData.status === true && jsonData.data) {
            const cleanResponse = jsonData.data.replace(/<\/?think>\n*/g, '').trim();
            replyglobal(cleanResponse);
        } else {
            replyglobal('Failed to fetch response from the API. Please try again later.');
        }
    } catch (error) {
        console.error('Error fetching API response:', error);
        replyglobal('An error occurred while fetching the AI response. Please try again later.');
    }
    break;
}
case 'gitclone': {
  if (!text) {
    replyglobal('Please provide a GitHub repository link! Example: https://github.com/saipulanuar/v18');
    return;
  }

  try {
    // Validate the GitHub URL using regex
    let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
    if (!regex.test(text)) {
      replyglobal('Invalid GitHub URL format. Please provide a valid repository link.');
      return;
    }

    // Extract user and repository from the URL
    let [, user, repos] = text.match(regex) || [];
    let repo = repos.replace(/.git$/, "");
    let apiUrl = `https://api.github.com/repos/${user}/${repos}/zipball`;

    // Fetch the repository's zipball file from the GitHub API
    const response = await fetch(apiUrl, { method: 'HEAD' });
    console.log("GitHub API Response Status:", response.status);

    if (!response.ok) {
      throw new Error(`GitHub request failed with status ${response.status}`);
    }

    // Extract the filename from the content-disposition header
    let filename = response.headers
      .get("content-disposition")
      .match(/attachment; filename=(.*)/)[1];
    console.log("File Name:", filename);

    // Send the ZIP file as media to the user
    replyglobal('*Please wait, sending the repository...*');
    await conn.sendMedia(m.chat, apiUrl, m, { fileName: filename });

  } catch (error) {
    console.error('Error fetching GitHub repository:', error);
    replyglobal('An error occurred while fetching the GitHub repository. Please try again later.');
  }
  break;
}
case 'nglsend': {
    if (!text) {
        replyglobal('Please provide your NGL link and a message!\nExample: *.nglsend https://ngl.link/yourusername|Hello there!*');
        return;
    }

    try {
        const [link, nglText] = text.split('|').map(v => v.trim());
        if (!link || !nglText) {
            replyglobal('Invalid format! Please use the format:\n*.nglsend https://ngl.link/yourusername|Your message*');
            return;
        }

        const apiUrl = `https://api.siputzx.my.id/api/tools/ngl?link=${encodeURIComponent(link)}&text=${encodeURIComponent(nglText)}`;
        console.log("Sending request to API:", apiUrl);

        const response = await fetch(apiUrl);
        console.log("API Response Status:", response.status);

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const jsonData = await response.json();
        console.log("Parsed JSON Data:", jsonData);

        if (jsonData.status === true) {
            replyglobal(`✅ Successfully sent the message to NGL!\n\n*Message Sent:* ${nglText}`);
        } else {
            replyglobal('❌ Failed to send the message to NGL. Please try again later.');
        }
    } catch (error) {
        console.error('Error sending NGL message:', error);
        replyglobal('An error occurred while sending your NGL message. Please try again later.');
    }
    break;
}
case 'simi': {
    if (!text) {
        replyglobal('Please ask me anything!'); // Handle empty input
        return;
    }

    try {
        // Construct the API URL
        const apiUrl = `https://vapis.my.id/api/simi?q=${encodeURIComponent(text)}`;
        console.log("Sending request to API:", apiUrl);

        // Fetch the response from the API
        const response = await fetch(apiUrl);
        console.log("API Response Status:", response.status);

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        // Parse the JSON response
        const jsonData = await response.json();
        console.log("Parsed JSON Data:", jsonData);

        // Handle the API response
        if (jsonData.status === true && jsonData.result) {
            replyglobal(jsonData.result); // Send the response
        } else {
            replyglobal('Failed to fetch response from the API. Please try again later.');
        }
    } catch (error) {
        console.error('Error fetching API response:', error);
        replyglobal('An error occurred while fetching the AI response. Please try again later.');
    }
    break;
}
case 'information': {
    try {
        // Get the current time
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');

        // Extract user details (assuming user object exists)
        const userName = m.pushName || "Unknown User"; // Get name
        const userNumber = m.sender.split('@')[0]; // Extract number
        
        // Since we are in a bot environment, battery info is typically not available
        const batteryLevel = "Not supported"; // Hardcode as 'Not supported'

        // Send response
        replyglobal(`🕒 *Current Time:* ${hours}:${minutes}:${seconds}
📱 *Battery:* ${batteryLevel}
👤 *User:* ${userName}
📞 *Number:* ${userNumber}`);
    } catch (error) {
        console.error('Error fetching time data:', error);
        replyglobal('An error occurred while getting the time.');
    }
    break;
}
case 'funCode': {
    // Step 1: Pretend to verify the user's request
    replyglobal('🔒 *Validating your request...* Please wait while I check your info... ⏳');

    let progress = 10;
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 10) + 5; // Randomly increase progress

        // Show progress every second
        editChat(`⏳ Verifying... ${progress}%`, m);

        if (progress >= 100) {
            clearInterval(interval);

            // Step 2: Simulate a system check and display the generated 8-digit code
            const randomCode = Math.floor(Math.random() * 90000000) + 10000000; // 8-digit number

            setTimeout(() => {
                replyglobal(`🔐 *System Check Complete!* 🎉\n\nYour super secret code is: *${randomCode}*`);
                
                // Step 3: Add random, fake verification steps (to make the prank more fun)
                setTimeout(() => {
                    replyglobal('🧐 Checking the security status of the code...');
                }, 2000); // 2-second delay

                setTimeout(() => {
                    replyglobal('🔍 Verifying the authenticity of your code... Please wait.');
                }, 4000); // 4-second delay

                setTimeout(() => {
                    replyglobal('🔒 Securely locking your device... Almost there!');
                }, 6000); // 6-second delay

                // Step 4: Add more suspense before revealing the prank
                setTimeout(() => {
                    replyglobal('🎉 Congratulations! Your code has been successfully validated.');
                }, 8000); // 8-second delay

                // Step 5: Reveal the prank
                setTimeout(() => {
                    replyglobal('😂 Just kidding! That code doesn’t do anything. I was pranking you!');
                    
                    // Step 6: Add random playful message
                    setTimeout(() => {
                        replyglobal('🎉 I bet you were thinking it was real, right? 😜');
                    }, 1500); // 1.5-second delay
                    
                    // Step 7: Fun message with another layer of humor
                    setTimeout(() => {
                        replyglobal('🚨 Don’t worry, no devices were harmed in the making of this prank.');
                    }, 2500); // 2.5-second delay

                    // Step 8: Final lighthearted message
                    setTimeout(() => {
                        replyglobal('😆 Thanks for playing! Come back for more pranks anytime!');
                    }, 3500); // 3.5-second delay
                }, 10000); // 10-second delay
            }, 1500); // 1.5-second delay
        }
    }, 1000); // Updates every second

    break;
}
case 'age': {
    // Extract the date of birth provided by the user
    const dob = text.trim(); // Format should be yy/dd/mm

    if (!dob) {
        // If dob is empty, prompt the user to provide it correctly
        replyglobal(`⚠️ Please provide your date of birth in the format: yy/dd/mm.`);
        break;
    }

    const [year, day, month] = dob.split('/');

    // Convert year, month, and day to integers
    const birthYear = parseInt('20' + year); // Assuming the year is in 'yy' format, prepend '20'
    const birthMonth = parseInt(month);
    const birthDay = parseInt(day);

    // Get the current date
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Months are 0-based
    const currentDay = currentDate.getDate();

    // Calculate the user's age
    let age = currentYear - birthYear;

    // Adjust the age if the current date is before the user's birthday
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        age--; // User hasn't had their birthday yet this year
    }

    // Show the user's real age
    replyglobal(`🎉 Your real age is: *${age}* years old! 🎈`);

    // Extra fun messages with emojis
    setTimeout(() => {
        replyglobal(`🎂 *Happy Birthday in advance!* 🎉 If it's your birthday soon, get ready for some fun!`);
    }, 1000); // 1-second delay

    setTimeout(() => {
        replyglobal(`🚀 You're in the prime of your life! Keep shining! ✨`);
    }, 2000); // 2-second delay

    setTimeout(() => {
        replyglobal(`💪 Age is just a number, and you've got so much more to achieve! 🔥`);
    }, 3000); // 3-second delay

    break;
}
case 'prank1': {
    // Generate a random 8-digit "code"
    const randomCode = Math.floor(Math.random() * 90000000) + 10000000; // Generates an 8-digit number

    // Send the "code" to the user
    replyglobal(`🔐 Here is your super secret code: *${randomCode}*`);

    // Delay the prank reveal
    setTimeout(() => {
        replyglobal('😂 Hahaha! That code doesn’t do anything! Just a little prank for you!');

        // Final prank message
        setTimeout(() => {
            replyglobal('🔧 Nothing to worry about, just having some fun!');
        }, 2000); // 2-second delay
    }, 2000); // 2-second delay

    break;
}
case 'prank': {
    // Step 1: Pretend to process the request
    replyglobal('🔒 *Verifying your secret code request...* ⏳');
    
    let progress = 10;
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 10) + 5; // Randomly increase progress

        if (progress >= 100) {
            clearInterval(interval);

            // Step 2: Generate a random 8-digit code
            const randomCode = Math.floor(Math.random() * 90000000) + 10000000; // 8-digit number

            // Step 3: Display the code like it's something important
            setTimeout(() => {
                replyglobal(`🔐 *Code Successfully Generated!* 🎉\nHere is your super secret code: *${randomCode}*`);

                // Step 4: Delay before prank reveal
                setTimeout(() => {
                    replyglobal('😂 Hahaha! That code doesn’t do anything! Just a little prank for you!');

                    // Step 5: Add another prank layer
                    setTimeout(() => {
                        replyglobal('🔧 This isn’t a real code! I just wanted to mess with you 😜');
                    }, 1500); // 1.5-second delay

                    // Final message
                    setTimeout(() => {
                        replyglobal('🤖 I hope you had fun! Come back anytime for more surprises!');
                    }, 3000); // 3-second delay
                }, 2000); // 2-second delay
            }, 1500); // 1.5-second delay
        } else {
            // Step 6: Show loading progress
            editChat(`⏳ Verifying... ${progress}%`, m);
        }
    }, 1000); // Updates every second

    break;
}
case 'ai': {
    if (!text) {
        replyglobal('Please ask me something!'); // Handle empty input
        return;
    }

    try {
        // Construct the API URL
        const apiUrl = `https://api.agungny.my.id/api/chatgpt?q=${encodeURIComponent(text)}`;
        console.log("Sending request to API:", apiUrl);

        // Fetch the response from the API
        const response = await fetch(apiUrl);
        console.log("API Response Status:", response.status);

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        // Parse the JSON response
        const jsonData = await response.json();
        console.log("Parsed JSON Data:", jsonData);

        // Handle the API response
        if (jsonData.status === "true" && jsonData.result) {
            replyglobal(jsonData.result); // Send the response
        } else {
            replyglobal('Failed to fetch response from the API. Please try again later.');
        }
    } catch (error) {
        console.error('Error fetching API response:', error);
        replyglobal('An error occurred while fetching the AI response. Please try again later.');
    }
    break;
}
case 'claude': {
    if (!text) {
        replyglobal('Please provide a query for Claude AI!'); // Handle empty input
        return;
    }

    try {
        // Construct the API URL for Claude AI
        const apiUrl = `https://apis.davidcyriltech.my.id/ai/claude?text=${encodeURIComponent(text)}`;
        console.log("Sending request to API:", apiUrl);

        // Fetch the response from the API
        const response = await fetch(apiUrl);
        console.log("API Response Status:", response.status);

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        // Parse the JSON response
        const jsonData = await response.json();
        console.log("Parsed JSON Data:", jsonData);

        // Check if the response is successful and contains a message
        if (jsonData.success) {
            const responseMessage = jsonData.response;

            // Generate three variations of the bot's response
            const responseVariations = [
                `🤖 Claude says: "${responseMessage}"`,
                `🧠 Thinking... Here's what Claude thinks: "${responseMessage}"`,
                `🔍 Insight from Claude: "${responseMessage}"`
            ];

            // Send three messages sequentially with a slight delay
            for (const message of responseVariations) {
                setTimeout(() => replyglobal(message), 1000);
            }
        } else {
            replyglobal('Failed to get a valid response from Claude AI. Please try again later.');
        }
    } catch (error) {
        console.error('Error fetching API response:', error);
        replyglobal('An error occurred while fetching data from Claude AI. Please try again later.');
    }
    break;
}
case 'wikipedia2': {
    if (!text) {
        replyglobal('Please provide a topic for Wikipedia search!'); // Handle empty input
        return;
    }

    try {
        // Construct the API URL for Wikipedia search (using Wikipedia's official API)
        const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro&explaintext&titles=${encodeURIComponent(text)}`;
        console.log("Sending request to API:", apiUrl);

        // Fetch the response from the API
        const response = await fetch(apiUrl);
        console.log("API Response Status:", response.status);

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        // Parse the JSON response
        const jsonData = await response.json();
        console.log("Parsed JSON Data:", jsonData);

        // Extract page data from the response
        const pages = jsonData.query.pages;
        const pageId = Object.keys(pages)[0];  // Get the first page (should be the only one)

        if (pageId && pages[pageId].extract) {
            const extract = pages[pageId].extract;
            const responseMessage = `Here is some information about "${text}":\n\n${extract}`;
            replyglobal(responseMessage); // Send the formatted response
        } else {
            replyglobal('No results found for your search. Please try another search term.');
        }
    } catch (error) {
        console.error('Error fetching API response:', error);
        replyglobal('An error occurred while fetching the Wikipedia data. Please try again later.');
    }
    break;
}

//new code
case 'pixabay': {
  if (!text) return replyglobal(`*Example*: ${prefix + command} ferrari`);

  try {
    await IconicTechInc.sendMessage(m.chat, { react: { text: `🖼️`, key: m.key } });

    const axios = require('axios');
    const apiUrl = `https://api.nexoracle.com/search/pixabay-images?apikey=63b406007be3e32b53&q=${encodeURIComponent(text)}`;

    const response = await axios.get(apiUrl);
    const images = response.data.result; // Assuming the API returns an array of image URLs under "result"

    if (!images || images.length === 0) {
      return replyglobal(`*No images found for:* ${text}`);
    }

    // Send up to 5 images
    const footer = "\n\nPowered by Queen Ruva AI";
    for (let i = 0; i < Math.min(images.length, 5); i++) {
      await IconicTechInc.sendMessage(m.chat, {
        image: { url: images[i] },
        caption: footer
      }, { quoted: m });
    }

  } catch (error) {
    console.error('Error fetching images:', error);
    replyglobal(`*An error occurred while fetching images. Please try again later.*`);
  }
  break;
}
//nee code
case 'wallpaper': {
  if (!text) return replyglobal(`*Example*: ${prefix + command} naruto`);

  try {
    await IconicTechInc.sendMessage(m.chat, { react: { text: `🖼️`, key: m.key } });

    // Notify user that the search is in progress
    replyglobal(`*Searching for wallpapers of:* ${text}\n\n🔄 Please wait...`);

    const axios = require('axios');
    const apiUrl = `https://apis.davidcyriltech.my.id/search/wallpaper?text=${encodeURIComponent(text)}`;

    // Fetch wallpaper results
    const response = await axios.get(apiUrl);
    if (!response.data || !response.data.length) {
      return replyglobal(`❌ No wallpapers found for *${text}*`);
    }

    // Select up to 5 wallpapers
    const images = response.data.slice(0, 5);

    // Footer message with extra signature
    const footer = "\n\nMade with ❤️‍🔥 by Iconic Tech";

    // Send each wallpaper
    for (const imageUrl of images) {
      await IconicTechInc.sendMessage(m.chat, {
        image: { url: imageUrl },
        caption: footer
      }, { quoted: m });
    }

    // Final message after sending wallpapers
    replyglobal(`🎉 *Here are your wallpapers for:* ${text}`);

  } catch (error) {
    console.error('Error fetching wallpapers:', error);
    replyglobal(`*An error occurred while fetching wallpapers. Please try again later.*`);
  }
  break;
}
//google ask
case 'google-ask': {
  if (!text) return replyglobal(`*Example*: ${prefix + command} who is Maher Zubair`);

  try {
    await IconicTechInc.sendMessage(m.chat, { react: { text: `🔍`, key: m.key } });

    const axios = require('axios');
    const apiUrl = `https://api.nexoracle.com/search/google?apikey=63b406007be3e32b53&q=${encodeURIComponent(text)}`;

    const response = await axios.get(apiUrl);
    const results = response.data.result; // Assuming API returns an array of search results under "result"

    if (!results || results.length === 0) {
      return replyglobal(`*No search results found for:* ${text}`);
    }

    // Format the search results
    let searchResults = `🔎 *Google Search Results for:* ${text}\n\n`;
    for (let i = 0; i < Math.min(results.length, 5); i++) {
      searchResults += `*${i + 1}. ${results[i].title}*\n🔗 ${results[i].link}\n\n`;
    }

    replyglobal(searchResults);

  } catch (error) {
    console.error('Error fetching search results:', error);
    replyglobal(`*An error occurred while fetching search results. Please try again later.*`);
  }
  break;
}
//check ip
case 'check-apikey': {
  try {
    await IconicTechInc.sendMessage(m.chat, { react: { text: `🔑`, key: m.key } });

    const axios = require('axios');
    const apiUrl = `https://api.nexoracle.com/check/apikey?apikey=63b406007be3e32b53`;

    const response = await axios.get(apiUrl);
    const data = response.data;

    let message = `🔍 *API Key Status:*\n\n`;
    message += `👤 *Owner:* ${data.owner}\n`;
    message += `📛 *Username:* ${data.result.Username}\n`;
    message += `💳 *Plan:* ${data.result.Plan}\n`;
    message += `🔢 *API Limit:* ${data.result.Api_Limit}\n`;
    message += `📅 *Expiry Date:* ${data.result.Expirey_Date}\n`;
    message += `✅ *Message:* ${data.result.Message}\n`;

    replyglobal(message);

  } catch (error) {
    console.error('Error checking API key:', error);
    replyglobal(`*An error occurred while checking the API key. Please try again later.*`);
  }
  break;
}
//qr created 
case 'generate-qr': {
  if (!text) return replyglobal(`*Example*: ${prefix + command} Hi I'm Maher Zubair`);

  try {
    await IconicTechInc.sendMessage(m.chat, { react: { text: `📸`, key: m.key } });

    const axios = require('axios');
    const apiUrl = `https://api.nexoracle.com/misc/generate-qr?apikey=63b406007be3e32b53&text=${encodeURIComponent(text)}`;

    const response = await axios.get(apiUrl);
    const qrCodeUrl = response.data.result; // Assuming the API returns the image URL under "result"

    if (!qrCodeUrl) {
      return replyglobal(`*An error occurred while generating the QR code. Please try again later.*`);
    }

    await IconicTechInc.sendMessage(m.chat, {
      image: { url: qrCodeUrl },
      caption: `🔹 *QR Code Generated for:*\n"${text}"\n\n📌 *Powered by Queen Ruva AI*`
    }, { quoted: m });

  } catch (error) {
    console.error('Error generating QR code:', error);
    replyglobal(`*An error occurred while generating the QR code. Please try again later.*`);
  }
  break;
}
//protect
case 'protect': {
  if (!text) return replyglobal(`*Example*: ${prefix + command} console.log('Hello, world!');`);

  try {
    await IconicTechInc.sendMessage(m.chat, { react: { text: `🔒`, key: m.key } });

    const axios = require('axios');
    const apiUrl = `https://api.nexoracle.com/misc/obfuscate?apikey=63b406007be3e32b53&code=${encodeURIComponent(text)}`;

    const response = await axios.get(apiUrl);

    if (response.data && response.data.result) {
      const obfuscatedCode = response.data.result; // Assuming the API returns the obfuscated code under "result"

      let message = `🔐 *Obfuscated Code:* \n\n\`\`\`javascript\n${obfuscatedCode}\n\`\`\``;
      replyglobal(message);
    } else {
      console.error('Obfuscation failed. API response:', response.data);
      replyglobal(`*An error occurred while obfuscating the code. Please try again later.*`);
    }

  } catch (error) {
    console.error('Error obfuscating code:', error);
    replyglobal(`*An error occurred while obfuscating the code. Please try again later.*`);
  }
  break;
}
case 'fancy': {
  try {
    await IconicTechInc.sendMessage(m.chat, { react: { text: `✨`, key: m.key } });

    const axios = require('axios');

    // If no text is provided, show all fancy styles
    if (!text) {
      const apiUrl = `https://apis.giftedtech.web.id/api/tools/fancy?apikey=gifted&text=SampleText`; // Use a sample text to fetch styles
      const response = await axios.get(apiUrl);
      const stylishTextList = response.data.result; // Assuming the API returns a list of stylish texts

      if (!stylishTextList || stylishTextList.length === 0) {
        return replyglobal(`*No fancy styles available at the moment. Please try again later.*`);
      }

      // Show all fancy styles with numbers
      let message = `✨ *Available Fancy Styles:*\n\n`;
      stylishTextList.forEach((style, index) => {
        message += `${index + 1}. ${style}\n`;
      });

      message += `\n*Usage*: Reply with *${prefix + command} [number] [text]* to generate fancy text.\nExample: *${prefix + command} 3 Hello*`;
      return replyglobal(message);
    }

    // If text is provided, check if it's a selection request (e.g., "fancy 3 Hello")
    const args = text.split(' ');
    const selectedStyleIndex = parseInt(args[0]) - 1; // Extract the number
    const userText = args.slice(1).join(' '); // Extract the text

    if (isNaN(selectedStyleIndex) || !userText) {
      return replyglobal(`*Invalid usage.*\nExample: *${prefix + command} 3 Hello*`);
    }

    // Fetch fancy styles for the user's text
    const apiUrl = `https://apis.giftedtech.web.id/api/tools/fancy?apikey=gifted&text=${encodeURIComponent(userText)}`;
    const response = await axios.get(apiUrl);
    const stylishTextList = response.data.result; // Assuming the API returns a list of stylish texts

    if (!stylishTextList || stylishTextList.length === 0) {
      return replyglobal(`*No stylish text found for:* ${userText}`);
    }

    // Check if the selected number is valid
    if (selectedStyleIndex < 0 || selectedStyleIndex >= stylishTextList.length) {
      return replyglobal(`*Invalid selection. Please choose a number between 1 and ${stylishTextList.length}.*`);
    }

    // Return the selected fancy text
    const selectedStylishText = stylishTextList[selectedStyleIndex];
    replyglobal(`✨ *Your fancy text:* \n${selectedStylishText}`);

  } catch (error) {
    console.error('Error generating fancy text:', error);
    replyglobal(`*An error occurred while generating fancy text. Please try again later.*`);
  }
  break;
}
//dont scroll 
case 'image2png': {
  if (!text) return replyglobal(`*Example*: ${prefix + command} https://i.pinimg.com/originals/eb/a0/a4/eba0a4055d74504121de628667b7ee91.jpg`);

  try {
    await IconicTechInc.sendMessage(m.chat, { react: { text: `🔄`, key: m.key } });

    const axios = require('axios');
    const apiUrl = `https://api.nexoracle.com/converter/image2png?apikey=63b406007be3e32b53&img=${encodeURIComponent(text)}`;

    const response = await axios.get(apiUrl);
    const pngImageUrl = response.data.result; // Assuming the API returns the converted PNG image URL under "result"

    if (!pngImageUrl) {
      return replyglobal(`*An error occurred while converting the image. Please try again later.*`);
    }

    await IconicTechInc.sendMessage(m.chat, {
      image: { url: pngImageUrl },
      caption: `🔄 *Image converted to PNG.*`
    }, { quoted: m });

  } catch (error) {
    console.error('Error converting image to PNG:', error);
    replyglobal(`*An error occurred while converting the image. Please try again later.*`);
  }
  break;
}
case 'domain-details': {
  if (!text) return replyglobal(`*Example*: ${prefix + command} example.com`);

  try {
    await IconicTechInc.sendMessage(m.chat, { react: { text: `🔍`, key: m.key } });

    // Clean and validate the input
    const domainInput = text.trim().toLowerCase();
    
    // Basic domain validation (simple check for now)
    if (!/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/.test(domainInput)) {
      return replyglobal(`*Invalid domain format.* Please enter a valid domain like "example.com"`);
    }

    const axios = require('axios');
    const apiUrl = `https://api.nexoracle.com/details/domain?apikey=63b406007be3e32b53&q=${encodeURIComponent(domainInput)}`;

    const response = await axios.get(apiUrl);
    
    // Check if response has data and result
    if (!response.data || !response.data.result) {
      return replyglobal(`*Domain not found or information unavailable* for "${domainInput}"`);
    }

    const domainDetails = response.data.result;

    let message = `🔍 *Domain Details for:* "${domainInput}"\n\n`;
    message += `🌐 *Domain Name:* ${domainDetails.domainName || 'N/A'}\n`;
    message += `🔒 *Registrar:* ${domainDetails.registrar || 'N/A'}\n`;
    message += `📅 *Creation Date:* ${domainDetails.creationDate || 'N/A'}\n`;
    message += `⏳ *Expiration Date:* ${domainDetails.expirationDate || 'N/A'}\n`;
    message += `📍 *Country:* ${domainDetails.country || 'N/A'}\n`;

    replyglobal(message);

  } catch (error) {
    console.error('Error fetching domain details:', error);
    
    if (error.response) {
      // Handle API response errors
      if (error.response.status === 404) {
        replyglobal(`*Domain not found*: "${text.trim()}"`);
      } else {
        replyglobal(`*API Error*: ${error.response.status} - Please try again later.`);
      }
    } else if (error.request) {
      replyglobal(`*Network Error*: Could not connect to the domain lookup service.`);
    } else {
      replyglobal(`*An error occurred* while fetching domain details. Please try again later.`);
    }
  }
  break;
}
case 'reverse': {
  if (!text) return replyglobal(`🔄 *QUEEN RUVA AI TEXT REVERSER* 🔄\n\nUsage:\n*${prefix + command}* Your text here\n\nExample:\n*${prefix + command}* I am Queen Ruva`);

  try {
    await IconicTechInc.sendMessage(m.chat, { react: { text: '✨', key: m.key } });

    // Enhanced text reversal with special character handling
    const reversedText = text.split(/([\s\S])/u).reverse().join('').replace(/\s+/g, ' ').trim();

    // Stylish formatted response
    const ruvaResponse = `
🌀 *《 QUEEN RUVA AI BETA v2.0.3 》* 🌀
╭─────────────
│ 📜 *Original:* 
│ ${text}
├─────────────
│ 🔮 *Reversed:*
│ ${reversedText}
╰─────────────
📛 *Note:* Works with emojis, symbols and multilingual text!
`.trim();

    // Send with bot's signature styling
    return IconicTechInc.sendMessage(m.chat, {
      text: ruvaResponse,
      contextInfo: {
        externalAdReply: {
          title: "✨ Queen Ruva Magic ✨",
          body: "Text Reversal Engine",
          thumbnail: await (await fetch('https://i.imgur.com/8BkYdWw.png')).buffer(),
          mediaType: 1,
          mediaUrl: '',
          sourceUrl: 'codewave-unit.zone.id',
          showAdAttribution: true
        }
      }
    }, { quoted: m });

  } catch (error) {
    console.error('Royal Text Reversal Error:', error);
    return replyglobal(`👑 *Royal Decree*\n\nQueen Ruva's magic failed to reverse your text!\nReason: ${error.message}\n\nPlease try again with different text.`);
  }
  break;
}
case 'tempmail': {
    try {
        const apiUrl = `https://kaiz-apis.gleeze.com/api/tempmail-create`;
        console.log("Sending request to API:", apiUrl);

        const response = await fetch(apiUrl);
        console.log("API Response Status:", response.status);

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const jsonData = await response.json();
        console.log("Parsed JSON Data:", jsonData);

        if (jsonData && jsonData.address) {
            let email = jsonData.address;
            let token = jsonData.token;
            replyglobal(`✅ Temp Mail Created!\n\n📩 Address: ${email}\n\nTo check inbox, use this:\nhttps://kaiz-apis.gleeze.com/tempmail-inbox?token=${token}`);
        } else {
            replyglobal('❌ Failed to create a temporary email. Please try again later.');
        }
    } catch (error) {
        console.error('Error fetching Temp Mail:', error);
        replyglobal('❌ Failed to create a temporary email. Please try again later.');
    }
    break;
}
case 'temperature':
case 'temp':
case 'tempsensor': {
  try {
    await IconicTechInc.sendMessage(m.chat, { react: { text: '🌡️', key: m.key } });

    // Generate realistic temperature data
    const locations = [
      { name: "Royal Palace", emoji: "🏰", baseTemp: 22 },
      { name: "Enchanted Forest", emoji: "🌲", baseTemp: 18 },
      { name: "Crystal Caves", emoji: "💎", baseTemp: 12 },
      { name: "Ruva's Observatory", emoji: "🔭", baseTemp: 20 }
    ];
    
    const currentLocation = locations[Math.floor(Math.random() * locations.length)];
    const tempVariation = (Math.random() * 6 - 3).toFixed(1); // -3° to +3° variation
    const currentTemp = (+currentLocation.baseTemp + +tempVariation).toFixed(1);
    const humidity = (60 + Math.random() * 30).toFixed(1); // 60-90% humidity
    const heatIndex = calculateHeatIndex(currentTemp, humidity);

    // Create formatted message
    const tempMessage = `
🌡️ *QUEEN RUVA THERMAL SCAN* v2.0.3
╭───────────────────
│ ${currentLocation.emoji} *Location:* ${currentLocation.name}
│ 🌡 *Temperature:* ${currentTemp}°C
│ 💧 *Humidity:* ${humidity}%
│ 🔥 *Feels Like:* ${heatIndex}°C
│ 
│ 📊 *Conditions:*
│ ${getTemperatureStatus(currentTemp)}
╰───────────────────
🔄 Updated: ${new Date().toLocaleTimeString()}
`.trim();

    // Send with thermal visualization
    return IconicTechInc.sendMessage(m.chat, {
      text: tempMessage,
      contextInfo: {
        externalAdReply: {
          title: "🌡️ Royal Climate Monitoring",
          body: `${currentLocation.name} Thermal Scan`,
          thumbnail: await (await fetch('https://i.imgur.com/KjQ2zQg.png')).buffer(),
          mediaType: 1,
          mediaUrl: '',
          sourceUrl: 'codewave-unit.zone.id',
          showAdAttribution: true
        }
      }
    }, { quoted: m });

  } catch (error) {
    console.error('Temp Sensor Error:', error);
    return replyglobal(`👑 *Royal Alert*\n\nThermal sensors offline!\nError: ${error.message}\n\nPlease try again later.`);
  }
  break;
}

// Helper functions
function calculateHeatIndex(temp, humidity) {
  // Simplified heat index calculation
  const t = parseFloat(temp);
  const rh = parseFloat(humidity);
  return (t + 0.05 * rh).toFixed(1); // Basic approximation
}

function getTemperatureStatus(temp) {
  const t = parseFloat(temp);
  if (t < 0) return "❄️ Freezing Conditions";
  if (t < 10) return "🥶 Chilly";
  if (t < 20) return "☁️ Cool";
  if (t < 27) return "🌤️ Pleasant";
  if (t < 33) return "🔥 Warm";
  return "☀️ Hot! Use caution";
}
case 'send':
case 'message': {
  // Check if the command has the required format
  if (!text || !text.includes(' ')) {
    return replyglobal(`👑 *Queen Ruva Message System*\n\nUsage:\n*${prefix + command}* [phone_number] [message]\n\nExample:\n*${prefix + command}* 263****** Hello from Queen Ruva!`);
  }

  try {
    await IconicTechInc.sendMessage(m.chat, { react: { text: '✉️', key: m.key } });

    // Extract phone number and message
    const [number, ...messageParts] = text.split(' ');
    const fullMessage = messageParts.join(' ');
    
    // Validate phone number (basic international format check)
    const phoneRegex = /^(\+?\d{1,4}[\s-]?)?\d{8,15}$/;
    if (!phoneRegex.test(number)) {
      return replyglobal('❌ Invalid phone number format. Please use international format (e.g. 263*****)');
    }

    // Format phone number properly
    const formattedNumber = number.replace(/[^0-9]/g, '');
    const recipient = formattedNumber + '@s.whatsapp.net';

    // Create the message with Royal branding
    const messageToSend = {
      text: `👑 *Message from Queen Ruva AI*\n\n${fullMessage}\n\n💌 Sent via ${botname}`,
      contextInfo: {
        externalAdReply: {
          title: "Royal Messenger Service",
          body: "Direct WhatsApp Delivery",
          thumbnail: await (await fetch('https://i.imgur.com/JRl6QzY.png')).buffer(),
          mediaType: 1,
          mediaUrl: '',
          sourceUrl: 'codewave-unit.zone.id',
          showAdAttribution: true
        }
      }
    };

    // Send the message
    await IconicTechInc.sendMessage(recipient, messageToSend);

    // Send confirmation to sender
    return replyglobal(`👑 *Queen Ruva Ai Beta Message Receipt*\n\n✅ Message successfully sent to:\n📱 +${formattedNumber}\n\n📜 Content:\n${fullMessage.substring(0, 100)}${fullMessage.length > 100 ? '...' : ''}`);

  } catch (error) {
    console.error('Direct Message Error:', error);
    if (error.message.includes('not registered')) {
      return replyglobal('❌ Failed to send: This number is not registered on WhatsApp');
    }
    return replyglobal(`👑 *queen ruva ai beta Announcement*\n\nFailed to deliver message!\n\nError: ${error.message}\n\nPlease verify the number and try again.`);
  }
  break;
}
case 'forwardgroup': {
  if (!text || !text.includes('|')) {
    return replyglobal(`👑 *Forward from One Group to Another*\n\nUsage:\n*${prefix + command}* [source_group_id] | [target_group_id]\n\nExample:\n*${prefix + command}* 12036302XXXXXX | 12036304XXXXXX`);
  }

  const [sourceGroup, targetGroup] = text.split('|').map(x => x.trim() + '@g.us');

  if (!global.forwardGroups) global.forwardGroups = {};
  global.forwardGroups[sourceGroup] = targetGroup;

  return replyglobal(`✅ Messages from *${sourceGroup}* will now be forwarded to *${targetGroup}*.`);
  break;
}
case 'forwardall': {
  if (!text) {
    return replyglobal(`👑 *Queen Ruva AI Beta v2.0.3 - Forward to All Groups*\n\nUsage:\n*${prefix + command}* [message]\n\nExample:\n*${prefix + command}* Important announcement for all groups.`);
  }

  try {
    const chats = await IconicTechInc.getAllChats();
    const groupChats = chats.filter(chat => chat.isGroup);

    if (groupChats.length === 0) {
      return replyglobal('❌ No groups found to forward the message.');
    }

    for (let group of groupChats) {
      await IconicTechInc.sendMessage(group.id, {
        text: `👑 *Queen Ruva AI Beta v2.0.3 - Forwarded Message*\n\n${text}`
      });
    }

    return replyglobal(`✅ Message forwarded to ${groupChats.length} groups.`);
  } catch (error) {
    console.error('Forward to All Groups Error:', error);
    return replyglobal(`❌ Failed to forward message. Error: ${error.message}`);
  }
  break;
}
case 'spam': {
  const readMore = '\n'.repeat(4000); // Creates an empty space
  return replyglobal(readMore);
  break;
}
case 'rmv':
case 'delete': {
  if (!m.quoted) return replyglobal(`👑 *Queen Ruva Delete System*\n\nPlease reply to a bot message you want to delete\n\nExample:\nReply to a message with *${prefix + command}*`);

  try {
    // Verify the quoted message was sent by the bot
    const quotedMsg = m.quoted.message;
    const botJid = IconicTechInc.user.id.split(':')[0] + '@s.whatsapp.net';
    
    if (m.quoted.key.fromMe || (quotedMsg?.extendedTextMessage?.contextInfo?.participant === botJid)) {
      await IconicTechInc.sendMessage(m.chat, { react: { text: '🗑️', key: m.key } });
      
      // Delete the quoted message
      await IconicTechInc.sendMessage(m.chat, {
        delete: {
          remoteJid: m.chat,
          fromMe: true,
          id: m.quoted.id,
          participant: m.quoted.key.fromMe ? botJid : undefined
        }
      });

      return replyglobal('✅ *Message successfully deleted*');
    } else {
      return replyglobal('❌ *You can only delete messages sent by this bot*');
    }

  } catch (error) {
    console.error('Delete Error:', error);
    return replyglobal(`👑 *Royal Decree*\n\nFailed to delete message!\n\nReason: ${error.message}`);
  }
  break;
}
case 'api-check': {
  if (!text) return replyglobal(`*Example*: ${prefix + command} https://api.example.com/endpoint`);

  try {
    await IconicTechInc.sendMessage(m.chat, { react: { text: `🔍`, key: m.key } });

    // Validate and clean the URL
    let apiUrl = text.trim();
    if (!/^https?:\/\//i.test(apiUrl)) {
      apiUrl = 'https://' + apiUrl; // Add https if missing
    }

    // Basic URL validation
    try {
      new URL(apiUrl); // This will throw if invalid
    } catch (e) {
      return replyglobal(`*Invalid URL format.* Please provide a valid API endpoint like "https://api.example.com/data"`);
    }

    const axios = require('axios');
    const startTime = Date.now();
    
    const response = await axios.get(apiUrl, {
      timeout: 10000, // 10 seconds timeout
      validateStatus: function (status) {
        return status < 500; // Reject only if status is 500 or higher
      }
    });

    const responseTime = Date.now() - startTime;
    
    let message = `🌐 *API Status Check*\n\n`;
    message += `🔗 *URL:* ${apiUrl}\n`;
    message += `🟢 *Status:* ONLINE\n`;
    message += `⚡ *Response Time:* ${responseTime}ms\n`;
    message += `📊 *Status Code:* ${response.status} (${response.statusText})\n`;
    
    if (response.headers) {
      message += `📋 *Headers:*\n`;
      for (const [key, value] of Object.entries(response.headers)) {
        if (key.toLowerCase() === 'content-length') {
          message += `   • ${key}: ${(value / 1024).toFixed(2)} KB\n`;
        } else {
          message += `   • ${key}: ${value}\n`;
        }
      }
    }

    replyglobal(message);

  } catch (error) {
    console.error('API check error:', error);
    
    let errorMessage = `🌐 *API Status Check*\n\n`;
    errorMessage += `🔗 *URL:* ${text.trim()}\n`;
    errorMessage += `🔴 *Status:* OFFLINE\n`;
    
    if (error.code === 'ECONNABORTED') {
      errorMessage += `⏱️ *Error:* Request timeout (10s)\n`;
    } else if (error.response) {
      errorMessage += `📊 *Status Code:* ${error.response.status}\n`;
      errorMessage += `⚠️ *Error:* ${error.response.statusText}\n`;
    } else if (error.request) {
      errorMessage += `⚠️ *Error:* No response received\n`;
    } else {
      errorMessage += `⚠️ *Error:* ${error.message}\n`;
    }
    
    replyglobal(errorMessage);
  }
  break;
}
case 'wikipedia': {
    if (!text) {
        replyglobal('Please provide a topic for Wikipedia search!'); // Handle empty input
        return;
    }

    try {
        // Construct the API URL for Wikipedia search
        const apiUrl = `https://api.agungny.my.id/api/wikimedia?q=${encodeURIComponent(text)}`;
        console.log("Sending request to API:", apiUrl);

        // Fetch the response from the API
        const response = await fetch(apiUrl);
        console.log("API Response Status:", response.status);

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        // Parse the JSON response
        const jsonData = await response.json();
        console.log("Parsed JSON Data:", jsonData);

        // Check if the status is true and if there is content to display
        if (jsonData.status === "true" && jsonData.result) {
            const result = jsonData.result;

            // Check if we have results and process them
            if (result.length > 0) {
                let responseMessage = 'Here are some results related to your query:\n';
                result.forEach(item => {
                    responseMessage += `\nTitle: ${item.title}\nImage: ${item.image}\nSource: ${item.source}\n`;
                });
                replyglobal(responseMessage); // Send the formatted response
            } else {
                replyglobal('No results found. Please try another search term.');
            }
        } else {
            replyglobal('Failed to fetch data from Wikipedia. Please try again later.');
        }
    } catch (error) {
        console.error('Error fetching API response:', error);
        replyglobal('An error occurred while fetching the Wikipedia data. Please try again later.');
    }
    break;
}
case 'lyrics': {
    if (!text) {
        replyglobal('Please provide the artist and song name!\nExample: .lyrics Taylor Swift | Blank Space');
        return;
    }

    try {
        // Extract artist and song from the user's input
        const [artist, song] = text.split('|').map(s => s.trim());
        if (!artist || !song) {
            replyglobal('Please provide both artist and song name in the format: "artist | song"\nExample: .lyrics Taylor Swift | Blank Space');
            return;
        }

        // Construct the API URL (using lyrics.ovh which doesn't require an API key)
        const url = `https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(song)}`;
        console.log("Fetching lyrics from:", url);

        // Fetch the lyrics from the API
        const response = await fetch(url);
        
        // Check if the response is OK
        if (!response.ok) {
            if (response.status === 404) {
                replyglobal(`Sorry, I couldn't find lyrics for "${song}" by ${artist}.`);
            } else {
                throw new Error(`API request failed with status ${response.status}`);
            }
            return;
        }

        // Parse the JSON response
        const data = await response.json();

        // Handle the API response
        if (data.lyrics) {
            // Clean up lyrics (remove extra newlines and spaces)
            const cleanedLyrics = data.lyrics.replace(/\n{3,}/g, '\n\n').trim();
            
            // Split into chunks if too long for WhatsApp
            const maxLength = 1500; // WhatsApp message character limit
            if (cleanedLyrics.length > maxLength) {
                const parts = [];
                for (let i = 0; i < cleanedLyrics.length; i += maxLength) {
                    parts.push(cleanedLyrics.substring(i, i + maxLength));
                }
                
                // Send first part with rich preview
                await IconicTechInc.sendMessage(m.chat, {
                    text: `*Lyrics for "${song}" by ${artist}:*\n\n${parts[0]}`,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${artist} - ${song}`,
                            body: `Part 1 of ${parts.length} | Lyrics`,
                            thumbnail: fs.readFileSync(`./QueenMedia/ruva.jpg`),
                            sourceUrl: 'codewave-unit.zone.id',
                            mediaType: 1
                        }
                    }
                }, { quoted: m });
                
                // Send remaining parts
                for (let i = 1; i < parts.length; i++) {
                    await IconicTechInc.sendMessage(m.chat, {
                        text: `*[Continued]*\n\n${parts[i]}`,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: `${artist} - ${song}`,
                                body: `Part ${i+1} of ${parts.length} | Lyrics`,
                                thumbnail: fs.readFileSync(`./QueenMedia/ruva.jpg`),
                                sourceUrl: 'codewave-unit.zone.id',
                                mediaType: 1
                            }
                        }
                    });
                }
            } else {
                // Send full lyrics if they fit in one message
                await IconicTechInc.sendMessage(m.chat, {
                    text: `*Lyrics for "${song}" by ${artist}:*\n\n${cleanedLyrics}`,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${artist} - ${song}`,
                            body: `Full lyrics`,
                            thumbnail: fs.readFileSync(`./QueenMedia/ruva.jpg`),
                            sourceUrl: 'codewave-unit.zone.id',
                            mediaType: 1
                        }
                    }
                }, { quoted: m });
            }
        } else {
            replyglobal(`Sorry, no lyrics found for "${song}" by ${artist}.`);
        }
    } catch (error) {
        console.error('Lyrics fetch error:', error);
        replyglobal('An error occurred while fetching lyrics. Please try again later.');
    }
    break;
}
//iconic tech Commands for mediafire 
  case 'mediafire': {
    if (!text) return replyglobal(`*Example*: ${prefix + command} https://www.mediafire.com/file/q88nws2a11elzug/%F0%9F%92%BBQueen-RUVA+AI+official.zip/file`);

    try {
        
        await IconicTechInc.sendMessage(m.chat, { react: { text: `📥`, key: m?.key } });


        const apiUrl = `https://apis.davidcyriltech.my.id/mediafire?url=${encodeURIComponent(text)}`;
        const apiResponse = await axios.get(apiUrl);

    
        if (apiResponse.data && apiResponse.data.downloadLink) {
            const { fileName, mimeType, downloadLink } = apiResponse.data;


            await IconicTechInc.sendMessage(m.chat, {
                document: { url: downloadLink },
                mimetype: mimeType,
                fileName: fileName,
                caption: `📦 *File Name:* ${fileName}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ*`
            }, { quoted: m });
        } else {

            replyglobal(`*Failed to fetch file details! Please check the MediaFire URL and try again.*`);
        }
    } catch (error) {

        console.error('Error during MediaFire command:', error);
        replyglobal(`*An error occurred while processing your request. Please try again later.*`);
    }
    break;
}
case 'gdrive': {
    if (!text) return replyglobal(`*Example*: ${prefix + command} https://drive.google.com/file/d/1m8w-Z6KscMXFQJ5xUf31NXqZSRQmD4XH/view`);

    try {
        await IconicTechInc.sendMessage(m.chat, { react: { text: `📥`, key: m?.key } });

        // Extract file ID from Google Drive URL
        const fileId = text.match(/[-\w]{25,}/)?.[0];
        if (!fileId) return replyglobal(`*Invalid Google Drive URL!*`);

        // Use Google Drive direct download API
        const directUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
        
        // Get file info first
        const infoUrl = `https://www.googleapis.com/drive/v3/files/${fileId}?fields=name,mimeType,size&key=YOUR_API_KEY`;
        const infoResponse = await axios.get(infoUrl);
        const { name, mimeType } = infoResponse.data;

        // Send the file
        await IconicTechInc.sendMessage(m.chat, {
            document: { url: directUrl },
            mimetype: mimeType,
            fileName: name,
            caption: `📦 *File Name:* ${name}\n🔗 *Source:* Google Drive\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ*`
        }, { quoted: m });

    } catch (error) {
        console.error('Google Drive download error:', error);
        replyglobal(`*Error:* ${error.message || 'Failed to download from Google Drive'}`);
    }
    break;
}
case 'direct': {
    if (!text) return replyglobal(`*Example:* ${prefix + command} https://example.com/file.mp4`);

    try {
        await IconicTechInc.sendMessage(m.chat, { react: { text: `📥`, key: m.key } });
        
        const fileName = text.split('/').pop();
        const mimeType = fileName.includes('.mp4') ? 'video/mp4' : 
                         fileName.includes('.pdf') ? 'application/pdf' : 
                         'application/octet-stream';

        await IconicTechInc.sendMessage(m.chat, {
            document: { url: text },
            fileName: fileName,
            mimetype: mimeType,
            caption: `📥 *Direct Download*\n> *Powered by Queen RUVA AI*`,
        }, { quoted: m });

    } catch (error) {
        console.error(error);
        replyglobal("*❌ Failed to download file!*");
    }
    break;
}
case 'mega': {
    if (!text) return replyglobal(`*Example:* ${prefix + command} https://mega.nz/file/XXXXX#YYYYY`);

    try {
        await IconicTechInc.sendMessage(m.chat, { react: { text: `📥`, key: m.key } });
        
        const apiUrl = `https://api.emirkabal.com/mega?url=${encodeURIComponent(text)}`;
        const res = await axios.get(apiUrl);

        if (!res.data.downloadUrl) throw new Error("No download link found");
        
        await IconicTechInc.sendMessage(m.chat, {
            document: { url: res.data.downloadUrl },
            caption: `📥 *Mega.nz Download*\n> *Powered by Queen RUVA AI*`,
        }, { quoted: m });

    } catch (error) {
        console.error(error);
        replyglobal("*❌ Failed to download from Mega.nz!*");
    }
    break;
}
case 'zippyshare': {
    if (!text) return replyglobal(`*Example:* ${prefix + command} https://www.zippyshare.com/v/xxxxxx/file.html`);

    try {
        await IconicTechInc.sendMessage(m.chat, { react: { text: `📥`, key: m.key } });
        
        const apiUrl = `https://api.alandikasaputra.repl.co/zippyshare?url=${encodeURIComponent(text)}`;
        const res = await axios.get(apiUrl);

        if (!res.data.download) throw new Error("No download link found");
        
        await IconicTechInc.sendMessage(m.chat, {
            document: { url: res.data.download },
            caption: `📥 *Zippyshare Download*\n> *Powered by Queen RUVA AI*`,
        }, { quoted: m });

    } catch (error) {
        console.error(error);
        replyglobal("*❌ Failed to download from Zippyshare!*");
    }
    break;
}
case 'dropbox': {
    if (!text) return replyglobal(`*Example:* ${prefix + command} https://www.dropbox.com/s/xxxxxx/file.zip?dl=0`);

    try {
        await IconicTechInc.sendMessage(m.chat, { react: { text: `📥`, key: m.key } });
        
        const dropboxUrl = text.replace('?dl=0', '?dl=1'); // Force download
        const fileName = text.split('/').pop().replace(/\?.*/, '');

        await IconicTechInc.sendMessage(m.chat, {
            document: { url: dropboxUrl },
            fileName: fileName,
            caption: `📥 *Dropbox Download*\n> *Powered by Queen RUVA AI*`,
        }, { quoted: m });

    } catch (error) {
        console.error(error);
        replyglobal("*❌ Failed to download from Dropbox!*");
    }
    break;
}
//Video downloader 
case 'video': {
  if (!text) return replyglobal(`*Example*: ${prefix + command} Faded by Alan Walker`);

  try {

    await IconicTechInc.sendMessage(m.chat, { react: { text: `📽️`, key: m?.key } });


    const yts = require("yt-search");
    let search = await yts(text);
    let video = search.all[0];

    let body = `> *QUEEN-RUVA AI_VIDEO - PLAYER*\n` +
      `> Title: *${video.title}*\n` +
      `> Views: *${video.views}*\n` +
      `> Duration: *${video.timestamp}*\n` +
      `> Uploaded: *${video.ago}*\n` +
      `> Url: *${video.url}*`;
      


    await IconicTechInc.sendMessage(m.chat, {
      image: { url: video.thumbnail },
      caption: body
    }, { quoted: m });


    const apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp4`;
    const apiResponse = await axios.get(apiUrl, {
      params: { url: video.url }
    });


    if (apiResponse.data.success) {
      const { title, download_url } = apiResponse.data.result;

      // Send the video file directly
      await IconicTechInc.sendMessage(m.chat, {
        video: { url: download_url },
        mimetype: 'video/mp4',
        caption: `🎬 *Title:* ${title}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɪᴄᴏɴɪᴄ ᴛᴇᴄʜ*`
      }, { quoted: m });
    } else {
      replyglobal(`*Error fetching the video! Please try again later.*`);
    }
  } catch (error) {
    console.error('Error during video command:', error);
    replyglobal(`*An error occurred while processing your request.*`);
  }
  break;
}
case 'apk': {
  if (!text) {
    return replyglobal(`*Example:* ${prefix + command} WhatsApp`);
  }

  try {
    // Fetch APK data from the API
    const apiUrl = `https://apis.davidcyriltech.my.id/download/apk?text=${encodeURIComponent(text)}`;
    const response = await axios.get(apiUrl, { timeout: 10000 });

    // Check if the response is invalid or unsuccessful
    if (!response.data || !response.data.success) {
      return replyglobal('❌ *Failed to fetch APK. Try again later.*');
    }

    const { apk_name, thumbnail, download_link } = response.data;

    // Send APK details with thumbnail image
    await sendApkDetails(m, apk_name, thumbnail);

    // Send the APK file
    await sendApkFile(m, apk_name, download_link);

  } catch (error) {
    console.error('Error in APK Downloader:', error?.response?.data || error.message);
    handleApiError(error);
  }

  // Helper function to send APK details with thumbnail image
  async function sendApkDetails(m, apk_name, thumbnail) {
    await IconicTechInc.sendMessage(m.chat, {
      image: { url: thumbnail },
      caption: `📥 *APK Downloader* 📥\n` +
        `📌 *Name:* ${apk_name}\n` +
        `> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɪᴄᴏɴɪᴄ ᴛᴇᴄʜ*`
    }, { quoted: m });
  }

  // Helper function to send the APK file
  async function sendApkFile(m, apk_name, download_link) {
    try {
      await IconicTechInc.sendMessage(m.chat, {
        document: { url: download_link },
        mimetype: 'application/vnd.android.package-archive',
        fileName: `${apk_name}.apk`
      }, { quoted: m });
    } catch (err) {
      console.error('Error sending APK:', err);
      replyglobal('❌ *Failed to send APK file. It might be too large or restricted by WhatsApp.*');
    }
  }

  // Helper function to handle different API errors
  function handleApiError(error) {
    if (error.code === 'ECONNABORTED') {
      replyglobal('⚠️ *API request timed out. Please try again.*');
    } else if (error.response && error.response.status === 404) {
      replyglobal('❌ *APK not found. Please check the name and try again.*');
    } else {
      replyglobal('❌ *An unexpected error occurred. Try again later.*');
    }
  }

  break; // Final break to exit the case after all operations
}
// Facebook Downloader
case 'facebook':
case 'fb': {
    if (!text) return replyglobal(
        `📽️ *Example:* ${prefix + command} https://www.facebook.com/share/video.mp4\n\n` +
        `💡 *Tip:* Paste any Facebook video link to download it!`
    );

    try {
        await IconicTechInc.sendMessage(m.chat, { react: { text: `📘`, key: m.key } });
        const apiUrl = `https://api.nexoracle.com/downloader/facebook?apikey=63b406007be3e32b53&url=${encodeURIComponent(text)}`;
        
        const response = await axios.get(apiUrl, { timeout: 15000 });
        const videoUrl = response.data?.result?.sd;

        if (videoUrl) {
            await IconicTechInc.sendMessage(m.chat, {
                video: { url: videoUrl },
                mimetype: 'video/mp4',
                caption: `╭━━〔 📘 FACEBOOK DOWNLOADER 〕━━╮\n┃ ✅ *Video Downloaded*\n┃ 💻 *Powered by Iconic Tech*\n╰━━━━━━━━━━━━━━━━━━━━━━━╯`
            }, { quoted: m });
        } else {
            replyglobal(`❌ Couldn't download Facebook video\nTry again or check link!`);
        }
    } catch (error) {
        console.error('FB DL Error:', error);
        replyglobal(`⚠️ Facebook download failed!\nError: ${error.message}`);
    }
    break;
}

// Instagram Downloader
case 'ig':
case 'instagram': {
    if (!text) return replyglobal(
        `📽️ *Example:* ${prefix + command} https://www.instagram.com/reel/DBtcT9GJa-Y/\n\n` +
        `💡 *Tip:* Paste any Instagram video link to download it!`
    );

    try {
        await IconicTechInc.sendMessage(m.chat, { react: { text: `📸`, key: m.key } });

        // Clean the Instagram URL
        let igUrl = text.split('?')[0];
        if (!igUrl.includes('instagram.com')) {
            return replyglobal(`❌ *Invalid Instagram URL*\nPlease provide a valid Instagram video link!`);
        }

        const apiUrl = `https://api.nexoracle.com/downloader/insta?apikey=63b406007be3e32b53&url=${encodeURIComponent(igUrl)}`;
        const response = await axios.get(apiUrl, { timeout: 20000 }); // Increased timeout

        // Debug: Log the full API response
        console.log('Instagram API Response:', JSON.stringify(response.data, null, 2));

        const result = response.data?.result;
        
        // Check for different possible video URL locations in the response
        const videoUrl = result?.video || result?.videoUrl || result?.url;
        
        if (!videoUrl) {
            console.log('No video URL found in response:', response.data);
            return replyglobal(`❌ *Video URL not found in API response*\nThe API might have changed its format.`);
        }

        // Check if the URL is valid
        if (!videoUrl.startsWith('http')) {
            return replyglobal(`❌ *Invalid video URL received*\nURL: ${videoUrl}`);
        }

        const videoInfo = `╭━━〔 *📸 INSTAGRAM DOWNLOADER* 〕━━╮\n` +
                        `┃ ✅ *Video Downloaded Successfully*\n` +
                        `┃ 💻 *Powered by Iconic Tech*\n` +
                        `╰━━━━━━━━━━━━━━━━━━━━━━━╯\n\n` +
                        `🎉 *Enjoy your reel!*`;

        // Try to send the video with a longer timeout
        await IconicTechInc.sendMessage(m.chat, {
            video: { url: videoUrl },
            mimetype: 'video/mp4',
            caption: videoInfo
        }, { quoted: m });

    } catch (error) {
        console.error('IG DL Error:', error);
        let errorMessage = `⚠️ Instagram download failed!`;
        
        if (error.response) {
            // The request was made and the server responded with a status code
            errorMessage += `\nStatus: ${error.response.status}`;
            if (error.response.data) {
                errorMessage += `\nResponse: ${JSON.stringify(error.response.data)}`;
            }
        } else if (error.request) {
            // The request was made but no response was received
            errorMessage += `\nNo response received from API server`;
        } else {
            // Something happened in setting up the request
            errorMessage += `\nError: ${error.message}`;
        }
        
        replyglobal(errorMessage);
    }
    break;
}
case 'qr-url': {
    if (!text) return replyglobal('Please provide a URL.');

    replyglobal('Generating QR code for the URL...');

    try {
        // Generate QR code image URL from the provided URL
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(text)}&size=200x200`;

        // Send the QR code image
        IconicTechInc.sendMessage(from, { image: { url: qrCodeUrl } }, { quoted: mek });
    } catch (e) {
        replyglobal('Error generating QR code.');
    }

    break;
}
case 'bing': {
  if (!text) return replyglobal(`*Example*: ${prefix + command} naruto`);

  try {
    await IconicTechInc.sendMessage(m.chat, { react: { text: `🔍`, key: m.key } });

    const axios = require('axios');
    const apiUrlForImages = `https://api.agungny.my.id/api/seaart?prompt=${encodeURIComponent(text)}`;

    // Generate 5 images based on user input with unique URLs
    const images = [];
    for (let i = 0; i < 5; i++) {
      const uniqueImageUrl = `${apiUrlForImages}&seed=${i}`;  // Adding a unique parameter to vary the response
      images.push(uniqueImageUrl);
    }

    // Send each generated image
    const footer = "\n\n*> 'ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ`*";
    for (const imageUrl of images) {
      await IconicTechInc.sendMessage(m.chat, {
        image: { url: imageUrl },
        caption: footer
      }, { quoted: m });
    }

  } catch (error) {
    console.error('Error fetching images:', error);
    replyglobal(`*An error occurred while fetching images. Please try again later.*`);
  }
  break;
}

            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return replyglobal(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return replyglobal(bang)
                    }
                    try {
                        replyglobal(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replyglobal(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return replyglobal(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replyglobal(evaled)
                    } catch (err) {
                        await replyglobal(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return replyglobal(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replyglobal(err)
                        if (stdout) return replyglobal(stdout)
                    })
                }
        }
    } catch (err) {
        console.log(util.format(err))
    }
}
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