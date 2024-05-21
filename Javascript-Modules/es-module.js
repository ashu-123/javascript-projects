import dns from "dns";

dns.lookup("pluralsight.com", function(e, address) {
    console.log(`Address of pluralsight.com - ${address}`);
})