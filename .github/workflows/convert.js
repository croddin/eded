const fs = require('fs');
const file = fs.readFileSync('./eded.html', 'utf8');
const base64 = Buffer.from(file).toString('base64');
const dataUrl = `data:text/html;base64,${base64}`;
console.log(dataUrl);