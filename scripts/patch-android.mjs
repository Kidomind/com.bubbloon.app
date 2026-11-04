// android/ klasörü oluştuktan sonra AdMob App ID'sini AndroidManifest.xml'e ekler.
// ADMOB_APP_ID verilmezse Google'ın TEST App ID'si kullanılır.
import fs from 'fs';
const f = 'android/app/src/main/AndroidManifest.xml';
if (!fs.existsSync(f)) { console.log('android/ yok, atlandı'); process.exit(0); }
let s = fs.readFileSync(f, 'utf8');
const id = process.env.ADMOB_APP_ID || 'ca-app-pub-3940256099942544~3347511713';
const tag = `<meta-data android:name="com.google.android.gms.ads.APPLICATION_ID" android:value="${id}"/>`;
s = s.replace(/<meta-data android:name="com\.google\.android\.gms\.ads\.APPLICATION_ID"[^>]*\/>\s*/g, '');
s = s.replace('</application>', `    ${tag}\n    </application>`);
if (!s.includes('android.permission.INTERNET')) s = s.replace('</manifest>', '    <uses-permission android:name="android.permission.INTERNET"/>\n</manifest>');
fs.writeFileSync(f, s); console.log('AdMob App ID yazıldı:', id);

// Sürüm numaraları (CI'da VERSION_CODE / VERSION_NAME verilir)
const g = 'android/app/build.gradle';
if (fs.existsSync(g)) {
  let b = fs.readFileSync(g, 'utf8');
  if (process.env.VERSION_CODE) b = b.replace(/versionCode\s+\d+/, `versionCode ${process.env.VERSION_CODE}`);
  if (process.env.VERSION_NAME) b = b.replace(/versionName\s+"[^"]*"/, `versionName "${process.env.VERSION_NAME}"`);
  fs.writeFileSync(g, b);
}
