// Rounds to two digits
import { roundMoney } from "./roundMoney.js";

// Tax Rates
import { calcuateTax } from "./calculateTax.js";

// Create ten examples and use the 
// calc function
for(let x = 0; x < 10; ++x) {
  const invoiceTotal = Math.random() * 1000;
  const { postTax, taxRate } = calcuateTax(invoiceTotal); 
  console.log(`Total: $${roundMoney(invoiceTotal)} X ${taxRate} =  $${postTax}`);
}
