const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Mock Database para Diaristas
let diaristas = [];

// Rotas para Diaristas
app.post('/diaristas', (req, res) => {
    const { nome, cpf, email, endereco } = req.body;

    if (!nome || !cpf || !email || !endereco) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    const diarista = {
        id: diaristas.length + 1,
        nome,
        cpf,
        email,
        endereco,
    };

    diaristas.push(diarista);
    return res.status(201).json({ message: 'Diarista cadastrado com sucesso!', diarista });
});

app.get('/diaristas', (req, res) => res.status(200).json(diaristas));

app.get('/diaristas/:id', (req, res) => {
    const { id } = req.params;
    const diarista = diaristas.find((d) => d.id === parseInt(id));

    if (!diarista) {
        return res.status(404).json({ message: 'Diarista não encontrado.' });
    }

    return res.status(200).json(diarista);
});

app.put('/diaristas/:id', (req, res) => {
    const { id } = req.params;
    const { nome, cpf, email, endereco } = req.body;

    const diaristaIndex = diaristas.findIndex((d) => d.id === parseInt(id));

    if (diaristaIndex === -1) {
        return res.status(404).json({ message: 'Diarista não encontrado.' });
    }

    diaristas[diaristaIndex] = {
        ...diaristas[diaristaIndex],
        nome: nome || diaristas[diaristaIndex].nome,
        cpf: cpf || diaristas[diaristaIndex].cpf,
        email: email || diaristas[diaristaIndex].email,
        endereco: endereco || diaristas[diaristaIndex].endereco,
    };

    return res.status(200).json({ message: 'Cadastro atualizado com sucesso!', diarista: diaristas[diaristaIndex] });
});

app.delete('/diaristas/:id', (req, res) => {
    const { id } = req.params;

    const diaristaIndex = diaristas.findIndex((d) => d.id === parseInt(id));

    if (diaristaIndex === -1) {
        return res.status(404).json({ message: 'Diarista não encontrado.' });
    }

    diaristas.splice(diaristaIndex, 1);
    return res.status(200).json({ message: 'Diarista removido com sucesso!' });
});

// Rota de Teste
app.post('/submit', (req, res) => {
    const { message } = req.body;

    if (message === 'Teste') {
        res.json({ success: true, message: 'Ação concluída com sucesso!' });
    } else {
        res.json({ success: false, message: 'Ocorreu um erro.' });
    }
});

// Iniciar o servidor
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
