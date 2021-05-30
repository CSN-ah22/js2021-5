/* ⚽EXPRESS 모듈을 사용한 서버 생성과 실행 */

//🌺모듈 객체 생성
const { response } = require('express');
const express = require('express');
const { request } = require('http');

// //🌺서버 생성
const app = express();

// //🌺서버 접속 요청이 들어왔을때 응답 처리 = 이벤트 처리
// app.use((request,response)=>{
//     response.send('<h1>Hello express</h1>');//화면에 출력
// });

/* //🌺서버를 실행한다 
app.listen(52273,()=>{
    console.log('Server running at http://127.0.0.1:52273');
}) */


/* ⚽페이지 라우팅 */

/* app.get('/page/:id', (request, response)=>{//사용자가 url끝에 /page/500 을 붙여서 요청하면 결과 창을 아래의 코드처럼 나타냄
    const id = request.params.id;

    response.send(`<h1> ${id} Page</h1>`);
}); */



/* ⚽Content-Type */

/* //모듈 추출
const fs = require('fs');

app.get('/image',(request, response)=>{
    fs.readFile('image.png',(error,data)=>{
        response.type('image/png');
        response.send(data);
    })
})

//🌺서버를 실행한다 
app.listen(52273,()=>{
    console.log('Server running at http://127.0.0.1:52273');
}); */


/* ⚽리다이렉트 - 300번대의 상태코드 */

/* //🌺request 이벤트 리스너를 설정합니다
app.get('*', (request, response)=>{
    response.redirect('http://naver.com');
});

//🌺서버를 실행한다
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
}); */

/* ⚽morgan 미들웨어 */

/* //🌺모듈을 추출합니다 
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
}); */

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