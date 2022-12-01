// at :-
// let a='harsh'
// console.log(a.at(2))         // s
// console.log(a.at(-2))        // r


// charAt :-
// let a="harsh"
// console.log(a.charAt(1))     // a


// charCodeAt :-
// let a="harsh"
// console.log(`${a.charCodeAt(2)} is equal to ${a.charAt(2)}`)    // 114 is equal to r


// charCodeAt :-
// const icons = '☃★♲';
// console.log(icons.codePointAt(0));        // 9731


// concat :-
// const hello = "Hello, ";
// console.log(hello.concat("Kevin", ". Have a nice day."));   // Hello, Kevin. Have a nice day.

// const greetList = ["Hello", " ", "Venkat", "!"];
// console.log("".concat(...greetList));                      // Hello Venkat!
    

// endswith :-
// let a="car is the best"
// console.log(a.endsWith("best"))           // true
// console.log(a.endsWith("car",10))         // false
// console.log(a.endsWith("the",10))         // true

// endsWith(searchString)
// endsWith(searchString, endPosition)


// fromCharCode :-
// let a=65
// console.log(String.fromCharCode(a))               // A
// console.log(String.fromCharCode(65,66,67))        // ABC
// console.log(String.fromCharCode(0x2014));         // —
// console.log(String.fromCharCode(0x12014));        // —
// console.log(String.fromCharCode(8212));           // —


// fromCodePoint :-
// console.log(String.fromCodePoint(9731, 9733, 9842, 0x2F804))       // ☃★♲你
// console.log(String.fromCodePoint(0x404));                          // "\u0404" === "Є"
// console.log(String.fromCodePoint(0x2f804));                        // 你 
// console.log(String.fromCodePoint(194564));                         // 你
// console.log(String.fromCodePoint(0x1d306, 0x61, 0x1d307));         // 𝌆a𝌇


// includes :-
// let a="once upon time king is great king"
// console.log(a.includes("once"))                  // true 
// console.log(a.includes("Once"))                  // false
// console.log(a.toUpperCase().includes("ONCE"))    // true
// console.log(a.includes(""))                      // true
// console.log(a.includes("once",0))                // true 
            //        (searchstring,position)

            
// indexOf :-
// let a="once upon time king is king"
// console.log(a.indexOf("n"));             // 1
// console.log(a.indexOf("n",3));           // 8 
// console.log(a.indexOf("n"));             // 1
// console.log(a.indexOf("a"));             // -1
// console.log(a.indexOf("n",9));           // 17
//                     (searchstring,position)


// lastIndexOf :-
// let a="great power with great responsibility"
// console.log(a.lastIndexOf("g"))          // 17
// console.log(a.lastIndexOf("g",2))        // 0
// console.log(a.lastIndexOf("x"))          // -1


