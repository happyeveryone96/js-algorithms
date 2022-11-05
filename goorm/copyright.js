// Run by Node.js

const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    const songs = line.split(" ")[0];
    const avg = line.split(" ")[1];
    console.log(songs * avg - songs + 1);

    rl.close();
  }

  process.exit();
})();
