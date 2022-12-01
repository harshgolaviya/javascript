// 15/11/2022

// console.log(10+20);              //-> 30
// console.log(10+"20");            //-> 1020
// console.log(10+'20');            //-> 1020
// console.log(10 + +'20');         //-> 30
// console.log(typeof + '20');      //-> Number

// console.log(10 + +'20' + 20);    //-> 50 
// console.log(10 * '20');          //-> 200
// console.log(10 / '20');          //-> 0.5

// true     1
// false    0 

// console.log(true+true);          //-> 2
// console.log(true+false);         //-> 1

// console.log(True+1);             //-> Error

// console.log(true+10+20/5*false); //-> 11
// console.log(true/false);         //-> Infinity  

// console.log(20*5/false);         //-> Infinity 
// console.log(10+20/5*4-1);        //-> 25


// ---> assignment  =
// ---> comparision ==
// ---> strictly comparision ===

// console.log(10==10);             //->True
// console.log(10=='10');           //->True
// console.log(10==='10');          //->False
// console.log(10===10);            //->True
// console.log(10=='ten');          //->False

// console.log(0.1+0.2==0.3);       //->False
// // 0.1+0.2 = 0.3000000000004
// console.log(0.2+0.2==0.4);       //->True
// console.log(0.1+0.3==0.4);       //->True
// -> Even number equl=equl to True.

// console.log(typeof "Skill");           //-> String
// console.log(typeof 10);                //-> Number
// console.log(typeof 10.1); //exception  //-> Number
// console.log(typeof true);              //-> Boolean
// console.log(typeof undefined);         //-> Undefined
// console.log(typeof NaN); //exception   //-> Number
// console.log(typeof null);              //-> Object
// console.log(typeof []);                //-> Object
// console.log(typeof {});                //-> Object
// console.log(typeof 100n);              //-> bigint
// console.log(typeof function(){});      //-> Function
// console.log(typeof Symbol('A'));       //-> Symbol

// ----------------------------------------------------------------------------------------------------------------------------------------------

// 16/11/2022O

// console.log("0"==false);              //-> True
// console.log(false=="0");              //-> True

// console.log(false==="0");             //-> False
// var a=1,b=2
// console.log(a++b);                    //-> Error
// console.log(a + + b); //a + (+b)      //-> 3  


// var a=2,b=2,c;
// console.log(a++);                        //->2
// console.log(++a);                        //->4
// c = --a && b++;
// console.log(b);
// console.log(a," - ",b," - ",c);


// XOR -> exclusive OR ^

// console.log(1^1);                      //-> 0
// console.log(1^0);                      //-> 1
// console.log(0^1);                      //-> 1
// console.log(0^0);                      //-> 0

// console.log(1^0^1);                    //-> 0
// console.log(0^1^0);                    //-> 1

// var a=10,b=30;
// var str1 = "hello welcome"+a + " to skillqode"+" str1";
// var str2 = 'hello welcome to skillqode'+' str2';
// var str3 = `hello welcome ${a}
//  to skillqode${" str3"}` ; //backtick ES6 - template literal

// console.log(str1);
// console.log(str2);
// console.log(str3);

// variable 

// declare variable using -> 
// var let const
 
// const a=10; 
// a=20;
// console.log(a);

// let a=10;
// console.log(a + '10');
// console.log(typeof(a + '10'));

// console.log(a + true);
// console.log(typeof(a + true));

// let a=10;
// let b="10 " + "a"
// console.log(b);

// undefined null NaN

// console.log(undefined == undefined);             //-> True
// console.log(undefined === undefined);            //-> True
// console.log(null == null);                       //-> True
// console.log(null === null);                      //-> True

// ----------------------------------------------------------------------------------------------------------------------------------------------

// 17/11/2022

// console.log(typeof 0);              //-> Number
// console.log(typeof null);           //-> Object
// console.log(typeof undefined);      //-> Undefined
// console.log(typeof NaN);            //-> Number

// console.log(10*"s");                //-> NaN

// undefined   NaN    null


// console.log(null == 0)            //-> False  
// console.log(undefined == 0)       //-> False
// console.log(NaN == 0)             //-> False

// undefined   NaN     nulls
// console.log(undefined == null);     //-> True 
// console.log(undefined === null);    //-> False
// console.log(undefined == NaN);      //-> False

// console.log(NaN == null);          //-> False
// console.log(NaN === null);         

/*
            var                                             let

    var keword introduced in "ES1"         |       let keyword introduced in "ES6"
                                           |
    var keyword allows the duplicate       |       let keyword wont allows the duplicate
    variables                              |       variables
                                           |
    variable hoisting issue raised         |       we can overcome variable hoisting
    with var keywors                       |       with let keyword
                                           |
    scope rule break by var keyword        |       let keyword obeys the scope rule
                                           |
    global polluting issue raised          |       we can overcome global polluting issue
    because of var keyword                 |       by using let keuword

*/



// var a=10;
// console.log(a);
// var a=20
// console.log(a);

// let a=10;
// console.log(a);
// let a=20
// console.log(a);

// let a=10;
// {
//     let a=100;        
//     console.log(a);       //-> 100
// }
// console.log(a);           //-> 10


//let findSimpleInterest; //camel case

