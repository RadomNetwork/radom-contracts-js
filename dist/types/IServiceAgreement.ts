/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type KeyValuePairStruct = { key: BytesLike; value: BytesLike };

export type KeyValuePairStructOutput = [string, string] & {
  key: string;
  value: string;
};

export type PricingSelectionStruct = { key: BytesLike; option: BytesLike };

export type PricingSelectionStructOutput = [string, string] & {
  key: string;
  option: string;
};

export type ServiceAgreementResponseStruct = {
  sellerOrgId: BytesLike;
  serviceAgreementId: BigNumberish;
  agreementStart: BigNumberish;
  authenticationString: BytesLike;
  agreementEnd: BigNumberish;
  indexRunsOutOfFunds: BigNumberish;
  pricing: BigNumberish;
  offerPurchaser: BytesLike;
  chargeInterval: BigNumberish;
  serviceOfferId: BigNumberish;
  isActive: boolean;
  cancelled: boolean;
  revoked: boolean;
  token: string;
  keyValuePairs: KeyValuePairStruct[];
  pricingSelection: PricingSelectionStruct[];
  paymentModel: BigNumberish;
};

export type ServiceAgreementResponseStructOutput = [
  string,
  BigNumber,
  number,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  number,
  number,
  boolean,
  boolean,
  boolean,
  string,
  KeyValuePairStructOutput[],
  PricingSelectionStructOutput[],
  number
] & {
  sellerOrgId: string;
  serviceAgreementId: BigNumber;
  agreementStart: number;
  authenticationString: string;
  agreementEnd: BigNumber;
  indexRunsOutOfFunds: BigNumber;
  pricing: BigNumber;
  offerPurchaser: string;
  chargeInterval: number;
  serviceOfferId: number;
  isActive: boolean;
  cancelled: boolean;
  revoked: boolean;
  token: string;
  keyValuePairs: KeyValuePairStructOutput[];
  pricingSelection: PricingSelectionStructOutput[];
  paymentModel: number;
};

export type PricingSelectionDataStruct = {
  key: BytesLike;
  optionIndex: BigNumberish;
};

export type PricingSelectionDataStructOutput = [string, number] & {
  key: string;
  optionIndex: number;
};

export type PurchaseAgreementDataStruct = {
  authenticationString: BytesLike;
  offerPurchaser: BytesLike;
  serviceOfferId: BigNumberish;
  tokenIndex: BigNumberish;
  configSelection: KeyValuePairStruct[];
  pricingSelection: PricingSelectionDataStruct[];
};

export type PurchaseAgreementDataStructOutput = [
  string,
  string,
  number,
  number,
  KeyValuePairStructOutput[],
  PricingSelectionDataStructOutput[]
] & {
  authenticationString: string;
  offerPurchaser: string;
  serviceOfferId: number;
  tokenIndex: number;
  configSelection: KeyValuePairStructOutput[];
  pricingSelection: PricingSelectionDataStructOutput[];
};

export type UpdateAgreementConfigDataStruct = {
  authenticationString: BytesLike;
  buyerOrgId: BytesLike;
  agreementId: BigNumberish;
  configSelection: KeyValuePairStruct[];
};

export type UpdateAgreementConfigDataStructOutput = [
  string,
  string,
  BigNumber,
  KeyValuePairStructOutput[]
] & {
  authenticationString: string;
  buyerOrgId: string;
  agreementId: BigNumber;
  configSelection: KeyValuePairStructOutput[];
};

export type UpdateAgreementPricingSelectionDataStruct = {
  buyerOrgId: BytesLike;
  agreementId: BigNumberish;
  pricingSelection: PricingSelectionDataStruct[];
};

export type UpdateAgreementPricingSelectionDataStructOutput = [
  string,
  BigNumber,
  PricingSelectionDataStructOutput[]
] & {
  buyerOrgId: string;
  agreementId: BigNumber;
  pricingSelection: PricingSelectionDataStructOutput[];
};

export interface IServiceAgreementInterface extends utils.Interface {
  functions: {
    "cancelSubscription(uint64,bytes20)": FunctionFragment;
    "getNumberOfActiveAgreements(uint32)": FunctionFragment;
    "getOfferAgreements(uint32)": FunctionFragment;
    "getPaginatedServiceAgreements(bytes20,uint64,uint64)": FunctionFragment;
    "getPurchasedAgreements(bytes20)": FunctionFragment;
    "getServiceAgreement(uint64)": FunctionFragment;
    "getSoldAgreements(bytes20)": FunctionFragment;
    "pricingStep()": FunctionFragment;
    "purchase((bytes,bytes20,uint32,uint32,(bytes32,bytes)[],(bytes31,uint8)[]),bool)": FunctionFragment;
    "revokeSubscription(uint64,uint32)": FunctionFragment;
    "updateAgreementConfig((bytes,bytes20,uint64,(bytes32,bytes)[]))": FunctionFragment;
    "updateAgreementPricingSelection((bytes20,uint64,(bytes31,uint8)[]))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "cancelSubscription",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getNumberOfActiveAgreements",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getOfferAgreements",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPaginatedServiceAgreements",
    values: [BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPurchasedAgreements",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getServiceAgreement",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSoldAgreements",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "pricingStep",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "purchase",
    values: [PurchaseAgreementDataStruct, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeSubscription",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAgreementConfig",
    values: [UpdateAgreementConfigDataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAgreementPricingSelection",
    values: [UpdateAgreementPricingSelectionDataStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "cancelSubscription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNumberOfActiveAgreements",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOfferAgreements",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPaginatedServiceAgreements",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPurchasedAgreements",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getServiceAgreement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSoldAgreements",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pricingStep",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "purchase", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "revokeSubscription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAgreementConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAgreementPricingSelection",
    data: BytesLike
  ): Result;

  events: {
    "OneTimePurchaseSuccessful(uint160,address,address,address)": EventFragment;
    "ServiceAgreementCancelled(uint64,uint32,address,address,address,uint256,bool)": EventFragment;
    "ServiceAgreementCreated(uint64,uint32,address,address,address)": EventFragment;
    "ServiceAgreementUpdated(uint64,uint32,address,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OneTimePurchaseSuccessful"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ServiceAgreementCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ServiceAgreementCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ServiceAgreementUpdated"): EventFragment;
}

export type OneTimePurchaseSuccessfulEvent = TypedEvent<
  [BigNumber, string, string, string],
  {
    serviceOfferId: BigNumber;
    purchaser: string;
    seller: string;
    token: string;
  }
>;

export type OneTimePurchaseSuccessfulEventFilter =
  TypedEventFilter<OneTimePurchaseSuccessfulEvent>;

export type ServiceAgreementCancelledEvent = TypedEvent<
  [BigNumber, number, string, string, string, BigNumber, boolean],
  {
    serviceAgreementId: BigNumber;
    serviceOfferId: number;
    purchaser: string;
    seller: string;
    token: string;
    userExpiryTimestamp: BigNumber;
    revoked: boolean;
  }
>;

export type ServiceAgreementCancelledEventFilter =
  TypedEventFilter<ServiceAgreementCancelledEvent>;

export type ServiceAgreementCreatedEvent = TypedEvent<
  [BigNumber, number, string, string, string],
  {
    serviceAgreementId: BigNumber;
    serviceOfferId: number;
    purchaser: string;
    seller: string;
    token: string;
  }
>;

export type ServiceAgreementCreatedEventFilter =
  TypedEventFilter<ServiceAgreementCreatedEvent>;

export type ServiceAgreementUpdatedEvent = TypedEvent<
  [BigNumber, number, string, string, string],
  {
    serviceAgreementId: BigNumber;
    serviceOfferId: number;
    purchaser: string;
    seller: string;
    token: string;
  }
>;

export type ServiceAgreementUpdatedEventFilter =
  TypedEventFilter<ServiceAgreementUpdatedEvent>;

export interface IServiceAgreement extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IServiceAgreementInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    cancelSubscription(
      agreementId: BigNumberish,
      offerPurchaser: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getNumberOfActiveAgreements(
      serviceOfferId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getOfferAgreements(
      serviceOfferId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[ServiceAgreementResponseStructOutput[]]>;

    getPaginatedServiceAgreements(
      networkId: BytesLike,
      offset: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[ServiceAgreementResponseStructOutput[], BigNumber]>;

    getPurchasedAgreements(
      networkId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[ServiceAgreementResponseStructOutput[]]>;

    getServiceAgreement(
      agreementId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[ServiceAgreementResponseStructOutput]>;

    getSoldAgreements(
      networkId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[ServiceAgreementResponseStructOutput[]]>;

    pricingStep(overrides?: CallOverrides): Promise<[BigNumber]>;

    purchase(
      purchaseAgreementData: PurchaseAgreementDataStruct,
      fromRadomBalance: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeSubscription(
      agreementId: BigNumberish,
      serviceOfferId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateAgreementConfig(
      updateData: UpdateAgreementConfigDataStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateAgreementPricingSelection(
      updateData: UpdateAgreementPricingSelectionDataStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  cancelSubscription(
    agreementId: BigNumberish,
    offerPurchaser: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getNumberOfActiveAgreements(
    serviceOfferId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getOfferAgreements(
    serviceOfferId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<ServiceAgreementResponseStructOutput[]>;

  getPaginatedServiceAgreements(
    networkId: BytesLike,
    offset: BigNumberish,
    limit: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[ServiceAgreementResponseStructOutput[], BigNumber]>;

  getPurchasedAgreements(
    networkId: BytesLike,
    overrides?: CallOverrides
  ): Promise<ServiceAgreementResponseStructOutput[]>;

  getServiceAgreement(
    agreementId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<ServiceAgreementResponseStructOutput>;

  getSoldAgreements(
    networkId: BytesLike,
    overrides?: CallOverrides
  ): Promise<ServiceAgreementResponseStructOutput[]>;

  pricingStep(overrides?: CallOverrides): Promise<BigNumber>;

  purchase(
    purchaseAgreementData: PurchaseAgreementDataStruct,
    fromRadomBalance: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeSubscription(
    agreementId: BigNumberish,
    serviceOfferId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateAgreementConfig(
    updateData: UpdateAgreementConfigDataStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateAgreementPricingSelection(
    updateData: UpdateAgreementPricingSelectionDataStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    cancelSubscription(
      agreementId: BigNumberish,
      offerPurchaser: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    getNumberOfActiveAgreements(
      serviceOfferId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOfferAgreements(
      serviceOfferId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<ServiceAgreementResponseStructOutput[]>;

    getPaginatedServiceAgreements(
      networkId: BytesLike,
      offset: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[ServiceAgreementResponseStructOutput[], BigNumber]>;

    getPurchasedAgreements(
      networkId: BytesLike,
      overrides?: CallOverrides
    ): Promise<ServiceAgreementResponseStructOutput[]>;

    getServiceAgreement(
      agreementId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<ServiceAgreementResponseStructOutput>;

    getSoldAgreements(
      networkId: BytesLike,
      overrides?: CallOverrides
    ): Promise<ServiceAgreementResponseStructOutput[]>;

    pricingStep(overrides?: CallOverrides): Promise<BigNumber>;

    purchase(
      purchaseAgreementData: PurchaseAgreementDataStruct,
      fromRadomBalance: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeSubscription(
      agreementId: BigNumberish,
      serviceOfferId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateAgreementConfig(
      updateData: UpdateAgreementConfigDataStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    updateAgreementPricingSelection(
      updateData: UpdateAgreementPricingSelectionDataStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OneTimePurchaseSuccessful(uint160,address,address,address)"(
      serviceOfferId?: BigNumberish | null,
      purchaser?: string | null,
      seller?: string | null,
      token?: null
    ): OneTimePurchaseSuccessfulEventFilter;
    OneTimePurchaseSuccessful(
      serviceOfferId?: BigNumberish | null,
      purchaser?: string | null,
      seller?: string | null,
      token?: null
    ): OneTimePurchaseSuccessfulEventFilter;

    "ServiceAgreementCancelled(uint64,uint32,address,address,address,uint256,bool)"(
      serviceAgreementId?: null,
      serviceOfferId?: BigNumberish | null,
      purchaser?: string | null,
      seller?: string | null,
      token?: null,
      userExpiryTimestamp?: null,
      revoked?: null
    ): ServiceAgreementCancelledEventFilter;
    ServiceAgreementCancelled(
      serviceAgreementId?: null,
      serviceOfferId?: BigNumberish | null,
      purchaser?: string | null,
      seller?: string | null,
      token?: null,
      userExpiryTimestamp?: null,
      revoked?: null
    ): ServiceAgreementCancelledEventFilter;

    "ServiceAgreementCreated(uint64,uint32,address,address,address)"(
      serviceAgreementId?: null,
      serviceOfferId?: BigNumberish | null,
      purchaser?: string | null,
      seller?: string | null,
      token?: null
    ): ServiceAgreementCreatedEventFilter;
    ServiceAgreementCreated(
      serviceAgreementId?: null,
      serviceOfferId?: BigNumberish | null,
      purchaser?: string | null,
      seller?: string | null,
      token?: null
    ): ServiceAgreementCreatedEventFilter;

    "ServiceAgreementUpdated(uint64,uint32,address,address,address)"(
      serviceAgreementId?: null,
      serviceOfferId?: BigNumberish | null,
      purchaser?: string | null,
      seller?: string | null,
      token?: null
    ): ServiceAgreementUpdatedEventFilter;
    ServiceAgreementUpdated(
      serviceAgreementId?: null,
      serviceOfferId?: BigNumberish | null,
      purchaser?: string | null,
      seller?: string | null,
      token?: null
    ): ServiceAgreementUpdatedEventFilter;
  };

  estimateGas: {
    cancelSubscription(
      agreementId: BigNumberish,
      offerPurchaser: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getNumberOfActiveAgreements(
      serviceOfferId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOfferAgreements(
      serviceOfferId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPaginatedServiceAgreements(
      networkId: BytesLike,
      offset: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPurchasedAgreements(
      networkId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getServiceAgreement(
      agreementId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSoldAgreements(
      networkId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pricingStep(overrides?: CallOverrides): Promise<BigNumber>;

    purchase(
      purchaseAgreementData: PurchaseAgreementDataStruct,
      fromRadomBalance: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeSubscription(
      agreementId: BigNumberish,
      serviceOfferId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateAgreementConfig(
      updateData: UpdateAgreementConfigDataStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateAgreementPricingSelection(
      updateData: UpdateAgreementPricingSelectionDataStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cancelSubscription(
      agreementId: BigNumberish,
      offerPurchaser: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getNumberOfActiveAgreements(
      serviceOfferId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOfferAgreements(
      serviceOfferId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPaginatedServiceAgreements(
      networkId: BytesLike,
      offset: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPurchasedAgreements(
      networkId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getServiceAgreement(
      agreementId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSoldAgreements(
      networkId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pricingStep(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    purchase(
      purchaseAgreementData: PurchaseAgreementDataStruct,
      fromRadomBalance: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeSubscription(
      agreementId: BigNumberish,
      serviceOfferId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateAgreementConfig(
      updateData: UpdateAgreementConfigDataStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateAgreementPricingSelection(
      updateData: UpdateAgreementPricingSelectionDataStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
