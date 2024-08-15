const { Router } = require('express');

const router = Router();

router
    .get('/usuarios')
    .get('/usuarios/id/:id')
    .post('/usuarios')
    .put('/usuarios/id/:id')
    .delete('/usuarios/id/:id')

module.exports = router;