/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  RadomERC20Token,
  RadomERC20TokenInterface,
} from "../../contracts/RadomERC20Token";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_initialSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "IncorrectEthAmount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PCTBuyEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PCTSellEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "buyToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "sellToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawEth",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000e0338038062000e03833981016040819052620000349162000240565b6040518060400160405280600f81526020016e2930b237b6a2a92199182a37b5b2b760891b81525060405180604001604052806003815260200162444f4d60e81b8152508160039080519060200190620000909291906200019a565b508051620000a69060049060208401906200019a565b505050620000bb3382620000d460201b60201c565b50600580546001600160a01b03191633179055620002be565b6001600160a01b0382166200012f5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200014391906200025a565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b828054620001a89062000281565b90600052602060002090601f016020900481019282620001cc576000855562000217565b82601f10620001e757805160ff191683800117855562000217565b8280016001018555821562000217579182015b8281111562000217578251825591602001919060010190620001fa565b506200022592915062000229565b5090565b5b808211156200022557600081556001016200022a565b6000602082840312156200025357600080fd5b5051919050565b600082198211156200027c57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200029657607f821691505b60208210811415620002b857634e487b7160e01b600052602260045260246000fd5b50919050565b610b3580620002ce6000396000f3fe6080604052600436106100dd5760003560e01c8063395093511161007f578063a0ef91df11610059578063a0ef91df14610238578063a457c2d71461024d578063a9059cbb1461026d578063dd62ed3e1461028d57600080fd5b806339509351146101cd57806370a08231146101ed57806395d89b411461022357600080fd5b80632397e4d7116100bb5780632397e4d71461015c57806323b872dd1461017e5780632d296bf11461019e578063313ce567146101b157600080fd5b806306fdde03146100e2578063095ea7b31461010d57806318160ddd1461013d575b600080fd5b3480156100ee57600080fd5b506100f76102ad565b6040516101049190610910565b60405180910390f35b34801561011957600080fd5b5061012d610128366004610981565b61033f565b6040519015158152602001610104565b34801561014957600080fd5b506002545b604051908152602001610104565b34801561016857600080fd5b5061017c6101773660046109ab565b610357565b005b34801561018a57600080fd5b5061012d6101993660046109c4565b6103d8565b61017c6101ac3660046109ab565b6103fc565b3480156101bd57600080fd5b5060405160128152602001610104565b3480156101d957600080fd5b5061012d6101e8366004610981565b61048e565b3480156101f957600080fd5b5061014e610208366004610a00565b6001600160a01b031660009081526020819052604090205490565b34801561022f57600080fd5b506100f76104b0565b34801561024457600080fd5b5061017c6104bf565b34801561025957600080fd5b5061012d610268366004610981565b610515565b34801561027957600080fd5b5061012d610288366004610981565b610595565b34801561029957600080fd5b5061014e6102a8366004610a22565b6105a3565b6060600380546102bc90610a55565b80601f01602080910402602001604051908101604052809291908181526020018280546102e890610a55565b80156103355780601f1061030a57610100808354040283529160200191610335565b820191906000526020600020905b81548152906001019060200180831161031857829003601f168201915b5050505050905090565b60003361034d8185856105ce565b5060019392505050565b33600090815260066020526040902081905560055461037f906001600160a01b031682610595565b506103886104bf565b600554604080513381526001600160a01b03909216602083015281018290527fcd302abd7c274d2566b41886ffc8e1e6bba820258e81fe7e58c5e4515f9a424c906060015b60405180910390a150565b6000336103e68582856106f2565b6103f185858561076c565b506001949350505050565b61040e670de0b6b3a764000034610aa6565b811461042d57604051638b6ebb4d60e01b815260040160405180910390fd5b600554610444906001600160a01b031633836103d8565b50600554604080516001600160a01b03909216825233602083015281018290527f2cfc721878071f1e2fc85b85591116a44afcaba74ab3b76ec5da59e91ef1a036906060016103cd565b60003361034d8185856104a183836105a3565b6104ab9190610ac8565b6105ce565b6060600480546102bc90610a55565b3360008181526006602052604081208054919055906108fc6104e983670de0b6b3a7640000610ae0565b6040518115909202916000818181858888f19350505050158015610511573d6000803e3d6000fd5b5050565b6000338161052382866105a3565b9050838110156105885760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6103f182868684036105ce565b60003361034d81858561076c565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166106305760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161057f565b6001600160a01b0382166106915760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161057f565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006106fe84846105a3565b9050600019811461076657818110156107595760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161057f565b61076684848484036105ce565b50505050565b6001600160a01b0383166107d05760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161057f565b6001600160a01b0382166108325760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161057f565b6001600160a01b038316600090815260208190526040902054818110156108aa5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161057f565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610766565b600060208083528351808285015260005b8181101561093d57858101830151858201604001528201610921565b8181111561094f576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461097c57600080fd5b919050565b6000806040838503121561099457600080fd5b61099d83610965565b946020939093013593505050565b6000602082840312156109bd57600080fd5b5035919050565b6000806000606084860312156109d957600080fd5b6109e284610965565b92506109f060208501610965565b9150604084013590509250925092565b600060208284031215610a1257600080fd5b610a1b82610965565b9392505050565b60008060408385031215610a3557600080fd5b610a3e83610965565b9150610a4c60208401610965565b90509250929050565b600181811c90821680610a6957607f821691505b60208210811415610a8a57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082610ac357634e487b7160e01b600052601260045260246000fd5b500490565b60008219821115610adb57610adb610a90565b500190565b6000816000190483118215151615610afa57610afa610a90565b50029056fea264697066735822122016b034c0a0c878cd3a24617e0486d1c8e6ed3f1faa20487f7c8a5da363b2038264736f6c63430008090033";

type RadomERC20TokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RadomERC20TokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RadomERC20Token__factory extends ContractFactory {
  constructor(...args: RadomERC20TokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _initialSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RadomERC20Token> {
    return super.deploy(
      _initialSupply,
      overrides || {}
    ) as Promise<RadomERC20Token>;
  }
  override getDeployTransaction(
    _initialSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_initialSupply, overrides || {});
  }
  override attach(address: string): RadomERC20Token {
    return super.attach(address) as RadomERC20Token;
  }
  override connect(signer: Signer): RadomERC20Token__factory {
    return super.connect(signer) as RadomERC20Token__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RadomERC20TokenInterface {
    return new utils.Interface(_abi) as RadomERC20TokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RadomERC20Token {
    return new Contract(address, _abi, signerOrProvider) as RadomERC20Token;
  }
}
