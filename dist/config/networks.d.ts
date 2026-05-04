export type ValidatorModule = {
    isValidAddress: (address: string, currency?: Record<string, unknown>, opts?: Record<string, unknown>) => boolean;
};
export type NetworkValidationConfig = {
    validator: ValidatorModule | null;
    regex: RegExp | null;
    currency?: Record<string, unknown>;
    opts?: Record<string, unknown>;
};
export declare const networkOptions: readonly [{
    readonly value: "bitcoin";
    readonly label: "Bitcoin";
}, {
    readonly value: "bitcoincash";
    readonly label: "Bitcoin Cash";
}, {
    readonly value: "bitcoinsv";
    readonly label: "Bitcoin SV";
}, {
    readonly value: "litecoin";
    readonly label: "Litecoin";
}, {
    readonly value: "dogecoin";
    readonly label: "Dogecoin";
}, {
    readonly value: "dash";
    readonly label: "Dash";
}, {
    readonly value: "decred";
    readonly label: "Decred";
}, {
    readonly value: "digibyte";
    readonly label: "DigiByte";
}, {
    readonly value: "zcash";
    readonly label: "Zcash";
}, {
    readonly value: "waves";
    readonly label: "Waves";
}, {
    readonly value: "erc20";
    readonly label: "ERC20";
}, {
    readonly value: "erc721";
    readonly label: "ERC721";
}, {
    readonly value: "erc1155";
    readonly label: "ERC1155";
}, {
    readonly value: "ethereumclassic";
    readonly label: "Ethereum Classic";
}, {
    readonly value: "trc10";
    readonly label: "TRC10";
}, {
    readonly value: "trc20";
    readonly label: "TRC20";
}, {
    readonly value: "bep2";
    readonly label: "BEP2";
}, {
    readonly value: "bep20";
    readonly label: "BEP20";
}, {
    readonly value: "spl";
    readonly label: "SPL (Solana)";
}, {
    readonly value: "cardano";
    readonly label: "Cardano";
}, {
    readonly value: "monero";
    readonly label: "Monero";
}, {
    readonly value: "ripple";
    readonly label: "XRP Ledger";
}, {
    readonly value: "stellar";
    readonly label: "Stellar";
}, {
    readonly value: "eos";
    readonly label: "EOS";
}, {
    readonly value: "tezos";
    readonly label: "Tezos";
}, {
    readonly value: "cryptoorg";
    readonly label: "Crypto.org";
}, {
    readonly value: "algorand";
    readonly label: "Algorand";
}, {
    readonly value: "polkadot";
    readonly label: "Polkadot";
}, {
    readonly value: "aptos";
    readonly label: "Aptos";
}, {
    readonly value: "hedera";
    readonly label: "Hedera";
}, {
    readonly value: "ton";
    readonly label: "TON";
}, {
    readonly value: "sui";
    readonly label: "Sui";
}, {
    readonly value: "near";
    readonly label: "Near";
}, {
    readonly value: "cosmos";
    readonly label: "Cosmos";
}, {
    readonly value: "osmosis";
    readonly label: "Osmosis";
}, {
    readonly value: "injective";
    readonly label: "Injective";
}, {
    readonly value: "sei";
    readonly label: "Sei";
}, {
    readonly value: "celestia";
    readonly label: "Celestia";
}, {
    readonly value: "terra";
    readonly label: "Terra";
}, {
    readonly value: "kaspa";
    readonly label: "Kaspa";
}, {
    readonly value: "filecoin";
    readonly label: "Filecoin";
}, {
    readonly value: "iota";
    readonly label: "IOTA";
}, {
    readonly value: "avaxc";
    readonly label: "Avalanche C-Chain (AVAXC)";
}, {
    readonly value: "cchain";
    readonly label: "Avalanche C-Chain";
}, {
    readonly value: "arb";
    readonly label: "Arbitrum One";
}, {
    readonly value: "base";
    readonly label: "Base";
}, {
    readonly value: "op";
    readonly label: "Optimism";
}, {
    readonly value: "linea";
    readonly label: "Linea";
}, {
    readonly value: "scroll";
    readonly label: "Scroll";
}, {
    readonly value: "zksyncera";
    readonly label: "zkSync Era";
}, {
    readonly value: "ftm";
    readonly label: "Fantom";
}, {
    readonly value: "matic";
    readonly label: "Polygon PoS";
}, {
    readonly value: "vet";
    readonly label: "VeChain";
}, {
    readonly value: "flr";
    readonly label: "Flare";
}, {
    readonly value: "bera";
    readonly label: "Berachain";
}, {
    readonly value: "story";
    readonly label: "Story";
}];
export declare const normalizeNetworkKey: (network: string) => string;
export declare const validationMap: Record<string, NetworkValidationConfig>;
export declare const getNetworkValidation: (network: string) => NetworkValidationConfig | null;
