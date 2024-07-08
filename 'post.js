const express = require('express');
const router = express.Router();


let posts = [
    {id: 1, title: "Post one"},
    {id: 2, title: "Post two"},
    {id: 3, title: "Post three"}
];


router.get('/', (req, res) => {
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0 ) {
        res.status(200).json(posts.slice(0, limit));

    } else {
        res.status(200).json(posts);
    }

})

// Get single post
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        res.status(404).json({ msg: `A post with the id of ${id} was not found`});
    } else {
        res.status(200).json(post);
    }
});

export default router;
