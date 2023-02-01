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
  "0x60806040526001600c5534801561001557600080fd5b50611f8a806100256000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063681bec6c11610066578063681bec6c1461010e5780638340f54914610130578063868c791d14610143578063a6b990de14610156578063b28a40e71461016957600080fd5b806316b50040146100985780635a9baad2146100c55780635c5120ab146100e65780635feb74aa146100f9575b600080fd5b6100ab6100a6366004611b68565b61017c565b604080519283526020830191909152015b60405180910390f35b6100d86100d3366004611b68565b61019e565b6040519081526020016100bc565b6100d86100f4366004611b68565b610335565b61010c610107366004611ba1565b61052f565b005b61012161011c366004611be2565b6105fc565b6040516100bc93929190611c41565b61010c61013e366004611ba1565b610782565b61010c610151366004611cb6565b610a5d565b61010c610164366004611ba1565b610b2b565b61010c610177366004611cb6565b610bec565b600080610189848461019e565b6101938585610335565b915091509250929050565b6001600160a01b038083166000818152600a602090815260408083209486168084529482528083205493835260068252808320948352939052918220825b81548110156103295760008282815481106101f9576101f9611d09565b6000918252602080832060048304015460039283166008026101000a90046001600160401b03168084529190526040909120805491925090640100000000900460ff168061024f57508054600160301b900460ff165b1561025b575050610317565b6001810154815460009163ffffffff600160c01b8204811692600160a01b90920481169161028a911642611d35565b6102949190611d48565b61029e9190611d35565b6001838101549192506102be91600160e01b900463ffffffff1690611d6a565b63ffffffff1681106102f85760018201546102ef9063ffffffff600160e01b8204811691600160c01b900416611d6a565b63ffffffff1690505b60048201546103079082611d8e565b6103119087611d35565b95505050505b8061032181611da5565b9150506101dc565b50909150505b92915050565b604051633c6202c960e21b81526001600160a01b0382166004820152600090309063f1880b2490602401602060405180830381865afa15801561037c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a09190611dbe565b6103bd5760405163350b944160e11b815260040160405180910390fd5b6001600160a01b038084166000818152600b60209081526040808320948716808452948252808320549383526007825280832094835293905291822090915b815481101561032957600082828154811061041957610419611d09565b6000918252602080832060048304015460039283166008026101000a90046001600160401b03168084529190526040909120805491925090640100000000900460ff168061046f57508054600160301b900460ff165b1561047b57505061051d565b6001810154815460009163ffffffff600160c01b8204811692600160a01b9092048116916104aa911642611d35565b6104b49190611d48565b6104be9190611d35565b6001838101549192506104de91600160e01b900463ffffffff1690611d6a565b63ffffffff1681106104fe57506001810154600160e01b900463ffffffff165b600482015461050d9082611d8e565b6105179087611de0565b95505050505b8061052781611da5565b9150506103fc565b6002600c54036105525760405163553e2b4560e11b815260040160405180910390fd5b6002600c556040516302a664eb60e11b81528390600160f21b90309063054cc9d69061058690849086903390600401611df3565b602060405180830381865afa1580156105a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c79190611dbe565b6105e45760405163061cbdd360e51b815260040160405180910390fd5b6105f085858533610ca9565b50506001600c55505050565b60608060606000306001600160a01b031663ca5e553e6040518163ffffffff1660e01b8152600401600060405180830381865afa158015610641573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106699190810190611e44565b9050600081516001600160401b0381111561068657610686611e1e565b6040519080825280602002602001820160405280156106af578160200160208202803683370190505b509050600082516001600160401b038111156106cd576106cd611e1e565b6040519080825280602002602001820160405280156106f6578160200160208202803683370190505b50905060005b8351811015610774576107288885838151811061071b5761071b611d09565b602002602001015161017c565b84838151811061073a5761073a611d09565b6020026020010184848151811061075357610753611d09565b6020908102919091010191909152528061076c81611da5565b9150506106fc565b509196909550909350915050565b6002600c54036107a55760405163553e2b4560e11b815260040160405180910390fd5b6002600c55604051633c6202c960e21b81526001600160a01b0383166004820152309063f1880b2490602401602060405180830381865afa1580156107ee573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108129190611dbe565b61082f5760405163350b944160e11b815260040160405180910390fd5b6040516370a0823160e01b815233600482015281906001600160a01b038416906370a0823190602401602060405180830381865afa158015610875573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108999190611f08565b10156108b85760405163356680b760e01b815260040160405180910390fd5b604051636eb1769f60e11b815233600482015230602482015281906001600160a01b0384169063dd62ed3e90604401602060405180830381865afa158015610904573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109289190611f08565b10156109475760405163404e304b60e01b815260040160405180910390fd5b6001600160a01b038084166000908152600a602090815260408083209386168352929052908120805483929061097e908490611de0565b9091555061098e90508383610ea8565b6040516323b872dd60e01b8152336004820152306024820152604481018290526001600160a01b038316906323b872dd906064016020604051808303816000875af11580156109e1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a059190611dbe565b50816001600160a01b0316836001600160a01b03167f5548c837ab068cf56a2c2479df0882a4922fd203edb7517321831d95078c5f6283604051610a4b91815260200190565b60405180910390a350506001600c5550565b6002600c5403610a805760405163553e2b4560e11b815260040160405180910390fd5b6002600c556040516302a664eb60e11b81528490600160f31b90309063054cc9d690610ab490849086903390600401611df3565b602060405180830381865afa158015610ad1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af59190611dbe565b610b125760405163061cbdd360e51b815260040160405180910390fd5b610b1e86868686611479565b50506001600c5550505050565b6002600c5403610b4e5760405163553e2b4560e11b815260040160405180910390fd5b6002600c556040516302a664eb60e11b81528390600160f21b90309063054cc9d690610b8290849086903390600401611df3565b602060405180830381865afa158015610b9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc39190611dbe565b610be05760405163061cbdd360e51b815260040160405180910390fd5b6105f085858533611479565b6002600c5403610c0f5760405163553e2b4560e11b815260040160405180910390fd5b6002600c556040516302a664eb60e11b81528490600160f31b90309063054cc9d690610c4390849086903390600401611df3565b602060405180830381865afa158015610c60573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c849190611dbe565b610ca15760405163061cbdd360e51b815260040160405180910390fd5b610b1e868686865b604051633c6202c960e21b81526001600160a01b0384166004820152309063f1880b2490602401602060405180830381865afa158015610ced573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d119190611dbe565b610d2e5760405163350b944160e11b815260040160405180910390fd5b610d388484610ea8565b6001600160a01b038085166000908152600a60209081526040808320938716835292905290812054831115610d9957506001600160a01b038481166000908152600a6020908152604080832093871683529290529081208054919055610dd9565b506001600160a01b038085166000908152600a60209081526040808320938716835292905290812080548492839291610dd3908490611d35565b90915550505b610de38585610ea8565b60405163a9059cbb60e01b81526001600160a01b0383811660048301526024820183905285169063a9059cbb906044016020604051808303816000875af1158015610e32573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e569190611dbe565b50604080518281526001600160a01b03848116602083015280871692908816917f22f9d3b10c2de364923939b8cf31c78d7841fd54a9c80e20ae8f166fe0fa9555910160405180910390a35050505050565b6001600160a01b03808316600090815260066020908152604080832093851683529290529081209080805b8354811015611334576000848281548110610ef057610ef0611d09565b6000918252602080832060048304015460039283166008026101000a90046001600160401b03168084529190526040909120805491925090640100000000900460ff1680610f4657508054600160301b900460ff165b156110285785548690610f5b90600190611d35565b81548110610f6b57610f6b611d09565b90600052602060002090600491828204019190066008029054906101000a90046001600160401b0316868481548110610fa657610fa6611d09565b90600052602060002090600491828204019190066008026101000a8154816001600160401b0302191690836001600160401b0316021790555085805480610fef57610fef611f21565b60008281526020902060046000199092019182040180546001600160401b03600860038516026101000a02191690559055506113229050565b6001810154815460009163ffffffff600160c01b8204811692600160a01b909204811691611057911642611d35565b6110619190611d48565b61106b9190611d35565b9050806000036110b95760018201546004830154600160a01b90910463ffffffff169061109b9062989680611d8e565b6110a59190611d48565b6110af9086611de0565b9450505050611322565b81600101601c9054906101000a900463ffffffff1660016110da9190611d6a565b63ffffffff168110611233575060018101805463ffffffff600160e01b820481169283929091601891611116918591600160c01b900416611d6a565b825463ffffffff9182166101009390930a928302919092021990911617905550600182810180546001600160e01b03169055825466ff0000000000001916600160301b1783558754889161116991611d35565b8154811061117957611179611d09565b90600052602060002090600491828204019190066008029054906101000a90046001600160401b03168785815481106111b4576111b4611d09565b90600052602060002090600491828204019190066008026101000a8154816001600160401b0302191690836001600160401b03160217905550868054806111fd576111fd611f21565b60008281526020902060046000199092019182040180546001600160401b03600860038516026101000a021916905590556112b9565b808260010160188282829054906101000a900463ffffffff166112569190611d6a565b92506101000a81548163ffffffff021916908363ffffffff1602179055508160010160149054906101000a900463ffffffff1663ffffffff168260040154629896806112a29190611d8e565b6112ac9190611d48565b6112b69086611de0565b94505b60008260040154826112cb9190611d8e565b90506112d78188611de0565b60018401546001600160a01b039081166000908152600b60209081526040808320938e16835292905290812080549299508392909190611318908490611de0565b9091555050505050505b8061132c81611da5565b915050610ed3565b5080600003611344575050505050565b6001600160a01b038086166000908152600a602090815260408083209388168352929052908120805484929061137b908490611d35565b90915550506001600160a01b038086166000908152600a6020908152604080832093881683529290529081205490826113b78362989680611d8e565b6113c19190611d48565b905060005b855481101561146f5760008682815481106113e3576113e3611d09565b6000918252602080832060048304015460039283166008026101000a90046001600160401b0316808452919052604090912060018101549192509061143590600160a01b900463ffffffff1685611d48565b6001909101805463ffffffff92909216600160e01b026001600160e01b03909216919091179055508061146781611da5565b9150506113c6565b5050505050505050565b604051633c6202c960e21b81526001600160a01b0384166004820152309063f1880b2490602401602060405180830381865afa1580156114bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114e19190611dbe565b6114fe5760405163350b944160e11b815260040160405180910390fd5b6001600160a01b0380851660009081526007602090815260408083209387168352929052908120815b815481101561199b57600082828154811061154457611544611d09565b6000918252602080832060048304015460039283166008026101000a90046001600160401b03168084529190526040909120805491925090640100000000900460ff168061159a57508054600160301b900460ff165b1561167c57835484906115af90600190611d35565b815481106115bf576115bf611d09565b90600052602060002090600491828204019190066008029054906101000a90046001600160401b03168484815481106115fa576115fa611d09565b90600052602060002090600491828204019190066008026101000a8154816001600160401b0302191690836001600160401b031602179055508380548061164357611643611f21565b60008281526020902060046000199092019182040180546001600160401b03600860038516026101000a02191690559055506119899050565b6001810154815460009163ffffffff600160c01b8204811692600160a01b9092048116916116ab911642611d35565b6116b59190611d48565b6116bf9190611d35565b9050806000036116d157505050611989565b81600101601c9054906101000a900463ffffffff1660016116f29190611d6a565b63ffffffff16811061184b575060018101805463ffffffff600160e01b82048116928392909160189161172e918591600160c01b900416611d6a565b825463ffffffff9182166101009390930a928302919092021990911617905550600182810180546001600160e01b03169055825466ff0000000000001916600160301b1783558554869161178191611d35565b8154811061179157611791611d09565b90600052602060002090600491828204019190066008029054906101000a90046001600160401b03168585815481106117cc576117cc611d09565b90600052602060002090600491828204019190066008026101000a8154816001600160401b0302191690836001600160401b031602179055508480548061181557611815611f21565b60008281526020902060046000199092019182040180546001600160401b03600860038516026101000a021916905590556118ce565b8082600101601c8282829054906101000a900463ffffffff1661186e9190611f37565b92506101000a81548163ffffffff021916908363ffffffff160217905550808260010160188282829054906101000a900463ffffffff166118af9190611d6a565b92506101000a81548163ffffffff021916908363ffffffff1602179055505b60008260040154826118e09190611d8e565b83546001600160a01b03600160401b90910481166000908152600a60209081526040808320938f16835292905220549091508111156119325760405163356680b760e01b815260040160405180910390fd5b82546001600160a01b03600160401b90910481166000908152600a60209081526040808320938e1683529290529081208054839290611972908490611d35565b9091555061198290508188611de0565b9650505050505b8061199381611da5565b915050611527565b508382106119f75760006119af8584611d35565b6001600160a01b038089166000908152600b60209081526040808320938b168352929052908120805492935083929091906119eb908490611de0565b90915550611a8a915050565b6000611a038386611d35565b6001600160a01b038089166000908152600b60209081526040808320938b1683529290522054909150811115611a4c5760405163356680b760e01b815260040160405180910390fd5b6001600160a01b038088166000908152600b60209081526040808320938a1683529290529081208054839290611a83908490611d35565b9091555050505b60405163a9059cbb60e01b81526001600160a01b0384811660048301526024820186905286169063a9059cbb906044016020604051808303816000875af1158015611ad9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611afd9190611dbe565b50604080518581526001600160a01b03858116602083015280881692908916917fe42bf9a44d7071319d553bacff19ef1d60e2c120e24605e6270c1f883f27dd81910160405180910390a3505050505050565b6001600160a01b0381168114611b6557600080fd5b50565b60008060408385031215611b7b57600080fd5b8235611b8681611b50565b91506020830135611b9681611b50565b809150509250929050565b600080600060608486031215611bb657600080fd5b8335611bc181611b50565b92506020840135611bd181611b50565b929592945050506040919091013590565b600060208284031215611bf457600080fd5b8135611bff81611b50565b9392505050565b600081518084526020808501945080840160005b83811015611c3657815187529582019590820190600101611c1a565b509495945050505050565b606080825284519082018190526000906020906080840190828801845b82811015611c835781516001600160a01b031684529284019290840190600101611c5e565b50505083810382850152611c978187611c06565b9150508281036040840152611cac8185611c06565b9695505050505050565b60008060008060808587031215611ccc57600080fd5b8435611cd781611b50565b93506020850135611ce781611b50565b9250604085013591506060850135611cfe81611b50565b939692955090935050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8181038181111561032f5761032f611d1f565b600082611d6557634e487b7160e01b600052601260045260246000fd5b500490565b63ffffffff818116838216019080821115611d8757611d87611d1f565b5092915050565b808202811582820484141761032f5761032f611d1f565b600060018201611db757611db7611d1f565b5060010190565b600060208284031215611dd057600080fd5b81518015158114611bff57600080fd5b8082018082111561032f5761032f611d1f565b6001600160f01b03199390931683526001600160a01b03918216602084015216604082015260600190565b634e487b7160e01b600052604160045260246000fd5b8051611e3f81611b50565b919050565b60006020808385031215611e5757600080fd5b82516001600160401b0380821115611e6e57600080fd5b818501915085601f830112611e8257600080fd5b815181811115611e9457611e94611e1e565b8060051b604051601f19603f83011681018181108582111715611eb957611eb9611e1e565b604052918252848201925083810185019188831115611ed757600080fd5b938501935b82851015611efc57611eed85611e34565b84529385019392850192611edc565b98975050505050505050565b600060208284031215611f1a57600080fd5b5051919050565b634e487b7160e01b600052603160045260246000fd5b63ffffffff828116828216039080821115611d8757611d87611d1f56fea264697066735822122026c3a47741af7ef00f157d078973cae2d246e16f74b0b498228967add0aa65a364736f6c63430008110033";

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
