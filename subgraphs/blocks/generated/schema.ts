// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Block extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Block entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Block must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Block", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Block | null {
    return changetype<Block | null>(store.get_in_block("Block", id));
  }

  static load(id: string): Block | null {
    return changetype<Block | null>(store.get("Block", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get parentHash(): Bytes {
    let value = this.get("parentHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set parentHash(value: Bytes) {
    this.set("parentHash", Value.fromBytes(value));
  }

  get unclesHash(): Bytes {
    let value = this.get("unclesHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set unclesHash(value: Bytes) {
    this.set("unclesHash", Value.fromBytes(value));
  }

  get author(): Bytes {
    let value = this.get("author");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set author(value: Bytes) {
    this.set("author", Value.fromBytes(value));
  }

  get stateRoot(): Bytes {
    let value = this.get("stateRoot");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set stateRoot(value: Bytes) {
    this.set("stateRoot", Value.fromBytes(value));
  }

  get transactionsRoot(): Bytes {
    let value = this.get("transactionsRoot");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionsRoot(value: Bytes) {
    this.set("transactionsRoot", Value.fromBytes(value));
  }

  get receiptsRoot(): Bytes {
    let value = this.get("receiptsRoot");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set receiptsRoot(value: Bytes) {
    this.set("receiptsRoot", Value.fromBytes(value));
  }

  get number(): BigInt {
    let value = this.get("number");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set number(value: BigInt) {
    this.set("number", Value.fromBigInt(value));
  }

  get gasUsed(): BigInt {
    let value = this.get("gasUsed");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set gasUsed(value: BigInt) {
    this.set("gasUsed", Value.fromBigInt(value));
  }

  get gasLimit(): BigInt {
    let value = this.get("gasLimit");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set gasLimit(value: BigInt) {
    this.set("gasLimit", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get difficulty(): BigInt {
    let value = this.get("difficulty");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set difficulty(value: BigInt) {
    this.set("difficulty", Value.fromBigInt(value));
  }

  get totalDifficulty(): BigInt {
    let value = this.get("totalDifficulty");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set totalDifficulty(value: BigInt) {
    this.set("totalDifficulty", Value.fromBigInt(value));
  }

  get size(): BigInt | null {
    let value = this.get("size");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set size(value: BigInt | null) {
    if (!value) {
      this.unset("size");
    } else {
      this.set("size", Value.fromBigInt(<BigInt>value));
    }
  }
}
