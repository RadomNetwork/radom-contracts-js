/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IServiceOffer, IServiceOfferInterface } from "../IServiceOffer";

const _abi = [
  {
    inputs: [],
    name: "AddressAlreadyWhitelisted",
    type: "error",
  },
  {
    inputs: [],
    name: "AddressNotWhitelisted",
    type: "error",
  },
  {
    inputs: [],
    name: "AgreementCancelled",
    type: "error",
  },
  {
    inputs: [],
    name: "AgreementNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "AgreementVoid",
    type: "error",
  },
  {
    inputs: [],
    name: "AmountIsTooSmall",
    type: "error",
  },
  {
    inputs: [],
    name: "AssetTypeNotSupported",
    type: "error",
  },
  {
    inputs: [],
    name: "ChargeIntervalInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "FeatureNotSupported",
    type: "error",
  },
  {
    inputs: [],
    name: "IncorrectAgreementPurchaser",
    type: "error",
  },
  {
    inputs: [],
    name: "IncorrectPaymentModel",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientFunds",
    type: "error",
  },
  {
    inputs: [],
    name: "KVPKeyNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "KVPRequiredKeyNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "MissingRequiredKeys",
    type: "error",
  },
  {
    inputs: [],
    name: "OfferAlreadyExists",
    type: "error",
  },
  {
    inputs: [],
    name: "OfferDisabled",
    type: "error",
  },
  {
    inputs: [],
    name: "OfferHasActiveAgreement",
    type: "error",
  },
  {
    inputs: [],
    name: "OfferNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "OrgMustDeposit",
    type: "error",
  },
  {
    inputs: [],
    name: "OrgStreamDoesNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "PricingInputInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "PricingOptionDisabled",
    type: "error",
  },
  {
    inputs: [],
    name: "PricingSelectionInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "ProductHasNoPricing",
    type: "error",
  },
  {
    inputs: [],
    name: "UnsupportedToken",
    type: "error",
  },
  {
    inputs: [],
    name: "WhitelistLimitExceeded",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "networkId",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "serviceOfferId",
        type: "uint32",
      },
    ],
    name: "ServiceOfferCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "networkId",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "serviceOfferId",
        type: "uint32",
      },
    ],
    name: "ServiceOfferDeleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "networkId",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "serviceOfferId",
        type: "uint32",
      },
    ],
    name: "ServiceOfferUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32[]",
            name: "configInputs",
            type: "bytes32[]",
          },
          {
            internalType: "address[]",
            name: "whitelist",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "tokenExchangeRates",
            type: "uint256[]",
          },
          {
            internalType: "address[]",
            name: "tokens",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "pricing",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "title2",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "title1",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "publicKey",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "description",
            type: "bytes",
          },
          {
            internalType: "uint32",
            name: "chargeInterval",
            type: "uint32",
          },
          {
            internalType: "bool",
            name: "offerEnabled",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "whitelistEnabled",
            type: "bool",
          },
          {
            internalType: "uint8",
            name: "authenticationType",
            type: "uint8",
          },
          {
            internalType: "enum Services.PaymentModel",
            name: "paymentModel",
            type: "uint8",
          },
          {
            components: [
              {
                internalType: "bytes31",
                name: "key",
                type: "bytes31",
              },
              {
                internalType: "bool",
                name: "canBeUpdated",
                type: "bool",
              },
              {
                components: [
                  {
                    internalType: "bytes31",
                    name: "key",
                    type: "bytes31",
                  },
                  {
                    internalType: "bool",
                    name: "disabled",
                    type: "bool",
                  },
                  {
                    internalType: "uint256",
                    name: "price",
                    type: "uint256",
                  },
                ],
                internalType: "struct Services.PricingOption[]",
                name: "options",
                type: "tuple[]",
              },
            ],
            internalType: "struct Services.PricingInput[]",
            name: "pricingInputs",
            type: "tuple[]",
          },
        ],
        internalType: "struct Services.ServiceOfferData",
        name: "createOfferData",
        type: "tuple",
      },
    ],
    name: "createServiceOffer",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "serviceOfferId",
        type: "uint32",
      },
    ],
    name: "deleteServiceOffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes20",
        name: "networkId",
        type: "bytes20",
      },
      {
        internalType: "uint32",
        name: "offset",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "limit",
        type: "uint32",
      },
    ],
    name: "getPaginatedNetworkServiceOffers",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32[]",
            name: "configInputs",
            type: "bytes32[]",
          },
          {
            internalType: "address[]",
            name: "whitelist",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "tokenExchangeRates",
            type: "uint256[]",
          },
          {
            internalType: "address[]",
            name: "tokens",
            type: "address[]",
          },
          {
            internalType: "bytes32",
            name: "title2",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "title1",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "publicKey",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "description",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "pricing",
            type: "uint256",
          },
          {
            internalType: "bytes20",
            name: "networkId",
            type: "bytes20",
          },
          {
            internalType: "uint32",
            name: "serviceOfferId",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "chargeInterval",
            type: "uint32",
          },
          {
            internalType: "bool",
            name: "offerEnabled",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "whitelistEnabled",
            type: "bool",
          },
          {
            internalType: "uint8",
            name: "authenticationType",
            type: "uint8",
          },
          {
            internalType: "enum Services.PaymentModel",
            name: "paymentModel",
            type: "uint8",
          },
          {
            components: [
              {
                internalType: "bytes31",
                name: "key",
                type: "bytes31",
              },
              {
                internalType: "bool",
                name: "canBeUpdated",
                type: "bool",
              },
              {
                components: [
                  {
                    internalType: "bytes31",
                    name: "key",
                    type: "bytes31",
                  },
                  {
                    internalType: "bool",
                    name: "disabled",
                    type: "bool",
                  },
                  {
                    internalType: "uint256",
                    name: "price",
                    type: "uint256",
                  },
                ],
                internalType: "struct Services.PricingOption[]",
                name: "options",
                type: "tuple[]",
              },
            ],
            internalType: "struct Services.PricingInput[]",
            name: "pricingInputs",
            type: "tuple[]",
          },
        ],
        internalType: "struct Services.ServiceOfferResponse[]",
        name: "",
        type: "tuple[]",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "offset",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "limit",
        type: "uint32",
      },
    ],
    name: "getPaginatedServiceOffers",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32[]",
            name: "configInputs",
            type: "bytes32[]",
          },
          {
            internalType: "address[]",
            name: "whitelist",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "tokenExchangeRates",
            type: "uint256[]",
          },
          {
            internalType: "address[]",
            name: "tokens",
            type: "address[]",
          },
          {
            internalType: "bytes32",
            name: "title2",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "title1",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "publicKey",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "description",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "pricing",
            type: "uint256",
          },
          {
            internalType: "bytes20",
            name: "networkId",
            type: "bytes20",
          },
          {
            internalType: "uint32",
            name: "serviceOfferId",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "chargeInterval",
            type: "uint32",
          },
          {
            internalType: "bool",
            name: "offerEnabled",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "whitelistEnabled",
            type: "bool",
          },
          {
            internalType: "uint8",
            name: "authenticationType",
            type: "uint8",
          },
          {
            internalType: "enum Services.PaymentModel",
            name: "paymentModel",
            type: "uint8",
          },
          {
            components: [
              {
                internalType: "bytes31",
                name: "key",
                type: "bytes31",
              },
              {
                internalType: "bool",
                name: "canBeUpdated",
                type: "bool",
              },
              {
                components: [
                  {
                    internalType: "bytes31",
                    name: "key",
                    type: "bytes31",
                  },
                  {
                    internalType: "bool",
                    name: "disabled",
                    type: "bool",
                  },
                  {
                    internalType: "uint256",
                    name: "price",
                    type: "uint256",
                  },
                ],
                internalType: "struct Services.PricingOption[]",
                name: "options",
                type: "tuple[]",
              },
            ],
            internalType: "struct Services.PricingInput[]",
            name: "pricingInputs",
            type: "tuple[]",
          },
        ],
        internalType: "struct Services.ServiceOfferResponse[]",
        name: "",
        type: "tuple[]",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "serviceOfferId",
        type: "uint32",
      },
    ],
    name: "getServiceOfferById",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32[]",
            name: "configInputs",
            type: "bytes32[]",
          },
          {
            internalType: "address[]",
            name: "whitelist",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "tokenExchangeRates",
            type: "uint256[]",
          },
          {
            internalType: "address[]",
            name: "tokens",
            type: "address[]",
          },
          {
            internalType: "bytes32",
            name: "title2",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "title1",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "publicKey",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "description",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "pricing",
            type: "uint256",
          },
          {
            internalType: "bytes20",
            name: "networkId",
            type: "bytes20",
          },
          {
            internalType: "uint32",
            name: "serviceOfferId",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "chargeInterval",
            type: "uint32",
          },
          {
            internalType: "bool",
            name: "offerEnabled",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "whitelistEnabled",
            type: "bool",
          },
          {
            internalType: "uint8",
            name: "authenticationType",
            type: "uint8",
          },
          {
            internalType: "enum Services.PaymentModel",
            name: "paymentModel",
            type: "uint8",
          },
          {
            components: [
              {
                internalType: "bytes31",
                name: "key",
                type: "bytes31",
              },
              {
                internalType: "bool",
                name: "canBeUpdated",
                type: "bool",
              },
              {
                components: [
                  {
                    internalType: "bytes31",
                    name: "key",
                    type: "bytes31",
                  },
                  {
                    internalType: "bool",
                    name: "disabled",
                    type: "bool",
                  },
                  {
                    internalType: "uint256",
                    name: "price",
                    type: "uint256",
                  },
                ],
                internalType: "struct Services.PricingOption[]",
                name: "options",
                type: "tuple[]",
              },
            ],
            internalType: "struct Services.PricingInput[]",
            name: "pricingInputs",
            type: "tuple[]",
          },
        ],
        internalType: "struct Services.ServiceOfferResponse",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "serviceOfferId",
        type: "uint32",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "bytes32[]",
                name: "configInputs",
                type: "bytes32[]",
              },
              {
                internalType: "address[]",
                name: "whitelist",
                type: "address[]",
              },
              {
                internalType: "uint256[]",
                name: "tokenExchangeRates",
                type: "uint256[]",
              },
              {
                internalType: "address[]",
                name: "tokens",
                type: "address[]",
              },
              {
                internalType: "uint256",
                name: "pricing",
                type: "uint256",
              },
              {
                internalType: "bytes32",
                name: "title2",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "title1",
                type: "bytes32",
              },
              {
                internalType: "bytes",
                name: "publicKey",
                type: "bytes",
              },
              {
                internalType: "bytes",
                name: "description",
                type: "bytes",
              },
              {
                internalType: "uint32",
                name: "chargeInterval",
                type: "uint32",
              },
              {
                internalType: "bool",
                name: "offerEnabled",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "whitelistEnabled",
                type: "bool",
              },
              {
                internalType: "uint8",
                name: "authenticationType",
                type: "uint8",
              },
              {
                internalType: "enum Services.PaymentModel",
                name: "paymentModel",
                type: "uint8",
              },
              {
                components: [
                  {
                    internalType: "bytes31",
                    name: "key",
                    type: "bytes31",
                  },
                  {
                    internalType: "bool",
                    name: "canBeUpdated",
                    type: "bool",
                  },
                  {
                    components: [
                      {
                        internalType: "bytes31",
                        name: "key",
                        type: "bytes31",
                      },
                      {
                        internalType: "bool",
                        name: "disabled",
                        type: "bool",
                      },
                      {
                        internalType: "uint256",
                        name: "price",
                        type: "uint256",
                      },
                    ],
                    internalType: "struct Services.PricingOption[]",
                    name: "options",
                    type: "tuple[]",
                  },
                ],
                internalType: "struct Services.PricingInput[]",
                name: "pricingInputs",
                type: "tuple[]",
              },
            ],
            internalType: "struct Services.ServiceOfferData",
            name: "dataToUpdate",
            type: "tuple",
          },
          {
            internalType: "address[]",
            name: "whitelistToRemove",
            type: "address[]",
          },
          {
            internalType: "bytes32[]",
            name: "configInputsToRemove",
            type: "bytes32[]",
          },
          {
            internalType: "bytes31[]",
            name: "pricingInputsToRemove",
            type: "bytes31[]",
          },
        ],
        internalType: "struct Services.UpdateServiceOfferData",
        name: "updateOfferData",
        type: "tuple",
      },
    ],
    name: "updateServiceOffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IServiceOffer__factory {
  static readonly abi = _abi;
  static createInterface(): IServiceOfferInterface {
    return new utils.Interface(_abi) as IServiceOfferInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IServiceOffer {
    return new Contract(address, _abi, signerOrProvider) as IServiceOffer;
  }
}
