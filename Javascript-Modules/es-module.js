import dns from "dns";
import utils, { capitalize, favoriteColors } from "./utils.js";

import User, { getTeam, sortTeam } from "./auth/auth.js";

dns.lookup("pluralsight.com", function(e, address) {
    console.log(`Address of pluralsight.com - ${address}`);
});

console.log(`${utils.appName} v${utils.version}`);
console.log(capitalize('hello world'));

favoriteColors.forEach((c) => console.log(c));

const user = new User("Ashutosh", "Mishra");

console.log(user.format());

const team = getTeam();

team.forEach(t => console.log(t.format()));

sortTeam(team);

team.length = 0;

console.log(team);

import {getTeam as getTeam2} from "./auth/auth.js";

const team2 = getTeam2();
console.log(team2);