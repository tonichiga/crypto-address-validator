import { ValidatorModule } from "./config/networks";
export declare const validate: (network: string, address: string) => {
    isValid: boolean;
    type: ValidatorModule | "regex" | null;
};
