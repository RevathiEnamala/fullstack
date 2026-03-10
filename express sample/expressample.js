
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} request to ${req.url}`);
    next(); 
});

app.get('/', (req, res) => {
    res.send('Welcome to the Express Home Page!');
});

app.post('/user', (req, res) => {
    const { name } = req.body;
    res.status(201).json({ message: `User ${name} created successfully!` });
});

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Fetching data for User ID: ${userId}`);
});
app.get('/redirect-me', (req, res) => {
    res.redirect('/'); 
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`);
});