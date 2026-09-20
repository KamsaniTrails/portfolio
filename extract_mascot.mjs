import fs from 'fs';

async function extract() {
  const res = await fetch('https://kashyaap69.vercel.app/_next/static/chunks/e4e6fdadba3f885b.js');
  const t = await res.text();
  const end = t.indexOf('e.s(["PixelDog"');
  fs.writeFileSync('mascot_raw.js', t.slice(Math.max(0, end - 6000), end));
  console.log('Saved mascot_raw.js');
}
extract();
