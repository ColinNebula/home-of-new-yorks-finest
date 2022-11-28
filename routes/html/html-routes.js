const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/home.html'));
});

router.get('/events', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/events.html'));
});

router.get('/samples', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/samples.html'));
});

module.exports = router;
