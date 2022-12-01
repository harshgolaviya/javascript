// //21-11-22

// function harsh(n)
// {
//     console.log(`harsh golaviya....${n}`)
// }
// let o=harsh(10);

// 22/11/2022

// //     function
// //     ****
// //         business logic called as function
// //         functions are used to reuse the business logic
// //         we have following types of functions upto "ES13"
// //         1) named functions
// //         2) anonymous functions
// //         3) rest parameters in functions
// //         4) default parameters in functions
// //         5) optional parameters in functions
// //         6) generators
// //         7) constructor functions
// //         8) IIFE  (Immidiate Invokable functional Expressions)  

// named function

//     the function with the particular name called as named function
//     Syntax

//     1) function definition
//     2) function calling

// function definition :-
//    function functionname(arg1,arg2,arg3,arg4,......argn){
//        business logic
//    }

// function calling :-
//    functionname(param1,param2,param3,param4,.....paramn);





// function fun_one(){
//     return "welcome";
// }
// console.log( fun_one() ); // ->Welcome


// function fun_one(arg1, arg2, arg3) {
//   console.log(arg1, arg2, arg3);
// }
// fun_one("Angular13","NodeJS","MongoDB");  // Angular13 NodeJS MongoDB
// fun_one("ReactJS","NodeJS");              // ReactJS NodeJS undefined
// fun_one();                                // undefined undefined undefined
// fun_one(undefined, "NodeJS");             // undefined NodeJS undefined
// fun_one(null, null, null);                // null null null
// fun_one(null, " ",null);                 // null   null
// fun_one(null, {},[]);                   // null {} []

// function fun_zero() {
//   console.log("inside  fun_zero()");
//   return "Hello";
// }
// function fun_one() {
//   console.log("inside  fun_one()");
//   return fun_zero();
// }
// function fun_two() {                   // inside  fun_two()
//   console.log("inside  fun_two()");    // inside  fun_one()
//   return fun_one();                    // inside  fun_zero()
// }                                      // Hello
// console.log(fun_two());


// function fun_one() {
//     return "Hello";
//   }
//   function fun_two() {
//     return fun_one;
//   }  
//   console.log(fun_two()());            // Hello
  

  // function fun_one(arg1, arg2, arg3) {
  //   console.log(arg1(), arg2(), arg3());
  //   // console.log(arg1, arg2, arg3);
  // }
  // function fun_two() {
  //   return "Hello_1";
  // }
  // function fun_three() {
  //   return "Hello_2";
  // }
  // function fun_four() {
  //   return "Hello_3";
  // }
  // fun_one(fun_two, fun_three, fun_four);     // Hello_1 Hello_2 Hello_3

// -------------------------------------------------------------------------------------------------------------------

  //
    
  //     anonymous functions
  //     *******
  //         - the function without name called as anonymous function
  //         - anonymous functions also called as "arrow" functions/"lamda" functions/"callback" functions
  //         - we will represent arrow functions with "=>"
  //         - "=>" introduced in ES6
  // Syntax:
  // **
  //     1) function definition
  //     2) function calling

  //     function definition :-
  //     var/let/const variablename = (arg1,arg2,arg3,....argn)=>{
  //         //business logic
  //     }

  //     function calling :-
  //     variablename(param1,param2,param3,.....paramn);
  

  // let fun_one = () => "welcome to arrow functions";
  // console.log(fun_one());                             // welcome to arrow functions
  

  // let fun_one = () => "hello";
  // console.log(fun_one());                             // hello
  

  // let fun_one = (arg1, arg2, arg3) => {
  //   console.log(arg1, arg2, arg3);
  // };
  // fun_one("Angular13", "NodeJS", "MongoDB");          // Angular13 NodeJS MongoDB
  // fun_one("ReactJS", "NodeJS", "MongoDB");            // ReactJS NodeJS MongoDB
  // fun_one("VueJS", "NodeJS", "MongoDB");              // VueJS NodeJS MongoDB
  // fun_one();                                          // undefined undefined undefined
  // fun_one(undefined, "Hello_2");                      // undefined Hello_2 undefined
  // fun_one(null, null, null);                          // null null null
  

  // let fun_one = () => {
  //   return "Hello";
  // };
  // console.log(fun_one);                              // [Function: fun_one]
  // console.log(fun_one());                            // Hello  
  
  // let fun_one = () => {
  //   console.log('return 1')
  //   return () => {
  //     console.log('return 2')
  //     return () => {
  //       return "Hello";
  //     };
  //   };                                              // return 1
  // };                                                // return 2
  // console.log(fun_one()()());                       // Hello
  


  // let fun_one = (arg1, arg2, arg3) => {
  //   console.log(arg1(), arg2(), arg3());
  // };
  // fun_one(
  //   () => {
  //     return "Hello_1";
  //   },
  //   () => {
  //     return "Hello_2";
  //   },
  //   () => {
  //     return "Hello_3";
  //   }
  // );
  // fun_one(
  //   () => "Hello_1",
  //   () => "Hello_2",
  //   () => "Hello_3"
  // );
  

// ---------------------------------------------------------------------------------------------------------------------------------------------

// 24-11-22 

// default parameters in function :-
                                // while defining the functions,we will intilize arguments with default values this concept introduced in ES6.


// function fun_one(arg1='hello_1',arg2='hello_2',arg3='hello_3')
// {
//   console.log(arg1,arg2,arg3)
// }
// fun_one('skill')                           // skill hello_2 hello3_3
// fun_one('h_1','h_2','h_3')                 // h_1 h_2 h_3
// fun_one('h_1','h_2','h_3','h_4')           // h_1 h_2 h_3
// fun_one(undefined,undefined,undefined)     // hello_1 hello_2 hello_3
// fun_one(null,null,null)                    // null null null
// fun_one(undefined,undefined,'h_3')         // hello_1 hello_2 h_3

                                        


// rest parameters in function :- 
                  
// - we will represent rest parameter with "..." spread operator.
// - "..." spread operator will not use in first, its  use in last position.


// function fun_one(arg,...arg1)
// {
//     console.log(arg,arg1);
// }
// fun_one();                           //  undefined []
// fun_one('hello_1')                   //  hello_1 []
// fun_one('hello_1','hello_2')         //  hello_1 [ 'hello_2' ]
// fun_one('A','B','C')                 //  A [ 'B', 'C' ]
// fun_one(undefined,undefined)         //  undefined [ undefined ]
// fun_one(undefined,null)              //  undefined [ null ]

// function fun_one(...arg,...arg1)    // Error     