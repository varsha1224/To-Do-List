// index.js

import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

let tasks = [];

app.get('/', (req, res) => {
    res.render('index.ejs', { tasks });
});

app.post('/submit', (req, res) => {
    const newTask = req.body.task;
    tasks.push(newTask);
    console.log(`New task: ${newTask}`);
    res.redirect('/');
});

// Handle DELETE requests to remove a task


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
