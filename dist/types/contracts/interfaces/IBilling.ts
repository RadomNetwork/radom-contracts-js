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
  export type KeyValuePairStruct = {
    key: PromiseOrValue<BytesLike>;
    value: PromiseOrValue<BytesLike>;
  };

  export type KeyValuePairStructOutput = [string, string] & {
    key: string;
    value: string;
  };

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

export interface IBillingInterface extends utils.Interface {
  functions: {
    "chargeMeteredProduct(uint64,uint256)": FunctionFragment;
    "generateOrderId((uint256,address,address,(uint32,bytes)[]))": FunctionFragment;
    "order((uint256,address,address,(uint32,bytes)[]),bool,(bytes32,bytes)[])": FunctionFragment;
    "pay((uint256,uint256,address,address,address),bool,(bytes32,bytes)[])": FunctionFragment;
    "updateAddOnsOrder((uint64,uint256,uint64[]))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "chargeMeteredProduct"
      | "generateOrderId"
      | "order"
      | "pay"
      | "updateAddOnsOrder"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "chargeMeteredProduct",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "generateOrderId",
    values: [Billing.OrderStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "order",
    values: [
      Billing.OrderStruct,
      PromiseOrValue<boolean>,
      Billing.KeyValuePairStruct[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "pay",
    values: [
      Billing.PaymentStruct,
      PromiseOrValue<boolean>,
      Billing.KeyValuePairStruct[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAddOnsOrder",
    values: [Billing.UpdateAddOnsOrderStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "chargeMeteredProduct",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "generateOrderId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "order", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateAddOnsOrder",
    data: BytesLike
  ): Result;

  events: {
    "MeteredProductCharged(uint64,uint64,address,uint256,uint256)": EventFragment;
    "OrderMetadataReplaced(address,address,bytes32,tuple[])": EventFragment;
    "OrderPurchased(address,address,bytes32,tuple,uint64[],tuple[])": EventFragment;
    "PaymentSuccessful(address,address,bytes32,tuple[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MeteredProductCharged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderMetadataReplaced"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderPurchased"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentSuccessful"): EventFragment;
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

export interface OrderMetadataReplacedEventObject {
  seller: string;
  customer: string;
  orderId: string;
  metadata: Billing.KeyValuePairStructOutput[];
}
export type OrderMetadataReplacedEvent = TypedEvent<
  [string, string, string, Billing.KeyValuePairStructOutput[]],
  OrderMetadataReplacedEventObject
>;

export type OrderMetadataReplacedEventFilter =
  TypedEventFilter<OrderMetadataReplacedEvent>;

export interface OrderPurchasedEventObject {
  seller: string;
  customer: string;
  orderId: string;
  orderData: Billing.OrderStructOutput;
  subscriptionIds: BigNumber[];
  configInputs: Billing.KeyValuePairStructOutput[];
}
export type OrderPurchasedEvent = TypedEvent<
  [
    string,
    string,
    string,
    Billing.OrderStructOutput,
    BigNumber[],
    Billing.KeyValuePairStructOutput[]
  ],
  OrderPurchasedEventObject
>;

export type OrderPurchasedEventFilter = TypedEventFilter<OrderPurchasedEvent>;

export interface PaymentSuccessfulEventObject {
  seller: string;
  customer: string;
  paymentId: string;
  metadata: Billing.KeyValuePairStructOutput[];
}
export type PaymentSuccessfulEvent = TypedEvent<
  [string, string, string, Billing.KeyValuePairStructOutput[]],
  PaymentSuccessfulEventObject
>;

export type PaymentSuccessfulEventFilter =
  TypedEventFilter<PaymentSuccessfulEvent>;

export interface IBilling extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IBillingInterface;

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
    chargeMeteredProduct(
      subscriptionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    generateOrderId(
      order: Billing.OrderStruct,
      overrides?: CallOverrides
    ): Promise<[string] & { orderId: string }>;

    order(
      order: Billing.OrderStruct,
      fromRadomBalance: PromiseOrValue<boolean>,
      metadata: Billing.KeyValuePairStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    pay(
      payment: Billing.PaymentStruct,
      fromRadomBalance: PromiseOrValue<boolean>,
      metadata: Billing.KeyValuePairStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateAddOnsOrder(
      updateData: Billing.UpdateAddOnsOrderStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  chargeMeteredProduct(
    subscriptionId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  generateOrderId(
    order: Billing.OrderStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  order(
    order: Billing.OrderStruct,
    fromRadomBalance: PromiseOrValue<boolean>,
    metadata: Billing.KeyValuePairStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  pay(
    payment: Billing.PaymentStruct,
    fromRadomBalance: PromiseOrValue<boolean>,
    metadata: Billing.KeyValuePairStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateAddOnsOrder(
    updateData: Billing.UpdateAddOnsOrderStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    chargeMeteredProduct(
      subscriptionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    generateOrderId(
      order: Billing.OrderStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    order(
      order: Billing.OrderStruct,
      fromRadomBalance: PromiseOrValue<boolean>,
      metadata: Billing.KeyValuePairStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    pay(
      payment: Billing.PaymentStruct,
      fromRadomBalance: PromiseOrValue<boolean>,
      metadata: Billing.KeyValuePairStruct[],
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

    "OrderMetadataReplaced(address,address,bytes32,tuple[])"(
      seller?: PromiseOrValue<string> | null,
      customer?: PromiseOrValue<string> | null,
      orderId?: PromiseOrValue<BytesLike> | null,
      metadata?: null
    ): OrderMetadataReplacedEventFilter;
    OrderMetadataReplaced(
      seller?: PromiseOrValue<string> | null,
      customer?: PromiseOrValue<string> | null,
      orderId?: PromiseOrValue<BytesLike> | null,
      metadata?: null
    ): OrderMetadataReplacedEventFilter;

    "OrderPurchased(address,address,bytes32,tuple,uint64[],tuple[])"(
      seller?: PromiseOrValue<string> | null,
      customer?: PromiseOrValue<string> | null,
      orderId?: PromiseOrValue<BytesLike> | null,
      orderData?: null,
      subscriptionIds?: null,
      configInputs?: null
    ): OrderPurchasedEventFilter;
    OrderPurchased(
      seller?: PromiseOrValue<string> | null,
      customer?: PromiseOrValue<string> | null,
      orderId?: PromiseOrValue<BytesLike> | null,
      orderData?: null,
      subscriptionIds?: null,
      configInputs?: null
    ): OrderPurchasedEventFilter;

    "PaymentSuccessful(address,address,bytes32,tuple[])"(
      seller?: PromiseOrValue<string> | null,
      customer?: PromiseOrValue<string> | null,
      paymentId?: null,
      metadata?: null
    ): PaymentSuccessfulEventFilter;
    PaymentSuccessful(
      seller?: PromiseOrValue<string> | null,
      customer?: PromiseOrValue<string> | null,
      paymentId?: null,
      metadata?: null
    ): PaymentSuccessfulEventFilter;
  };

  estimateGas: {
    chargeMeteredProduct(
      subscriptionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    generateOrderId(
      order: Billing.OrderStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    order(
      order: Billing.OrderStruct,
      fromRadomBalance: PromiseOrValue<boolean>,
      metadata: Billing.KeyValuePairStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    pay(
      payment: Billing.PaymentStruct,
      fromRadomBalance: PromiseOrValue<boolean>,
      metadata: Billing.KeyValuePairStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateAddOnsOrder(
      updateData: Billing.UpdateAddOnsOrderStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    chargeMeteredProduct(
      subscriptionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    generateOrderId(
      order: Billing.OrderStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    order(
      order: Billing.OrderStruct,
      fromRadomBalance: PromiseOrValue<boolean>,
      metadata: Billing.KeyValuePairStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    pay(
      payment: Billing.PaymentStruct,
      fromRadomBalance: PromiseOrValue<boolean>,
      metadata: Billing.KeyValuePairStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateAddOnsOrder(
      updateData: Billing.UpdateAddOnsOrderStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
