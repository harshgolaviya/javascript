const prompt=require('prompt-sync')()

// let stocks = {
//     Fruits : ["strawberry", "grapes", "banana", "apple"],
//     liquid : ["water", "ice"],
//     holder : ["cone", "cup", "stick"],
//     toppings : ["chocolate", "peanuts"],
//  };

// let is_shop_open=true
// let order = ( time, work ) => {

//     return new Promise( ( resolve, reject )=>{
//       if( is_shop_open ){
//         setTimeout(()=>{
//           resolve( work() )
//          }, time)
//       }
//       else{
//         reject( console.log("Our shop is closed") )
//       }
//     })
//   }

//  order(2000,()=>{console.log(`${stocks.Fruits[0]} was selected..`);})

// .then(()=>
// {
//     return order(2000,()=>{console.log(`production was selected..`);})
// })

//  .then(()=>
// {
//   return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
// })

// .then(()=>
// {
//   return order(1000, ()=>console.log("start the machine"))
// })

// .then(()=>
// {
//   return order(2000, ()=>console.log(`ice cream placed on ${stocks.holder[1]}`))
// })

// .then(()=>
// {
//   return order(3000, ()=>console.log(`${stocks.toppings[0]} as toppings`))
// })

// .then(()=>
// {
//   return order(2000, ()=>console.log("Serve Ice Cream"))
// }) 

// .catch(()=>{
//     console.log("Customer left")
//   })



/*
    promises are "special" javascript objects
    promises are solution for "callback hell"
    "producer" will create the "promises"
    "consumer" will consume the "promises"
    "Promise" is the class, used to create the "promises"
    we can consume Promises in 2 ways
    1) then()
    2) async & await keywords
*/
// ------------------------------------------------------------------------
   
    

    // let promise1 = new Promise((resolve,reject)=>{
    //     resolve("promises");
    // });
    // // console.log(typeof (promise1))
    // promise1.then((posRes)=>{
    //     console.log("resole : "+posRes);
    // },(errRes)=>{
    //     console.log("reject :"+errRes);
    // });
    // welcome to promises



    //    let op=new Promise((resolve,reject)=>{
    //          a=parseInt(prompt("Enter Number : "))
    //          if(a==1)
    //          {
    //             resolve(a)
    //          }
    //          else
    //          {
    //               reject("Error !")
    //          }
    //    })
    // op.then((res)=>{
    //     console.log(res)
    // },(rej)=>{
    //     console.log(rej)
    // })




    // console.log("Big Power")
    // let promise1 = new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         resolve("Responsibilities");
    //     },5000);
    // });
    // promise1.then((posRes)=>{
    //     console.log("Big "+posRes);
    // },(errRes)=>{
    //     console.log(errRes);
    // });
    // console.log("With ")   
    // Big Power
    // With     
    // Big Responsibilities




    // let promise1 = new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         resolve("Grace");
    //     },0);
    // });
    // let promise2 = new Promise((resolve,reject)=>{
    //     resolve("Your");
    // });
    // promise1.then((posRes)=>{
    //     console.log(posRes);
    // },(errRes)=>{
    //     console.log(errRes);
    // });
    // promise2.then((posRes)=>{
    //     console.log(posRes);
    // },(errRes)=>{
    //     console.log(errRes);
    // });
    // Your 
    // Grace



    //  let promise1 = new Promise((resolve,reject)=>{
    //  resolve("Hello_1");
    //  });
    //  let promise2 = new Promise((resolve,reject)=>{
    //  resolve("Hello_2");
    //  );
    //  let promise3 = new Promise((resolve,reject)=>{
    //  resolve("Hello_3");
    //  });

    // promise1.then((posRes)=>{
    //     console.log(posRes);
    // },(errRes)=>{
    //     console.log(errRes);
    // });
    // promise2.then((posRes)=>{
    //     console.log(posRes);
    // },(errRes)=>{
    //     console.log(errRes);
    // });
    // promise3.then((posRes)=>{
    //     console.log(posRes);
    // },(errRes)=>{
    //     console.log(errRes);
    // });
    // Hello_1
    // Hello_2
    // Hello_3

        
    // Promise.all([promise1,promise2,promise3]).then((posRes)=>{
    //     console.log(posRes);
    // },(errRes)=>{
    //     console.log(errRes);
    // });

    // [ 'Hello_1', 'Hello_2', 'Hello_3' ]




    // Promise.race([promise1,promise2,promise3]).then((posRes)=>{
    //     console.log(posRes);
    // },(errRes)=>{
    //     console.log(errRes);
    // });
    //Hello_1




    // let promise1 = new Promise((resolve,reject)=>{
    //     resolve("Hello_1");
    // });
    // let promise2 = new Promise((resolve,reject)=>{
    //     resolve("Hello_2");
    // });
    // let promise3 = new Promise((resolve,reject)=>{
    //     reject("Error");
    // });




    // Promise.all([promise1,promise2,promise3]).then((posRes)=>{
    //     console.log(posRes);
    // },(errRes)=>{
    //     console.log(errRes);
    // });




    // Promise.allSettled([promise1,promise2,promise3]).then((posRes)=>{
    //     console.log(posRes);
    // },(errRes)=>{
    //     console.log(errRes);
    // });

// --------------------------------------------------------------------------------------


    // let promise1 = new Promise((resolve,reject)=>{
    //     resolve("Hello");
    // });
    // async function my_fun(){
    //     let res = await promise1;
    //     console.log(res);
    // };
    // my_fun();               //Hello


    // function add(num){
    //     return new Promise((resolve,reject)=>{
    //         resolve(num+5);
    //     })
    // };
    // function sub(num){
    //     return new Promise((resolve,reject)=>{
    //         resolve(num-3);
    //     })
    // };
    // function mul(num){
    //     return new Promise((resolve,reject)=>{
    //         resolve(num*2);
    //     })
    // };
    // function div(num){
    //     return new Promise((resolve,reject)=>{
    //         resolve(num/2-2);
    //     })
    // }
    // async function consume(){
    //     let addRes = await add(5);
    //     let subRes = await sub(addRes);
    //     let mulRes = await mul(subRes);
    //     let divRes = await div(mulRes);
    //     console.log(addRes, subRes, mulRes, divRes);
    // };
    // consume();
    // 10 7 14 5









// let b=Array.from(String(parseInt(prompt("Enter Number: "))), Number);
// let a1=[9]

// let start=(b)=>
// {
//     let c=0
//     for(i=0;i<b.length;i++)
//     {
//        c=c+b[i]
//     }
//     console.log(c)
//     let d=Array.from(String(c), Number);
//     if(c>9)
//     {
//         start(d)
//     }
// }
// let find = (number, sum) => 
// {
//     new Promise((resolve,reject)=>{
//         if(number>=a1)
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