/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  RadomRegistryDiamond,
  RadomRegistryDiamondInterface,
  IDiamondCut,
} from "../../contracts/RadomRegistryDiamond";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "enum IDiamondCut.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct IDiamondCut.FacetCut[]",
        name: "_diamondCut",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        internalType: "struct RadomRegistryDiamond.ConstructorArgs",
        name: "_args",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AddressCannotBeZero",
    type: "error",
  },
  {
    inputs: [],
    name: "DoesNotAcceptEth",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_initializationContractAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "InitializationFunctionReverted",
    type: "error",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002690380380620026908339810160408190526200003491620010df565b80516001600160a01b03166200005d576040516303988b8160e61b815260040160405180910390fd5b60408051600080825260208201909252620000859184916200011760201b620000df1760201c565b6200009f81600001516200037260201b620002f01760201c565b6000620000b6620003f660201b620003501760201c565b6301ffc9a760e01b600090815260039091016020526040808220805460ff1990811660019081179092556307e4c70760e21b845282842080548216831790556348e2b09360e01b84529190922080549091169091179055506200150d915050565b60005b8351811015620003235760008482815181106200013b576200013b62001289565b6020026020010151602001519050600060028111156200015f576200015f6200129f565b8160028111156200017457620001746200129f565b03620001d257620001cc85838151811062000193576200019362001289565b602002602001015160000151868481518110620001b457620001b462001289565b6020026020010151604001516200040960201b60201c565b6200030d565b6001816002811115620001e957620001e96200129f565b036200024157620001cc85838151811062000208576200020862001289565b60200260200101516000015186848151811062000229576200022962001289565b6020026020010151604001516200069660201b60201c565b60028160028111156200025857620002586200129f565b03620002b057620001cc85838151811062000277576200027762001289565b60200260200101516000015186848151811062000298576200029862001289565b6020026020010151604001516200092e60201b60201c565b60405162461bcd60e51b815260206004820152602760248201527f4c69624469616d6f6e644375743a20496e636f727265637420466163657443756044820152663a20b1ba34b7b760c91b60648201526084015b60405180910390fd5b50806200031a81620012cb565b9150506200011a565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb67383838360405162000359939291906200133b565b60405180910390a16200036d828262000a94565b505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c132080546001600160a01b031981166001600160a01b03848116918217909355604051600080516020620025e4833981519152939092169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b600080516020620025e483398151915290565b60008151116200045f5760405162461bcd60e51b815260206004820152602b60248201526000805160206200267083398151915260448201526a1858d95d081d1bc818dd5d60aa1b606482015260840162000304565b600080516020620025e48339815191526001600160a01b038316620004cb5760405162461bcd60e51b815260206004820152602c60248201526000805160206200262c83398151915260448201526b65206164647265737328302960a01b606482015260840162000304565b6001600160a01b0383166000908152600182016020526040812054906001600160601b0382169003620005045762000504828562000b66565b60005b83518110156200068f57600084828151811062000528576200052862001289565b6020908102919091018101516001600160e01b031981166000908152918690526040909120549091506001600160a01b03168015620005d05760405162461bcd60e51b815260206004820152603560248201527f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f60448201527f6e207468617420616c7265616479206578697374730000000000000000000000606482015260840162000304565b6001600160e01b0319821660008181526020878152604080832080546001600160a01b03908116600160a01b6001600160601b038c16021782558c168085526001808c0185529285208054938401815585528385206008840401805463ffffffff60079095166004026101000a948502191660e08a901c94909402939093179092559390925287905281546001600160a01b03191617905583620006748162001442565b945050505080806200068690620012cb565b91505062000507565b5050505050565b6000815111620006ec5760405162461bcd60e51b815260206004820152602b60248201526000805160206200267083398151915260448201526a1858d95d081d1bc818dd5d60aa1b606482015260840162000304565b600080516020620025e48339815191526001600160a01b038316620007585760405162461bcd60e51b815260206004820152602c60248201526000805160206200262c83398151915260448201526b65206164647265737328302960a01b606482015260840162000304565b6001600160a01b0383166000908152600182016020526040812054906001600160601b0382169003620007915762000791828562000b66565b60005b83518110156200068f576000848281518110620007b557620007b562001289565b6020908102919091018101516001600160e01b031981166000908152918690526040909120549091506001600160a01b039081169087168103620008625760405162461bcd60e51b815260206004820152603860248201527f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60448201527f6374696f6e20776974682073616d652066756e6374696f6e0000000000000000606482015260840162000304565b6200086f85828462000bd3565b6001600160e01b0319821660008181526020878152604080832080546001600160a01b03908116600160a01b6001600160601b038c16021782558c168085526001808c0185529285208054938401815585528385206008840401805463ffffffff60079095166004026101000a948502191660e08a901c94909402939093179092559390925287905281546001600160a01b03191617905583620009138162001442565b945050505080806200092590620012cb565b91505062000794565b6000815111620009845760405162461bcd60e51b815260206004820152602b60248201526000805160206200267083398151915260448201526a1858d95d081d1bc818dd5d60aa1b606482015260840162000304565b600080516020620025e48339815191526001600160a01b0383161562000a135760405162461bcd60e51b815260206004820152603660248201527f4c69624469616d6f6e644375743a2052656d6f7665206661636574206164647260448201527f657373206d757374206265206164647265737328302900000000000000000000606482015260840162000304565b60005b825181101562000a8e57600083828151811062000a375762000a3762001289565b6020908102919091018101516001600160e01b031981166000908152918590526040909120549091506001600160a01b031662000a7684828462000bd3565b5050808062000a8590620012cb565b91505062000a16565b50505050565b6001600160a01b03821662000aa7575050565b62000acc82604051806060016040528060288152602001620026046028913962000fb3565b600080836001600160a01b03168360405162000ae9919062001473565b600060405180830381855af49150503d806000811462000b26576040519150601f19603f3d011682016040523d82523d6000602084013e62000b2b565b606091505b50915091508162000a8e5780511562000b475780518082602001fd5b838360405163192105d760e01b81526004016200030492919062001491565b62000b8b816040518060600160405280602481526020016200264c6024913962000fb3565b6002820180546001600160a01b0390921660008181526001948501602090815260408220860185905594840183559182529290200180546001600160a01b0319169091179055565b6001600160a01b03821662000c515760405162461bcd60e51b815260206004820152603760248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360448201527f74696f6e207468617420646f65736e2774206578697374000000000000000000606482015260840162000304565b306001600160a01b0383160362000cc25760405162461bcd60e51b815260206004820152602e60248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560448201526d3a30b1363290333ab731ba34b7b760911b606482015260840162000304565b6001600160e01b03198116600090815260208481526040808320546001600160a01b0386168452600180880190935290832054600160a01b9091046001600160601b0316929162000d1391620014bf565b905080821462000e0c576001600160a01b0384166000908152600186016020526040812080548390811062000d4c5762000d4c62001289565b600091825260208083206008830401546001600160a01b038916845260018a019091526040909220805460079092166004026101000a90920460e01b92508291908590811062000da05762000da062001289565b600091825260208083206008830401805463ffffffff60079094166004026101000a938402191660e09590951c929092029390931790556001600160e01b03199290921682528690526040902080546001600160a01b0316600160a01b6001600160601b038516021790555b6001600160a01b0384166000908152600186016020526040902080548062000e385762000e38620014db565b60008281526020808220600860001990940193840401805463ffffffff600460078716026101000a0219169055919092556001600160e01b031985168252869052604081208190558190036200068f57600285015460009062000e9e90600190620014bf565b6001600160a01b038616600090815260018089016020526040909120015490915080821462000f5457600087600201838154811062000ee15762000ee162001289565b6000918252602090912001546002890180546001600160a01b03909216925082918490811062000f155762000f1562001289565b600091825260208083209190910180546001600160a01b0319166001600160a01b03948516179055929091168152600189810190925260409020018190555b8660020180548062000f6a5762000f6a620014db565b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b0388168252600189810190915260408220015550505050505050565b813b818162000a8e5760405162461bcd60e51b8152600401620003049190620014f1565b634e487b7160e01b600052604160045260246000fd5b604051606081016001600160401b038111828210171562001012576200101262000fd7565b60405290565b604051601f8201601f191681016001600160401b038111828210171562001043576200104362000fd7565b604052919050565b60006001600160401b0382111562001067576200106762000fd7565b5060051b60200190565b80516001600160a01b03811681146200108957600080fd5b919050565b600060208284031215620010a157600080fd5b604051602081016001600160401b0381118282101715620010c657620010c662000fd7565b604052905080620010d78362001071565b905292915050565b60008060408385031215620010f357600080fd5b82516001600160401b03808211156200110b57600080fd5b818501915085601f8301126200112057600080fd5b815160206200113962001133836200104b565b62001018565b82815260059290921b840181019181810190898411156200115957600080fd5b8286015b8481101562001269578051868111156200117657600080fd5b87016060818d03601f190112156200118d57600080fd5b6200119762000fed565b620011a486830162001071565b8152604082015160038110620011b957600080fd5b81870152606082015188811115620011d057600080fd5b8083019250508c603f830112620011e657600080fd5b85820151620011f962001133826200104b565b81815260059190911b830160400190878101908f8311156200121a57600080fd5b6040850194505b82851015620012535784516001600160e01b0319811681146200124357600080fd5b8252938801939088019062001221565b604084015250508452509183019183016200115d565b5096506200127c9050888883016200108e565b9450505050509250929050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201620012e057620012e0620012b5565b5060010190565b60005b8381101562001304578181015183820152602001620012ea565b50506000910152565b6000815180845262001327816020860160208601620012e7565b601f01601f19169290920160200192915050565b60006060808301818452808751808352608092508286019150828160051b8701016020808b0160005b848110156200141057898403607f19018652815180516001600160a01b03168552838101518986019060038110620013ac57634e487b7160e01b600052602160045260246000fd5b868601526040918201519186018a905281519081905290840190600090898701905b80831015620013fa5783516001600160e01b0319168252928601926001929092019190860190620013ce565b5097850197955050509082019060010162001364565b50506001600160a01b038a169088015286810360408801526200143481896200130d565b9a9950505050505050505050565b60006001600160601b038281166002600160601b03198101620014695762001469620012b5565b6001019392505050565b6000825162001487818460208701620012e7565b9190910192915050565b6001600160a01b0383168152604060208201819052600090620014b7908301846200130d565b949350505050565b81810381811115620014d557620014d5620012b5565b92915050565b634e487b7160e01b600052603160045260246000fd5b6020815260006200150660208301846200130d565b9392505050565b6110c7806200151d6000396000f3fe6080604052366100225760405163e67c3afd60e01b815260040160405180910390fd5b600080356001600160e01b03191681527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c602081905260409091205481906001600160a01b0316806100bb5760405162461bcd60e51b815260206004820181905260248201527f4469616d6f6e643a2046756e6374696f6e20646f6573206e6f7420657869737460448201526064015b60405180910390fd5b3660008037600080366000845af43d6000803e8080156100da573d6000f35b3d6000fd5b60005b83518110156102a55760008482815181106100ff576100ff610d4c565b60200260200101516020015190506000600281111561012057610120610d62565b81600281111561013257610132610d62565b036101805761017b85838151811061014c5761014c610d4c565b60200260200101516000015186848151811061016a5761016a610d4c565b602002602001015160400151610374565b610292565b600181600281111561019457610194610d62565b036101dd5761017b8583815181106101ae576101ae610d4c565b6020026020010151600001518684815181106101cc576101cc610d4c565b6020026020010151604001516104f0565b60028160028111156101f1576101f1610d62565b0361023a5761017b85838151811061020b5761020b610d4c565b60200260200101516000015186848151811061022957610229610d4c565b60200260200101516040015161067d565b60405162461bcd60e51b815260206004820152602760248201527f4c69624469616d6f6e644375743a20496e636f727265637420466163657443756044820152663a20b1ba34b7b760c91b60648201526084016100b2565b508061029d81610d8e565b9150506100e2565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb6738383836040516102d993929190610df7565b60405180910390a16102eb8282610798565b505050565b60006102fa610350565b6004810180546001600160a01b038581166001600160a01b031983168117909355604051939450169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90565b60008151116103955760405162461bcd60e51b81526004016100b290610ef7565b600061039f610350565b90506001600160a01b0383166103c75760405162461bcd60e51b81526004016100b290610f42565b6001600160a01b0383166000908152600182016020526040812054906001600160601b03821690036103fd576103fd828561085e565b60005b83518110156104e957600084828151811061041d5761041d610d4c565b6020908102919091018101516001600160e01b031981166000908152918690526040909120549091506001600160a01b031680156104bb5760405162461bcd60e51b815260206004820152603560248201527f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f6044820152746e207468617420616c72656164792065786973747360581b60648201526084016100b2565b6104c78583868a6108c8565b836104d181610f8e565b945050505080806104e190610d8e565b915050610400565b5050505050565b60008151116105115760405162461bcd60e51b81526004016100b290610ef7565b600061051b610350565b90506001600160a01b0383166105435760405162461bcd60e51b81526004016100b290610f42565b6001600160a01b0383166000908152600182016020526040812054906001600160601b038216900361057957610579828561085e565b60005b83518110156104e957600084828151811061059957610599610d4c565b6020908102919091018101516001600160e01b031981166000908152918690526040909120549091506001600160a01b0390811690871681036106445760405162461bcd60e51b815260206004820152603860248201527f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60448201527f6374696f6e20776974682073616d652066756e6374696f6e000000000000000060648201526084016100b2565b61064f858284610968565b61065b8583868a6108c8565b8361066581610f8e565b9450505050808061067590610d8e565b91505061057c565b600081511161069e5760405162461bcd60e51b81526004016100b290610ef7565b60006106a8610350565b90506001600160a01b038316156107205760405162461bcd60e51b815260206004820152603660248201527f4c69624469616d6f6e644375743a2052656d6f76652066616365742061646472604482015275657373206d757374206265206164647265737328302960501b60648201526084016100b2565b60005b825181101561079257600083828151811061074057610740610d4c565b6020908102919091018101516001600160e01b031981166000908152918590526040909120549091506001600160a01b031661077d848284610968565b5050808061078a90610d8e565b915050610723565b50505050565b6001600160a01b0382166107aa575050565b6107cc8260405180606001604052806028815260200161104660289139610d2b565b600080836001600160a01b0316836040516107e79190610fb4565b600060405180830381855af49150503d8060008114610822576040519150601f19603f3d011682016040523d82523d6000602084013e610827565b606091505b509150915081610792578051156108415780518082602001fd5b838360405163192105d760e01b81526004016100b2929190610fd0565b6108808160405180606001604052806024815260200161106e60249139610d2b565b6002820180546001600160a01b0390921660008181526001948501602090815260408220860185905594840183559182529290200180546001600160a01b0319169091179055565b6001600160e01b0319831660008181526020868152604080832080546001600160601b03909716600160a01b026001600160a01b0397881617815594909516808352600180890183529583208054968701815583528183206008870401805460e09890981c60046007909816979097026101000a96870263ffffffff9097021990971695909517909555529290915281546001600160a01b031916179055565b6001600160a01b0382166109e45760405162461bcd60e51b815260206004820152603760248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360448201527f74696f6e207468617420646f65736e277420657869737400000000000000000060648201526084016100b2565b306001600160a01b03831603610a535760405162461bcd60e51b815260206004820152602e60248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560448201526d3a30b1363290333ab731ba34b7b760911b60648201526084016100b2565b6001600160e01b03198116600090815260208481526040808320546001600160a01b0386168452600180880190935290832054600160a01b9091046001600160601b03169291610aa291610ffc565b9050808214610b94576001600160a01b03841660009081526001860160205260408120805483908110610ad757610ad7610d4c565b600091825260208083206008830401546001600160a01b038916845260018a019091526040909220805460079092166004026101000a90920460e01b925082919085908110610b2857610b28610d4c565b600091825260208083206008830401805463ffffffff60079094166004026101000a938402191660e09590951c929092029390931790556001600160e01b03199290921682528690526040902080546001600160a01b0316600160a01b6001600160601b038516021790555b6001600160a01b03841660009081526001860160205260409020805480610bbd57610bbd611015565b60008281526020808220600860001990940193840401805463ffffffff600460078716026101000a0219169055919092556001600160e01b031985168252869052604081208190558190036104e9576002850154600090610c2090600190610ffc565b6001600160a01b0386166000908152600180890160205260409091200154909150808214610ccf576000876002018381548110610c5f57610c5f610d4c565b6000918252602090912001546002890180546001600160a01b039092169250829184908110610c9057610c90610d4c565b600091825260208083209190910180546001600160a01b0319166001600160a01b03948516179055929091168152600189810190925260409020018190555b86600201805480610ce257610ce2611015565b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b0388168252600189810190915260408220015550505050505050565b813b81816107925760405162461bcd60e51b81526004016100b2919061102b565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201610da057610da0610d78565b5060010190565b60005b83811015610dc2578181015183820152602001610daa565b50506000910152565b60008151808452610de3816020860160208601610da7565b601f01601f19169290920160200192915050565b60006060808301818452808751808352608092508286019150828160051b8701016020808b0160005b84811015610ec757898403607f19018652815180516001600160a01b03168552838101518986019060038110610e6657634e487b7160e01b600052602160045260246000fd5b868601526040918201519186018a905281519081905290840190600090898701905b80831015610eb25783516001600160e01b0319168252928601926001929092019190860190610e88565b50978501979550505090820190600101610e20565b50506001600160a01b038a16908801528681036040880152610ee98189610dcb565b9a9950505050505050505050565b6020808252602b908201527f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660408201526a1858d95d081d1bc818dd5d60aa1b606082015260800190565b6020808252602c908201527f4c69624469616d6f6e644375743a204164642066616365742063616e2774206260408201526b65206164647265737328302960a01b606082015260800190565b60006001600160601b03808316818103610faa57610faa610d78565b6001019392505050565b60008251610fc6818460208701610da7565b9190910192915050565b6001600160a01b0383168152604060208201819052600090610ff490830184610dcb565b949350505050565b8181038181111561100f5761100f610d78565b92915050565b634e487b7160e01b600052603160045260246000fd5b60208152600061103e6020830184610dcb565b939250505056fe4c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a204e657720666163657420686173206e6f20636f6465a26469706673582212209a566bd2eeadff51dda61be509fa4b0bc69b82475bb1b8ca250a78e6f3aa942d64736f6c63430008110033c8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c4c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a204164642066616365742063616e277420624c69624469616d6f6e644375743a204e657720666163657420686173206e6f20636f64654c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e2066";

type RadomRegistryDiamondConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RadomRegistryDiamondConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RadomRegistryDiamond__factory extends ContractFactory {
  constructor(...args: RadomRegistryDiamondConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _diamondCut: IDiamondCut.FacetCutStruct[],
    _args: RadomRegistryDiamond.ConstructorArgsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RadomRegistryDiamond> {
    return super.deploy(
      _diamondCut,
      _args,
      overrides || {}
    ) as Promise<RadomRegistryDiamond>;
  }
  override getDeployTransaction(
    _diamondCut: IDiamondCut.FacetCutStruct[],
    _args: RadomRegistryDiamond.ConstructorArgsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_diamondCut, _args, overrides || {});
  }
  override attach(address: string): RadomRegistryDiamond {
    return super.attach(address) as RadomRegistryDiamond;
  }
  override connect(signer: Signer): RadomRegistryDiamond__factory {
    return super.connect(signer) as RadomRegistryDiamond__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RadomRegistryDiamondInterface {
    return new utils.Interface(_abi) as RadomRegistryDiamondInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RadomRegistryDiamond {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RadomRegistryDiamond;
  }
}
