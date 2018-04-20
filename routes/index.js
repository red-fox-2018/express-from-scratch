
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.send('I love hacktiv8'));
router.get('/student', (req, res) => res.send('Student page'));
router.post('/student', (req, res) => res.send('Student page post'));
router.get('/teachers', (req, res) => res.send('Teachers page'));

module.exports = router;