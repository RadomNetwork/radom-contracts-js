/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  PaymentsFacet,
  PaymentsFacetInterface,
} from "../../../contracts/facets/PaymentsFacet";

const _abi = [
  {
    inputs: [],
    name: "TokenAlreadyInPaymentTokens",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "addSupportedPaymentToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "checkToken",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPaymentTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610321806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063ca5e553e14610046578063ed45e0b214610064578063f1880b2414610079575b600080fd5b61004e61009c565b60405161005b9190610275565b60405180910390f35b6100776100723660046102c2565b6100ad565b005b61008c6100873660046102c2565b6100e0565b604051901515815260200161005b565b60606100a860006100f2565b905090565b6100b5610106565b6100c0600082610193565b6100dd5760405163d8d46ced60e01b815260040160405180910390fd5b50565b60006100ec81836101a8565b92915050565b606060006100ff836101ca565b9392505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c600401546001600160a01b031633146101915760405162461bcd60e51b815260206004820152602260248201527f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60448201526132b960f11b606482015260840160405180910390fd5b565b60006100ff836001600160a01b038416610226565b6001600160a01b038116600090815260018301602052604081205415156100ff565b60608160000180548060200260200160405190810160405280929190818152602001828054801561021a57602002820191906000526020600020905b815481526020019060010190808311610206575b50505050509050919050565b600081815260018301602052604081205461026d575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556100ec565b5060006100ec565b6020808252825182820181905260009190848201906040850190845b818110156102b65783516001600160a01b031683529284019291840191600101610291565b50909695505050505050565b6000602082840312156102d457600080fd5b81356001600160a01b03811681146100ff57600080fdfea2646970667358221220351735d1ffd6ec2e3ba3e1fd11c979376170a5320b54f65f10269288c00a942264736f6c63430008110033";

type PaymentsFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PaymentsFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PaymentsFacet__factory extends ContractFactory {
  constructor(...args: PaymentsFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PaymentsFacet> {
    return super.deploy(overrides || {}) as Promise<PaymentsFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PaymentsFacet {
    return super.attach(address) as PaymentsFacet;
  }
  override connect(signer: Signer): PaymentsFacet__factory {
    return super.connect(signer) as PaymentsFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PaymentsFacetInterface {
    return new utils.Interface(_abi) as PaymentsFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PaymentsFacet {
    return new Contract(address, _abi, signerOrProvider) as PaymentsFacet;
  }
}
