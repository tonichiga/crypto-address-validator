"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNetworkValidation = exports.validationMap = exports.normalizeNetworkKey = exports.networkOptions = void 0;
const btcValidator = require('../validators/bitcoin_validator');
const bchValidator = require('../validators/bch_validator');
const ethValidator = require('../validators/ethereum_validator');
const tronValidator = require('../validators/tron_validator');
const adaValidator = require('../validators/ada_validator');
const moneroValidator = require('../validators/monero_validator');
const nanoValidator = require('../validators/nano_validator');
const siacoinValidator = require('../validators/siacoin_validator');
const rippleValidator = require('../validators/ripple_validator');
const nemValidator = require('../validators/nem_validator');
const stellarValidator = require('../validators/stellar_validator');
const eosValidator = require('../validators/eos_validator');
const tezosValidator = require('../validators/tezos_validator');
const algoValidator = require('../validators/algo_validator');
const dotValidator = require('../validators/dot_validator');
const bip173Validator = require('../validators/bip173_validator');
const base58Validator = require('../validators/base58_validator');
const aptosValidator = require('../validators/aptos_validator');
const hbarValidator = require('../validators/hbar_validator');
const prodOnly = { networkType: 'prod' };
exports.networkOptions = [
    { value: 'bitcoin', label: 'Bitcoin' },
    { value: 'bitcoincash', label: 'Bitcoin Cash' },
    { value: 'bitcoinsv', label: 'Bitcoin SV' },
    { value: 'litecoin', label: 'Litecoin' },
    { value: 'dogecoin', label: 'Dogecoin' },
    { value: 'dash', label: 'Dash' },
    { value: 'decred', label: 'Decred' },
    { value: 'digibyte', label: 'DigiByte' },
    { value: 'zcash', label: 'Zcash' },
    { value: 'waves', label: 'Waves' },
    { value: 'erc20', label: 'ERC20' },
    { value: 'erc721', label: 'ERC721' },
    { value: 'erc1155', label: 'ERC1155' },
    { value: 'ethereumclassic', label: 'Ethereum Classic' },
    { value: 'trc10', label: 'TRC10' },
    { value: 'trc20', label: 'TRC20' },
    { value: 'bep2', label: 'BEP2' },
    { value: 'bep20', label: 'BEP20' },
    { value: 'spl', label: 'SPL (Solana)' },
    { value: 'cardano', label: 'Cardano' },
    { value: 'monero', label: 'Monero' },
    { value: 'ripple', label: 'XRP Ledger' },
    { value: 'stellar', label: 'Stellar' },
    { value: 'eos', label: 'EOS' },
    { value: 'tezos', label: 'Tezos' },
    { value: 'cryptoorg', label: 'Crypto.org' },
    { value: 'algorand', label: 'Algorand' },
    { value: 'polkadot', label: 'Polkadot' },
    { value: 'aptos', label: 'Aptos' },
    { value: 'hedera', label: 'Hedera' },
    { value: 'ton', label: 'TON' },
    { value: 'sui', label: 'Sui' },
    { value: 'near', label: 'Near' },
    { value: 'cosmos', label: 'Cosmos' },
    { value: 'osmosis', label: 'Osmosis' },
    { value: 'injective', label: 'Injective' },
    { value: 'sei', label: 'Sei' },
    { value: 'celestia', label: 'Celestia' },
    { value: 'terra', label: 'Terra' },
    { value: 'kaspa', label: 'Kaspa' },
    { value: 'filecoin', label: 'Filecoin' },
    { value: 'iota', label: 'IOTA' },
    { value: 'avaxc', label: 'Avalanche C-Chain' },
    { value: 'arb', label: 'Arbitrum One' },
    { value: 'base', label: 'Base' },
    { value: 'op', label: 'Optimism' },
    { value: 'linea', label: 'Linea' },
    { value: 'scroll', label: 'Scroll' },
    { value: 'zksyncera', label: 'zkSync Era' },
    { value: 'ftm', label: 'Fantom' },
    { value: 'matic', label: 'Polygon PoS' },
    { value: 'vet', label: 'VeChain' },
    { value: 'flr', label: 'Flare' },
    { value: 'bera', label: 'Berachain' },
    { value: 'story', label: 'Story' }
];
const normalizeNetworkKey = (network) => {
    return String(network || '')
        .trim()
        .toLowerCase()
        .replace(/[\s._-]+/g, '');
};
exports.normalizeNetworkKey = normalizeNetworkKey;
const createConfig = (validator, regex, currency, opts) => ({
    validator,
    regex,
    currency,
    opts,
});
const map = {};
const register = (aliases, config) => {
    aliases.forEach((alias) => {
        map[(0, exports.normalizeNetworkKey)(alias)] = config;
    });
};
register(['bitcoin', 'btc', 'omni'], createConfig(btcValidator, /^(?:[13][a-km-zA-HJ-NP-Z1-9]{25,34}|bc1[ac-hj-np-z02-9]{11,71})$/, {
    addressTypes: { prod: ['00', '05'], testnet: ['6f', 'c4', '3c', '26'] },
    bech32Hrp: { prod: ['bc'], testnet: ['tb'] },
}, prodOnly));
register(['bitcoincash', 'bitcoin-cash', 'bch'], createConfig(bchValidator, /^[qQpP]{1}[0-9a-zA-Z]{41}$/, {
    regexp: '^[qQpP]{1}[0-9a-zA-Z]{41}$',
    addressTypes: { prod: ['00', '05'], testnet: ['6f', 'c4'] },
}, prodOnly));
register(['bitcoinsv', 'bitcoin-sv', 'bsv'], createConfig(bchValidator, /^[qQ]{1}[0-9a-zA-Z]{41}$/, {
    regexp: '^[qQ]{1}[0-9a-zA-Z]{41}$',
    addressTypes: { prod: ['00', '05'], testnet: ['6f', 'c4'] },
}, prodOnly));
register(['litecoin', 'ltc'], createConfig(btcValidator, /^(?:[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}|ltc1[ac-hj-np-z02-9]{11,71})$/, {
    addressTypes: { prod: ['30', '32'], testnet: ['6f', 'c4', '3a'] },
    bech32Hrp: { prod: ['ltc'], testnet: ['tltc'] },
}, prodOnly));
register(['dogecoin', 'doge'], createConfig(btcValidator, /^D{1}[5-9A-HJ-NP-Ua-km-z]{25,34}$/, {
    addressTypes: { prod: ['1e', '16'], testnet: ['71', 'c4'] },
}, prodOnly));
register(['dash'], createConfig(btcValidator, /^X[1-9A-HJ-NP-Za-km-z]{25,34}$/, {
    addressTypes: { prod: ['4c', '10'], testnet: ['8c', '13'] },
}, prodOnly));
register(['qtum'], createConfig(btcValidator, /^[QM][1-9A-HJ-NP-Za-km-z]{25,34}$/, {
    addressTypes: { prod: ['3a', '32'], testnet: ['78', '6e'] },
}, prodOnly));
register(['digibyte', 'dgb'], createConfig(btcValidator, /^(?:[DS][1-9A-HJ-NP-Za-km-z]{25,34}|dgb1[ac-hj-np-z02-9]{11,71})$/, {
    addressTypes: { prod: ['1e', '3f'], testnet: [] },
    bech32Hrp: { prod: ['dgb', 'S'], testnet: [] },
}, prodOnly));
register(['decred', 'dcr'], createConfig(btcValidator, /^D[1-9A-HJ-NP-Za-km-z]{24,35}$/, {
    addressTypes: { prod: ['073f', '071a'], testnet: ['0f21', '0efc'] },
    hashFunction: 'blake256',
    expectedLength: 26,
}, prodOnly));
register(['zcash', 'zec'], createConfig(btcValidator, /^t[13][1-9A-HJ-NP-Za-km-z]{24,34}$/, {
    expectedLength: 26,
    addressTypes: { prod: ['1cb8', '1cbd'], testnet: ['1d25', '1cba'] },
}, prodOnly));
register(['peercoin', 'ppc'], createConfig(btcValidator, /^[Pp][1-9A-HJ-NP-Za-km-z]{25,34}$/, {
    addressTypes: { prod: ['37', '75'], testnet: ['6f', 'c4'] },
}, prodOnly));
register(['namecoin', 'nmc'], createConfig(btcValidator, /^[NM][1-9A-HJ-NP-Za-km-z]{25,34}$/, {
    addressTypes: { prod: ['34'], testnet: [] },
}, prodOnly));
register(['vertcoin', 'vtc'], createConfig(btcValidator, /^(?:V[1-9A-HJ-NP-Za-km-z]{25,34}|vtc1[ac-hj-np-z02-9]{11,71})$/, {
    addressTypes: { prod: ['0x', '47', '71', '05'], testnet: ['6f', 'c4'] },
    bech32Hrp: { prod: ['vtc'], testnet: ['tvtc'] },
}, prodOnly));
register(['komodo', 'kmd'], createConfig(btcValidator, /^R[1-9A-HJ-NP-Za-km-z]{25,34}$/, {
    addressTypes: { prod: ['3c', '55'], testnet: ['0', '5'] },
}, prodOnly));
register(['bitcoingold', 'btg'], createConfig(btcValidator, /^[AG][1-9A-HJ-NP-Za-km-z]{25,34}$/, {
    addressTypes: { prod: ['26', '17'], testnet: ['6f', 'c4'] },
}, prodOnly));
register(['waves'], createConfig(btcValidator, /^[a-zA-Z0-9]{35}$/, {
    addressTypes: { prod: ['0157'], testnet: ['0154'] },
    expectedLength: 26,
    hashFunction: 'blake256keccak256',
    regex: /^[a-zA-Z0-9]{35}$/,
}, prodOnly));
register([
    'ethereum',
    'eth',
    'evm',
    'erc20',
    'erc721',
    'erc1155',
    'ethereumclassic',
    'etc',
    'ethereumpow',
    'ethw',
    'etherzero',
    'etz',
    'celo',
    'callisto',
    'clo',
    'binance',
    'binancesmartchain',
    'bsc',
    'bep20',
    'opbnb',
    'polygon',
    'matic',
    'avalanche',
    'avax',
    'avaxc',
    'arbitrum',
    'arb',
    'base',
    'optimism',
    'op',
    'linea',
    'scroll',
    'zksync',
    'zksyncera',
    'mantle',
    'fantom',
    'ftm',
    'sonic',
    'flare',
    'flr',
    'vechain',
    'vet',
    'berachain',
    'bera',
    'story',
    'ip',
], createConfig(ethValidator, /^0x[0-9a-fA-F]{40}$/));
register(['tron', 'trx', 'trc10', 'trc20'], createConfig(tronValidator, /^T[1-9A-HJ-NP-Za-km-z]{33}$/));
register(['bep2', 'bnbbeaconchain', 'binancebeaconchain'], createConfig(null, /^bnb1[0-9a-z]{38}$/i));
register(['cardano', 'ada'], createConfig(adaValidator, /^(?:addr1|addr_test1|Ae2|DdzFF)[0-9A-Za-z]+$/, {
    bech32Hrp: { prod: ['addr'], testnet: ['addr_test'] },
}, prodOnly));
register(['monero', 'xmr'], createConfig(moneroValidator, /^[1489AB][1-9A-HJ-NP-Za-km-z]{93,104}$/, {
    addressTypes: { prod: ['18', '42'], testnet: ['53', '63'], stagenet: ['24'] },
    iAddressTypes: { prod: ['19'], testnet: ['54'], stagenet: ['25'] },
}, prodOnly));
register(['loki', 'oxen'], createConfig(moneroValidator, /^L[1-9A-HJ-NP-Za-km-z]{94,106}$/, {
    addressTypes: { prod: ['114', '115', '116'], testnet: [] },
    iAddressTypes: { prod: ['115'], testnet: [] },
}, prodOnly));
register(['nano', 'xno', 'xrb', 'raiblocks'], createConfig(nanoValidator, /^(?:xrb|nano)_[13456789abcdefghijkmnopqrstuwxyz]{60}$/));
register(['siacoin', 'sc', 'hyperspace', 'xsc'], createConfig(siacoinValidator, /^[0-9a-f]{76}$/i));
register(['ripple', 'xrp', 'xrpl'], createConfig(rippleValidator, /^r[1-9A-HJ-NP-Za-km-z]{27,35}$/));
register(['nem', 'xem'], createConfig(nemValidator, /^(?:[A-Z2-7]{40}|[A-Z2-7-]{45})$/));
register(['stellar', 'xlm'], createConfig(stellarValidator, /^G[A-Z2-7]{55}$/));
register(['eos'], createConfig(eosValidator, /^[a-z1-5.]{12}$/));
register(['tezos', 'xtz'], createConfig(tezosValidator, /^tz[1-3][1-9A-HJ-NP-Za-km-z]{33}$/));
register(['cryptoorg', 'crypto-org', 'cryptocom', 'cro'], createConfig(bip173Validator, /^cro1[0-9a-z]{38,64}$/i, {
    bech32Hrp: { prod: ['cro'], testnet: ['tcro'] },
}, prodOnly));
register(['algorand', 'algo'], createConfig(algoValidator, /^[A-Z2-7]{58}$/));
register(['polkadot', 'dot'], createConfig(dotValidator, /^[1-9A-HJ-NP-Za-km-z]{47,48}$/));
register(['solana', 'sol', 'spl'], createConfig(base58Validator, /^[1-9A-HJ-NP-Za-km-z]{32,44}$/, {
    minLength: 32,
    maxLength: 44,
}, prodOnly));
register(['aptos', 'apt'], createConfig(aptosValidator, /^0x[0-9a-fA-F]{64}$/));
register(['hedera', 'hbar'], createConfig(hbarValidator, /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d+)$/));
register(['ton', 'theopennetwork'], createConfig(null, /^(EQ|UQ)[A-Za-z0-9_-]{46}$/));
register(['sui'], createConfig(null, /^0x[0-9a-fA-F]{64}$/));
register(['near'], createConfig(null, /^(?:[a-z0-9._-]{2,64}|[0-9a-f]{64})$/i));
register(['cosmos', 'cosmoshub'], createConfig(null, /^cosmos1[0-9a-z]{38,64}$/i));
register(['osmosis', 'osmo'], createConfig(null, /^osmo1[0-9a-z]{38,64}$/i));
register(['injective', 'inj'], createConfig(null, /^inj1[0-9a-z]{38,64}$/i));
register(['sei'], createConfig(null, /^sei1[0-9a-z]{38,64}$/i));
register(['celestia', 'tia'], createConfig(null, /^celestia1[0-9a-z]{38,64}$/i));
register(['terra', 'luna'], createConfig(null, /^terra1[0-9a-z]{38,64}$/i));
register(['kaspa', 'kas'], createConfig(null, /^kaspa:[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{42,64}$/i));
register(['filecoin', 'fil'], createConfig(null, /^[ft][0-4][a-z0-9]{10,100}$/i));
register(['iota'], createConfig(null, /^(?:iota1|atoi1)[0-9a-z]{38,64}$/i));
exports.validationMap = map;
const getNetworkValidation = (network) => {
    return exports.validationMap[(0, exports.normalizeNetworkKey)(network)] || null;
};
exports.getNetworkValidation = getNetworkValidation;
