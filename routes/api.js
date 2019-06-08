const express = require('express');
const router = express.Router();

const redirects = require('../resources/redirects.json');
const abcRoutes = redirects.filter(r => r.meta && r.meta.includes('abc'));

router.get('/redirects', (req, res) => {
    res.json(redirects);
});

router.get('/abc', (req, res) => {
    res.json(abcRoutes);
});

module.exports = router;
