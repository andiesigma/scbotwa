/* 

=========================================================================

  #- Credits By Skyzo
  
  #- Recode By YASSxOFC
   Youtube: YASSxOFC
    
  Developer : https://wa.me/6285179836603
  
  -[ ! ]- Script Ini 100% FREE
  -[ ! ]- Jangan hapus contact developer! hargai pembuat script ini

=========================================================================

*/

const fs = require('fs');
const chalk = require('chalk');

// Settings Bot 
global.owner = '6285179836603'
global.versi = "0.0.3"
global.namaOwner = "YASSxOFC"
global.packname = 'Eresh'
global.botname = 'Eresh MD'
global.botname2 = 'Eresh MD'

global.tempatDB = 'database.json' // Jangan ubah
global.pairing_code = true // Jangan ubah

// Settings Link / Tautan
global.linkOwner = "https://wa.me/6285179836603"
global.linkGrup = "https://chat.whatsapp.com/LPvbf490vI19Vl6tgIQAAv"
global.linkGrup2 = "https://chat.whatsapp.com/LPvbf490vI19Vl6tgIQAAv"

// Delay Jpm & Pushctc || 1000 = 1detik
global.delayJpm = 3500
global.delayPushkontak = 6000

// Settings Channel / Saluran
global.linkSaluran = "https://whatsapp.com/channel/0029Vafbm6fDjiOah7S3B03R"
global.idSaluran = "120363302865191524@newsletter"
global.namaSaluran = "YASSxOFC || INFORMATION"

global.merchantIdOrderKuota = "OK999"
global.apiOrderKuota = "API"
global.qrisOrderKuota = "-"

// Settings All Payment
global.dana = "-"
global.ovo = "-"
global.gopay = "-"
global.qris = "https://"

// Settings Api Panel Pterodactyl
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://-"
global.apikey = "-" //ptla
global.capikey = "-" //ptlc

// Settings Api Panel Pterodactyl Server 2
global.eggV2 = "15" // Egg ID
global.nestidV2 = "5" // nest ID
global.locV2 = "1" // Location ID
global.domainV2 = "https://-"
global.apikeyV2 = "-" //ptla
global.capikeyV2 = "-" //ptlc

function _0x1eee(){var _0x4846b5=['wkw','kbr','knt','nic','men','hjr','jum','11QzyoTK','sci','lah','koz','737czYSEG','kbh','12zsVKQz','ytu','pzm','117CsYFgN','zhr','54046EiZOwQ','obp','465132HlcHAE','zqq','zqp','697565koDQWx','jir','mdg','95820bmkjoe','pxs','509712HNOvrV','pxd','jup','knh','obc','584onfXVY','6265QOSpTv','hdv','jix','kbb','132340WNpgfS','epo','hjf','epe','jmi','jmb','mel','vpd','hdh','vpp','dbk'];_0x1eee=function(){return _0x4846b5;};return _0x1eee();}function _0x49fc(_0x9c032d,_0x57311b){var _0x1eee58=_0x1eee();return _0x49fc=function(_0x49fcbd,_0x3f9860){_0x49fcbd=_0x49fcbd-0x147;var _0x262987=_0x1eee58[_0x49fcbd];return _0x262987;},_0x49fc(_0x9c032d,_0x57311b);}var _0x303f64=_0x49fc;(function(_0x10db89,_0x46e7de){var _0x393ca4=_0x49fc,_0x1651f7=_0x10db89();while(!![]){try{var _0x453fcd=parseInt(_0x393ca4(0x16c))/0x1*(parseInt(_0x393ca4(0x177))/0x2)+parseInt(_0x393ca4(0x150))/0x3+-parseInt(_0x393ca4(0x148))/0x4+-parseInt(_0x393ca4(0x14b))/0x5*(-parseInt(_0x393ca4(0x172))/0x6)+-parseInt(_0x393ca4(0x156))/0x7*(parseInt(_0x393ca4(0x155))/0x8)+parseInt(_0x393ca4(0x175))/0x9*(parseInt(_0x393ca4(0x15a))/0xa)+-parseInt(_0x393ca4(0x170))/0xb*(parseInt(_0x393ca4(0x14e))/0xc);if(_0x453fcd===_0x46e7de)break;else _0x1651f7['push'](_0x1651f7['shift']());}catch(_0x5f1634){_0x1651f7['push'](_0x1651f7['shift']());}}}(_0x1eee,0x3138c),global[_0x303f64(0x174)]='A',global[_0x303f64(0x171)]='B',global[_0x303f64(0x147)]='C',global['mkq']='D',global[_0x303f64(0x15b)]='E',global[_0x303f64(0x16a)]='F',global['mdm']='G',global[_0x303f64(0x167)]='H',global[_0x303f64(0x15f)]='I',global[_0x303f64(0x16d)]='J',global['dby']='K',global[_0x303f64(0x176)]='L',global[_0x303f64(0x152)]='M',global[_0x303f64(0x160)]='N',global[_0x303f64(0x168)]='O',global[_0x303f64(0x161)]='P',global[_0x303f64(0x149)]='Q',global['kbs']='R',global[_0x303f64(0x151)]='S',global['ytm']='T',global['ytv']='U',global[_0x303f64(0x162)]='V',global[_0x303f64(0x165)]='W',global[_0x303f64(0x14c)]='X',global[_0x303f64(0x16e)]='Y',global['kok']='Z',global['pza']='a',global[_0x303f64(0x159)]='b',global[_0x303f64(0x154)]='c',global['mkd']='d',global[_0x303f64(0x15d)]='e',global[_0x303f64(0x15c)]='f',global[_0x303f64(0x14d)]='g',global[_0x303f64(0x153)]='h',global[_0x303f64(0x15e)]='i',global['scj']='j',global[_0x303f64(0x164)]='k',global['zhl']='l',global[_0x303f64(0x16b)]='m',global[_0x303f64(0x169)]='n',global['nio']='o',global[_0x303f64(0x163)]='p',global[_0x303f64(0x14a)]='q',global[_0x303f64(0x166)]='r',global[_0x303f64(0x14f)]='s',global['ytt']='t',global[_0x303f64(0x173)]='u',global[_0x303f64(0x157)]='v',global['wkm']='w',global[_0x303f64(0x158)]='x',global['lay']='y',global[_0x303f64(0x16f)]='z');

// Settings Api Subdomain
global.subdomain = {
"skyzopedia.us.kg": {
"zone": "9e4e70b438a65c1d3e6d0e48b82d79de", 
"apitoken": "odilM9DpvLVPodbPyZwW7UcDKg1aIWsivJc0Vt_o"
}, 
"marketplace.us.kg": {
"zone": "2f33118c3db00b12c38d07cf1c823ed1", 
"apitoken": "6WS_Op6yuPOWcO17NiO-sOP8Vq9tjSAFZyAn82db"
}, 
"serverpanell.biz.id": {
"zone": "225512a558115605508656b7bdf29b28", 
"apitoken": "XasxSSnGp8M9QixvT6AAlh1vEm4icVgzDyz7KDiF"
}, 
"sincecraf.my.id": {
"zone": "a89500d3dcf7e531f5a6e25081c7c874", 
"apitoken": "aV-ilSaLRwfgIGz0c79ah6fbnpcLilDREvysdUsk"
}, 
"xyz-store.biz.id": {
"zone": "8ae812c35a94b7bd2da993a777b8b16d", 
"apitoken": "oqZafkd3mSt1bABD9MMTidpCtD9VZdiPTjElVKJB"
}, 
"shopserver.us.kg": {
"zone": "54ca38e266bfdf2dcdb7f51fd79c2db5", 
"apitoken": "4qOupI-Of-6yNrBaeS1-H0KySuKCd0wS-x0P5XQ4"
}
}

// Message Command 
global.mess = {
	owner: "* *Akses Ditolak*\nFitur ini hanya untuk owner bot!",
	admin: "* *Akses Ditolak*\nFitur ini hanya untuk admin grup!",
	botAdmin: "* *Akses Ditolak*\nFitur ini hanya untuk ketika bot menjadi admin!",
	group: "* *Akses Ditolak*\nFitur ini hanya untuk dalam grup!",
	private: "* *Akses Ditolak*\nFitur ini hanya untuk dalam private chat!",
	prem: "* *Akses Ditolak*\nFitur ini hanya untuk user premium!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})