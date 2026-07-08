const fs = require("fs");
const c = fs.readFileSync("src/components/PlatformCard.tsx","utf8");
const r = c.replace('querySelector('.icon-placeholder')', 'querySelector('.icon-placeholder') as HTMLElement');
fs.writeFileSync("src/components/PlatformCard.tsx", r);
const d = fs.readFileSync("src/components/UserSegmentCard.tsx","utf8");
const s = d.replace('querySelector('.icon-placeholder')', 'querySelector('.icon-placeholder') as HTMLElement');
fs.writeFileSync("src/components/UserSegmentCard.tsx", s);
console.log("done");
