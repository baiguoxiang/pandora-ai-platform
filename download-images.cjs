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
  { url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=individual%20entrepreneur%20working%20from%20home%20with%20AI%20tools%20and%20laptop&image_size=portrait_4_3', filename: 'segment-1.jpg' },
  { url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20enterprise%20office%20with%20AI%20dashboard%20and%20team%20collaboration&image_size=portrait_4_3', filename: 'segment-2.jpg' },
  { url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=smart%20city%20government%20building%20with%20digital%20AI%20infrastructure&image_size=portrait_4_3', filename: 'segment-3.jpg' },
  { url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20script%20writing%20tool%20with%20creative%20storyboard&image_size=square', filename: 'template-1.jpg' },
  { url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20image%20generation%20with%20creative%20canvas&image_size=square', filename: 'template-2.jpg' },
  { url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20video%20creation%20with%20timeline%20editor&image_size=square', filename: 'template-3.jpg' },
  { url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20voice%20over%20recording%20studio%20with%20audio%20waves&image_size=square', filename: 'template-4.jpg' },
  { url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=comic%20style%20AI%20animation%20with%20manga%20characters&image_size=square', filename: 'template-5.jpg' },
  { url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20subtitle%20translation%20tool%20with%20multiple%20languages&image_size=square', filename: 'template-6.jpg' },
];

function downloadImage(url, filename, callback) {
  const filePath = path.join(imagesDir, filename);
  
  const options = {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    },
    maxRedirects: 5
  };
  
  https.get(url, options, (response) => {
    if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
      downloadImage(response.headers.location, filename, callback);
      return;
    }
    
    if (response.statusCode !== 200) {
      callback(new Error(`HTTP status ${response.statusCode}`));
      return;
    }
    
    const file = fs.createWriteStream(filePath);
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      const stats = fs.statSync(filePath);
      console.log(`下载完成: ${filename} (${stats.size} bytes)`);
      callback(null, stats.size);
    });
  }).on('error', (err) => {
    callback(err);
  });
}

let downloadedCount = 0;
let totalSize = 0;

imageUrls.forEach(({ url, filename }) => {
  downloadImage(url, filename, (err, size) => {
    if (err) {
      console.error(`下载失败 ${filename}:`, err.message);
    } else {
      totalSize += size;
    }
    downloadedCount++;
    if (downloadedCount === imageUrls.length) {
      console.log(`所有图片下载完成! 总大小: ${totalSize} bytes`);
    }
  });
});