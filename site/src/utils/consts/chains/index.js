import litentry from "./litentry";
import statemine from "./statemine";
import statemint from "./statemint";
import westmint from "./westmint";
import collectives from "./collectives";
import kusama from "./kusama";
import polkadot from "./polkadot";
import shadow from "./shadow";
import gargantua from "./gargantua";
// import hydradxTestnet from "./hydradxTestnet";
import peopleKusama from "./people-kusama";
import peoplePolkadot from "./people-polkadot";
import bridgehubPolkadot from "./bridgehub-polkadot";
import bridgehubKusama from "./bridgehub-kusama";
import nexus from "./nexus";
import laos from "./laos";
import paseo from "./paseo";
import stagelight from "./stagelight";
import polimec from "./polimec";
import coretimePolkadot from "./coretime-polkadot";
import coretimeKusama from "./coretime-kusama";
import coretimePaseo from "./coretime-paseo";
import peoplePaseo from "./people-paseo";
import bridgehubPaseo from "./bridgehub-paseo";
import assethubPaseo from "./assethub-paseo";
import westend from "./westend";
import peopleWestend from "./people-westend";
import coretimeWestend from "./coretime-westend";
import argon from "./argon";
import collectivesWestend from "./collectives-westend";
import cereTestnet from "./cere-testnet";
import cere from "./cere";
import ajuna from "./ajuna";
import interlay from "./interlay";

const chains = {
  polkadot,
  statemint,
  "bridgehub-polkadot": bridgehubPolkadot,
  collectives,
  "coretime-polkadot": coretimePolkadot,
  "people-polkadot": peoplePolkadot,
  ajuna,
  interlay,
  laos,
  litentry,
  nexus,
  kusama,
  statemine,
  // "hydradx-testnet": hydradxTestnet,
  polimec,
  shadow,
  // tangle,
  // tinkernet,
  "bridgehub-kusama": bridgehubKusama,
  "coretime-kusama": coretimeKusama,
  "people-kusama": peopleKusama,
  paseo,
  "assethub-paseo": assethubPaseo,
  "bridgehub-paseo": bridgehubPaseo,
  "coretime-paseo": coretimePaseo,
  "people-paseo": peoplePaseo,
  gargantua,
  stagelight,
  westend,
  westmint,
  // "bridgehub-westend": bridgehubWestend,
  "collectives-westend": collectivesWestend,
  "coretime-westend": coretimeWestend,
  "people-westend": peopleWestend,
  argon,
  cere,
  "cere-testnet": cereTestnet,
};

export default chains;
