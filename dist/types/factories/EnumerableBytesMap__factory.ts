/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  EnumerableBytesMap,
  EnumerableBytesMapInterface,
} from "../EnumerableBytesMap";

const _abi = [
  {
    inputs: [],
    name: "NonExistentKey",
    type: "error",
  },
];

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220c529a472e769e149c6f591cfee7fc6c7c031e5b527f68d36952c733449c6b77264736f6c63430008090033";

type EnumerableBytesMapConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EnumerableBytesMapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EnumerableBytesMap__factory extends ContractFactory {
  constructor(...args: EnumerableBytesMapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EnumerableBytesMap> {
    return super.deploy(overrides || {}) as Promise<EnumerableBytesMap>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EnumerableBytesMap {
    return super.attach(address) as EnumerableBytesMap;
  }
  connect(signer: Signer): EnumerableBytesMap__factory {
    return super.connect(signer) as EnumerableBytesMap__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EnumerableBytesMapInterface {
    return new utils.Interface(_abi) as EnumerableBytesMapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EnumerableBytesMap {
    return new Contract(address, _abi, signerOrProvider) as EnumerableBytesMap;
  }
}
