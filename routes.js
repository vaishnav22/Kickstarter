const routes = require('next-routes')();

routes
    .add('/kickstarter/createKickstarter', '/kickstarter/createKickstarter')
    .add('/kickstarter/:address', '/kickstarter/kickstarterShow')
    .add('/kickstarter/:address/petitions', '/kickstarter/petitions/index')

module.exports = routes