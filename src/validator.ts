import { getNetworkValidation, ValidatorModule } from "./config/networks";

export const validate = (
  network: string,
  address: string,
): {
  isValid: boolean;
  validator: ValidatorModule | string;
} => {
  if (!network || !address) {
    return { isValid: false, validator: null };
  }

  const trimmedAddress = address.trim();
  if (!trimmedAddress) {
    return { isValid: false, validator: null };
  }

  const validation = getNetworkValidation(network);
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
    isValid: validation.validator.isValidAddress(
      trimmedAddress,
      validation.currency,
      validation.opts,
    ),
    validator: validation.validator,
  };
};
