const express = require('express');
const passport = require('../auth/passport');
const router = express.Router();

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ user: req.user });
});

router.post('/logout', (req, res) => {
  req.logout(() => {
    res.json({ ok: true });
  });
});

router.get('/check', (req, res) => {
  if (req.isAuthenticated && req.isAuthenticated()) {
    res.json({ authenticated: true, user: req.user });
  } else {
    res.json({ authenticated: false });
  }
});

module.exports = router;