//* CREATED BY ICONIC TECH
module.exports = async (IconicTechInc, update, store) => {
    console.log("🔄 Group participants update event triggered:", update);

    try {
        const { id, participants, action } = update;
        if (!id || !participants.length) return; // Ensure valid data

        // Fetch group metadata
        let group;
        try {
            group = await IconicTechInc.groupMetadata(id);
        } catch (err) {
            console.error("❌ Failed to fetch group metadata:", err);
            return;
        }

        const groupName = group.subject || "Group";
        const groupOwner = group.owner || "UnknownOwner";
        
        // Get current date and time
        const now = new Date();
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
        const currentDate = now.toLocaleDateString('en-US', dateOptions);
        const currentTime = now.toLocaleTimeString('en-US', timeOptions);

        // Process each participant
        for (const participant of participants) {
            console.log("👤 Processing participant:", participant);

            let ppUrl = "https://i.imgur.com/qZcSKiJ.png"; // Default profile picture
            try {
                ppUrl = await IconicTechInc.profilePictureUrl(participant, "image");
            } catch (err) {
                console.warn(`⚠️ Profile picture not available for ${participant}`);
            }

            if (action === "add") {
                let username = "User";
                try {
                    username = await IconicTechInc.getName(participant) || "User";
                } catch (err) {
                    console.warn(`⚠️ Could not fetch name for ${participant}`);
                }

                // Welcome Message
                let welcomeMessage = `┏━━━━━━━━━━━━━━━━━━━━━┓
┃ 🎉 *WELCOME TO ${groupName}!* 🎉  
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 👤 *User:* @${participant.split('@')[0]}  
┃ 🏠 *Group:* ${groupName}  
┃ 🔑 *Owner:* @${groupOwner.split('@')[0]}  
┃ 📅 *Date:* ${currentDate}  
┃ ⏰ *Time:* ${currentTime}  
┃ 🪀 *Bot Channel:* https://whatsapp.com/channel/0029ValX2Js9RZAVtDgMYj0r
┃ 🤖 *Bot:* Queen Ruva AI Beta  
┃ 🌍 *visit*  codewave-unit.zone.id
┃ 👤 *Developer:* ɪᴄᴏɴɪᴄ ᴛᴇᴄʜ
┗━━━━━━━━━━━━━━━━━━━━━┛`;

                let welcomeImage = {
                    image: { url: ppUrl },
                    caption: welcomeMessage,
                    mentions: [participant, groupOwner],
                };

                console.log("📩 Sending welcome message to:", id);
                try {
                    await IconicTechInc.sendMessage(id, welcomeImage);
                    console.log("✅ Welcome message sent successfully.");
                } catch (err) {
                    console.error("❌ Failed to send welcome message:", err);
                }

            } else if (action === "remove") {
                // Farewell Message
                let farewellMessage = `┏━━━━━━━━━━━━━━━━━━━━━┓
┃ 😔 *We lost our soldier...*  
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 💔 *We will miss you, @${participant.split('@')[0]}*  
┃ 🏠 *Group:* ${groupName}  
┃ 🔑 *Owner:* @${groupOwner.split('@')[0]}  
┃ 📅 *Date:* ${currentDate}  
┃ ⏰ *Time:* ${currentTime}  
┃ 🤖 *Bot:* Queen Ruva AI Beta  
┃ 💬 *Goodbye, warrior!*  
┃ 👤 *Developer:* ɪᴄᴏɴɪᴄ ᴛᴇᴄʜ
┗━━━━━━━━━━━━━━━━━━━━━┛`;

                let farewellImage = {
                    image: { url: ppUrl },
                    caption: farewellMessage,
                    mentions: [participant, groupOwner],
                };

                console.log("📩 Sending farewell message to:", id);
                try {
                    await IconicTechInc.sendMessage(id, farewellImage);
                    console.log("✅ Farewell message sent successfully.");
                } catch (err) {
                    console.error("❌ Failed to send farewell message:", err);
                }
            }
        }
    } catch (err) {
        console.error("❌ Auto-Welcome Error:", err);
    }
};
/* we no have time to encrypted our private functioning if there no our official base thank you
.............................................. QUEEN RUVA AI BETA 
/* created by iconic tech Visit our website at
codewave-unit.zone.id */