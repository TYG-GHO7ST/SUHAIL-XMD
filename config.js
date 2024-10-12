const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347040463391";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_22_10_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NCxcbiAgICAgICAgNixcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk4LFxuICAgICAgICAyMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkwLFxuICAgICAgICA0MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU3LFxuICAgICAgICA5OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzksXG4gICAgICAgIDI5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM1LFxuICAgICAgICA3MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDYzLFxuICAgICAgICA2NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY4LFxuICAgICAgICA5MSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDg4LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDMsXG4gICAgICAgIDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDMsXG4gICAgICAgIDUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NixcbiAgICAgICAgODksXG4gICAgICAgIDMwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MSxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg0LFxuICAgICAgICA5NixcbiAgICAgICAgMTIyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICA2NSxcbiAgICAgICAgNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ4LFxuICAgICAgICA2NixcbiAgICAgICAgNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNCxcbiAgICAgICAgNSxcbiAgICAgICAgMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicU00Z2k3bklhVjdSb045dHV0NjNPUE82UHduR052Q3NaWW1rRjdqSWFsbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDQwNDYzMzkxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDOUFCRkU2NjRBN0QwQ0NDMjc5ODZBRUU2MjkyODdEOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjg3Mjg1NzRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSnBsZnU3dURTUXlMWlc3eEtodTd4Z1wiLFxuICBcInBob25lSWRcIjogXCI0ODgwODdjZS0xMzZjLTQ3NzQtYTdmOS0wNTRkMmQ3OWI0MTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTQsXG4gICAgICA2MixcbiAgICAgIDQxLFxuICAgICAgMTA4LFxuICAgICAgNjgsXG4gICAgICAyMzAsXG4gICAgICAxNjQsXG4gICAgICA5MCxcbiAgICAgIDUzLFxuICAgICAgMTE3LFxuICAgICAgNSxcbiAgICAgIDc1LFxuICAgICAgMTA5LFxuICAgICAgMTMzLFxuICAgICAgNDgsXG4gICAgICAyMDksXG4gICAgICAxODAsXG4gICAgICA3NSxcbiAgICAgIDEyMSxcbiAgICAgIDE4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NSxcbiAgICAgIDE5OCxcbiAgICAgIDE1OCxcbiAgICAgIDIzNyxcbiAgICAgIDExMCxcbiAgICAgIDIzMixcbiAgICAgIDE1NixcbiAgICAgIDEwNixcbiAgICAgIDIwOSxcbiAgICAgIDE0MSxcbiAgICAgIDEzOSxcbiAgICAgIDIyMSxcbiAgICAgIDIxMyxcbiAgICAgIDIyNCxcbiAgICAgIDE2MixcbiAgICAgIDk4LFxuICAgICAgNzcsXG4gICAgICAyNDcsXG4gICAgICAxNTMsXG4gICAgICAxMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU1paRjNWMURcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDA0NjMzOTE6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJ+VMKlRyDDl82cw5cgR0hPU1Q/wr/CpVR+4oC64oC64oC64oC64oC68JODtVwiLFxuICAgIFwibGlkXCI6IFwiMTM0MzcyNDk3ODIxOTI1OjM0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ011cHFOb0dFUFNicWJnR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaXY3TUgzUW9ZY20vd3N1TXNxdTk2cFlUYUZFMHpQc2MrVERXQVpING5pVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzZnltcUpOZHFHZU9EVC9aaHBUOStPaG5ML0pYZEpjQnlOQThaaHNoZWxmYStKL3BZdEx4T1dTYXduWXptS25TLzhCY294Wi9pT3dXOFljS1V2TkNCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMWVVaeTVVMGNRKzdZOWQzeWsvclpnTzVuVWZ5K0htNlVDYm9ac3djemJLSWN1emdHdk8yMzJyekxtYW9Bb2Q2YStmV3hWMGhMeC9MaGVzVnpuVU5DUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDQwNDYzMzkxOjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODcyODU2OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU91VFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT3VULmpzb24iOiAie1wia2V5RGF0YVwiOlwiOVErcXg4SzUvMTYra3BYeXpCV0laQjc5ZnU4VUxwZHVqZGNxS2pENmZqbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODAwMDE3MDk5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
