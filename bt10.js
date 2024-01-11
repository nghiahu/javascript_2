// Lệnh switch case dễ nhìn, dễ maintain và chỉ cần so sánh biểu thức điều kiện 1 lần.
let num = +prompt("Nhập vào một số");
 switch(num){
    case 1:
    console.log("Số" + num);
    break;
    case 2:
    console.log("SỐ" + num);
    break;
 }
//  Lệnh switch case lại không linh hoạt bằng if else 
// Lệnh switch case có hạn chế là biểu thức điều kiện phải là số nguyên.

let number = +prompt("Nhập vào một số nguyên: ");
if (number % 2 == 0) { 
  console.log(number + " là số chẵn"); 
} else {
  console.log(number + " là số lẻ");
}