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
    name: "AutoDepositConfigDoesNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "AutoDepositDisabled",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "subscriptionId",
        type: "uint64",
      },
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "AutoDepositTriggerFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "FeatureNotSupported",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientAllowance",
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
    name: "InsufficientWalletBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidAutoDepositConfig",
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
    name: "InvalidSubscriptionId",
    type: "error",
  },
  {
    inputs: [],
    name: "NoSubscriptionsToAutoDeposit",
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
    name: "SubscriptionNotCloseEnoughToExpire",
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
    name: "UnsupportedMethod",
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
    inputs: [],
    name: "WrongChainId",
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
        name: "orgAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getTriggerBalance",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "orgAddress",
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
    name: "withdrawTriggerBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orgAddress",
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
    name: "withdrawTriggerBalanceToRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526001600f5534801561001557600080fd5b50612543806100256000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80638340f549116100715780638340f54914610164578063868c791d146101775780638e7529e91461018a578063a6b990de1461019d578063b28a40e7146101b0578063cc617f53146101c357600080fd5b806316b50040146100b957806359b79a96146100e65780635a9baad2146101075780635c5120ab1461011a5780635feb74aa1461012d578063681bec6c14610142575b600080fd5b6100cc6100c73660046120ae565b6101d6565b604080519283526020830191909152015b60405180910390f35b6100f96100f43660046120ae565b6101f8565b6040519081526020016100dd565b6100f96101153660046120ae565b610225565b6100f96101283660046120ae565b6103c7565b61014061013b3660046120e7565b6105ce565b005b610155610150366004612128565b61069b565b6040516100dd93929190612187565b6101406101723660046120e7565b610821565b6101406101853660046121fc565b610a99565b6101406101983660046120e7565b610b67565b6101406101ab3660046120e7565b610c28565b6101406101be3660046121fc565b610ce9565b6101406101d13660046121fc565b610daa565b6000806101e38484610225565b6101ed85856103c7565b915091509250929050565b6001600160a01b038083166000908152600e60209081526040808320938516835292905220545b92915050565b6001600160a01b038083166000818152600a602090815260408083209486168084529482528083205493835260068252808320948352939052918220825b81548110156103bd5760008282815481106102805761028061224f565b6000918252602080832060048304015460039283166008026101000a90046001600160401b0316808452908290526040909220908101549192509015806102d057508054640100000000900460ff165b806102e357508054600160301b900460ff165b156102ef5750506103ab565b6001810154815460009163ffffffff600160c01b8204811692600160a01b90920481169161031e91164261227b565b610328919061228e565b610332919061227b565b60018381015491925061035291600160e01b900463ffffffff16906122b0565b63ffffffff16811061038c5760018201546103839063ffffffff600160e01b8204811691600160c01b9004166122b0565b63ffffffff1690505b600382015461039b90826122d4565b6103a5908761227b565b95505050505b806103b5816122eb565b915050610263565b5090949350505050565b604051633c6202c960e21b81526001600160a01b0382166004820152600090309063f1880b2490602401602060405180830381865afa15801561040e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104329190612304565b61044f5760405163350b944160e11b815260040160405180910390fd5b6001600160a01b038084166000818152600b60209081526040808320948716808452948252808320549383526007825280832094835293905291822090915b81548110156103bd5760008282815481106104ab576104ab61224f565b6000918252602080832060048304015460039283166008026101000a90046001600160401b0316808452908290526040909220908101549192509015806104fb57508054640100000000900460ff165b8061050e57508054600160301b900460ff165b1561051a5750506105bc565b6001810154815460009163ffffffff600160c01b8204811692600160a01b90920481169161054991164261227b565b610553919061228e565b61055d919061227b565b60018381015491925061057d91600160e01b900463ffffffff16906122b0565b63ffffffff16811061059d57506001810154600160e01b900463ffffffff165b60038201546105ac90826122d4565b6105b69087612326565b95505050505b806105c6816122eb565b91505061048e565b6002600f54036105f15760405163553e2b4560e11b815260040160405180910390fd5b6002600f556040516302a664eb60e11b81528390600160f21b90309063054cc9d69061062590849086903390600401612339565b602060405180830381865afa158015610642573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106669190612304565b6106835760405163061cbdd360e51b815260040160405180910390fd5b61068f85858533610e6b565b50506001600f55505050565b60608060606000306001600160a01b031663ca5e553e6040518163ffffffff1660e01b8152600401600060405180830381865afa1580156106e0573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610708919081019061238a565b9050600081516001600160401b0381111561072557610725612364565b60405190808252806020026020018201604052801561074e578160200160208202803683370190505b509050600082516001600160401b0381111561076c5761076c612364565b604051908082528060200260200182016040528015610795578160200160208202803683370190505b50905060005b8351811015610813576107c7888583815181106107ba576107ba61224f565b60200260200101516101d6565b8483815181106107d9576107d961224f565b602002602001018484815181106107f2576107f261224f565b6020908102919091010191909152528061080b816122eb565b91505061079b565b509196909550909350915050565b6002600f54036108445760405163553e2b4560e11b815260040160405180910390fd5b6002600f55604051633c6202c960e21b81526001600160a01b0383166004820152309063f1880b2490602401602060405180830381865afa15801561088d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b19190612304565b6108ce5760405163350b944160e11b815260040160405180910390fd5b6040516370a0823160e01b815233600482015281906001600160a01b038416906370a0823190602401602060405180830381865afa158015610914573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610938919061244e565b10156109575760405163356680b760e01b815260040160405180910390fd5b604051636eb1769f60e11b815233600482015230602482015281906001600160a01b0384169063dd62ed3e90604401602060405180830381865afa1580156109a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c7919061244e565b10156109e65760405163404e304b60e01b815260040160405180910390fd5b6001600160a01b038084166000908152600a6020908152604080832093861683529290529081208054839290610a1d908490612326565b90915550610a2d9050838361100a565b610a426001600160a01b0383163330846115fa565b816001600160a01b0316836001600160a01b03167f5548c837ab068cf56a2c2479df0882a4922fd203edb7517321831d95078c5f6283604051610a8791815260200190565b60405180910390a350506001600f5550565b6002600f5403610abc5760405163553e2b4560e11b815260040160405180910390fd5b6002600f556040516302a664eb60e11b81528490600160f31b90309063054cc9d690610af090849086903390600401612339565b602060405180830381865afa158015610b0d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b319190612304565b610b4e5760405163061cbdd360e51b815260040160405180910390fd5b610b5a8686868661166b565b50506001600f5550505050565b6002600f5403610b8a5760405163553e2b4560e11b815260040160405180910390fd5b6002600f556040516302a664eb60e11b81528390600160f21b90309063054cc9d690610bbe90849086903390600401612339565b602060405180830381865afa158015610bdb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bff9190612304565b610c1c5760405163061cbdd360e51b815260040160405180910390fd5b61068f85858533611ce2565b6002600f5403610c4b5760405163553e2b4560e11b815260040160405180910390fd5b6002600f556040516302a664eb60e11b81528390600160f21b90309063054cc9d690610c7f90849086903390600401612339565b602060405180830381865afa158015610c9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc09190612304565b610cdd5760405163061cbdd360e51b815260040160405180910390fd5b61068f8585853361166b565b6002600f5403610d0c5760405163553e2b4560e11b815260040160405180910390fd5b6002600f556040516302a664eb60e11b81528490600160f31b90309063054cc9d690610d4090849086903390600401612339565b602060405180830381865afa158015610d5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d819190612304565b610d9e5760405163061cbdd360e51b815260040160405180910390fd5b610b5a86868686610e6b565b6002600f5403610dcd5760405163553e2b4560e11b815260040160405180910390fd5b6002600f556040516302a664eb60e11b81528490600160f31b90309063054cc9d690610e0190849086903390600401612339565b602060405180830381865afa158015610e1e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e429190612304565b610e5f5760405163061cbdd360e51b815260040160405180910390fd5b610b5a86868686611ce2565b604051633c6202c960e21b81526001600160a01b0384166004820152309063f1880b2490602401602060405180830381865afa158015610eaf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ed39190612304565b610ef05760405163350b944160e11b815260040160405180910390fd5b610efa848461100a565b6001600160a01b038085166000908152600a60209081526040808320938716835292905290812054831115610f5b57506001600160a01b038481166000908152600a6020908152604080832093871683529290529081208054919055610f9b565b506001600160a01b038085166000908152600a60209081526040808320938716835292905290812080548492839291610f9590849061227b565b90915550505b610fa5858561100a565b610fb96001600160a01b0385168383611dfa565b604080518281526001600160a01b03848116602083015280871692908816917f22f9d3b10c2de364923939b8cf31c78d7841fd54a9c80e20ae8f166fe0fa9555910160405180910390a35050505050565b6001600160a01b03808316600090815260066020908152604080832093851683529290529081209080805b83548110156114a75760008482815481106110525761105261224f565b6000918252602080832060048304015460039283166008026101000a90046001600160401b0316808452908290526040832091820154909350909103611099575050611495565b8054640100000000900460ff16806110b957508054600160301b900460ff165b1561119b57855486906110ce9060019061227b565b815481106110de576110de61224f565b90600052602060002090600491828204019190066008029054906101000a90046001600160401b03168684815481106111195761111961224f565b90600052602060002090600491828204019190066008026101000a8154816001600160401b0302191690836001600160401b031602179055508580548061116257611162612467565b60008281526020902060046000199092019182040180546001600160401b03600860038516026101000a02191690559055506114959050565b6001810154815460009163ffffffff600160c01b8204811692600160a01b9092048116916111ca91164261227b565b6111d4919061228e565b6111de919061227b565b90508060000361122c5760018201546003830154600160a01b90910463ffffffff169061120e90629896806122d4565b611218919061228e565b6112229086612326565b9450505050611495565b81600101601c9054906101000a900463ffffffff16600161124d91906122b0565b63ffffffff1681106113a6575060018101805463ffffffff600160e01b820481169283929091601891611289918591600160c01b9004166122b0565b825463ffffffff9182166101009390930a928302919092021990911617905550600182810180546001600160e01b03169055825466ff0000000000001916600160301b178355875488916112dc9161227b565b815481106112ec576112ec61224f565b90600052602060002090600491828204019190066008029054906101000a90046001600160401b03168785815481106113275761132761224f565b90600052602060002090600491828204019190066008026101000a8154816001600160401b0302191690836001600160401b031602179055508680548061137057611370612467565b60008281526020902060046000199092019182040180546001600160401b03600860038516026101000a0219169055905561142c565b808260010160188282829054906101000a900463ffffffff166113c991906122b0565b92506101000a81548163ffffffff021916908363ffffffff1602179055508160010160149054906101000a900463ffffffff1663ffffffff1682600301546298968061141591906122d4565b61141f919061228e565b6114299086612326565b94505b600082600301548261143e91906122d4565b905061144a8188612326565b60018401546001600160a01b039081166000908152600b60209081526040808320938e1683529290529081208054929950839290919061148b908490612326565b9091555050505050505b8061149f816122eb565b915050611035565b50806000036114b7575050505050565b6001600160a01b038086166000908152600a60209081526040808320938816835292905290812080548492906114ee90849061227b565b90915550506001600160a01b038086166000908152600a60209081526040808320938816835292905290812054908261152a83629896806122d4565b611534919061228e565b905060005b85548110156115f05760008682815481106115565761155661224f565b6000918252602080832060048304015460039283166008026101000a90046001600160401b031680845290829052604083209182015490935090910361159d5750506115de565b60018101546115b990600160a01b900463ffffffff168561228e565b81600101601c6101000a81548163ffffffff021916908363ffffffff16021790555050505b806115e8816122eb565b915050611539565b5050505050505050565b6040516001600160a01b03808516602483015283166044820152606481018290526116659085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611e2f565b50505050565b604051633c6202c960e21b81526001600160a01b0384166004820152309063f1880b2490602401602060405180830381865afa1580156116af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116d39190612304565b6116f05760405163350b944160e11b815260040160405180910390fd5b6001600160a01b0380851660009081526007602090815260408083209387168352929052908120815b8154811015611b8d5760008282815481106117365761173661224f565b6000918252602080832060048304015460039283166008026101000a90046001600160401b03168084529190526040909120805491925090640100000000900460ff168061178c57508054600160301b900460ff165b1561186e57835484906117a19060019061227b565b815481106117b1576117b161224f565b90600052602060002090600491828204019190066008029054906101000a90046001600160401b03168484815481106117ec576117ec61224f565b90600052602060002090600491828204019190066008026101000a8154816001600160401b0302191690836001600160401b031602179055508380548061183557611835612467565b60008281526020902060046000199092019182040180546001600160401b03600860038516026101000a0219169055905550611b7b9050565b6001810154815460009163ffffffff600160c01b8204811692600160a01b90920481169161189d91164261227b565b6118a7919061228e565b6118b1919061227b565b9050806000036118c357505050611b7b565b81600101601c9054906101000a900463ffffffff1660016118e491906122b0565b63ffffffff168110611a3d575060018101805463ffffffff600160e01b820481169283929091601891611920918591600160c01b9004166122b0565b825463ffffffff9182166101009390930a928302919092021990911617905550600182810180546001600160e01b03169055825466ff0000000000001916600160301b178355855486916119739161227b565b815481106119835761198361224f565b90600052602060002090600491828204019190066008029054906101000a90046001600160401b03168585815481106119be576119be61224f565b90600052602060002090600491828204019190066008026101000a8154816001600160401b0302191690836001600160401b0316021790555084805480611a0757611a07612467565b60008281526020902060046000199092019182040180546001600160401b03600860038516026101000a02191690559055611ac0565b8082600101601c8282829054906101000a900463ffffffff16611a60919061247d565b92506101000a81548163ffffffff021916908363ffffffff160217905550808260010160188282829054906101000a900463ffffffff16611aa191906122b0565b92506101000a81548163ffffffff021916908363ffffffff1602179055505b6000826003015482611ad291906122d4565b83546001600160a01b03600160381b90910481166000908152600a60209081526040808320938f1683529290522054909150811115611b245760405163356680b760e01b815260040160405180910390fd5b82546001600160a01b03600160381b90910481166000908152600a60209081526040808320938e1683529290529081208054839290611b6490849061227b565b90915550611b7490508188612326565b9650505050505b80611b85816122eb565b915050611719565b50838210611be9576000611ba1858461227b565b6001600160a01b038089166000908152600b60209081526040808320938b16835292905290812080549293508392909190611bdd908490612326565b90915550611c7c915050565b6000611bf5838661227b565b6001600160a01b038089166000908152600b60209081526040808320938b1683529290522054909150811115611c3e5760405163356680b760e01b815260040160405180910390fd5b6001600160a01b038088166000908152600b60209081526040808320938a1683529290529081208054839290611c7590849061227b565b9091555050505b611c906001600160a01b0386168486611dfa565b604080518581526001600160a01b03858116602083015280881692908916917fe42bf9a44d7071319d553bacff19ef1d60e2c120e24605e6270c1f883f27dd81910160405180910390a3505050505050565b604051633c6202c960e21b81526001600160a01b0384166004820152309063f1880b2490602401602060405180830381865afa158015611d26573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d4a9190612304565b611d675760405163350b944160e11b815260040160405180910390fd5b6001600160a01b038085166000908152600e6020908152604080832093871683529290522054821115611dad5760405163356680b760e01b815260040160405180910390fd5b6001600160a01b038085166000908152600e6020908152604080832093871683529290529081208054849290611de490849061227b565b9091555061166590506001600160a01b03841682845b6040516001600160a01b038316602482015260448101829052611e2a90849063a9059cbb60e01b9060640161162e565b505050565b6000611e84826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611f069092919063ffffffff16565b805190915015611e2a5780806020019051810190611ea29190612304565b611e2a5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084015b60405180910390fd5b6060611f158484600085611f1d565b949350505050565b606082471015611f7e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401611efd565b600080866001600160a01b03168587604051611f9a91906124be565b60006040518083038185875af1925050503d8060008114611fd7576040519150601f19603f3d011682016040523d82523d6000602084013e611fdc565b606091505b5091509150611fed87838387611ff8565b979650505050505050565b60608315612067578251600003612060576001600160a01b0385163b6120605760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401611efd565b5081611f15565b611f15838381511561207c5781518083602001fd5b8060405162461bcd60e51b8152600401611efd91906124da565b6001600160a01b03811681146120ab57600080fd5b50565b600080604083850312156120c157600080fd5b82356120cc81612096565b915060208301356120dc81612096565b809150509250929050565b6000806000606084860312156120fc57600080fd5b833561210781612096565b9250602084013561211781612096565b929592945050506040919091013590565b60006020828403121561213a57600080fd5b813561214581612096565b9392505050565b600081518084526020808501945080840160005b8381101561217c57815187529582019590820190600101612160565b509495945050505050565b606080825284519082018190526000906020906080840190828801845b828110156121c95781516001600160a01b0316845292840192908401906001016121a4565b505050838103828501526121dd818761214c565b91505082810360408401526121f2818561214c565b9695505050505050565b6000806000806080858703121561221257600080fd5b843561221d81612096565b9350602085013561222d81612096565b925060408501359150606085013561224481612096565b939692955090935050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8181038181111561021f5761021f612265565b6000826122ab57634e487b7160e01b600052601260045260246000fd5b500490565b63ffffffff8181168382160190808211156122cd576122cd612265565b5092915050565b808202811582820484141761021f5761021f612265565b6000600182016122fd576122fd612265565b5060010190565b60006020828403121561231657600080fd5b8151801515811461214557600080fd5b8082018082111561021f5761021f612265565b6001600160f01b03199390931683526001600160a01b03918216602084015216604082015260600190565b634e487b7160e01b600052604160045260246000fd5b805161238581612096565b919050565b6000602080838503121561239d57600080fd5b82516001600160401b03808211156123b457600080fd5b818501915085601f8301126123c857600080fd5b8151818111156123da576123da612364565b8060051b604051601f19603f830116810181811085821117156123ff576123ff612364565b60405291825284820192508381018501918883111561241d57600080fd5b938501935b82851015612442576124338561237a565b84529385019392850192612422565b98975050505050505050565b60006020828403121561246057600080fd5b5051919050565b634e487b7160e01b600052603160045260246000fd5b63ffffffff8281168282160390808211156122cd576122cd612265565b60005b838110156124b557818101518382015260200161249d565b50506000910152565b600082516124d081846020870161249a565b9190910192915050565b60208152600082518060208401526124f981604085016020870161249a565b601f01601f1916919091016040019291505056fea26469706673582212200e5d1fbfc15212389799a38be0542a7cdb3e72f62d9c8b1885c2119df309921f64736f6c63430008110033";

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
