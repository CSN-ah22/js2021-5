let foo = function(){/* 변수에 함수를 넣는다 */
    console.log("첫번줄");
    console.log("두번줄");
};

foo();
console.log(foo);

function foo2 (){
    console.log("첫번줄");
    console.log("두번줄");
};

foo2();

let foo3 = () =>{
    console.log("첫번줄");
    console.log("두번줄");
}
foo3();

function power(x){/* 제곱하는 power 메서드 */
    return x*x;
}
console.log(power(10));

function foo4(x){/* 제곱 기능을 구현하는 일반 메서드 */
    let bar = x * x;
    return bar;
}
let foobar = foo4(10);
console.log(foobar);

function print(message){
    console.log(`${message} 라고 말했습니다`);
}
print("안녕하세요");

function fruit(name = "무명", count){
    if(!count){ /* count가 없으면 1로 초기화 */
        // count = "개수가 입력이 되지 않았습니다";
        count = 1;
    }
    console.log(`${name}가   ${count}개 있습니다`);
}
fruit("사과",10);
fruit("사과");
fruit();

/* 콜백함수 */
function tenTimes(foo){/* foo 가 무명함수 */
    for(let i=0; i<=9; i++){
        foo();/* 무명함수를 10번 호출한다 */
    }
}
/*
함수호출+i 란 출력을 구현하고 싶다면 
"함수호출" 이란 문자열을 매개변수로 보내서 문자열+i 라는 방식으로 하면 될 것이다
다만 콜백함수의 의미가 없어진다 */

tenTimes(()=>{/* 무명함수 호출 */
    console.log("함수 호출");
});

/* 자료형 변환 */

let inputA = '52';
parseInt(inputA);
console.log(inputA);

let inputB = '52.273';
parseFloat(inputB);
console.log(inputB);

let inputC = '1503동';
parseInt(inputC);
console.log(inputC);
console.log(parseInt(inputC));

console.log(Number(inputC));/* NaN출력 */

/* parseInt("0",2) 라고 하면 ,뒤에 있는게 진수 설정
즉 0을 2진수 숫자로 바꾸어 담아달라는 뜻 */

/* time 메서드 사용해보기 */

setTimeout(()=>{/* 한번만 출력 */
    console.log("1초 경과");
},1000)

// setInterval(()=>{/* 무한루프 */
//     console.log("Interval 1초 경과");
// },1000)