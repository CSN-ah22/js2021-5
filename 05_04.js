/* 프로토타입 공간 실습 */
//생성자 함수
function Product(name, price) {
    this.name = name;
    this.price = price;
}
//프로토타입 공간에 무명함수를 선언합니다
Product.prototype.print = function () {
    console.log(`${obj2.name}의 가격은 ${obj2.price}원입니다`);
};

//객체를 생성합니다
let obj2 = new Product("바나나", 5000);

obj2.print();

//값이 여러개 일때
/*
Product.prototype.print = function () {
    console.log(`${this.name}의 가격은 ${this.price}원입니다`);
};

//객체배열을 객체에 넣기
let products = [
    new Product("감자",600),
    new Product("사과",2000),
    new Product("바나나",1200),
    new Product("배",3000),
    new Product("수박",5000),
    
    // {name:'사과',price:2000}
];

products.print(); */

let number = new Number(342);
let number2 = 453;

console.log(typeof number); //object 출력
console.log(typeof number2); //자료형 number 출력

//기본 자료형에 프로토타입의 메소드를 넣을 수 있다

//1.변수 생성
let foo = 273;
let bar = 32;

//2.메소드 추가
Number.prototype.method = function () { //문제 : 모든 Number 타입의 변수에 메서드 추가
    return "hello";
}
//3.호출
console.log(foo.method());
console.log(bar.method());
//끝

//Number 내장 메서드 사용해보기
let foo2 = 25.123;
console.log(foo2.toFixed(1)); /* 결과: 25.1 */
console.log(foo2.toFixed(5)); /* 결과: 25.12300 0을붙임 */

//생성자 함수에 속성과 메서드 추가 해보기
function Construtor(){ //Constructor는 키워드가 아님 이름임
 //let foo3 = 273;
 //function bar(){};
}
Construtor.foo3 = 273; //속성 추가
Construtor.bar = function () {}; //함수 추가

console.log(Construtor.foo3);
console.log(Construtor.bar);

//Numer 생성자 함수의 속성
let foo4 = Number.MAX_VALUE;
let bar1 = Number.MAX_VALUE+1; //foo4와 같은 결과값을 지님

console.log(foo4);
console.log(bar1);

//String 객체의 메서드 사용해보기 (toUpperCase)
let foo5 = 'airplane';

let change = foo5.toUpperCase(); //원본데이터를 바꾸지 않음
console.log(foo5); //airplane
console.log(change); //AIRPLANE

//String 객체의 메서드 사용해보기 (indexOf)
let foo6 = "좋은 저녁입니다";
if(foo6.indexOf('아침') >= 0){//아침이 0이상 섞여 있다면
  console.log("굿모닝");
}else{
    console.log("굿나잇");
}