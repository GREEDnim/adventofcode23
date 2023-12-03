const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf-8');
let lines = fileContent.split(/\r?\n/);

function isvalid(lno,si,ei){
   lno=parseInt(lno)
   si=parseInt(si)
   ei=parseInt(ei)
    if(lno-1>=0){
        for(let i=si-1;i<=ei+1;i++){

            if( i>=0 && i<lines[lno-1].length && !isNumber(lines[lno-1][i]) && !isDot(lines[lno-1][i])) return true;
        }
    }
    if(lno+1<lines.length){
        for(let i=si-1;i<=ei+1;i++){
            if( i>=0 && i<lines[lno+1].length && !isNumber(lines[lno+1][i]) && !isDot(lines[lno+1][i]) )  {
                return true;
            }
        }
    }
    if(si-1>=0 && !isNumber(lines[lno][si-1]) && !isDot(lines[lno][si-1]) )  return true;
    if(ei+1<lines[lno].length && !isNumber(lines[lno][ei+1]) && !isDot(lines[lno][ei+1]) ) return true;
    return false;
}

function isNumber(c){
    return c>='0' && c<='9';
}
function isDot(c){
    return c=='.'
}

let sum=0;
for(let idxline in lines){
    let line=lines[idxline];

    let ns=-1,ne=-1;
    let num=0;
    for(let idxchar in line){
        if(isNumber(line[idxchar])){
            if(ns==-1) ns=idxchar;
            ne=idxchar;

            num=(num*10)+(parseInt(line[idxchar]));

            if (isNumber(line[idxchar]) && idxchar==line.length-1){
                if(isvalid(idxline,ns,ne))  sum+=parseInt(num);
                ns=-1;ne=-1;num=0;
            }

        }
        else if(num!=0){

            if(isvalid(idxline,ns,ne)) sum+=parseInt(num);
            ns=-1;ne=-1;num=0;
        }

    }
}
console.log(parseInt(sum))