import { genesisBlocks } from "@vechain/connex/esm/config"

export enum WalletSource {
  VEWORLD_EXTENSION = "veworld",
  SYNC2 = "sync2",
  WALLET_CONNECT = "walletConnect",
}

const logosUrl = process.env.PUBLIC_URL + "/images/logo"

interface IWalletSourceInfo {
  name: string
  logo?: string
  url?: string
  isAvailable: boolean
}

export const WalletSourceInfo: Record<WalletSource, IWalletSourceInfo> = {
  [WalletSource.VEWORLD_EXTENSION]: {
    name: "VeWorld Web",
    logo: `${logosUrl}/veworld_black.png`,
    isAvailable: !!window.vechain,
  },
  [WalletSource.SYNC2]: {
    name: "Sync2",
    logo: `${logosUrl}/sync2.png`,
    url: "https://docs.vechain.org/sync2/get-started.html",
    isAvailable: true,
  },
  [WalletSource.WALLET_CONNECT]: {
    name: "VeWorld Mobile",
    logo: `${logosUrl}/wallet-connect-logo.png`,
    isAvailable: true,
  },
}

export const DEFAULT_SOURCE = window.vechain
  ? WalletSource.VEWORLD_EXTENSION
  : WalletSource.SYNC2

export enum Network {
  MAIN = "main",
  TEST = "test",
}

export const NetworkInfo: Record<
  Network,
  { name: string; url: string; genesis: Connex.Thor.Block }
> = {
  [Network.MAIN]: {
    name: "Mainnet",
    url: "https://vethor-node.vechain.com",
    genesis: genesisBlocks.main,
  },
  [Network.TEST]: {
    name: "Testnet",
    url: "https://vethor-node-test.vechaindev.com",
    genesis: genesisBlocks.test,
  },
}

export const DEFAULT_NETWORK = Network.TEST
