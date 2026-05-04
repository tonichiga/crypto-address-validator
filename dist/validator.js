"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const networks_1 = require("./config/networks");
const validate = (network, address) => {
    if (!network || !address) {
        return false;
    }
    const trimmedAddress = address.trim();
    if (!trimmedAddress) {
        return false;
    }
    const validation = (0, networks_1.getNetworkValidation)(network);
    if (!validation) {
        return false;
    }
    if (validation.regex && !validation.regex.test(trimmedAddress)) {
        return false;
    }
    if (!validation.validator) {
        return Boolean(validation.regex);
    }
    return validation.validator.isValidAddress(trimmedAddress, validation.currency, validation.opts);
};
exports.validate = validate;
