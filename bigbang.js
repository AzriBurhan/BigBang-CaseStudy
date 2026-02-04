const fs = require("fs");

let result = [];

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    result.push("BIGBANG");
  } else if (i % 3 === 0) {
    result.push("BIG");
  } else if (i % 5 === 0) {
    result.push("BANG");
  } else {
    result.push(i.toString());
  }
}

// Convert array to JSON
const jsonData = JSON.stringify(result, null, 2);

// Write to output.json
fs.writeFileSync("output.json", jsonData);

console.log("output.json generated successfully!");