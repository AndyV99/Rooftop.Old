const dab = require ('@onehilltech/dab');
const { Seed } = require ('@onehilltech/blueprint-mongodb');

module.exports = Seed.extend ({
  model () {
    return {
      native: [
        {
          _id: dab.id ('5b97f467c2789f11e55b9572'),
          name: 'ember',
          client_secret: 'ember',
          email: 'ember@no-reply.com',
          scope: ['gatekeeper.account.create']
        }
      ],
      accounts: [
        {
          username: 'user0',
          password: 'user0',
          email: 'user0@no-reply.com',
          scope: ['gatekeeper.account.create']
        }
      ],
      user_tokens: [
        {
          client: dab.ref ('native.0'),
          account: dab.ref ('accounts.0'),
          refresh_token: dab.id (),
          scope: ['gatekeeper.account.create']
        }
      ],
      client_tokens: [
        {
          client: dab.ref ('native.0'),
          scope: ['gatekeeper.account.create']
        }
      ],
    }
  }

});