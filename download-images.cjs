const https = require('https');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const imageUrls = [
  { url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=futuristic%20AI%20chip%20with%20glowing%20circuits%20and%20drone%20swarm%20flying%20formation%20blue%20tech%20background&image_size=landscape_16_9', filename: 'platform-1.jpg' },
  { url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20ancient%20Chinese%20woman%20playing%20flute%20with%20white%20spirit%20fox%20mystical%20fantasy%20art%20AI%20generated&image_size=landscape_16_9', filename: 'platform-2.jpg' },
  { url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20tools%20platform%20dashboard%20with%20colorful%20radar%20chart%20showing%20AI%20chat%20writing%20design%20video%20productivity%20marketing%20tools%20icons&image_size=landscape_16_9', filename: 'platform-3.jpg' },
  { url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=dark%20blue%20AI%20e-commerce%20dashboard%20with%20data%20charts%20pie%20chart%20bar%20graph%20sales%20analytics%20real-time%20orders%20statistics%20futuristic%20interface&image_size=landscape_16_9', filename: 'platform-4.jpg' },
  { url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20AI%20digital%20human%20avatar%20portrait%20business%20man%20friendly%20face&image_size=landscape_16_9', filename: 'platform-5.jpg' },
  { url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=global%20business%20opportunity%20collaboration%20futuristic%20cityscape%20blue%20tech%20background%20businessman%20standing%20with%20laptop%20logistics%20packages%20robots%20cloud%20network%20data%20visualization&image_size=landscape_16_9', filename: 'platform-6.jpg' },
  { url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=global%20AI%20network%20connection%20with%20globe%20and%20digital%20nodes%20technology&image_size=square', filename: 'global-network.jpg' },
];

let downloadedCount = 0;

imageUrls.forEach(({ url, filename }) => {
  const filePath = path.join(imagesDir, filename);
  const file = fs.createWriteStream(filePath);
  
  https.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      downloadedCount++;
      console.log(`下载完成: ${filename}`);
      if (downloadedCount === imageUrls.length) {
        console.log('所有图片下载完成!');
      }
    });
  }).on('error', (err) => {
    fs.unlink(filePath, () => {});
    console.error(`下载失败 ${filename}:`, err.message);
    downloadedCount++;
    if (downloadedCount === imageUrls.length) {
      console.log('下载完成（部分失败）');
    }
  });
});