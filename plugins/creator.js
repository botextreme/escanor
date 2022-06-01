function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
  m.reply(`
*≡ OWNER*
  *SPARTAN*
▢ Instagram :
  • https://instagram.com/scorpion_bot06
▢ WhatsApp :
  • (escribe solo si es necesario) 
▢ Telegram : 
  • t.me/bot_scorpion06 (creador) 
  • t.me/scorgrup (canal)
  • t.me/botscorpion0 (grupo)
▢ Facebook : 
  • https://facebook.com/
▢ YouTube : 
  • https://www.youtube.com/channel/UCPR7908-oVQzsdWy94enOJA/featured
  
 *≡ HELPERS*
  *nekosmic*
▢ WhatsApp : wa.me/51950054323
▢ WhatsApp : wa.me/51957041866
  *Daniel*
▢ Instagram : https://
▢ WhatsApp : wa.me/528261956657
`) 


}

handler.help = ['creador']
handler.tags = ['main']

handler.command = ['owner', 'creator', 'creador', 'dueño', 'scowner'] 


export default handler
