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
