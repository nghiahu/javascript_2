
let a = +prompt("Nhập số a: ");
let b = +prompt("Nhập số b: ");
let c = +prompt("Nhập số c: ");

let max = a >= b && a >= c ? a : b >= a && b >= c ? b : c;

console.log("Số lớn nhất là - " + max);
