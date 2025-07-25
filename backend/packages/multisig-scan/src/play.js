require("dotenv").config();

const {
  chain: { getApi },
} = require("@osn/scan-common");
const {
  multisig: { initMultisigScanDb },
} = require("@statescan/mongo");
const { handleBlock } = require("./scan/block");
const { deleteFrom } = require("./scan/delete");

async function main() {
  await initMultisigScanDb();
  let blockHeights = [12312213];
  // let blockHeights = [333924];
  await deleteFrom(blockHeights[0]);

  const api = await getApi();

  for (const height of blockHeights) {
    const blockHash = await api.rpc.chain.getBlockHash(height);
    const block = await api.rpc.chain.getBlock(blockHash);
    const allEvents = await api.query.system.events.at(blockHash);

    await handleBlock(
      {
        height,
        block: block.block,
        events: allEvents,
      },
      false,
    );
    console.log(`${height} finished`);
  }

  console.log("finished");
  process.exit(0);
}

main().then(console.log);
