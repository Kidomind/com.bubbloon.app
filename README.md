# 🫧 Bubbloon

Baloncuk patlatma oyunu — HTML5 + [Capacitor](https://capacitorjs.com) ile Android (Google Play).

## Klasörler
| Yol | Ne işe yarar |
|---|---|
| `www/` | Oyun (`index.html`) ve satın alma köprüsü |
| `resources/` | Logodan üretilen ikon / adaptive ikon / splash |
| `store/` | Play Store görselleri, metinler, kontrol listesi |
| `docs/` | Gizlilik politikası (GitHub Pages) |
| `scripts/` | Font, reklam ID ve manifest yardımcıları |
| `.github/workflows/android.yml` | Etiket atınca imzalı `.aab` üretir |

## Yerelde çalıştırma
```bash
npm install
npm run android:add     # android/ klasörünü oluşturur
npm run assets          # ikon + splash üretir
npm run sync
npm run open            # Android Studio
```
Tarayıcıda denemek için `www/index.html` dosyasını açman yeterli (reklamlar TEST modunda simüle edilir).

## Yayın öncesi yapılacaklar
1. `capacitor.config.json` içinde `appId` değerini kendi paket adınla değiştir (`com.aksu.bubbloon`).
2. AdMob'da uygulama + 3 reklam birimi (banner, interstitial, rewarded) aç.
3. Play Console'da `remove_ads` adlı tek seferlik ürünü oluştur. Fiyat oyunda `$4.25` olarak sabit yazılı; istersen `www/index.html` içindeki `price:'$4.25'` kısmını güncelle.
4. `docs/index.html` içindeki e-posta adresini düzelt, GitHub → Settings → Pages → `main` / `docs` seç.
5. Keystore oluştur (**kaybetme!**):
   ```bash
   keytool -genkey -v -keystore bubbloon.jks -keyalg RSA -keysize 2048 -validity 10000 -alias bubbloon
   base64 -w0 bubbloon.jks   # çıktıyı KEYSTORE_BASE64 secret'ına yapıştır
   ```
6. GitHub → Settings → Secrets → Actions altına ekle:
   `KEYSTORE_BASE64`, `KEYSTORE_PASSWORD`, `KEY_ALIAS`, `KEY_PASSWORD`,
   `ADMOB_APP_ID`, `ADMOB_BANNER`, `ADMOB_INTERSTITIAL`, `ADMOB_REWARDED`
7. Yayınla:
   ```bash
   git tag v1.0.0 && git push --tags
   ```
   Actions sekmesinden `bubbloon-release-aab` dosyasını indirip Play Console'a yükle. (Workflow `testMode`'u otomatik kapatır ve gerçek reklam ID'lerini yazar.)

## Notlar
- Eklenti sürümleri (`@capacitor-community/admob`, `@capgo/native-purchases`) `package.json` içinde `^7` olarak ayarlı; ilk `npm install` sonrası çalıştığını test kapalı testte doğrula.
- Google'ın test reklam ID'leri yalnızca geliştirme içindir; gerçek ID'lerle kendi reklamına tıklama.
