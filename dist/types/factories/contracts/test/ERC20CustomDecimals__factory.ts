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
import type { PromiseOrValue } from "../../../common";
import type {
  ERC20CustomDecimals,
  ERC20CustomDecimalsInterface,
} from "../../../contracts/test/ERC20CustomDecimals";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "numDecimals",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
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
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mint1000",
    outputs: [],
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
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620010b7380380620010b7833981016040819052620000349162000220565b848484848383600362000048838262000360565b50600462000057828262000360565b5050506200006c81836200009060201b60201c565b50506005805460ff191660ff94909416939093179092555062000454945050505050565b6001600160a01b038216620000eb5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620000ff91906200042c565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b505050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200018357600080fd5b81516001600160401b0380821115620001a057620001a06200015b565b604051601f8301601f19908116603f01168101908282118183101715620001cb57620001cb6200015b565b81604052838152602092508683858801011115620001e857600080fd5b600091505b838210156200020c5785820183015181830184015290820190620001ed565b600093810190920192909252949350505050565b600080600080600060a086880312156200023957600080fd5b85516001600160401b03808211156200025157600080fd5b6200025f89838a0162000171565b965060208801519150808211156200027657600080fd5b50620002858882890162000171565b60408801516060890151919650945090506001600160a01b0381168114620002ac57600080fd5b608087015190925060ff81168114620002c457600080fd5b809150509295509295909350565b600181811c90821680620002e757607f821691505b6020821081036200030857634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200015657600081815260208120601f850160051c81016020861015620003375750805b601f850160051c820191505b81811015620003585782815560010162000343565b505050505050565b81516001600160401b038111156200037c576200037c6200015b565b62000394816200038d8454620002d2565b846200030e565b602080601f831160018114620003cc5760008415620003b35750858301515b600019600386901b1c1916600185901b17855562000358565b600085815260208120601f198616915b82811015620003fd57888601518255948401946001909101908401620003dc565b50858210156200041c5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b808201808211156200044e57634e487b7160e01b600052601160045260246000fd5b92915050565b610c5380620004646000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063a15dfdbf11610066578063a15dfdbf146101f4578063a457c2d7146101fc578063a9059cbb1461020f578063dd62ed3e1461022257600080fd5b806370a082311461019d57806379cc6790146101c657806395d89b41146101d9578063a0712d68146101e157600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063395093511461017557806342966c681461018857600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610235565b60405161010f9190610975565b60405180910390f35b61012b6101263660046109df565b6102c7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610a09565b6102e1565b60055460405160ff909116815260200161010f565b61012b6101833660046109df565b610305565b61019b610196366004610a45565b610327565b005b61013f6101ab366004610a5e565b6001600160a01b031660009081526020819052604090205490565b61019b6101d43660046109df565b610334565b61010261034d565b61019b6101ef366004610a45565b61035c565b61019b610366565b61012b61020a3660046109df565b610390565b61012b61021d3660046109df565b610410565b61013f610230366004610a80565b61041e565b60606003805461024490610ab3565b80601f016020809104026020016040519081016040528092919081815260200182805461027090610ab3565b80156102bd5780601f10610292576101008083540402835291602001916102bd565b820191906000526020600020905b8154815290600101906020018083116102a057829003601f168201915b5050505050905090565b6000336102d5818585610449565b60019150505b92915050565b6000336102ef85828561056e565b6102fa8585856105e8565b506001949350505050565b6000336102d5818585610318838361041e565b6103229190610b03565b610449565b610331338261078c565b50565b61033f82338361056e565b610349828261078c565b5050565b60606004805461024490610ab3565b61033133826108b6565b60055461038e90339061037d9060ff16600a610bfa565b610389906103e8610c06565b6108b6565b565b6000338161039e828661041e565b9050838110156104035760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6102fa8286868403610449565b6000336102d58185856105e8565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166104ab5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103fa565b6001600160a01b03821661050c5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103fa565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b600061057a848461041e565b905060001981146105e257818110156105d55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103fa565b6105e28484848403610449565b50505050565b6001600160a01b03831661064c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103fa565b6001600160a01b0382166106ae5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103fa565b6001600160a01b038316600090815260208190526040902054818110156107265760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103fa565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a36105e2565b6001600160a01b0382166107ec5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103fa565b6001600160a01b038216600090815260208190526040902054818110156108605760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103fa565b6001600160a01b0383166000818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9101610561565b6001600160a01b03821661090c5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103fa565b806002600082825461091e9190610b03565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b600060208083528351808285015260005b818110156109a257858101830151858201604001528201610986565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b03811681146109da57600080fd5b919050565b600080604083850312156109f257600080fd5b6109fb836109c3565b946020939093013593505050565b600080600060608486031215610a1e57600080fd5b610a27846109c3565b9250610a35602085016109c3565b9150604084013590509250925092565b600060208284031215610a5757600080fd5b5035919050565b600060208284031215610a7057600080fd5b610a79826109c3565b9392505050565b60008060408385031215610a9357600080fd5b610a9c836109c3565b9150610aaa602084016109c3565b90509250929050565b600181811c90821680610ac757607f821691505b602082108103610ae757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156102db576102db610aed565b600181815b80851115610b51578160001904821115610b3757610b37610aed565b80851615610b4457918102915b93841c9390800290610b1b565b509250929050565b600082610b68575060016102db565b81610b75575060006102db565b8160018114610b8b5760028114610b9557610bb1565b60019150506102db565b60ff841115610ba657610ba6610aed565b50506001821b6102db565b5060208310610133831016604e8410600b8410161715610bd4575081810a6102db565b610bde8383610b16565b8060001904821115610bf257610bf2610aed565b029392505050565b6000610a798383610b59565b80820281158282048414176102db576102db610aed56fea2646970667358221220323a0522c6f6d9714a25804e336be513aad3ec7c2b69e9e1e317ac54a296fe3a64736f6c63430008110033";

type ERC20CustomDecimalsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20CustomDecimalsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20CustomDecimals__factory extends ContractFactory {
  constructor(...args: ERC20CustomDecimalsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    initialSupply: PromiseOrValue<BigNumberish>,
    owner: PromiseOrValue<string>,
    numDecimals: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20CustomDecimals> {
    return super.deploy(
      name,
      symbol,
      initialSupply,
      owner,
      numDecimals,
      overrides || {}
    ) as Promise<ERC20CustomDecimals>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    initialSupply: PromiseOrValue<BigNumberish>,
    owner: PromiseOrValue<string>,
    numDecimals: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      initialSupply,
      owner,
      numDecimals,
      overrides || {}
    );
  }
  override attach(address: string): ERC20CustomDecimals {
    return super.attach(address) as ERC20CustomDecimals;
  }
  override connect(signer: Signer): ERC20CustomDecimals__factory {
    return super.connect(signer) as ERC20CustomDecimals__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20CustomDecimalsInterface {
    return new utils.Interface(_abi) as ERC20CustomDecimalsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20CustomDecimals {
    return new Contract(address, _abi, signerOrProvider) as ERC20CustomDecimals;
  }
}
