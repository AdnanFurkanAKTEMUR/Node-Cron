const cors = require("cors");
const express = require("express");
const task = require("./cron_files");
task.start();
(async function () {
  const app = express();

  const corsOptions = {
    origin: true,
    credentials: true,
  };

  app.use(cors(corsOptions));

  app.listen({ port: 4000 }, () => {
    console.log("server is ready on port 4000.");
  });
})();
