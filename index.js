const express = require('express');
const nodemon = require('nodemon');
const clients = require('./models/clients');

const app = express();
const port = 3000;


app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello Word")
});
cd 
app.get('/cli', (req, res) => {
    res.send(clients)
});

app.get('/cliente/:id', (req, res) => {
    const { id } = req.params;
    const client = clients.find((value) => value.id === Number(id));
    if (!client) return res.send("Cliente não encontrado!");
    res.send(client);
});

app.post('/cliente', (req, res) => {
    const { name } = req.body;
    const id = clients.length + 1;
    clients.push({ id, name });
    res.send('client added');
});

app.put('/cliente/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const client = clients.find((value) => value.id === Number(id));
    if (!client) return res.send("Cleinte not found");
    client.name = name;
    res.send("Cleinte atualizado! Porra")
});

app.delete('/cliente/:id', (req, res) => {
    const { id } = req.params;
    const index = clients.findIndex((value) => value.id === Number(id));
    if (index === -1) return res.send('Client not fund!');
    clients.splice(index, 1);
    res.send('Client deletado!');
})

app.listen(3000, () => {
    console.log(`Server is running on http://locallhost:${port}`)
 });

 



