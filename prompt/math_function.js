// cbrt :- cube root

// console.log(Math.cbrt(64))    // 4


// ceil :- smallest integer return

// console.log(Math.ceil(-Infinity));     // -Infinity
// console.log(Math.ceil(-7.004));        // -7
// console.log(Math.ceil(-4));            // -4
// console.log(Math.ceil(-0.95));         // -0
// console.log(Math.ceil(-0));            // -0
// console.log(Math.ceil(0));             // 0
// console.log(Math.ceil(0.95));          // 1
// console.log(Math.ceil(4));            // 4
// console.log(Math.ceil(7.004));        // 8
// console.log(Math.ceil(Infinity));


// floor :- largest int return

// console.log(Math.floor(-Infinity));    // -Infinity
// console.log(Math.floor(-45.95));       // -46
// console.log(Math.floor(-45.05));       // -46
// console.log(Math.floor(-0));           // -0
// console.log(Math.floor(0));            // 0
// console.log(Math.floor(4));            // 4
// console.log(Math.floor(45.05));        // 45
// console.log(Math.floor(45.95));        // 45
// console.log(Math.floor(Infinity));     // Infinity


// fround :-

// console.log(Math.fround(5.5));      // 5.5
// console.log(Math.fround(5.05));     // 5.050000190734863
// console.log(Math.fround(5));        // 5
// console.log(Math.fround(-5.05));    // -5.050000190734863


// max :-
// let a=[100,79790,37]
// console.log(Math.max(100,13013,628))       // 13013
// console.log(Math.max(-100,-13013,-628))    // -100   
// console.log(Math.max(1,-10,-22))           // 1
// console.log(Math.max(...a))                // 79790


// min :-
// let a=[100,79790,37]
// console.log(Math.min(100,13013,628))       // 100
// console.log(Math.min(-100,-13013,-628))    // -13013
// console.log(Math.min(1,-10,-22))           // -22
// console.log(Math.min(...a))                // 37


// // power :-
// console.log(Math.pow(7, 2));                          // 49
// console.log(Math.pow(7, 3));                          // 343
// console.log(Math.pow(2, 10));                          // 1024

// // Fractional exponents
// console.log(Math.pow(4, 0.5));                    // 2 (square root of 4)
// console.log(Math.pow(8, 1 / 3));                  // 2 (cube root of 8)
// console.log(Math.pow(2, 0.5));                    // 1.4142135623730951 (square root of 2)
// console.log(Math.pow(2, 1 / 3));                 // 1.2599210498948732


// random :-
// a=[]
// a.push(Math.random())                    // [ 0.8127293248972967 ]
// console.log(a)
// console.log(Math.random())               // 0.3575712025143205


// sqrt :-  return square root
// console.log(Math.sqrt(64))            // 8
// console.log(Math.sqrt(-1) )           // NaN    
// console.log(Math.sqrt(-0) )           // -0  
// console.log(Math.sqrt(0) )            // 0    
// console.log(Math.sqrt(1) )            // 1    
// console.log(Math.sqrt(2) )            // 1.4142135623730951    
// console.log(Math.sqrt(9) )            // 3
// console.log(Math.sqrt(Infinity))      // Infinity        
     

// trunc :-remove float part
// console.log(Math.trunc(-Infinity));    // -Infinity
// console.log(Math.trunc("-1.123"));     // -1
// console.log(Math.trunc(-0.123));       // -0
// console.log(Math.trunc(-0));           // -0
// console.log(Math.trunc(0));            // 0
// console.log(Math.trunc(0.123));        // 0
// console.log(Math.trunc(13.37));        // 13
// console.log(Math.trunc(42.84));        // 42
// console.log(Math.trunc(Infinity));     //  Infinity