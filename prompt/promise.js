
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

let is_shop_open=true
let order = ( time, work ) => {

    return new Promise( ( resolve, reject )=>{
      if( is_shop_open ){
        setTimeout(()=>{
          resolve( work() )
         }, time)
      }
      else{
        reject( console.log("Our shop is closed") )
      }
    })
  }

 order(2000,()=>{console.log(`${stocks.Fruits[0]} was selected..`);})

.then(()=>
{
    return order(2000,()=>{console.log(`production was selected..`);})
})

 .then(()=>
{
  return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
})

.then(()=>
{
  return order(1000, ()=>console.log("start the machine"))
})

.then(()=>
{
  return order(2000, ()=>console.log(`ice cream placed on ${stocks.holder[1]}`))
})

.then(()=>
{
  return order(3000, ()=>console.log(`${stocks.toppings[0]} as toppings`))
})

.then(()=>
{
  return order(2000, ()=>console.log("Serve Ice Cream"))
}) 

.catch(()=>{
    console.log("Customer left")
  })



// const prompt=require('prompt-sync')()
// let a=parseInt(prompt("Enter Number: "))
// let b=Array.from(String(a), Number);

// let start=(b)=>
// {
//     let c=0
//     for(i=0;i<b.length;i++)
//     {
//        c=c+b[i]
//     }
//     console.log(c)
//     let d=Array.from(String(c), Number);
//     return check(d)
// }
// let check=(x)=>{
//     if(x.length>=2)
//     {
//         start(x)
//     }
// }
// let find = (number, sum) => 
// {
//     new Promise((resolve,reject)=>{
//         if(number==number)
//         {
//             resolve(sum(number))
//         }
//         else{
//             reject(console.log('Not founded!!!'))
//         }
//     })
// }
// find(b,start)





// let sum = (number1) => {
//     while (number1 > 9) {
//         console.log(number1);
//         let sum1 = 0;
//         while (number1 != 0) {
//             sum1 = sum1 + number1 % 10;
//             number1 = parseInt(number1 / 10);
//         }
//         number1 = sum1;
//     }
//     console.log()
//     return number1;
// }
// let total = (number, work) => {

//     return new Promise((resolve, reject) => {

//         if (number > 0) {
//             resolve(console.log(work(number)));
//         }
//         else {
//             reject(console.log(number));
//         }
//     })
// }

// let number = 7069182001;
// total(number, sum);