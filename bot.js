//Erisが必須です。
//🄫2017 servalchan All rights reserved.
const Eris = require("eris");
var runch = ("310061082574323712")//ようこそ/さよならメッセージ送信先
var gid = "309932182690856960"
var options = new Object
var addid = ""
var online = ("320493645574963200")//オンライン役職のID
var NotToDo = new Object
var memo = new Object
var tcpp = require('tcp-ping')
var username = new Object
require('date-utils');
var sleep = require('sleep-async');
var fs = require('fs');
var token = require("token.js")["token"]
var bot = new Eris(token)
var context = new Object
var mode = new Object
var level = "0"
var opt = new Object
var http = require('request');
bot.on("ready", () => {
    console.log("Botが起動したよ！レッツゴー！")//メッセージは変えられます(チャットしないです)
});

//Specific words→Specific words ここから
bot.on("messageCreate", (chat) => {
  console.log(chat.content, chat.author)
  if(chat.author.id == "367276131398844417") {
    console.log("わたしからのメッセージだよ！")
  } else {
    if(chat.content == "わーい！") {
      fs.appendFile(chat.author.id + "-level.txt" , "." , function(err) {
       console.log("add exp,error:" + err)
      })
      bot.createMessage(chat.channel.id, "たーのしー！")
    }
    if(chat.content.match (/.*?ないでください！/)) {
      fs.appendFile(chat.author.id + "-level.txt" , "." , function(err) {
       console.log("add exp,error:" + err)
      })
      if(!chat.content.match(/のフレンズです/)) {
      NotToDo.valve = chat.content.replace("ないでください！" , "")
      bot.createMessage(chat.channel.id, NotToDo.valve + "ないよ！")
    }}
    if(chat.content.match(/.*?のフレンズです/g)) {
      fs.appendFile(chat.author.id + "-level.txt" , "." , function(err) {
       console.log("add exp,error:" + err)
      })
      Friends = chat.content.replace(/私は|のフレンズです/g, "")
      readusername = chat.author.id.replace(/<@|>|!| |/g, "") + "-callname"
      fs.readFile(readusername + ".txt" , "utf8" , function(err, nick) {
          console.log(err)
          if(nick == undefined) {
            bot.createMessage(chat.channel.id, "すっごーい！あなたは" + Friends + "のフレンズなんだね！")
          } else {
            bot.createMessage(chat.channel.id, "すっごーい！" + nick + "ちゃんは" + Friends + "のフレンズなんだね！")
        }})
      }
    if(chat.content == "すっごーい") {
      fs.appendFile(chat.author.id + "-level.txt" , "." , function(err) {
       console.log("add exp,error:" + err)
      })
      bot.createMessage(chat.channel.id, "すごいすごーい！")
    }
    if(chat.content == "歌って") {
      fs.appendFile(chat.author.id + "-level.txt" , "." , function(err) {
       console.log("add exp,error:" + err)
      })
      bot.createMessage(chat.channel.id, "<@!242183143564640258>ちゃん、" + chat.author.mention + "ちゃんが歌ってって言ってるよ！早く歌ってよー！")
    }
    //ここまでのif-thenの中身は消してくださってかまいません。
    if(chat.content == ("私は何のフレンズ")) {
      fs.appendFile(chat.author.id + "-level.txt" , "." , function(err) {
       console.log("add exp,error:" + err)
      })
      bot.createMessage(chat.channel.id, "あなたの名前は" + chat.author.mention + "だよ！アイコンは...これかな?" + chat.author.avatarURL)
    }
    //メモ機能(記録しちゃおうぜてきな)
    if(chat.content.match(/これを覚えて:.*?/)) {
      fs.appendFile(chat.author.id + "-level.txt" , "." , function(err) {
       console.log("add exp,error:" + err)
      })
      memo = chat.content.replace("これを覚えて:", "")
      author = chat.author.mention.replace(/<@|>/g, "")

      fs.writeFile(author + ".txt" , memo , function(err) {
        console.log(err)
      })
      bot.createMessage(chat.channel.id, chat.author.mention + "ちゃんのメモ書き:" + memo + "を保存したよ！");
    }
    if(chat.content.match(/.*?って呼んで/)) {
      fs.appendFile(chat.author.id + "-level.txt" , "." , function(err) {
       console.log("add exp,error:" + err)
      })
      callme = chat.content.replace("って呼んで", "")
      if(memo == "って呼んで") {
        bot.createMessage(chat.channel.id, "ちゃんとした名前を教えて！")
      } else {
      author = chat.author.mention.replace(/<@|>/g, "") + "-callname"
      fs.writeFile(author + ".txt" , callme , function(err) {
        console.log(err)
      })
      bot.createMessage(chat.channel.id, chat.author.mention + "ちゃんのことはこれから" + callme + "ちゃんって呼ぶね！");
    }}
    if(chat.content.match(/.*?ちゃんの言っていたこと/)) {
      fs.appendFile(chat.author.id + "-level.txt" , "." , function(err) {
       console.log("add exp,error:" + err)
      })
      readusername = chat.content.replace(/ちゃんの言っていたこと|<@|>|!| |/g, "")
      username = chat.content.replace("ちゃんの言っていたこと", "")
      fs.readFile(readusername + ".txt" , "utf8" , function(err, text) {
        console.log(err)
        if(text == undefined) {
          bot.createMessage(chat.channel.id, username + "ちゃんはまだ何も言ってないみたいだね...")
        } else {
        bot.createMessage(chat.channel.id, username + "ちゃんが言ってたのは:「" + text + "」だよ！")
      }})
    }
    if(chat.author.id == "354604237063323651") {
      bot.createMessage(chat.channel.id, "あつもりっ！")
    }
    //あっちむいてほい
    if(chat.content == "じゃんけんぐー") {
      fs.appendFile(chat.author.id + "-level.txt" , "." , function(err) {
       console.log("add exp,error:" + err)
      })
      randomNum = Math.floor( Math.random() * (3 + 1 - 1) ) + 1 ;
      if(randomNum == 1){
        bot.createMessage(chat.channel.id, "ぐー！\nあいこだね！")
      } else if(randomNum == 2){
        bot.createMessage(chat.channel.id, "ちょき！\nまけちゃった...あなたのかちだね！")
      } else if(randomNum == 3){
        bot.createMessage(chat.channel.id, "ぱー！\nやったー！わたしのかちだー！")
      }
    }
    if(chat.content == "じゃんけんちょき") {
      fs.appendFile(chat.author.id + "-level.txt" , "." , function(err) {
       console.log("add exp,error:" + err)
      })
      randomNum = Math.floor( Math.random() * (3 + 1 - 1) ) + 1 ;
      if(randomNum == 1){
        bot.createMessage(chat.channel.id, "ちょき！\nあいこだね！")
      } else if(randomNum == 2){
        bot.createMessage(chat.channel.id, "ぱー！\nまけちゃった...あなたのかちだね！")
      } else if(randomNum == 3){
        bot.createMessage(chat.channel.id, "ぐー！\nやったー！わたしのかちだー！")
      }
    }
    if(chat.content == "じゃんけんぱー") {
      fs.appendFile(chat.author.id + "-level.txt" , "." , function(err) {
       console.log("add exp,error:" + err)
      })
      randomNum = Math.floor( Math.random() * (3 + 1 - 1) ) + 1 ;
      if(randomNum == 1){
        bot.createMessage(chat.channel.id, "ぱー！\nあいこだね！")
      } else if(randomNum == 2){
        bot.createMessage(chat.channel.id, "ぐー！\nまけちゃった...あなたのかちだね！")
      } else if(randomNum == 3){
        bot.createMessage(chat.channel.id, "ちょき！\nやったー！わたしのかちだー！")
      }
    }
    //時間
    if(chat.content == "今何時?") {
      fs.appendFile(chat.author.id + "-level.txt" , "." , function(err) {
       console.log("add exp,error:" + err)
      })
      date = new Date();
      hh = date.toFormat("HH24");
      mi = date.toFormat("MI")
      ss = date.toFormat("SS")
      bot.createMessage(chat.channel.id, "今は" + hh + ":" + mi + ":" + ss + "だよ！")
    }
    if(chat.content.match(/サーバルちゃん、.*?って言って/)) {
      fs.appendFile(chat.author.id + "-level.txt" , "." , function(err) {
       console.log("add exp,error:" + err)
      })
     say = chat.content.replace(/って言って|サーバルちゃん、/g, "")
     fs.appendFile(chat.author.id + "-level.txt" , "." , function(err) {
      console.log("add exp,error:" + err)
     })
     bot.createMessage(chat.channel.id, say)
    }
    if(chat.content == ("サーバルちゃんは何のフレンズ?")) {
      fs.appendFile(chat.author.id + "-level.txt" , "." , function(err) {
       console.log("add exp,error:" + err)
      })
      bot.createMessage(chat.channel.id, "くわしいことはGitHubにあるWikiをみてね！\nhttps://github.com/ser-valchan/ServalChanBot/wiki")
    }
    if(chat.content.match(/ping /)) {
      fs.appendFile(chat.author.id + "-level.txt" , "." , function(err) {
       console.log("add exp,error:" + err)
      })
      pingto = chat.content.replace(/ping| |http|https|ftp:|\//g, "")
       tcpp.probe(pingto, 25565, function(err, available) {
         console.log(err, available)
         if(available === true) {
            bot.createMessage(chat.channel.id, pingto + "ちゃんは元気だよ！")
         } else {
            bot.createMessage(chat.channel.id, pingto + "ちゃんは今寝てるね...")
         }
       });
    }
    if(chat.content == "ぬるぽ") {
      fs.appendFile(chat.author.id + "-level.txt" , "." , function(err) {
       console.log("add exp,error:" + err)
      })
      bot.createMessage(chat.channel.id, "がっ！")
    }
    //称号申請用(ここは作成のみ)
    if(chat.content.match(/称号申請:.*?/)) {
      if(chat.content.match(/color=.*?/)) {
         cc = chat.content
         opt.color = chat.content.replace(/称号申請:.*? -color=/, "0x")
         console.log("[" + opt.color + "]")
         opt.color = parseInt(opt.color, 16)
      } else {
        opt.color = parseInt("ffffff", 16)
      }
      opt.name = cc.replace(/称号申請:| -color=.*/g, "")
      bot.createRole(gid, opt, "add_by_bot")
      bot.createMessage(chat.channel.id, "できたよ！")
      addid = chat.author.id
    }
    if(chat.content.match(/debug!delrole/)) {
      removeid = chat.content.replace(/debug!delrole| /g, "")
      if(chat.author.id == "239201921917911041") {
        bot.deleteRole(gid, removeid, "By bot")
        console.log(gid, removeid, "By bot")
        bot.createMessage(chat.channel.id, "さくじょにせいこうしたよ！")
      }
    }
    if(chat.content == "今のレベルは") {
      fs.appendFile(chat.author.id + "-level.txt" , "." , function(err) {
       console.log("add exp,error:" + err)
      })
      if(level=="") {
        level = "0"
      }
      fs.readFile(chat.author.id + "-level.txt",function(err, level){
        bot.createMessage(chat.channel.id, chat.author.mention + "ちゃんのレベルは" +  Math.floor(level.length /10) + "だよ！\n経験値は" + level.length + "だよ！")
      })
    }
    //熱盛反応
    if(chat.content.match(/あつもり|熱盛|:atsumori:/g)) {
      RND = Math.floor( Math.random() * (100 + 1 - 1) ) + 1 ;
      if(RND == 150) {
        bot.createMessage(chat.channel.id, "つかれちゃった...でもがんばらないとね！")
      } else {
        bot.createMessage(chat.channel.id, "**あつもりっ！**")
      }
    }
    if(chat.content.match(/ニコニコ動画で.*?を検索して/)) {
      fs.appendFile(chat.author.id + "-level.txt" , "." , function(err) {
       console.log("add exp,error:" + err)
      })
      q = chat.content.replace(/ニコニコ動画で|を検索して/g, "")
      qs = "「" + q + "」"
      q = encodeURIComponent(q)
      http.get({
        url: "http://api.search.nicovideo.jp/api/v2/video/contents/search?q=" + q + "&targets=title,tags&fields=contentId,title,viewCounter&filters[viewCounter][gte]=10000&_sort=-viewCounter&_offset=0&_limit=15&_"
      }, function (error, response, body) {
        body = body.replace(/{"meta":{"status":200,"totalCount":/, "さいせいかいすうのおおい15ほんのどうがをけんさくしたよ！\nけんさくしたわーど" + qs + "にあてはまるどうが:")
        body = body.replace(/,"id":".*?"},"data":\[{"title":"/, "\n```")
        body = body.replace(/","contentId":"/g, "```\nhttp:\/\/www.nicovideo.jp\/watch\/")
        body = body.replace(/","viewCounter":/g, "\nさいせいかいすう:")
        body = body.replace(/},{"title":"|}]}/g, "かい```\n")
        bot.createMessage(chat.channel.id, body + "けんさくけっかはここまで```けんさくけっかをもっとみるときは http://www.nicovideo.jp/search/" + q + " でみれるよ！");
      });
    }
    if(chat.content.match(/ニコニコ静画で.*?を検索して/)) {
      fs.appendFile(chat.author.id + "-level.txt" , "." , function(err) {
       console.log("add exp,error:" + err)
      })
      q = chat.content.replace(/ニコニコ静画で|を検索して/g, "")
      qs = "「" + q + "」"
      q = encodeURIComponent(q)
      http.get({
        url: "http://api.search.nicovideo.jp/api/v2/illust/contents/search?q=" + q + "&targets=title,tags&fields=contentId,title,viewCounter&filters[viewCounter][gte]=10000&_sort=-viewCounter&_offset=0&_limit=15&_"
      }, function (error, response, body) {
        body = body.replace(/{"meta":{"status":200,"totalCount":/, "えつらんかいすうのおおい15てんをけんさくしたよ！\nけんさくしたわーど" + qs + "にあてはまるいらすと:")
        body = body.replace(/,"id":".*?"},"data":\[{"contentId":"/, "\nhttp:\/\/seiga.nicovideo.jp\/seiga\/")
        body = body.replace(/},{"contentId":"/g, "\n\nhttp:\/\/seiga.nicovideo.jp\/seiga\/")
        body = body.replace(/","viewCounter":/g, "\nえつらんかいすう:")
        body = body.replace(/","title":"|}]}/g, "\n")
        bot.createMessage(chat.channel.id, body + "'''けんさくけっかはここまで```けんさくけっかをもっとみるときは http://seiga.nicovideo.jp/search/" + q + "?target=illust でみれるよ！");
      });
    }
    if(chat.content.match(/serval!AI .*?/)) {
      word = chat.content.replace("serval!AI ", "")
      postplace = "東京"
      var options = {
        url: 'https://api.apigw.smt.docomo.ne.jp/dialogue/v1/dialogue?APIKEY=',//'APIKEY='以降にdocomo developer centerで取得したClient Keyを入れる
          json: {
            utt: word,
            place: postplace,
            context: context,
            mode: mode
          }
        }
      http.post(options, function(err, response, body) {
        context = body.context
        mode = body.mode
        bot.createMessage(chat.channel.id, "AI:" + body.utt)
      });
    }
    //--------------------------------------この上に書いてください(ループ防止)
 }
});
//称号申請用(前回称号申請でチャットした人に作成されたroleを付与)
}
bot.on("guildRoleCreate", (guild, role) => {
  if(addid != "") {
    bot.addGuildMemberRole(guild.id, addid, role.id, "Bot Autoallocation")
    console.log(addid)
    addid = ""
    opt.color = ""
    opt.name = ""
  }
});
bot.on("guildMemberAdd", (joind, member) => {
  bot.createMessage(runch, member.mention + "さん、雑談用Discordようこそ！ \nまずは#welcomeチャンネルと公式Wikiを見てルールを確認してね！")//変更できます。
    bot.addGuildMemberRole(guild.id, member.join, online, "join")//joinって書いてある部分は理由です
});
bot.on("guildMemberRemove", (guild, member) => {
    bot.createMessage(runch, member.mention + "さんが退出しました。 \n今までありがとう！また来てね！");//変更できます。
});
bot.connect();
