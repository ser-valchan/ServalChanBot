//Erisが必須です。
const Eris = require("eris");
var bot = new Eris("MzY2NzcxNjA3MzQ1MTY4Mzg2.DLx6Fw.wgqOWTxnJLABY-69o7MOWf2I9i8")//Tokenのここですが少しいじらせてもらいました。
var runch = ("310061082574323712")//ようこそ/さよならメッセージ送信先
var online = ("320493645574963200")//オンライン役職のID
var NotToDo = new Object
var memo = new Object
var username = new Object
require('date-utils');
var fs = require('fs');
/*
↑の var doo = new Object 削除しましたがダメでしたら戻してください。
*/

bot.on("ready", () => {
    console.log("Botが起動したよ！レッツゴー！")//メッセージは変えられます(チャットしないです)
});

//Specific words→Specific words ここから
bot.on("messageCreate", (chat) => {
   if(chat.author.id == "366771607345168386") {
     console.log("ループ防止機能が作動したよ！")
     } else {
     if(chat.content == "わーい！") {
       bot.createMessage(chat.channel.id, "たーのしー！")
     }
     if(chat.content.match ("ないでください！")) {
       NotToDo.valve = chat.content.replace("ないでください！" , "")
       bot.createMessage(chat.channel.id, NotToDo.valve + "ないよ！")
     }
     if(chat.content.match(/私は|のフレンズです/g)) {
       Friends = chat.content.replace(/私は|のフレンズです/g, "")
       bot.createMessage(chat.channel.id, "すっごーい！あなたは"+ Friends + "のフレンズなんだね！")
     }
     if(chat.content == "すっごーい") {
       bot.createMessage(chat.channel.id, "すごいすごーい！")
     }
     if(chat.content == "歌って") {
       bot.createMessage(chat.channel.id, "hidekiちゃん、" + chat.author.mention + "ちゃんが歌ってって言ってるよ！早く歌ってよー！")
     }
     //ここまでのif-thenの中身は消してくださってかまいません。
     if(chat.content.match("私は何のフレンズ")) {
       bot.createMessage(chat.channel.id, "あなたの名前は" + chat.author.mention + "だよ！アイコンは...これかな?" + chat.author.avatarURL)
     }
     //メモ機能(記録しちゃおうぜてきな)
     if(chat.content.match(/これを覚えて:/)) {
       memo = chat.content.replace("これを覚えて:", "")
       author = chat.author.mention.replace(/<@|>/g, "")

       fs.writeFile(author + ".txt" , memo , function(err) {
         console.log(err)
       })
       bot.createMessage(chat.channel.id, chat.author.mention + "ちゃんのメモ書き:" + memo + "を保存したよ！");
     }
     if(chat.content.match(/ちゃんの言っていたこと/)) {
       readusername = chat.content.replace(/ちゃんの言っていたこと|<@|>|!/g, "")
       username = chat.content.replace("ちゃんの言っていたこと", "")
       fs.readFile(readusername + ".txt" , "utf8" , function(err, text) {
         console.log(err)
         bot.createMessage(chat.channel.id, username + "ちゃんが言ってたのは:「" + text + "」だよ！")
       })
     }
     //時間
     if(chat.content == "今何時?") {
       date = new Date();
       hh = date.toFormat("HH24");
       mi = date.toFormat("MI")
       ss = date.toFormat("SS")
       bot.createMessage(chat.channel.id, "今は" + hh + ":" + mi + ":" + ss + "だよ！")
     }
     if(chat.content.match(/って言って/)) {
      say = chat.content.replace("って言って", "")
      bot.createMessage(chat.channel.id, say)
     }

     //--------------------------------------if u add
   }
});

bot.on("guildMemberAdd", (joind, member) => {
  bot.createMessage(runch, member.mention + "さん、雑談用Discordようこそ！ \nまずは#welcomeチャンネルと公式Wikiを見てルールを確認してね！")//変更できます。
    member.addRole(online, "join")//joinって書いてある部分は理由です
});
bot.on("guildMemberRemove", (guild, member) => {
    bot.createMessage(runch, member.mention + "さんが退出しました。 \n今までありがとう！また来てね！");//変更できます。
});
bot.connect();
