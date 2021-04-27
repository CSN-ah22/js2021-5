# 최선아 [202030430]

## [4월 27일]
>9주차<br />

<br />
• time함수 사용해보기<br />

``` javascript
let id = setInterval(function(){/* 무한루프 */
        console.log("Interval 1초 경과");
     },1000);

     setTimeout(() => {/* 무한루프 막기 */
         clearInterval(id);
     }, 3000);

```
• 우선순위 주의점 : 선언 함수가 가장 먼저 컴파일된다<br />
``` javascript
 //익명함수는 선언적 함수를 무조건 덮어쓴다
     foo2 = () => {console.log("1st");};//익명
     function foo2(){console.log("2nd");}; //선언적

    foo2();
```
• this키워드 사용해보기<br />
``` javascript
let name = "dong";

    foo3 = () => {
        let name = "syna";
        this.name = name;//초기화를 해주지 않으면 undefined
        console.log(this.name);
    };
    foo3();
```
<br />
• JSON 방식의 파일 포맷<br /><br />

> key : key값<br /><br />
> ex)     제품명: "7D 건조 망고",<br />
>        번호: 8097<br />

<br />
• 객체 안에 Json 형식의 함수 선언하기<br />

``` javascript
//객체 안에 Json 형식의 함수 선언하기
    let foo6 = {
        name2 : "건조망고",
        price : 122,
        print: function(){
            console.log(`${this.name2}-${this.price}`);
            //function 키워드를 쓰지않으면 undfined가 나옴
        }
    };
    foo6.print();
```



## [4월 13일]
>7주차<br />

익명 함수 : 이름이 없는 함수<br />
``` javascript
let foo = function(){/* 변수에 함수를 넣는다 */
    console.log("첫번줄");
    console.log("두번줄");
};

foo();
```
<br />
선언적 함수 : 이름이 있는 함수 <br />

``` javascript
function foo2 (){
    console.log("첫번줄");
    console.log("두번줄");
};

foo2();
```
<br />
화살표 함수 ✨

``` javascript
let foo3 = () =>{
    console.log("첫번줄");
    console.log("두번줄");
}
foo3();
```
<br />
매개변수를 입력하지 않고 함수를 호출하면 undefined가 출력됨
<br />
<br />
콜백함수 : 재귀함수 같은 역할

```javascript
/* 콜백함수 */
function tenTimes(foo){/* foo 가 무명함수 */
    for(let i=0; i<=9; i++){
        foo();/* 무명함수를 10번 호출한다 */
    }
}

tenTimes(()=>{/* 무명함수 호출 */
    console.log("함수 호출");
});
```
<br />
문자>> 정수, 실수로 변환하기

```javascript
let inputA = '52';
parseInt(inputA);
console.log(inputA);

let inputB = '52.273';
parseFloat(inputB);
console.log(inputB);
```
<br />
time메서드 사용하기

```javascript
setTimeout(()=>{/* 한번만 출력 */
    console.log("1초 경과");
},1000);

 setInterval(()=>{/* 무한루프 */
     console.log("Interval 1초 경과");
 },1000)
```

## [4월 6일]
>수업내용<br />

for in : 배열의 크기만큼 인덱스의 값을 가져옴 (인덱스 번호 지정 o)<br />
for of : 배열의 값을 불러옴 (인덱스 번호 지정 x)<br />
<br />
큐: shift + push<br />
스택: pop + push<br />
sort: 내림차순으로 정렬<br />
slice: 잘라도 배열값이 그대로 foo 에 저장되어있음 <br />
잘라진건 bar에 저장됨
<br />
<br />
splice: 잘린값은 bar에 <br />
잘리고 남은 값은 foo에 있음<br />
join: 배열값들 사이에 원하는 문자를 삽입하여 반환<br />
<br />
break: 스위치나 반복문에서 벗어날때
<br />
continue: 가장 가까운 반복문으로 넘어감 <br />
for문 안에 if문안에 사용
<br />
<br />


## [03월 30일]
> 오늘 배운 내용 요약 <br />

• 중첩 조건문<br />
```
if(//불 표현식){
     if(//불 표현식) {
        //문장;
     }else{
        //문장;
     }
   } else  {
        if (//불 표현식) {
          //문장;
        } else {
          //문장;
        }
  }
  ```
• ctrl+shift+ender + 방향키<br />
한번에 줄 정리 하기 좋음<br />
<br />
• 삼항 연산자<br />
<불 표현식> ? <참> : <거짓><br />
```
console.log(number%2 == 0?"짝수":"홀수");
```
• 배열<br />
let 이름 = [값, 값, 값]<br />
<br />
•입력문 빠져나올때 : ctrl + D<br />
<br />
• 하나의 배열에 여러 파일에서 값을 추가하고 뺐을때 총 길이를 잘 모르겠다면 <br />
while문을 사용해서 그 길이를 찾을 수 있다(?)<br />
<br />
•

## [03월 23일]
> 오늘 배운 내용 요약 <br />

•피제수: 나뉘어지는수<br> 
피제수/제수<br>
•안에 "" 출력 하고 싶을때
consol.log('"hello"')<br>
•안에 '' 출력 하고 싶을때
consol.log("'hello'")<br>
 "\\"을 출력하고 싶을때
 consol.log("\\ \\");<br>
 •자바스크립트 에서 문자열은 배열로 다룬다<br>
 ex) 변수에 문자열을 주고 문자 하나 출력 해봄<br>
 let a = "hello world";<br>
 a[4];<br>
 결과 : 'o'<br>
• ``` `(Back tick)``` <br>
 Tab키 위에 있는거 템플릿? 문자열에 사용한다 <br>
 뭐든지 문자열로 변환해서 출력한다<br>
 수식 `23+40`  => 결과: '23+40'<br>
 문자열 `안녕` => 결과: '안녕'<br>
 계산시 아래처럼 써야 제대로 출력됨<br>
 `52+273 = ${52+273}`;<br>
 ``` `객체생성방법  결과 가져오기```<br>
 new Date() . getFullYear()
 복합대입연산자<br>
 += -= *= %=

## [03월 16일]
> 오늘 배운 내용 요약 <br />
> js파일 생성법<br> 
새로운 파일을 만들고 이름을 파일명.js라고 지정한다<br>
>출력하는 명령문 console.log("hello world...!");<br>
> 

배운내용

<taable>
</taable>
