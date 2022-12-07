// function defined in Object

// let student={
//     name:'harsh',
//     age:20, 
//     marks:90,
//     getdata:function(){
//          console.log(this.name)
//     }
// }
// student.getdata()           // harsh



let student={
    name:'harsh',
    age:20, 
    marks:90,
}

let voting={
    name:'Balubhai',
    age:68,
    interted_partly:'Aek Moko Aap Ne',

}

// call :-
        //   The call() method calls the function with a given this value and arguments provided individually.


// let getdata=function(city,state){
//     console.log(this.name+" - "+city+" - "+state)
// }
// getdata.call(student,"surat","gujrat")            // harsh - surat - gujrat   
// getdata.call(voting)                              // Balubhai - undefined - undefined




// apply:-
// The apply() method calls the specified function with a given this value, and arguments 
// provided as an array (or an array-like object).

// In the apply  method parameter always in the array
// and the argument is not array

// let getdata=function(city){
//     console.log(this.name+" - "+city+" - ")
// }
// getdata.apply(student,["surat","gujrat","india"])     // harsh - surat -      
// getdata.call(voting)                                  // Balubhai - undefined -




// bind :-
// The bind() method creates a new function that, when called, has its this keyword set to the provided
//  value, with a given sequence of arguments preceding any provided when the new function is called.

// - bind method is create a new function


// let getdata=function(){
//     console.log(this.name)
// }
// let use=getdata.bind(voting)
// use()                                 // Balubhai
// console.log(typeof use);              // function


