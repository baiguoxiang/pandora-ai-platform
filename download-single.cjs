const https = require('https');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const url = 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=global%20business%20opportunity%20collaboration%20futuristic%20cityscape%20blue%20tech%20background%20businessman%20standing%20with%20laptop%20logistics%20packages%20robots%20cloud%20network%20data%20visualization&image_size=landscape_16_9';
const filename = 'platform-6.jpg';

function downloadImage(url, filename, callback) {
  const filePath = path.join(imagesDir, filename);
  
  const options = {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    },
    maxRedirects: 5,
    followRedirect: true
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

downloadImage(url, filename, (err, size) => {
  if (err) {
    console.error(`下载失败:`, err.message);
  } else {
    console.log(`图片下载成功! 大小: ${size} bytes`);
  }
});