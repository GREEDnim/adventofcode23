const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf-8');
let lines = fileContent.split(/\r?\n/);

function isNumber(c){
    return c>='0' && c<='9';
}
function getStarIndices(){
    let stars=[]
    for(let lineIndex in lines ){
        for(let charIndex in lines[lineIndex]){
            if(lines[lineIndex][charIndex]=='*') stars.push([lineIndex,charIndex]);
        }
    }
    return stars;
}

function getNumbersAssociatedWithStar(row,col){

    let numbers=[];
    row=parseInt(row);
    col=parseInt(col);
    if(topLeft(row,col)!=0) numbers.push(topLeft(row,col));
    if(top(row,col)!=0) numbers.push(top(row,col));
    if(topRight(row,col)!=0) numbers.push(topRight(row,col));

    if(left(row,col)!=0) numbers.push(left(row,col));
    if(right(row,col)!=0) numbers.push(right(row,col));

    if(bottomLeft(row,col)!=0) numbers.push(bottomLeft(row,col));
    if(bottom(row,col)!=0) numbers.push(bottom(row,col));
    if(bottomRight(row,col)!=0) numbers.push(bottomRight(row,col));

    return numbers;

}

function topLeft(row,col){
    if( row-1<0 || col-1<0 || !isNumber(lines[row-1][col-1])) return 0;

    let left=col-1;
    let right=col-1;
    while(left>=0 && isNumber(lines[row-1][left])) left--;
    while(right<lines[row-1].length && isNumber(lines[row-1][right])) right++;

    return parseInt(lines[row-1].substring(left+1,right));
}

function top(row,col){
    if( row-1<0 || col<0 || !isNumber(lines[row-1][col]) ) return 0;
    if( row-1>=0 && col-1>=0 && isNumber(lines[row-1][col-1])) return 0;

    let left=col;
    let right=col;
    while(right<lines[row-1].length && isNumber(lines[row-1][right])) right++;

    return parseInt(lines[row-1].substring(left,right));
}

function topRight(row,col){

    if( row-1<0 || col+1>=lines[row-1].length || !isNumber(lines[row-1][col+1])) return 0;
    if( row-1>=0 && col>=0 && isNumber(lines[row-1][col]) ) return 0;

    let left=col+1;
    let right=col+1;
    while(right<lines[row-1].length && isNumber(lines[row-1][right])) right++;

    return parseInt(lines[row-1].substring(left,right));
}

function bottomLeft(row,col){
    if( row+1<0 || col-1<0 || !isNumber(lines[row+1][col-1])) return 0;

    let left=col-1;
    let right=col-1;
    while(left>=0 && isNumber(lines[row+1][left])) left--;
    while(right<lines[row+1].length && isNumber(lines[row+1][right])) right++;

    return parseInt(lines[row+1].substring(left+1,right));
}

function bottom(row,col){
    if( row+1<0 || col<0 || !isNumber(lines[row+1][col]) ) return 0;
    if( row+1>=0 && col-1>=0 && isNumber(lines[row+1][col-1])) return 0;

    let left=col;
    let right=col;
    while(right<lines[row+1].length && isNumber(lines[row+1][right])) right++;

    return parseInt(lines[row+1].substring(left,right));
}

function bottomRight(row,col){

    if( row+1<0 || col+1>=lines[row-1].length || !isNumber(lines[row+1][col+1])) return 0;
    if( row+1>=0 && col>=0 && isNumber(lines[row+1][col]) ) return 0;

    let left=col+1;
    let right=col+1;
    while(right<lines[row+1].length && isNumber(lines[row+1][right])) right++;

    return parseInt(lines[row+1].substring(left,right));
}

function left(row,col){
    if(col-1<0 || !isNumber(lines[row][col-1])) return 0;

    let right=col-1;
    let left=col-1;

    while(left>=0 && isNumber(lines[row][left]))left--;

    return parseInt(lines[row].substring(left+1,right+1));
}

function right(row,col){
    if(col+1>=lines[row].length || !isNumber(lines[row][col+1])) return 0;

    let left=col+1;
    let right=col+1;

    while(right<lines[row].length && isNumber(lines[row][right])) right++;
    return parseInt(lines[row].substring(left,right));

}

let ans=0;
stars=getStarIndices();
for(let star of stars){
    const nums=getNumbersAssociatedWithStar(star[0],star[1]);
    if(nums.length==2){
        ans+=(nums[0]*nums[1]);
    }
}
console.log(ans)