const app = require("./server");
const { config } = require("./config");
const connect = require("./db/connect");

connect().then(async () => {
  config.logger.info(`DB connected!`);

  app.listen(config.app.PORT, () => {
    config.logger.info(`Server running at http://localhost:${config.app.PORT}`);
  });
});
