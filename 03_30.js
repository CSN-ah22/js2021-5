let input = 32;

switch (input % 2) {
 case 0:
   console.log("짝수입니다");
   break;
 case 1:
   console.log("홀수입니다");
   break;
}

let date = new Date();
console.log(date.getMonth()); // 0에서 시작되기에 3월이면 2 출력
switch ( date.getMonth() + 1){
  case 12:
  case 1:
  case 2:
    console.log("겨울");
    break;
  case 3:
  case 4:
  case 5:
    console.log("봄");
    break;
  case 6:
  case 7:
  case 8:
    console.log("여름");
    break;
  case 9:
  case 10:
  case 11:
    console.log("가을");
    break;
}
//삼항 연산자
let number = 30;

console.log(number%2 == 0?"짝수":"홀수");
//초기화 구문 연습 - 초기값 x
let test;
test = test  ? test : "초기화 해 주세요";
console.log(test);
//초기화 구문 연습 - 초기값 o
let num = 31;
num = num  ? num : "초기화 해 주세요";
console.log(num);