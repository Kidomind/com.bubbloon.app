// Baloo 2 fontunu www/fonts içine kopyalar ve fonts.css üretir (internet gerekmez).
import fs from 'fs'; import path from 'path';
const src = 'node_modules/@fontsource/baloo-2/files', out = 'www/fonts';
fs.mkdirSync(out, { recursive: true });
let css = '';
for (const w of [500, 700, 800]) for (const sub of ['latin', 'latin-ext']) {
  const f = `baloo-2-${sub}-${w}-normal.woff2`;
  if (!fs.existsSync(path.join(src, f))) continue;
  fs.copyFileSync(path.join(src, f), path.join(out, f));
  const range = sub === 'latin'
    ? 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD'
    : 'U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF';
  css += `@font-face{font-family:'Baloo 2';font-style:normal;font-weight:${w};font-display:swap;src:url(${f}) format('woff2');unicode-range:${range}}\n`;
}
fs.writeFileSync(path.join(out, 'fonts.css'), css);
console.log('Fontlar hazır:', css.split('\n').filter(Boolean).length, 'dosya');
