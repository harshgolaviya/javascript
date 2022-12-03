const prompt=require('prompt-sync')()

// let stocks = {
//     Fruits : ["strawberry", "grapes", "banana", "apple"],
//     liquid : ["water", "ice"],
//     holder : ["cone", "cup", "stick"],
//     toppings : ["chocolate", "peanuts"],
//  };

// let order=(f_name,call_production)=>{
//     setTimeout(()=>{
//         console.log(`${stocks.Fruits[f_name]} was selected...`)
//         call_production()
//     },2000)
// }
// let production=()=>{
//     setTimeout(()=>{
//         console.log(`Production was started...`)
//         setTimeout(()=>{
//             console.log(`Cute the fruit...`)
//             setTimeout(()=>{
//                 console.log(`Add water and ice...`)
//                 setTimeout(()=>{
//                     console.log(`Machine was started...`)
//                     setTimeout(()=>{ 
//                         console.log(`Container 
//                         ${stocks.holder[0]} selected...`)
//                         setTimeout(()=>{
//                             console.log(`Toppings ${stocks.toppings[0]} selected...`)
//                             setTimeout(()=>{
//                                 console.log(`Serve ice cream...`)
//                             },2000)
//                         },3000)
//                     },2000)
//                 },1000)
//             },1000)
//         },2000)
//     },1000)
// }
// order(0,production)




// let add=(num,callback)=>{
//     return callback(num+10,false)
// }
// let sub=(num,callback)=>{
//     return callback(num-5,true)
// }
// let mul=(num,callback)=>{
//     return callback(num*2,false)
// }
// let div=(num,callback)=>{
//     return callback(num/3,false)
// }

// add(10,(address,error)=>{
//     if(!error){
//         sub(address,(subt,error)=>{
//             if(!error){
//                 mul(subt,(multi,error)=>{
//                     if(!error){ 
//                         div(multi,(divt,error)=>{
//                             if(!error){
//                                 console.log(divt);
//                             }
//                         })
//                     }
//                 })
//             }
//             else{
//                 console.log('Sorry');
//             }
//         })
//     }
//     else{
//         console.log('Sorry!!');
//     }
// })



let a=parseInt(prompt("Enter Number: "))
let b=Array.from(String(a), Number);

let start=(b)=>
{
    let c=0
    for(i=0;i<b.length;i++)
    {
       c=c+b[i]
    }
    console.log(c)
    let d=Array.from(String(c), Number);
    // console.log(d)
    return check(d)
}
let check=(x)=>{
    // console.log(typeof d)
    if(x.length>=2)
    {
        start(x)
    }
}
let find = (number, callback) => 
{
    return callback(number);
}
find(b,start)



// let sum = (number1) => 
// {
//     let sum1 = 0;
//     console.log(number1);
//     while (number1 != 0) 
//     {
//         sum1 = sum1 + number1 % 10;
//         number1 = parseInt(number1 / 10);
//     }
//     return check(sum1);
// }

// let check = (value) => 
// {
//     if (value <= 9) {
//         return value;

//     }
//     else {
//        return sum(value);
//     }
// }

// let total = (number, callback) => 
// {
//     return callback(number);
// }

// let number = 123456;
// console.log(total(number, sum));






