const os = require('os');
console.log(os.hostname());
console.log(os.totalmem());

const url = require('url');
console.log(url.parse("https://naver.com"));

const fs = require('fs');
const file = fs.readFileSync('textfile.txt');
console.log(file);
console.log(file.toString());

const fs1 = require('fs');
fs1.readFile('textfile.txt',(error,file)=>{
    console.log(file);
    console.log(file.toString());
})

const fs2 = require('fs');

fs2.writeFileSync('output.txt','안녕하쇼');
console.log("파일 쓰기 완료");

const fs3 = require('fs'); 

fs3.writeFile('output.txt','안녕하쇼',(error) =>{
console.log("파일 쓰기 완료");
});

const fs4 = require('fs');

try{
const file5 =fs4.readFileSync('none.txt');
console.log(file5);
console.log(file5.toString());
}catch(exception){
    console.log("파일을 읽어들이는데 문제가 생김");
}

 const fs6 = require('fs');
fs6.readFile('none.txt',(error,file)=>{
    if(error){
        console.log("예외 발생");
        console.log("🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺\n");
    }else{
    console.log(file);
    console.log(file.toString());
    }
})

//request모듈
const request = require('request');

request("https://naver.com",(error,response, body)=>{
    console.log(body);
});

//cheerio모듈
const request1 = require('request');
const cheerio = require('cheerio');
request1("https://naver.com",(error,response, body)=>{
    const $ = cheerio.load(body);
    console.log($("strong.new").text());
})