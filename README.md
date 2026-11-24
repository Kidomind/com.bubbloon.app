
# 🎯 Flag Shooter - Bubble Pop

Developed by AKSU STUDIO.

Flag Shooter is a colorful flag-themed bubble shooter game built with HTML5 and Capacitor for Android.

## Project Information

- Game: Flag Shooter - Bubble Pop
- Developer: Aksu Studio
- Package ID: com.bubbloon.app
- Version: 1.0.7
- Platform: Android
- Target SDK: 36
- Minimum SDK: 24
- Default game language: English

## Project Structure

| File / Folder | Description |
|---|---|
| index.html | Main game |
| icon.png | Game icon |
| resources/ | Android icons and splash screens |
| store/ | Google Play graphics |
| docs/ | Privacy policy |
| scripts/ | Android build helpers |
| iap-bridge.js | Google Play Billing bridge |
| manifest.json | Web application settings |
| capacitor.config.json | Android configuration |
| package.json | Project dependencies |
| .github/workflows/android.yml | Automated Android build |

## Android Build

1. Upload the latest game files.
2. Commit changes to the main branch.
3. Create a new release tag, such as v1.0.7.
4. Wait for GitHub Actions to complete.
5. Download bubbloon-release-aab.
6. Upload the signed AAB to Google Play Console.

## Signing Secrets

- KEYSTORE_BASE64
- KEYSTORE_PASSWORD
- KEY_ALIAS
- KEY_PASSWORD

Never publish signing keys or passwords.

## Monetization

- AdMob banner ads
- Interstitial ads
- Rewarded ads
- Google Play in-app purchases

Test all advertising and purchasing features before publishing.

## Important

Keep the existing package ID and upload signing key.

The Android versionCode must be higher than the previously published version.

## Copyright

© 2026 AKSU STUDIO. All rights reserved.
