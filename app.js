const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 3000;

// Criar conexão com o banco de dados
const db = new sqlite3.Database('ecommerce_floricultura.db');

// Rota para obter todos os produtos
app.get('/produtos', (req, res) => {
    db.all('SELECT * FROM produtos', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Rota para obter todos os pedidos
app.get('/pedidos', (req, res) => {
    db.all('SELECT * FROM pedidos', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
