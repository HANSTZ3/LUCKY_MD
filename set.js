const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0VHY09XcHY2UklKWC9pYm54QVZUenpsOTczYUhGd0VEeXF3V3JDSDBGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiemh1L0xxNVgzMEtrUjVIOHZzZGpZSGRxZVh6Z2pzTmRISGdKMzU1KzdoND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSzJaelNJajBGbVFIa3RNSHBOeGFONmxoY2VVbTA4K3JKZURqQjQ2cEhjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzdnkrUlJZaTBJNHk5dnVTMzRuUDRhV2lZckVTNUlUOGJQUDlveGN2KzJZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1QQjd0d25EMmVkdmsxTDNLa2xyQjZ2R1g0WmcvU2pCN0JWUGRicEI1a1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlVaEtodUFwVmMzdk5ndVhnT2xBb1RXYzJlQyt2TVpCNkZ4RklyM2NzWDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEh1Nm1Ga0orTnpkSWp3czY2b2FrRWhyUzdUZUcrZVNyeXpETWtldEQyZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSkptQkFoU3FjMU0vNENTQy8weVdWMTV1TGFrUVh6cjlhV0o1UWdUMDFDST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZZaDJGSklaWFBSR3hJTThzNVlDRm42cDFUaFZ0QTRsTUxFQ3AzdFJuMFhJWlNKaTFRdndjSzZCbU5LNjNKTHgyY0d1T0VxNWtqdmRtVXFBNE5UaUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MiwiYWR2U2VjcmV0S2V5IjoiNFhMMUVHUFZkbHNaL3NvNXBKZFdDakM0M0NNNWFxemZzRXYwNWQ5OGVOWT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTU3MTc3NDg4MjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNzgwQTQ3Njg0NjI4OUQ1MjAwRjIyMTY4ODhCMTA3QTYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyODgzMTEzNH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1NzE3NzQ4ODIzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjYxNTkzMUQwQkM1MTA1RTNEODJEOThGRjA4NUM4MjZCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjg4MzExMzV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjU5NE5FQzFhU1NlZ2YxVlVHS1NISVEiLCJwaG9uZUlkIjoiMjM3MDIzNjQtZmVkMS00YWZjLWFkMjYtNjI4YjM3ODk3OTA0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNPbkpLY3VlcWdsUGIwUmZZY3FpekJ3OFhnMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQcDMxT0pNVnhJRndGWU5reUQxYWZkc2dvN289In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRUhTUFJYWkQiLCJtZSI6eyJpZCI6IjI1NTcxNzc0ODgyMzoyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkhBTlMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xxa29Xb1FqYjJ2dUFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjZOYllDWTlHY3pQWHZiTlNZSG83R3AzOTBTTERadXoxd2tGUDc0WG9qQU09IiwiYWNjb3VudFNpZ25hdHVyZSI6IkdseGVzYXVZQ3dvTDhwWDFnajBSNGlWYUVSWDlPajVPWHAvRUpKdU1wUTNkYXhOKzRTeHVmVnZrOUN4S0ZwSzZIS21leC9Nc1lpWU50S0RocjJ1TUNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJrdUVzelBPb1hPTTBWanNFaXVWcVNuYWZLYmhjVER3VmliUkRxYi9FUlc4WEdMTGpqMmNFc1V1dnRmNEJHamNnV3dnR3d2RUZJQ1ZJZll3THdtQlBDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTcxNzc0ODgyMzoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVqVzJBbVBSbk16MTcyelVtQjZPeHFkL2RFaXcyYnM5Y0pCVCsrRjZJd0QifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjg4MzExMzEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTmZ2In0=',
    PREFIXE: process.env.PREFIX || ",",
    OWNER_NAME: process.env.OWNER_NAME || "HANS",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "255717748823",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "non",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || 'HANS-MD ',
    URL : process.env.BOT_MENU_LINKS || 'https://i.imgur.com/lfqWcEv.jpeg,',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
