const express = require('express');
const router = express.Router();

router.get('/comentarios/:postid', (req, res) => {
    res.send({
        post: req.params['postid'],
        comentario: 'Este post é muito fraquinho',
        autor: 'Anônymo'
    })
});


module.exports = router;