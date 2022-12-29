/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface PaymentsFacetInterface extends utils.Interface {
  functions: {
    "addSupportedPaymentToken(address)": FunctionFragment;
    "checkToken(address)": FunctionFragment;
    "getPaymentTokens()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addSupportedPaymentToken"
      | "checkToken"
      | "getPaymentTokens"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addSupportedPaymentToken",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "checkToken",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPaymentTokens",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addSupportedPaymentToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "checkToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPaymentTokens",
    data: BytesLike
  ): Result;

  events: {};
}

export interface PaymentsFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PaymentsFacetInterface;

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
    addSupportedPaymentToken(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    checkToken(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getPaymentTokens(overrides?: CallOverrides): Promise<[string[]]>;
  };

  addSupportedPaymentToken(
    addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  checkToken(
    addr: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getPaymentTokens(overrides?: CallOverrides): Promise<string[]>;

  callStatic: {
    addSupportedPaymentToken(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    checkToken(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getPaymentTokens(overrides?: CallOverrides): Promise<string[]>;
  };

  filters: {};

  estimateGas: {
    addSupportedPaymentToken(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    checkToken(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPaymentTokens(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addSupportedPaymentToken(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    checkToken(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPaymentTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
