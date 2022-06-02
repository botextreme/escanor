
import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
≡ _Use estos comandos sin el prefijo_

▢ Si tienes más  audios  
envíame por t.me/fgsupp_bot el *audio + comando* con en el que responderá
*No* _voces de lolis_


┌─⊷ *AUDIOS* 
▢ Bot
▢ Buenos días
▢ Buenas tardes 
▢ Buenas noches
└──────────────
┌─⊷ *VIDEO/GIF* 
▢ Linda noche
└──────────────`
const pp = await (await fetch('https://i.ibb.co/wsppZH5/3fe483d6-5094-4059-ad66-03621f51e76f.jpg')).buffer()
    
    conn.sendHydrated(m.chat, m2, '▢ Scorpion  ┃ ᴮᴼᵀ\n▢ Sígueme en Instagram\nhttps://www.instagram.com/Scorpion_bot06._\n', pp, 'https://www.youtube.com/channel/UCPR7908-oVQzsdWy94enOJA/featured', 'YouTube', null, null, [
     ['⏍ Info', '/botinfo'],
      ['⌬ Grupos', '/grupos']
    ], m)
    
}

handler.help = ['menu2']
handler.tags = ['main']
handler.command = ['menu2'] 
handler.register = true
export default handler
