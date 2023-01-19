/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IBilling,
  IBillingInterface,
} from "../../../contracts/interfaces/IBilling";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "subscriptionId",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "productId",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "address",
        name: "seller",
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
        name: "meteredBudgetUsed",
        type: "uint256",
      },
    ],
    name: "MeteredProductCharged",
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
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "orderId",
        type: "bytes32",
      },
    ],
    name: "OrderConfigUpdated",
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
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "orderId",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "customer",
            type: "address",
          },
          {
            internalType: "address",
            name: "seller",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint32",
                name: "productType",
                type: "uint32",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
            ],
            internalType: "struct Billing.Product[]",
            name: "products",
            type: "tuple[]",
          },
        ],
        indexed: false,
        internalType: "struct Billing.Order",
        name: "orderData",
        type: "tuple",
      },
    ],
    name: "OrderPurchased",
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
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "paymentId",
        type: "bytes32",
      },
    ],
    name: "PaymentSuccessful",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "subscriptionId",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "chargeMeteredProduct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "customer",
            type: "address",
          },
          {
            internalType: "address",
            name: "seller",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint32",
                name: "productType",
                type: "uint32",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
            ],
            internalType: "struct Billing.Product[]",
            name: "products",
            type: "tuple[]",
          },
        ],
        internalType: "struct Billing.Order",
        name: "order",
        type: "tuple",
      },
    ],
    name: "generateOrderId",
    outputs: [
      {
        internalType: "bytes32",
        name: "orderId",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "customer",
            type: "address",
          },
          {
            internalType: "address",
            name: "seller",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint32",
                name: "productType",
                type: "uint32",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
            ],
            internalType: "struct Billing.Product[]",
            name: "products",
            type: "tuple[]",
          },
        ],
        internalType: "struct Billing.Order",
        name: "order",
        type: "tuple",
      },
      {
        internalType: "bool",
        name: "fromRadomBalance",
        type: "bool",
      },
    ],
    name: "order",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "customer",
            type: "address",
          },
          {
            internalType: "address",
            name: "seller",
            type: "address",
          },
        ],
        internalType: "struct Billing.Payment",
        name: "payment",
        type: "tuple",
      },
      {
        internalType: "bool",
        name: "fromRadomBalance",
        type: "bool",
      },
    ],
    name: "pay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "customer",
            type: "address",
          },
          {
            internalType: "address",
            name: "seller",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint32",
                name: "productType",
                type: "uint32",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
            ],
            internalType: "struct Billing.Product[]",
            name: "products",
            type: "tuple[]",
          },
        ],
        internalType: "struct Billing.Order",
        name: "order",
        type: "tuple",
      },
    ],
    name: "replaceOrderConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "subscriptionId",
            type: "uint64",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint64[]",
            name: "addOns",
            type: "uint64[]",
          },
        ],
        internalType: "struct Billing.UpdateAddOnsOrder",
        name: "updateData",
        type: "tuple",
      },
    ],
    name: "updateAddOnsOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IBilling__factory {
  static readonly abi = _abi;
  static createInterface(): IBillingInterface {
    return new utils.Interface(_abi) as IBillingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBilling {
    return new Contract(address, _abi, signerOrProvider) as IBilling;
  }
}
