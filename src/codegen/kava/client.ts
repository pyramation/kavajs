import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as kavaAuctionV1beta1TxRegistry from "./auction/v1beta1/tx.registry";
import * as kavaBep3V1beta1TxRegistry from "./bep3/v1beta1/tx.registry";
import * as kavaCdpV1beta1TxRegistry from "./cdp/v1beta1/tx.registry";
import * as kavaCommitteeV1beta1TxRegistry from "./committee/v1beta1/tx.registry";
import * as kavaEarnV1beta1TxRegistry from "./earn/v1beta1/tx.registry";
import * as kavaEvmutilV1beta1TxRegistry from "./evmutil/v1beta1/tx.registry";
import * as kavaHardV1beta1TxRegistry from "./hard/v1beta1/tx.registry";
import * as kavaIncentiveV1beta1TxRegistry from "./incentive/v1beta1/tx.registry";
import * as kavaIssuanceV1beta1TxRegistry from "./issuance/v1beta1/tx.registry";
import * as kavaLiquidV1beta1TxRegistry from "./liquid/v1beta1/tx.registry";
import * as kavaPricefeedV1beta1TxRegistry from "./pricefeed/v1beta1/tx.registry";
import * as kavaRouterV1beta1TxRegistry from "./router/v1beta1/tx.registry";
import * as kavaSavingsV1beta1TxRegistry from "./savings/v1beta1/tx.registry";
import * as kavaSwapV1beta1TxRegistry from "./swap/v1beta1/tx.registry";
import * as kavaAuctionV1beta1TxAmino from "./auction/v1beta1/tx.amino";
import * as kavaBep3V1beta1TxAmino from "./bep3/v1beta1/tx.amino";
import * as kavaCdpV1beta1TxAmino from "./cdp/v1beta1/tx.amino";
import * as kavaCommitteeV1beta1TxAmino from "./committee/v1beta1/tx.amino";
import * as kavaEarnV1beta1TxAmino from "./earn/v1beta1/tx.amino";
import * as kavaEvmutilV1beta1TxAmino from "./evmutil/v1beta1/tx.amino";
import * as kavaHardV1beta1TxAmino from "./hard/v1beta1/tx.amino";
import * as kavaIncentiveV1beta1TxAmino from "./incentive/v1beta1/tx.amino";
import * as kavaIssuanceV1beta1TxAmino from "./issuance/v1beta1/tx.amino";
import * as kavaLiquidV1beta1TxAmino from "./liquid/v1beta1/tx.amino";
import * as kavaPricefeedV1beta1TxAmino from "./pricefeed/v1beta1/tx.amino";
import * as kavaRouterV1beta1TxAmino from "./router/v1beta1/tx.amino";
import * as kavaSavingsV1beta1TxAmino from "./savings/v1beta1/tx.amino";
import * as kavaSwapV1beta1TxAmino from "./swap/v1beta1/tx.amino";
export const kavaAminoConverters = { ...kavaAuctionV1beta1TxAmino.AminoConverter,
  ...kavaBep3V1beta1TxAmino.AminoConverter,
  ...kavaCdpV1beta1TxAmino.AminoConverter,
  ...kavaCommitteeV1beta1TxAmino.AminoConverter,
  ...kavaEarnV1beta1TxAmino.AminoConverter,
  ...kavaEvmutilV1beta1TxAmino.AminoConverter,
  ...kavaHardV1beta1TxAmino.AminoConverter,
  ...kavaIncentiveV1beta1TxAmino.AminoConverter,
  ...kavaIssuanceV1beta1TxAmino.AminoConverter,
  ...kavaLiquidV1beta1TxAmino.AminoConverter,
  ...kavaPricefeedV1beta1TxAmino.AminoConverter,
  ...kavaRouterV1beta1TxAmino.AminoConverter,
  ...kavaSavingsV1beta1TxAmino.AminoConverter,
  ...kavaSwapV1beta1TxAmino.AminoConverter
};
export const kavaProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...kavaAuctionV1beta1TxRegistry.registry, ...kavaBep3V1beta1TxRegistry.registry, ...kavaCdpV1beta1TxRegistry.registry, ...kavaCommitteeV1beta1TxRegistry.registry, ...kavaEarnV1beta1TxRegistry.registry, ...kavaEvmutilV1beta1TxRegistry.registry, ...kavaHardV1beta1TxRegistry.registry, ...kavaIncentiveV1beta1TxRegistry.registry, ...kavaIssuanceV1beta1TxRegistry.registry, ...kavaLiquidV1beta1TxRegistry.registry, ...kavaPricefeedV1beta1TxRegistry.registry, ...kavaRouterV1beta1TxRegistry.registry, ...kavaSavingsV1beta1TxRegistry.registry, ...kavaSwapV1beta1TxRegistry.registry];
export const getSigningKavaClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...kavaProtoRegistry]);
  const aminoTypes = new AminoTypes({ ...kavaAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningKavaClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningKavaClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};