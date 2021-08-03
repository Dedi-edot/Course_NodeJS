//my own modul
let { penjumlahan, pengurangan } = require("./myModule");

console.log(penjumlahan(2, 1));
console.log(pengurangan(2, 1));

//built in module in node js
let timers = require("timers");

timers.setTimeout(() => {
  //setTimeout == jeda waktu
  console.log("Hello World");
}, 2000);

let url = require("url");
let link = "http://lin.id/data.html?tgl=12&bln=november";

let parsing = url.parse(link, true);

console.log("Host", parsing.host);
console.log("Path", parsing.path);
console.log("Query", parsing.search);

//npm modules
let colors = require("colors");

console.log("Hello".red);
console.log("World".blue);
console.log("Hello World".bgWhite.rainbow);

let moment = require("moment");

let today = moment();
console.log(today);

let today2 = moment().format();
console.log(today2);

let today3 = moment().format("dddd, MMMM Do YYYY, hh:mm:ss, a");
console.log(today3);
