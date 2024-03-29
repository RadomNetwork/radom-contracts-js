/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "ERC20Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Burnable__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC20PresetFixedSupply",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20PresetFixedSupply__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "Deprecated",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Deprecated__factory>;
    getContractFactory(
      name: "AutomationFacet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AutomationFacet__factory>;
    getContractFactory(
      name: "BillingFacet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BillingFacet__factory>;
    getContractFactory(
      name: "DiamondCutFacet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DiamondCutFacet__factory>;
    getContractFactory(
      name: "DiamondLoupeFacet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DiamondLoupeFacet__factory>;
    getContractFactory(
      name: "OwnershipFacet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnershipFacet__factory>;
    getContractFactory(
      name: "PaymentsFacet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PaymentsFacet__factory>;
    getContractFactory(
      name: "TreasuryFacet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TreasuryFacet__factory>;
    getContractFactory(
      name: "UserAccessControlFacet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UserAccessControlFacet__factory>;
    getContractFactory(
      name: "IAutomation",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAutomation__factory>;
    getContractFactory(
      name: "IBilling",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBilling__factory>;
    getContractFactory(
      name: "IDiamondCut",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDiamondCut__factory>;
    getContractFactory(
      name: "IDiamondLoupe",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDiamondLoupe__factory>;
    getContractFactory(
      name: "IERC173",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC173__factory>;
    getContractFactory(
      name: "IErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IErrors__factory>;
    getContractFactory(
      name: "IRadomRegistryDiamond",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRadomRegistryDiamond__factory>;
    getContractFactory(
      name: "ISubscription",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISubscription__factory>;
    getContractFactory(
      name: "IUserAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUserAccessControl__factory>;
    getContractFactory(
      name: "EnumerableBytesMap",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EnumerableBytesMap__factory>;
    getContractFactory(
      name: "LibDiamond",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LibDiamond__factory>;
    getContractFactory(
      name: "RadomContractDeployer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RadomContractDeployer__factory>;
    getContractFactory(
      name: "RadomERC20Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RadomERC20Token__factory>;
    getContractFactory(
      name: "RadomGovernance",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RadomGovernance__factory>;
    getContractFactory(
      name: "RadomRegistryDiamond",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RadomRegistryDiamond__factory>;
    getContractFactory(
      name: "ERC20CustomDecimals",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20CustomDecimals__factory>;

    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "ERC20Burnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Burnable>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC20PresetFixedSupply",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20PresetFixedSupply>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "Deprecated",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Deprecated>;
    getContractAt(
      name: "AutomationFacet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AutomationFacet>;
    getContractAt(
      name: "BillingFacet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BillingFacet>;
    getContractAt(
      name: "DiamondCutFacet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DiamondCutFacet>;
    getContractAt(
      name: "DiamondLoupeFacet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DiamondLoupeFacet>;
    getContractAt(
      name: "OwnershipFacet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnershipFacet>;
    getContractAt(
      name: "PaymentsFacet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PaymentsFacet>;
    getContractAt(
      name: "TreasuryFacet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TreasuryFacet>;
    getContractAt(
      name: "UserAccessControlFacet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UserAccessControlFacet>;
    getContractAt(
      name: "IAutomation",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAutomation>;
    getContractAt(
      name: "IBilling",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBilling>;
    getContractAt(
      name: "IDiamondCut",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDiamondCut>;
    getContractAt(
      name: "IDiamondLoupe",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDiamondLoupe>;
    getContractAt(
      name: "IERC173",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC173>;
    getContractAt(
      name: "IErrors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IErrors>;
    getContractAt(
      name: "IRadomRegistryDiamond",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRadomRegistryDiamond>;
    getContractAt(
      name: "ISubscription",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISubscription>;
    getContractAt(
      name: "IUserAccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUserAccessControl>;
    getContractAt(
      name: "EnumerableBytesMap",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EnumerableBytesMap>;
    getContractAt(
      name: "LibDiamond",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LibDiamond>;
    getContractAt(
      name: "RadomContractDeployer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RadomContractDeployer>;
    getContractAt(
      name: "RadomERC20Token",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RadomERC20Token>;
    getContractAt(
      name: "RadomGovernance",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RadomGovernance>;
    getContractAt(
      name: "RadomRegistryDiamond",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RadomRegistryDiamond>;
    getContractAt(
      name: "ERC20CustomDecimals",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20CustomDecimals>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
