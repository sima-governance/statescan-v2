const isNil = require("lodash.isnil");

const chains = Object.freeze({
  polkadot: "polkadot",
  kusama: "kusama",
  paseo: "paseo",
  statemine: "statemine",
  statemint: "statemint",
  westmint: "westmint",
  litentry: "litentry",
  litmus: "litmus",
  "westend-collectives": "westend-collectives",
  collectives: "collectives",
  "hydradx-testnet": "hydradx-testnet",
  polimec: "polimec",
  shadow: "shadow",
  gargantua: "gargantua",
  nexus: "nexus",
  "polkadot-crust-parachain": "polkadot-crust-parachain",
  tangle: "tangle",
  "tangle-testnet": "tangle-testnet",
  heiko: "heiko",
  parallel: "parallel",
  crust: "crust",
  invarch: "invarch",
  tinkernet: "tinkernet",
  "assethub-westend": "assethub-westend",
  "collectives-westend": "collectives-westend",
  "people-kusama": "people-kusama",
  "coretime-kusama": "coretime-kusama",
  "people-polkadot": "people-polkadot",
  "people-paseo": "people-paseo",
  "people-westend": "people-westend",
  "coretime-polkadot": "coretime-polkadot",
  "coretime-paseo": "coretime-paseo",
  "coretime-westend": "coretime-westend",
  "assethub-paseo": "assethub-paseo",
  "bridgehub-polkadot": "bridgehub-polkadot",
  "bridgehub-kusama": "bridgehub-kusama",
  "bridgehub-westend": "bridgehub-westend",
  "bridgehub-paseo": "bridgehub-paseo",
  laos: "laos",
  stagelight: "stagelight",
  westend: "westend",
  argon: "argon",
  cere: "cere",
  "cere-testnet": "cere-testnet",
  interlay: "interlay",
  kintsugi: "kintsugi",
  ajuna: "ajuna",
});

const ss58Format = Object.freeze({
  [chains.polkadot]: 0,
  [chains.kusama]: 2,
  [chains.paseo]: 0,
  [chains.statemine]: 2,
  [chains.statemint]: 0,
  [chains.westmint]: 42,
  [chains.litentry]: 31,
  [chains.litmus]: 131,
  [chains.collectives]: 0,
  [chains["westend-collectives"]]: 0,
  [chains["hydradx-testnet"]]: 63,
  [chains.polimec]: 41,
  [chains.shadow]: 66,
  [chains.gargantua]: 0,
  [chains.nexus]: 0,
  [chains["polkadot-crust-parachain"]]: 88,
  [chains.tangle]: 5845,
  [chains["tangle-testnet"]]: 42,
  [chains.heiko]: 110,
  [chains.parallel]: 172,
  [chains.crust]: 66,
  [chains.invarch]: 117,
  [chains.tinkernet]: 117,
  [chains.laos]: 42,
  [chains["people-kusama"]]: 2,
  [chains["coretime-kusama"]]: 2,
  [chains["people-polkadot"]]: 0,
  [chains["coretime-polkadot"]]: 0,
  [chains["assethub-paseo"]]: 0,
  [chains["coretime-paseo"]]: 0,
  [chains["people-paseo"]]: 0,
  [chains["bridgehub-polkadot"]]: 0,
  [chains["bridgehub-kusama"]]: 2,
  [chains["bridgehub-westend"]]: 42,
  [chains["bridgehub-paseo"]]: 0,
  [chains.stagelight]: 42,
  [chains.westend]: 42,
  [chains["collectives-westend"]]: 42,
  [chains["coretime-westend"]]: 42,
  [chains["people-westend"]]: 42,
  [chains["assethub-westend"]]: 42,
  [chains["cere-testnet"]]: 54,
  [chains.argon]: 42,
  [chains.cere]: 54,
  [chains.interlay]: 2032,
  [chains.kintsugi]: 2092,
  [chains.ajuna]: 1328,
});

const legacySs58Format = Object.freeze({
  [chains.gargantua]: 42,
  [chains.nexus]: 42,
});

function getSs58FormatOrThrow(chain) {
  const format = ss58Format[chain];
  if (isNil(format)) {
    throw new Error(`Can not find ss58 format for ${chain}`);
  }
  return format;
}

function hasLegacySs58Format(chain) {
  return chain in legacySs58Format;
}

function getLegacySs58FormatOrThrow(chain) {
  const format = legacySs58Format[chain];
  if (isNil(format)) {
    throw new Error(`Can not find legacy ss58 format for ${chain}`);
  }
  return format;
}

const assetsModuleChains = [
  chains.statemint,
  chains.statemine,
  chains.westmint,
  chains.parallel,
];

const uniquesModuleChains = [
  // chains.statemint,
  // chains.statemine,
  // chains.westmint,
];

const transferOnBlockChains = [
  // whose native token transfer records are in block-scan DB.
  chains.paseo,
  chains.stagelight,
  chains.tangle,
  chains.polimec,
  chains.westend,
  chains.argon,
  chains.statemint,
  chains["people-polkadot"],
  chains["coretime-polkadot"],
  chains["coretime-kusama"],
  chains["assethub-paseo"],
  chains["coretime-paseo"],
  chains["people-paseo"],
  chains["bridgehub-paseo"],
  chains["coretime-westend"],
  chains["bridgehub-westend"],
  chains["collectives-westend"],
  chains["people-westend"],
  chains["cere-testnet"],
  chains.cere,
  chains.interlay,
  chains.kintsugi,
  chains.ajuna,
];

module.exports = {
  chains,
  assetsModuleChains,
  uniquesModuleChains,
  getSs58FormatOrThrow,
  hasLegacySs58Format,
  getLegacySs58FormatOrThrow,
  transferOnBlockChains,
};
