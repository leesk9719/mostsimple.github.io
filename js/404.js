import { CountUp } from "./countUp.js";
let countUp = new CountUp("number", 404);

setTimeout(function() {
  countUp.start();
}, 1000);
