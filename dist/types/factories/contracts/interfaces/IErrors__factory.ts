/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IErrors,
  IErrorsInterface,
} from "../../../contracts/interfaces/IErrors";

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
] as const;

export class IErrors__factory {
  static readonly abi = _abi;
  static createInterface(): IErrorsInterface {
    return new utils.Interface(_abi) as IErrorsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IErrors {
    return new Contract(address, _abi, signerOrProvider) as IErrors;
  }
}
