import express from 'express';
import path from 'path';
import posts from './router/posts.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname =dirname(__filename);
const port = process.env.PORT || 8000;

const app = express();

// setup static folder
app.use(express.static(path.join(__dirname, 'public')));

// Router

app.use('/api/posts', posts);
app.listen(port, () => console.log(`Server is running on port ${port}`));