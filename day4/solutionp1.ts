const fs = require('fs');
const fileContent: string = fs.readFileSync('input.txt', 'utf-8') as string;
let lines: string[] = fileContent.split(/\r?\n/);

function ispresent(ele:string,arr:string[]){
    for(let x of arr) {
        if(x==ele) return true;
    }
    return false;
}

let ans:number=0;
for(let line of lines){
    let linearray:string[]=line.split(/[:|]/);

    const winningNumbers:string[]=linearray[1].trim().split(/\s+/)
    const ourNumbers:string[]=linearray[2].trim().split(/\s+/)

    const match:string[] = ourNumbers.filter((ele:string)=>ispresent(ele,winningNumbers))

    if(match.length>0) ans+=(1<<(match.length-1))
}

console.log(ans)
