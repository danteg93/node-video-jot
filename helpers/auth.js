module.exports = {
  ensureAuthenticated: function(req, res, next) {
    if (req.isAuthenticated()) {
      console.log("WTF MAN WTF");
      return next();
    }
    req.flash('error_msg', "Not Authorized");
    res.redirect('/users/login');
  }
}
