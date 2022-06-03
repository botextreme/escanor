import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['593939362849', 'Spartan117', true], 
  ['593963885461'], 
  ['5218261275256'], 
 ['5218261956657'] 
  
] //Numeros de owner 

global.mods = [] // Moderadores
global.prems = ['593939362849', '5218261956657', '593963885461']  // El usuario Premium tiene diamantes ilimitado
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  zenz: 'https://zenzapis.xyz',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = 'Scorpion-bot'
global.author = '@scorpion_bot06'
global.igfg = '\n▢ Sígueme en Instagram\nhttps://www.instagram.com/scorpion_bot06\n' 
global.fgsc = ''
global.fgyt = 'https://youtube.com/channel/UCPR7908-oVQzsdWy94enOJA'

global.wait = '*⌛ _Cargando..._ ▬▬▬▭*'

global.multiplier = 69 // Cuanto más alto, más difícil subir de nivel


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
