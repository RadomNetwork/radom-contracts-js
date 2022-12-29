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

export interface UserAccessControlFacetInterface extends utils.Interface {
  functions: {
    "assignRole(bytes20,bytes32,address)": FunctionFragment;
    "changeRolePermissions(bytes20,bytes32,bytes2)": FunctionFragment;
    "createRole(bytes20,bytes32,bytes2)": FunctionFragment;
    "createRoles(bytes20,bytes32[],bytes2[])": FunctionFragment;
    "deleteRole(bytes20,bytes32)": FunctionFragment;
    "getNetworkRoleNames(bytes20)": FunctionFragment;
    "getNetworkRolePermissions(bytes20,bytes32)": FunctionFragment;
    "getNetworkRoleUsers(bytes20,bytes32)": FunctionFragment;
    "getPaginatedUserNetworkIds(bytes20,uint256,uint256)": FunctionFragment;
    "getRoleNameForUserByNetworkId(bytes20,bytes20)": FunctionFragment;
    "hasPermissions(bytes2,bytes20,address)": FunctionFragment;
    "unassignRole(bytes20,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "assignRole",
    values: [BytesLike, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "changeRolePermissions",
    values: [BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createRole",
    values: [BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createRoles",
    values: [BytesLike, BytesLike[], BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteRole",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getNetworkRoleNames",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getNetworkRolePermissions",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getNetworkRoleUsers",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPaginatedUserNetworkIds",
    values: [BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleNameForUserByNetworkId",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasPermissions",
    values: [BytesLike, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "unassignRole",
    values: [BytesLike, string]
  ): string;

  decodeFunctionResult(functionFragment: "assignRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeRolePermissions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "createRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createRoles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deleteRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getNetworkRoleNames",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNetworkRolePermissions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNetworkRoleUsers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPaginatedUserNetworkIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleNameForUserByNetworkId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasPermissions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unassignRole",
    data: BytesLike
  ): Result;

  events: {
    "RoleAssigned(address,address,bytes32)": EventFragment;
    "RoleCreated(address,bytes32,bytes2)": EventFragment;
    "RoleDeleted(address,bytes32)": EventFragment;
    "RoleUnassigned(address,address)": EventFragment;
    "RoleUpdated(address,bytes32,bytes2)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RoleAssigned"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleDeleted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleUnassigned"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleUpdated"): EventFragment;
}

export type RoleAssignedEvent = TypedEvent<
  [string, string, string],
  { networkId: string; user: string; roleName: string }
>;

export type RoleAssignedEventFilter = TypedEventFilter<RoleAssignedEvent>;

export type RoleCreatedEvent = TypedEvent<
  [string, string, string],
  { networkId: string; roleName: string; permissions: string }
>;

export type RoleCreatedEventFilter = TypedEventFilter<RoleCreatedEvent>;

export type RoleDeletedEvent = TypedEvent<
  [string, string],
  { networkId: string; roleName: string }
>;

export type RoleDeletedEventFilter = TypedEventFilter<RoleDeletedEvent>;

export type RoleUnassignedEvent = TypedEvent<
  [string, string],
  { networkId: string; user: string }
>;

export type RoleUnassignedEventFilter = TypedEventFilter<RoleUnassignedEvent>;

export type RoleUpdatedEvent = TypedEvent<
  [string, string, string],
  { networkId: string; roleName: string; permissions: string }
>;

export type RoleUpdatedEventFilter = TypedEventFilter<RoleUpdatedEvent>;

export interface UserAccessControlFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UserAccessControlFacetInterface;

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
    assignRole(
      networkId: BytesLike,
      roleName: BytesLike,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changeRolePermissions(
      networkId: BytesLike,
      roleName: BytesLike,
      permissions: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createRole(
      networkId: BytesLike,
      roleName: BytesLike,
      permissions: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createRoles(
      networkId: BytesLike,
      roleNames: BytesLike[],
      permissions: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deleteRole(
      networkId: BytesLike,
      roleName: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getNetworkRoleNames(
      networkId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getNetworkRolePermissions(
      networkId: BytesLike,
      roleName: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getNetworkRoleUsers(
      networkId: BytesLike,
      roleName: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getPaginatedUserNetworkIds(
      user: BytesLike,
      offset: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber]>;

    getRoleNameForUserByNetworkId(
      user: BytesLike,
      networkId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { roleName: string }>;

    hasPermissions(
      permissionMask: BytesLike,
      networkId: BytesLike,
      user: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    unassignRole(
      networkId: BytesLike,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  assignRole(
    networkId: BytesLike,
    roleName: BytesLike,
    user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changeRolePermissions(
    networkId: BytesLike,
    roleName: BytesLike,
    permissions: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createRole(
    networkId: BytesLike,
    roleName: BytesLike,
    permissions: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createRoles(
    networkId: BytesLike,
    roleNames: BytesLike[],
    permissions: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deleteRole(
    networkId: BytesLike,
    roleName: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getNetworkRoleNames(
    networkId: BytesLike,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getNetworkRolePermissions(
    networkId: BytesLike,
    roleName: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getNetworkRoleUsers(
    networkId: BytesLike,
    roleName: BytesLike,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getPaginatedUserNetworkIds(
    user: BytesLike,
    offset: BigNumberish,
    limit: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string[], BigNumber]>;

  getRoleNameForUserByNetworkId(
    user: BytesLike,
    networkId: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  hasPermissions(
    permissionMask: BytesLike,
    networkId: BytesLike,
    user: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  unassignRole(
    networkId: BytesLike,
    user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    assignRole(
      networkId: BytesLike,
      roleName: BytesLike,
      user: string,
      overrides?: CallOverrides
    ): Promise<void>;

    changeRolePermissions(
      networkId: BytesLike,
      roleName: BytesLike,
      permissions: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    createRole(
      networkId: BytesLike,
      roleName: BytesLike,
      permissions: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    createRoles(
      networkId: BytesLike,
      roleNames: BytesLike[],
      permissions: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    deleteRole(
      networkId: BytesLike,
      roleName: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    getNetworkRoleNames(
      networkId: BytesLike,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getNetworkRolePermissions(
      networkId: BytesLike,
      roleName: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getNetworkRoleUsers(
      networkId: BytesLike,
      roleName: BytesLike,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getPaginatedUserNetworkIds(
      user: BytesLike,
      offset: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber]>;

    getRoleNameForUserByNetworkId(
      user: BytesLike,
      networkId: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    hasPermissions(
      permissionMask: BytesLike,
      networkId: BytesLike,
      user: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    unassignRole(
      networkId: BytesLike,
      user: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "RoleAssigned(address,address,bytes32)"(
      networkId?: string | null,
      user?: string | null,
      roleName?: null
    ): RoleAssignedEventFilter;
    RoleAssigned(
      networkId?: string | null,
      user?: string | null,
      roleName?: null
    ): RoleAssignedEventFilter;

    "RoleCreated(address,bytes32,bytes2)"(
      networkId?: string | null,
      roleName?: null,
      permissions?: null
    ): RoleCreatedEventFilter;
    RoleCreated(
      networkId?: string | null,
      roleName?: null,
      permissions?: null
    ): RoleCreatedEventFilter;

    "RoleDeleted(address,bytes32)"(
      networkId?: string | null,
      roleName?: null
    ): RoleDeletedEventFilter;
    RoleDeleted(
      networkId?: string | null,
      roleName?: null
    ): RoleDeletedEventFilter;

    "RoleUnassigned(address,address)"(
      networkId?: string | null,
      user?: string | null
    ): RoleUnassignedEventFilter;
    RoleUnassigned(
      networkId?: string | null,
      user?: string | null
    ): RoleUnassignedEventFilter;

    "RoleUpdated(address,bytes32,bytes2)"(
      networkId?: string | null,
      roleName?: null,
      permissions?: null
    ): RoleUpdatedEventFilter;
    RoleUpdated(
      networkId?: string | null,
      roleName?: null,
      permissions?: null
    ): RoleUpdatedEventFilter;
  };

  estimateGas: {
    assignRole(
      networkId: BytesLike,
      roleName: BytesLike,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changeRolePermissions(
      networkId: BytesLike,
      roleName: BytesLike,
      permissions: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createRole(
      networkId: BytesLike,
      roleName: BytesLike,
      permissions: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createRoles(
      networkId: BytesLike,
      roleNames: BytesLike[],
      permissions: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deleteRole(
      networkId: BytesLike,
      roleName: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getNetworkRoleNames(
      networkId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNetworkRolePermissions(
      networkId: BytesLike,
      roleName: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNetworkRoleUsers(
      networkId: BytesLike,
      roleName: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPaginatedUserNetworkIds(
      user: BytesLike,
      offset: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleNameForUserByNetworkId(
      user: BytesLike,
      networkId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasPermissions(
      permissionMask: BytesLike,
      networkId: BytesLike,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unassignRole(
      networkId: BytesLike,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    assignRole(
      networkId: BytesLike,
      roleName: BytesLike,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changeRolePermissions(
      networkId: BytesLike,
      roleName: BytesLike,
      permissions: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createRole(
      networkId: BytesLike,
      roleName: BytesLike,
      permissions: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createRoles(
      networkId: BytesLike,
      roleNames: BytesLike[],
      permissions: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deleteRole(
      networkId: BytesLike,
      roleName: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getNetworkRoleNames(
      networkId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNetworkRolePermissions(
      networkId: BytesLike,
      roleName: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNetworkRoleUsers(
      networkId: BytesLike,
      roleName: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPaginatedUserNetworkIds(
      user: BytesLike,
      offset: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleNameForUserByNetworkId(
      user: BytesLike,
      networkId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasPermissions(
      permissionMask: BytesLike,
      networkId: BytesLike,
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unassignRole(
      networkId: BytesLike,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
