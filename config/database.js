if (process.env.NODE_ENV === 'production') {
  module.exports = {mongoURI: 'mongodb://dante:password@ds115396.mlab.com:15396/testjotprod'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/testjot-dev'}
}
