const Discord = require('discord.js');
const token = 'ODI3NjUwMDU5NDk1Mjc2NjE0.YGeHLw.TvZfaKuZtW_CRKrICrOmdWfHzok';

const client = new Discord.Client();


client.on('message',(msg)=> {
 if(msg.content === '!hello'){
     msg.channel.send(`Hello ${msg.author}!`);

 }

 if(msg.content === '!sakshi'){
    msg.channel.send('Linked profile=http://linkedin.com/in/sakshi-bhalla-930815190');
 }
 if(msg.content === '!how are you'){
     msg.channel.send('I am fine what about you!');
 }
});

client.once('ready', ()=>{
    console.log('Bot is now connected');

    client.channels.cache.find(x => x.name==='test').send('Hello! I am now connected, Please put an exclaimatory mark on every word or sentence if you wanna talk');
});

client.login(token);


