
let handler = async (m, { conn, usedPrefix, command }) => {
 let name = conn.getName(m.sender)
 
 let txt = `
Hola *${name}* 

Ese comando ya no está disponible
    
ayudanos con tu donacion
https://paypal.me/henrybayas`
    
     conn.sendHydrated(m.chat, txt, igfg, null, fgsc, 'GitHub', null, null, [
      ['⦙☰ Menu', '/help'],
      ['⦙☰ Menu 2', '/menu2'],
      ['⌬ Grupos', '/gpscorpion']
    ], m)

} 

handler.command = ['serbot', 'jadibot'] 

export default handler
