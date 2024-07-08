const express = require('express');
const path = require('path');
const posts = require('./routes/posts');
const port = process.env.PORT || 8000;

const app = express();

// setup static folder
app.use(express.static(path.join(__dirname, 'public')));


// Router

app.use('/api/posts', posts);
app.listen(port, () => console.log(`Server is running on port ${port}`));