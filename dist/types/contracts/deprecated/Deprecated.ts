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
    customer: PromiseOrValue<string>;
    seller: PromiseOrValue<string>;
    token: PromiseOrValue<string>;
    chainId: PromiseOrValue<BigNumberish>;
    products: Billing.ProductStruct[];
  };

  export type OrderStructOutput = [
    string,
    string,
    string,
    BigNumber,
    Billing.ProductStructOutput[]
  ] & {
    customer: string;
    seller: string;
    token: string;
    chainId: BigNumber;
    products: Billing.ProductStructOutput[];
  };

  export type KeyValuePairStruct = {
    key: PromiseOrValue<BytesLike>;
    value: PromiseOrValue<BytesLike>;
  };

  export type KeyValuePairStructOutput = [string, string] & {
    key: string;
    value: string;
  };
}

export interface DeprecatedInterface extends utils.Interface {
  functions: {
    "order((address,address,address,uint256,(uint32,bytes)[]),bool,(bytes32,bytes)[])": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "order"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "order",
    values: [
      Billing.OrderStruct,
      PromiseOrValue<boolean>,
      Billing.KeyValuePairStruct[]
    ]
  ): string;

  decodeFunctionResult(functionFragment: "order", data: BytesLike): Result;

  events: {
    "OrderPurchased(address,address,bytes32,tuple,uint64[],tuple[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OrderPurchased"): EventFragment;
}

export interface OrderPurchasedEventObject {
  seller: string;
  customer: string;
  orderHash: string;
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

export interface Deprecated extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DeprecatedInterface;

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
    order(
      orderData: Billing.OrderStruct,
      fromRadomBalance: PromiseOrValue<boolean>,
      metadata: Billing.KeyValuePairStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  order(
    orderData: Billing.OrderStruct,
    fromRadomBalance: PromiseOrValue<boolean>,
    metadata: Billing.KeyValuePairStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    order(
      orderData: Billing.OrderStruct,
      fromRadomBalance: PromiseOrValue<boolean>,
      metadata: Billing.KeyValuePairStruct[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OrderPurchased(address,address,bytes32,tuple,uint64[],tuple[])"(
      seller?: PromiseOrValue<string> | null,
      customer?: PromiseOrValue<string> | null,
      orderHash?: PromiseOrValue<BytesLike> | null,
      orderData?: null,
      subscriptionIds?: null,
      configInputs?: null
    ): OrderPurchasedEventFilter;
    OrderPurchased(
      seller?: PromiseOrValue<string> | null,
      customer?: PromiseOrValue<string> | null,
      orderHash?: PromiseOrValue<BytesLike> | null,
      orderData?: null,
      subscriptionIds?: null,
      configInputs?: null
    ): OrderPurchasedEventFilter;
  };

  estimateGas: {
    order(
      orderData: Billing.OrderStruct,
      fromRadomBalance: PromiseOrValue<boolean>,
      metadata: Billing.KeyValuePairStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    order(
      orderData: Billing.OrderStruct,
      fromRadomBalance: PromiseOrValue<boolean>,
      metadata: Billing.KeyValuePairStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
