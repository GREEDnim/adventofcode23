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
let cardno:number=1;
let incrementor:number=0;
let map: Map<number, number> = new Map<number,number>();
for(let line of lines){
    
    let linearray:string[]=line.split(/[:|]/);

    const winningNumbers:string[]=linearray[1].trim().split(/\s+/)
    const ourNumbers:string[]=linearray[2].trim().split(/\s+/)

    const match:string[] = ourNumbers.filter((ele:string)=>ispresent(ele,winningNumbers))

    incrementor +=map.get(cardno) ?? 0;
    let curcards:number = incrementor+1;
    
    map.set(cardno+1,(map.get(cardno+1)??0)+curcards);
    map.set(cardno+match.length+1,(map.get(cardno+match.length+1)??0)-curcards);

    ans+=curcards;
    cardno++;
}
console.log(ans)

