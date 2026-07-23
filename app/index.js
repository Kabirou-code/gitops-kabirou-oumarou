const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Kabirou Oumarou - GitOps K3s</title></head>
      <body style="font-family: Arial; text-align: center; margin-top: 100px;">
        <h1>Kabirou Oumarou</h1>
        <p>M1 SSI - ESMT Dakar - Projet GitOps observable sur Kubernetes</p>
        <p>Version: 1.0.1</p>
      </body>
    </html>
  `);
});

app.listen(PORT, '0.0.0.0', () => console.log(`App running on port ${PORT}`));
