const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Usuario hardcodeado (puedes usar un archivo JSON si prefieres)
const adminUser = { id: 1, username: 'admin', password: '1234' };

passport.use(new LocalStrategy(
  function(username, password, done) {
    if (username !== adminUser.username) return done(null, false, { message: 'Usuario incorrecto' });
    if (password !== adminUser.password) return done(null, false, { message: 'Contraseña incorrecta' });
    return done(null, adminUser);
  }
));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  if (id === adminUser.id) return done(null, adminUser);
  done(null, false);
});

module.exports = passport;