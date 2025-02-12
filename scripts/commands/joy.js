const fs = require("fs");
module.exports = {
  config:{
  name: "joy",
        version: "1.0.1",
        prefix: false,
  permssion: 0,
  credits: "Joy-Ahmed", 
  description: "Fun",
  category: "no prefix",
  usages: "😒",
        cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const axios = require('axios')
  const JOY = ['https://i.imgur.com/3Y9oD7f.mp4','https://i.imgur.com/SrUq53O.mp4','https://i.imgur.com/iMI7NK1.mp4','https://i.imgur.com/yljiAMz.mp4','https://i.imgur.com/m4qii9R.mp4','https://i.imgur.com/9htPvPu.mp4','https://i.imgur.com/lE4KvrE.mp4','https://i.imgur.com/Pd3fltB.mp4','https://i.imgur.com/NBODLR0.mp4','https://i.imgur.com/Jqw5d3H.mp4','https://i.imgur.com/eAn9FFN.mp4','https://i.imgur.com/ueqsPPJ.mp4','https://i.imgur.com/j0UeeHa.mp4','https://i.imgur.com/q3MwjeB.mp4','https://i.imgur.com/XG91puQ.mp4','https://i.imgur.com/02dUE14.mp4','https://i.imgur.com/ZPj1iL0.mp4','https://i.imgur.com/7EJl0Uk.mp4','https://i.imgur.com/q0Y2igI.mp4','https://i.imgur.com/U8Rnvfn.mp4','https://i.imgur.com/bx0kwKk.mp4','https://i.imgur.com/OYbIrdK.mp4','https://i.imgur.com/URxjCnB.mp4','https://i.imgur.com/tDQUg9U.mp4','https://i.imgur.com/M6b5Eny.mp4','https://i.imgur.com/IFMXmtT.mp4','https://i.imgur.com/PZoF7vP.mp4','https://i.imgur.com/QDQHxkG.mp4','https://i.imgur.com/57ZUHZf.mp4']
    var rndm = JOY[Math.floor(Math.random() * JOY.length)];
const media = (
    await axios.get(
      `${rndm}`,
      { responseType: 'stream' }
    )
  ).data;

  if (body.indexOf("😀")==0 || body.indexOf("😃")==0 || body.indexOf("😅")==0 || body.indexOf("🙂")==0 || body.indexOf("🙃")==0 || body.indexOf("😊")==0 || body.indexOf("😇")==0 || body.indexOf("🥰")==0 || body.indexOf("😍")==0 || body.indexOf("🤩")==0 || body.indexOf("😘")==0 || body.indexOf("😗")==0 || body.indexOf("☺️")==0 || body.indexOf("😙")==0 || body.indexOf("🥲")==0 || body.indexOf("🤭")==0 || body.indexOf("🫡")==0 || body.indexOf("🤗")==0 || body.indexOf("😐")==0 || body.indexOf("🤐")==0 || body.indexOf("😜")==0 || body.indexOf("🤪")==0 || body.indexOf("😛")==0 || body.indexOf("😶")==0 || body.indexOf("😒")==0 || body.indexOf("😏")==0 || body.indexOf("😮‍💨")==0 || body.indexOf("🙄")==0 || body.indexOf("😬")==0 || body.indexOf("😁")==0 || body.indexOf("😌")==0 || body.indexOf("😔")==0 || body.indexOf("😴")==0 || body.indexOf("😷")==0 || body.indexOf("🤒")==0 || body.indexOf("🤧")==0 || body.indexOf("🥺")==0 || body.indexOf("🥹")==0 || body.indexOf("😞")==0 || body.indexOf("😭")==0 || body.indexOf("😢")==0 || body.indexOf("😥")==0 || body.indexOf("😰")==0 || body.indexOf("😓")==0 || body.indexOf("😩")==0) {
    var msg = {
        body: "︵❝།།💚🌺𝐈𝐭'𝐬 𝐦𝐲 𝐁𝐞𝐬𝐭 𝐅𝐞𝐞𝐥𝐢𝐧𝐠𝐬 ☺️ლ\n\n🌼🦋খুব!বেশি!নয়!আমি!\n\nঅল্পতে'ই!অনেক খুশি💚🌻\n\n༅🙂🌸আর প্রকৃত ভাবে আমি আপনাকে অনেক\n\nভালোবাসি🌺🖤☺️🥀🌹💥\n\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥: 𝗝𝗢𝗬 𝗔𝗛𝗠𝗘𝗗",
        attachment: media
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
    }
  },
  start: function({ joy }) {
  }
}
