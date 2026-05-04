const { validate } = require('./dist');
const { networkOptions } = require('./dist/config/networks');

globalThis.cryptoWalletValidator = {
  validate,
  networkOptions,
};
