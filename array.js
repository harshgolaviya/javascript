// 19/11/2022
/// Array

// let arr=[10,11,12,13,14,15,16,17];  

// console.log(typeof arr);
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[5]);
// console.log(arr["10"]);
// console.log(arr[3.1]);

// let arr=["ten",11,"twelve",13,14,"15",16,"17"];                                
// console.log(arr);
// The length property of an Array object represents the number of elements in that array
// console.log(arr.length);
// arr.length = 10;
// console.log(arr);
// console.log(arr.length);
// arr[9]=undefined;
// arr[5]=undefined;
// arr[5]=20;
// arr[3.1]=3.1;
// arr["A"]="a";
// console.log(arr);
// console.log(arr.length);
// console.log(arr[9]);
// arr.length=100;
// console.log(arr);
// arr[50]=50;
// console.log(arr.length);
// arr['50']="fifty";
// console.log(arr.length);


// let arr1={"A":"a","B":"b"}
// let arr11=["A":"a","B":"b"]
// console.log(arr1);


// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];                                 
// console.log(arr_new[-2])
// arr_new.push(21);

// arr_new.pop();
// arr_new.pop();
// arr_new.pop();
// console.log(arr_new)

// arr_new.shift();
// arr_new.shift();
// arr_new.shift();
// console.log(arr_new)

// arr_new.unshift();
// console.log(arr_new)


// arr_new.splice();
// arr_new.splice(5,1);
// arr_new.splice(-4,2);
// arr_new.splice(-4,-2);
// arr_new.splice(4,-2);
// arr_new.splice(-3);
// arr_new.splice(0,2,30,31);
// arr_new.splice(0,2,30,31,32,33);
// arr_new.splice(0,arr_new.length,30,31,32,33);
// arr_new.splice(0,0,30,31,32,33);
// arr_new.splice(5,30,31,32,33);
// arr_new.splice(0,5,30,31,32,33);
// console.log(arr_new)
// arr_new.splice(5,0,30,31,32,33);


// console.log(arr_new.splice(2));

// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];                                
// console.log(arr_new.splice(3));
// console.log(arr_new.splice(3,3));
// console.log(arr_new.splice(3,3,21,22,23));

// ------------------------------------------------------------------------------------------------------------------------

// 21-11-22

// slice:-

// let arr=[1,2,3,4,5,6];
// arr.slice(2);
// console.log(arr);
// console.log(arr.slice(3));       //-> 4,5,6 
// console.log(arr.slice(-3,5));    //-> 4,5
// console.log(arr.slice(-5,-3));   //-> 2,3
// console.log(arr.slice(-3,-5));   //-> []

// let new_arr=arr.slice();
// console.log(new_arr);           //-> [ 1, 2, 3, 4, 5, 6 ]


// At:-

// let arr=[1,2,3,4,5,6];
// console.log(arr.at(3));     //-> 4

// join:- It's convert into string.


// let arr=[1,2,3,4,5,6];
// console.log(arr.join());         //-> 1,2,3,4,5,6
// console.log(arr.join('-'));      //-> 1-2-3-4-5-6
// console.log(typeof arr.join());  //-> string


// Function:-

// function test(n) 
// {
//            console.log(`harsh...${n}`);    //template literal
//            return [];   
// }
// let n=test(10);
// console.log(typeof n)


//p ---------------------------------------------------------------------------------------------------------------------------------------------

// 24-11-22

// spread operator(...) :-]

// let arr1=[10,20,30]
// let copy_arry
// copy_arry=arr1                      // copy 
// console.log(arr1)                                //  [ 10, 20, 30 ]                                 
// console.log(copy_arry)                                //  [ 10, 20, 30 ]                                 
// console.log(arr1==copy_arry)                          //  true


// let arr1=[10,20,30]
// let copy_arry
// copy_arry=arr1.slice();          // shallow copy
// console.log(copy_arry);                              //   [ 10, 20, 30 ]
// console.log(copy_arry==arr1);                        //   false


// let arr1=[10,20,30]
// let arr2=[100,200,300]
// copy_arry=[arr1]
// console.log(copy_arry)                      // [ [ 10, 20, 30 ] 

// copy_arry=[arr1,...arr2]
// console.log(copy_arry)                      // [ [ 10, 20, 30 ], 100, 200, 300 ] 
// console.log(copy_arry.at(0))                // [ 10, 20, 30 ]                     

// copy_arry=[...arr1]
// console.log(copy_arry)                      // [ 10, 20, 30 ]

// copy_arry=[...arr1,...arr2]
// console.log(copy_arry)                      // [ 10, 20, 30, 100, 200, 300 ]


