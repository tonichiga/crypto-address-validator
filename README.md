# @4i/crypto-address-validator

Network-first cryptocurrency wallet address validator for Node.js, web, and React Native.

This library validates addresses by **network / token standard**, not by coin ticker. Example keys: `erc20`, `trc20`, `bep20`, `spl`, `bitcoin`, `ton`.

## Features

- One entrypoint: `validate(network, address)`
- Works with Node.js, browser bundles, and React Native
- Supports both full validators and regex-based fallbacks
- Includes browser bundle output at `dist/browser.js`

## Installation

```bash
npm install @4i/crypto-address-validator
```

## Usage

```js
const { validate } = require("@4i/crypto-address-validator");

const result = validate("erc20", "0x742d35Cc6634C0532925a3b844Bc454e4438f44e");

console.log(result);
// {
//   isValid: true,
//   type: { isValidAddress: [Function: isValidAddress] }
// }
```

### Get supported network options

```js
const { networkOptions } = require("@4i/crypto-address-validator");

console.log(networkOptions);
```

### Browser usage

Build the package:

```bash
npm run build
```

Then include the generated browser bundle:

```html
<script src="./dist/browser.js"></script>
<script>
  const { validate, networkOptions } = globalThis.cryptoWalletValidator;
  console.log(validate("bitcoin", "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"));
</script>
```

## Public API

| Export                          | Description                                                 |
| ------------------------------- | ----------------------------------------------------------- |
| `validate(network, address)`    | Returns `{ isValid, type }`                                 |
| `networkOptions`                | Canonical list of supported networks for UI dropdowns       |
| `getNetworkValidation(network)` | Returns the resolved validation config                      |
| `normalizeNetworkKey(network)`  | Normalizes aliases like `ERC-20`, `erc20`, `ERC20`          |
| `validationMap`                 | Internal map of normalized network keys to validator config |

### `validate(network, address)` result

```ts
{
  isValid: boolean;
  type: ValidatorModule | "regex" | null;
}
```

Where:

- `isValid` — final validation result
- `type: "regex"` — regex-only validation path was used
- `type: ValidatorModule` — dedicated validator module handled the address
- `type: null` — invalid input or unknown network

## Supported networks

`Type` means how validation is performed:

- `Validator` — dedicated validator logic
- `Regex` — regex-only fallback

| Network                   | Key               | Type      |
| ------------------------- | ----------------- | --------- |
| Bitcoin                   | `bitcoin`         | Validator |
| Bitcoin Cash              | `bitcoincash`     | Validator |
| Bitcoin SV                | `bitcoinsv`       | Validator |
| Litecoin                  | `litecoin`        | Validator |
| Dogecoin                  | `dogecoin`        | Validator |
| Dash                      | `dash`            | Validator |
| Decred                    | `decred`          | Validator |
| DigiByte                  | `digibyte`        | Validator |
| Zcash                     | `zcash`           | Validator |
| Waves                     | `waves`           | Validator |
| ERC20                     | `erc20`           | Validator |
| ERC721                    | `erc721`          | Validator |
| ERC1155                   | `erc1155`         | Validator |
| Ethereum Classic          | `ethereumclassic` | Validator |
| TRC10                     | `trc10`           | Validator |
| TRC20                     | `trc20`           | Validator |
| BEP2                      | `bep2`            | Regex     |
| BEP20                     | `bep20`           | Validator |
| SPL (Solana)              | `spl`             | Validator |
| Cardano                   | `cardano`         | Validator |
| Monero                    | `monero`          | Validator |
| XRP Ledger                | `ripple`          | Validator |
| Stellar                   | `stellar`         | Validator |
| EOS                       | `eos`             | Validator |
| Tezos                     | `tezos`           | Validator |
| Crypto.org                | `cryptoorg`       | Validator |
| Algorand                  | `algorand`        | Validator |
| Polkadot                  | `polkadot`        | Validator |
| Polkadot                  | `dotassethub`     | Validator |
| Aptos                     | `aptos`           | Validator |
| Hedera                    | `hedera`          | Validator |
| TON                       | `ton`             | Regex     |
| Sui                       | `sui`             | Regex     |
| Near                      | `near`            | Regex     |
| Cosmos                    | `cosmos`          | Regex     |
| Osmosis                   | `osmosis`         | Regex     |
| Injective                 | `injective`       | Regex     |
| Sei                       | `sei`             | Regex     |
| Celestia                  | `celestia`        | Regex     |
| Terra                     | `terra`           | Regex     |
| Kaspa                     | `kaspa`           | Regex     |
| Filecoin                  | `filecoin`        | Regex     |
| IOTA                      | `iota`            | Regex     |
| Avalanche C-Chain (AVAXC) | `avaxc`           | Validator |
| Avalanche C-Chain         | `cchain`          | Validator |
| Arbitrum One              | `arb`             | Validator |
| Base                      | `base`            | Validator |
| Optimism                  | `op`              | Validator |
| Linea                     | `linea`           | Validator |
| Scroll                    | `scroll`          | Validator |
| zkSync Era                | `zksyncera`       | Validator |
| Fantom                    | `ftm`             | Validator |
| Polygon PoS               | `matic`           | Validator |
| VeChain                   | `vet`             | Validator |
| Flare                     | `flr`             | Validator |
| Berachain                 | `bera`            | Validator |
| Story                     | `story`           | Validator |

## Aliases

The validator also accepts many aliases from `validationMap`. Examples:

- `erc20`, `ethereum`, `eth`, `evm`
- `trc20`, `tron`, `trx`
- `bep20`, `bsc`, `binancesmartchain`
- `spl`, `sol`, `solana`
- `arb`, `arbitrum`
- `op`, `optimism`
- `avaxc`, `cchain`, `avalanche`

## Development

```bash
npm install
npm run build
```

Build output:

- `dist/index.js`
- `dist/config/networks.js`
- `dist/validator.js`
- `dist/browser.js`

## Notes

- Validation is **network-based**, not token-symbol-based
- Browser and React Native support do **not** rely on Node built-in `crypto`
- Some networks currently use regex fallback until a dedicated validator is added

## License

MIT
