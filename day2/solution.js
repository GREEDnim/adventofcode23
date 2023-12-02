const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf-8');
const lines = fileContent.split(/\r?\n/);

let match=1;
let ans=0;
let blue=14;
let green=13;
let red=12;


let ans2=0;
for(let line of lines){

    line=line.replace(/[,;]/g, "")
    arr=line.split(" ");
    let r=0,b=0,g=0;
    for(let ind in arr){
        if(arr[ind]=='red'){
            r=Math.max(parseInt(arr[ind-1]),r);
        }
        if(arr[ind]=='blue'){
            b=Math.max(parseInt(arr[ind-1]),b);
        }
        if(arr[ind]=='green'){
            g=Math.max(parseInt(arr[ind-1]),g);
        }
    }

    if(r<=red && b<=blue && g<=green) ans+=match;
    match++;


    // part two
    if(r==0) r=1;
    if(b==0) b==1;
    if(g==0) g==1;


    ans2+=(r*b*g);

}

console.log(ans)
console.log(ans2)

