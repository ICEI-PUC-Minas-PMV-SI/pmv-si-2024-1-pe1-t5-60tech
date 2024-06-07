const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let medications = [];

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/medications', (req, res) => {
    const med = req.body;
    medications.push(med);
    res.json({ success: true });
});

app.get('/medications', (req, res) => {
    res.json(medications);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
