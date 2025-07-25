import KusamaIcon from "../../../components/icons/kusamaIcon";
import { governanceModules, treasuryModules } from "./modules";
import { kusamaColor } from "./common";

const kusama = {
  name: "Kusama",
  icon: <KusamaIcon />,
  identity: "kusama",
  sub: "kusama",
  value: "kusama",
  chain: "kusama",
  symbol: "KSM",
  decimals: 12,
  ...kusamaColor,
  modules: {
    ...treasuryModules,
    ...governanceModules,
    identity: true,
    multisig: true,
    vestings: true,
    recovery: true,
    proxy: true,
  },
  treasuryWebsite: "https://kusama.dotreasury.com",
  subSquareWebsite: "https://kusama.subsquare.io",
  nodes: [
    { name: "OnFinality", url: "wss://kusama.api.onfinality.io/public-ws" },
    { name: "IBP1", url: "wss://rpc.ibp.network/kusama" },
    { name: "LuckyFriday", url: "wss://rpc-kusama.luckyfriday.io" },
    { name: "Dwellir", url: "wss://kusama-rpc.n.dwellir.com" },
    { name: "Dwellir Tunisia", url: "wss://kusama-rpc-tn.dwellir.com" },
    { name: "IBP2", url: "wss://kusama.dotters.network" },
    { name: "RadiumBlock", url: "wss://kusama.public.curie.radiumblock.co/ws" },
    { name: "Stakeworld", url: "wss://ksm-rpc.stakeworld.io" },
  ],
  useOnChainBlockData: true,
};

export default kusama;
