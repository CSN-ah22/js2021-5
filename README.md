# 최선아 [202030430]

## [6월 01일]
>14주차

<details>
<summary>🌳익스플로러에서 템플릿 문자열 사용법</summary>
<div markdown="1">       
</br>

``` javascript
var variable = 273;
console.log('변수의 값은'+variable+'입니다');
```
</details>

<hr>

<details>
<summary>🌳window 객체</summary>
<div markdown="1">       
</br>
경고 메세지 출력하기</br>
alert(메세지);</br></br>
프롬프트 출력하기</br>
prompt(메세지, 임시글자);</br>
</details>

<hr>

<details>
<summary>🌳location 객체와 history객체</summary>
<div markdown="1">       
</br>
문서의 URL주소 : href</br>
새로고침한다 : reload();</br></br>
history객체</br>
앞으로 이동한다 : forward()</br>
뒤로 이동한다 : back()</br>
</details>

<hr>

<details>
<summary>🌳jQuery 라이브러리</summary>
<div markdown="1">       
jquery 라이브러리는 $ 함수를 사용한다</br></br>
보통 다음 형태로 사용된다</br>
> $(//매개변수).foo(//매개변수,//매개변수)</br></br>
$ 함수의 매개변수에는 문서객체, css형식, html 형식의</br>문자열을 삽입한다</br></br>

``` javascript
// 일반 문서 객체로 jQuery 객체를 생성함
$(document)

//CSS 선택자로 jQuery 객체를 생성함
$('h1')

//HTML 문자열로 jQuery 객체를 생성함
$('<h1></h1>')

$(document).ready() //문서 객체의 생성 완료 시점을 잡는 이벤트 연결

```
</details>

<hr>

<details>
<summary>🌳jQuery 문서 객체 선택 (CSS)</summary>
<div markdown="1">       
</br>

``` javascript
//🌺h1 태그를 선택함
$('h1')

//🌺h1태그 중에 class 속성으로 logo를 가진 태그를 선택함
$('h1.logo')

//🌺id 속성이 head인 태그를 선택함
$('#head')

//🌺input 태그 중에 type 속성이 submit인 태그를 선택한다
$('input[type=submit]')

//🌺 h1 태그의 부모 태그를 선택한다
$('h1').parent();

//h1 태그 내부에 있는 i 태그를 선택
$('h1').find('i');
```
</details>

<hr>

<details>
<summary>🌳jQuery 문서 객체 개별 조작</summary>
<div markdown="1">       
</br>
여러개의 문서 객체 선택하기 = 배열</br>
$jquery 변수.length</br>
</br>
요소 추출하기</br>
$jquery 변수.get(1)</br>

``` javascript
$(document).ready(function (){
var $headers = $('h1');
for(var i=0; i< $headers.length; i++){
    if(i % 2 == 1){
        var domElement = $headers.get(i);
        $(domElemnt).css('backgroundClolor','red');
    }
}
});
```
</details>

<hr>

<details>
<summary>🌳jQuery each문</summary>
<div markdown="1">       
</br>
forEach문과 같지만 순서가 조금 다르다</br>
</br>
each() 내부에서 this는 문서 객체를 말한다

``` javascript
$('h1').eah(function (index, item){
$(this).css('backgroundColor',red);//this는 h1을 가리킴
$('h1:even').css('backgroundColor',red); //짝수
$('h1:odd').css('backgroundColor',red); //홀수
});
```
</details>

<hr>

<details>
<summary>🌳jQuery 문자 조작 </summary>
<div markdown="1">       
</br>
html 태그 내부의 문자를 조작함</br>
text()</br></br>
html 태그 내부의 문자를 조작함(HTML 태그 인식)</br>
html()</br>

``` javascript
$('h1').text() //모든 h1의 값을 출력함
$('h1').html() //첫 번째 h1의 값을 출력함

//text() 메서드와 html() 메서드의 set형태
//매개변수가 있다면 세팅을 해주는것
$('text-1').text('<h1>text 메서드</h1>');//css 안먹힘 '<h1>text 메서드</h1>' 그대로 출력
$('text-2').html('<h1>html 메서드 </h1>');//css 먹힘 
```
</details>

<hr>

<details>
<summary>🌳jQuery 스타일 조작 </summary>
<div markdown="1">       
</br>
스타일을 조작할때 사용</br>
.css()</br>

``` javascript
//h1 태그의 color 스타일 속성을 가져옴
$('h1').css('color')
//h1 태그의 color 스타일 속성을 red로 설정함
$('h1').css('color','red')
//h1 태그의 color 스타일 속성과 backgroundColor 스타일 속성을 설정
$('h1').css({
    color: 'red',
    backgroundColor: 'orange'})

```
</details>

<hr>

<details>
<summary>🌳jQuery 스타일 조작(attr)(placehold) </summary>
<div markdown="1">       
</br>
스타일을 조작할때 사용</br>
.css()</br>

``` javascript
//이미지 태그의 src 속성을 가져옵니다
$('img').attr('src')

// img 태그의 src 속성을 http://placehold.it/100x100으로 설정함
$('img').css('src','http://placehold.it/100x100')
//placehold 란 대략적인 크기를 보여주는 부트스트랩같은 라이브러리 요소 - 마크업 할때 유용

//img 태그의 src 속성과 alt 속성을 한꺼번에 지정한다
$('img').css({
    src: 'http://placehold.it/100x100',
    alt: 'placehold.it'
})

```
</details>

<hr>

<details>
<summary>🌳jQuery 문서 객체 생성</summary>
<div markdown="1">       
</br>

``` javascript
$('div') //div 태그를 찾아라

$('<div></div>') //html에 div 요소를 넣어줘라✨</br>

$('<h1></h1>').text('안녕하쇼').attr('data-test','test').css({backgroundColor:'red',color:'white'}).appendTo('body');
```

</details>

<hr>

<details>
<summary>🌳jQuery 이벤트 직접 연결</summary>
<div markdown="1">       
</br>

``` javascript
//기본 형태
$('요소').on('이벤트이름',콜백함수 (event)){
    // 이벤트 구현
}
```
</details>

<hr>

<details>
<summary>🌳jQuery 이벤트 간접 연결</summary>
<div markdown="1">       
</br>
부모님에게 이벤트를 위임해서 부모가 이벤트를 처리하게 하는 것.</br>

이벤트를 제거할때는 off() 메서드를 사용

</details>

<hr>

## [5월 25일]
>13주차 

<details>
<summary>🔘EXPRESS 모듈을 사용한 서버 생성과 실행</summary>
<div markdown="1">       
</br>

``` javascript
//🌺모듈 객체 생성
const { response } = require('express');
const express = require('express');
const { request } = require('http');
```
</details>

<hr>


<details>
<summary>🔘서버 생성</summary>
<div markdown="1">       
</br>

``` javascript
//🌺서버 생성
const app = express();

```
</details>

<hr>

<details>
<summary>🔘서버 접속 요청이 들어왔을때 응답 처리 = 이벤트 처리</summary>
<div markdown="1">       
</br>

``` javascript
 app.use((request,response)=>{
     response.send('<h1>Hello express</h1>');//브라우저에 출력
 });
```
</details>

<hr>

<details>
<summary>🔘서버를 실행한다</summary>
<div markdown="1">       
</br>

``` javascript
app.listen(52273,()=>{
    console.log('Server running at http://127.0.0.1:52273');
}) 
```
</details>

<hr>

<details>
<summary>🔘페이지 라우팅 실습</summary>
<div markdown="1">       
</br>

``` javascript
app.get('/page/:id', (request, response)=>{//사용자가 url끝에 /page/500 을 붙여서 요청하면 결과 창을 아래의 코드처럼 나타냄
    const id = request.params.id;

    response.send(`<h1> ${id} Page</h1>`);
});
```
</details>

<hr>

<details>
<summary>🔘페이지 라우팅 정의</summary>
<div markdown="1">       
<pre>페이지 라우팅: 클라이언트 요청에 적절한 페이지를 제공하는 기술</br></pre>
</details>


<hr>

<details>
<summary>🔘Content-Type</summary>
<div markdown="1">       
</br>
컴퓨터는 파일 이름 뒤에 mp3가 붙어도 그것이 mp3 파일인지 구분을 못 한다
<br/>
<br/>
따라서 서버가 데이터를 제공할때 Context-Type 속성을
헤더에 적어 보내야한다
<br/>
<br/>
그러면 웹 브라우저가 헤더를 확인하고 제공된 데이터의
형태를 확인한다
<br/>
<br/>
이때 헤더에 제공시 MIME 형식으로 제공한다

<details>
<summary>🔘MIME</summary>
<div markdown="1">       
</br>

``` javascript
type('image/png'); //이미지 속성
type('audio/mpe'); //음악 파일 속성 
type('application/json'); //json 데이터 속성
type('text/html');//html 속성
type('text/plain');//기본 텍스트 속성
type('multipart/form-data');//입력 양식 데이터 속성
type('video/mpeg');//비디오 파일 속성
```
</details>

``` javascript
//모듈 추출
const fs = require('fs');

app.get('/image',(request, response)=>{
    fs.readFile('image.png',(error,data)=>{
        response.type('image/png');
        response.send(data);
    })
})
```
</details>

<hr>

<details>
<summary>🔘서버를 실행한다 </summary>
<div markdown="1">       
</br>

``` javascript
app.listen(52273,()=>{
    console.log('Server running at http://127.0.0.1:52273');
});
```
</details>

<hr>

<details>
<summary>🔘리다이렉트 </summary>
<div markdown="1">       
</br>
특정 경로로 웹 브라우저를 인도 할 때 사용하는것

``` javascript
//🌺request 이벤트 리스너를 설정합니다
app.get('*', (request, response)=>{
    response.redirect('http://naver.com');
});

//🌺서버를 실행한다
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});
```
</details>

<hr>

<details>
<summary>🔘morgan 미들웨어 </summary>
<div markdown="1">       
</br>
로그 출력 미들웨어 로써 서버를 실행하고 주소에 접속해서 명령 프롬포트를 확인하면 로그 출력을 볼 수 있다
<br/>
실제 운용할때는 로그 출력을 실시간으로 감시해서 여러 보안 위협을 검출할 수 있음

``` javascript
/* ⚽morgan 미들웨어 */

//🌺모듈을 추출합니다 
const morgan = require('morgan');

//🌺서버를 생성한다 
app.use(express.static('public'));
app.use(morgan('combined'));

//🌺request 이벤트 리스너를 설정합니다
app.get('*', (request, response)=>{
    response.send('명령 프롬포트를 확인해주세요');
});

//🌺서버를 실행한다
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});
```
</details>

<hr>

<details>
<summary>🔘결과 </summary>
<div markdown="1">       
</br>

``` javascript
PS C:\Users\csa26\OneDrive\바탕 화면\js2021-5> node 05_25.js
Server running at http://127.0.0.1:52273
::ffff:127.0.0.1 - - [30/May/2021:03:39:27 +0000] "GET / HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 
(KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"
::ffff:127.0.0.1 - - [30/May/2021:03:39:28 +0000] "GET /favicon.ico HTTP/1.1" 304 - "http://127.0.0.1:52273/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"
```
</details>

<hr>

<details>
<summary>🔘body-parser 미들웨어 </summary>
<div markdown="1">       
</br>

``` javascript
/* ⚽body-parser 미들웨어 */
//🌺모듈을 추출합니다
const morgan = require('morgan');
const bodyParser = require('body-parser');

//🌺서버를 생성한다 
app.use(express.static('public'));
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended: false}));

//🌺request 이벤트 리스너를 설정합니다
app.get('/', (request, response)=>{ // '/' 호출부호
    let output='';
    output += '<form method="post">';
    output += '<input type="text" name="a" />';
    output += '<input type="text" name="b" />';
    output += '<input type="submit" />';
    output += '</form>';

    //🌺응답합니다
    response.send(output);
});

app.post('/',(request, response)=>{
    //🌺응답합니다
    response.send(request.body);
});

//🌺서버를 실행합니다
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});
```
</details>

<hr>

<details>
<summary>🔘결과 </summary>
<div markdown="1">       
</br>

``` javascript
//브라우저창에 출력
{"a":"hello","b":"1345"}
```
</details>

<hr>
<hr>



## [5월 18일]
>12주차  

<details>
<summary>• 🥕Process란?</summary>
<div markdown="1">       
Process 는 자바에서 클래스를 객체생성하여 사용하듯이 js에서의 객체라고 보면 된다</br>
</details>

<details>
<summary>• 🥕js의 이벤트 연결메서드</summary>
<div markdown="1">       
on(이벤트 이름, 이벤트 핸들러)</br>
이름에 따라 연결되는 이벤트가 다름</br>
이벤트 핸들러에 리턴값이 들어옴</br>
</details>

<details>
<summary>• 🥕Process객체의 이벤트 종류</br></summary>
<div markdown="1">       

'exit' : 프로세스 객체가 종료될때 발생</br>
'uncaughtException' : 예외가 일어날때 발생</br>
</details>

<details>
<summary>• 🥕실습</summary>
<div markdown="1">
    
``` javascript
//exit 이벤트 실습
process.on('exit',(code) = >{
    console.log('프로세스 종료되었습니다');
    console.log(`exit 에빈트 매개 변수: ${code}`);
});
//uncaughtException
process.on('uncaughtException', (error) = >{
    console.log('예외가 발생했습니다');
    console.log(`uncaughtException 이벤트 매개 변수: ${error}`);
});

//예외를 강제로 발생
error.error.error();
```
</details>

<hr>    
    
<details>
<summary>• 🥕 OS모듈 사용해보기</summary>
<div markdown="1">
 <u> os의 사용용도 보다
    require() 을 이용하여 모듈을 추출 한다는점에 집중 </u>    
    
``` javascript
const os = require('os'); //os객체 생성
console.log(os.hostname());
console.log(os.totalmem());
```
</details>
    
<hr>

<details>
<summary>• 🥕 URL모듈 사용해보기</summary>
<div markdown="1"> 
    parse("") : URL문자열을 URL객체로 변화해 리턴해준다</br>

``` javascript
const url = require('url');
console.log(url.parse("https://naver.com"));
```
</details>
    
<hr>

🍀 파일 모듈 사용해보기 </br>
    
<details>
<summary>• 🥕파일 읽기(동기적:파일이 전부 다운로드 될 때까지 멈춰있음)🥕</summary>
<div markdown="1">
    
``` javascript
const fs = require('fs');
const file = fs.readFileSync('textfile.txt');
console.log(file);
console.log(file.toString());
```
</details>

<details>
<summary>• 🥕파일 읽기(비동기적:파일이 다운로드 되는동안 ③부분을 실행함🥕</summary>
<div markdown="1">       

``` javascript
①const fs = require('fs');
②fs.readFile('textfile.txt',(error,file)=>{
    ④console.log(file);
    ⑤console.log(file.toString());
})
③
```
</details>

<hr>
    
<details>
<summary>• 🥕콜백 함수의 형태</summary>
<div markdown="1">       
</br>
통상 첫 번째 매개변수는 '오류'를 나타내는 오류객체 이다.
</br>
두번째 매개변수는 원하는 값의 타입(?)이다.
</details>

<hr>
    
<details>
<summary>• 🥕파일 쓰기(동기식)</summary>
<div markdown="1">     
    
``` javascript
 const fs = require('fs');

 fs.writeFileSync('output.txt','안녕하쇼');
 console.log("파일 쓰기 완료");
```
</details>

<details>
<summary>• 🥕파일 쓰기(비동기식)</summary>
<div markdown="1">       
    
``` javascript
const fs = require('fs');

fs.writeFile('output.txt','안녕하쇼',(error) =>{
console.log("파일 쓰기 완료");
});
```
</details>

<details>
<summary>• 🥕파일 예외처리(동기식)</summary>     
<div markdown="1">   
    
 ``` javascript
const fs = require('fs');

try{
const file1 =fs.readFileSync('none.txt');
console.log(file);
console.log(file.toString());
}catch(exception){
    console.log("파일이 없습니다");
}
```
</details>

<details>
<summary>• 🥕파일 예외처리(비동기식)</summary>
<div markdown="1">       
    
``` javascript
const fs = require('fs');
fs.readFile('none.txt',(error,file)=>{
    if(error){
        console.log("예외 발생");
    }else{
    console.log(file);
    console.log(file.toString());
    }
})
```
</details>

<hr>

<details>
<summary>• 🥕request모듈 사용 : (외부 페이지의 html 출력)🥕</summary>
<div markdown="1">       
    
``` javascript
//request모듈
const request = require('request');

request("https://naver.com",(error,response, body)=>{
    console.log(body);
})
```
</details>    

<details>
<summary>• 🥕CHEERIO모듈 사용 : (외부 페이지의 html에서 원하는 부분 출력)🥕</summary>
<div markdown="1">  
    
``` javascript
//cheerio모듈
const request1 = require('request');
const cheerio = require('cheerio');
request1("https://naver.com",(error,response, body)=>{
    const $ = cheerio.load(body);
    console.log($("strong.new").text());
})
```
</details>
    </br>    
<hr>
<hr>
    
## [5월 11일]
>11주차  

•모질라
https://developer.mozilla.org/ko/docs/Web/JavaScript

•언더 스코어
https://underscorejs.org/

• Date 객체 사용해보기

``` javascript
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
```
• Array 객체 사용해보기

``` javascript
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

```
• 🔼 이어서 push와 pop 사용해보기

``` javascript
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
```
• Array의💨map || forEach || filter 메서드

``` javascript
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
```
• sort함수로 내림차순 정렬 하기<br />
① js 파일 다운 받기<br />
② html에서 연결해주기<br />
③ 사용 문법 쓰기 <br />
_.sortBy(배열,(객체) => 객체.정렬하고 싶은 기준);


``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
<script src="underscore-umd-min.js"></script>

    <script>
        let foo2 = [
             {name: '고구마',price: 1000},
             {name: '감자',price: 500},
             {name: '바나나',price: 1500}
        ];
        const bar = _.sortBy(foo2, (item) => item.price);
        console.log(bar);
    </script>

```
## [5월 4일]
>10주차  

<br />
• 프로토 타입 : 생성자 함수로 만든 객체는 프로토타입 이라는 공간에 메서드를 지정해서 모든 객체가 공유 하도록 함  <br />

``` javascript
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

```
<br />
• NaN,"",0,null : false로 반환되지만 실제로는 값이 들어 잇음<br /><br />
• 표준 내장 객체 : 자주 쓰는 속성과 메서드들을 말함 <br />
Number 객체, <br /> 
String 객체,  <br />
Date 객체,<br />
Array 객체 등등 (MDN 사이트 참고)<br /><br />

• 두 가지 변수 선언의 차이점

``` javascript
let number = new Number(342);
let number2 = 453;

console.log(typeof number); //object 출력
console.log(typeof number2); //자료형 number 출력
```

• 기본 자료형에 프로토타입의 메소드를 넣어보기 <br />

``` javascript

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


```
• Number 객체의 메소드<br />


``` javascript

//Number 내장 메서드 사용해보기
let foo2 = 25.123;
console.log(foo2.toFixed(1)); /* 결과: 25.1 */
console.log(foo2.toFixed(5)); /* 결과: 25.12300 0을붙임 */

```
• 생성자 함수에 속성과 메서드 추가 해보기<br />

``` javascript

//생성자 함수에 속성과 메서드 추가 해보기
function Construtor(){ //Constructor는 키워드가 아님 이름임
 //let foo3 = 273;
 //function bar(){};
}
Construtor.foo3 = 273; //속성 추가
Construtor.bar = function () {}; //함수 추가

console.log(Construtor.foo3);
console.log(Construtor.bar);

```
• Numer 생성자 함수의 속성<br />


``` javascript

//Numer 생성자 함수의 속성
let foo4 = Number.MAX_VALUE;
let bar1 = Number.MAX_VALUE+1; //foo4와 같은 결과값을 지님

console.log(foo4);
console.log(bar1);
```

• String 객체의 메서드 사용해보기<br />
※ String 객체의 메서드들은 원본객체를 바꾸지 않음 단 리턴해주기만 한다 즉 받아줄 그릇이 필요함


``` javascript

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

```

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
• JSON+배열<br />

``` javascript
let products = [
        {name: '사과', price: 1200}/*한덩이*/,
        {name: '배', price: 1500},
        {name: '자두', price: 1000},
        {name: '딸기', price: 2000},
        {name: '바나나', price: 1500},

    ];

    function printProduct(obj){
        console.log(`${obj.name} - ${obj.price} `);

    }

    for(let i of products ){ 
        printProduct(i);
    }
```
• 생성자 함수 : JSON 형태로 키와 키값을 초기화 시킨다<br />

``` javascript
//js에선 생성자 사용시 JSON 형태로 초기화됨

    function products2(name , price){
        this.name = name;
        this.price = price;
    }

    let obj2 = new products2("바나나", 5000);

    console.log(obj2);
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
``` javascript
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
