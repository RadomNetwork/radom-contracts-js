/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TreasuryFacet,
  TreasuryFacetInterface,
} from "../../../contracts/facets/TreasuryFacet";

const _abi = [
  {
    inputs: [],
    name: "FeatureNotSupported",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientFunds",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientPermissions",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidChargingInterval",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidMeteredCharge",
    type: "error",
  },
  {
    inputs: [],
    name: "OrgMustDeposit",
    type: "error",
  },
  {
    inputs: [],
    name: "ProductHasNoPrice",
    type: "error",
  },
  {
    inputs: [],
    name: "ReEntrancyGuard",
    type: "error",
  },
  {
    inputs: [],
    name: "SubscriptionNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "SubscriptionNotMetered",
    type: "error",
  },
  {
    inputs: [],
    name: "SubscriptionVoid",
    type: "error",
  },
  {
    inputs: [],
    name: "UnsupportedProduct",
    type: "error",
  },
  {
    inputs: [],
    name: "UnsupportedToken",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "orgId",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "BuyBalanceWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "orgId",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "senderOrg",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipientOrg",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "userExpiryTimestamp",
        type: "uint256",
      },
    ],
    name: "InnerTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "orgId",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "SellBalanceWithdrawn",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orgId",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orgId",
        type: "address",
      },
    ],
    name: "getAllTokenBalances",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orgId",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getBuyAndSellBalances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orgId",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getBuyBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orgId",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getSellBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orgId",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawBuyBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orgId",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "withdrawTo",
        type: "address",
      },
    ],
    name: "withdrawBuyBalanceToRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orgId",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawSellBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orgId",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "withdrawTo",
        type: "address",
      },
    ],
    name: "withdrawSellBalanceToRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526001600d5534801561001557600080fd5b50611f9e806100256000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063681bec6c11610066578063681bec6c1461010e5780638340f54914610130578063868c791d14610143578063a6b990de14610156578063b28a40e71461016957600080fd5b806316b50040146100985780635a9baad2146100c55780635c5120ab146100e65780635feb74aa146100f9575b600080fd5b6100ab6100a6366004611b7c565b61017c565b604080519283526020830191909152015b60405180910390f35b6100d86100d3366004611b7c565b61019e565b6040519081526020016100bc565b6100d86100f4366004611b7c565b610339565b61010c610107366004611bb5565b610537565b005b61012161011c366004611bf6565b610604565b6040516100bc93929190611c55565b61010c61013e366004611bb5565b61078a565b61010c610151366004611cca565b610a65565b61010c610164366004611bb5565b610b33565b61010c610177366004611cca565b610bf4565b600080610189848461019e565b6101938585610339565b915091509250929050565b6001600160a01b038083166000818152600b602090815260408083209486168084529482528083205493835260078252808320948352939052918220825b815481101561032d5760008282815481106101f9576101f9611d1d565b6000918252602080832060048084049091015460039093166008026101000a9092046001600160401b03168084529190526040909120805491925090640100000000900460ff168061025357508054600160301b900460ff165b1561025f57505061031b565b6001810154815460009163ffffffff600160c01b8204811692600160a01b90920481169161028e911642611d49565b6102989190611d5c565b6102a29190611d49565b6001838101549192506102c291600160e01b900463ffffffff1690611d7e565b63ffffffff1681106102fc5760018201546102f39063ffffffff600160e01b8204811691600160c01b900416611d7e565b63ffffffff1690505b600482015461030b9082611da2565b6103159087611d49565b95505050505b8061032581611db9565b9150506101dc565b50909150505b92915050565b604051633c6202c960e21b81526001600160a01b0382166004820152600090309063f1880b2490602401602060405180830381865afa158015610380573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a49190611dd2565b6103c15760405163350b944160e11b815260040160405180910390fd5b6001600160a01b038084166000818152600c60209081526040808320948716808452948252808320549383526008825280832094835293905291822090915b815481101561032d57600082828154811061041d5761041d611d1d565b6000918252602080832060048084049091015460039093166008026101000a9092046001600160401b03168084529190526040909120805491925090640100000000900460ff168061047757508054600160301b900460ff165b15610483575050610525565b6001810154815460009163ffffffff600160c01b8204811692600160a01b9092048116916104b2911642611d49565b6104bc9190611d5c565b6104c69190611d49565b6001838101549192506104e691600160e01b900463ffffffff1690611d7e565b63ffffffff16811061050657506001810154600160e01b900463ffffffff165b60048201546105159082611da2565b61051f9087611df4565b95505050505b8061052f81611db9565b915050610400565b6002600d540361055a5760405163553e2b4560e11b815260040160405180910390fd5b6002600d556040516302a664eb60e11b81528390600160f21b90309063054cc9d69061058e90849086903390600401611e07565b602060405180830381865afa1580156105ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105cf9190611dd2565b6105ec5760405163061cbdd360e51b815260040160405180910390fd5b6105f885858533610cb1565b50506001600d55505050565b60608060606000306001600160a01b031663ca5e553e6040518163ffffffff1660e01b8152600401600060405180830381865afa158015610649573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106719190810190611e58565b9050600081516001600160401b0381111561068e5761068e611e32565b6040519080825280602002602001820160405280156106b7578160200160208202803683370190505b509050600082516001600160401b038111156106d5576106d5611e32565b6040519080825280602002602001820160405280156106fe578160200160208202803683370190505b50905060005b835181101561077c576107308885838151811061072357610723611d1d565b602002602001015161017c565b84838151811061074257610742611d1d565b6020026020010184848151811061075b5761075b611d1d565b6020908102919091010191909152528061077481611db9565b915050610704565b509196909550909350915050565b6002600d54036107ad5760405163553e2b4560e11b815260040160405180910390fd5b6002600d55604051633c6202c960e21b81526001600160a01b0383166004820152309063f1880b2490602401602060405180830381865afa1580156107f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061081a9190611dd2565b6108375760405163350b944160e11b815260040160405180910390fd5b6040516370a0823160e01b815233600482015281906001600160a01b038416906370a0823190602401602060405180830381865afa15801561087d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a19190611f1c565b10156108c05760405163356680b760e01b815260040160405180910390fd5b604051636eb1769f60e11b815233600482015230602482015281906001600160a01b0384169063dd62ed3e90604401602060405180830381865afa15801561090c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109309190611f1c565b101561094f5760405163404e304b60e01b815260040160405180910390fd5b6001600160a01b038084166000908152600b6020908152604080832093861683529290529081208054839290610986908490611df4565b9091555061099690508383610eb0565b6040516323b872dd60e01b8152336004820152306024820152604481018290526001600160a01b038316906323b872dd906064016020604051808303816000875af11580156109e9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a0d9190611dd2565b50816001600160a01b0316836001600160a01b03167f5548c837ab068cf56a2c2479df0882a4922fd203edb7517321831d95078c5f6283604051610a5391815260200190565b60405180910390a350506001600d5550565b6002600d5403610a885760405163553e2b4560e11b815260040160405180910390fd5b6002600d556040516302a664eb60e11b81528490600160f31b90309063054cc9d690610abc90849086903390600401611e07565b602060405180830381865afa158015610ad9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610afd9190611dd2565b610b1a5760405163061cbdd360e51b815260040160405180910390fd5b610b2686868686611489565b50506001600d5550505050565b6002600d5403610b565760405163553e2b4560e11b815260040160405180910390fd5b6002600d556040516302a664eb60e11b81528390600160f21b90309063054cc9d690610b8a90849086903390600401611e07565b602060405180830381865afa158015610ba7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bcb9190611dd2565b610be85760405163061cbdd360e51b815260040160405180910390fd5b6105f885858533611489565b6002600d5403610c175760405163553e2b4560e11b815260040160405180910390fd5b6002600d556040516302a664eb60e11b81528490600160f31b90309063054cc9d690610c4b90849086903390600401611e07565b602060405180830381865afa158015610c68573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c8c9190611dd2565b610ca95760405163061cbdd360e51b815260040160405180910390fd5b610b26868686865b604051633c6202c960e21b81526001600160a01b0384166004820152309063f1880b2490602401602060405180830381865afa158015610cf5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d199190611dd2565b610d365760405163350b944160e11b815260040160405180910390fd5b610d408484610eb0565b6001600160a01b038085166000908152600b60209081526040808320938716835292905290812054831115610da157506001600160a01b038481166000908152600b6020908152604080832093871683529290529081208054919055610de1565b506001600160a01b038085166000908152600b60209081526040808320938716835292905290812080548492839291610ddb908490611d49565b90915550505b610deb8585610eb0565b60405163a9059cbb60e01b81526001600160a01b0383811660048301526024820183905285169063a9059cbb906044016020604051808303816000875af1158015610e3a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e5e9190611dd2565b50604080518281526001600160a01b03848116602083015280871692908816917f22f9d3b10c2de364923939b8cf31c78d7841fd54a9c80e20ae8f166fe0fa9555910160405180910390a35050505050565b6001600160a01b03808316600090815260076020908152604080832093851683529290529081209080805b8354811015611340576000848281548110610ef857610ef8611d1d565b6000918252602080832060048084049091015460039093166008026101000a9092046001600160401b03168084529190526040909120805491925090640100000000900460ff1680610f5257508054600160301b900460ff165b156110345785548690610f6790600190611d49565b81548110610f7757610f77611d1d565b90600052602060002090600491828204019190066008029054906101000a90046001600160401b0316868481548110610fb257610fb2611d1d565b90600052602060002090600491828204019190066008026101000a8154816001600160401b0302191690836001600160401b0316021790555085805480610ffb57610ffb611f35565b60008281526020902060046000199092019182040180546001600160401b03600860038516026101000a021916905590555061132e9050565b6001810154815460009163ffffffff600160c01b8204811692600160a01b909204811691611063911642611d49565b61106d9190611d5c565b6110779190611d49565b9050806000036110c55760018201546004830154600160a01b90910463ffffffff16906110a79062989680611da2565b6110b19190611d5c565b6110bb9086611df4565b945050505061132e565b81600101601c9054906101000a900463ffffffff1660016110e69190611d7e565b63ffffffff16811061123f575060018101805463ffffffff600160e01b820481169283929091601891611122918591600160c01b900416611d7e565b825463ffffffff9182166101009390930a928302919092021990911617905550600182810180546001600160e01b03169055825466ff0000000000001916600160301b1783558754889161117591611d49565b8154811061118557611185611d1d565b90600052602060002090600491828204019190066008029054906101000a90046001600160401b03168785815481106111c0576111c0611d1d565b90600052602060002090600491828204019190066008026101000a8154816001600160401b0302191690836001600160401b031602179055508680548061120957611209611f35565b60008281526020902060046000199092019182040180546001600160401b03600860038516026101000a021916905590556112c5565b808260010160188282829054906101000a900463ffffffff166112629190611d7e565b92506101000a81548163ffffffff021916908363ffffffff1602179055508160010160149054906101000a900463ffffffff1663ffffffff168260040154629896806112ae9190611da2565b6112b89190611d5c565b6112c29086611df4565b94505b60008260040154826112d79190611da2565b90506112e38188611df4565b60018401546001600160a01b039081166000908152600c60209081526040808320938e16835292905290812080549299508392909190611324908490611df4565b9091555050505050505b8061133881611db9565b915050610edb565b5080600003611350575050505050565b6001600160a01b038086166000908152600b6020908152604080832093881683529290529081208054849290611387908490611d49565b90915550506001600160a01b038086166000908152600b6020908152604080832093881683529290529081205490826113c38362989680611da2565b6113cd9190611d5c565b905060005b855481101561147f5760008682815481106113ef576113ef611d1d565b6000918252602080832060048084049091015460039093166008026101000a9092046001600160401b0316808452919052604090912060018101549192509061144590600160a01b900463ffffffff1685611d5c565b6001909101805463ffffffff92909216600160e01b026001600160e01b03909216919091179055508061147781611db9565b9150506113d2565b5050505050505050565b604051633c6202c960e21b81526001600160a01b0384166004820152309063f1880b2490602401602060405180830381865afa1580156114cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114f19190611dd2565b61150e5760405163350b944160e11b815260040160405180910390fd5b6001600160a01b0380851660009081526008602090815260408083209387168352929052908120815b81548110156119af57600082828154811061155457611554611d1d565b6000918252602080832060048084049091015460039093166008026101000a9092046001600160401b03168084529190526040909120805491925090640100000000900460ff16806115ae57508054600160301b900460ff165b1561169057835484906115c390600190611d49565b815481106115d3576115d3611d1d565b90600052602060002090600491828204019190066008029054906101000a90046001600160401b031684848154811061160e5761160e611d1d565b90600052602060002090600491828204019190066008026101000a8154816001600160401b0302191690836001600160401b031602179055508380548061165757611657611f35565b60008281526020902060046000199092019182040180546001600160401b03600860038516026101000a021916905590555061199d9050565b6001810154815460009163ffffffff600160c01b8204811692600160a01b9092048116916116bf911642611d49565b6116c99190611d5c565b6116d39190611d49565b9050806000036116e55750505061199d565b81600101601c9054906101000a900463ffffffff1660016117069190611d7e565b63ffffffff16811061185f575060018101805463ffffffff600160e01b820481169283929091601891611742918591600160c01b900416611d7e565b825463ffffffff9182166101009390930a928302919092021990911617905550600182810180546001600160e01b03169055825466ff0000000000001916600160301b1783558554869161179591611d49565b815481106117a5576117a5611d1d565b90600052602060002090600491828204019190066008029054906101000a90046001600160401b03168585815481106117e0576117e0611d1d565b90600052602060002090600491828204019190066008026101000a8154816001600160401b0302191690836001600160401b031602179055508480548061182957611829611f35565b60008281526020902060046000199092019182040180546001600160401b03600860038516026101000a021916905590556118e2565b8082600101601c8282829054906101000a900463ffffffff166118829190611f4b565b92506101000a81548163ffffffff021916908363ffffffff160217905550808260010160188282829054906101000a900463ffffffff166118c39190611d7e565b92506101000a81548163ffffffff021916908363ffffffff1602179055505b60008260040154826118f49190611da2565b83546001600160a01b03600160401b90910481166000908152600b60209081526040808320938f16835292905220549091508111156119465760405163356680b760e01b815260040160405180910390fd5b82546001600160a01b03600160401b90910481166000908152600b60209081526040808320938e1683529290529081208054839290611986908490611d49565b9091555061199690508188611df4565b9650505050505b806119a781611db9565b915050611537565b50838210611a0b5760006119c38584611d49565b6001600160a01b038089166000908152600c60209081526040808320938b168352929052908120805492935083929091906119ff908490611df4565b90915550611a9e915050565b6000611a178386611d49565b6001600160a01b038089166000908152600c60209081526040808320938b1683529290522054909150811115611a605760405163356680b760e01b815260040160405180910390fd5b6001600160a01b038088166000908152600c60209081526040808320938a1683529290529081208054839290611a97908490611d49565b9091555050505b60405163a9059cbb60e01b81526001600160a01b0384811660048301526024820186905286169063a9059cbb906044016020604051808303816000875af1158015611aed573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b119190611dd2565b50604080518581526001600160a01b03858116602083015280881692908916917fe42bf9a44d7071319d553bacff19ef1d60e2c120e24605e6270c1f883f27dd81910160405180910390a3505050505050565b6001600160a01b0381168114611b7957600080fd5b50565b60008060408385031215611b8f57600080fd5b8235611b9a81611b64565b91506020830135611baa81611b64565b809150509250929050565b600080600060608486031215611bca57600080fd5b8335611bd581611b64565b92506020840135611be581611b64565b929592945050506040919091013590565b600060208284031215611c0857600080fd5b8135611c1381611b64565b9392505050565b600081518084526020808501945080840160005b83811015611c4a57815187529582019590820190600101611c2e565b509495945050505050565b606080825284519082018190526000906020906080840190828801845b82811015611c975781516001600160a01b031684529284019290840190600101611c72565b50505083810382850152611cab8187611c1a565b9150508281036040840152611cc08185611c1a565b9695505050505050565b60008060008060808587031215611ce057600080fd5b8435611ceb81611b64565b93506020850135611cfb81611b64565b9250604085013591506060850135611d1281611b64565b939692955090935050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8181038181111561033357610333611d33565b600082611d7957634e487b7160e01b600052601260045260246000fd5b500490565b63ffffffff818116838216019080821115611d9b57611d9b611d33565b5092915050565b808202811582820484141761033357610333611d33565b600060018201611dcb57611dcb611d33565b5060010190565b600060208284031215611de457600080fd5b81518015158114611c1357600080fd5b8082018082111561033357610333611d33565b6001600160f01b03199390931683526001600160a01b03918216602084015216604082015260600190565b634e487b7160e01b600052604160045260246000fd5b8051611e5381611b64565b919050565b60006020808385031215611e6b57600080fd5b82516001600160401b0380821115611e8257600080fd5b818501915085601f830112611e9657600080fd5b815181811115611ea857611ea8611e32565b8060051b604051601f19603f83011681018181108582111715611ecd57611ecd611e32565b604052918252848201925083810185019188831115611eeb57600080fd5b938501935b82851015611f1057611f0185611e48565b84529385019392850192611ef0565b98975050505050505050565b600060208284031215611f2e57600080fd5b5051919050565b634e487b7160e01b600052603160045260246000fd5b63ffffffff828116828216039080821115611d9b57611d9b611d3356fea2646970667358221220d8f6fbcafde38947b89c31228ce171c49c6f42f2add25fb759ec1677be05bf4364736f6c63430008110033";

type TreasuryFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TreasuryFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TreasuryFacet__factory extends ContractFactory {
  constructor(...args: TreasuryFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TreasuryFacet> {
    return super.deploy(overrides || {}) as Promise<TreasuryFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TreasuryFacet {
    return super.attach(address) as TreasuryFacet;
  }
  override connect(signer: Signer): TreasuryFacet__factory {
    return super.connect(signer) as TreasuryFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TreasuryFacetInterface {
    return new utils.Interface(_abi) as TreasuryFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TreasuryFacet {
    return new Contract(address, _abi, signerOrProvider) as TreasuryFacet;
  }
}
