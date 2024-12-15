const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

const namesFilePath = path.join(__dirname, 'list.json');

app.get('/names', (req, res) => {
  fs.readFile(namesFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ message: 'Veri okunamadı.' });
      return;
    }

    const names = JSON.parse(data).names;
    const surnames = JSON.parse(data).surnames;

    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];

res.json({ name: randomName, surname: randomSurname });
  });
});

app.listen(port, () => {
  console.log(`API ${port} portunda çalışıyor.`);
});