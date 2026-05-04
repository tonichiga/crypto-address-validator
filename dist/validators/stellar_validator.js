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
