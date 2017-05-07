var path = require('path');

module.exports = {
  basedir: path.join(__dirname, 'views'),
  headerNavLinks: [{
    title: 'Home',
    href: '/'
  }, {
    title: 'DC Elites',
    href: '/Washington-DC-Elites'
  }, {
    title: 'Local Politicians',
    href: '/Local-Politicians'
  }, {
    title: 'Mainstream Media',
    href: '/Mainstream-Media'
  }, {
    title: '\'Academics\'',
    href: '/Academics'
  }, {
    title: 'Founding Fathers',
    href: '/Founding-Fathers-Quiz'
  }, {
    title: 'Religious Freedom',
    href: '/Religious-Freedom'
  }]
};