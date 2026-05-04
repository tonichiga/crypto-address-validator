export function decode(bechString: any, enc: any): {
    hrp: any;
    data: number[];
};
export function encode(hrp: any, data: any, enc: any): string;
export namespace encodings {
    let BECH32: string;
    let BECH32M: string;
}
export function verifyChecksum(hrp: any, data: any, enc: any): boolean;
