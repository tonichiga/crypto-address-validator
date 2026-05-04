import { getNetworkValidation, ValidatorModule } from "./config/networks";

export const validate = (
  network: string,
  address: string,
): {
  isValid: boolean;
  type: ValidatorModule | "regex" | null;
} => {
  if (!network || !address) {
    return { isValid: false, type: null };
  }

  const trimmedAddress = address.trim();
  if (!trimmedAddress) {
    return { isValid: false, type: null };
  }

  const validation = getNetworkValidation(network);
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
    isValid: validation.validator.isValidAddress(
      trimmedAddress,
      validation.currency,
      validation.opts,
    ),
    type: validation.validator,
  };
};
