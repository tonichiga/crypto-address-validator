(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const { validate } = require('./dist');
const { networkOptions } = require('./dist/config/networks');

globalThis.cryptoWalletValidator = {
  validate,
  networkOptions,
};

},{"./dist":14,"./dist/config/networks":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNetworkValidation = exports.validationMap = exports.normalizeNetworkKey = exports.networkOptions = void 0;
const btcValidator = require("../validators/bitcoin_validator");
const bchValidator = require("../validators/bch_validator");
const ethValidator = require("../validators/ethereum_validator");
const tronValidator = require("../validators/tron_validator");
const adaValidator = require("../validators/ada_validator");
const moneroValidator = require("../validators/monero_validator");
const nanoValidator = require("../validators/nano_validator");
const siacoinValidator = require("../validators/siacoin_validator");
const rippleValidator = require("../validators/ripple_validator");
const nemValidator = require("../validators/nem_validator");
const stellarValidator = require("../validators/stellar_validator");
const eosValidator = require("../validators/eos_validator");
const tezosValidator = require("../validators/tezos_validator");
const algoValidator = require("../validators/algo_validator");
const dotValidator = require("../validators/dot_validator");
const bip173Validator = require("../validators/bip173_validator");
const base58Validator = require("../validators/base58_validator");
const aptosValidator = require("../validators/aptos_validator");
const hbarValidator = require("../validators/hbar_validator");
const prodOnly = { networkType: "prod" };
exports.networkOptions = [
    { value: "bitcoin", label: "Bitcoin" },
    { value: "bitcoincash", label: "Bitcoin Cash" },
    { value: "bitcoinsv", label: "Bitcoin SV" },
    { value: "litecoin", label: "Litecoin" },
    { value: "dogecoin", label: "Dogecoin" },
    { value: "dash", label: "Dash" },
    { value: "decred", label: "Decred" },
    { value: "digibyte", label: "DigiByte" },
    { value: "zcash", label: "Zcash" },
    { value: "waves", label: "Waves" },
    { value: "erc20", label: "ERC20" },
    { value: "erc721", label: "ERC721" },
    { value: "erc1155", label: "ERC1155" },
    { value: "ethereumclassic", label: "Ethereum Classic" },
    { value: "trc10", label: "TRC10" },
    { value: "trc20", label: "TRC20" },
    { value: "bep2", label: "BEP2" },
    { value: "bep20", label: "BEP20" },
    { value: "spl", label: "SPL (Solana)" },
    { value: "cardano", label: "Cardano" },
    { value: "monero", label: "Monero" },
    { value: "ripple", label: "XRP Ledger" },
    { value: "stellar", label: "Stellar" },
    { value: "eos", label: "EOS" },
    { value: "tezos", label: "Tezos" },
    { value: "cryptoorg", label: "Crypto.org" },
    { value: "algorand", label: "Algorand" },
    { value: "polkadot", label: "Polkadot" },
    { value: "aptos", label: "Aptos" },
    { value: "hedera", label: "Hedera" },
    { value: "ton", label: "TON" },
    { value: "sui", label: "Sui" },
    { value: "near", label: "Near" },
    { value: "cosmos", label: "Cosmos" },
    { value: "osmosis", label: "Osmosis" },
    { value: "injective", label: "Injective" },
    { value: "sei", label: "Sei" },
    { value: "celestia", label: "Celestia" },
    { value: "terra", label: "Terra" },
    { value: "kaspa", label: "Kaspa" },
    { value: "filecoin", label: "Filecoin" },
    { value: "iota", label: "IOTA" },
    { value: "avaxc", label: "Avalanche C-Chain (AVAXC)" },
    { value: "cchain", label: "Avalanche C-Chain" },
    { value: "arb", label: "Arbitrum One" },
    { value: "base", label: "Base" },
    { value: "op", label: "Optimism" },
    { value: "linea", label: "Linea" },
    { value: "scroll", label: "Scroll" },
    { value: "zksyncera", label: "zkSync Era" },
    { value: "ftm", label: "Fantom" },
    { value: "matic", label: "Polygon PoS" },
    { value: "vet", label: "VeChain" },
    { value: "flr", label: "Flare" },
    { value: "bera", label: "Berachain" },
    { value: "story", label: "Story" },
];
const normalizeNetworkKey = (network) => {
    return String(network || "")
        .trim()
        .toLowerCase()
        .replace(/[\s._-]+/g, "");
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
register(["bitcoin", "btc", "omni"], createConfig(btcValidator, /^(?:[13][a-km-zA-HJ-NP-Z1-9]{25,34}|bc1[ac-hj-np-z02-9]{11,71})$/, {
    addressTypes: { prod: ["00", "05"], testnet: ["6f", "c4", "3c", "26"] },
    bech32Hrp: { prod: ["bc"], testnet: ["tb"] },
}, prodOnly));
register(["bitcoincash", "bitcoin-cash", "bch"], createConfig(bchValidator, /^[qQpP]{1}[0-9a-zA-Z]{41}$/, {
    regexp: "^[qQpP]{1}[0-9a-zA-Z]{41}$",
    addressTypes: { prod: ["00", "05"], testnet: ["6f", "c4"] },
}, prodOnly));
register(["bitcoinsv", "bitcoin-sv", "bsv"], createConfig(bchValidator, /^[qQ]{1}[0-9a-zA-Z]{41}$/, {
    regexp: "^[qQ]{1}[0-9a-zA-Z]{41}$",
    addressTypes: { prod: ["00", "05"], testnet: ["6f", "c4"] },
}, prodOnly));
register(["litecoin", "ltc"], createConfig(btcValidator, /^(?:[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}|ltc1[ac-hj-np-z02-9]{11,71})$/, {
    addressTypes: { prod: ["30", "32"], testnet: ["6f", "c4", "3a"] },
    bech32Hrp: { prod: ["ltc"], testnet: ["tltc"] },
}, prodOnly));
register(["dogecoin", "doge"], createConfig(btcValidator, /^D{1}[5-9A-HJ-NP-Ua-km-z]{25,34}$/, {
    addressTypes: { prod: ["1e", "16"], testnet: ["71", "c4"] },
}, prodOnly));
register(["dash"], createConfig(btcValidator, /^X[1-9A-HJ-NP-Za-km-z]{25,34}$/, {
    addressTypes: { prod: ["4c", "10"], testnet: ["8c", "13"] },
}, prodOnly));
register(["qtum"], createConfig(btcValidator, /^[QM][1-9A-HJ-NP-Za-km-z]{25,34}$/, {
    addressTypes: { prod: ["3a", "32"], testnet: ["78", "6e"] },
}, prodOnly));
register(["digibyte", "dgb"], createConfig(btcValidator, /^(?:[DS][1-9A-HJ-NP-Za-km-z]{25,34}|dgb1[ac-hj-np-z02-9]{11,71})$/, {
    addressTypes: { prod: ["1e", "3f"], testnet: [] },
    bech32Hrp: { prod: ["dgb", "S"], testnet: [] },
}, prodOnly));
register(["decred", "dcr"], createConfig(btcValidator, /^D[1-9A-HJ-NP-Za-km-z]{24,35}$/, {
    addressTypes: { prod: ["073f", "071a"], testnet: ["0f21", "0efc"] },
    hashFunction: "blake256",
    expectedLength: 26,
}, prodOnly));
register(["zcash", "zec"], createConfig(btcValidator, /^t[13][1-9A-HJ-NP-Za-km-z]{24,34}$/, {
    expectedLength: 26,
    addressTypes: { prod: ["1cb8", "1cbd"], testnet: ["1d25", "1cba"] },
}, prodOnly));
register(["peercoin", "ppc"], createConfig(btcValidator, /^[Pp][1-9A-HJ-NP-Za-km-z]{25,34}$/, {
    addressTypes: { prod: ["37", "75"], testnet: ["6f", "c4"] },
}, prodOnly));
register(["namecoin", "nmc"], createConfig(btcValidator, /^[NM][1-9A-HJ-NP-Za-km-z]{25,34}$/, {
    addressTypes: { prod: ["34"], testnet: [] },
}, prodOnly));
register(["vertcoin", "vtc"], createConfig(btcValidator, /^(?:V[1-9A-HJ-NP-Za-km-z]{25,34}|vtc1[ac-hj-np-z02-9]{11,71})$/, {
    addressTypes: { prod: ["0x", "47", "71", "05"], testnet: ["6f", "c4"] },
    bech32Hrp: { prod: ["vtc"], testnet: ["tvtc"] },
}, prodOnly));
register(["komodo", "kmd"], createConfig(btcValidator, /^R[1-9A-HJ-NP-Za-km-z]{25,34}$/, {
    addressTypes: { prod: ["3c", "55"], testnet: ["0", "5"] },
}, prodOnly));
register(["bitcoingold", "btg"], createConfig(btcValidator, /^[AG][1-9A-HJ-NP-Za-km-z]{25,34}$/, {
    addressTypes: { prod: ["26", "17"], testnet: ["6f", "c4"] },
}, prodOnly));
register(["waves"], createConfig(btcValidator, /^[a-zA-Z0-9]{35}$/, {
    addressTypes: { prod: ["0157"], testnet: ["0154"] },
    expectedLength: 26,
    hashFunction: "blake256keccak256",
    regex: /^[a-zA-Z0-9]{35}$/,
}, prodOnly));
register([
    "ethereum",
    "eth",
    "evm",
    "erc20",
    "erc721",
    "erc1155",
    "ethereumclassic",
    "etc",
    "ethereumpow",
    "ethw",
    "etherzero",
    "etz",
    "celo",
    "callisto",
    "clo",
    "binance",
    "binancesmartchain",
    "bsc",
    "bep20",
    "opbnb",
    "polygon",
    "matic",
    "avalanche",
    "avax",
    "avaxc",
    "cchain",
    "arbitrum",
    "arb",
    "base",
    "optimism",
    "op",
    "linea",
    "scroll",
    "zksync",
    "zksyncera",
    "mantle",
    "fantom",
    "ftm",
    "sonic",
    "flare",
    "flr",
    "vechain",
    "vet",
    "berachain",
    "bera",
    "story",
    "ip",
], createConfig(ethValidator, /^0x[0-9a-fA-F]{40}$/));
register(["tron", "trx", "trc10", "trc20"], createConfig(tronValidator, /^T[1-9A-HJ-NP-Za-km-z]{33}$/));
register(["bep2", "bnbbeaconchain", "binancebeaconchain"], createConfig(null, /^bnb1[0-9a-z]{38}$/i));
register(["cardano", "ada"], createConfig(adaValidator, /^(?:addr1|addr_test1|Ae2|DdzFF)[0-9A-Za-z]+$/, {
    bech32Hrp: { prod: ["addr"], testnet: ["addr_test"] },
}, prodOnly));
register(["monero", "xmr"], createConfig(moneroValidator, /^[1489AB][1-9A-HJ-NP-Za-km-z]{93,104}$/, {
    addressTypes: {
        prod: ["18", "42"],
        testnet: ["53", "63"],
        stagenet: ["24"],
    },
    iAddressTypes: { prod: ["19"], testnet: ["54"], stagenet: ["25"] },
}, prodOnly));
register(["loki", "oxen"], createConfig(moneroValidator, /^L[1-9A-HJ-NP-Za-km-z]{94,106}$/, {
    addressTypes: { prod: ["114", "115", "116"], testnet: [] },
    iAddressTypes: { prod: ["115"], testnet: [] },
}, prodOnly));
register(["nano", "xno", "xrb", "raiblocks"], createConfig(nanoValidator, /^(?:xrb|nano)_[13456789abcdefghijkmnopqrstuwxyz]{60}$/));
register(["siacoin", "sc", "hyperspace", "xsc"], createConfig(siacoinValidator, /^[0-9a-f]{76}$/i));
register(["ripple", "xrp", "xrpl"], createConfig(rippleValidator, /^r[1-9A-HJ-NP-Za-km-z]{27,35}$/));
register(["nem", "xem"], createConfig(nemValidator, /^(?:[A-Z2-7]{40}|[A-Z2-7-]{45})$/));
register(["stellar", "xlm"], createConfig(stellarValidator, /^G[A-Z2-7]{55}$/));
register(["eos"], createConfig(eosValidator, /^[a-z1-5.]{12}$/));
register(["tezos", "xtz"], createConfig(tezosValidator, /^tz[1-3][1-9A-HJ-NP-Za-km-z]{33}$/));
register(["cryptoorg", "crypto-org", "cryptocom", "cro"], createConfig(bip173Validator, /^cro1[0-9a-z]{38,64}$/i, {
    bech32Hrp: { prod: ["cro"], testnet: ["tcro"] },
}, prodOnly));
register(["algorand", "algo"], createConfig(algoValidator, /^[A-Z2-7]{58}$/));
register(["polkadot", "dot", "dotassethub"], createConfig(dotValidator, /^[1-9A-HJ-NP-Za-km-z]{47,48}$/));
register(["solana", "sol", "spl"], createConfig(base58Validator, /^[1-9A-HJ-NP-Za-km-z]{32,44}$/, {
    minLength: 32,
    maxLength: 44,
}, prodOnly));
register(["aptos", "apt"], createConfig(aptosValidator, /^0x[0-9a-fA-F]{64}$/));
register(["hedera", "hbar"], createConfig(hbarValidator, /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d+)$/));
register(["ton", "theopennetwork"], createConfig(null, /^(EQ|UQ)[A-Za-z0-9_-]{46}$/));
register(["sui"], createConfig(null, /^0x[0-9a-fA-F]{64}$/));
register(["near"], createConfig(null, /^(?:[a-z0-9._-]{2,64}|[0-9a-f]{64})$/i));
register(["cosmos", "cosmoshub"], createConfig(null, /^cosmos1[0-9a-z]{38,64}$/i));
register(["osmosis", "osmo"], createConfig(null, /^osmo1[0-9a-z]{38,64}$/i));
register(["injective", "inj"], createConfig(null, /^inj1[0-9a-z]{38,64}$/i));
register(["sei"], createConfig(null, /^sei1[0-9a-z]{38,64}$/i));
register(["celestia", "tia"], createConfig(null, /^celestia1[0-9a-z]{38,64}$/i));
register(["terra", "luna"], createConfig(null, /^terra1[0-9a-z]{38,64}$/i));
register(["kaspa", "kas"], createConfig(null, /^kaspa:[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{42,64}$/i));
register(["filecoin", "fil"], createConfig(null, /^[ft][0-4][a-z0-9]{10,100}$/i));
register(["iota"], createConfig(null, /^(?:iota1|atoi1)[0-9a-z]{38,64}$/i));
exports.validationMap = map;
const getNetworkValidation = (network) => {
    return exports.validationMap[(0, exports.normalizeNetworkKey)(network)] || null;
};
exports.getNetworkValidation = getNetworkValidation;

},{"../validators/ada_validator":16,"../validators/algo_validator":17,"../validators/aptos_validator":18,"../validators/base58_validator":19,"../validators/bch_validator":20,"../validators/bip173_validator":21,"../validators/bitcoin_validator":22,"../validators/dot_validator":23,"../validators/eos_validator":24,"../validators/ethereum_validator":25,"../validators/hbar_validator":26,"../validators/monero_validator":27,"../validators/nano_validator":28,"../validators/nem_validator":29,"../validators/ripple_validator":30,"../validators/siacoin_validator":31,"../validators/stellar_validator":32,"../validators/tezos_validator":33,"../validators/tron_validator":34}],3:[function(require,module,exports){
"use strict";
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
/**
* Encode a string to base32
*/
var b32encode = function (s) {
    var parts = [];
    var quanta = Math.floor((s.length / 5));
    var leftover = s.length % 5;
    if (leftover != 0) {
        for (var i = 0; i < (5 - leftover); i++) {
            s += '\x00';
        }
        quanta += 1;
    }
    for (var i = 0; i < quanta; i++) {
        parts.push(alphabet.charAt(s.charCodeAt(i * 5) >> 3));
        parts.push(alphabet.charAt(((s.charCodeAt(i * 5) & 0x07) << 2) | (s.charCodeAt(i * 5 + 1) >> 6)));
        parts.push(alphabet.charAt(((s.charCodeAt(i * 5 + 1) & 0x3F) >> 1)));
        parts.push(alphabet.charAt(((s.charCodeAt(i * 5 + 1) & 0x01) << 4) | (s.charCodeAt(i * 5 + 2) >> 4)));
        parts.push(alphabet.charAt(((s.charCodeAt(i * 5 + 2) & 0x0F) << 1) | (s.charCodeAt(i * 5 + 3) >> 7)));
        parts.push(alphabet.charAt(((s.charCodeAt(i * 5 + 3) & 0x7F) >> 2)));
        parts.push(alphabet.charAt(((s.charCodeAt(i * 5 + 3) & 0x03) << 3) | (s.charCodeAt(i * 5 + 4) >> 5)));
        parts.push(alphabet.charAt(((s.charCodeAt(i * 5 + 4) & 0x1F))));
    }
    var replace = 0;
    if (leftover == 1)
        replace = 6;
    else if (leftover == 2)
        replace = 4;
    else if (leftover == 3)
        replace = 3;
    else if (leftover == 4)
        replace = 1;
    for (var i = 0; i < replace; i++)
        parts.pop();
    for (var i = 0; i < replace; i++)
        parts.push("=");
    return parts.join("");
};
/**
* Decode a base32 string.
* This is made specifically for our use, deals only with proper strings
*/
var b32decode = function (s) {
    var r = new ArrayBuffer(s.length * 5 / 8);
    var b = new Uint8Array(r);
    for (var j = 0; j < s.length / 8; j++) {
        var v = [0, 0, 0, 0, 0, 0, 0, 0];
        for (var i = 0; i < 8; ++i) {
            v[i] = alphabet.indexOf(s[j * 8 + i]);
        }
        var i = 0;
        b[j * 5 + 0] = (v[i + 0] << 3) | (v[i + 1] >> 2);
        b[j * 5 + 1] = ((v[i + 1] & 0x3) << 6) | (v[i + 2] << 1) | (v[i + 3] >> 4);
        b[j * 5 + 2] = ((v[i + 3] & 0xf) << 4) | (v[i + 4] >> 1);
        b[j * 5 + 3] = ((v[i + 4] & 0x1) << 7) | (v[i + 5] << 2) | (v[i + 6] >> 3);
        b[j * 5 + 4] = ((v[i + 6] & 0x7) << 5) | (v[i + 7]);
    }
    return b;
};
module.exports = {
    b32decode: b32decode,
    b32encode: b32encode
};

},{}],4:[function(require,module,exports){
"use strict";
// Base58 encoding/decoding
// Originally written by Mike Hearn for BitcoinJ
// Copyright (c) 2011 Google Inc
// Ported to JavaScript by Stefan Thomas
// Merged Buffer refactorings from base58-native by Stephen Pair
// Copyright (c) 2013 BitPay Inc
var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
var ALPHABET_MAP = {};
for (var i = 0; i < ALPHABET.length; ++i) {
    ALPHABET_MAP[ALPHABET.charAt(i)] = i;
}
var BASE = ALPHABET.length;
module.exports = {
    decode: function (string) {
        if (string.length === 0)
            return [];
        var i, j, bytes = [0];
        for (i = 0; i < string.length; ++i) {
            var c = string[i];
            if (!(c in ALPHABET_MAP))
                throw new Error('Non-base58 character');
            for (j = 0; j < bytes.length; ++j)
                bytes[j] *= BASE;
            bytes[0] += ALPHABET_MAP[c];
            var carry = 0;
            for (j = 0; j < bytes.length; ++j) {
                bytes[j] += carry;
                carry = bytes[j] >> 8;
                bytes[j] &= 0xff;
            }
            while (carry) {
                bytes.push(carry & 0xff);
                carry >>= 8;
            }
        }
        // deal with leading zeros
        for (i = 0; string[i] === '1' && i < string.length - 1; ++i) {
            bytes.push(0);
        }
        return bytes.reverse();
    }
};

},{}],5:[function(require,module,exports){
"use strict";
function decode(string, alphabet) {
    if (string.length === 0) {
        return [];
    }
    var alphabetMap = {};
    for (var i = 0; i < alphabet.length; ++i) {
        alphabetMap[alphabet.charAt(i)] = i;
    }
    var base = alphabet.length;
    var bytes = [0];
    for (var stringIndex = 0; stringIndex < string.length; ++stringIndex) {
        var character = string[stringIndex];
        if (!(character in alphabetMap)) {
            throw new Error('Non-baseX character');
        }
        for (var byteIndex = 0; byteIndex < bytes.length; ++byteIndex) {
            bytes[byteIndex] *= base;
        }
        bytes[0] += alphabetMap[character];
        var carry = 0;
        for (var i = 0; i < bytes.length; ++i) {
            bytes[i] += carry;
            carry = bytes[i] >> 8;
            bytes[i] &= 0xff;
        }
        while (carry) {
            bytes.push(carry & 0xff);
            carry >>= 8;
        }
    }
    for (var leadingIndex = 0; string[leadingIndex] === alphabet[0] && leadingIndex < string.length - 1; ++leadingIndex) {
        bytes.push(0);
    }
    return bytes.reverse();
}
module.exports = {
    decode: decode
};

},{}],6:[function(require,module,exports){
"use strict";
// Copyright (c) 2017, 2021 Pieter Wuille
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var CHARSET = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l';
var GENERATOR = [0x3b6a57b2, 0x26508e6d, 0x1ea119fa, 0x3d4233dd, 0x2a1462b3];
const encodings = {
    BECH32: "bech32",
    BECH32M: "bech32m",
};
module.exports = {
    decode: decode,
    encode: encode,
    encodings: encodings,
    verifyChecksum: verifyChecksum
};
function getEncodingConst(enc) {
    if (enc == encodings.BECH32) {
        return 1;
    }
    else if (enc == encodings.BECH32M) {
        return 0x2bc830a3;
    }
    else {
        return null;
    }
}
function polymod(values) {
    var chk = 1;
    for (var p = 0; p < values.length; ++p) {
        var top = chk >> 25;
        chk = (chk & 0x1ffffff) << 5 ^ values[p];
        for (var i = 0; i < 5; ++i) {
            if ((top >> i) & 1) {
                chk ^= GENERATOR[i];
            }
        }
    }
    return chk;
}
function hrpExpand(hrp) {
    var ret = [];
    var p;
    for (p = 0; p < hrp.length; ++p) {
        ret.push(hrp.charCodeAt(p) >> 5);
    }
    ret.push(0);
    for (p = 0; p < hrp.length; ++p) {
        ret.push(hrp.charCodeAt(p) & 31);
    }
    return ret;
}
function verifyChecksum(hrp, data, enc) {
    return polymod(hrpExpand(hrp).concat(data)) === getEncodingConst(enc);
}
function createChecksum(hrp, data, enc) {
    var values = hrpExpand(hrp).concat(data).concat([0, 0, 0, 0, 0, 0]);
    var mod = polymod(values) ^ getEncodingConst(enc);
    var ret = [];
    for (var p = 0; p < 6; ++p) {
        ret.push((mod >> 5 * (5 - p)) & 31);
    }
    return ret;
}
function encode(hrp, data, enc) {
    var combined = data.concat(createChecksum(hrp, data, enc));
    var ret = hrp + '1';
    for (var p = 0; p < combined.length; ++p) {
        ret += CHARSET.charAt(combined[p]);
    }
    return ret;
}
function decode(bechString, enc) {
    var p;
    var has_lower = false;
    var has_upper = false;
    for (p = 0; p < bechString.length; ++p) {
        if (bechString.charCodeAt(p) < 33 || bechString.charCodeAt(p) > 126) {
            return null;
        }
        if (bechString.charCodeAt(p) >= 97 && bechString.charCodeAt(p) <= 122) {
            has_lower = true;
        }
        if (bechString.charCodeAt(p) >= 65 && bechString.charCodeAt(p) <= 90) {
            has_upper = true;
        }
    }
    if (has_lower && has_upper) {
        return null;
    }
    bechString = bechString.toLowerCase();
    var pos = bechString.lastIndexOf('1');
    if (pos < 1 || pos + 7 > bechString.length || bechString.length > 110) {
        return null;
    }
    var hrp = bechString.substring(0, pos);
    var data = [];
    for (p = pos + 1; p < bechString.length; ++p) {
        var d = CHARSET.indexOf(bechString.charAt(p));
        if (d === -1) {
            return null;
        }
        data.push(d);
    }
    if (!verifyChecksum(hrp, data, enc)) {
        return null;
    }
    return { hrp: hrp, data: data.slice(0, data.length - 6) };
}

},{}],7:[function(require,module,exports){
"use strict";
/*
    JavaScript BigInteger library version 0.9.1
    http://silentmatt.com/biginteger/
    Copyright (c) 2009 Matthew Crumley <email@matthewcrumley.com>
    Copyright (c) 2010,2011 by John Tobey <John.Tobey@gmail.com>
    Licensed under the MIT license.
    Support for arbitrary internal representation base was added by
    Vitaly Magerya.
*/
/*
    File: biginteger.js
    Exports:
        <BigInteger>
*/
(function (exports) {
    "use strict";
    /*
        Class: BigInteger
        An arbitrarily-large integer.
        <BigInteger> objects should be considered immutable. None of the "built-in"
        methods modify *this* or their arguments. All properties should be
        considered private.
        All the methods of <BigInteger> instances can be called "statically". The
        static versions are convenient if you don't already have a <BigInteger>
        object.
        As an example, these calls are equivalent.
        > BigInteger(4).multiply(5); // returns BigInteger(20);
        > BigInteger.multiply(4, 5); // returns BigInteger(20);
        > var a = 42;
        > var a = BigInteger.toJSValue("0b101010"); // Not completely useless...
    */
    var CONSTRUCT = {}; // Unique token to call "private" version of constructor
    /*
        Constructor: BigInteger()
        Convert a value to a <BigInteger>.
        Although <BigInteger()> is the constructor for <BigInteger> objects, it is
        best not to call it as a constructor. If *n* is a <BigInteger> object, it is
        simply returned as-is. Otherwise, <BigInteger()> is equivalent to <parse>
        without a radix argument.
        > var n0 = BigInteger();      // Same as <BigInteger.ZERO>
        > var n1 = BigInteger("123"); // Create a new <BigInteger> with value 123
        > var n2 = BigInteger(123);   // Create a new <BigInteger> with value 123
        > var n3 = BigInteger(n2);    // Return n2, unchanged
        The constructor form only takes an array and a sign. *n* must be an
        array of numbers in little-endian order, where each digit is between 0
        and BigInteger.base.  The second parameter sets the sign: -1 for
        negative, +1 for positive, or 0 for zero. The array is *not copied and
        may be modified*. If the array contains only zeros, the sign parameter
        is ignored and is forced to zero.
        > new BigInteger([5], -1): create a new BigInteger with value -5
        Parameters:
            n - Value to convert to a <BigInteger>.
        Returns:
            A <BigInteger> value.
        See Also:
            <parse>, <BigInteger>
    */
    function BigInteger(n, s, token) {
        if (token !== CONSTRUCT) {
            if (n instanceof BigInteger) {
                return n;
            }
            else if (typeof n === "undefined") {
                return ZERO;
            }
            return BigInteger.parse(n);
        }
        n = n || []; // Provide the nullary constructor for subclasses.
        while (n.length && !n[n.length - 1]) {
            --n.length;
        }
        this._d = n;
        this._s = n.length ? (s || 1) : 0;
    }
    BigInteger._construct = function (n, s) {
        return new BigInteger(n, s, CONSTRUCT);
    };
    // Base-10 speedup hacks in parse, toString, exp10 and log functions
    // require base to be a power of 10. 10^7 is the largest such power
    // that won't cause a precision loss when digits are multiplied.
    var BigInteger_base = 10000000;
    var BigInteger_base_log10 = 7;
    BigInteger.base = BigInteger_base;
    BigInteger.base_log10 = BigInteger_base_log10;
    var ZERO = new BigInteger([], 0, CONSTRUCT);
    // Constant: ZERO
    // <BigInteger> 0.
    BigInteger.ZERO = ZERO;
    var ONE = new BigInteger([1], 1, CONSTRUCT);
    // Constant: ONE
    // <BigInteger> 1.
    BigInteger.ONE = ONE;
    var M_ONE = new BigInteger(ONE._d, -1, CONSTRUCT);
    // Constant: M_ONE
    // <BigInteger> -1.
    BigInteger.M_ONE = M_ONE;
    // Constant: _0
    // Shortcut for <ZERO>.
    BigInteger._0 = ZERO;
    // Constant: _1
    // Shortcut for <ONE>.
    BigInteger._1 = ONE;
    /*
        Constant: small
        Array of <BigIntegers> from 0 to 36.
        These are used internally for parsing, but useful when you need a "small"
        <BigInteger>.
        See Also:
            <ZERO>, <ONE>, <_0>, <_1>
    */
    BigInteger.small = [
        ZERO,
        ONE,
        /* Assuming BigInteger_base > 36 */
        new BigInteger([2], 1, CONSTRUCT),
        new BigInteger([3], 1, CONSTRUCT),
        new BigInteger([4], 1, CONSTRUCT),
        new BigInteger([5], 1, CONSTRUCT),
        new BigInteger([6], 1, CONSTRUCT),
        new BigInteger([7], 1, CONSTRUCT),
        new BigInteger([8], 1, CONSTRUCT),
        new BigInteger([9], 1, CONSTRUCT),
        new BigInteger([10], 1, CONSTRUCT),
        new BigInteger([11], 1, CONSTRUCT),
        new BigInteger([12], 1, CONSTRUCT),
        new BigInteger([13], 1, CONSTRUCT),
        new BigInteger([14], 1, CONSTRUCT),
        new BigInteger([15], 1, CONSTRUCT),
        new BigInteger([16], 1, CONSTRUCT),
        new BigInteger([17], 1, CONSTRUCT),
        new BigInteger([18], 1, CONSTRUCT),
        new BigInteger([19], 1, CONSTRUCT),
        new BigInteger([20], 1, CONSTRUCT),
        new BigInteger([21], 1, CONSTRUCT),
        new BigInteger([22], 1, CONSTRUCT),
        new BigInteger([23], 1, CONSTRUCT),
        new BigInteger([24], 1, CONSTRUCT),
        new BigInteger([25], 1, CONSTRUCT),
        new BigInteger([26], 1, CONSTRUCT),
        new BigInteger([27], 1, CONSTRUCT),
        new BigInteger([28], 1, CONSTRUCT),
        new BigInteger([29], 1, CONSTRUCT),
        new BigInteger([30], 1, CONSTRUCT),
        new BigInteger([31], 1, CONSTRUCT),
        new BigInteger([32], 1, CONSTRUCT),
        new BigInteger([33], 1, CONSTRUCT),
        new BigInteger([34], 1, CONSTRUCT),
        new BigInteger([35], 1, CONSTRUCT),
        new BigInteger([36], 1, CONSTRUCT)
    ];
    // Used for parsing/radix conversion
    BigInteger.digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    /*
        Method: toString
        Convert a <BigInteger> to a string.
        When *base* is greater than 10, letters are upper case.
        Parameters:
            base - Optional base to represent the number in (default is base 10).
                   Must be between 2 and 36 inclusive, or an Error will be thrown.
        Returns:
            The string representation of the <BigInteger>.
    */
    BigInteger.prototype.toString = function (base) {
        base = +base || 10;
        if (base < 2 || base > 36) {
            throw new Error("illegal radix " + base + ".");
        }
        if (this._s === 0) {
            return "0";
        }
        if (base === 10) {
            var str = this._s < 0 ? "-" : "";
            str += this._d[this._d.length - 1].toString();
            for (var i = this._d.length - 2; i >= 0; i--) {
                var group = this._d[i].toString();
                while (group.length < BigInteger_base_log10)
                    group = '0' + group;
                str += group;
            }
            return str;
        }
        else {
            var numerals = BigInteger.digits;
            base = BigInteger.small[base];
            var sign = this._s;
            var n = this.abs();
            var digits = [];
            var digit;
            while (n._s !== 0) {
                var divmod = n.divRem(base);
                n = divmod[0];
                digit = divmod[1];
                // TODO: This could be changed to unshift instead of reversing at the end.
                // Benchmark both to compare speeds.
                digits.push(numerals[digit.valueOf()]);
            }
            return (sign < 0 ? "-" : "") + digits.reverse().join("");
        }
    };
    // Verify strings for parsing
    BigInteger.radixRegex = [
        /^$/,
        /^$/,
        /^[01]*$/,
        /^[012]*$/,
        /^[0-3]*$/,
        /^[0-4]*$/,
        /^[0-5]*$/,
        /^[0-6]*$/,
        /^[0-7]*$/,
        /^[0-8]*$/,
        /^[0-9]*$/,
        /^[0-9aA]*$/,
        /^[0-9abAB]*$/,
        /^[0-9abcABC]*$/,
        /^[0-9a-dA-D]*$/,
        /^[0-9a-eA-E]*$/,
        /^[0-9a-fA-F]*$/,
        /^[0-9a-gA-G]*$/,
        /^[0-9a-hA-H]*$/,
        /^[0-9a-iA-I]*$/,
        /^[0-9a-jA-J]*$/,
        /^[0-9a-kA-K]*$/,
        /^[0-9a-lA-L]*$/,
        /^[0-9a-mA-M]*$/,
        /^[0-9a-nA-N]*$/,
        /^[0-9a-oA-O]*$/,
        /^[0-9a-pA-P]*$/,
        /^[0-9a-qA-Q]*$/,
        /^[0-9a-rA-R]*$/,
        /^[0-9a-sA-S]*$/,
        /^[0-9a-tA-T]*$/,
        /^[0-9a-uA-U]*$/,
        /^[0-9a-vA-V]*$/,
        /^[0-9a-wA-W]*$/,
        /^[0-9a-xA-X]*$/,
        /^[0-9a-yA-Y]*$/,
        /^[0-9a-zA-Z]*$/
    ];
    /*
        Function: parse
        Parse a string into a <BigInteger>.
        *base* is optional but, if provided, must be from 2 to 36 inclusive. If
        *base* is not provided, it will be guessed based on the leading characters
        of *s* as follows:
        - "0x" or "0X": *base* = 16
        - "0c" or "0C": *base* = 8
        - "0b" or "0B": *base* = 2
        - else: *base* = 10
        If no base is provided, or *base* is 10, the number can be in exponential
        form. For example, these are all valid:
        > BigInteger.parse("1e9");              // Same as "1000000000"
        > BigInteger.parse("1.234*10^3");       // Same as 1234
        > BigInteger.parse("56789 * 10 ** -2"); // Same as 567
        If any characters fall outside the range defined by the radix, an exception
        will be thrown.
        Parameters:
            s - The string to parse.
            base - Optional radix (default is to guess based on *s*).
        Returns:
            a <BigInteger> instance.
    */
    BigInteger.parse = function (s, base) {
        // Expands a number in exponential form to decimal form.
        // expandExponential("-13.441*10^5") === "1344100";
        // expandExponential("1.12300e-1") === "0.112300";
        // expandExponential(1000000000000000000000000000000) === "1000000000000000000000000000000";
        function expandExponential(str) {
            str = str.replace(/\s*[*xX]\s*10\s*(\^|\*\*)\s*/, "e");
            return str.replace(/^([+\-])?(\d+)\.?(\d*)[eE]([+\-]?\d+)$/, function (x, s, n, f, c) {
                c = +c;
                var l = c < 0;
                var i = n.length + c;
                x = (l ? n : f).length;
                c = ((c = Math.abs(c)) >= x ? c - x + l : 0);
                var z = (new Array(c + 1)).join("0");
                var r = n + f;
                return (s || "") + (l ? r = z + r : r += z).substr(0, i += l ? z.length : 0) + (i < r.length ? "." + r.substr(i) : "");
            });
        }
        s = s.toString();
        if (typeof base === "undefined" || +base === 10) {
            s = expandExponential(s);
        }
        var prefixRE;
        if (typeof base === "undefined") {
            prefixRE = '0[xcb]';
        }
        else if (base == 16) {
            prefixRE = '0x';
        }
        else if (base == 8) {
            prefixRE = '0c';
        }
        else if (base == 2) {
            prefixRE = '0b';
        }
        else {
            prefixRE = '';
        }
        var parts = new RegExp('^([+\\-]?)(' + prefixRE + ')?([0-9a-z]*)(?:\\.\\d*)?$', 'i').exec(s);
        if (parts) {
            var sign = parts[1] || "+";
            var baseSection = parts[2] || "";
            var digits = parts[3] || "";
            if (typeof base === "undefined") {
                // Guess base
                if (baseSection === "0x" || baseSection === "0X") { // Hex
                    base = 16;
                }
                else if (baseSection === "0c" || baseSection === "0C") { // Octal
                    base = 8;
                }
                else if (baseSection === "0b" || baseSection === "0B") { // Binary
                    base = 2;
                }
                else {
                    base = 10;
                }
            }
            else if (base < 2 || base > 36) {
                throw new Error("Illegal radix " + base + ".");
            }
            base = +base;
            // Check for digits outside the range
            if (!(BigInteger.radixRegex[base].test(digits))) {
                throw new Error("Bad digit for radix " + base);
            }
            // Strip leading zeros, and convert to array
            digits = digits.replace(/^0+/, "").split("");
            if (digits.length === 0) {
                return ZERO;
            }
            // Get the sign (we know it's not zero)
            sign = (sign === "-") ? -1 : 1;
            // Optimize 10
            if (base == 10) {
                var d = [];
                while (digits.length >= BigInteger_base_log10) {
                    d.push(parseInt(digits.splice(digits.length - BigInteger.base_log10, BigInteger.base_log10).join(''), 10));
                }
                d.push(parseInt(digits.join(''), 10));
                return new BigInteger(d, sign, CONSTRUCT);
            }
            // Do the conversion
            var d = ZERO;
            base = BigInteger.small[base];
            var small = BigInteger.small;
            for (var i = 0; i < digits.length; i++) {
                d = d.multiply(base).add(small[parseInt(digits[i], 36)]);
            }
            return new BigInteger(d._d, sign, CONSTRUCT);
        }
        else {
            throw new Error("Invalid BigInteger format: " + s);
        }
    };
    /*
        Function: add
        Add two <BigIntegers>.
        Parameters:
            n - The number to add to *this*. Will be converted to a <BigInteger>.
        Returns:
            The numbers added together.
        See Also:
            <subtract>, <multiply>, <quotient>, <next>
    */
    BigInteger.prototype.add = function (n) {
        if (this._s === 0) {
            return BigInteger(n);
        }
        n = BigInteger(n);
        if (n._s === 0) {
            return this;
        }
        if (this._s !== n._s) {
            n = n.negate();
            return this.subtract(n);
        }
        var a = this._d;
        var b = n._d;
        var al = a.length;
        var bl = b.length;
        var sum = new Array(Math.max(al, bl) + 1);
        var size = Math.min(al, bl);
        var carry = 0;
        var digit;
        for (var i = 0; i < size; i++) {
            digit = a[i] + b[i] + carry;
            sum[i] = digit % BigInteger_base;
            carry = (digit / BigInteger_base) | 0;
        }
        if (bl > al) {
            a = b;
            al = bl;
        }
        for (i = size; carry && i < al; i++) {
            digit = a[i] + carry;
            sum[i] = digit % BigInteger_base;
            carry = (digit / BigInteger_base) | 0;
        }
        if (carry) {
            sum[i] = carry;
        }
        for (; i < al; i++) {
            sum[i] = a[i];
        }
        return new BigInteger(sum, this._s, CONSTRUCT);
    };
    /*
        Function: negate
        Get the additive inverse of a <BigInteger>.
        Returns:
            A <BigInteger> with the same magnatude, but with the opposite sign.
        See Also:
            <abs>
    */
    BigInteger.prototype.negate = function () {
        return new BigInteger(this._d, (-this._s) | 0, CONSTRUCT);
    };
    /*
        Function: abs
        Get the absolute value of a <BigInteger>.
        Returns:
            A <BigInteger> with the same magnatude, but always positive (or zero).
        See Also:
            <negate>
    */
    BigInteger.prototype.abs = function () {
        return (this._s < 0) ? this.negate() : this;
    };
    /*
        Function: subtract
        Subtract two <BigIntegers>.
        Parameters:
            n - The number to subtract from *this*. Will be converted to a <BigInteger>.
        Returns:
            The *n* subtracted from *this*.
        See Also:
            <add>, <multiply>, <quotient>, <prev>
    */
    BigInteger.prototype.subtract = function (n) {
        if (this._s === 0) {
            return BigInteger(n).negate();
        }
        n = BigInteger(n);
        if (n._s === 0) {
            return this;
        }
        if (this._s !== n._s) {
            n = n.negate();
            return this.add(n);
        }
        var m = this;
        // negative - negative => -|a| - -|b| => -|a| + |b| => |b| - |a|
        if (this._s < 0) {
            m = new BigInteger(n._d, 1, CONSTRUCT);
            n = new BigInteger(this._d, 1, CONSTRUCT);
        }
        // Both are positive => a - b
        var sign = m.compareAbs(n);
        if (sign === 0) {
            return ZERO;
        }
        else if (sign < 0) {
            // swap m and n
            var t = n;
            n = m;
            m = t;
        }
        // a > b
        var a = m._d;
        var b = n._d;
        var al = a.length;
        var bl = b.length;
        var diff = new Array(al); // al >= bl since a > b
        var borrow = 0;
        var i;
        var digit;
        for (i = 0; i < bl; i++) {
            digit = a[i] - borrow - b[i];
            if (digit < 0) {
                digit += BigInteger_base;
                borrow = 1;
            }
            else {
                borrow = 0;
            }
            diff[i] = digit;
        }
        for (i = bl; i < al; i++) {
            digit = a[i] - borrow;
            if (digit < 0) {
                digit += BigInteger_base;
            }
            else {
                diff[i++] = digit;
                break;
            }
            diff[i] = digit;
        }
        for (; i < al; i++) {
            diff[i] = a[i];
        }
        return new BigInteger(diff, sign, CONSTRUCT);
    };
    (function () {
        function addOne(n, sign) {
            var a = n._d;
            var sum = a.slice();
            var carry = true;
            var i = 0;
            while (true) {
                var digit = (a[i] || 0) + 1;
                sum[i] = digit % BigInteger_base;
                if (digit <= BigInteger_base - 1) {
                    break;
                }
                ++i;
            }
            return new BigInteger(sum, sign, CONSTRUCT);
        }
        function subtractOne(n, sign) {
            var a = n._d;
            var sum = a.slice();
            var borrow = true;
            var i = 0;
            while (true) {
                var digit = (a[i] || 0) - 1;
                if (digit < 0) {
                    sum[i] = digit + BigInteger_base;
                }
                else {
                    sum[i] = digit;
                    break;
                }
                ++i;
            }
            return new BigInteger(sum, sign, CONSTRUCT);
        }
        /*
            Function: next
            Get the next <BigInteger> (add one).
            Returns:
                *this* + 1.
            See Also:
                <add>, <prev>
        */
        BigInteger.prototype.next = function () {
            switch (this._s) {
                case 0:
                    return ONE;
                case -1:
                    return subtractOne(this, -1);
                // case 1:
                default:
                    return addOne(this, 1);
            }
        };
        /*
            Function: prev
            Get the previous <BigInteger> (subtract one).
            Returns:
                *this* - 1.
            See Also:
                <next>, <subtract>
        */
        BigInteger.prototype.prev = function () {
            switch (this._s) {
                case 0:
                    return M_ONE;
                case -1:
                    return addOne(this, -1);
                // case 1:
                default:
                    return subtractOne(this, 1);
            }
        };
    })();
    /*
        Function: compareAbs
        Compare the absolute value of two <BigIntegers>.
        Calling <compareAbs> is faster than calling <abs> twice, then <compare>.
        Parameters:
            n - The number to compare to *this*. Will be converted to a <BigInteger>.
        Returns:
            -1, 0, or +1 if *|this|* is less than, equal to, or greater than *|n|*.
        See Also:
            <compare>, <abs>
    */
    BigInteger.prototype.compareAbs = function (n) {
        if (this === n) {
            return 0;
        }
        if (!(n instanceof BigInteger)) {
            if (!isFinite(n)) {
                return (isNaN(n) ? n : -1);
            }
            n = BigInteger(n);
        }
        if (this._s === 0) {
            return (n._s !== 0) ? -1 : 0;
        }
        if (n._s === 0) {
            return 1;
        }
        var l = this._d.length;
        var nl = n._d.length;
        if (l < nl) {
            return -1;
        }
        else if (l > nl) {
            return 1;
        }
        var a = this._d;
        var b = n._d;
        for (var i = l - 1; i >= 0; i--) {
            if (a[i] !== b[i]) {
                return a[i] < b[i] ? -1 : 1;
            }
        }
        return 0;
    };
    /*
        Function: compare
        Compare two <BigIntegers>.
        Parameters:
            n - The number to compare to *this*. Will be converted to a <BigInteger>.
        Returns:
            -1, 0, or +1 if *this* is less than, equal to, or greater than *n*.
        See Also:
            <compareAbs>, <isPositive>, <isNegative>, <isUnit>
    */
    BigInteger.prototype.compare = function (n) {
        if (this === n) {
            return 0;
        }
        n = BigInteger(n);
        if (this._s === 0) {
            return -n._s;
        }
        if (this._s === n._s) { // both positive or both negative
            var cmp = this.compareAbs(n);
            return cmp * this._s;
        }
        else {
            return this._s;
        }
    };
    /*
        Function: isUnit
        Return true iff *this* is either 1 or -1.
        Returns:
            true if *this* compares equal to <BigInteger.ONE> or <BigInteger.M_ONE>.
        See Also:
            <isZero>, <isNegative>, <isPositive>, <compareAbs>, <compare>,
            <BigInteger.ONE>, <BigInteger.M_ONE>
    */
    BigInteger.prototype.isUnit = function () {
        return this === ONE ||
            this === M_ONE ||
            (this._d.length === 1 && this._d[0] === 1);
    };
    /*
        Function: multiply
        Multiply two <BigIntegers>.
        Parameters:
            n - The number to multiply *this* by. Will be converted to a
            <BigInteger>.
        Returns:
            The numbers multiplied together.
        See Also:
            <add>, <subtract>, <quotient>, <square>
    */
    BigInteger.prototype.multiply = function (n) {
        // TODO: Consider adding Karatsuba multiplication for large numbers
        if (this._s === 0) {
            return ZERO;
        }
        n = BigInteger(n);
        if (n._s === 0) {
            return ZERO;
        }
        if (this.isUnit()) {
            if (this._s < 0) {
                return n.negate();
            }
            return n;
        }
        if (n.isUnit()) {
            if (n._s < 0) {
                return this.negate();
            }
            return this;
        }
        if (this === n) {
            return this.square();
        }
        var r = (this._d.length >= n._d.length);
        var a = (r ? this : n)._d; // a will be longer than b
        var b = (r ? n : this)._d;
        var al = a.length;
        var bl = b.length;
        var pl = al + bl;
        var partial = new Array(pl);
        var i;
        for (i = 0; i < pl; i++) {
            partial[i] = 0;
        }
        for (i = 0; i < bl; i++) {
            var carry = 0;
            var bi = b[i];
            var jlimit = al + i;
            var digit;
            for (var j = i; j < jlimit; j++) {
                digit = partial[j] + bi * a[j - i] + carry;
                carry = (digit / BigInteger_base) | 0;
                partial[j] = (digit % BigInteger_base) | 0;
            }
            if (carry) {
                digit = partial[j] + carry;
                carry = (digit / BigInteger_base) | 0;
                partial[j] = digit % BigInteger_base;
            }
        }
        return new BigInteger(partial, this._s * n._s, CONSTRUCT);
    };
    // Multiply a BigInteger by a single-digit native number
    // Assumes that this and n are >= 0
    // This is not really intended to be used outside the library itself
    BigInteger.prototype.multiplySingleDigit = function (n) {
        if (n === 0 || this._s === 0) {
            return ZERO;
        }
        if (n === 1) {
            return this;
        }
        var digit;
        if (this._d.length === 1) {
            digit = this._d[0] * n;
            if (digit >= BigInteger_base) {
                return new BigInteger([(digit % BigInteger_base) | 0,
                    (digit / BigInteger_base) | 0], 1, CONSTRUCT);
            }
            return new BigInteger([digit], 1, CONSTRUCT);
        }
        if (n === 2) {
            return this.add(this);
        }
        if (this.isUnit()) {
            return new BigInteger([n], 1, CONSTRUCT);
        }
        var a = this._d;
        var al = a.length;
        var pl = al + 1;
        var partial = new Array(pl);
        for (var i = 0; i < pl; i++) {
            partial[i] = 0;
        }
        var carry = 0;
        for (var j = 0; j < al; j++) {
            digit = n * a[j] + carry;
            carry = (digit / BigInteger_base) | 0;
            partial[j] = (digit % BigInteger_base) | 0;
        }
        if (carry) {
            partial[j] = carry;
        }
        return new BigInteger(partial, 1, CONSTRUCT);
    };
    /*
        Function: square
        Multiply a <BigInteger> by itself.
        This is slightly faster than regular multiplication, since it removes the
        duplicated multiplcations.
        Returns:
            > this.multiply(this)
        See Also:
            <multiply>
    */
    BigInteger.prototype.square = function () {
        // Normally, squaring a 10-digit number would take 100 multiplications.
        // Of these 10 are unique diagonals, of the remaining 90 (100-10), 45 are repeated.
        // This procedure saves (N*(N-1))/2 multiplications, (e.g., 45 of 100 multiplies).
        // Based on code by Gary Darby, Intellitech Systems Inc., www.DelphiForFun.org
        if (this._s === 0) {
            return ZERO;
        }
        if (this.isUnit()) {
            return ONE;
        }
        var digits = this._d;
        var length = digits.length;
        var imult1 = new Array(length + length + 1);
        var product, carry, k;
        var i;
        // Calculate diagonal
        for (i = 0; i < length; i++) {
            k = i * 2;
            product = digits[i] * digits[i];
            carry = (product / BigInteger_base) | 0;
            imult1[k] = product % BigInteger_base;
            imult1[k + 1] = carry;
        }
        // Calculate repeating part
        for (i = 0; i < length; i++) {
            carry = 0;
            k = i * 2 + 1;
            for (var j = i + 1; j < length; j++, k++) {
                product = digits[j] * digits[i] * 2 + imult1[k] + carry;
                carry = (product / BigInteger_base) | 0;
                imult1[k] = product % BigInteger_base;
            }
            k = length + i;
            var digit = carry + imult1[k];
            carry = (digit / BigInteger_base) | 0;
            imult1[k] = digit % BigInteger_base;
            imult1[k + 1] += carry;
        }
        return new BigInteger(imult1, 1, CONSTRUCT);
    };
    /*
        Function: quotient
        Divide two <BigIntegers> and truncate towards zero.
        <quotient> throws an exception if *n* is zero.
        Parameters:
            n - The number to divide *this* by. Will be converted to a <BigInteger>.
        Returns:
            The *this* / *n*, truncated to an integer.
        See Also:
            <add>, <subtract>, <multiply>, <divRem>, <remainder>
    */
    BigInteger.prototype.quotient = function (n) {
        return this.divRem(n)[0];
    };
    /*
        Function: divide
        Deprecated synonym for <quotient>.
    */
    BigInteger.prototype.divide = BigInteger.prototype.quotient;
    /*
        Function: remainder
        Calculate the remainder of two <BigIntegers>.
        <remainder> throws an exception if *n* is zero.
        Parameters:
            n - The remainder after *this* is divided *this* by *n*. Will be
                converted to a <BigInteger>.
        Returns:
            *this* % *n*.
        See Also:
            <divRem>, <quotient>
    */
    BigInteger.prototype.remainder = function (n) {
        return this.divRem(n)[1];
    };
    /*
        Function: divRem
        Calculate the integer quotient and remainder of two <BigIntegers>.
        <divRem> throws an exception if *n* is zero.
        Parameters:
            n - The number to divide *this* by. Will be converted to a <BigInteger>.
        Returns:
            A two-element array containing the quotient and the remainder.
            > a.divRem(b)
            is exactly equivalent to
            > [a.quotient(b), a.remainder(b)]
            except it is faster, because they are calculated at the same time.
        See Also:
            <quotient>, <remainder>
    */
    BigInteger.prototype.divRem = function (n) {
        n = BigInteger(n);
        if (n._s === 0) {
            throw new Error("Divide by zero");
        }
        if (this._s === 0) {
            return [ZERO, ZERO];
        }
        if (n._d.length === 1) {
            return this.divRemSmall(n._s * n._d[0]);
        }
        // Test for easy cases -- |n1| <= |n2|
        switch (this.compareAbs(n)) {
            case 0: // n1 == n2
                return [this._s === n._s ? ONE : M_ONE, ZERO];
            case -1: // |n1| < |n2|
                return [ZERO, this];
        }
        var sign = this._s * n._s;
        var a = n.abs();
        var b_digits = this._d;
        var b_index = b_digits.length;
        var digits = n._d.length;
        var quot = [];
        var guess;
        var part = new BigInteger([], 0, CONSTRUCT);
        while (b_index) {
            part._d.unshift(b_digits[--b_index]);
            part = new BigInteger(part._d, 1, CONSTRUCT);
            if (part.compareAbs(n) < 0) {
                quot.push(0);
                continue;
            }
            if (part._s === 0) {
                guess = 0;
            }
            else {
                var xlen = part._d.length, ylen = a._d.length;
                var highx = part._d[xlen - 1] * BigInteger_base + part._d[xlen - 2];
                var highy = a._d[ylen - 1] * BigInteger_base + a._d[ylen - 2];
                if (part._d.length > a._d.length) {
                    // The length of part._d can either match a._d length,
                    // or exceed it by one.
                    highx = (highx + 1) * BigInteger_base;
                }
                guess = Math.ceil(highx / highy);
            }
            do {
                var check = a.multiplySingleDigit(guess);
                if (check.compareAbs(part) <= 0) {
                    break;
                }
                guess--;
            } while (guess);
            quot.push(guess);
            if (!guess) {
                continue;
            }
            var diff = part.subtract(check);
            part._d = diff._d.slice();
        }
        return [new BigInteger(quot.reverse(), sign, CONSTRUCT),
            new BigInteger(part._d, this._s, CONSTRUCT)];
    };
    // Throws an exception if n is outside of (-BigInteger.base, -1] or
    // [1, BigInteger.base).  It's not necessary to call this, since the
    // other division functions will call it if they are able to.
    BigInteger.prototype.divRemSmall = function (n) {
        var r;
        n = +n;
        if (n === 0) {
            throw new Error("Divide by zero");
        }
        var n_s = n < 0 ? -1 : 1;
        var sign = this._s * n_s;
        n = Math.abs(n);
        if (n < 1 || n >= BigInteger_base) {
            throw new Error("Argument out of range");
        }
        if (this._s === 0) {
            return [ZERO, ZERO];
        }
        if (n === 1 || n === -1) {
            return [(sign === 1) ? this.abs() : new BigInteger(this._d, sign, CONSTRUCT), ZERO];
        }
        // 2 <= n < BigInteger_base
        // divide a single digit by a single digit
        if (this._d.length === 1) {
            var q = new BigInteger([(this._d[0] / n) | 0], 1, CONSTRUCT);
            r = new BigInteger([(this._d[0] % n) | 0], 1, CONSTRUCT);
            if (sign < 0) {
                q = q.negate();
            }
            if (this._s < 0) {
                r = r.negate();
            }
            return [q, r];
        }
        var digits = this._d.slice();
        var quot = new Array(digits.length);
        var part = 0;
        var diff = 0;
        var i = 0;
        var guess;
        while (digits.length) {
            part = part * BigInteger_base + digits[digits.length - 1];
            if (part < n) {
                quot[i++] = 0;
                digits.pop();
                diff = BigInteger_base * diff + part;
                continue;
            }
            if (part === 0) {
                guess = 0;
            }
            else {
                guess = (part / n) | 0;
            }
            var check = n * guess;
            diff = part - check;
            quot[i++] = guess;
            if (!guess) {
                digits.pop();
                continue;
            }
            digits.pop();
            part = diff;
        }
        r = new BigInteger([diff], 1, CONSTRUCT);
        if (this._s < 0) {
            r = r.negate();
        }
        return [new BigInteger(quot.reverse(), sign, CONSTRUCT), r];
    };
    /*
        Function: isEven
        Return true iff *this* is divisible by two.
        Note that <BigInteger.ZERO> is even.
        Returns:
            true if *this* is even, false otherwise.
        See Also:
            <isOdd>
    */
    BigInteger.prototype.isEven = function () {
        var digits = this._d;
        return this._s === 0 || digits.length === 0 || (digits[0] % 2) === 0;
    };
    /*
        Function: isOdd
        Return true iff *this* is not divisible by two.
        Returns:
            true if *this* is odd, false otherwise.
        See Also:
            <isEven>
    */
    BigInteger.prototype.isOdd = function () {
        return !this.isEven();
    };
    /*
        Function: sign
        Get the sign of a <BigInteger>.
        Returns:
            * -1 if *this* < 0
            * 0 if *this* == 0
            * +1 if *this* > 0
        See Also:
            <isZero>, <isPositive>, <isNegative>, <compare>, <BigInteger.ZERO>
    */
    BigInteger.prototype.sign = function () {
        return this._s;
    };
    /*
        Function: isPositive
        Return true iff *this* > 0.
        Returns:
            true if *this*.compare(<BigInteger.ZERO>) == 1.
        See Also:
            <sign>, <isZero>, <isNegative>, <isUnit>, <compare>, <BigInteger.ZERO>
    */
    BigInteger.prototype.isPositive = function () {
        return this._s > 0;
    };
    /*
        Function: isNegative
        Return true iff *this* < 0.
        Returns:
            true if *this*.compare(<BigInteger.ZERO>) == -1.
        See Also:
            <sign>, <isPositive>, <isZero>, <isUnit>, <compare>, <BigInteger.ZERO>
    */
    BigInteger.prototype.isNegative = function () {
        return this._s < 0;
    };
    /*
        Function: isZero
        Return true iff *this* == 0.
        Returns:
            true if *this*.compare(<BigInteger.ZERO>) == 0.
        See Also:
            <sign>, <isPositive>, <isNegative>, <isUnit>, <BigInteger.ZERO>
    */
    BigInteger.prototype.isZero = function () {
        return this._s === 0;
    };
    /*
        Function: exp10
        Multiply a <BigInteger> by a power of 10.
        This is equivalent to, but faster than
        > if (n >= 0) {
        >     return this.multiply(BigInteger("1e" + n));
        > }
        > else { // n <= 0
        >     return this.quotient(BigInteger("1e" + -n));
        > }
        Parameters:
            n - The power of 10 to multiply *this* by. *n* is converted to a
            javascipt number and must be no greater than <BigInteger.MAX_EXP>
            (0x7FFFFFFF), or an exception will be thrown.
        Returns:
            *this* * (10 ** *n*), truncated to an integer if necessary.
        See Also:
            <pow>, <multiply>
    */
    BigInteger.prototype.exp10 = function (n) {
        n = +n;
        if (n === 0) {
            return this;
        }
        if (Math.abs(n) > Number(MAX_EXP)) {
            throw new Error("exponent too large in BigInteger.exp10");
        }
        // Optimization for this == 0. This also keeps us from having to trim zeros in the positive n case
        if (this._s === 0) {
            return ZERO;
        }
        if (n > 0) {
            var k = new BigInteger(this._d.slice(), this._s, CONSTRUCT);
            for (; n >= BigInteger_base_log10; n -= BigInteger_base_log10) {
                k._d.unshift(0);
            }
            if (n == 0)
                return k;
            k._s = 1;
            k = k.multiplySingleDigit(Math.pow(10, n));
            return (this._s < 0 ? k.negate() : k);
        }
        else if (-n >= this._d.length * BigInteger_base_log10) {
            return ZERO;
        }
        else {
            var k = new BigInteger(this._d.slice(), this._s, CONSTRUCT);
            for (n = -n; n >= BigInteger_base_log10; n -= BigInteger_base_log10) {
                k._d.shift();
            }
            return (n == 0) ? k : k.divRemSmall(Math.pow(10, n))[0];
        }
    };
    /*
        Function: pow
        Raise a <BigInteger> to a power.
        In this implementation, 0**0 is 1.
        Parameters:
            n - The exponent to raise *this* by. *n* must be no greater than
            <BigInteger.MAX_EXP> (0x7FFFFFFF), or an exception will be thrown.
        Returns:
            *this* raised to the *nth* power.
        See Also:
            <modPow>
    */
    BigInteger.prototype.pow = function (n) {
        if (this.isUnit()) {
            if (this._s > 0) {
                return this;
            }
            else {
                return BigInteger(n).isOdd() ? this : this.negate();
            }
        }
        n = BigInteger(n);
        if (n._s === 0) {
            return ONE;
        }
        else if (n._s < 0) {
            if (this._s === 0) {
                throw new Error("Divide by zero");
            }
            else {
                return ZERO;
            }
        }
        if (this._s === 0) {
            return ZERO;
        }
        if (n.isUnit()) {
            return this;
        }
        if (n.compareAbs(MAX_EXP) > 0) {
            throw new Error("exponent too large in BigInteger.pow");
        }
        var x = this;
        var aux = ONE;
        var two = BigInteger.small[2];
        while (n.isPositive()) {
            if (n.isOdd()) {
                aux = aux.multiply(x);
                if (n.isUnit()) {
                    return aux;
                }
            }
            x = x.square();
            n = n.quotient(two);
        }
        return aux;
    };
    /*
        Function: modPow
        Raise a <BigInteger> to a power (mod m).
        Because it is reduced by a modulus, <modPow> is not limited by
        <BigInteger.MAX_EXP> like <pow>.
        Parameters:
            exponent - The exponent to raise *this* by. Must be positive.
            modulus - The modulus.
        Returns:
            *this* ^ *exponent* (mod *modulus*).
        See Also:
            <pow>, <mod>
    */
    BigInteger.prototype.modPow = function (exponent, modulus) {
        var result = ONE;
        var base = this;
        while (exponent.isPositive()) {
            if (exponent.isOdd()) {
                result = result.multiply(base).remainder(modulus);
            }
            exponent = exponent.quotient(BigInteger.small[2]);
            if (exponent.isPositive()) {
                base = base.square().remainder(modulus);
            }
        }
        return result;
    };
    /*
        Function: log
        Get the natural logarithm of a <BigInteger> as a native JavaScript number.
        This is equivalent to
        > Math.log(this.toJSValue())
        but handles values outside of the native number range.
        Returns:
            log( *this* )
        See Also:
            <toJSValue>
    */
    BigInteger.prototype.log = function () {
        switch (this._s) {
            case 0: return -Infinity;
            case -1: return NaN;
            default: // Fall through.
        }
        var l = this._d.length;
        if (l * BigInteger_base_log10 < 30) {
            return Math.log(this.valueOf());
        }
        var N = Math.ceil(30 / BigInteger_base_log10);
        var firstNdigits = this._d.slice(l - N);
        return Math.log((new BigInteger(firstNdigits, 1, CONSTRUCT)).valueOf()) + (l - N) * Math.log(BigInteger_base);
    };
    /*
        Function: valueOf
        Convert a <BigInteger> to a native JavaScript integer.
        This is called automatically by JavaScipt to convert a <BigInteger> to a
        native value.
        Returns:
            > parseInt(this.toString(), 10)
        See Also:
            <toString>, <toJSValue>
    */
    BigInteger.prototype.valueOf = function () {
        return parseInt(this.toString(), 10);
    };
    /*
        Function: toJSValue
        Convert a <BigInteger> to a native JavaScript integer.
        This is the same as valueOf, but more explicitly named.
        Returns:
            > parseInt(this.toString(), 10)
        See Also:
            <toString>, <valueOf>
    */
    BigInteger.prototype.toJSValue = function () {
        return parseInt(this.toString(), 10);
    };
    /*
     Function: lowVal
     Author: Lucas Jones
     */
    BigInteger.prototype.lowVal = function () {
        return this._d[0] || 0;
    };
    var MAX_EXP = BigInteger(0x7FFFFFFF);
    // Constant: MAX_EXP
    // The largest exponent allowed in <pow> and <exp10> (0x7FFFFFFF or 2147483647).
    BigInteger.MAX_EXP = MAX_EXP;
    (function () {
        function makeUnary(fn) {
            return function (a) {
                return fn.call(BigInteger(a));
            };
        }
        function makeBinary(fn) {
            return function (a, b) {
                return fn.call(BigInteger(a), BigInteger(b));
            };
        }
        function makeTrinary(fn) {
            return function (a, b, c) {
                return fn.call(BigInteger(a), BigInteger(b), BigInteger(c));
            };
        }
        (function () {
            var i, fn;
            var unary = "toJSValue,isEven,isOdd,sign,isZero,isNegative,abs,isUnit,square,negate,isPositive,toString,next,prev,log".split(",");
            var binary = "compare,remainder,divRem,subtract,add,quotient,divide,multiply,pow,compareAbs".split(",");
            var trinary = ["modPow"];
            for (i = 0; i < unary.length; i++) {
                fn = unary[i];
                BigInteger[fn] = makeUnary(BigInteger.prototype[fn]);
            }
            for (i = 0; i < binary.length; i++) {
                fn = binary[i];
                BigInteger[fn] = makeBinary(BigInteger.prototype[fn]);
            }
            for (i = 0; i < trinary.length; i++) {
                fn = trinary[i];
                BigInteger[fn] = makeTrinary(BigInteger.prototype[fn]);
            }
            BigInteger.exp10 = function (x, n) {
                return BigInteger(x).exp10(n);
            };
        })();
    })();
    exports.JSBigInt = BigInteger; // exports.BigInteger changed to exports.JSBigInt
})(typeof exports !== 'undefined' ? exports : this);

},{}],8:[function(require,module,exports){
(function (global,Buffer){(function (){
'use strict';
if (!global.Buffer) {
    global.Buffer = require('buffer').Buffer;
}
/**
 * Credits to https://github.com/cryptocoinjs/blake-hash
 */
Blake256.sigma = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    [14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3],
    [11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4],
    [7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8],
    [9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13],
    [2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9],
    [12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11],
    [13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10],
    [6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5],
    [10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    [14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3],
    [11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4],
    [7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8],
    [9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13],
    [2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9]
];
Blake256.u256 = [
    0x243f6a88, 0x85a308d3, 0x13198a2e, 0x03707344,
    0xa4093822, 0x299f31d0, 0x082efa98, 0xec4e6c89,
    0x452821e6, 0x38d01377, 0xbe5466cf, 0x34e90c6c,
    0xc0ac29b7, 0xc97c50dd, 0x3f84d5b5, 0xb5470917
];
Blake256.padding = Buffer.from([
    0x80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]);
Blake256.prototype._length_carry = function (arr) {
    for (var j = 0; j < arr.length; ++j) {
        if (arr[j] < 0x0100000000)
            break;
        arr[j] -= 0x0100000000;
        arr[j + 1] += 1;
    }
};
Blake256.prototype.update = function (data, encoding) {
    data = Buffer.from(data, encoding);
    var block = this._block;
    var offset = 0;
    while (this._blockOffset + data.length - offset >= block.length) {
        for (var i = this._blockOffset; i < block.length;)
            block[i++] = data[offset++];
        this._length[0] += block.length * 8;
        this._length_carry(this._length);
        this._compress();
        this._blockOffset = 0;
    }
    while (offset < data.length)
        block[this._blockOffset++] = data[offset++];
    return this;
};
var zo = Buffer.from([0x01]);
var oo = Buffer.from([0x81]);
function rot(x, n) {
    return ((x << (32 - n)) | (x >>> n)) >>> 0;
}
function g(v, m, i, a, b, c, d, e) {
    var sigma = Blake256.sigma;
    var u256 = Blake256.u256;
    v[a] = (v[a] + ((m[sigma[i][e]] ^ u256[sigma[i][e + 1]]) >>> 0) + v[b]) >>> 0;
    v[d] = rot(v[d] ^ v[a], 16);
    v[c] = (v[c] + v[d]) >>> 0;
    v[b] = rot(v[b] ^ v[c], 12);
    v[a] = (v[a] + ((m[sigma[i][e + 1]] ^ u256[sigma[i][e]]) >>> 0) + v[b]) >>> 0;
    v[d] = rot(v[d] ^ v[a], 8);
    v[c] = (v[c] + v[d]) >>> 0;
    v[b] = rot(v[b] ^ v[c], 7);
}
function Blake256() {
    this._h = [
        0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,
        0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19
    ];
    this._s = [0, 0, 0, 0];
    this._block = Buffer.allocUnsafe(64);
    this._blockOffset = 0;
    this._length = [0, 0];
    this._nullt = false;
    this._zo = zo;
    this._oo = oo;
}
Blake256.prototype._compress = function () {
    var u256 = Blake256.u256;
    var v = new Array(16);
    var m = new Array(16);
    var i;
    for (i = 0; i < 16; ++i)
        m[i] = this._block.readUInt32BE(i * 4);
    for (i = 0; i < 8; ++i)
        v[i] = this._h[i] >>> 0;
    for (i = 8; i < 12; ++i)
        v[i] = (this._s[i - 8] ^ u256[i - 8]) >>> 0;
    for (i = 12; i < 16; ++i)
        v[i] = u256[i - 8];
    if (!this._nullt) {
        v[12] = (v[12] ^ this._length[0]) >>> 0;
        v[13] = (v[13] ^ this._length[0]) >>> 0;
        v[14] = (v[14] ^ this._length[1]) >>> 0;
        v[15] = (v[15] ^ this._length[1]) >>> 0;
    }
    for (i = 0; i < 14; ++i) {
        /* column step */
        g(v, m, i, 0, 4, 8, 12, 0);
        g(v, m, i, 1, 5, 9, 13, 2);
        g(v, m, i, 2, 6, 10, 14, 4);
        g(v, m, i, 3, 7, 11, 15, 6);
        /* diagonal step */
        g(v, m, i, 0, 5, 10, 15, 8);
        g(v, m, i, 1, 6, 11, 12, 10);
        g(v, m, i, 2, 7, 8, 13, 12);
        g(v, m, i, 3, 4, 9, 14, 14);
    }
    for (i = 0; i < 16; ++i)
        this._h[i % 8] = (this._h[i % 8] ^ v[i]) >>> 0;
    for (i = 0; i < 8; ++i)
        this._h[i] = (this._h[i] ^ this._s[i % 4]) >>> 0;
};
Blake256.prototype._padding = function () {
    var lo = this._length[0] + this._blockOffset * 8;
    var hi = this._length[1];
    if (lo >= 0x0100000000) {
        lo -= 0x0100000000;
        hi += 1;
    }
    var msglen = Buffer.allocUnsafe(8);
    msglen.writeUInt32BE(hi, 0);
    msglen.writeUInt32BE(lo, 4);
    if (this._blockOffset === 55) {
        this._length[0] -= 8;
        this.update(this._oo);
    }
    else {
        if (this._blockOffset < 55) {
            if (this._blockOffset === 0)
                this._nullt = true;
            this._length[0] -= (55 - this._blockOffset) * 8;
            this.update(Blake256.padding.slice(0, 55 - this._blockOffset));
        }
        else {
            this._length[0] -= (64 - this._blockOffset) * 8;
            this.update(Blake256.padding.slice(0, 64 - this._blockOffset));
            this._length[0] -= 55 * 8;
            this.update(Blake256.padding.slice(1, 1 + 55));
            this._nullt = true;
        }
        this.update(this._zo);
        this._length[0] -= 8;
    }
    this._length[0] -= 64;
    this.update(msglen);
};
Blake256.prototype.digest = function (encoding) {
    this._padding();
    var buffer = Buffer.allocUnsafe(32);
    for (var i = 0; i < 8; ++i)
        buffer.writeUInt32BE(this._h[i], i * 4);
    return buffer.toString(encoding);
};
module.exports = Blake256;

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer)
},{"buffer":37}],9:[function(require,module,exports){
'use strict';
/**
 * Credits to https://github.com/emilbayes/blake2b
 *
 * Copyright (c) 2017, Emil Bay github@tixz.dk
 *
 * Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */
// 64-bit unsigned addition
// Sets v[a,a+1] += v[b,b+1]
// v should be a Uint32Array
function ADD64AA(v, a, b) {
    var o0 = v[a] + v[b];
    var o1 = v[a + 1] + v[b + 1];
    if (o0 >= 0x100000000) {
        o1++;
    }
    v[a] = o0;
    v[a + 1] = o1;
}
// 64-bit unsigned addition
// Sets v[a,a+1] += b
// b0 is the low 32 bits of b, b1 represents the high 32 bits
function ADD64AC(v, a, b0, b1) {
    var o0 = v[a] + b0;
    if (b0 < 0) {
        o0 += 0x100000000;
    }
    var o1 = v[a + 1] + b1;
    if (o0 >= 0x100000000) {
        o1++;
    }
    v[a] = o0;
    v[a + 1] = o1;
}
// Little-endian byte access
function B2B_GET32(arr, i) {
    return (arr[i] ^
        (arr[i + 1] << 8) ^
        (arr[i + 2] << 16) ^
        (arr[i + 3] << 24));
}
// G Mixing function
// The ROTRs are inlined for speed
function B2B_G(a, b, c, d, ix, iy) {
    var x0 = m[ix];
    var x1 = m[ix + 1];
    var y0 = m[iy];
    var y1 = m[iy + 1];
    ADD64AA(v, a, b); // v[a,a+1] += v[b,b+1] ... in JS we must store a uint64 as two uint32s
    ADD64AC(v, a, x0, x1); // v[a, a+1] += x ... x0 is the low 32 bits of x, x1 is the high 32 bits
    // v[d,d+1] = (v[d,d+1] xor v[a,a+1]) rotated to the right by 32 bits
    var xor0 = v[d] ^ v[a];
    var xor1 = v[d + 1] ^ v[a + 1];
    v[d] = xor1;
    v[d + 1] = xor0;
    ADD64AA(v, c, d);
    // v[b,b+1] = (v[b,b+1] xor v[c,c+1]) rotated right by 24 bits
    xor0 = v[b] ^ v[c];
    xor1 = v[b + 1] ^ v[c + 1];
    v[b] = (xor0 >>> 24) ^ (xor1 << 8);
    v[b + 1] = (xor1 >>> 24) ^ (xor0 << 8);
    ADD64AA(v, a, b);
    ADD64AC(v, a, y0, y1);
    // v[d,d+1] = (v[d,d+1] xor v[a,a+1]) rotated right by 16 bits
    xor0 = v[d] ^ v[a];
    xor1 = v[d + 1] ^ v[a + 1];
    v[d] = (xor0 >>> 16) ^ (xor1 << 16);
    v[d + 1] = (xor1 >>> 16) ^ (xor0 << 16);
    ADD64AA(v, c, d);
    // v[b,b+1] = (v[b,b+1] xor v[c,c+1]) rotated right by 63 bits
    xor0 = v[b] ^ v[c];
    xor1 = v[b + 1] ^ v[c + 1];
    v[b] = (xor1 >>> 31) ^ (xor0 << 1);
    v[b + 1] = (xor0 >>> 31) ^ (xor1 << 1);
}
// Initialization Vector
var BLAKE2B_IV32 = new Uint32Array([
    0xF3BCC908, 0x6A09E667, 0x84CAA73B, 0xBB67AE85,
    0xFE94F82B, 0x3C6EF372, 0x5F1D36F1, 0xA54FF53A,
    0xADE682D1, 0x510E527F, 0x2B3E6C1F, 0x9B05688C,
    0xFB41BD6B, 0x1F83D9AB, 0x137E2179, 0x5BE0CD19
]);
var SIGMA8 = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3,
    11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4,
    7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8,
    9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13,
    2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9,
    12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11,
    13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10,
    6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5,
    10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0,
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3
];
// These are offsets into a uint64 buffer.
// Multiply them all by 2 to make them offsets into a uint32 buffer,
// because this is Javascript and we don't have uint64s
var SIGMA82 = new Uint8Array(SIGMA8.map(function (x) { return x * 2; }));
// Compression function. 'last' flag indicates last block.
// Note we're representing 16 uint64s as 32 uint32s
var v = new Uint32Array(32);
var m = new Uint32Array(32);
function blake2bCompress(ctx, last) {
    var i = 0;
    // init work variables
    for (i = 0; i < 16; i++) {
        v[i] = ctx.h[i];
        v[i + 16] = BLAKE2B_IV32[i];
    }
    // low 64 bits of offset
    v[24] = v[24] ^ ctx.t;
    v[25] = v[25] ^ (ctx.t / 0x100000000);
    // high 64 bits not supported, offset may not be higher than 2**53-1
    // last block flag set ?
    if (last) {
        v[28] = ~v[28];
        v[29] = ~v[29];
    }
    // get little-endian words
    for (i = 0; i < 32; i++) {
        m[i] = B2B_GET32(ctx.b, 4 * i);
    }
    // twelve rounds of mixing
    for (i = 0; i < 12; i++) {
        B2B_G(0, 8, 16, 24, SIGMA82[i * 16 + 0], SIGMA82[i * 16 + 1]);
        B2B_G(2, 10, 18, 26, SIGMA82[i * 16 + 2], SIGMA82[i * 16 + 3]);
        B2B_G(4, 12, 20, 28, SIGMA82[i * 16 + 4], SIGMA82[i * 16 + 5]);
        B2B_G(6, 14, 22, 30, SIGMA82[i * 16 + 6], SIGMA82[i * 16 + 7]);
        B2B_G(0, 10, 20, 30, SIGMA82[i * 16 + 8], SIGMA82[i * 16 + 9]);
        B2B_G(2, 12, 22, 24, SIGMA82[i * 16 + 10], SIGMA82[i * 16 + 11]);
        B2B_G(4, 14, 16, 26, SIGMA82[i * 16 + 12], SIGMA82[i * 16 + 13]);
        B2B_G(6, 8, 18, 28, SIGMA82[i * 16 + 14], SIGMA82[i * 16 + 15]);
    }
    for (i = 0; i < 16; i++) {
        ctx.h[i] = ctx.h[i] ^ v[i] ^ v[i + 16];
    }
}
// reusable parameter_block
var parameter_block = new Uint8Array([
    0, 0, 0, 0, //  0: outlen, keylen, fanout, depth
    0, 0, 0, 0, //  4: leaf length, sequential mode
    0, 0, 0, 0, //  8: node offset
    0, 0, 0, 0, // 12: node offset
    0, 0, 0, 0, // 16: node depth, inner length, rfu
    0, 0, 0, 0, // 20: rfu
    0, 0, 0, 0, // 24: rfu
    0, 0, 0, 0, // 28: rfu
    0, 0, 0, 0, // 32: salt
    0, 0, 0, 0, // 36: salt
    0, 0, 0, 0, // 40: salt
    0, 0, 0, 0, // 44: salt
    0, 0, 0, 0, // 48: personal
    0, 0, 0, 0, // 52: personal
    0, 0, 0, 0, // 56: personal
    0, 0, 0, 0 // 60: personal
]);
// Creates a BLAKE2b hashing context
// Requires an output length between 1 and 64 bytes
// Takes an optional Uint8Array key
function Blake2b(outlen, key, salt, personal) {
    // zero out parameter_block before usage
    parameter_block.fill(0);
    // state, 'param block'
    this.b = new Uint8Array(128);
    this.h = new Uint32Array(16);
    this.t = 0; // input count
    this.c = 0; // pointer within buffer
    this.outlen = outlen; // output length in bytes
    parameter_block[0] = outlen;
    if (key)
        parameter_block[1] = key.length;
    parameter_block[2] = 1; // fanout
    parameter_block[3] = 1; // depth
    if (salt)
        parameter_block.set(salt, 32);
    if (personal)
        parameter_block.set(personal, 48);
    // initialize hash state
    for (var i = 0; i < 16; i++) {
        this.h[i] = BLAKE2B_IV32[i] ^ B2B_GET32(parameter_block, i * 4);
    }
    // key the hash, if applicable
    if (key) {
        blake2bUpdate(this, key);
        // at the end
        this.c = 128;
    }
}
Blake2b.prototype.update = function (input) {
    blake2bUpdate(this, input);
    return this;
};
Blake2b.prototype.digest = function (out) {
    var buf = (!out || out === 'binary' || out === 'hex') ? new Uint8Array(this.outlen) : out;
    blake2bFinal(this, buf);
    if (out === 'hex')
        return hexSlice(buf);
    return buf;
};
Blake2b.prototype.final = Blake2b.prototype.digest;
// Updates a BLAKE2b streaming hash
// Requires hash context and Uint8Array (byte array)
function blake2bUpdate(ctx, input) {
    for (var i = 0; i < input.length; i++) {
        if (ctx.c === 128) { // buffer full ?
            ctx.t += ctx.c; // add counters
            blake2bCompress(ctx, false); // compress (not last)
            ctx.c = 0; // counter to zero
        }
        ctx.b[ctx.c++] = input[i];
    }
}
// Completes a BLAKE2b streaming hash
// Returns a Uint8Array containing the message digest
function blake2bFinal(ctx, out) {
    ctx.t += ctx.c; // mark last block offset
    while (ctx.c < 128) { // fill up with zeros
        ctx.b[ctx.c++] = 0;
    }
    blake2bCompress(ctx, true); // final block flag = 1
    for (var i = 0; i < ctx.outlen; i++) {
        out[i] = ctx.h[i >> 2] >> (8 * (i & 3));
    }
    return out;
}
function hexSlice(buf) {
    var str = '';
    for (var i = 0; i < buf.length; i++)
        str += toHex(buf[i]);
    return str;
}
function toHex(n) {
    if (n < 16)
        return '0' + n.toString(16);
    return n.toString(16);
}
module.exports = Blake2b;

},{}],10:[function(require,module,exports){
"use strict";
var JSBigInt = require('./biginteger')['JSBigInt'];
/**
Copyright (c) 2017, moneroexamples

All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
this list of conditions and the following disclaimer in the documentation
and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors
may be used to endorse or promote products derived from this software without
specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

Parts of the project are originally copyright (c) 2014-2017, MyMonero.com
*/
var cnBase58 = (function () {
    var b58 = {};
    var alphabet_str = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    var alphabet = [];
    for (var i = 0; i < alphabet_str.length; i++) {
        alphabet.push(alphabet_str.charCodeAt(i));
    }
    var encoded_block_sizes = [0, 2, 3, 5, 6, 7, 9, 10, 11];
    var alphabet_size = alphabet.length;
    var full_block_size = 8;
    var full_encoded_block_size = 11;
    var UINT64_MAX = new JSBigInt(2).pow(64);
    function hextobin(hex) {
        if (hex.length % 2 !== 0)
            throw "Hex string has invalid length!";
        var res = new Uint8Array(hex.length / 2);
        for (var i = 0; i < hex.length / 2; ++i) {
            res[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
        }
        return res;
    }
    function bintohex(bin) {
        var out = [];
        for (var i = 0; i < bin.length; ++i) {
            out.push(("0" + bin[i].toString(16)).slice(-2));
        }
        return out.join("");
    }
    function strtobin(str) {
        var res = new Uint8Array(str.length);
        for (var i = 0; i < str.length; i++) {
            res[i] = str.charCodeAt(i);
        }
        return res;
    }
    function bintostr(bin) {
        var out = [];
        for (var i = 0; i < bin.length; i++) {
            out.push(String.fromCharCode(bin[i]));
        }
        return out.join("");
    }
    function uint8_be_to_64(data) {
        if (data.length < 1 || data.length > 8) {
            throw "Invalid input length";
        }
        var res = JSBigInt.ZERO;
        var twopow8 = new JSBigInt(2).pow(8);
        var i = 0;
        switch (9 - data.length) {
            case 1:
                res = res.add(data[i++]);
            case 2:
                res = res.multiply(twopow8).add(data[i++]);
            case 3:
                res = res.multiply(twopow8).add(data[i++]);
            case 4:
                res = res.multiply(twopow8).add(data[i++]);
            case 5:
                res = res.multiply(twopow8).add(data[i++]);
            case 6:
                res = res.multiply(twopow8).add(data[i++]);
            case 7:
                res = res.multiply(twopow8).add(data[i++]);
            case 8:
                res = res.multiply(twopow8).add(data[i++]);
                break;
            default:
                throw "Impossible condition";
        }
        return res;
    }
    function uint64_to_8be(num, size) {
        var res = new Uint8Array(size);
        if (size < 1 || size > 8) {
            throw "Invalid input length";
        }
        var twopow8 = new JSBigInt(2).pow(8);
        for (var i = size - 1; i >= 0; i--) {
            res[i] = num.remainder(twopow8).toJSValue();
            num = num.divide(twopow8);
        }
        return res;
    }
    b58.encode_block = function (data, buf, index) {
        if (data.length < 1 || data.length > full_encoded_block_size) {
            throw "Invalid block length: " + data.length;
        }
        var num = uint8_be_to_64(data);
        var i = encoded_block_sizes[data.length] - 1;
        // while num > 0
        while (num.compare(0) === 1) {
            var div = num.divRem(alphabet_size);
            // remainder = num % alphabet_size
            var remainder = div[1];
            // num = num / alphabet_size
            num = div[0];
            buf[index + i] = alphabet[remainder.toJSValue()];
            i--;
        }
        return buf;
    };
    b58.encode = function (hex) {
        var data = hextobin(hex);
        if (data.length === 0) {
            return "";
        }
        var full_block_count = Math.floor(data.length / full_block_size);
        var last_block_size = data.length % full_block_size;
        var res_size = full_block_count * full_encoded_block_size + encoded_block_sizes[last_block_size];
        var res = new Uint8Array(res_size);
        var i;
        for (i = 0; i < res_size; ++i) {
            res[i] = alphabet[0];
        }
        for (i = 0; i < full_block_count; i++) {
            res = b58.encode_block(data.subarray(i * full_block_size, i * full_block_size + full_block_size), res, i * full_encoded_block_size);
        }
        if (last_block_size > 0) {
            res = b58.encode_block(data.subarray(full_block_count * full_block_size, full_block_count * full_block_size + last_block_size), res, full_block_count * full_encoded_block_size);
        }
        return bintostr(res);
    };
    b58.decode_block = function (data, buf, index) {
        if (data.length < 1 || data.length > full_encoded_block_size) {
            throw "Invalid block length: " + data.length;
        }
        var res_size = encoded_block_sizes.indexOf(data.length);
        if (res_size <= 0) {
            throw "Invalid block size";
        }
        var res_num = new JSBigInt(0);
        var order = new JSBigInt(1);
        for (var i = data.length - 1; i >= 0; i--) {
            var digit = alphabet.indexOf(data[i]);
            if (digit < 0) {
                throw "Invalid symbol";
            }
            var product = order.multiply(digit).add(res_num);
            // if product > UINT64_MAX
            if (product.compare(UINT64_MAX) === 1) {
                throw "Overflow";
            }
            res_num = product;
            order = order.multiply(alphabet_size);
        }
        if (res_size < full_block_size && (new JSBigInt(2).pow(8 * res_size).compare(res_num) <= 0)) {
            throw "Overflow 2";
        }
        buf.set(uint64_to_8be(res_num, res_size), index);
        return buf;
    };
    b58.decode = function (enc) {
        enc = strtobin(enc);
        if (enc.length === 0) {
            return "";
        }
        var full_block_count = Math.floor(enc.length / full_encoded_block_size);
        var last_block_size = enc.length % full_encoded_block_size;
        var last_block_decoded_size = encoded_block_sizes.indexOf(last_block_size);
        if (last_block_decoded_size < 0) {
            throw "Invalid encoded length";
        }
        var data_size = full_block_count * full_block_size + last_block_decoded_size;
        var data = new Uint8Array(data_size);
        for (var i = 0; i < full_block_count; i++) {
            data = b58.decode_block(enc.subarray(i * full_encoded_block_size, i * full_encoded_block_size + full_encoded_block_size), data, i * full_block_size);
        }
        if (last_block_size > 0) {
            data = b58.decode_block(enc.subarray(full_block_count * full_encoded_block_size, full_block_count * full_encoded_block_size + last_block_size), data, full_block_count * full_block_size);
        }
        return bintohex(data);
    };
    return b58;
})();
module.exports = cnBase58;

},{"./biginteger":7}],11:[function(require,module,exports){
"use strict";
// Copyright (c) 2017, 2021 Pieter Wuille
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var bech32 = require('./bech32');
function convertbits(data, frombits, tobits, pad) {
    var acc = 0;
    var bits = 0;
    var ret = [];
    var maxv = (1 << tobits) - 1;
    for (var p = 0; p < data.length; ++p) {
        var value = data[p];
        if (value < 0 || (value >> frombits) !== 0) {
            return null;
        }
        acc = (acc << frombits) | value;
        bits += frombits;
        while (bits >= tobits) {
            bits -= tobits;
            ret.push((acc >> bits) & maxv);
        }
    }
    if (pad) {
        if (bits > 0) {
            ret.push((acc << (tobits - bits)) & maxv);
        }
    }
    else if (bits >= frombits || ((acc << (tobits - bits)) & maxv)) {
        return null;
    }
    return ret;
}
function decode(hrp, addr) {
    var bech32m = false;
    var dec = bech32.decode(addr, bech32.encodings.BECH32);
    if (dec === null) {
        dec = bech32.decode(addr, bech32.encodings.BECH32M);
        bech32m = true;
    }
    if (dec === null || dec.hrp !== hrp || dec.data.length < 1 || dec.data[0] > 16) {
        return null;
    }
    var res = convertbits(dec.data.slice(1), 5, 8, false);
    if (res === null || res.length < 2 || res.length > 40) {
        return null;
    }
    if (dec.data[0] === 0 && res.length !== 20 && res.length !== 32) {
        return null;
    }
    if (dec.data[0] === 0 && bech32m) {
        return null;
    }
    if (dec.data[0] !== 0 && !bech32m) {
        return null;
    }
    return { version: dec.data[0], program: res };
}
function encode(hrp, version, program) {
    var enc = bech32.encodings.BECH32;
    if (version > 0) {
        enc = bech32.encodings.BECH32M;
    }
    var ret = bech32.encode(hrp, [version].concat(convertbits(program, 8, 5, true)), enc);
    if (decode(hrp, ret, enc) === null) {
        return null;
    }
    return ret;
}
/////////////////////////////////////////////////////
var DEFAULT_NETWORK_TYPE = 'prod';
function isValidAddress(address, currency, opts = {}) {
    if (!currency.bech32Hrp || currency.bech32Hrp.length === 0) {
        return false;
    }
    const { networkType = DEFAULT_NETWORK_TYPE } = opts;
    var correctBech32Hrps;
    if (networkType === 'prod' || networkType === 'testnet') {
        correctBech32Hrps = currency.bech32Hrp[networkType];
    }
    else if (currency.bech32Hrp) {
        correctBech32Hrps = currency.bech32Hrp.prod.concat(currency.bech32Hrp.testnet);
    }
    else {
        return false;
    }
    for (var chrp of correctBech32Hrps) {
        var ret = decode(chrp, address);
        if (ret) {
            return encode(chrp, ret.version, ret.program) === address.toLowerCase();
        }
    }
    return false;
}
module.exports = {
    encode: encode,
    decode: decode,
    isValidAddress: isValidAddress,
};

},{"./bech32":6}],12:[function(require,module,exports){
(function (process,global){(function (){
/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.7.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2017
 * @license MIT
 */
/*jslint bitwise: true */
'use strict';
var ERROR = 'input is invalid type';
var WINDOW = typeof window === 'object';
var root = WINDOW ? window : {};
if (root.JS_SHA3_NO_WINDOW) {
    WINDOW = false;
}
var WEB_WORKER = !WINDOW && typeof self === 'object';
var NODE_JS = !root.JS_SHA3_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
if (NODE_JS) {
    root = global;
}
else if (WEB_WORKER) {
    root = self;
}
var ARRAY_BUFFER = !root.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
var HEX_CHARS = '0123456789abcdef'.split('');
var SHAKE_PADDING = [31, 7936, 2031616, 520093696];
var CSHAKE_PADDING = [4, 1024, 262144, 67108864];
var KECCAK_PADDING = [1, 256, 65536, 16777216];
var PADDING = [6, 1536, 393216, 100663296];
var SHIFT = [0, 8, 16, 24];
var RC = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649,
    0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0,
    2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771,
    2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648,
    2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
var BITS = [224, 256, 384, 512];
var SHAKE_BITS = [128, 256];
var OUTPUT_TYPES = ['hex', 'buffer', 'arrayBuffer', 'array', 'digest'];
var CSHAKE_BYTEPAD = {
    '128': 168,
    '256': 136
};
if (root.JS_SHA3_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };
}
if (ARRAY_BUFFER && (root.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (obj) {
        return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
}
var createOutputMethod = function (bits, padding, outputType) {
    return function (message) {
        return new Keccak(bits, padding, bits).update(message)[outputType]();
    };
};
var createShakeOutputMethod = function (bits, padding, outputType) {
    return function (message, outputBits) {
        return new Keccak(bits, padding, outputBits).update(message)[outputType]();
    };
};
var createCshakeOutputMethod = function (bits, padding, outputType) {
    return function (message, outputBits, n, s) {
        return methods['cshake' + bits].update(message, outputBits, n, s)[outputType]();
    };
};
var createKmacOutputMethod = function (bits, padding, outputType) {
    return function (key, message, outputBits, s) {
        return methods['kmac' + bits].update(key, message, outputBits, s)[outputType]();
    };
};
var createOutputMethods = function (method, createMethod, bits, padding) {
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
        var type = OUTPUT_TYPES[i];
        method[type] = createMethod(bits, padding, type);
    }
    return method;
};
var createMethod = function (bits, padding) {
    var method = createOutputMethod(bits, padding, 'hex');
    method.create = function () {
        return new Keccak(bits, padding, bits);
    };
    method.update = function (message) {
        return method.create().update(message);
    };
    return createOutputMethods(method, createOutputMethod, bits, padding);
};
var createShakeMethod = function (bits, padding) {
    var method = createShakeOutputMethod(bits, padding, 'hex');
    method.create = function (outputBits) {
        return new Keccak(bits, padding, outputBits);
    };
    method.update = function (message, outputBits) {
        return method.create(outputBits).update(message);
    };
    return createOutputMethods(method, createShakeOutputMethod, bits, padding);
};
var createCshakeMethod = function (bits, padding) {
    var w = CSHAKE_BYTEPAD[bits];
    var method = createCshakeOutputMethod(bits, padding, 'hex');
    method.create = function (outputBits, n, s) {
        if (!n && !s) {
            return methods['shake' + bits].create(outputBits);
        }
        else {
            return new Keccak(bits, padding, outputBits).bytepad([n, s], w);
        }
    };
    method.update = function (message, outputBits, n, s) {
        return method.create(outputBits, n, s).update(message);
    };
    return createOutputMethods(method, createCshakeOutputMethod, bits, padding);
};
var createKmacMethod = function (bits, padding) {
    var w = CSHAKE_BYTEPAD[bits];
    var method = createKmacOutputMethod(bits, padding, 'hex');
    method.create = function (key, outputBits, s) {
        return new Kmac(bits, padding, outputBits).bytepad(['KMAC', s], w).bytepad([key], w);
    };
    method.update = function (key, message, outputBits, s) {
        return method.create(key, outputBits, s).update(message);
    };
    return createOutputMethods(method, createKmacOutputMethod, bits, padding);
};
var algorithms = [
    { name: 'keccak', padding: KECCAK_PADDING, bits: BITS, createMethod: createMethod },
    { name: 'sha3', padding: PADDING, bits: BITS, createMethod: createMethod },
    { name: 'shake', padding: SHAKE_PADDING, bits: SHAKE_BITS, createMethod: createShakeMethod },
    { name: 'cshake', padding: CSHAKE_PADDING, bits: SHAKE_BITS, createMethod: createCshakeMethod },
    { name: 'kmac', padding: CSHAKE_PADDING, bits: SHAKE_BITS, createMethod: createKmacMethod }
];
var methods = {}, methodNames = [];
for (var i = 0; i < algorithms.length; ++i) {
    var algorithm = algorithms[i];
    var bits = algorithm.bits;
    for (var j = 0; j < bits.length; ++j) {
        var methodName = algorithm.name + '_' + bits[j];
        methodNames.push(methodName);
        methods[methodName] = algorithm.createMethod(bits[j], algorithm.padding);
        if (algorithm.name !== 'sha3') {
            var newMethodName = algorithm.name + bits[j];
            methodNames.push(newMethodName);
            methods[newMethodName] = methods[methodName];
        }
    }
}
function Keccak(bits, padding, outputBits) {
    this.blocks = [];
    this.s = [];
    this.padding = padding;
    this.outputBits = outputBits;
    this.reset = true;
    this.finalized = false;
    this.block = 0;
    this.start = 0;
    this.blockCount = (1600 - (bits << 1)) >> 5;
    this.byteCount = this.blockCount << 2;
    this.outputBlocks = outputBits >> 5;
    this.extraBytes = (outputBits & 31) >> 3;
    for (var i = 0; i < 50; ++i) {
        this.s[i] = 0;
    }
}
Keccak.prototype.update = function (message) {
    if (this.finalized) {
        return;
    }
    var notString, type = typeof message;
    if (type !== 'string') {
        if (type === 'object') {
            if (message === null) {
                throw ERROR;
            }
            else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
                message = new Uint8Array(message);
            }
            else if (!Array.isArray(message)) {
                if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
                    throw ERROR;
                }
            }
        }
        else {
            throw ERROR;
        }
        notString = true;
    }
    var blocks = this.blocks, byteCount = this.byteCount, length = message.length, blockCount = this.blockCount, index = 0, s = this.s, i, code;
    while (index < length) {
        if (this.reset) {
            this.reset = false;
            blocks[0] = this.block;
            for (i = 1; i < blockCount + 1; ++i) {
                blocks[i] = 0;
            }
        }
        if (notString) {
            for (i = this.start; index < length && i < byteCount; ++index) {
                blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
            }
        }
        else {
            for (i = this.start; index < length && i < byteCount; ++index) {
                code = message.charCodeAt(index);
                if (code < 0x80) {
                    blocks[i >> 2] |= code << SHIFT[i++ & 3];
                }
                else if (code < 0x800) {
                    blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
                    blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
                }
                else if (code < 0xd800 || code >= 0xe000) {
                    blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
                    blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
                    blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
                }
                else {
                    code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
                    blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
                    blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
                    blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
                    blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
                }
            }
        }
        this.lastByteIndex = i;
        if (i >= byteCount) {
            this.start = i - byteCount;
            this.block = blocks[blockCount];
            for (i = 0; i < blockCount; ++i) {
                s[i] ^= blocks[i];
            }
            f(s);
            this.reset = true;
        }
        else {
            this.start = i;
        }
    }
    return this;
};
Keccak.prototype.encode = function (x, right) {
    var o = x & 255, n = 1;
    var bytes = [o];
    x = x >> 8;
    o = x & 255;
    while (o > 0) {
        bytes.unshift(o);
        x = x >> 8;
        o = x & 255;
        ++n;
    }
    if (right) {
        bytes.push(n);
    }
    else {
        bytes.unshift(n);
    }
    this.update(bytes);
    return bytes.length;
};
Keccak.prototype.encodeString = function (str) {
    var notString, type = typeof str;
    if (type !== 'string') {
        if (type === 'object') {
            if (str === null) {
                throw ERROR;
            }
            else if (ARRAY_BUFFER && str.constructor === ArrayBuffer) {
                str = new Uint8Array(str);
            }
            else if (!Array.isArray(str)) {
                if (!ARRAY_BUFFER || !ArrayBuffer.isView(str)) {
                    throw ERROR;
                }
            }
        }
        else {
            throw ERROR;
        }
        notString = true;
    }
    var bytes = 0, length = str.length;
    if (notString) {
        bytes = length;
    }
    else {
        for (var i = 0; i < str.length; ++i) {
            var code = str.charCodeAt(i);
            if (code < 0x80) {
                bytes += 1;
            }
            else if (code < 0x800) {
                bytes += 2;
            }
            else if (code < 0xd800 || code >= 0xe000) {
                bytes += 3;
            }
            else {
                code = 0x10000 + (((code & 0x3ff) << 10) | (str.charCodeAt(++i) & 0x3ff));
                bytes += 4;
            }
        }
    }
    bytes += this.encode(bytes * 8);
    this.update(str);
    return bytes;
};
Keccak.prototype.bytepad = function (strs, w) {
    var bytes = this.encode(w);
    for (var i = 0; i < strs.length; ++i) {
        bytes += this.encodeString(strs[i]);
    }
    var paddingBytes = w - bytes % w;
    var zeros = [];
    zeros.length = paddingBytes;
    this.update(zeros);
    return this;
};
Keccak.prototype.finalize = function () {
    if (this.finalized) {
        return;
    }
    this.finalized = true;
    var blocks = this.blocks, i = this.lastByteIndex, blockCount = this.blockCount, s = this.s;
    blocks[i >> 2] |= this.padding[i & 3];
    if (this.lastByteIndex === this.byteCount) {
        blocks[0] = blocks[blockCount];
        for (i = 1; i < blockCount + 1; ++i) {
            blocks[i] = 0;
        }
    }
    blocks[blockCount - 1] |= 0x80000000;
    for (i = 0; i < blockCount; ++i) {
        s[i] ^= blocks[i];
    }
    f(s);
};
Keccak.prototype.toString = Keccak.prototype.hex = function () {
    this.finalize();
    var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, extraBytes = this.extraBytes, i = 0, j = 0;
    var hex = '', block;
    while (j < outputBlocks) {
        for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
            block = s[i];
            hex += HEX_CHARS[(block >> 4) & 0x0F] + HEX_CHARS[block & 0x0F] +
                HEX_CHARS[(block >> 12) & 0x0F] + HEX_CHARS[(block >> 8) & 0x0F] +
                HEX_CHARS[(block >> 20) & 0x0F] + HEX_CHARS[(block >> 16) & 0x0F] +
                HEX_CHARS[(block >> 28) & 0x0F] + HEX_CHARS[(block >> 24) & 0x0F];
        }
        if (j % blockCount === 0) {
            f(s);
            i = 0;
        }
    }
    if (extraBytes) {
        block = s[i];
        hex += HEX_CHARS[(block >> 4) & 0x0F] + HEX_CHARS[block & 0x0F];
        if (extraBytes > 1) {
            hex += HEX_CHARS[(block >> 12) & 0x0F] + HEX_CHARS[(block >> 8) & 0x0F];
        }
        if (extraBytes > 2) {
            hex += HEX_CHARS[(block >> 20) & 0x0F] + HEX_CHARS[(block >> 16) & 0x0F];
        }
    }
    return hex;
};
Keccak.prototype.arrayBuffer = function () {
    this.finalize();
    var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, extraBytes = this.extraBytes, i = 0, j = 0;
    var bytes = this.outputBits >> 3;
    var buffer;
    if (extraBytes) {
        buffer = new ArrayBuffer((outputBlocks + 1) << 2);
    }
    else {
        buffer = new ArrayBuffer(bytes);
    }
    var array = new Uint32Array(buffer);
    while (j < outputBlocks) {
        for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
            array[j] = s[i];
        }
        if (j % blockCount === 0) {
            f(s);
        }
    }
    if (extraBytes) {
        array[i] = s[i];
        buffer = buffer.slice(0, bytes);
    }
    return buffer;
};
Keccak.prototype.buffer = Keccak.prototype.arrayBuffer;
Keccak.prototype.digest = Keccak.prototype.array = function () {
    this.finalize();
    var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, extraBytes = this.extraBytes, i = 0, j = 0;
    var array = [], offset, block;
    while (j < outputBlocks) {
        for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
            offset = j << 2;
            block = s[i];
            array[offset] = block & 0xFF;
            array[offset + 1] = (block >> 8) & 0xFF;
            array[offset + 2] = (block >> 16) & 0xFF;
            array[offset + 3] = (block >> 24) & 0xFF;
        }
        if (j % blockCount === 0) {
            f(s);
        }
    }
    if (extraBytes) {
        offset = j << 2;
        block = s[i];
        array[offset] = block & 0xFF;
        if (extraBytes > 1) {
            array[offset + 1] = (block >> 8) & 0xFF;
        }
        if (extraBytes > 2) {
            array[offset + 2] = (block >> 16) & 0xFF;
        }
    }
    return array;
};
function Kmac(bits, padding, outputBits) {
    Keccak.call(this, bits, padding, outputBits);
}
Kmac.prototype = new Keccak();
Kmac.prototype.finalize = function () {
    this.encode(this.outputBits, true);
    return Keccak.prototype.finalize.call(this);
};
var f = function (s) {
    var h, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;
    for (n = 0; n < 48; n += 2) {
        c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
        c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
        c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
        c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
        c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
        c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
        c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
        c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
        c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
        c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];
        h = c8 ^ ((c2 << 1) | (c3 >>> 31));
        l = c9 ^ ((c3 << 1) | (c2 >>> 31));
        s[0] ^= h;
        s[1] ^= l;
        s[10] ^= h;
        s[11] ^= l;
        s[20] ^= h;
        s[21] ^= l;
        s[30] ^= h;
        s[31] ^= l;
        s[40] ^= h;
        s[41] ^= l;
        h = c0 ^ ((c4 << 1) | (c5 >>> 31));
        l = c1 ^ ((c5 << 1) | (c4 >>> 31));
        s[2] ^= h;
        s[3] ^= l;
        s[12] ^= h;
        s[13] ^= l;
        s[22] ^= h;
        s[23] ^= l;
        s[32] ^= h;
        s[33] ^= l;
        s[42] ^= h;
        s[43] ^= l;
        h = c2 ^ ((c6 << 1) | (c7 >>> 31));
        l = c3 ^ ((c7 << 1) | (c6 >>> 31));
        s[4] ^= h;
        s[5] ^= l;
        s[14] ^= h;
        s[15] ^= l;
        s[24] ^= h;
        s[25] ^= l;
        s[34] ^= h;
        s[35] ^= l;
        s[44] ^= h;
        s[45] ^= l;
        h = c4 ^ ((c8 << 1) | (c9 >>> 31));
        l = c5 ^ ((c9 << 1) | (c8 >>> 31));
        s[6] ^= h;
        s[7] ^= l;
        s[16] ^= h;
        s[17] ^= l;
        s[26] ^= h;
        s[27] ^= l;
        s[36] ^= h;
        s[37] ^= l;
        s[46] ^= h;
        s[47] ^= l;
        h = c6 ^ ((c0 << 1) | (c1 >>> 31));
        l = c7 ^ ((c1 << 1) | (c0 >>> 31));
        s[8] ^= h;
        s[9] ^= l;
        s[18] ^= h;
        s[19] ^= l;
        s[28] ^= h;
        s[29] ^= l;
        s[38] ^= h;
        s[39] ^= l;
        s[48] ^= h;
        s[49] ^= l;
        b0 = s[0];
        b1 = s[1];
        b32 = (s[11] << 4) | (s[10] >>> 28);
        b33 = (s[10] << 4) | (s[11] >>> 28);
        b14 = (s[20] << 3) | (s[21] >>> 29);
        b15 = (s[21] << 3) | (s[20] >>> 29);
        b46 = (s[31] << 9) | (s[30] >>> 23);
        b47 = (s[30] << 9) | (s[31] >>> 23);
        b28 = (s[40] << 18) | (s[41] >>> 14);
        b29 = (s[41] << 18) | (s[40] >>> 14);
        b20 = (s[2] << 1) | (s[3] >>> 31);
        b21 = (s[3] << 1) | (s[2] >>> 31);
        b2 = (s[13] << 12) | (s[12] >>> 20);
        b3 = (s[12] << 12) | (s[13] >>> 20);
        b34 = (s[22] << 10) | (s[23] >>> 22);
        b35 = (s[23] << 10) | (s[22] >>> 22);
        b16 = (s[33] << 13) | (s[32] >>> 19);
        b17 = (s[32] << 13) | (s[33] >>> 19);
        b48 = (s[42] << 2) | (s[43] >>> 30);
        b49 = (s[43] << 2) | (s[42] >>> 30);
        b40 = (s[5] << 30) | (s[4] >>> 2);
        b41 = (s[4] << 30) | (s[5] >>> 2);
        b22 = (s[14] << 6) | (s[15] >>> 26);
        b23 = (s[15] << 6) | (s[14] >>> 26);
        b4 = (s[25] << 11) | (s[24] >>> 21);
        b5 = (s[24] << 11) | (s[25] >>> 21);
        b36 = (s[34] << 15) | (s[35] >>> 17);
        b37 = (s[35] << 15) | (s[34] >>> 17);
        b18 = (s[45] << 29) | (s[44] >>> 3);
        b19 = (s[44] << 29) | (s[45] >>> 3);
        b10 = (s[6] << 28) | (s[7] >>> 4);
        b11 = (s[7] << 28) | (s[6] >>> 4);
        b42 = (s[17] << 23) | (s[16] >>> 9);
        b43 = (s[16] << 23) | (s[17] >>> 9);
        b24 = (s[26] << 25) | (s[27] >>> 7);
        b25 = (s[27] << 25) | (s[26] >>> 7);
        b6 = (s[36] << 21) | (s[37] >>> 11);
        b7 = (s[37] << 21) | (s[36] >>> 11);
        b38 = (s[47] << 24) | (s[46] >>> 8);
        b39 = (s[46] << 24) | (s[47] >>> 8);
        b30 = (s[8] << 27) | (s[9] >>> 5);
        b31 = (s[9] << 27) | (s[8] >>> 5);
        b12 = (s[18] << 20) | (s[19] >>> 12);
        b13 = (s[19] << 20) | (s[18] >>> 12);
        b44 = (s[29] << 7) | (s[28] >>> 25);
        b45 = (s[28] << 7) | (s[29] >>> 25);
        b26 = (s[38] << 8) | (s[39] >>> 24);
        b27 = (s[39] << 8) | (s[38] >>> 24);
        b8 = (s[48] << 14) | (s[49] >>> 18);
        b9 = (s[49] << 14) | (s[48] >>> 18);
        s[0] = b0 ^ (~b2 & b4);
        s[1] = b1 ^ (~b3 & b5);
        s[10] = b10 ^ (~b12 & b14);
        s[11] = b11 ^ (~b13 & b15);
        s[20] = b20 ^ (~b22 & b24);
        s[21] = b21 ^ (~b23 & b25);
        s[30] = b30 ^ (~b32 & b34);
        s[31] = b31 ^ (~b33 & b35);
        s[40] = b40 ^ (~b42 & b44);
        s[41] = b41 ^ (~b43 & b45);
        s[2] = b2 ^ (~b4 & b6);
        s[3] = b3 ^ (~b5 & b7);
        s[12] = b12 ^ (~b14 & b16);
        s[13] = b13 ^ (~b15 & b17);
        s[22] = b22 ^ (~b24 & b26);
        s[23] = b23 ^ (~b25 & b27);
        s[32] = b32 ^ (~b34 & b36);
        s[33] = b33 ^ (~b35 & b37);
        s[42] = b42 ^ (~b44 & b46);
        s[43] = b43 ^ (~b45 & b47);
        s[4] = b4 ^ (~b6 & b8);
        s[5] = b5 ^ (~b7 & b9);
        s[14] = b14 ^ (~b16 & b18);
        s[15] = b15 ^ (~b17 & b19);
        s[24] = b24 ^ (~b26 & b28);
        s[25] = b25 ^ (~b27 & b29);
        s[34] = b34 ^ (~b36 & b38);
        s[35] = b35 ^ (~b37 & b39);
        s[44] = b44 ^ (~b46 & b48);
        s[45] = b45 ^ (~b47 & b49);
        s[6] = b6 ^ (~b8 & b0);
        s[7] = b7 ^ (~b9 & b1);
        s[16] = b16 ^ (~b18 & b10);
        s[17] = b17 ^ (~b19 & b11);
        s[26] = b26 ^ (~b28 & b20);
        s[27] = b27 ^ (~b29 & b21);
        s[36] = b36 ^ (~b38 & b30);
        s[37] = b37 ^ (~b39 & b31);
        s[46] = b46 ^ (~b48 & b40);
        s[47] = b47 ^ (~b49 & b41);
        s[8] = b8 ^ (~b0 & b2);
        s[9] = b9 ^ (~b1 & b3);
        s[18] = b18 ^ (~b10 & b12);
        s[19] = b19 ^ (~b11 & b13);
        s[28] = b28 ^ (~b20 & b22);
        s[29] = b29 ^ (~b21 & b23);
        s[38] = b38 ^ (~b30 & b32);
        s[39] = b39 ^ (~b31 & b33);
        s[48] = b48 ^ (~b40 & b42);
        s[49] = b49 ^ (~b41 & b43);
        s[0] ^= RC[n];
        s[1] ^= RC[n + 1];
    }
};
module.exports = methods;

}).call(this)}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":41}],13:[function(require,module,exports){
"use strict";
var sha256 = require('js-sha256').sha256;
var sha512_256 = require('js-sha512').sha512_256;
var Buffer = require('buffer').Buffer;
var Blake256 = require('./blake256');
var keccak256 = require('./sha3')['keccak256'];
var Blake2B = require('./blake2b');
var base58 = require('./base58');
var base32 = require('./base32');
function numberToHex(number, length) {
    var hex = number.toString(16).toUpperCase();
    if (hex.length % 2 === 1) {
        hex = '0' + hex;
    }
    return hex.padStart(length, '0');
}
function isHexChar(c) {
    if ((c >= 'A' && c <= 'F') ||
        (c >= 'a' && c <= 'f') ||
        (c >= '0' && c <= '9')) {
        return 1;
    }
    return 0;
}
/* Convert a hex char to value */
function hexChar2byte(c) {
    var d = 0;
    if (c >= 'A' && c <= 'F') {
        d = c.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
    }
    else if (c >= 'a' && c <= 'f') {
        d = c.charCodeAt(0) - 'a'.charCodeAt(0) + 10;
    }
    else if (c >= '0' && c <= '9') {
        d = c.charCodeAt(0) - '0'.charCodeAt(0);
    }
    return d;
}
/* Convert a byte to string */
function byte2hexStr(byte) {
    var hexByteMap = "0123456789ABCDEF";
    var str = "";
    str += hexByteMap.charAt(byte >> 4);
    str += hexByteMap.charAt(byte & 0x0f);
    return str;
}
function byteArray2hexStr(byteArray) {
    var str = "";
    for (var i = 0; i < (byteArray.length - 1); i++) {
        str += byte2hexStr(byteArray[i]);
    }
    str += byte2hexStr(byteArray[i]);
    return str;
}
function hexStr2byteArray(str) {
    var byteArray = Array();
    var d = 0;
    var i = 0;
    var j = 0;
    var k = 0;
    for (i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if (isHexChar(c)) {
            d <<= 4;
            d += hexChar2byte(c);
            j++;
            if (0 === (j % 2)) {
                byteArray[k++] = d;
                d = 0;
            }
        }
    }
    return byteArray;
}
function toBuffer(payload, format) {
    if (Buffer.isBuffer(payload)) {
        return payload;
    }
    if (Array.isArray(payload)) {
        return Buffer.from(payload);
    }
    if (typeof payload === 'string') {
        return Buffer.from(payload, format === 'HEX' ? 'hex' : 'utf8');
    }
    return Buffer.from(String(payload), format === 'HEX' ? 'hex' : 'utf8');
}
function toHashInput(payload, format) {
    if (typeof payload === 'string' && format === 'HEX') {
        return hexStr2byteArray(payload);
    }
    if (Array.isArray(payload) || ArrayBuffer.isView(payload) || payload instanceof ArrayBuffer) {
        return payload;
    }
    return payload;
}
module.exports = {
    numberToHex: numberToHex,
    toHex: function (arrayOfBytes) {
        var hex = '';
        for (var i = 0; i < arrayOfBytes.length; i++) {
            hex += numberToHex(arrayOfBytes[i]);
        }
        return hex;
    },
    sha256: function (payload, format = 'HEX') {
        var hash = sha256.create();
        hash.update(toHashInput(payload, format));
        return hash.hex().toUpperCase();
    },
    sha256x2: function (buffer, format = 'HEX') {
        return this.sha256(this.sha256(buffer, format), format);
    },
    sha256Checksum: function (payload) {
        return this.sha256(this.sha256(payload)).substr(0, 8);
    },
    sha512_256: function (payload, format = 'HEX') {
        var hash = sha512_256.create();
        hash.update(toHashInput(payload, format));
        return hash.hex().toUpperCase();
    },
    blake256: function (hexString) {
        return new Blake256().update(hexString, 'hex').digest('hex');
    },
    blake256Checksum: function (payload) {
        return this.blake256(this.blake256(payload)).substr(0, 8);
    },
    blake2b: function (hexString, outlen) {
        return new Blake2B(outlen).update(Buffer.from(hexString, 'hex')).digest('hex');
    },
    keccak256: function (hexString) {
        return keccak256(hexString);
    },
    keccak256Checksum: function (payload) {
        return keccak256(payload).toString().substr(0, 8);
    },
    blake2b256: function (hexString) {
        return new Blake2B(32).update(Buffer.from(hexString, 'hex'), 32).digest('hex');
    },
    base58: base58.decode,
    byteArray2hexStr: byteArray2hexStr,
    hexStr2byteArray: hexStr2byteArray,
    bigNumberToBuffer: function (bignumber, size) {
        var value = BigInt(bignumber.toString());
        var hex = value.toString(16);
        if (hex.length > size * 2) {
            throw new Error('bigNumber exceeds requested buffer size');
        }
        return Buffer.from(hex.padStart(size * 2, '0'), 'hex');
    },
    base32: base32
};

},{"./base32":3,"./base58":4,"./blake256":8,"./blake2b":9,"./sha3":12,"buffer":37,"js-sha256":39,"js-sha512":40}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationMap = exports.normalizeNetworkKey = exports.networkOptions = exports.getNetworkValidation = exports.validate = void 0;
var validator_1 = require("./validator");
Object.defineProperty(exports, "validate", { enumerable: true, get: function () { return validator_1.validate; } });
var networks_1 = require("./config/networks");
Object.defineProperty(exports, "getNetworkValidation", { enumerable: true, get: function () { return networks_1.getNetworkValidation; } });
Object.defineProperty(exports, "networkOptions", { enumerable: true, get: function () { return networks_1.networkOptions; } });
Object.defineProperty(exports, "normalizeNetworkKey", { enumerable: true, get: function () { return networks_1.normalizeNetworkKey; } });
Object.defineProperty(exports, "validationMap", { enumerable: true, get: function () { return networks_1.validationMap; } });

},{"./config/networks":2,"./validator":15}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const networks_1 = require("./config/networks");
const validate = (network, address) => {
    if (!network || !address) {
        return { isValid: false, validator: null };
    }
    const trimmedAddress = address.trim();
    if (!trimmedAddress) {
        return { isValid: false, validator: null };
    }
    const validation = (0, networks_1.getNetworkValidation)(network);
    if (!validation) {
        return { isValid: false, validator: null };
    }
    if (validation.regex && !validation.regex.test(trimmedAddress)) {
        return { isValid: false, validator: null };
    }
    if (!validation.validator) {
        return { isValid: Boolean(validation.regex), validator: null };
    }
    return {
        isValid: validation.validator.isValidAddress(trimmedAddress, validation.currency, validation.opts),
        validator: validation.validator,
    };
};
exports.validate = validate;

},{"./config/networks":2}],16:[function(require,module,exports){
"use strict";
var base58 = require('../crypto/base58');
var BIP173Validator = require('./bip173_validator');
function getDecoded(address) {
    try {
        return base58.decode(address);
    }
    catch (e) {
        // if decoding fails, assume invalid address
        return null;
    }
}
function isValidAddressV1(address) {
    return !!getDecoded(address) && /^(Ae2|DdzFF)/.test(address);
}
function isValidAddressShelley(address, currency, opts) {
    // shelley address are just bip 173 - bech32 addresses (https://cips.cardano.org/cips/cip4/)
    return BIP173Validator.isValidAddress(address, currency, opts);
}
module.exports = {
    isValidAddress: function (address, currency, opts = {}) {
        return isValidAddressV1(address) || isValidAddressShelley(address, currency, opts);
    }
};

},{"../crypto/base58":4,"./bip173_validator":21}],17:[function(require,module,exports){
"use strict";
const cryptoUtils = require('../crypto/utils');
const ALGORAND_CHECKSUM_BYTE_LENGTH = 4;
const ALGORAND_ADDRESS_LENGTH = 58;
module.exports = {
    isValidAddress: function (address) {
        return this.verifyChecksum(address);
    },
    verifyChecksum: function (address) {
        if (address.length !== ALGORAND_ADDRESS_LENGTH) {
            return false;
        }
        else {
            // Decode base32 Address
            const decoded = cryptoUtils.base32.b32decode(address);
            const addr = decoded.slice(0, decoded.length - ALGORAND_CHECKSUM_BYTE_LENGTH);
            const checksum = cryptoUtils.byteArray2hexStr(decoded.slice(-4)).toString('HEX');
            // Hash Address - Checksum
            const code = cryptoUtils.sha512_256(cryptoUtils.byteArray2hexStr(addr)).substr(-ALGORAND_CHECKSUM_BYTE_LENGTH * 2);
            return code === checksum;
        }
    }
};

},{"../crypto/utils":13}],18:[function(require,module,exports){
"use strict";
module.exports = {
    isValidAddress: function (address) {
        // Check if it starts with "0x" and is 64 hex characters long (32 bytes)
        if (!/^0x[0-9a-fA-F]{64}$/.test(address)) {
            return false;
        }
        // No checksum verification needed for Aptos, so if it's valid hex, return true
        return true;
    }
};

},{}],19:[function(require,module,exports){
"use strict";
const base58 = require('../crypto/base58');
// simple base58 validator.  Just checks if it can be decoded.
module.exports = {
    isValidAddress: function (address, currency, opts = {}) {
        try {
            if (!address || address.length == 0) {
                return false;
            }
            if (currency.minLength && (address.length < currency.minLength)) {
                return false;
            }
            if (currency.maxLength && (address.length > currency.maxLength)) {
                return false;
            }
            try {
                const decoded = base58.decode(address);
                if (!decoded || !decoded.length) {
                    return false;
                }
            }
            catch (e) {
                // if decoding fails, assume invalid address
                return false;
            }
            return true;
        }
        catch (e) {
            return false;
        }
    }
};

},{"../crypto/base58":4}],20:[function(require,module,exports){
"use strict";
var cryptoUtils = require('../crypto/utils');
var bech32 = require('../crypto/bech32');
var BTCValidator = require('./bitcoin_validator');
function validateAddress(address, currency, opts) {
    var networkType = opts ? opts.networkType : '';
    var prefix = 'bitcoincash';
    var regexp = new RegExp(currency.regexp);
    var raw_address;
    var res = address.split(':');
    if (res.length === 1) {
        raw_address = address;
    }
    else {
        if (res[0] !== 'bitcoincash') {
            return false;
        }
        raw_address = res[1];
    }
    if (!regexp.test(raw_address)) {
        return false;
    }
    if (raw_address.toLowerCase() != raw_address && raw_address.toUpperCase() != raw_address) {
        return false;
    }
    var decoded = cryptoUtils.base32.b32decode(raw_address);
    if (networkType === 'testnet') {
        prefix = 'bchtest';
    }
    try {
        if (bech32.verifyChecksum(prefix, decoded, bech32.encodings.BECH32)) {
            return false;
        }
    }
    catch (e) {
        return false;
    }
    return true;
}
module.exports = {
    isValidAddress: function (address, currency, networkType) {
        return validateAddress(address, currency, networkType) || BTCValidator.isValidAddress(address, currency, networkType);
    }
};

},{"../crypto/bech32":6,"../crypto/utils":13,"./bitcoin_validator":22}],21:[function(require,module,exports){
"use strict";
var bech32 = require('../crypto/bech32');
// bip 173 bech 32 addresses (https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki)
module.exports = {
    isValidAddress: function (address, currency, opts = {}) {
        const { networkType = 'prod' } = opts;
        const decoded = bech32.decode(address, bech32.encodings.BECH32);
        if (!decoded) {
            return false;
        }
        const bech32Hrp = decoded.hrp;
        let correctBech32Hrps;
        if (networkType === 'prod' || networkType === 'testnet') {
            correctBech32Hrps = currency.bech32Hrp[networkType];
        }
        else if (currency.bech32Hrp) {
            correctBech32Hrps = currency.bech32Hrp.prod.concat(currency.bech32Hrp.testnet);
        }
        else {
            return false;
        }
        if (correctBech32Hrps.indexOf(bech32Hrp) === -1) {
            return false;
        }
        return true;
    }
};

},{"../crypto/bech32":6}],22:[function(require,module,exports){
"use strict";
var base58 = require('../crypto/base58');
var segwit = require('../crypto/segwit_addr');
var cryptoUtils = require('../crypto/utils');
var DEFAULT_NETWORK_TYPE = 'prod';
function getDecoded(address) {
    try {
        return base58.decode(address);
    }
    catch (e) {
        // if decoding fails, assume invalid address
        return null;
    }
}
function getChecksum(hashFunction, payload) {
    // Each currency may implement different hashing algorithm
    switch (hashFunction) {
        // blake then keccak hash chain
        case 'blake256keccak256':
            var blake = cryptoUtils.blake2b256(payload);
            return cryptoUtils.keccak256Checksum(cryptoUtils.hexStr2byteArray(blake));
        case 'blake256':
            return cryptoUtils.blake256Checksum(payload);
        case 'keccak256':
            return cryptoUtils.keccak256Checksum(payload);
        case 'sha256':
        default:
            return cryptoUtils.sha256Checksum(payload);
    }
}
function getAddressType(address, currency) {
    currency = currency || {};
    // should be 25 bytes per btc address spec and 26 decred
    var expectedLength = currency.expectedLength || 25;
    var hashFunction = currency.hashFunction || 'sha256';
    var decoded = getDecoded(address);
    if (decoded) {
        var length = decoded.length;
        if (length !== expectedLength) {
            return null;
        }
        if (currency.regex) {
            if (!currency.regex.test(address)) {
                return false;
            }
        }
        var checksum = cryptoUtils.toHex(decoded.slice(length - 4, length)), body = cryptoUtils.toHex(decoded.slice(0, length - 4)), goodChecksum = getChecksum(hashFunction, body);
        return checksum === goodChecksum ? cryptoUtils.toHex(decoded.slice(0, expectedLength - 24)) : null;
    }
    return null;
}
function isValidP2PKHandP2SHAddress(address, currency, opts) {
    const { networkType = DEFAULT_NETWORK_TYPE } = opts;
    var correctAddressTypes;
    var addressType = getAddressType(address, currency);
    if (addressType) {
        if (networkType === 'prod' || networkType === 'testnet') {
            correctAddressTypes = currency.addressTypes[networkType];
        }
        else if (currency.addressTypes) {
            correctAddressTypes = currency.addressTypes.prod.concat(currency.addressTypes.testnet);
        }
        else {
            return false;
        }
        return correctAddressTypes.indexOf(addressType) >= 0;
    }
    return false;
}
module.exports = {
    isValidAddress: function (address, currency, opts = {}) {
        return isValidP2PKHandP2SHAddress(address, currency, opts) || segwit.isValidAddress(address, currency, opts);
    }
};

},{"../crypto/base58":4,"../crypto/segwit_addr":11,"../crypto/utils":13}],23:[function(require,module,exports){
"use strict";
const cryptoUtils = require('../crypto/utils');
// from https://github.com/paritytech/substrate/wiki/External-Address-Format-(SS58)
const addressFormats = [
    { addressLength: 3, accountIndexLength: 1, checkSumLength: 1 },
    { addressLength: 4, accountIndexLength: 2, checkSumLength: 1 },
    { addressLength: 5, accountIndexLength: 2, checkSumLength: 2 },
    { addressLength: 6, accountIndexLength: 4, checkSumLength: 1 },
    { addressLength: 7, accountIndexLength: 4, checkSumLength: 2 },
    { addressLength: 8, accountIndexLength: 4, checkSumLength: 3 },
    { addressLength: 9, accountIndexLength: 4, checkSumLength: 4 },
    { addressLength: 10, accountIndexLength: 8, checkSumLength: 1 },
    { addressLength: 11, accountIndexLength: 8, checkSumLength: 2 },
    { addressLength: 12, accountIndexLength: 8, checkSumLength: 3 },
    { addressLength: 13, accountIndexLength: 8, checkSumLength: 4 },
    { addressLength: 14, accountIndexLength: 8, checkSumLength: 5 },
    { addressLength: 15, accountIndexLength: 8, checkSumLength: 6 },
    { addressLength: 16, accountIndexLength: 8, checkSumLength: 7 },
    { addressLength: 17, accountIndexLength: 8, checkSumLength: 8 },
    { addressLength: 34, accountIndexLength: 32, checkSumLength: 2 },
];
module.exports = {
    isValidAddress: function (address, currency, opts = {}) {
        const { networkType = 'prod' } = opts;
        return this.verifyChecksum(address);
    },
    verifyChecksum: function (address) {
        try {
            const preImage = '53533538505245';
            const decoded = cryptoUtils.base58(address);
            const addressType = cryptoUtils.byteArray2hexStr(decoded.slice(0, 1));
            const addressAndChecksum = decoded.slice(1);
            // get the address format
            const addressFormat = addressFormats.find(af => af.addressLength === addressAndChecksum.length);
            if (!addressFormat) {
                throw new Error('Invalid address length');
            }
            const decodedAddress = cryptoUtils.byteArray2hexStr(addressAndChecksum.slice(0, addressFormat.accountIndexLength));
            const checksum = cryptoUtils.byteArray2hexStr(addressAndChecksum.slice(-addressFormat.checkSumLength));
            const calculatedHash = cryptoUtils
                .blake2b(preImage + addressType + decodedAddress, 64)
                .substr(0, addressFormat.checkSumLength * 2)
                .toUpperCase();
            return calculatedHash == checksum;
        }
        catch (err) {
            return false;
        }
    }
};

},{"../crypto/utils":13}],24:[function(require,module,exports){
"use strict";
function isValidEOSAddress(address, currency, networkType) {
    var regex = /^[a-z0-9.]+$/g; // Must be numbers, lowercase letters and decimal points only
    if (address.search(regex) !== -1 && address.length === 12) {
        return true;
    }
    else {
        return false;
    }
}
module.exports = {
    isValidAddress: function (address, currency, networkType) {
        return isValidEOSAddress(address, currency, networkType);
    }
};

},{}],25:[function(require,module,exports){
"use strict";
var cryptoUtils = require('../crypto/utils');
module.exports = {
    isValidAddress: function (address) {
        if (!/^0x[0-9a-fA-F]{40}$/.test(address)) {
            // Check if it has the basic requirements of an address
            return false;
        }
        if (/^0x[0-9a-f]{40}$/.test(address) || /^0x?[0-9A-F]{40}$/.test(address)) {
            // If it's all small caps or all all caps, return true
            return true;
        }
        // Otherwise check each case
        return this.verifyChecksum(address);
    },
    verifyChecksum: function (address) {
        // Check each case
        address = address.replace('0x', '');
        var addressHash = cryptoUtils.keccak256(address.toLowerCase());
        for (var i = 0; i < 40; i++) {
            // The nth letter should be uppercase if the nth digit of casemap is 1
            if ((parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i]) ||
                (parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i])) {
                return false;
            }
        }
        return true;
    }
};

},{"../crypto/utils":13}],26:[function(require,module,exports){
"use strict";
var isValidAddress = function (address) {
    // Regex to match the format "shard.realm.account" (e.g., "0.0.12345")
    const regex = /^\d+\.\d+\.\d+$/;
    if (!regex.test(address)) {
        return false;
    }
    // Split the address into shard, realm, and account parts
    const [shard, realm, account] = address.split('.').map(Number);
    // Validate each part is a non-negative integer
    return (Number.isInteger(shard) &&
        shard >= 0 &&
        Number.isInteger(realm) &&
        realm >= 0 &&
        Number.isInteger(account) &&
        account >= 0);
};
module.exports = {
    isValidAddress: isValidAddress,
};

},{}],27:[function(require,module,exports){
"use strict";
var cryptoUtils = require('../crypto/utils');
var cnBase58 = require('../crypto/cnBase58');
var DEFAULT_NETWORK_TYPE = 'prod';
var addressRegTest = new RegExp('^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{95}$');
var integratedAddressRegTest = new RegExp('^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{106}$');
function validateNetwork(decoded, currency, networkType, addressType) {
    var network = currency.addressTypes;
    if (addressType == 'integrated') {
        network = currency.iAddressTypes;
    }
    var at = parseInt(decoded.substr(0, 2), 16).toString();
    switch (networkType) {
        case 'prod':
            return network.prod.indexOf(at) >= 0;
        case 'testnet':
            return network.testnet.indexOf(at) >= 0;
        case 'stagenet':
            return network.stagenet.indexOf(at) >= 0;
        case 'both':
            return network.prod.indexOf(at) >= 0 || network.testnet.indexOf(at) >= 0 || network.stagenet.indexOf(at) >= 0;
        default:
            return false;
    }
}
function hextobin(hex) {
    if (hex.length % 2 !== 0)
        return null;
    var res = new Uint8Array(hex.length / 2);
    for (var i = 0; i < hex.length / 2; ++i) {
        res[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
    }
    return res;
}
module.exports = {
    isValidAddress: function (address, currency, opts = {}) {
        const { networkType = DEFAULT_NETWORK_TYPE } = opts;
        var addressType = 'standard';
        if (!addressRegTest.test(address)) {
            if (integratedAddressRegTest.test(address)) {
                addressType = 'integrated';
            }
            else {
                return false;
            }
        }
        var decodedAddrStr = cnBase58.decode(address);
        if (!decodedAddrStr)
            return false;
        if (!validateNetwork(decodedAddrStr, currency, networkType, addressType))
            return false;
        var addrChecksum = decodedAddrStr.slice(-8);
        var hashChecksum = cryptoUtils.keccak256Checksum(hextobin(decodedAddrStr.slice(0, -8)));
        return addrChecksum === hashChecksum;
    }
};

},{"../crypto/cnBase58":10,"../crypto/utils":13}],28:[function(require,module,exports){
"use strict";
var cryptoUtils = require('../crypto/utils');
var baseX = require('../crypto/baseX');
var ALLOWED_CHARS = '13456789abcdefghijkmnopqrstuwxyz';
// https://github.com/nanocurrency/raiblocks/wiki/Accounts,-Keys,-Seeds,-and-Wallet-Identifiers
var regexp = new RegExp('^(xrb|nano)_([' + ALLOWED_CHARS + ']{60})$');
module.exports = {
    isValidAddress: function (address) {
        if (regexp.test(address)) {
            return this.verifyChecksum(address);
        }
        return false;
    },
    verifyChecksum: function (address) {
        var bytes = baseX.decode(regexp.exec(address)[2], ALLOWED_CHARS).slice(-37);
        // https://github.com/nanocurrency/raiblocks/blob/master/rai/lib/numbers.cpp#L73
        var computedChecksum = cryptoUtils.blake2b(cryptoUtils.toHex(bytes.slice(0, -5)), 5);
        var checksum = cryptoUtils.toHex(bytes.slice(-5).reverse());
        return computedChecksum === checksum;
    }
};

},{"../crypto/baseX":5,"../crypto/utils":13}],29:[function(require,module,exports){
"use strict";
var cryptoUtils = require('../crypto/utils');
/**
* Check if an address is valid
*
* @param {string} _address - An address
*
* @return {boolean} - True if address is valid, false otherwise
*/
var isValidAddress = function (_address) {
    var address = _address.toString().toUpperCase().replace(/-/g, '');
    if (!address || address.length !== 40) {
        return false;
    }
    var decoded = cryptoUtils.toHex(cryptoUtils.base32.b32decode(address));
    var stepThreeChecksum = cryptoUtils.keccak256Checksum(cryptoUtils.hexStr2byteArray(decoded.slice(0, 42)));
    return stepThreeChecksum === decoded.slice(42);
};
module.exports = {
    isValidAddress: isValidAddress,
};

},{"../crypto/utils":13}],30:[function(require,module,exports){
"use strict";
var cryptoUtils = require('../crypto/utils');
var baseX = require('../crypto/baseX');
var ALLOWED_CHARS = 'rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz';
var regexp = new RegExp('^r[' + ALLOWED_CHARS + ']{27,35}$');
module.exports = {
    /**
     * ripple address validation
     */
    isValidAddress: function (address) {
        if (regexp.test(address)) {
            return this.verifyChecksum(address);
        }
        return false;
    },
    verifyChecksum: function (address) {
        var bytes = baseX.decode(address, ALLOWED_CHARS);
        var computedChecksum = cryptoUtils.sha256Checksum(cryptoUtils.toHex(bytes.slice(0, -4)));
        var checksum = cryptoUtils.toHex(bytes.slice(-4));
        return computedChecksum === checksum;
    }
};

},{"../crypto/baseX":5,"../crypto/utils":13}],31:[function(require,module,exports){
"use strict";
var cryptoUtils = require('../crypto/utils');
function hexToBytes(hex) {
    var bytes = [];
    for (var c = 0; c < hex.length; c += 2) {
        bytes.push(parseInt(hex.substr(c, 2), 16));
    }
    return bytes;
}
module.exports = {
    isValidAddress: function (address) {
        if (address.length !== 76) {
            // Check if it has the basic requirements of an address
            return false;
        }
        // Otherwise check each case
        return this.verifyChecksum(address);
    },
    verifyChecksum: function (address) {
        var checksumBytes = address.slice(0, 32 * 2);
        var check = address.slice(32 * 2, 38 * 2);
        var blakeHash = cryptoUtils.blake2b(checksumBytes, 32).slice(0, 6 * 2);
        return blakeHash === check;
    }
};

},{"../crypto/utils":13}],32:[function(require,module,exports){
"use strict";
var base32 = require('../crypto/base32');
var cryptoUtils = require('../crypto/utils');
var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
var regexp = new RegExp('^[' + ALPHABET + ']{56}$');
var ed25519PublicKeyVersionByte = (6 << 3);
function crc16xmodem(bytes) {
    var crc = 0x0000;
    for (var i = 0; i < bytes.length; i++) {
        crc ^= bytes[i] << 8;
        for (var bit = 0; bit < 8; bit++) {
            if ((crc & 0x8000) !== 0) {
                crc = ((crc << 1) ^ 0x1021) & 0xFFFF;
            }
            else {
                crc = (crc << 1) & 0xFFFF;
            }
        }
    }
    return crc;
}
function swap16(number) {
    var lower = number & 0xFF;
    var upper = (number >> 8) & 0xFF;
    return (lower << 8) | upper;
}
module.exports = {
    isValidAddress: function (address) {
        if (regexp.test(address)) {
            return this.verifyChecksum(address);
        }
        return false;
    },
    verifyChecksum: function (address) {
        // based on https://github.com/stellar/js-stellar-base/blob/master/src/strkey.js#L126
        var bytes = base32.b32decode(address);
        if (bytes[0] !== ed25519PublicKeyVersionByte) {
            return false;
        }
        var computedChecksum = cryptoUtils.numberToHex(swap16(crc16xmodem(bytes.slice(0, -2))), 4);
        var checksum = cryptoUtils.toHex(bytes.slice(-2));
        return computedChecksum === checksum;
    }
};

},{"../crypto/base32":3,"../crypto/utils":13}],33:[function(require,module,exports){
"use strict";
const base58 = require('../crypto/base58');
const cryptoUtils = require('../crypto/utils');
const prefix = new Uint8Array([6, 161, 159]);
function decodeRaw(buffer) {
    let payload = buffer.slice(0, -4);
    let checksum = buffer.slice(-4);
    let newChecksum = cryptoUtils.hexStr2byteArray(cryptoUtils.sha256x2(cryptoUtils.byteArray2hexStr(payload)));
    if (checksum[0] ^ newChecksum[0] |
        checksum[1] ^ newChecksum[1] |
        checksum[2] ^ newChecksum[2] |
        checksum[3] ^ newChecksum[3])
        return;
    return payload;
}
const isValidAddress = function (address) {
    try {
        let buffer = base58.decode(address);
        let payload = decodeRaw(buffer);
        if (!payload)
            return false;
        payload.slice(prefix.length);
        return true;
    }
    catch (e) {
        return false;
    }
};
module.exports = {
    isValidAddress
};

},{"../crypto/base58":4,"../crypto/utils":13}],34:[function(require,module,exports){
"use strict";
var cryptoUtils = require('../crypto/utils');
function decodeBase58Address(base58String) {
    if (typeof (base58String) !== 'string') {
        return false;
    }
    if (base58String.length !== 34) {
        return false;
    }
    try {
        var address = cryptoUtils.base58(base58String);
    }
    catch (e) {
        return false;
    }
    var len = address.length;
    var offset = len - 4;
    var checkSum = address.slice(offset);
    address = address.slice(0, offset);
    var hash0 = cryptoUtils.sha256(cryptoUtils.byteArray2hexStr(address));
    var hash1 = cryptoUtils.hexStr2byteArray(cryptoUtils.sha256(hash0));
    var checkSum1 = hash1.slice(0, 4);
    if (checkSum[0] === checkSum1[0] && checkSum[1] === checkSum1[1] && checkSum[2]
        === checkSum1[2] && checkSum[3] === checkSum1[3]) {
        return address;
    }
    return false;
}
module.exports = {
    /**
     * tron address validation
     */
    isValidAddress: function (mainAddress, currency, opts) {
        var address = decodeBase58Address(mainAddress);
        if (!address) {
            return false;
        }
        if (address.length !== 21) {
            return false;
        }
        const TRON_ADDRESS_VERSION_BYTE = 0x41;
        // Check if the address starts with the correct byte 0x41, ( decimal 65 )
        return address[0] === TRON_ADDRESS_VERSION_BYTE;
    }
};

},{"../crypto/utils":13}],35:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],36:[function(require,module,exports){

},{}],37:[function(require,module,exports){
(function (Buffer){(function (){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42 } }
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species != null &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value)
  }

  if (value == null) {
    throw TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf)
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
          : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

}).call(this)}).call(this,require("buffer").Buffer)
},{"base64-js":35,"buffer":37,"ieee754":38}],38:[function(require,module,exports){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],39:[function(require,module,exports){
(function (process,global){(function (){
/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.11.1
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2025
 * @license MIT
 */
/*jslint bitwise: true */
(function () {
  'use strict';

  var ERROR = 'input is invalid type';
  var WINDOW = typeof window === 'object';
  var root = WINDOW ? window : {};
  if (root.JS_SHA256_NO_WINDOW) {
    WINDOW = false;
  }
  var WEB_WORKER = !WINDOW && typeof self === 'object';
  var NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node && process.type != 'renderer';
  if (NODE_JS) {
    root = global;
  } else if (WEB_WORKER) {
    root = self;
  }
  var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && typeof module === 'object' && module.exports;
  var AMD = typeof define === 'function' && define.amd;
  var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [-2147483648, 8388608, 32768, 128];
  var SHIFT = [24, 16, 8, 0];
  var K = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
  ];
  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'];

  var blocks = [];

  if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }

  if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (obj) {
      return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }

  var createOutputMethod = function (outputType, is224) {
    return function (message) {
      return new Sha256(is224, true).update(message)[outputType]();
    };
  };

  var createMethod = function (is224) {
    var method = createOutputMethod('hex', is224);
    if (NODE_JS) {
      method = nodeWrap(method, is224);
    }
    method.create = function () {
      return new Sha256(is224);
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type, is224);
    }
    return method;
  };

  var nodeWrap = function (method, is224) {
    var crypto = require('crypto')
    var Buffer = require('buffer').Buffer;
    var algorithm = is224 ? 'sha224' : 'sha256';
    var bufferFrom;
    if (Buffer.from && !root.JS_SHA256_NO_BUFFER_FROM) {
      bufferFrom = Buffer.from;
    } else {
      bufferFrom = function (message) {
        return new Buffer(message);
      };
    }
    var nodeMethod = function (message) {
      if (typeof message === 'string') {
        return crypto.createHash(algorithm).update(message, 'utf8').digest('hex');
      } else {
        if (message === null || message === undefined) {
          throw new Error(ERROR);
        } else if (message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        }
      }
      if (Array.isArray(message) || ArrayBuffer.isView(message) ||
        message.constructor === Buffer) {
        return crypto.createHash(algorithm).update(bufferFrom(message)).digest('hex');
      } else {
        return method(message);
      }
    };
    return nodeMethod;
  };

  var createHmacOutputMethod = function (outputType, is224) {
    return function (key, message) {
      return new HmacSha256(key, is224, true).update(message)[outputType]();
    };
  };

  var createHmacMethod = function (is224) {
    var method = createHmacOutputMethod('hex', is224);
    method.create = function (key) {
      return new HmacSha256(key, is224);
    };
    method.update = function (key, message) {
      return method.create(key).update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createHmacOutputMethod(type, is224);
    }
    return method;
  };

  function Sha256(is224, sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      this.blocks = blocks;
    } else {
      this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    if (is224) {
      this.h0 = 0xc1059ed8;
      this.h1 = 0x367cd507;
      this.h2 = 0x3070dd17;
      this.h3 = 0xf70e5939;
      this.h4 = 0xffc00b31;
      this.h5 = 0x68581511;
      this.h6 = 0x64f98fa7;
      this.h7 = 0xbefa4fa4;
    } else { // 256
      this.h0 = 0x6a09e667;
      this.h1 = 0xbb67ae85;
      this.h2 = 0x3c6ef372;
      this.h3 = 0xa54ff53a;
      this.h4 = 0x510e527f;
      this.h5 = 0x9b05688c;
      this.h6 = 0x1f83d9ab;
      this.h7 = 0x5be0cd19;
    }

    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
    this.is224 = is224;
  }

  Sha256.prototype.update = function (message) {
    if (this.finalized) {
      return;
    }
    var notString, type = typeof message;
    if (type !== 'string') {
      if (type === 'object') {
        if (message === null) {
          throw new Error(ERROR);
        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        } else if (!Array.isArray(message)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
            throw new Error(ERROR);
          }
        }
      } else {
        throw new Error(ERROR);
      }
      notString = true;
    }
    var code, index = 0, i, length = message.length, blocks = this.blocks;
    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = this.block;
        this.block = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
          blocks[4] = blocks[5] = blocks[6] = blocks[7] =
          blocks[8] = blocks[9] = blocks[10] = blocks[11] =
          blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      }

      if (notString) {
        for (i = this.start; index < length && i < 64; ++index) {
          blocks[i >>> 2] |= message[index] << SHIFT[i++ & 3];
        }
      } else {
        for (i = this.start; index < length && i < 64; ++index) {
          code = message.charCodeAt(index);
          if (code < 0x80) {
            blocks[i >>> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >>> 2] |= (0xc0 | (code >>> 6)) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >>> 2] |= (0xe0 | (code >>> 12)) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | ((code >>> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
            blocks[i >>> 2] |= (0xf0 | (code >>> 18)) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | ((code >>> 12) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | ((code >>> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          }
        }
      }

      this.lastByteIndex = i;
      this.bytes += i - this.start;
      if (i >= 64) {
        this.block = blocks[16];
        this.start = i - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };

  Sha256.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks, i = this.lastByteIndex;
    blocks[16] = this.block;
    blocks[i >>> 2] |= EXTRA[i & 3];
    this.block = blocks[16];
    if (i >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      blocks[0] = this.block;
      blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
    }
    blocks[14] = this.hBytes << 3 | this.bytes >>> 29;
    blocks[15] = this.bytes << 3;
    this.hash();
  };

  Sha256.prototype.hash = function () {
    var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4, f = this.h5, g = this.h6,
      h = this.h7, blocks = this.blocks, j, s0, s1, maj, t1, t2, ch, ab, da, cd, bc;

    for (j = 16; j < 64; ++j) {
      // rightrotate
      t1 = blocks[j - 15];
      s0 = ((t1 >>> 7) | (t1 << 25)) ^ ((t1 >>> 18) | (t1 << 14)) ^ (t1 >>> 3);
      t1 = blocks[j - 2];
      s1 = ((t1 >>> 17) | (t1 << 15)) ^ ((t1 >>> 19) | (t1 << 13)) ^ (t1 >>> 10);
      blocks[j] = blocks[j - 16] + s0 + blocks[j - 7] + s1 << 0;
    }

    bc = b & c;
    for (j = 0; j < 64; j += 4) {
      if (this.first) {
        if (this.is224) {
          ab = 300032;
          t1 = blocks[0] - 1413257819;
          h = t1 - 150054599 << 0;
          d = t1 + 24177077 << 0;
        } else {
          ab = 704751109;
          t1 = blocks[0] - 210244248;
          h = t1 - 1521486534 << 0;
          d = t1 + 143694565 << 0;
        }
        this.first = false;
      } else {
        s0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));
        s1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));
        ab = a & b;
        maj = ab ^ (a & c) ^ bc;
        ch = (e & f) ^ (~e & g);
        t1 = h + s1 + ch + K[j] + blocks[j];
        t2 = s0 + maj;
        h = d + t1 << 0;
        d = t1 + t2 << 0;
      }
      s0 = ((d >>> 2) | (d << 30)) ^ ((d >>> 13) | (d << 19)) ^ ((d >>> 22) | (d << 10));
      s1 = ((h >>> 6) | (h << 26)) ^ ((h >>> 11) | (h << 21)) ^ ((h >>> 25) | (h << 7));
      da = d & a;
      maj = da ^ (d & b) ^ ab;
      ch = (h & e) ^ (~h & f);
      t1 = g + s1 + ch + K[j + 1] + blocks[j + 1];
      t2 = s0 + maj;
      g = c + t1 << 0;
      c = t1 + t2 << 0;
      s0 = ((c >>> 2) | (c << 30)) ^ ((c >>> 13) | (c << 19)) ^ ((c >>> 22) | (c << 10));
      s1 = ((g >>> 6) | (g << 26)) ^ ((g >>> 11) | (g << 21)) ^ ((g >>> 25) | (g << 7));
      cd = c & d;
      maj = cd ^ (c & a) ^ da;
      ch = (g & h) ^ (~g & e);
      t1 = f + s1 + ch + K[j + 2] + blocks[j + 2];
      t2 = s0 + maj;
      f = b + t1 << 0;
      b = t1 + t2 << 0;
      s0 = ((b >>> 2) | (b << 30)) ^ ((b >>> 13) | (b << 19)) ^ ((b >>> 22) | (b << 10));
      s1 = ((f >>> 6) | (f << 26)) ^ ((f >>> 11) | (f << 21)) ^ ((f >>> 25) | (f << 7));
      bc = b & c;
      maj = bc ^ (b & d) ^ cd;
      ch = (f & g) ^ (~f & h);
      t1 = e + s1 + ch + K[j + 3] + blocks[j + 3];
      t2 = s0 + maj;
      e = a + t1 << 0;
      a = t1 + t2 << 0;
      this.chromeBugWorkAround = true;
    }

    this.h0 = this.h0 + a << 0;
    this.h1 = this.h1 + b << 0;
    this.h2 = this.h2 + c << 0;
    this.h3 = this.h3 + d << 0;
    this.h4 = this.h4 + e << 0;
    this.h5 = this.h5 + f << 0;
    this.h6 = this.h6 + g << 0;
    this.h7 = this.h7 + h << 0;
  };

  Sha256.prototype.hex = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5,
      h6 = this.h6, h7 = this.h7;

    var hex = HEX_CHARS[(h0 >>> 28) & 0x0F] + HEX_CHARS[(h0 >>> 24) & 0x0F] +
      HEX_CHARS[(h0 >>> 20) & 0x0F] + HEX_CHARS[(h0 >>> 16) & 0x0F] +
      HEX_CHARS[(h0 >>> 12) & 0x0F] + HEX_CHARS[(h0 >>> 8) & 0x0F] +
      HEX_CHARS[(h0 >>> 4) & 0x0F] + HEX_CHARS[h0 & 0x0F] +
      HEX_CHARS[(h1 >>> 28) & 0x0F] + HEX_CHARS[(h1 >>> 24) & 0x0F] +
      HEX_CHARS[(h1 >>> 20) & 0x0F] + HEX_CHARS[(h1 >>> 16) & 0x0F] +
      HEX_CHARS[(h1 >>> 12) & 0x0F] + HEX_CHARS[(h1 >>> 8) & 0x0F] +
      HEX_CHARS[(h1 >>> 4) & 0x0F] + HEX_CHARS[h1 & 0x0F] +
      HEX_CHARS[(h2 >>> 28) & 0x0F] + HEX_CHARS[(h2 >>> 24) & 0x0F] +
      HEX_CHARS[(h2 >>> 20) & 0x0F] + HEX_CHARS[(h2 >>> 16) & 0x0F] +
      HEX_CHARS[(h2 >>> 12) & 0x0F] + HEX_CHARS[(h2 >>> 8) & 0x0F] +
      HEX_CHARS[(h2 >>> 4) & 0x0F] + HEX_CHARS[h2 & 0x0F] +
      HEX_CHARS[(h3 >>> 28) & 0x0F] + HEX_CHARS[(h3 >>> 24) & 0x0F] +
      HEX_CHARS[(h3 >>> 20) & 0x0F] + HEX_CHARS[(h3 >>> 16) & 0x0F] +
      HEX_CHARS[(h3 >>> 12) & 0x0F] + HEX_CHARS[(h3 >>> 8) & 0x0F] +
      HEX_CHARS[(h3 >>> 4) & 0x0F] + HEX_CHARS[h3 & 0x0F] +
      HEX_CHARS[(h4 >>> 28) & 0x0F] + HEX_CHARS[(h4 >>> 24) & 0x0F] +
      HEX_CHARS[(h4 >>> 20) & 0x0F] + HEX_CHARS[(h4 >>> 16) & 0x0F] +
      HEX_CHARS[(h4 >>> 12) & 0x0F] + HEX_CHARS[(h4 >>> 8) & 0x0F] +
      HEX_CHARS[(h4 >>> 4) & 0x0F] + HEX_CHARS[h4 & 0x0F] +
      HEX_CHARS[(h5 >>> 28) & 0x0F] + HEX_CHARS[(h5 >>> 24) & 0x0F] +
      HEX_CHARS[(h5 >>> 20) & 0x0F] + HEX_CHARS[(h5 >>> 16) & 0x0F] +
      HEX_CHARS[(h5 >>> 12) & 0x0F] + HEX_CHARS[(h5 >>> 8) & 0x0F] +
      HEX_CHARS[(h5 >>> 4) & 0x0F] + HEX_CHARS[h5 & 0x0F] +
      HEX_CHARS[(h6 >>> 28) & 0x0F] + HEX_CHARS[(h6 >>> 24) & 0x0F] +
      HEX_CHARS[(h6 >>> 20) & 0x0F] + HEX_CHARS[(h6 >>> 16) & 0x0F] +
      HEX_CHARS[(h6 >>> 12) & 0x0F] + HEX_CHARS[(h6 >>> 8) & 0x0F] +
      HEX_CHARS[(h6 >>> 4) & 0x0F] + HEX_CHARS[h6 & 0x0F];
    if (!this.is224) {
      hex += HEX_CHARS[(h7 >>> 28) & 0x0F] + HEX_CHARS[(h7 >>> 24) & 0x0F] +
        HEX_CHARS[(h7 >>> 20) & 0x0F] + HEX_CHARS[(h7 >>> 16) & 0x0F] +
        HEX_CHARS[(h7 >>> 12) & 0x0F] + HEX_CHARS[(h7 >>> 8) & 0x0F] +
        HEX_CHARS[(h7 >>> 4) & 0x0F] + HEX_CHARS[h7 & 0x0F];
    }
    return hex;
  };

  Sha256.prototype.toString = Sha256.prototype.hex;

  Sha256.prototype.digest = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5,
      h6 = this.h6, h7 = this.h7;

    var arr = [
      (h0 >>> 24) & 0xFF, (h0 >>> 16) & 0xFF, (h0 >>> 8) & 0xFF, h0 & 0xFF,
      (h1 >>> 24) & 0xFF, (h1 >>> 16) & 0xFF, (h1 >>> 8) & 0xFF, h1 & 0xFF,
      (h2 >>> 24) & 0xFF, (h2 >>> 16) & 0xFF, (h2 >>> 8) & 0xFF, h2 & 0xFF,
      (h3 >>> 24) & 0xFF, (h3 >>> 16) & 0xFF, (h3 >>> 8) & 0xFF, h3 & 0xFF,
      (h4 >>> 24) & 0xFF, (h4 >>> 16) & 0xFF, (h4 >>> 8) & 0xFF, h4 & 0xFF,
      (h5 >>> 24) & 0xFF, (h5 >>> 16) & 0xFF, (h5 >>> 8) & 0xFF, h5 & 0xFF,
      (h6 >>> 24) & 0xFF, (h6 >>> 16) & 0xFF, (h6 >>> 8) & 0xFF, h6 & 0xFF
    ];
    if (!this.is224) {
      arr.push((h7 >>> 24) & 0xFF, (h7 >>> 16) & 0xFF, (h7 >>> 8) & 0xFF, h7 & 0xFF);
    }
    return arr;
  };

  Sha256.prototype.array = Sha256.prototype.digest;

  Sha256.prototype.arrayBuffer = function () {
    this.finalize();

    var buffer = new ArrayBuffer(this.is224 ? 28 : 32);
    var dataView = new DataView(buffer);
    dataView.setUint32(0, this.h0);
    dataView.setUint32(4, this.h1);
    dataView.setUint32(8, this.h2);
    dataView.setUint32(12, this.h3);
    dataView.setUint32(16, this.h4);
    dataView.setUint32(20, this.h5);
    dataView.setUint32(24, this.h6);
    if (!this.is224) {
      dataView.setUint32(28, this.h7);
    }
    return buffer;
  };

  function HmacSha256(key, is224, sharedMemory) {
    var i, type = typeof key;
    if (type === 'string') {
      var bytes = [], length = key.length, index = 0, code;
      for (i = 0; i < length; ++i) {
        code = key.charCodeAt(i);
        if (code < 0x80) {
          bytes[index++] = code;
        } else if (code < 0x800) {
          bytes[index++] = (0xc0 | (code >>> 6));
          bytes[index++] = (0x80 | (code & 0x3f));
        } else if (code < 0xd800 || code >= 0xe000) {
          bytes[index++] = (0xe0 | (code >>> 12));
          bytes[index++] = (0x80 | ((code >>> 6) & 0x3f));
          bytes[index++] = (0x80 | (code & 0x3f));
        } else {
          code = 0x10000 + (((code & 0x3ff) << 10) | (key.charCodeAt(++i) & 0x3ff));
          bytes[index++] = (0xf0 | (code >>> 18));
          bytes[index++] = (0x80 | ((code >>> 12) & 0x3f));
          bytes[index++] = (0x80 | ((code >>> 6) & 0x3f));
          bytes[index++] = (0x80 | (code & 0x3f));
        }
      }
      key = bytes;
    } else {
      if (type === 'object') {
        if (key === null) {
          throw new Error(ERROR);
        } else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) {
          key = new Uint8Array(key);
        } else if (!Array.isArray(key)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) {
            throw new Error(ERROR);
          }
        }
      } else {
        throw new Error(ERROR);
      }
    }

    if (key.length > 64) {
      key = (new Sha256(is224, true)).update(key).array();
    }

    var oKeyPad = [], iKeyPad = [];
    for (i = 0; i < 64; ++i) {
      var b = key[i] || 0;
      oKeyPad[i] = 0x5c ^ b;
      iKeyPad[i] = 0x36 ^ b;
    }

    Sha256.call(this, is224, sharedMemory);

    this.update(iKeyPad);
    this.oKeyPad = oKeyPad;
    this.inner = true;
    this.sharedMemory = sharedMemory;
  }
  HmacSha256.prototype = new Sha256();

  HmacSha256.prototype.finalize = function () {
    Sha256.prototype.finalize.call(this);
    if (this.inner) {
      this.inner = false;
      var innerHash = this.array();
      Sha256.call(this, this.is224, this.sharedMemory);
      this.update(this.oKeyPad);
      this.update(innerHash);
      Sha256.prototype.finalize.call(this);
    }
  };

  var exports = createMethod();
  exports.sha256 = exports;
  exports.sha224 = createMethod(true);
  exports.sha256.hmac = createHmacMethod();
  exports.sha224.hmac = createHmacMethod(true);

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    root.sha256 = exports.sha256;
    root.sha224 = exports.sha224;
    if (AMD) {
      define(function () {
        return exports;
      });
    }
  }
})();

}).call(this)}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":41,"buffer":36,"crypto":36}],40:[function(require,module,exports){
(function (process,global){(function (){
/*
 * [js-sha512]{@link https://github.com/emn178/js-sha512}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2024
 * @license MIT
 */
/*jslint bitwise: true */
(function () {
  'use strict';

  var INPUT_ERROR = 'input is invalid type';
  var FINALIZE_ERROR = 'finalize already called';
  var WINDOW = typeof window === 'object';
  var root = WINDOW ? window : {};
  if (root.JS_SHA512_NO_WINDOW) {
    WINDOW = false;
  }
  var WEB_WORKER = !WINDOW && typeof self === 'object';
  var NODE_JS = !root.JS_SHA512_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = global;
  } else if (WEB_WORKER) {
    root = self;
  }
  var COMMON_JS = !root.JS_SHA512_NO_COMMON_JS && typeof module === 'object' && module.exports;
  var AMD = typeof define === 'function' && define.amd;
  var ARRAY_BUFFER = !root.JS_SHA512_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [-2147483648, 8388608, 32768, 128];
  var SHIFT = [24, 16, 8, 0];
  var K = [
    0x428A2F98, 0xD728AE22, 0x71374491, 0x23EF65CD,
    0xB5C0FBCF, 0xEC4D3B2F, 0xE9B5DBA5, 0x8189DBBC,
    0x3956C25B, 0xF348B538, 0x59F111F1, 0xB605D019,
    0x923F82A4, 0xAF194F9B, 0xAB1C5ED5, 0xDA6D8118,
    0xD807AA98, 0xA3030242, 0x12835B01, 0x45706FBE,
    0x243185BE, 0x4EE4B28C, 0x550C7DC3, 0xD5FFB4E2,
    0x72BE5D74, 0xF27B896F, 0x80DEB1FE, 0x3B1696B1,
    0x9BDC06A7, 0x25C71235, 0xC19BF174, 0xCF692694,
    0xE49B69C1, 0x9EF14AD2, 0xEFBE4786, 0x384F25E3,
    0x0FC19DC6, 0x8B8CD5B5, 0x240CA1CC, 0x77AC9C65,
    0x2DE92C6F, 0x592B0275, 0x4A7484AA, 0x6EA6E483,
    0x5CB0A9DC, 0xBD41FBD4, 0x76F988DA, 0x831153B5,
    0x983E5152, 0xEE66DFAB, 0xA831C66D, 0x2DB43210,
    0xB00327C8, 0x98FB213F, 0xBF597FC7, 0xBEEF0EE4,
    0xC6E00BF3, 0x3DA88FC2, 0xD5A79147, 0x930AA725,
    0x06CA6351, 0xE003826F, 0x14292967, 0x0A0E6E70,
    0x27B70A85, 0x46D22FFC, 0x2E1B2138, 0x5C26C926,
    0x4D2C6DFC, 0x5AC42AED, 0x53380D13, 0x9D95B3DF,
    0x650A7354, 0x8BAF63DE, 0x766A0ABB, 0x3C77B2A8,
    0x81C2C92E, 0x47EDAEE6, 0x92722C85, 0x1482353B,
    0xA2BFE8A1, 0x4CF10364, 0xA81A664B, 0xBC423001,
    0xC24B8B70, 0xD0F89791, 0xC76C51A3, 0x0654BE30,
    0xD192E819, 0xD6EF5218, 0xD6990624, 0x5565A910,
    0xF40E3585, 0x5771202A, 0x106AA070, 0x32BBD1B8,
    0x19A4C116, 0xB8D2D0C8, 0x1E376C08, 0x5141AB53,
    0x2748774C, 0xDF8EEB99, 0x34B0BCB5, 0xE19B48A8,
    0x391C0CB3, 0xC5C95A63, 0x4ED8AA4A, 0xE3418ACB,
    0x5B9CCA4F, 0x7763E373, 0x682E6FF3, 0xD6B2B8A3,
    0x748F82EE, 0x5DEFB2FC, 0x78A5636F, 0x43172F60,
    0x84C87814, 0xA1F0AB72, 0x8CC70208, 0x1A6439EC,
    0x90BEFFFA, 0x23631E28, 0xA4506CEB, 0xDE82BDE9,
    0xBEF9A3F7, 0xB2C67915, 0xC67178F2, 0xE372532B,
    0xCA273ECE, 0xEA26619C, 0xD186B8C7, 0x21C0C207,
    0xEADA7DD6, 0xCDE0EB1E, 0xF57D4F7F, 0xEE6ED178,
    0x06F067AA, 0x72176FBA, 0x0A637DC5, 0xA2C898A6,
    0x113F9804, 0xBEF90DAE, 0x1B710B35, 0x131C471B,
    0x28DB77F5, 0x23047D84, 0x32CAAB7B, 0x40C72493,
    0x3C9EBE0A, 0x15C9BEBC, 0x431D67C4, 0x9C100D4C,
    0x4CC5D4BE, 0xCB3E42B6, 0x597F299C, 0xFC657E2A,
    0x5FCB6FAB, 0x3AD6FAEC, 0x6C44198C, 0x4A475817
  ];

  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'];

  var blocks = [];

  var isArray = Array.isArray;
  if (root.JS_SHA512_NO_NODE_JS || !isArray) {
    isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }

  var isView = ArrayBuffer.isView;
  if (ARRAY_BUFFER && (root.JS_SHA512_NO_ARRAY_BUFFER_IS_VIEW || !isView)) {
    isView = function (obj) {
      return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }

  // [message: string, isString: bool]
  var formatMessage = function (message) {
    var type = typeof message;
    if (type === 'string') {
      return [message, true];
    }
    if (type !== 'object' || message === null) {
      throw new Error(INPUT_ERROR);
    }
    if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
      return [new Uint8Array(message), false];
    }
    if (!isArray(message) && !isView(message)) {
      throw new Error(INPUT_ERROR);
    }
    return [message, false];
  }

  var createOutputMethod = function (outputType, bits) {
    return function (message) {
      return new Sha512(bits, true).update(message)[outputType]();
    };
  };

  var createMethod = function (bits) {
    var method = createOutputMethod('hex', bits);
    method.create = function () {
      return new Sha512(bits);
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type, bits);
    }
    return method;
  };

  var createHmacOutputMethod = function (outputType, bits) {
    return function (key, message) {
      return new HmacSha512(key, bits, true).update(message)[outputType]();
    };
  };

  var createHmacMethod = function (bits) {
    var method = createHmacOutputMethod('hex', bits);
    method.create = function (key) {
      return new HmacSha512(key, bits);
    };
    method.update = function (key, message) {
      return method.create(key).update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createHmacOutputMethod(type, bits);
    }
    return method;
  };

  function Sha512(bits, sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[1] = blocks[2] = blocks[3] = blocks[4] =
      blocks[5] = blocks[6] = blocks[7] = blocks[8] =
      blocks[9] = blocks[10] = blocks[11] = blocks[12] =
      blocks[13] = blocks[14] = blocks[15] = blocks[16] =
      blocks[17] = blocks[18] = blocks[19] = blocks[20] =
      blocks[21] = blocks[22] = blocks[23] = blocks[24] =
      blocks[25] = blocks[26] = blocks[27] = blocks[28] =
      blocks[29] = blocks[30] = blocks[31] = blocks[32] = 0;
      this.blocks = blocks;
    } else {
      this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    if (bits == 384) {
      this.h0h = 0xCBBB9D5D;
      this.h0l = 0xC1059ED8;
      this.h1h = 0x629A292A;
      this.h1l = 0x367CD507;
      this.h2h = 0x9159015A;
      this.h2l = 0x3070DD17;
      this.h3h = 0x152FECD8;
      this.h3l = 0xF70E5939;
      this.h4h = 0x67332667;
      this.h4l = 0xFFC00B31;
      this.h5h = 0x8EB44A87;
      this.h5l = 0x68581511;
      this.h6h = 0xDB0C2E0D;
      this.h6l = 0x64F98FA7;
      this.h7h = 0x47B5481D;
      this.h7l = 0xBEFA4FA4;
    } else if (bits == 256) {
      this.h0h = 0x22312194;
      this.h0l = 0xFC2BF72C;
      this.h1h = 0x9F555FA3;
      this.h1l = 0xC84C64C2;
      this.h2h = 0x2393B86B;
      this.h2l = 0x6F53B151;
      this.h3h = 0x96387719;
      this.h3l = 0x5940EABD;
      this.h4h = 0x96283EE2;
      this.h4l = 0xA88EFFE3;
      this.h5h = 0xBE5E1E25;
      this.h5l = 0x53863992;
      this.h6h = 0x2B0199FC;
      this.h6l = 0x2C85B8AA;
      this.h7h = 0x0EB72DDC;
      this.h7l = 0x81C52CA2;
    } else if (bits == 224) {
      this.h0h = 0x8C3D37C8;
      this.h0l = 0x19544DA2;
      this.h1h = 0x73E19966;
      this.h1l = 0x89DCD4D6;
      this.h2h = 0x1DFAB7AE;
      this.h2l = 0x32FF9C82;
      this.h3h = 0x679DD514;
      this.h3l = 0x582F9FCF;
      this.h4h = 0x0F6D2B69;
      this.h4l = 0x7BD44DA8;
      this.h5h = 0x77E36F73;
      this.h5l = 0x04C48942;
      this.h6h = 0x3F9D85A8;
      this.h6l = 0x6A1D36C8;
      this.h7h = 0x1112E6AD;
      this.h7l = 0x91D692A1;
    } else { // 512
      this.h0h = 0x6A09E667;
      this.h0l = 0xF3BCC908;
      this.h1h = 0xBB67AE85;
      this.h1l = 0x84CAA73B;
      this.h2h = 0x3C6EF372;
      this.h2l = 0xFE94F82B;
      this.h3h = 0xA54FF53A;
      this.h3l = 0x5F1D36F1;
      this.h4h = 0x510E527F;
      this.h4l = 0xADE682D1;
      this.h5h = 0x9B05688C;
      this.h5l = 0x2B3E6C1F;
      this.h6h = 0x1F83D9AB;
      this.h6l = 0xFB41BD6B;
      this.h7h = 0x5BE0CD19;
      this.h7l = 0x137E2179;
    }
    this.bits = bits;

    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
  }

  Sha512.prototype.update = function (message) {
    if (this.finalized) {
      throw new Error(FINALIZE_ERROR);
    }
    var result = formatMessage(message);
    message = result[0];
    var isString = result[1];
    var code, index = 0, i, length = message.length, blocks = this.blocks;

    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = this.block;
        this.block = blocks[1] = blocks[2] = blocks[3] = blocks[4] =
        blocks[5] = blocks[6] = blocks[7] = blocks[8] =
        blocks[9] = blocks[10] = blocks[11] = blocks[12] =
        blocks[13] = blocks[14] = blocks[15] = blocks[16] =
        blocks[17] = blocks[18] = blocks[19] = blocks[20] =
        blocks[21] = blocks[22] = blocks[23] = blocks[24] =
        blocks[25] = blocks[26] = blocks[27] = blocks[28] =
        blocks[29] = blocks[30] = blocks[31] = blocks[32] = 0;
      }

      if(isString) {
        for (i = this.start; index < length && i < 128; ++index) {
          code = message.charCodeAt(index);
          if (code < 0x80) {
            blocks[i >>> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >>> 2] |= (0xc0 | (code >>> 6)) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >>> 2] |= (0xe0 | (code >>> 12)) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | ((code >>> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
            blocks[i >>> 2] |= (0xf0 | (code >>> 18)) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | ((code >>> 12) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | ((code >>> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          }
        }
      } else {
        for (i = this.start; index < length && i < 128; ++index) {
          blocks[i >>> 2] |= message[index] << SHIFT[i++ & 3];
        }
      }

      this.lastByteIndex = i;
      this.bytes += i - this.start;
      if (i >= 128) {
        this.block = blocks[32];
        this.start = i - 128;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };

  Sha512.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks, i = this.lastByteIndex;
    blocks[32] = this.block;
    blocks[i >>> 2] |= EXTRA[i & 3];
    this.block = blocks[32];
    if (i >= 112) {
      if (!this.hashed) {
        this.hash();
      }
      blocks[0] = this.block;
      blocks[1] = blocks[2] = blocks[3] = blocks[4] =
      blocks[5] = blocks[6] = blocks[7] = blocks[8] =
      blocks[9] = blocks[10] = blocks[11] = blocks[12] =
      blocks[13] = blocks[14] = blocks[15] = blocks[16] =
      blocks[17] = blocks[18] = blocks[19] = blocks[20] =
      blocks[21] = blocks[22] = blocks[23] = blocks[24] =
      blocks[25] = blocks[26] = blocks[27] = blocks[28] =
      blocks[29] = blocks[30] = blocks[31] = blocks[32] = 0;
    }
    blocks[30] = this.hBytes << 3 | this.bytes >>> 29;
    blocks[31] = this.bytes << 3;
    this.hash();
  };

  Sha512.prototype.hash = function () {
    var h0h = this.h0h, h0l = this.h0l, h1h = this.h1h, h1l = this.h1l,
      h2h = this.h2h, h2l = this.h2l, h3h = this.h3h, h3l = this.h3l,
      h4h = this.h4h, h4l = this.h4l, h5h = this.h5h, h5l = this.h5l,
      h6h = this.h6h, h6l = this.h6l, h7h = this.h7h, h7l = this.h7l,
      blocks = this.blocks, j, s0h, s0l, s1h, s1l, c1, c2, c3, c4,
      abh, abl, dah, dal, cdh, cdl, bch, bcl,
      majh, majl, t1h, t1l, t2h, t2l, chh, chl;

    for (j = 32; j < 160; j += 2) {
      t1h = blocks[j - 30];
      t1l = blocks[j - 29];
      s0h = ((t1h >>> 1) | (t1l << 31)) ^ ((t1h >>> 8) | (t1l << 24)) ^ (t1h >>> 7);
      s0l = ((t1l >>> 1) | (t1h << 31)) ^ ((t1l >>> 8) | (t1h << 24)) ^ ((t1l >>> 7) | t1h << 25);

      t1h = blocks[j - 4];
      t1l = blocks[j - 3];
      s1h = ((t1h >>> 19) | (t1l << 13)) ^ ((t1l >>> 29) | (t1h << 3)) ^ (t1h >>> 6);
      s1l = ((t1l >>> 19) | (t1h << 13)) ^ ((t1h >>> 29) | (t1l << 3)) ^ ((t1l >>> 6) | t1h << 26);

      t1h = blocks[j - 32];
      t1l = blocks[j - 31];
      t2h = blocks[j - 14];
      t2l = blocks[j - 13];

      c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF) + (s0l & 0xFFFF) + (s1l & 0xFFFF);
      c2 = (t2l >>> 16) + (t1l >>> 16) + (s0l >>> 16) + (s1l >>> 16) + (c1 >>> 16);
      c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (s0h & 0xFFFF) + (s1h & 0xFFFF) + (c2 >>> 16);
      c4 = (t2h >>> 16) + (t1h >>> 16) + (s0h >>> 16) + (s1h >>> 16) + (c3 >>> 16);

      blocks[j] = (c4 << 16) | (c3 & 0xFFFF);
      blocks[j + 1] = (c2 << 16) | (c1 & 0xFFFF);
    }

    var ah = h0h, al = h0l, bh = h1h, bl = h1l, ch = h2h, cl = h2l, dh = h3h, dl = h3l, eh = h4h, el = h4l, fh = h5h, fl = h5l, gh = h6h, gl = h6l, hh = h7h, hl = h7l;
    bch = bh & ch;
    bcl = bl & cl;
    for (j = 0; j < 160; j += 8) {
      s0h = ((ah >>> 28) | (al << 4)) ^ ((al >>> 2) | (ah << 30)) ^ ((al >>> 7) | (ah << 25));
      s0l = ((al >>> 28) | (ah << 4)) ^ ((ah >>> 2) | (al << 30)) ^ ((ah >>> 7) | (al << 25));

      s1h = ((eh >>> 14) | (el << 18)) ^ ((eh >>> 18) | (el << 14)) ^ ((el >>> 9) | (eh << 23));
      s1l = ((el >>> 14) | (eh << 18)) ^ ((el >>> 18) | (eh << 14)) ^ ((eh >>> 9) | (el << 23));

      abh = ah & bh;
      abl = al & bl;
      majh = abh ^ (ah & ch) ^ bch;
      majl = abl ^ (al & cl) ^ bcl;

      chh = (eh & fh) ^ (~eh & gh);
      chl = (el & fl) ^ (~el & gl);

      t1h = blocks[j];
      t1l = blocks[j + 1];
      t2h = K[j];
      t2l = K[j + 1];

      c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF) + (chl & 0xFFFF) + (s1l & 0xFFFF) + (hl & 0xFFFF);
      c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (hl >>> 16) + (c1 >>> 16);
      c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (chh & 0xFFFF) + (s1h & 0xFFFF) + (hh & 0xFFFF) + (c2 >>> 16);
      c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (hh >>> 16) + (c3 >>> 16);

      t1h = (c4 << 16) | (c3 & 0xFFFF);
      t1l = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (majl & 0xFFFF) + (s0l & 0xFFFF);
      c2 = (majl >>> 16) + (s0l >>> 16) + (c1 >>> 16);
      c3 = (majh & 0xFFFF) + (s0h & 0xFFFF) + (c2 >>> 16);
      c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);

      t2h = (c4 << 16) | (c3 & 0xFFFF);
      t2l = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (dl & 0xFFFF) + (t1l & 0xFFFF);
      c2 = (dl >>> 16) + (t1l >>> 16) + (c1 >>> 16);
      c3 = (dh & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
      c4 = (dh >>> 16) + (t1h >>> 16) + (c3 >>> 16);

      hh = (c4 << 16) | (c3 & 0xFFFF);
      hl = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF);
      c2 = (t2l >>> 16) + (t1l >>> 16) + (c1 >>> 16);
      c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
      c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);

      dh = (c4 << 16) | (c3 & 0xFFFF);
      dl = (c2 << 16) | (c1 & 0xFFFF);

      s0h = ((dh >>> 28) | (dl << 4)) ^ ((dl >>> 2) | (dh << 30)) ^ ((dl >>> 7) | (dh << 25));
      s0l = ((dl >>> 28) | (dh << 4)) ^ ((dh >>> 2) | (dl << 30)) ^ ((dh >>> 7) | (dl << 25));

      s1h = ((hh >>> 14) | (hl << 18)) ^ ((hh >>> 18) | (hl << 14)) ^ ((hl >>> 9) | (hh << 23));
      s1l = ((hl >>> 14) | (hh << 18)) ^ ((hl >>> 18) | (hh << 14)) ^ ((hh >>> 9) | (hl << 23));

      dah = dh & ah;
      dal = dl & al;
      majh = dah ^ (dh & bh) ^ abh;
      majl = dal ^ (dl & bl) ^ abl;

      chh = (hh & eh) ^ (~hh & fh);
      chl = (hl & el) ^ (~hl & fl);

      t1h = blocks[j + 2];
      t1l = blocks[j + 3];
      t2h = K[j + 2];
      t2l = K[j + 3];

      c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF) + (chl & 0xFFFF) + (s1l & 0xFFFF) + (gl & 0xFFFF);
      c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (gl >>> 16) + (c1 >>> 16);
      c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (chh & 0xFFFF) + (s1h & 0xFFFF) + (gh & 0xFFFF) + (c2 >>> 16);
      c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (gh >>> 16) + (c3 >>> 16);

      t1h = (c4 << 16) | (c3 & 0xFFFF);
      t1l = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (majl & 0xFFFF) + (s0l & 0xFFFF);
      c2 = (majl >>> 16) + (s0l >>> 16) + (c1 >>> 16);
      c3 = (majh & 0xFFFF) + (s0h & 0xFFFF) + (c2 >>> 16);
      c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);

      t2h = (c4 << 16) | (c3 & 0xFFFF);
      t2l = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (cl & 0xFFFF) + (t1l & 0xFFFF);
      c2 = (cl >>> 16) + (t1l >>> 16) + (c1 >>> 16);
      c3 = (ch & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
      c4 = (ch >>> 16) + (t1h >>> 16) + (c3 >>> 16);

      gh = (c4 << 16) | (c3 & 0xFFFF);
      gl = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF);
      c2 = (t2l >>> 16) + (t1l >>> 16) + (c1 >>> 16);
      c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
      c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);

      ch = (c4 << 16) | (c3 & 0xFFFF);
      cl = (c2 << 16) | (c1 & 0xFFFF);

      s0h = ((ch >>> 28) | (cl << 4)) ^ ((cl >>> 2) | (ch << 30)) ^ ((cl >>> 7) | (ch << 25));
      s0l = ((cl >>> 28) | (ch << 4)) ^ ((ch >>> 2) | (cl << 30)) ^ ((ch >>> 7) | (cl << 25));

      s1h = ((gh >>> 14) | (gl << 18)) ^ ((gh >>> 18) | (gl << 14)) ^ ((gl >>> 9) | (gh << 23));
      s1l = ((gl >>> 14) | (gh << 18)) ^ ((gl >>> 18) | (gh << 14)) ^ ((gh >>> 9) | (gl << 23));

      cdh = ch & dh;
      cdl = cl & dl;
      majh = cdh ^ (ch & ah) ^ dah;
      majl = cdl ^ (cl & al) ^ dal;

      chh = (gh & hh) ^ (~gh & eh);
      chl = (gl & hl) ^ (~gl & el);

      t1h = blocks[j + 4];
      t1l = blocks[j + 5];
      t2h = K[j + 4];
      t2l = K[j + 5];

      c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF) + (chl & 0xFFFF) + (s1l & 0xFFFF) + (fl & 0xFFFF);
      c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (fl >>> 16) + (c1 >>> 16);
      c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (chh & 0xFFFF) + (s1h & 0xFFFF) + (fh & 0xFFFF) + (c2 >>> 16);
      c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (fh >>> 16) + (c3 >>> 16);

      t1h = (c4 << 16) | (c3 & 0xFFFF);
      t1l = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (majl & 0xFFFF) + (s0l & 0xFFFF);
      c2 = (majl >>> 16) + (s0l >>> 16) + (c1 >>> 16);
      c3 = (majh & 0xFFFF) + (s0h & 0xFFFF) + (c2 >>> 16);
      c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);

      t2h = (c4 << 16) | (c3 & 0xFFFF);
      t2l = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (bl & 0xFFFF) + (t1l & 0xFFFF);
      c2 = (bl >>> 16) + (t1l >>> 16) + (c1 >>> 16);
      c3 = (bh & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
      c4 = (bh >>> 16) + (t1h >>> 16) + (c3 >>> 16);

      fh = (c4 << 16) | (c3 & 0xFFFF);
      fl = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF);
      c2 = (t2l >>> 16) + (t1l >>> 16) + (c1 >>> 16);
      c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
      c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);

      bh = (c4 << 16) | (c3 & 0xFFFF);
      bl = (c2 << 16) | (c1 & 0xFFFF);

      s0h = ((bh >>> 28) | (bl << 4)) ^ ((bl >>> 2) | (bh << 30)) ^ ((bl >>> 7) | (bh << 25));
      s0l = ((bl >>> 28) | (bh << 4)) ^ ((bh >>> 2) | (bl << 30)) ^ ((bh >>> 7) | (bl << 25));

      s1h = ((fh >>> 14) | (fl << 18)) ^ ((fh >>> 18) | (fl << 14)) ^ ((fl >>> 9) | (fh << 23));
      s1l = ((fl >>> 14) | (fh << 18)) ^ ((fl >>> 18) | (fh << 14)) ^ ((fh >>> 9) | (fl << 23));

      bch = bh & ch;
      bcl = bl & cl;
      majh = bch ^ (bh & dh) ^ cdh;
      majl = bcl ^ (bl & dl) ^ cdl;

      chh = (fh & gh) ^ (~fh & hh);
      chl = (fl & gl) ^ (~fl & hl);

      t1h = blocks[j + 6];
      t1l = blocks[j + 7];
      t2h = K[j + 6];
      t2l = K[j + 7];

      c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF) + (chl & 0xFFFF) + (s1l & 0xFFFF) + (el & 0xFFFF);
      c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (el >>> 16) + (c1 >>> 16);
      c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (chh & 0xFFFF) + (s1h & 0xFFFF) + (eh & 0xFFFF) + (c2 >>> 16);
      c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (eh >>> 16) + (c3 >>> 16);

      t1h = (c4 << 16) | (c3 & 0xFFFF);
      t1l = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (majl & 0xFFFF) + (s0l & 0xFFFF);
      c2 = (majl >>> 16) + (s0l >>> 16) + (c1 >>> 16);
      c3 = (majh & 0xFFFF) + (s0h & 0xFFFF) + (c2 >>> 16);
      c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);

      t2h = (c4 << 16) | (c3 & 0xFFFF);
      t2l = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (al & 0xFFFF) + (t1l & 0xFFFF);
      c2 = (al >>> 16) + (t1l >>> 16) + (c1 >>> 16);
      c3 = (ah & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
      c4 = (ah >>> 16) + (t1h >>> 16) + (c3 >>> 16);

      eh = (c4 << 16) | (c3 & 0xFFFF);
      el = (c2 << 16) | (c1 & 0xFFFF);

      c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF);
      c2 = (t2l >>> 16) + (t1l >>> 16) + (c1 >>> 16);
      c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
      c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);

      ah = (c4 << 16) | (c3 & 0xFFFF);
      al = (c2 << 16) | (c1 & 0xFFFF);
    }

    c1 = (h0l & 0xFFFF) + (al & 0xFFFF);
    c2 = (h0l >>> 16) + (al >>> 16) + (c1 >>> 16);
    c3 = (h0h & 0xFFFF) + (ah & 0xFFFF) + (c2 >>> 16);
    c4 = (h0h >>> 16) + (ah >>> 16) + (c3 >>> 16);

    this.h0h = (c4 << 16) | (c3 & 0xFFFF);
    this.h0l = (c2 << 16) | (c1 & 0xFFFF);

    c1 = (h1l & 0xFFFF) + (bl & 0xFFFF);
    c2 = (h1l >>> 16) + (bl >>> 16) + (c1 >>> 16);
    c3 = (h1h & 0xFFFF) + (bh & 0xFFFF) + (c2 >>> 16);
    c4 = (h1h >>> 16) + (bh >>> 16) + (c3 >>> 16);

    this.h1h = (c4 << 16) | (c3 & 0xFFFF);
    this.h1l = (c2 << 16) | (c1 & 0xFFFF);

    c1 = (h2l & 0xFFFF) + (cl & 0xFFFF);
    c2 = (h2l >>> 16) + (cl >>> 16) + (c1 >>> 16);
    c3 = (h2h & 0xFFFF) + (ch & 0xFFFF) + (c2 >>> 16);
    c4 = (h2h >>> 16) + (ch >>> 16) + (c3 >>> 16);

    this.h2h = (c4 << 16) | (c3 & 0xFFFF);
    this.h2l = (c2 << 16) | (c1 & 0xFFFF);

    c1 = (h3l & 0xFFFF) + (dl & 0xFFFF);
    c2 = (h3l >>> 16) + (dl >>> 16) + (c1 >>> 16);
    c3 = (h3h & 0xFFFF) + (dh & 0xFFFF) + (c2 >>> 16);
    c4 = (h3h >>> 16) + (dh >>> 16) + (c3 >>> 16);

    this.h3h = (c4 << 16) | (c3 & 0xFFFF);
    this.h3l = (c2 << 16) | (c1 & 0xFFFF);

    c1 = (h4l & 0xFFFF) + (el & 0xFFFF);
    c2 = (h4l >>> 16) + (el >>> 16) + (c1 >>> 16);
    c3 = (h4h & 0xFFFF) + (eh & 0xFFFF) + (c2 >>> 16);
    c4 = (h4h >>> 16) + (eh >>> 16) + (c3 >>> 16);

    this.h4h = (c4 << 16) | (c3 & 0xFFFF);
    this.h4l = (c2 << 16) | (c1 & 0xFFFF);

    c1 = (h5l & 0xFFFF) + (fl & 0xFFFF);
    c2 = (h5l >>> 16) + (fl >>> 16) + (c1 >>> 16);
    c3 = (h5h & 0xFFFF) + (fh & 0xFFFF) + (c2 >>> 16);
    c4 = (h5h >>> 16) + (fh >>> 16) + (c3 >>> 16);

    this.h5h = (c4 << 16) | (c3 & 0xFFFF);
    this.h5l = (c2 << 16) | (c1 & 0xFFFF);

    c1 = (h6l & 0xFFFF) + (gl & 0xFFFF);
    c2 = (h6l >>> 16) + (gl >>> 16) + (c1 >>> 16);
    c3 = (h6h & 0xFFFF) + (gh & 0xFFFF) + (c2 >>> 16);
    c4 = (h6h >>> 16) + (gh >>> 16) + (c3 >>> 16);

    this.h6h = (c4 << 16) | (c3 & 0xFFFF);
    this.h6l = (c2 << 16) | (c1 & 0xFFFF);

    c1 = (h7l & 0xFFFF) + (hl & 0xFFFF);
    c2 = (h7l >>> 16) + (hl >>> 16) + (c1 >>> 16);
    c3 = (h7h & 0xFFFF) + (hh & 0xFFFF) + (c2 >>> 16);
    c4 = (h7h >>> 16) + (hh >>> 16) + (c3 >>> 16);

    this.h7h = (c4 << 16) | (c3 & 0xFFFF);
    this.h7l = (c2 << 16) | (c1 & 0xFFFF);
  };

  Sha512.prototype.hex = function () {
    this.finalize();

    var h0h = this.h0h, h0l = this.h0l, h1h = this.h1h, h1l = this.h1l,
      h2h = this.h2h, h2l = this.h2l, h3h = this.h3h, h3l = this.h3l,
      h4h = this.h4h, h4l = this.h4l, h5h = this.h5h, h5l = this.h5l,
      h6h = this.h6h, h6l = this.h6l, h7h = this.h7h, h7l = this.h7l,
      bits = this.bits;

    var hex = HEX_CHARS[(h0h >>> 28) & 0x0F] + HEX_CHARS[(h0h >>> 24) & 0x0F] +
      HEX_CHARS[(h0h >>> 20) & 0x0F] + HEX_CHARS[(h0h >>> 16) & 0x0F] +
      HEX_CHARS[(h0h >>> 12) & 0x0F] + HEX_CHARS[(h0h >>> 8) & 0x0F] +
      HEX_CHARS[(h0h >>> 4) & 0x0F] + HEX_CHARS[h0h & 0x0F] +
      HEX_CHARS[(h0l >>> 28) & 0x0F] + HEX_CHARS[(h0l >>> 24) & 0x0F] +
      HEX_CHARS[(h0l >>> 20) & 0x0F] + HEX_CHARS[(h0l >>> 16) & 0x0F] +
      HEX_CHARS[(h0l >>> 12) & 0x0F] + HEX_CHARS[(h0l >>> 8) & 0x0F] +
      HEX_CHARS[(h0l >>> 4) & 0x0F] + HEX_CHARS[h0l & 0x0F] +
      HEX_CHARS[(h1h >>> 28) & 0x0F] + HEX_CHARS[(h1h >>> 24) & 0x0F] +
      HEX_CHARS[(h1h >>> 20) & 0x0F] + HEX_CHARS[(h1h >>> 16) & 0x0F] +
      HEX_CHARS[(h1h >>> 12) & 0x0F] + HEX_CHARS[(h1h >>> 8) & 0x0F] +
      HEX_CHARS[(h1h >>> 4) & 0x0F] + HEX_CHARS[h1h & 0x0F] +
      HEX_CHARS[(h1l >>> 28) & 0x0F] + HEX_CHARS[(h1l >>> 24) & 0x0F] +
      HEX_CHARS[(h1l >>> 20) & 0x0F] + HEX_CHARS[(h1l >>> 16) & 0x0F] +
      HEX_CHARS[(h1l >>> 12) & 0x0F] + HEX_CHARS[(h1l >>> 8) & 0x0F] +
      HEX_CHARS[(h1l >>> 4) & 0x0F] + HEX_CHARS[h1l & 0x0F] +
      HEX_CHARS[(h2h >>> 28) & 0x0F] + HEX_CHARS[(h2h >>> 24) & 0x0F] +
      HEX_CHARS[(h2h >>> 20) & 0x0F] + HEX_CHARS[(h2h >>> 16) & 0x0F] +
      HEX_CHARS[(h2h >>> 12) & 0x0F] + HEX_CHARS[(h2h >>> 8) & 0x0F] +
      HEX_CHARS[(h2h >>> 4) & 0x0F] + HEX_CHARS[h2h & 0x0F] +
      HEX_CHARS[(h2l >>> 28) & 0x0F] + HEX_CHARS[(h2l >>> 24) & 0x0F] +
      HEX_CHARS[(h2l >>> 20) & 0x0F] + HEX_CHARS[(h2l >>> 16) & 0x0F] +
      HEX_CHARS[(h2l >>> 12) & 0x0F] + HEX_CHARS[(h2l >>> 8) & 0x0F] +
      HEX_CHARS[(h2l >>> 4) & 0x0F] + HEX_CHARS[h2l & 0x0F] +
      HEX_CHARS[(h3h >>> 28) & 0x0F] + HEX_CHARS[(h3h >>> 24) & 0x0F] +
      HEX_CHARS[(h3h >>> 20) & 0x0F] + HEX_CHARS[(h3h >>> 16) & 0x0F] +
      HEX_CHARS[(h3h >>> 12) & 0x0F] + HEX_CHARS[(h3h >>> 8) & 0x0F] +
      HEX_CHARS[(h3h >>> 4) & 0x0F] + HEX_CHARS[h3h & 0x0F];
    if (bits >= 256) {
      hex += HEX_CHARS[(h3l >>> 28) & 0x0F] + HEX_CHARS[(h3l >>> 24) & 0x0F] +
        HEX_CHARS[(h3l >>> 20) & 0x0F] + HEX_CHARS[(h3l >>> 16) & 0x0F] +
        HEX_CHARS[(h3l >>> 12) & 0x0F] + HEX_CHARS[(h3l >>> 8) & 0x0F] +
        HEX_CHARS[(h3l >>> 4) & 0x0F] + HEX_CHARS[h3l & 0x0F];
    }
    if (bits >= 384) {
      hex += HEX_CHARS[(h4h >>> 28) & 0x0F] + HEX_CHARS[(h4h >>> 24) & 0x0F] +
        HEX_CHARS[(h4h >>> 20) & 0x0F] + HEX_CHARS[(h4h >>> 16) & 0x0F] +
        HEX_CHARS[(h4h >>> 12) & 0x0F] + HEX_CHARS[(h4h >>> 8) & 0x0F] +
        HEX_CHARS[(h4h >>> 4) & 0x0F] + HEX_CHARS[h4h & 0x0F] +
        HEX_CHARS[(h4l >>> 28) & 0x0F] + HEX_CHARS[(h4l >>> 24) & 0x0F] +
        HEX_CHARS[(h4l >>> 20) & 0x0F] + HEX_CHARS[(h4l >>> 16) & 0x0F] +
        HEX_CHARS[(h4l >>> 12) & 0x0F] + HEX_CHARS[(h4l >>> 8) & 0x0F] +
        HEX_CHARS[(h4l >>> 4) & 0x0F] + HEX_CHARS[h4l & 0x0F] +
        HEX_CHARS[(h5h >>> 28) & 0x0F] + HEX_CHARS[(h5h >>> 24) & 0x0F] +
        HEX_CHARS[(h5h >>> 20) & 0x0F] + HEX_CHARS[(h5h >>> 16) & 0x0F] +
        HEX_CHARS[(h5h >>> 12) & 0x0F] + HEX_CHARS[(h5h >>> 8) & 0x0F] +
        HEX_CHARS[(h5h >>> 4) & 0x0F] + HEX_CHARS[h5h & 0x0F] +
        HEX_CHARS[(h5l >>> 28) & 0x0F] + HEX_CHARS[(h5l >>> 24) & 0x0F] +
        HEX_CHARS[(h5l >>> 20) & 0x0F] + HEX_CHARS[(h5l >>> 16) & 0x0F] +
        HEX_CHARS[(h5l >>> 12) & 0x0F] + HEX_CHARS[(h5l >>> 8) & 0x0F] +
        HEX_CHARS[(h5l >>> 4) & 0x0F] + HEX_CHARS[h5l & 0x0F];
    }
    if (bits == 512) {
      hex += HEX_CHARS[(h6h >>> 28) & 0x0F] + HEX_CHARS[(h6h >>> 24) & 0x0F] +
        HEX_CHARS[(h6h >>> 20) & 0x0F] + HEX_CHARS[(h6h >>> 16) & 0x0F] +
        HEX_CHARS[(h6h >>> 12) & 0x0F] + HEX_CHARS[(h6h >>> 8) & 0x0F] +
        HEX_CHARS[(h6h >>> 4) & 0x0F] + HEX_CHARS[h6h & 0x0F] +
        HEX_CHARS[(h6l >>> 28) & 0x0F] + HEX_CHARS[(h6l >>> 24) & 0x0F] +
        HEX_CHARS[(h6l >>> 20) & 0x0F] + HEX_CHARS[(h6l >>> 16) & 0x0F] +
        HEX_CHARS[(h6l >>> 12) & 0x0F] + HEX_CHARS[(h6l >>> 8) & 0x0F] +
        HEX_CHARS[(h6l >>> 4) & 0x0F] + HEX_CHARS[h6l & 0x0F] +
        HEX_CHARS[(h7h >>> 28) & 0x0F] + HEX_CHARS[(h7h >>> 24) & 0x0F] +
        HEX_CHARS[(h7h >>> 20) & 0x0F] + HEX_CHARS[(h7h >>> 16) & 0x0F] +
        HEX_CHARS[(h7h >>> 12) & 0x0F] + HEX_CHARS[(h7h >>> 8) & 0x0F] +
        HEX_CHARS[(h7h >>> 4) & 0x0F] + HEX_CHARS[h7h & 0x0F] +
        HEX_CHARS[(h7l >>> 28) & 0x0F] + HEX_CHARS[(h7l >>> 24) & 0x0F] +
        HEX_CHARS[(h7l >>> 20) & 0x0F] + HEX_CHARS[(h7l >>> 16) & 0x0F] +
        HEX_CHARS[(h7l >>> 12) & 0x0F] + HEX_CHARS[(h7l >>> 8) & 0x0F] +
        HEX_CHARS[(h7l >>> 4) & 0x0F] + HEX_CHARS[h7l & 0x0F];
    }
    return hex;
  };

  Sha512.prototype.toString = Sha512.prototype.hex;

  Sha512.prototype.digest = function () {
    this.finalize();

    var h0h = this.h0h, h0l = this.h0l, h1h = this.h1h, h1l = this.h1l,
      h2h = this.h2h, h2l = this.h2l, h3h = this.h3h, h3l = this.h3l,
      h4h = this.h4h, h4l = this.h4l, h5h = this.h5h, h5l = this.h5l,
      h6h = this.h6h, h6l = this.h6l, h7h = this.h7h, h7l = this.h7l,
      bits = this.bits;

    var arr = [
      (h0h >>> 24) & 0xFF, (h0h >>> 16) & 0xFF, (h0h >>> 8) & 0xFF, h0h & 0xFF,
      (h0l >>> 24) & 0xFF, (h0l >>> 16) & 0xFF, (h0l >>> 8) & 0xFF, h0l & 0xFF,
      (h1h >>> 24) & 0xFF, (h1h >>> 16) & 0xFF, (h1h >>> 8) & 0xFF, h1h & 0xFF,
      (h1l >>> 24) & 0xFF, (h1l >>> 16) & 0xFF, (h1l >>> 8) & 0xFF, h1l & 0xFF,
      (h2h >>> 24) & 0xFF, (h2h >>> 16) & 0xFF, (h2h >>> 8) & 0xFF, h2h & 0xFF,
      (h2l >>> 24) & 0xFF, (h2l >>> 16) & 0xFF, (h2l >>> 8) & 0xFF, h2l & 0xFF,
      (h3h >>> 24) & 0xFF, (h3h >>> 16) & 0xFF, (h3h >>> 8) & 0xFF, h3h & 0xFF
    ];

    if (bits >= 256) {
      arr.push((h3l >>> 24) & 0xFF, (h3l >>> 16) & 0xFF, (h3l >>> 8) & 0xFF, h3l & 0xFF);
    }
    if (bits >= 384) {
      arr.push(
        (h4h >>> 24) & 0xFF, (h4h >>> 16) & 0xFF, (h4h >>> 8) & 0xFF, h4h & 0xFF,
        (h4l >>> 24) & 0xFF, (h4l >>> 16) & 0xFF, (h4l >>> 8) & 0xFF, h4l & 0xFF,
        (h5h >>> 24) & 0xFF, (h5h >>> 16) & 0xFF, (h5h >>> 8) & 0xFF, h5h & 0xFF,
        (h5l >>> 24) & 0xFF, (h5l >>> 16) & 0xFF, (h5l >>> 8) & 0xFF, h5l & 0xFF
      );
    }
    if (bits == 512) {
      arr.push(
        (h6h >>> 24) & 0xFF, (h6h >>> 16) & 0xFF, (h6h >>> 8) & 0xFF, h6h & 0xFF,
        (h6l >>> 24) & 0xFF, (h6l >>> 16) & 0xFF, (h6l >>> 8) & 0xFF, h6l & 0xFF,
        (h7h >>> 24) & 0xFF, (h7h >>> 16) & 0xFF, (h7h >>> 8) & 0xFF, h7h & 0xFF,
        (h7l >>> 24) & 0xFF, (h7l >>> 16) & 0xFF, (h7l >>> 8) & 0xFF, h7l & 0xFF
      );
    }
    return arr;
  };

  Sha512.prototype.array = Sha512.prototype.digest;

  Sha512.prototype.arrayBuffer = function () {
    this.finalize();

    var bits = this.bits;
    var buffer = new ArrayBuffer(bits / 8);
    var dataView = new DataView(buffer);
    dataView.setUint32(0, this.h0h);
    dataView.setUint32(4, this.h0l);
    dataView.setUint32(8, this.h1h);
    dataView.setUint32(12, this.h1l);
    dataView.setUint32(16, this.h2h);
    dataView.setUint32(20, this.h2l);
    dataView.setUint32(24, this.h3h);

    if (bits >= 256) {
      dataView.setUint32(28, this.h3l);
    }
    if (bits >= 384) {
      dataView.setUint32(32, this.h4h);
      dataView.setUint32(36, this.h4l);
      dataView.setUint32(40, this.h5h);
      dataView.setUint32(44, this.h5l);
    }
    if (bits == 512) {
      dataView.setUint32(48, this.h6h);
      dataView.setUint32(52, this.h6l);
      dataView.setUint32(56, this.h7h);
      dataView.setUint32(60, this.h7l);
    }
    return buffer;
  };

  Sha512.prototype.clone = function () {
    var hash = new Sha512(this.bits, false);
    this.copyTo(hash);
    return hash;
  };

  Sha512.prototype.copyTo = function (hash) {
    var i = 0, attrs = [
      'h0h', 'h0l', 'h1h', 'h1l', 'h2h', 'h2l', 'h3h', 'h3l', 'h4h', 'h4l', 'h5h', 'h5l', 'h6h', 'h6l', 'h7h', 'h7l',
      'start', 'bytes', 'hBytes', 'finalized', 'hashed', 'lastByteIndex'
    ];
    for (i = 0; i < attrs.length; ++i) {
      hash[attrs[i]] = this[attrs[i]];
    }
    for (i = 0; i < this.blocks.length; ++i) {
      hash.blocks[i] = this.blocks[i];
    }
  };

  function HmacSha512(key, bits, sharedMemory) {
    var i, result = formatMessage(key);
    key = result[0];
    if (result[1]) {
      var bytes = [], length = key.length, index = 0, code;
      for (var i = 0; i < length; ++i) {
        code = key.charCodeAt(i);
        if (code < 0x80) {
          bytes[index++] = code;
        } else if (code < 0x800) {
          bytes[index++] = (0xc0 | (code >>> 6));
          bytes[index++] = (0x80 | (code & 0x3f));
        } else if (code < 0xd800 || code >= 0xe000) {
          bytes[index++] = (0xe0 | (code >>> 12));
          bytes[index++] = (0x80 | ((code >>> 6) & 0x3f));
          bytes[index++] = (0x80 | (code & 0x3f));
        } else {
          code = 0x10000 + (((code & 0x3ff) << 10) | (key.charCodeAt(++i) & 0x3ff));
          bytes[index++] = (0xf0 | (code >>> 18));
          bytes[index++] = (0x80 | ((code >>> 12) & 0x3f));
          bytes[index++] = (0x80 | ((code >>> 6) & 0x3f));
          bytes[index++] = (0x80 | (code & 0x3f));
        }
      }
      key = bytes;
    }

    if (key.length > 128) {
      key = (new Sha512(bits, true)).update(key).array();
    }

    var oKeyPad = [], iKeyPad = [];
    for (var i = 0; i < 128; ++i) {
      var b = key[i] || 0;
      oKeyPad[i] = 0x5c ^ b;
      iKeyPad[i] = 0x36 ^ b;
    }

    Sha512.call(this, bits, sharedMemory);

    this.update(iKeyPad);
    this.oKeyPad = oKeyPad;
    this.inner = true;
    this.sharedMemory = sharedMemory;
  }
  HmacSha512.prototype = new Sha512();

  HmacSha512.prototype.finalize = function () {
    Sha512.prototype.finalize.call(this);
    if (this.inner) {
      this.inner = false;
      var innerHash = this.array();
      Sha512.call(this, this.bits, this.sharedMemory);
      this.update(this.oKeyPad);
      this.update(innerHash);
      Sha512.prototype.finalize.call(this);
    }
  };

  HmacSha512.prototype.clone = function () {
    var hash = new HmacSha512([], this.bits, false);
    this.copyTo(hash);
    hash.inner = this.inner;
    for (var i = 0; i < this.oKeyPad.length; ++i) {
      hash.oKeyPad[i] = this.oKeyPad[i];
    }
    return hash;
  };

  var exports = createMethod(512);
  exports.sha512 = exports;
  exports.sha384 = createMethod(384);
  exports.sha512_256 = createMethod(256);
  exports.sha512_224 = createMethod(224);
  exports.sha512.hmac = createHmacMethod(512);
  exports.sha384.hmac = createHmacMethod(384);
  exports.sha512_256.hmac = createHmacMethod(256);
  exports.sha512_224.hmac = createHmacMethod(224);

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    root.sha512 = exports.sha512;
    root.sha384 = exports.sha384;
    root.sha512_256 = exports.sha512_256;
    root.sha512_224 = exports.sha512_224;
    if (AMD) {
      define(function () {
        return exports;
      });
    }
  }
})();

}).call(this)}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":41}],41:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[1]);
