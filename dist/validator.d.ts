import { ValidatorModule } from "./config/networks";
export declare const validate: (network: string, address: string) => {
    isValid: boolean;
    validator: ValidatorModule | string;
};
