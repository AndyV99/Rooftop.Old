const dab = require ('@onehilltech/dab');
const { Seed } = require ('@onehilltech/blueprint-mongodb');

module.exports = Seed.extend ({
  model () {
    return {
      native: [
        {
          _id: dab.id ('5cd378b01fd1e1088286c80d'),
          name: 'ember',
          client_secret: 'ember',
          email: 'ember@no-reply.com',
          scope: ['gatekeeper.account.create', 'gatekeeper.account.update']
        }
      ],
      accounts: [
        {
          username: 'andy',
          password: 'andy',
          email: 'user0@no-reply.com',
          scope: ['gatekeeper.account.create', 'gatekeeper.account.update']
        }
      ],
      user_tokens: [
        {
          client: dab.ref ('native.0'),
          account: dab.ref ('accounts.0'),
          refresh_token: dab.id (),
          scope: ['gatekeeper.account.create', 'gatekeeper.account.update']
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