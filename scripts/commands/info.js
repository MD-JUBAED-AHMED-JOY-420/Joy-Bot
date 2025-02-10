module.exports.config = {
	name: "info",
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
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link =["https://i.imgur.com/Nyx7ViI.jpeg"];

var callback = () => api.sendMessage({body:`𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍

 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞: ${global.config.BOTNAME}
𝐍𝐚𝐦𝐞       : 𝐌𝐃 𝐉𝐔𝐁𝐀𝐄𝐃 𝐀𝐇𝐌𝐌𝐄𝐃 𝐉𝐎𝐘 
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : 𝐏𝐫𝐢𝐧𝐜𝐞 𝐉𝐨𝐲 𝐀𝐡𝐦𝐞𝐝
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝐈𝐬𝐥𝐚𝐦
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐉𝐚𝐦𝐚𝐥𝐩𝐮𝐫, 𝐃𝐡𝐚𝐤𝐚
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐓𝐚𝐫𝐚𝐤𝐚𝐧𝐝𝐢, 𝐒𝐚𝐫𝐢𝐬𝐡𝐚-𝐁𝐚𝐫𝐢, 𝐉𝐚𝐦𝐚𝐥𝐩𝐮𝐫, 𝐌𝐨𝐲𝐦𝐨𝐧𝐬𝐢𝐧𝐡, 
𝐆𝐞𝐧𝐝𝐞𝐫.   : 𝐌𝐚𝐥𝐞
𝐀𝐠𝐞           : 𝟏6+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝐒𝐢𝐧𝐠𝐥𝐞
𝐖𝐨𝐫𝐤        : 𝐒𝐭𝐮𝐝𝐞𝐧𝐭
𝐆𝐦𝐚𝐢𝐥       : 𝐦𝐝𝐣𝐮𝐛𝐚𝐞𝐭𝐚𝐡𝐦𝐞𝐝124@𝐠𝐦𝐚𝐢𝐥.𝐜𝐨𝐦
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: wa.me/+8801709045888
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : t.me/JOY_AHMED_88
𝐅𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/profile.php?id=100000121528628

𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱: ${global.config.PREFIX}

𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 : 『𝐏𝐫𝐢𝐧𝐜𝐞 𝐉𝐨𝐲 𝐀𝐡𝐦𝐞𝐝』 

➟ 𝐔𝐩𝐭𝐢𝐦𝐞

𝐓𝐨𝐝𝐚𝐲 𝐢𝐬 𝐓𝐢𝐦𝐞 : ${juswa} 

𝐁𝐨𝐭 𝐢𝐬 𝐑𝐮𝐧𝐧𝐢𝐧𝐠 ${hours}:${minutes}:${seconds}.

THANKS FOR USING ${global.config.BOTNAME} 『🙅🖤』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
			return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
	 };
