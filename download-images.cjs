const fs = require('fs');
const https = require('https');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const imagePrompts = [
  { filename: 'platform-1.jpg', prompt: 'AI technology concept, digital tokens, blockchain, futuristic blue and purple glow, high quality' },
  { filename: 'platform-2.jpg', prompt: 'AI video production, film making, digital content creation, cinematic purple and pink colors, modern studio' },
  { filename: 'platform-3.jpg', prompt: 'AI tools platform, coding, software development, green and cyan technology theme, clean interface design' },
  { filename: 'platform-4.jpg', prompt: 'AI e-commerce, online shopping, digital storefront, orange and yellow warm colors, global marketplace' },
  { filename: 'platform-5.jpg', prompt: 'AI digital human, virtual assistant, smart robot, red and rose colors, futuristic avatar' },
  { filename: 'platform-6.jpg', prompt: 'AI global collaboration, business network, connection nodes, indigo and violet colors, worldwide connectivity' },
];

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(imagesDir, filename);
    const file = fs.createWriteStream(filePath);
    
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      },
      maxRedirects: 5
    }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadImage(response.headers.location, filename).then(resolve).catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close(resolve);
      });
      
      file.on('error', (err) => {
        fs.unlinkSync(filePath);
        reject(err);
      });
    }).on('error', reject);
  });
}

async function main() {
  console.log('Downloading AI images...');
  
  for (const { filename, prompt } of imagePrompts) {
    try {
      const encodedPrompt = encodeURIComponent(prompt);
      const url = `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodedPrompt}&image_size=landscape_16_9`;
      
      console.log(`Downloading ${filename}...`);
      await downloadImage(url, filename);
      
      const stats = fs.statSync(path.join(imagesDir, filename));
      console.log(`Downloaded ${filename}: ${stats.size} bytes`);
    } catch (error) {
      console.error(`Failed to download ${filename}:`, error.message);
    }
  }
  
  console.log('All images downloaded!');
}

main();