let month= +prompt("Nhập vào một tháng trong năm");

if(month < 1 || month >12){
    console.log("Không hợp lệ");
}else if(month === 2){
    console.log("Có 28 ngày");
}else if( month % 2 === 0 && month !== 8 ){
    console.log("Có 30 ngày");
}else{
    console.log("Có 31 ngày");
}