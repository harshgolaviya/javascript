// const prompt=require("prompt-sync")();
// let a=parseInt(prompt("Enter a : "));
// console.log(a);


const { findSourceMap } = require("module");
const { exit } = require("process");
const prompt=require("prompt-sync")();

let arr=[];
function first_in()
{
    
    arr.unshift(parseInt(prompt("Enter first insert : "))); 
    console.log(arr);
}

function last_in()
{
    
    arr.push(parseInt(prompt("Enter last insert : ")));
    console.log(arr);
}
function last_delete()
{
    
    arr.pop();
    console.log(arr);
}
function first_delete()
{
    
    arr.shift();
    console.log(arr);
}

while(1)
{
    console.log(`1. First insert
     2. Last  insert
     3. First delete
     4. last  delete
     0. Exit `);
    let  ch=parseInt(prompt("Enter your choice : "));
  switch (ch)
  {
    case 1:
    first_in();
        break;
    case 2:
        last_in();
        break;
    case 3:
        first_delete();
        break;
    case 4:
        last_delete();
        break;
    case 0:
        exit(0);
    break;
    default:
        break;
  }
}

