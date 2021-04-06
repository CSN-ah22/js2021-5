let foo = [10, 20, 30, 40, 50];

for(let i in foo){
    console.log(`${i}번때 요소는 ${foo[i]} 이다.`)
}

for(let item of foo) {
    console.log(item);
}
console.log(" ");
//삼각형 출력 1
let star = "";
for(let i=0; i<10; i++){ //consol.log로 하면 안 된다
    for(let j=0; j<i+1; j++){
        star = star+"*";
    }
    star = star + "\n";
}
console.log(star);

//삼각형 출력 2
let star2 = "";
for(let i = 0; i< 10; i++){// 줄
 for(let space=0; space<10-i; space++){ //공백
    star2 = star2+" ";
 }
    
    for(let j=0; j<i+1; j++){
        star2 = star2+"*";     
 }
 star2 = star2+"\n";
}
console.log(star2);

//삼각형 출력 3
let star3 = "";
for(let i = 0; i< 10; i++){// 줄
   for(let j = 0; j<10-i; j++){
       star3 = star3+" ";
   }
   for(let star = 0; star<i+1; star++){
       star3 = star3+"*";
   }
   for(let star = 1; star<i+1; star++){
       star3 = star3+"*";
   }
   star3 += "\n";
   }
   console.log(star3);

   //삼각형 출력 4 마름모 실패..
   let star4 = "";
   for(let i=0; i<3; i++){ //줄
       for(let star=5; star<0; star-2){
           star4=star4+"*";
       }
    star4 += "\n";
    for(let j=0; j<i; j++){ 
        star4 = star4+" ";
    }
   }
   console.log(star4);

//join실습
   j = [0, 1, 2, 3, 4];
   j = j.join("/");
   console.log(j);

//splice 실습
   foo = ["a", "b", "c", "d", "e"];
   bar = foo.splice(2,2); 
//    bar = foo.splice(2,2, 100, 0.5, "문자"); 세번째 부턴 잘라진 곳에 추가함
   console.log(foo); //잘라내고 남은건 여기에
   console.log(bar); //잘라낸건 여기에
