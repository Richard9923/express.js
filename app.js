const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express();

// setup static folder
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {

// });

// app.get('/about', (req, res) => {

// });

let posts = [
    {id: 1, title: "Post one"},
    {id: 2, title: "Post two"},
    {id: 3, title: "Post three"}
];

app.get('/api/posts', (req, res) => {
    res.json(posts);
})

app.listen(port, () => console.log(`Server is running on port ${port}`));