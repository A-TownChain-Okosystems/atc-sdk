# 🌳 Architektur — atc-sdk

> **Stand:** 2026-08-06 | **Version:** v1.0.0
> **Teil von:** [A-TownChain Ökosystem](https://github.com/A-TownChain-Okosystems)

## Beschreibung

SDK für ATCLang-Anwendungen. Client-Library, Type-Definitions, Utilities, API-Bindings.

## Metadaten

| Metrik | Wert |
|--------|------|
| Layer | L7 — Application |
| Sprint | 3.0 |
| ATC-Standards | ATC-24 |
| Status | 🟠 Aufbau |
| Code-Repo | [atc-sdk](https://github.com/A-TownChain-Okosystems/atc-sdk) |
| Wiki-Repo | [atc-sdk-wiki](https://github.com/A-TownChain-Okosystems/atc-sdk-wiki) |

## Komponenten-Übersicht

| Komponente | Beschreibung | Status |
|-----------|-------------|--------|
| `client.atc` | ATC-Client: RPC calls, wallet, contracts, transactions | 📋 GEPLANT |
| `types.atc` | Type-Definitions: Block, Tx, Header, Node, Contract, Event | 📋 GEPLANT |
| `utils.atc` | Utilities: hashing, encoding, serialization, validation | 📋 GEPLANT |
| `api_client.atc` | REST/WebSocket API-Client: endpoints, auth, pagination | 📋 GEPLANT |
| `event_subscriber.atc` | Event-Subscriber: websocket, filter, subscription, replay | 📋 GEPLANT |
| `contract_bindings.atc` | Contract-Bindings: ABI, type-safe calls, event decoding | 📋 GEPLANT |

## Architektur-Baum

```
atc-sdk/
├── README.md
├── LICENSE
├── .gitignore
├── STATUS.md
├── ROADMAP.md
├── CHANGELOG.md
├── ARCHITECTURE.md
├── FILE_REGISTER.md
├── client.atc
├── types.atc
├── utils.atc
├── api_client.atc
├── event_subscriber.atc
├── contract_bindings.atc
```

## Abhängigkeiten

- **ATCLang Stdlib** (atc-stdlib)
- **ATC VM** (atc-vm)
- **ATC Kernel** (atc-kernel)

## Roadmap

| Phase | Aufgabe | Status |
|-------|---------|--------|
| Sprint 3.0 | Komponenten-Definition | ✅ ERLEDIGT |
| Sprint 3.0 | Architektur-Baum | ✅ ERLEDIGT |
| Sprint 3.0 | Stub-Dateien erstellen | 🔄 IN ARBEIT |
| Sprint 3.0 | Implementierung | 📋 GEPLANT |
| Sprint 3.0.1 | Tests | 📋 GEPLANT |
| Sprint 3.0.2 | Dokumentation | 📋 GEPLANT |

---
*Auto-generiert 2026-08-06 · Aurora (MasterBrain · Base44)*
