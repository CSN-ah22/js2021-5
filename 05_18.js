const os = require('os');
console.log(os.hostname());
console.log(os.totalmem());

const url = require('url');
console.log(url.parse("https://naver.com"));

// const fs = require('fs');
// const file = fs.readFileSync('textfile.txt');
// console.log(file);
// console.log(file.toString());

// const fs = require('fs');
// fs.readFile('textfile.txt',(error,file)=>{
//     console.log(file);
//     console.log(file.toString());
// })

// const fs = require('fs');

// fs.writeFileSync('output.txt','안녕하쇼');
// console.log("파일 쓰기 완료");

// const fs = require('fs');

// fs.writeFile('output.txt','안녕하쇼',(error) =>{
// console.log("파일 쓰기 완료");
// });

// const fs = require('fs');

// try{
// const file1 =fs.readFileSync('none.txt');
// console.log(file);
// console.log(file.toString());
// }catch(exception){
//     console.log("파일을 읽어들이는데 문제가 생김");
// }

const fs = require('fs');
fs.readFile('none.txt',(error,file)=>{
    if(error){
        console.log("예외 발생");
        console.log("🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺\n");
    }else{
    console.log(file);
    console.log(file.toString());
    }
})

/* //request모듈
const request = require('request');

request("https://naver.com",(error,response, body)=>{
    console.log(body);
}) */

//cheerio모듈
const request1 = require('request');
const cheerio = require('cheerio');
request1("https://naver.com",(error,response, body)=>{
    const $ = cheerio.load(body);
    console.log($("strong.new").text());
})