// 6. Write a JS function that input a number and return square & qube of number in aray. 



const { captureRejectionSymbol } = require('prompt');

const prompt=require('prompt-sync')();

function Number(x)
{
      square=[]
      cube=[]
      
      for(let i=0;i<x.length;i++)
      {
        square.push(x[i]*x[i]);
        cube.push(x[i]*x[i]*x[i])
      }
      return {"square" : square ,
       "Cube" : cube}
//       return console.log("Sqare =",sqare,`
// Cube =`,cube)
      
}
let n=(prompt("Enter value :"))
console.log(Number(n));



// let number=()=>{
//   square=[]
//   cube=[]
  
//   for(let i=0;i<x.length;i++)
//   {
//     square.push(x[i]*x[i]);
//     cube.push(x[i]*x[i]*x[i])
//   }
//   return {"square" : square ,
//    "Cube" : cube}
// //       return console.log("Sqare =",sqare,`
// // Cube =`,cube
// }
// let n=(prompt("Enter value :"))
// console.log(Number(n));