const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf-8');
const lines = fileContent.split(/\r?\n/);


function getLeftNumberIndex(line){
    let left=-1;
    for(let i=0;i<line.length;i++){
        if(line[i]>='0' && line[i]<='9') {
            left=i;
            break;
        }
    }
    return left;
}

function getRightNumberIndex(line){
    let right=-1;
    for(let i=line.length-1;i>=0;i--){
        if(line[i]>='0' && line[i]<='9') {
            right=i;
            break;
        }
    }
    return right;
}

function part1(){
    let ans=0;
    for(const line of lines){

        const li=getLeftNumberIndex(line);
        const ri=getRightNumberIndex(line);
        let num=0;
        if(li!=-1 && ri!=-1) num=(line[li]-'0')*10 + (line[ri]-'0'); 
        ans+=num;
    }
    return ans;
}

// console.log(part1())
function part2(){

    let ans=0;
    const map={
        "one":1,
        "two":2,
        "three":3,
        "four":4,
        "five":5,
        "six":6,
        "seven":7,
        "eight":8,
        "nine":9,
        "zero":0
    }

    for(const line of lines){

        const regexleft = /(zero|one|two|three|four|five|six|seven|eight|nine)/i;
        const regexright =/(orez|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin)/i;
        let left=0,right=0;

        let li=getLeftNumberIndex(line);
        let strl='';
        if(li==-1)  strl=line;
        else strl=line.substring(0,li);
        const matchl=strl.match(regexleft)
        let ri=getRightNumberIndex(line);
        let strr='';
        if(ri==-1) strr=line.split('').reverse().join('');
        else strr=line.substring(ri+1,line.length).split('').reverse().join('');
        const matchr=strr.match(regexright)

        if(matchl) left=map[matchl[0]];
        else if(li!=-1) left=line[li]-'0';

        if(matchr) right=map[matchr[0].split('').reverse().join('')];
        else if(ri!=-1) right=line[ri]-'0';

        // console.log(left,right ,"heh", strl,strr)
        // console.log(matchl,matchr)
        ans+=(left*10)+right;


    }
    return ans;
}
console.log(part1())
console.log(part2())



