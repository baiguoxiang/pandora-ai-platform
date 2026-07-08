const fs = require('fs');

// Fix PlatformCard.tsx
let content = fs.readFileSync('src/components/PlatformCard.tsx', 'utf8');
content = content.replace(
  /iconContainer = target\.parentElement\?\.querySelector\('\.icon-placeholder'\)/g,
  "iconContainer = target.parentElement?.querySelector('.icon-placeholder') as HTMLElement | null"
);
fs.writeFileSync('src/components/PlatformCard.tsx', content);
console.log('PlatformCard.tsx fixed');

// Fix UserSegmentCard.tsx
content = fs.readFileSync('src/components/UserSegmentCard.tsx', 'utf8');
content = content.replace(
  /iconContainer = target\.parentElement\?\.querySelector\('\.icon-placeholder'\)/g,
  "iconContainer = target.parentElement?.querySelector('.icon-placeholder') as HTMLElement | null"
);
fs.writeFileSync('src/components/UserSegmentCard.tsx', content);
console.log('UserSegmentCard.tsx fixed');