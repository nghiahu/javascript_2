var test;

test= prompt("Nhập vào một số bất kỳ:");

if(isNaN(test)){
    console.log("Không hợp lệ");
}else if( test % 2 === 0){
    console.log("Số chẵn");
}else{
    console.log("Số lẻ");
}