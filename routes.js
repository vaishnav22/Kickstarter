const routes = require('next-routes')();

routes
    .add('/kickstarter/createKickstarter', '/kickstarter/createKickstarter')
    .add('/kickstarter/:address', '/kickstarter/kickstarterShow')

module.exports = routes