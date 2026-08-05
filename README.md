# ATC-SDK — Software Development Kit

SDK für A-TownChain OS — Libraries und Tools für DApp-Entwicklung.

## Sprachen
| Sprache | Library | Status |
|---------|---------|--------|
| TypeScript | `@atc/sdk-ts` | 📋 |
| Python | `atc-sdk-py` | 📋 |
| Rust | `atc-sdk-rs` | 📋 |
| Go | `atc-sdk-go` | 📋 |

## Features
- **RPC Client** — Chain-RPC (JSON-RPC über TCP)
- **Wallet Integration** — Key-Management, Signierung
- **Contract SDK** — Deploy, Call, Query
- **Event Subscription** — WebSocket Events
- **Type Generation** — Auto-ABI → Type Bindings

## Quick Start (TypeScript)
```typescript
import { AtcClient, Wallet } from '@atc/sdk-ts';

const client = new AtcClient('http://localhost:9000');
const wallet = Wallet.fromMnemonic('your mnemonic ...');

const tx = await client.transfer({
  to: 'ATCf9327118a7dfb30f72ba6aa82e1186078c42232884',
  amount: 1000,
  wallet
});

console.log('TX Hash:', tx.hash);
```

## Verwandte Repos
- [atc-wallet](https://github.com/A-TownChain-Okosystems/atc-wallet) — Wallet
- [atc-cli](https://github.com/A-TownChain-Okosystems/atc-cli) — CLI Tool

[agent: aurora-base44-superagent-6a2756186106d6f0fbb105b5]
