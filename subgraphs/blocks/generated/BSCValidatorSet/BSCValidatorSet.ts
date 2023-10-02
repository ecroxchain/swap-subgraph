// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class batchTransfer extends ethereum.Event {
  get params(): batchTransfer__Params {
    return new batchTransfer__Params(this);
  }
}

export class batchTransfer__Params {
  _event: batchTransfer;

  constructor(event: batchTransfer) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class batchTransferFailed extends ethereum.Event {
  get params(): batchTransferFailed__Params {
    return new batchTransferFailed__Params(this);
  }
}

export class batchTransferFailed__Params {
  _event: batchTransferFailed;

  constructor(event: batchTransferFailed) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get reason(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class batchTransferLowerFailed extends ethereum.Event {
  get params(): batchTransferLowerFailed__Params {
    return new batchTransferLowerFailed__Params(this);
  }
}

export class batchTransferLowerFailed__Params {
  _event: batchTransferLowerFailed;

  constructor(event: batchTransferLowerFailed) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get reason(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class deprecatedDeposit extends ethereum.Event {
  get params(): deprecatedDeposit__Params {
    return new deprecatedDeposit__Params(this);
  }
}

export class deprecatedDeposit__Params {
  _event: deprecatedDeposit;

  constructor(event: deprecatedDeposit) {
    this._event = event;
  }

  get validator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class directTransfer extends ethereum.Event {
  get params(): directTransfer__Params {
    return new directTransfer__Params(this);
  }
}

export class directTransfer__Params {
  _event: directTransfer;

  constructor(event: directTransfer) {
    this._event = event;
  }

  get validator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class directTransferFail extends ethereum.Event {
  get params(): directTransferFail__Params {
    return new directTransferFail__Params(this);
  }
}

export class directTransferFail__Params {
  _event: directTransferFail;

  constructor(event: directTransferFail) {
    this._event = event;
  }

  get validator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class failReasonWithStr extends ethereum.Event {
  get params(): failReasonWithStr__Params {
    return new failReasonWithStr__Params(this);
  }
}

export class failReasonWithStr__Params {
  _event: failReasonWithStr;

  constructor(event: failReasonWithStr) {
    this._event = event;
  }

  get message(): string {
    return this._event.parameters[0].value.toString();
  }
}

export class paramChange extends ethereum.Event {
  get params(): paramChange__Params {
    return new paramChange__Params(this);
  }
}

export class paramChange__Params {
  _event: paramChange;

  constructor(event: paramChange) {
    this._event = event;
  }

  get key(): string {
    return this._event.parameters[0].value.toString();
  }

  get value(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class systemTransfer extends ethereum.Event {
  get params(): systemTransfer__Params {
    return new systemTransfer__Params(this);
  }
}

export class systemTransfer__Params {
  _event: systemTransfer;

  constructor(event: systemTransfer) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class unexpectedPackage extends ethereum.Event {
  get params(): unexpectedPackage__Params {
    return new unexpectedPackage__Params(this);
  }
}

export class unexpectedPackage__Params {
  _event: unexpectedPackage;

  constructor(event: unexpectedPackage) {
    this._event = event;
  }

  get channelId(): i32 {
    return this._event.parameters[0].value.toI32();
  }

  get msgBytes(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class validatorDeposit extends ethereum.Event {
  get params(): validatorDeposit__Params {
    return new validatorDeposit__Params(this);
  }
}

export class validatorDeposit__Params {
  _event: validatorDeposit;

  constructor(event: validatorDeposit) {
    this._event = event;
  }

  get validator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class validatorEmptyJailed extends ethereum.Event {
  get params(): validatorEmptyJailed__Params {
    return new validatorEmptyJailed__Params(this);
  }
}

export class validatorEmptyJailed__Params {
  _event: validatorEmptyJailed;

  constructor(event: validatorEmptyJailed) {
    this._event = event;
  }

  get validator(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class validatorFelony extends ethereum.Event {
  get params(): validatorFelony__Params {
    return new validatorFelony__Params(this);
  }
}

export class validatorFelony__Params {
  _event: validatorFelony;

  constructor(event: validatorFelony) {
    this._event = event;
  }

  get validator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class validatorJailed extends ethereum.Event {
  get params(): validatorJailed__Params {
    return new validatorJailed__Params(this);
  }
}

export class validatorJailed__Params {
  _event: validatorJailed;

  constructor(event: validatorJailed) {
    this._event = event;
  }

  get validator(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class validatorMisdemeanor extends ethereum.Event {
  get params(): validatorMisdemeanor__Params {
    return new validatorMisdemeanor__Params(this);
  }
}

export class validatorMisdemeanor__Params {
  _event: validatorMisdemeanor;

  constructor(event: validatorMisdemeanor) {
    this._event = event;
  }

  get validator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class validatorSetUpdated extends ethereum.Event {
  get params(): validatorSetUpdated__Params {
    return new validatorSetUpdated__Params(this);
  }
}

export class validatorSetUpdated__Params {
  _event: validatorSetUpdated;

  constructor(event: validatorSetUpdated) {
    this._event = event;
  }
}

export class BSCValidatorSet__currentValidatorSetResult {
  value0: Address;
  value1: Address;
  value2: Address;
  value3: BigInt;
  value4: boolean;
  value5: BigInt;

  constructor(
    value0: Address,
    value1: Address,
    value2: Address,
    value3: BigInt,
    value4: boolean,
    value5: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromBoolean(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    return map;
  }

  getConsensusAddress(): Address {
    return this.value0;
  }

  getFeeAddress(): Address {
    return this.value1;
  }

  getBBCFeeAddress(): Address {
    return this.value2;
  }

  getVotingPower(): BigInt {
    return this.value3;
  }

  getJailed(): boolean {
    return this.value4;
  }

  getIncoming(): BigInt {
    return this.value5;
  }
}

export class BSCValidatorSet extends ethereum.SmartContract {
  static bind(address: Address): BSCValidatorSet {
    return new BSCValidatorSet("BSCValidatorSet", address);
  }

  BIND_CHANNELID(): i32 {
    let result = super.call("BIND_CHANNELID", "BIND_CHANNELID():(uint8)", []);

    return result[0].toI32();
  }

  try_BIND_CHANNELID(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "BIND_CHANNELID",
      "BIND_CHANNELID():(uint8)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  CODE_OK(): BigInt {
    let result = super.call("CODE_OK", "CODE_OK():(uint32)", []);

    return result[0].toBigInt();
  }

  try_CODE_OK(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("CODE_OK", "CODE_OK():(uint32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  CROSS_CHAIN_CONTRACT_ADDR(): Address {
    let result = super.call(
      "CROSS_CHAIN_CONTRACT_ADDR",
      "CROSS_CHAIN_CONTRACT_ADDR():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_CROSS_CHAIN_CONTRACT_ADDR(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "CROSS_CHAIN_CONTRACT_ADDR",
      "CROSS_CHAIN_CONTRACT_ADDR():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  DUSTY_INCOMING(): BigInt {
    let result = super.call("DUSTY_INCOMING", "DUSTY_INCOMING():(uint256)", []);

    return result[0].toBigInt();
  }

  try_DUSTY_INCOMING(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "DUSTY_INCOMING",
      "DUSTY_INCOMING():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  ERROR_FAIL_CHECK_VALIDATORS(): BigInt {
    let result = super.call(
      "ERROR_FAIL_CHECK_VALIDATORS",
      "ERROR_FAIL_CHECK_VALIDATORS():(uint32)",
      []
    );

    return result[0].toBigInt();
  }

  try_ERROR_FAIL_CHECK_VALIDATORS(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "ERROR_FAIL_CHECK_VALIDATORS",
      "ERROR_FAIL_CHECK_VALIDATORS():(uint32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  ERROR_FAIL_DECODE(): BigInt {
    let result = super.call(
      "ERROR_FAIL_DECODE",
      "ERROR_FAIL_DECODE():(uint32)",
      []
    );

    return result[0].toBigInt();
  }

  try_ERROR_FAIL_DECODE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "ERROR_FAIL_DECODE",
      "ERROR_FAIL_DECODE():(uint32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  ERROR_LEN_OF_VAL_MISMATCH(): BigInt {
    let result = super.call(
      "ERROR_LEN_OF_VAL_MISMATCH",
      "ERROR_LEN_OF_VAL_MISMATCH():(uint32)",
      []
    );

    return result[0].toBigInt();
  }

  try_ERROR_LEN_OF_VAL_MISMATCH(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "ERROR_LEN_OF_VAL_MISMATCH",
      "ERROR_LEN_OF_VAL_MISMATCH():(uint32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  ERROR_RELAYFEE_TOO_LARGE(): BigInt {
    let result = super.call(
      "ERROR_RELAYFEE_TOO_LARGE",
      "ERROR_RELAYFEE_TOO_LARGE():(uint32)",
      []
    );

    return result[0].toBigInt();
  }

  try_ERROR_RELAYFEE_TOO_LARGE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "ERROR_RELAYFEE_TOO_LARGE",
      "ERROR_RELAYFEE_TOO_LARGE():(uint32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  ERROR_UNKNOWN_PACKAGE_TYPE(): BigInt {
    let result = super.call(
      "ERROR_UNKNOWN_PACKAGE_TYPE",
      "ERROR_UNKNOWN_PACKAGE_TYPE():(uint32)",
      []
    );

    return result[0].toBigInt();
  }

  try_ERROR_UNKNOWN_PACKAGE_TYPE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "ERROR_UNKNOWN_PACKAGE_TYPE",
      "ERROR_UNKNOWN_PACKAGE_TYPE():(uint32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  EXPIRE_TIME_SECOND_GAP(): BigInt {
    let result = super.call(
      "EXPIRE_TIME_SECOND_GAP",
      "EXPIRE_TIME_SECOND_GAP():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_EXPIRE_TIME_SECOND_GAP(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "EXPIRE_TIME_SECOND_GAP",
      "EXPIRE_TIME_SECOND_GAP():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  GOV_CHANNELID(): i32 {
    let result = super.call("GOV_CHANNELID", "GOV_CHANNELID():(uint8)", []);

    return result[0].toI32();
  }

  try_GOV_CHANNELID(): ethereum.CallResult<i32> {
    let result = super.tryCall("GOV_CHANNELID", "GOV_CHANNELID():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  GOV_HUB_ADDR(): Address {
    let result = super.call("GOV_HUB_ADDR", "GOV_HUB_ADDR():(address)", []);

    return result[0].toAddress();
  }

  try_GOV_HUB_ADDR(): ethereum.CallResult<Address> {
    let result = super.tryCall("GOV_HUB_ADDR", "GOV_HUB_ADDR():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  INCENTIVIZE_ADDR(): Address {
    let result = super.call(
      "INCENTIVIZE_ADDR",
      "INCENTIVIZE_ADDR():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_INCENTIVIZE_ADDR(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "INCENTIVIZE_ADDR",
      "INCENTIVIZE_ADDR():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  INIT_VALIDATORSET_BYTES(): Bytes {
    let result = super.call(
      "INIT_VALIDATORSET_BYTES",
      "INIT_VALIDATORSET_BYTES():(bytes)",
      []
    );

    return result[0].toBytes();
  }

  try_INIT_VALIDATORSET_BYTES(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "INIT_VALIDATORSET_BYTES",
      "INIT_VALIDATORSET_BYTES():(bytes)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  JAIL_MESSAGE_TYPE(): i32 {
    let result = super.call(
      "JAIL_MESSAGE_TYPE",
      "JAIL_MESSAGE_TYPE():(uint8)",
      []
    );

    return result[0].toI32();
  }

  try_JAIL_MESSAGE_TYPE(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "JAIL_MESSAGE_TYPE",
      "JAIL_MESSAGE_TYPE():(uint8)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  LIGHT_CLIENT_ADDR(): Address {
    let result = super.call(
      "LIGHT_CLIENT_ADDR",
      "LIGHT_CLIENT_ADDR():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_LIGHT_CLIENT_ADDR(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "LIGHT_CLIENT_ADDR",
      "LIGHT_CLIENT_ADDR():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  MAX_NUM_OF_VALIDATORS(): BigInt {
    let result = super.call(
      "MAX_NUM_OF_VALIDATORS",
      "MAX_NUM_OF_VALIDATORS():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_MAX_NUM_OF_VALIDATORS(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MAX_NUM_OF_VALIDATORS",
      "MAX_NUM_OF_VALIDATORS():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  PRECISION(): BigInt {
    let result = super.call("PRECISION", "PRECISION():(uint256)", []);

    return result[0].toBigInt();
  }

  try_PRECISION(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("PRECISION", "PRECISION():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  RELAYERHUB_CONTRACT_ADDR(): Address {
    let result = super.call(
      "RELAYERHUB_CONTRACT_ADDR",
      "RELAYERHUB_CONTRACT_ADDR():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_RELAYERHUB_CONTRACT_ADDR(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "RELAYERHUB_CONTRACT_ADDR",
      "RELAYERHUB_CONTRACT_ADDR():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  SLASH_CHANNELID(): i32 {
    let result = super.call("SLASH_CHANNELID", "SLASH_CHANNELID():(uint8)", []);

    return result[0].toI32();
  }

  try_SLASH_CHANNELID(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "SLASH_CHANNELID",
      "SLASH_CHANNELID():(uint8)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  SLASH_CONTRACT_ADDR(): Address {
    let result = super.call(
      "SLASH_CONTRACT_ADDR",
      "SLASH_CONTRACT_ADDR():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_SLASH_CONTRACT_ADDR(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "SLASH_CONTRACT_ADDR",
      "SLASH_CONTRACT_ADDR():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  STAKING_CHANNELID(): i32 {
    let result = super.call(
      "STAKING_CHANNELID",
      "STAKING_CHANNELID():(uint8)",
      []
    );

    return result[0].toI32();
  }

  try_STAKING_CHANNELID(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "STAKING_CHANNELID",
      "STAKING_CHANNELID():(uint8)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  SYSTEM_REWARD_ADDR(): Address {
    let result = super.call(
      "SYSTEM_REWARD_ADDR",
      "SYSTEM_REWARD_ADDR():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_SYSTEM_REWARD_ADDR(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "SYSTEM_REWARD_ADDR",
      "SYSTEM_REWARD_ADDR():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  TOKEN_HUB_ADDR(): Address {
    let result = super.call("TOKEN_HUB_ADDR", "TOKEN_HUB_ADDR():(address)", []);

    return result[0].toAddress();
  }

  try_TOKEN_HUB_ADDR(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "TOKEN_HUB_ADDR",
      "TOKEN_HUB_ADDR():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  TOKEN_MANAGER_ADDR(): Address {
    let result = super.call(
      "TOKEN_MANAGER_ADDR",
      "TOKEN_MANAGER_ADDR():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_TOKEN_MANAGER_ADDR(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "TOKEN_MANAGER_ADDR",
      "TOKEN_MANAGER_ADDR():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  TRANSFER_IN_CHANNELID(): i32 {
    let result = super.call(
      "TRANSFER_IN_CHANNELID",
      "TRANSFER_IN_CHANNELID():(uint8)",
      []
    );

    return result[0].toI32();
  }

  try_TRANSFER_IN_CHANNELID(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "TRANSFER_IN_CHANNELID",
      "TRANSFER_IN_CHANNELID():(uint8)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  TRANSFER_OUT_CHANNELID(): i32 {
    let result = super.call(
      "TRANSFER_OUT_CHANNELID",
      "TRANSFER_OUT_CHANNELID():(uint8)",
      []
    );

    return result[0].toI32();
  }

  try_TRANSFER_OUT_CHANNELID(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "TRANSFER_OUT_CHANNELID",
      "TRANSFER_OUT_CHANNELID():(uint8)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  VALIDATORS_UPDATE_MESSAGE_TYPE(): i32 {
    let result = super.call(
      "VALIDATORS_UPDATE_MESSAGE_TYPE",
      "VALIDATORS_UPDATE_MESSAGE_TYPE():(uint8)",
      []
    );

    return result[0].toI32();
  }

  try_VALIDATORS_UPDATE_MESSAGE_TYPE(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "VALIDATORS_UPDATE_MESSAGE_TYPE",
      "VALIDATORS_UPDATE_MESSAGE_TYPE():(uint8)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  VALIDATOR_CONTRACT_ADDR(): Address {
    let result = super.call(
      "VALIDATOR_CONTRACT_ADDR",
      "VALIDATOR_CONTRACT_ADDR():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_VALIDATOR_CONTRACT_ADDR(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "VALIDATOR_CONTRACT_ADDR",
      "VALIDATOR_CONTRACT_ADDR():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  alreadyInit(): boolean {
    let result = super.call("alreadyInit", "alreadyInit():(bool)", []);

    return result[0].toBoolean();
  }

  try_alreadyInit(): ethereum.CallResult<boolean> {
    let result = super.tryCall("alreadyInit", "alreadyInit():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  bscChainID(): i32 {
    let result = super.call("bscChainID", "bscChainID():(uint16)", []);

    return result[0].toI32();
  }

  try_bscChainID(): ethereum.CallResult<i32> {
    let result = super.tryCall("bscChainID", "bscChainID():(uint16)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  currentValidatorSet(
    param0: BigInt
  ): BSCValidatorSet__currentValidatorSetResult {
    let result = super.call(
      "currentValidatorSet",
      "currentValidatorSet(uint256):(address,address,address,uint64,bool,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new BSCValidatorSet__currentValidatorSetResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBoolean(),
      result[5].toBigInt()
    );
  }

  try_currentValidatorSet(
    param0: BigInt
  ): ethereum.CallResult<BSCValidatorSet__currentValidatorSetResult> {
    let result = super.tryCall(
      "currentValidatorSet",
      "currentValidatorSet(uint256):(address,address,address,uint64,bool,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new BSCValidatorSet__currentValidatorSetResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBoolean(),
        value[5].toBigInt()
      )
    );
  }

  currentValidatorSetMap(param0: Address): BigInt {
    let result = super.call(
      "currentValidatorSetMap",
      "currentValidatorSetMap(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_currentValidatorSetMap(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "currentValidatorSetMap",
      "currentValidatorSetMap(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  expireTimeSecondGap(): BigInt {
    let result = super.call(
      "expireTimeSecondGap",
      "expireTimeSecondGap():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_expireTimeSecondGap(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "expireTimeSecondGap",
      "expireTimeSecondGap():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getIncoming(validator: Address): BigInt {
    let result = super.call("getIncoming", "getIncoming(address):(uint256)", [
      ethereum.Value.fromAddress(validator)
    ]);

    return result[0].toBigInt();
  }

  try_getIncoming(validator: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getIncoming",
      "getIncoming(address):(uint256)",
      [ethereum.Value.fromAddress(validator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getValidators(): Array<Address> {
    let result = super.call("getValidators", "getValidators():(address[])", []);

    return result[0].toAddressArray();
  }

  try_getValidators(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getValidators",
      "getValidators():(address[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  handleSynPackage(param0: i32, msgBytes: Bytes): Bytes {
    let result = super.call(
      "handleSynPackage",
      "handleSynPackage(uint8,bytes):(bytes)",
      [
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0)),
        ethereum.Value.fromBytes(msgBytes)
      ]
    );

    return result[0].toBytes();
  }

  try_handleSynPackage(
    param0: i32,
    msgBytes: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "handleSynPackage",
      "handleSynPackage(uint8,bytes):(bytes)",
      [
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0)),
        ethereum.Value.fromBytes(msgBytes)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  numOfJailed(): BigInt {
    let result = super.call("numOfJailed", "numOfJailed():(uint256)", []);

    return result[0].toBigInt();
  }

  try_numOfJailed(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("numOfJailed", "numOfJailed():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalInComing(): BigInt {
    let result = super.call("totalInComing", "totalInComing():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalInComing(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalInComing",
      "totalInComing():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get valAddr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class FelonyCall extends ethereum.Call {
  get inputs(): FelonyCall__Inputs {
    return new FelonyCall__Inputs(this);
  }

  get outputs(): FelonyCall__Outputs {
    return new FelonyCall__Outputs(this);
  }
}

export class FelonyCall__Inputs {
  _call: FelonyCall;

  constructor(call: FelonyCall) {
    this._call = call;
  }

  get validator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class FelonyCall__Outputs {
  _call: FelonyCall;

  constructor(call: FelonyCall) {
    this._call = call;
  }
}

export class HandleAckPackageCall extends ethereum.Call {
  get inputs(): HandleAckPackageCall__Inputs {
    return new HandleAckPackageCall__Inputs(this);
  }

  get outputs(): HandleAckPackageCall__Outputs {
    return new HandleAckPackageCall__Outputs(this);
  }
}

export class HandleAckPackageCall__Inputs {
  _call: HandleAckPackageCall;

  constructor(call: HandleAckPackageCall) {
    this._call = call;
  }

  get channelId(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get msgBytes(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class HandleAckPackageCall__Outputs {
  _call: HandleAckPackageCall;

  constructor(call: HandleAckPackageCall) {
    this._call = call;
  }
}

export class HandleFailAckPackageCall extends ethereum.Call {
  get inputs(): HandleFailAckPackageCall__Inputs {
    return new HandleFailAckPackageCall__Inputs(this);
  }

  get outputs(): HandleFailAckPackageCall__Outputs {
    return new HandleFailAckPackageCall__Outputs(this);
  }
}

export class HandleFailAckPackageCall__Inputs {
  _call: HandleFailAckPackageCall;

  constructor(call: HandleFailAckPackageCall) {
    this._call = call;
  }

  get channelId(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get msgBytes(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class HandleFailAckPackageCall__Outputs {
  _call: HandleFailAckPackageCall;

  constructor(call: HandleFailAckPackageCall) {
    this._call = call;
  }
}

export class HandleSynPackageCall extends ethereum.Call {
  get inputs(): HandleSynPackageCall__Inputs {
    return new HandleSynPackageCall__Inputs(this);
  }

  get outputs(): HandleSynPackageCall__Outputs {
    return new HandleSynPackageCall__Outputs(this);
  }
}

export class HandleSynPackageCall__Inputs {
  _call: HandleSynPackageCall;

  constructor(call: HandleSynPackageCall) {
    this._call = call;
  }

  get value0(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get msgBytes(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class HandleSynPackageCall__Outputs {
  _call: HandleSynPackageCall;

  constructor(call: HandleSynPackageCall) {
    this._call = call;
  }

  get responsePayload(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class InitCall extends ethereum.Call {
  get inputs(): InitCall__Inputs {
    return new InitCall__Inputs(this);
  }

  get outputs(): InitCall__Outputs {
    return new InitCall__Outputs(this);
  }
}

export class InitCall__Inputs {
  _call: InitCall;

  constructor(call: InitCall) {
    this._call = call;
  }
}

export class InitCall__Outputs {
  _call: InitCall;

  constructor(call: InitCall) {
    this._call = call;
  }
}

export class MisdemeanorCall extends ethereum.Call {
  get inputs(): MisdemeanorCall__Inputs {
    return new MisdemeanorCall__Inputs(this);
  }

  get outputs(): MisdemeanorCall__Outputs {
    return new MisdemeanorCall__Outputs(this);
  }
}

export class MisdemeanorCall__Inputs {
  _call: MisdemeanorCall;

  constructor(call: MisdemeanorCall) {
    this._call = call;
  }

  get validator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class MisdemeanorCall__Outputs {
  _call: MisdemeanorCall;

  constructor(call: MisdemeanorCall) {
    this._call = call;
  }
}

export class UpdateParamCall extends ethereum.Call {
  get inputs(): UpdateParamCall__Inputs {
    return new UpdateParamCall__Inputs(this);
  }

  get outputs(): UpdateParamCall__Outputs {
    return new UpdateParamCall__Outputs(this);
  }
}

export class UpdateParamCall__Inputs {
  _call: UpdateParamCall;

  constructor(call: UpdateParamCall) {
    this._call = call;
  }

  get key(): string {
    return this._call.inputValues[0].value.toString();
  }

  get value(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class UpdateParamCall__Outputs {
  _call: UpdateParamCall;

  constructor(call: UpdateParamCall) {
    this._call = call;
  }
}
