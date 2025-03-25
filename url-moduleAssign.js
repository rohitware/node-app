const url = require("url");

const myUrl = url.format({
  protocol: "https",
  hostname: "www.codemindtechnology.com",
  pathname: "/contact",
});
console.log(`1: print the url using url format() method:`);
console.log(`url:`, myUrl);

console.log(`\n2: extract the path using parse()method`);
const parsedUrl = url.parse(myUrl, true);
// console.table(parsedUrl)
console.log(`Protocol:`, parsedUrl.protocol);
console.log(`Host Name:`, parsedUrl.hostname);
console.log(`Path Name:`, parsedUrl.pathname);
