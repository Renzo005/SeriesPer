const express = require('express');
const series = require(`../data/series.json`)

const app = express();

const PORT = 3001

app.use(express.json())

app.get('/series', (req,res) => {
    res.status(200).json({series});
})

app.post('/series', (req, res) => {
    const { nombre, plataforma } = req.body;
    const serie = {
        nombre,
        plataforma,
        disponible: false
    };
    series.push(serie);
    res.status(201).json({ serie });
});

app.listen(PORT, () => {
    console.log(`Aplicacion lista escuchando en ${PORT}`)
})