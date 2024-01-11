
let a = +prompt("Nhập số a: ");
let b = +prompt("Nhập số b: ");
let c = +prompt("Nhập số c: ");

let array = [a, b, c];

array.sort(function (a, b) { return a - b; });

console.log("3 số theo thứ tự tăng dần là: " + array.join(", "));
