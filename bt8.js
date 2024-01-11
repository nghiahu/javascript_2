
let weight = +prompt("Nhập cân nặng (kg): ");
let height = +prompt("Nhập chiều cao (m): ");

let bmi = weight / (height ** 2);
console.log("BMI của bạn là:", bmi);

if (bmi < 18.5) {
  console.log("Bạn thuộc nhóm gầy");
} else if (bmi >= 18.5 && bmi < 25 ) {
  console.log("Bạn thuộc nhóm bình thường");
} else if (bmi >= 25 && bmi < 30 ) {
  console.log("Bạn thuộc nhóm tiền béo phì");
}else if (bmi >= 30 && bmi < 35){
    console.log("Bạn thuộc nhóm béo phì loại I");
}else if(bmi >= 35 && bmi < 40){
    console.log("Bạn thuộc nhóm béo phí độ II");
}else {
  console.log("Bạn thuộc nhóm béo phì độ III");
}
