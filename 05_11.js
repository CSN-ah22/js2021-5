let foo = new Date();
console.log(foo); //결과: 2021-05-11T05:28:06.539Z

foo.setFullYear(foo.getFullYear()+1);
foo.setMonth(foo.getMonth()+1);
foo.setDate(foo.getDate()+1);

console.log(foo); //결과: 2022-06-12T05:28:06.539Z

let now = new Date();
let before = new Date('Dec 9, 2020');

let interval = now.getTime() - before.getTime();
interval = Math.floor(interval / (1000 * 60 * 60 * 24))
console.log(interval+"일이 지났다");

let foo1 = [10,3,5,20];
let foo2 = [
    {
        //key: value
        name: '고구마',
        price: 1000
    },
    {
        //key: value
        name: '감자',
        price: 500
    },
    {
        //key: value
        name: '바나나',
        price: 1500
    }
];

let popped = foo2.pop(); //pop 명령어 실행시 마지막 값만 해당
console.log(popped);
console.log(foo2);//바나나를 꺼내서 원본에 바나나가 사라짐
console.log();


foo2.push(popped); //바나나를 다시 집어넣기
foo2.push(
    {
        name: '사과',
        price:2000
    },
    {
        name: '수박',
        price:3000
    }
)

console.log(foo2); //고구마, 감자, 바나나, 사과, 수박

let foo3 = [55,65,400,150,24];

foo3.forEach((item, index)=> { //화살표 함수
    //index 값을 가져와서 반복문처럼 돌림
    console.log(`${index} - ${item}`);
});

let bar = foo3.map((item, index)  => { //화살표 함수
    //별도의 배열에 값을 넣어줌
 return item + 10;
});

console.log(bar);

let foobar = foo3.filter((item, index) => {
    return item % 2 == 0;// 짝수만 return 해서 새로운 배열에 넣음
});

console.log(foobar);




