const express = require('express');
const router = express.Router();

const links = require('../controllers/links.controller')
const link = require('../middlewares/link-mid')

router.post('/links', links.create)
router.get('/links', links.list)
router.get('/links/:id', link.exists, links.detail)
router.delete('/links/:id', link.exists, links.delete)
router.put('/links/:id', link.exists, links.update)

module.exports = router;
