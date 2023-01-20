/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace Billing {
  export type ProductStruct = {
    productType: PromiseOrValue<BigNumberish>;
    data: PromiseOrValue<BytesLike>;
  };

  export type ProductStructOutput = [number, string] & {
    productType: number;
    data: string;
  };

  export type OrderStruct = {
    nonce: PromiseOrValue<BigNumberish>;
    customer: PromiseOrValue<string>;
    seller: PromiseOrValue<string>;
    products: Billing.ProductStruct[];
  };

  export type OrderStructOutput = [
    BigNumber,
    string,
    string,
    Billing.ProductStructOutput[]
  ] & {
    nonce: BigNumber;
    customer: string;
    seller: string;
    products: Billing.ProductStructOutput[];
  };

  export type PaymentStruct = {
    nonce: PromiseOrValue<BigNumberish>;
    price: PromiseOrValue<BigNumberish>;
    token: PromiseOrValue<string>;
    customer: PromiseOrValue<string>;
    seller: PromiseOrValue<string>;
  };

  export type PaymentStructOutput = [
    BigNumber,
    BigNumber,
    string,
    string,
    string
  ] & {
    nonce: BigNumber;
    price: BigNumber;
    token: string;
    customer: string;
    seller: string;
  };

  export type UpdateAddOnsOrderStruct = {
    subscriptionId: PromiseOrValue<BigNumberish>;
    price: PromiseOrValue<BigNumberish>;
    addOns: PromiseOrValue<BigNumberish>[];
  };

  export type UpdateAddOnsOrderStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber[]
  ] & { subscriptionId: BigNumber; price: BigNumber; addOns: BigNumber[] };
}

export declare namespace Subscriptions {
  export type SubscriptionResponseStruct = {
    customer: PromiseOrValue<string>;
    seller: PromiseOrValue<string>;
    productId: PromiseOrValue<BigNumberish>;
    productType: PromiseOrValue<BigNumberish>;
    subscriptionId: PromiseOrValue<BigNumberish>;
    subscriptionStart: PromiseOrValue<BigNumberish>;
    authenticationString: PromiseOrValue<BytesLike>;
    subscriptionEnd: PromiseOrValue<BigNumberish>;
    indexRunsOutOfFunds: PromiseOrValue<BigNumberish>;
    pricing: PromiseOrValue<BigNumberish>;
    chargingInterval: PromiseOrValue<BigNumberish>;
    elapsedIntervals: PromiseOrValue<BigNumberish>;
    intervals: PromiseOrValue<BigNumberish>;
    isActive: PromiseOrValue<boolean>;
    cancelled: PromiseOrValue<boolean>;
    revoked: PromiseOrValue<boolean>;
    useRadomBalance: PromiseOrValue<boolean>;
    token: PromiseOrValue<string>;
    meteredChargingInterval: PromiseOrValue<BigNumberish>;
    lastMeteredChargeInterval: PromiseOrValue<BigNumberish>;
    meteredBudget: PromiseOrValue<BigNumberish>;
    meteredBudgetUsed: PromiseOrValue<BigNumberish>;
  };

  export type SubscriptionResponseStructOutput = [
    string,
    string,
    BigNumber,
    number,
    BigNumber,
    number,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    number,
    number,
    boolean,
    boolean,
    boolean,
    boolean,
    string,
    number,
    number,
    BigNumber,
    BigNumber
  ] & {
    customer: string;
    seller: string;
    productId: BigNumber;
    productType: number;
    subscriptionId: BigNumber;
    subscriptionStart: number;
    authenticationString: string;
    subscriptionEnd: BigNumber;
    indexRunsOutOfFunds: BigNumber;
    pricing: BigNumber;
    chargingInterval: number;
    elapsedIntervals: number;
    intervals: number;
    isActive: boolean;
    cancelled: boolean;
    revoked: boolean;
    useRadomBalance: boolean;
    token: string;
    meteredChargingInterval: number;
    lastMeteredChargeInterval: number;
    meteredBudget: BigNumber;
    meteredBudgetUsed: BigNumber;
  };
}

export interface BillingFacetInterface extends utils.Interface {
  functions: {
    "cancelSubscription(uint64)": FunctionFragment;
    "chargeMeteredProduct(uint64,uint256)": FunctionFragment;
    "generateOrderId((uint256,address,address,(uint32,bytes)[]))": FunctionFragment;
    "getPaginatedSubscriptions(address,uint64,uint64)": FunctionFragment;
    "getPurchasedSubscriptions(address,uint64,uint64)": FunctionFragment;
    "getSoldSubscriptions(address,uint64,uint64)": FunctionFragment;
    "getSubscription(uint64)": FunctionFragment;
    "order((uint256,address,address,(uint32,bytes)[]),bool)": FunctionFragment;
    "pay((uint256,uint256,address,address,address),bool)": FunctionFragment;
    "replaceOrderConfig((uint256,address,address,(uint32,bytes)[]))": FunctionFragment;
    "revokeSubscription(uint64)": FunctionFragment;
    "updateAddOnsOrder((uint64,uint256,uint64[]))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cancelSubscription"
      | "chargeMeteredProduct"
      | "generateOrderId"
      | "getPaginatedSubscriptions"
      | "getPurchasedSubscriptions"
      | "getSoldSubscriptions"
      | "getSubscription"
      | "order"
      | "pay"
      | "replaceOrderConfig"
      | "revokeSubscription"
      | "updateAddOnsOrder"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cancelSubscription",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "chargeMeteredProduct",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "generateOrderId",
    values: [Billing.OrderStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getPaginatedSubscriptions",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getPurchasedSubscriptions",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getSoldSubscriptions",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getSubscription",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "order",
    values: [Billing.OrderStruct, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "pay",
    values: [Billing.PaymentStruct, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "replaceOrderConfig",
    values: [Billing.OrderStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeSubscription",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAddOnsOrder",
    values: [Billing.UpdateAddOnsOrderStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "cancelSubscription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "chargeMeteredProduct",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "generateOrderId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPaginatedSubscriptions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPurchasedSubscriptions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSoldSubscriptions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSubscription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "order", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "replaceOrderConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeSubscription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAddOnsOrder",
    data: BytesLike
  ): Result;

  events: {
    "MeteredProductCharged(uint64,uint64,address,uint256,uint256)": EventFragment;
    "OrderConfigUpdated(address,address,bytes32)": EventFragment;
    "OrderPurchased(address,address,bytes32,tuple)": EventFragment;
    "PaymentSuccessful(address,address,bytes32)": EventFragment;
    "SubscriptionAddOnsUpdated(uint64,uint64,uint64[])": EventFragment;
    "SubscriptionCancelled(uint64,uint64,address,address)": EventFragment;
    "SubscriptionCreated(uint64,uint64)": EventFragment;
    "SubscriptionRevoked(uint64,uint64,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MeteredProductCharged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderConfigUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderPurchased"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentSuccessful"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SubscriptionAddOnsUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SubscriptionCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SubscriptionCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SubscriptionRevoked"): EventFragment;
}

export interface MeteredProductChargedEventObject {
  subscriptionId: BigNumber;
  productId: BigNumber;
  seller: string;
  amount: BigNumber;
  meteredBudgetUsed: BigNumber;
}
export type MeteredProductChargedEvent = TypedEvent<
  [BigNumber, BigNumber, string, BigNumber, BigNumber],
  MeteredProductChargedEventObject
>;

export type MeteredProductChargedEventFilter =
  TypedEventFilter<MeteredProductChargedEvent>;

export interface OrderConfigUpdatedEventObject {
  orgId: string;
  user: string;
  orderId: string;
}
export type OrderConfigUpdatedEvent = TypedEvent<
  [string, string, string],
  OrderConfigUpdatedEventObject
>;

export type OrderConfigUpdatedEventFilter =
  TypedEventFilter<OrderConfigUpdatedEvent>;

export interface OrderPurchasedEventObject {
  orgId: string;
  user: string;
  orderId: string;
  orderData: Billing.OrderStructOutput;
}
export type OrderPurchasedEvent = TypedEvent<
  [string, string, string, Billing.OrderStructOutput],
  OrderPurchasedEventObject
>;

export type OrderPurchasedEventFilter = TypedEventFilter<OrderPurchasedEvent>;

export interface PaymentSuccessfulEventObject {
  orgId: string;
  user: string;
  paymentId: string;
}
export type PaymentSuccessfulEvent = TypedEvent<
  [string, string, string],
  PaymentSuccessfulEventObject
>;

export type PaymentSuccessfulEventFilter =
  TypedEventFilter<PaymentSuccessfulEvent>;

export interface SubscriptionAddOnsUpdatedEventObject {
  serviceSubscriptionId: BigNumber;
  productId: BigNumber;
  addOns: BigNumber[];
}
export type SubscriptionAddOnsUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber[]],
  SubscriptionAddOnsUpdatedEventObject
>;

export type SubscriptionAddOnsUpdatedEventFilter =
  TypedEventFilter<SubscriptionAddOnsUpdatedEvent>;

export interface SubscriptionCancelledEventObject {
  serviceSubscriptionId: BigNumber;
  productId: BigNumber;
  customer: string;
  seller: string;
}
export type SubscriptionCancelledEvent = TypedEvent<
  [BigNumber, BigNumber, string, string],
  SubscriptionCancelledEventObject
>;

export type SubscriptionCancelledEventFilter =
  TypedEventFilter<SubscriptionCancelledEvent>;

export interface SubscriptionCreatedEventObject {
  subscriptionId: BigNumber;
  productId: BigNumber;
}
export type SubscriptionCreatedEvent = TypedEvent<
  [BigNumber, BigNumber],
  SubscriptionCreatedEventObject
>;

export type SubscriptionCreatedEventFilter =
  TypedEventFilter<SubscriptionCreatedEvent>;

export interface SubscriptionRevokedEventObject {
  serviceSubscriptionId: BigNumber;
  productId: BigNumber;
  customer: string;
  seller: string;
}
export type SubscriptionRevokedEvent = TypedEvent<
  [BigNumber, BigNumber, string, string],
  SubscriptionRevokedEventObject
>;

export type SubscriptionRevokedEventFilter =
  TypedEventFilter<SubscriptionRevokedEvent>;

export interface BillingFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BillingFacetInterface;

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
      subscriptionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    chargeMeteredProduct(
      subscriptionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    generateOrderId(
      orderData: Billing.OrderStruct,
      overrides?: CallOverrides
    ): Promise<[string] & { orderId: string }>;

    getPaginatedSubscriptions(
      orgId: PromiseOrValue<string>,
      offset: PromiseOrValue<BigNumberish>,
      limit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[Subscriptions.SubscriptionResponseStructOutput[], BigNumber]>;

    getPurchasedSubscriptions(
      orgId: PromiseOrValue<string>,
      offset: PromiseOrValue<BigNumberish>,
      limit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [Subscriptions.SubscriptionResponseStructOutput[], BigNumber] & {
        cursor: BigNumber;
      }
    >;

    getSoldSubscriptions(
      orgId: PromiseOrValue<string>,
      offset: PromiseOrValue<BigNumberish>,
      limit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [Subscriptions.SubscriptionResponseStructOutput[], BigNumber] & {
        cursor: BigNumber;
      }
    >;

    getSubscription(
      subscriptionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[Subscriptions.SubscriptionResponseStructOutput]>;

    order(
      orderData: Billing.OrderStruct,
      fromRadomBalance: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    pay(
      payment: Billing.PaymentStruct,
      fromRadomBalance: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    replaceOrderConfig(
      orderData: Billing.OrderStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    revokeSubscription(
      subscriptionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateAddOnsOrder(
      updateData: Billing.UpdateAddOnsOrderStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  cancelSubscription(
    subscriptionId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  chargeMeteredProduct(
    subscriptionId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  generateOrderId(
    orderData: Billing.OrderStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  getPaginatedSubscriptions(
    orgId: PromiseOrValue<string>,
    offset: PromiseOrValue<BigNumberish>,
    limit: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[Subscriptions.SubscriptionResponseStructOutput[], BigNumber]>;

  getPurchasedSubscriptions(
    orgId: PromiseOrValue<string>,
    offset: PromiseOrValue<BigNumberish>,
    limit: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [Subscriptions.SubscriptionResponseStructOutput[], BigNumber] & {
      cursor: BigNumber;
    }
  >;

  getSoldSubscriptions(
    orgId: PromiseOrValue<string>,
    offset: PromiseOrValue<BigNumberish>,
    limit: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [Subscriptions.SubscriptionResponseStructOutput[], BigNumber] & {
      cursor: BigNumber;
    }
  >;

  getSubscription(
    subscriptionId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<Subscriptions.SubscriptionResponseStructOutput>;

  order(
    orderData: Billing.OrderStruct,
    fromRadomBalance: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  pay(
    payment: Billing.PaymentStruct,
    fromRadomBalance: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  replaceOrderConfig(
    orderData: Billing.OrderStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  revokeSubscription(
    subscriptionId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateAddOnsOrder(
    updateData: Billing.UpdateAddOnsOrderStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    cancelSubscription(
      subscriptionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    chargeMeteredProduct(
      subscriptionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    generateOrderId(
      orderData: Billing.OrderStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    getPaginatedSubscriptions(
      orgId: PromiseOrValue<string>,
      offset: PromiseOrValue<BigNumberish>,
      limit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[Subscriptions.SubscriptionResponseStructOutput[], BigNumber]>;

    getPurchasedSubscriptions(
      orgId: PromiseOrValue<string>,
      offset: PromiseOrValue<BigNumberish>,
      limit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [Subscriptions.SubscriptionResponseStructOutput[], BigNumber] & {
        cursor: BigNumber;
      }
    >;

    getSoldSubscriptions(
      orgId: PromiseOrValue<string>,
      offset: PromiseOrValue<BigNumberish>,
      limit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [Subscriptions.SubscriptionResponseStructOutput[], BigNumber] & {
        cursor: BigNumber;
      }
    >;

    getSubscription(
      subscriptionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<Subscriptions.SubscriptionResponseStructOutput>;

    order(
      orderData: Billing.OrderStruct,
      fromRadomBalance: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    pay(
      payment: Billing.PaymentStruct,
      fromRadomBalance: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    replaceOrderConfig(
      orderData: Billing.OrderStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeSubscription(
      subscriptionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateAddOnsOrder(
      updateData: Billing.UpdateAddOnsOrderStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "MeteredProductCharged(uint64,uint64,address,uint256,uint256)"(
      subscriptionId?: PromiseOrValue<BigNumberish> | null,
      productId?: PromiseOrValue<BigNumberish> | null,
      seller?: PromiseOrValue<string> | null,
      amount?: null,
      meteredBudgetUsed?: null
    ): MeteredProductChargedEventFilter;
    MeteredProductCharged(
      subscriptionId?: PromiseOrValue<BigNumberish> | null,
      productId?: PromiseOrValue<BigNumberish> | null,
      seller?: PromiseOrValue<string> | null,
      amount?: null,
      meteredBudgetUsed?: null
    ): MeteredProductChargedEventFilter;

    "OrderConfigUpdated(address,address,bytes32)"(
      orgId?: PromiseOrValue<string> | null,
      user?: PromiseOrValue<string> | null,
      orderId?: PromiseOrValue<BytesLike> | null
    ): OrderConfigUpdatedEventFilter;
    OrderConfigUpdated(
      orgId?: PromiseOrValue<string> | null,
      user?: PromiseOrValue<string> | null,
      orderId?: PromiseOrValue<BytesLike> | null
    ): OrderConfigUpdatedEventFilter;

    "OrderPurchased(address,address,bytes32,tuple)"(
      orgId?: PromiseOrValue<string> | null,
      user?: PromiseOrValue<string> | null,
      orderId?: PromiseOrValue<BytesLike> | null,
      orderData?: null
    ): OrderPurchasedEventFilter;
    OrderPurchased(
      orgId?: PromiseOrValue<string> | null,
      user?: PromiseOrValue<string> | null,
      orderId?: PromiseOrValue<BytesLike> | null,
      orderData?: null
    ): OrderPurchasedEventFilter;

    "PaymentSuccessful(address,address,bytes32)"(
      orgId?: PromiseOrValue<string> | null,
      user?: PromiseOrValue<string> | null,
      paymentId?: null
    ): PaymentSuccessfulEventFilter;
    PaymentSuccessful(
      orgId?: PromiseOrValue<string> | null,
      user?: PromiseOrValue<string> | null,
      paymentId?: null
    ): PaymentSuccessfulEventFilter;

    "SubscriptionAddOnsUpdated(uint64,uint64,uint64[])"(
      serviceSubscriptionId?: PromiseOrValue<BigNumberish> | null,
      productId?: PromiseOrValue<BigNumberish> | null,
      addOns?: null
    ): SubscriptionAddOnsUpdatedEventFilter;
    SubscriptionAddOnsUpdated(
      serviceSubscriptionId?: PromiseOrValue<BigNumberish> | null,
      productId?: PromiseOrValue<BigNumberish> | null,
      addOns?: null
    ): SubscriptionAddOnsUpdatedEventFilter;

    "SubscriptionCancelled(uint64,uint64,address,address)"(
      serviceSubscriptionId?: PromiseOrValue<BigNumberish> | null,
      productId?: PromiseOrValue<BigNumberish> | null,
      customer?: null,
      seller?: PromiseOrValue<string> | null
    ): SubscriptionCancelledEventFilter;
    SubscriptionCancelled(
      serviceSubscriptionId?: PromiseOrValue<BigNumberish> | null,
      productId?: PromiseOrValue<BigNumberish> | null,
      customer?: null,
      seller?: PromiseOrValue<string> | null
    ): SubscriptionCancelledEventFilter;

    "SubscriptionCreated(uint64,uint64)"(
      subscriptionId?: PromiseOrValue<BigNumberish> | null,
      productId?: PromiseOrValue<BigNumberish> | null
    ): SubscriptionCreatedEventFilter;
    SubscriptionCreated(
      subscriptionId?: PromiseOrValue<BigNumberish> | null,
      productId?: PromiseOrValue<BigNumberish> | null
    ): SubscriptionCreatedEventFilter;

    "SubscriptionRevoked(uint64,uint64,address,address)"(
      serviceSubscriptionId?: PromiseOrValue<BigNumberish> | null,
      productId?: PromiseOrValue<BigNumberish> | null,
      customer?: null,
      seller?: PromiseOrValue<string> | null
    ): SubscriptionRevokedEventFilter;
    SubscriptionRevoked(
      serviceSubscriptionId?: PromiseOrValue<BigNumberish> | null,
      productId?: PromiseOrValue<BigNumberish> | null,
      customer?: null,
      seller?: PromiseOrValue<string> | null
    ): SubscriptionRevokedEventFilter;
  };

  estimateGas: {
    cancelSubscription(
      subscriptionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    chargeMeteredProduct(
      subscriptionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    generateOrderId(
      orderData: Billing.OrderStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPaginatedSubscriptions(
      orgId: PromiseOrValue<string>,
      offset: PromiseOrValue<BigNumberish>,
      limit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPurchasedSubscriptions(
      orgId: PromiseOrValue<string>,
      offset: PromiseOrValue<BigNumberish>,
      limit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSoldSubscriptions(
      orgId: PromiseOrValue<string>,
      offset: PromiseOrValue<BigNumberish>,
      limit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSubscription(
      subscriptionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    order(
      orderData: Billing.OrderStruct,
      fromRadomBalance: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    pay(
      payment: Billing.PaymentStruct,
      fromRadomBalance: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    replaceOrderConfig(
      orderData: Billing.OrderStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    revokeSubscription(
      subscriptionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateAddOnsOrder(
      updateData: Billing.UpdateAddOnsOrderStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cancelSubscription(
      subscriptionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    chargeMeteredProduct(
      subscriptionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    generateOrderId(
      orderData: Billing.OrderStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPaginatedSubscriptions(
      orgId: PromiseOrValue<string>,
      offset: PromiseOrValue<BigNumberish>,
      limit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPurchasedSubscriptions(
      orgId: PromiseOrValue<string>,
      offset: PromiseOrValue<BigNumberish>,
      limit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSoldSubscriptions(
      orgId: PromiseOrValue<string>,
      offset: PromiseOrValue<BigNumberish>,
      limit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSubscription(
      subscriptionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    order(
      orderData: Billing.OrderStruct,
      fromRadomBalance: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    pay(
      payment: Billing.PaymentStruct,
      fromRadomBalance: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    replaceOrderConfig(
      orderData: Billing.OrderStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    revokeSubscription(
      subscriptionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateAddOnsOrder(
      updateData: Billing.UpdateAddOnsOrderStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
