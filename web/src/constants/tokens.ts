import { ChainId } from "@lifi/widget";

type tickerAddressMap = Record<string, `0x${string}`>;

const TokenNameAdressMapping: Record<typeof ChainId.HYP, tickerAddressMap> = {
  [ChainId.HYP]: {
    UETH: "0x20000000000000000000000000000000000000dd",
    UBTC: "0x20000000000000000000000000000000000000c5",
    USOL: "0x20000000000000000000000000000000000000fe",
    WHYPE: "0x5555555555555555555555555555555555555555",
  },
} as const;

export default TokenNameAdressMapping;
