module.exports.config = {
  name: "admin",
  version: "1.0.0",
  permission: 0,
  credits: "Joy-Ahmed",
  description: "",
  prefix: true, 
  category: "Admin information", 
  usages: ".admin",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link =["https://i.postimg.cc/xdNhdjDw/received-1835241860272152.jpg",
"https://i.postimg.cc/rw0Q1hnW/received-911404057432777.jpg"];

var callback = () => api.sendMessage({body:`DO NOT TRUST THE BOT OPERATOR
--------------------------------------------
𝐍𝐚𝐦𝐞       : 𝐌𝐃 𝐉𝐔𝐁𝐀𝐄𝐃 𝐀𝐇𝐌𝐌𝐄𝐃 𝐉𝐎𝐘
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : 𝐏𝐑𝐈𝐍𝐂𝐄 𝐉𝐎𝐘 𝐀𝐇𝐌𝐄𝐃
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝐈𝐬𝐥𝐚𝐦
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬:  𝐉𝐚𝐦𝐚𝐥𝐩𝐮𝐫
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐤𝐨𝐦𝐮 𝐧𝐚
𝐆𝐞𝐧𝐝𝐞𝐫.   : 𝐌𝐚𝐥𝐞
𝐀𝐠𝐞           : 𝟏6+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝐒𝐢𝐧𝐠𝐥𝐞
𝐖𝐨𝐫𝐤        : 𝐒𝐭𝐮𝐝𝐞𝐧𝐭
𝐆𝐦𝐚𝐢𝐥       : 𝐦𝐝𝐣𝐮𝐛𝐚𝐞𝐭𝐚𝐡𝐦𝐞𝐝124@gmail.com
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: wa.me/+8801709045888
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : t.me/JOY_AHMED_88
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : m.me/100001526678745
 https://www.facebook.com/tor.real.abbu.picci.joy
`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };