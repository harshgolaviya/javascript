// at :-
// let a=[1,2,3,4]
// console.log(a.at(1))    //2


// concat :- 
// let a=[1,2,3]
// let b=[4,5,6]
// let c=a.concat(b)
// console.log(c)        //  [ 1, 2, 3, 4, 5, 6 ]


// copywithin :-
// let a=[1,2,3,4,5,6,7,8]
// console.log(a.copyWithin(0,6))


// console.log([1, 2, 3, 4, 5,6,7,8,9,10].copyWithin(1,-4,-2));

// [
//     1, 7, 8, 4,  5,
//     6, 7, 8, 9, 10
// ]\


// entries :-
// const ary=['A','B','C']
// const ary1=ary.entries()
// console.log(ary1.next().value)    [ 0, 'A' ]


// every :-
// const o=(currentvalue)=>currentvalue<10
// const op=[1,2,3,4,5]
// console.log(op.every(o));          // True


// fill :-
// const array=[1,2,3,4,5,6]
// console.log(array.fill(0,3,5))           //[ 1, 2, 3, 0, 0, 6 ]


// find :-
// const op=['A']
// const o=()=>{
//     return op==='B'
// }
// console.log(op.find(o))       // undefined


// const k=[1,2,3]
// console.log(k.findlast(val=>(val==2)))   // 2


// const inventory = [
//     { name: "apples", quantity: 2 },
//     { name: "bananas", quantity: 0 },
//     { name: "cherries", quantity: 5 },
//   ];
// console.log(inventory.find( fruit => fruit.name==="cherries"  ))   // { name: 'cherries', quantity: 5 }

  
//   let arr = [1,2,3,4,5,6,7];
//   console.log(arr.find(val => val%2==0))        // 2


// Findindex :-
// let a=[1,2,3,4]
// // function op(p)
// // {
// //     return p==2                        // 1
// // }
// console.log(a.findIndex(op=>(op==2)))      // 1


// function isPrime(element)
// {
//     if(element>10)
//     {
//         return element
//     }
// }
//   console.log([4, 6, 8, 9, 12].findIndex(isPrime));      // 4

  
// findLast,findLastIndex,group
// flat,flatMap,grouptoMap,reduce,reduceRight
// isArray,keys,of


// From :-
//  let a=[1,2,3,4]
//  console.log(Array.from(a,x=>x%2==0))   // [ false, true, false, true ]


// include :- (return true or false )
// let a=[1,2,3,4,NaN]
// console.log(a.includes(3, 2))             // true
// console.log(a.includes(3, -2))            // false
// console.log(a.includes(NaN))              // true
// console.log(a.includes(undefined))        // false 


// const arr = {
//     length: 5,
//     0: 2,
//     1: 3,
//     2: 4,
//   };

//   console.log(Array.prototype.includes.call(arr,3,1))  //true


// indexof :-
// let a=[1,2,3,2,5,3,1]
// console.log(a.indexOf(1,2))                 // 6
// console.log(a.indexOf(7,2))                 // -1
//         //(search number,from index)  


// join :-
// const elements = ['Fire', 'Air', 'Water'];
// console.log(elements.join());               // Fire,Air,Water
// console.log(elements.join(''));            // FireAirWater
// console.log(elements.join('-'));           //Fire-Air-Water


// lastindexof :- find last index
// let a=[1,2,9,1,2,4,4,2,8,9]
// console.log(a.lastIndexOf(2))       // 6
// console.log(a.lastIndexOf(2,5))     // 4


// of:-
// let a=[1,2,3]
// console.log( Array.of(...a,4))
// console.log(a)


// pop:-
// let a=[1,2,3,4,5]
// a.pop()
// console.log(a)    // [ 1, 2, 3, 4 ]


// push:-
// let a=[1,2,3]
// a.push(4,5)
// console.log(a)    // [ 1, 2, 3, 4, 5 ]


// shift:-
// let a=[1,2,3]
// console.log("Number after :-",JSON.stringify(a))     // Number after   :- [1,2,3]
// let b=a.shift()
// console.log("Number before :-",JSON.stringify(a))    // Number before  :- [2,3]
// console.log("Deleted Number :-",JSON.stringify(b))   // Deleted Number :- 1



// slice :-
// let a=[1,2,3,4,5]
// let b=a.slice(1,3)
// console.log(a.slice(1,3))                     // [ 2, 3 ]
                // (start,end(end not include))

// reverse :-
// let a=[1,2,3,4,5]
// console.log(a.reverse())                 // [ 5, 4, 3, 2, 1 ]


// some :-
// let a=[1,2,3,4,5]
// let b=(v)=>(v%2==0)
// console.log(a.some(b))                    // true
// console.log(a.some(v=>(v%2==0)))          // true


// sort :-
// let a=['harsh','gautam','krushil','dishant']
// console.log(a.sort())                       // [ 'dishant', 'gautam', 'harsh', 'krushil' ]

// let o=[1,2000,3,210,90]
// let p=[1,40,3520,561,23]
// function comparenumber(a,b)
// {
//     return a-b
// }

// console.log(o.sort(comparenumber))        //  [ 1, 3, 90, 210, 2000 ]
  

// splice :-
// let a=[1,2,3,4]
// console.log(a.slice(1,3))             //  [ 2, 3 ]

// const months = ['Jan', 'March', 'April', 'June','July'];
// months.splice(3, 0, 'harsh');
// console.log(months);                 // [ 'Jan', 'March', 'April', 'harsh', 'June', 'July' ]


// toString :-
// let a=[1000,2000,3000,4000]    
// console.log(a.toString())         // 1000,2000,3000,4000
// console.log(typeof a.toString())  // string


// unshift :-
// let a=[500,600,700]
// a.unshift(400)
// console.log(a)             // [ 400, 500, 600, 700 ]
// a.unshift([200,300])
// console.log(a)            // [ [ 200, 300 ], 400, 500, 600, 700 ]
// a.unshift([100])
// console.log(a)            // [ [ 100 ], [ 200, 300 ], 400, 500, 600, 700 ]


// values :-
// const a = ["a", "b", "c", "d", "e"];
// const b = a.values();

// for (const letter of b) 
// {
//      console.log(letter);
// }
// a
// b
// c
// d
// e