// Yayın sürümü için www/index.html içindeki test reklamlarını gerçek ID'lerle değiştirir.
// Ortam değişkenleri: ADMOB_BANNER, ADMOB_INTERSTITIAL, ADMOB_REWARDED  (ca-app-pub-XXXX/YYYY)
import fs from 'fs';
const f = 'www/index.html'; let s = fs.readFileSync(f, 'utf8');
const { ADMOB_BANNER: b, ADMOB_INTERSTITIAL: i, ADMOB_REWARDED: r } = process.env;
if (!b || !i || !r) { console.error('ADMOB_BANNER / ADMOB_INTERSTITIAL / ADMOB_REWARDED eksik'); process.exit(1); }
s = s.replace('testMode:true', 'testMode:false')
     .replace('ca-app-pub-3940256099942544/6300978111', b)
     .replace('ca-app-pub-3940256099942544/1033173712', i)
     .replace('ca-app-pub-3940256099942544/5224354917', r);
fs.writeFileSync(f, s); console.log('Gerçek reklam ID\'leri yazıldı, testMode kapatıldı.');
