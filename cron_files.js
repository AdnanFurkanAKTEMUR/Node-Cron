const cron = require("node-cron");
let num = 0;
const task = cron.schedule(
  "* * * * * *",
  () => {
    console.log("task started", num);
    num = num +1
  }
);

module.exports = task;
