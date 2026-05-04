export function encode(hrp: any, version: any, program: any): string;
export function decode(hrp: any, addr: any): {
    version: number;
    program: number[];
};
export function isValidAddress(address: any, currency: any, opts?: {}): boolean;
