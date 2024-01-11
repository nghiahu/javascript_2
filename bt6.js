
let toan = +prompt("Nhập điểm môn toán: ");
let van = +prompt("Nhập điểm môn văn: ");
let anh = +prompt("Nhập điểm môn anh: ");

let dtb = (toan + van + anh) / 3;
console.log("Điểm trung bình là:", dtb);

if (dtb >= 8.0) {
  console.log("Xếp loại GIỎI");
} else if (dtb >= 6.5) {
  console.log("Xếp loại KHÁ");
} else if (dtb >= 5.0) {
  console.log("Xếp loại TRUNG BÌNH");
} else {
  console.log("Xếp loại YẾU");
}
