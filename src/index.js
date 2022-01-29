import mongo from "./mongo.js";
import server from "./server.js";
import "dotenv-defaults/config.js";
import wakeUpDyno from './wakeUpDyno.js'
mongo.connect();
const port = process.env.PORT || 4000;
server.start({ port }, () => {
  const DYNO_URL = "https://wp1101-final-cvgame.herokuapp.com/"
  wakeUpDyno(DYNO_URL)
  console.log(`The server is up on port ${port}!`);
});
