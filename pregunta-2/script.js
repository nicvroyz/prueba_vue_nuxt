const fs = require('fs');

const filePath = './data.json';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) throw err;
  let json = JSON.parse(data);
  json.lastUpdated = new Date().toISOString();
  fs.writeFile(filePath, JSON.stringify(json, null, 2), (err) => {
    if (err) throw err;
    console.log('Archivo actualizado con fecha.');
  });
});
