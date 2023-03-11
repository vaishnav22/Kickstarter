const routes = require('next-routes')();

routes
    .add('/kickstarter/createKickstarter', '/kickstarter/createKickstarter')
    .add('/kickstarter/:address', '/kickstarter/kickstarterShow')
    .add('/kickstarter/:address/petitions', '/kickstarter/petitions/index')
    .add('/kickstarter/:address/petitions/new','/kickstarter/petitions/new')

module.exports = routes