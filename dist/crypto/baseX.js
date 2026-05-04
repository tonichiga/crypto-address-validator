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
