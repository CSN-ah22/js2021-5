let id = setInterval(function () {/* 무한루프 */
    console.log("Interval 1초 경과");
}, 1000);

setTimeout(() => {/* 무한루프 막기 */
    clearInterval(id);
}, 3000);

let foo;
foo = 10;
foo = 20;
foo = "세번째";

console.log(foo); //마지막 변수만 출력됨
//무명함수
foo = () => { console.log("1st"); }
foo = () => { console.log("2nd"); }

foo(); //마지막 함수만 호출됨

//익명함수는 선언적 함수를 무조건 덮어쓴다
foo2 = () => { console.log("1st"); };//익명
function foo2() { console.log("2nd"); }; //선언적

foo2();

let name = "dong";

foo3 = () => {
    let name = "this.syna";
    this.name = name;//이걸 해주지 않으면 undefined
    console.log(this.name);
};
foo3();

//배열

let foo4 = ["사과", "배", "바나나", "딸기"];

console.log(foo4[0]);

//JSON 방식 사용해보기

let foo5 = {
    제품명: "건조 망고",
    유형: "당절임",
    원산지: "필리핀",
    price: 122
}

console.log(foo5);

console.log(" ");
//반복문으로 JSON 형식의 데이터 출력
for (let key in foo5) {
    console.log(`${key}:${foo5[key]}`);

}
console.log(" ");

//객체 안에 Json 형식의 함수 선언하기
let foo6 = {
    name2: "건조망고",
    price: 122,
    print: function () {
        console.log(`${this.name2}-${this.price}`);
        //function 키워드를 쓰지않으면 undfined가 나옴
    }
};
foo6.print();

//JSON+배열
let products = [
    { name: '사과', price: 1200 }/*한덩이*/,
    { name: '배', price: 1500 },
    { name: '자두', price: 1000 },
    { name: '딸기', price: 2000 },
    { name: '바나나', price: 1500 },

];

function printProduct(obj) {
    console.log(`${obj.name} - ${obj.price} `);

}

for (let i of products) {
    printProduct(i);
}

//js에선 생성자 사용시 JSON 형태로 초기화됨

function products2(name, price) {
    this.name = name;
    this.price = price;
}

let obj2 = new products2("바나나", 5000);

console.log(obj2);