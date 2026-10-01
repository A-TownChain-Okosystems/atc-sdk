import assert from "node:assert/strict";
import test from "node:test";
import { canonicalSigningPreimage, ATC_CHAIN_ID } from "../typescript/chain-identity.ts";

const GOLDEN_HEX =
  "4154432d54582d444f4d41494e2d563200000000000a0c23000000000a4154432d73656e646572010000000d4154432d726563697069656e74ffffffffffffffffffffffffffffffff000000000000000100000000000003e80000000000000007000000006553f1000000000568656c6c6f0909090909090909090909090909090909090909090909090909090909090909";

function fixture(amount = (2n ** 128n) - 1n) {
  return {
    chain_id: ATC_CHAIN_ID,
    tx_type: 0,
    sender_did: "ATC-sender",
    recipient_did: "ATC-recipient",
    amount,
    gas_price: 1n,
    gas_limit: 1000n,
    nonce: 7n,
    timestamp: 1_700_000_000n,
    payload: new TextEncoder().encode("hello"),
    poh_hash: new Uint8Array(32).fill(9),
  };
}

test("canonical TX-V2 golden vector is byte-exact", () => {
  const actual = Buffer.from(canonicalSigningPreimage(fixture())).toString("hex");
  assert.equal(actual, GOLDEN_HEX);
});

test("u128 maximum is encoded as exactly 16 bytes", () => {
  const bytes = canonicalSigningPreimage(fixture());
  const marker = Buffer.from("4154432d726563697069656e74", "hex");
  const markerOffset = bytes.indexOf(marker);
  assert.notEqual(markerOffset, -1);
  const amountOffset = markerOffset + marker.length;
  assert.equal(bytes[amountOffset], 0xff);
  assert.equal(bytes.slice(amountOffset, amountOffset + 16).every((v) => v === 0xff), true);
});

test("u64 fields reject values above 64 bits", () => {
  assert.doesNotThrow(() => canonicalSigningPreimage(fixture()));
  assert.throws(
    () => canonicalSigningPreimage({ ...fixture(), gas_price: 2n ** 64n }),
    /u64 out of range/,
  );
});
