import { getNetworkValidation } from './config/networks';

export const validate = (network: string, address: string): boolean => {
  if (!network || !address) {
    return false;
  }

  const trimmedAddress = address.trim();
  if (!trimmedAddress) {
    return false;
  }

  const validation = getNetworkValidation(network);
  if (!validation) {
    return false;
  }

  if (validation.regex && !validation.regex.test(trimmedAddress)) {
    return false;
  }

  if (!validation.validator) {
    return Boolean(validation.regex);
  }

  return validation.validator.isValidAddress(
    trimmedAddress,
    validation.currency,
    validation.opts,
  );
};
