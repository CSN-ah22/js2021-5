console.log('"안녕\n하세요"');
let date = new Date();
h = date.getHours(); // let이 굳이 없어도 변수 선언이 됨

console.log(h < 3 || h > 8);
console.log(h >= 3 && h <= 8);
//자료형 검사
let type = typeof(date);
console.log(type);
type = typeof(date.getHours());
console.log(type);
//상수 오류나는지 확인
const con1 = "상수선언";
// con1="";
console.log(con1);
//if 문으로 홀짝 판별
let input = 31;
if(input %2 == 0){
    console.log("짝수입니다");
}else{
    console.log("홀수입니다");
}
//if 문으로 시간 판별
if(date.getHours() < 12){
    console.log("오전");
}else{
    console.log("오후");
}
//Date() 함수의 종류
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getTime());
console.log(date.getMinutes());
console.log("커밋 테스트3");