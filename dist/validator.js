"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const networks_1 = require("./config/networks");
const validate = (network, address) => {
    if (!network || !address) {
        return { isValid: false, type: null };
    }
    const trimmedAddress = address.trim();
    if (!trimmedAddress) {
        return { isValid: false, type: null };
    }
    const validation = (0, networks_1.getNetworkValidation)(network);
    if (!validation) {
        return { isValid: false, type: null };
    }
    const regexResult = validation.regex
        ? validation.regex.test(trimmedAddress)
        : null;
    if (regexResult === false) {
        return { isValid: false, type: "regex" };
    }
    if (!validation.validator) {
        return { isValid: regexResult === true, type: "regex" };
    }
    return {
        isValid: validation.validator.isValidAddress(trimmedAddress, validation.currency, validation.opts),
        type: validation.validator,
    };
};
exports.validate = validate;
