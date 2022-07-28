

// var name = "xyz";
// var age = 23;
// var id = 1


// var URL = "https://jsonplaceholder.typicode.com/todos/";
// function response() {
//     fetch(URL)
//     .then(res=>res.json())
//     .then(data=>console.log(data[107].title))
// }

// response()


// var array = [1,2,3,4,5,6,7,8,9]
// var len = array.length
// console.log(len)
// array[array.length] = 10;
// array[len] = 10
// console.log(array)
// var object = {}

// array[11] = 23;

// console.log(array)

// console.log(array[10])

// var arr = [
//     {
//         name : "Harish",
//         id : 1
//     },
//     {
//         name : "girish",
//         id:2
//     },
//     {
//         name : "basha",
//         id : 3
//     },
//     {
//         name : "dada",
//         id: 4
//     },
//     {
//         name : "sandeep warrior",
//         id:5
//     }
// ]

//  arr[5]= {
//     name: "rp",
//     id:6,
//     gender: "male"
// }

// // console.log(arr)


// var obj1 = {
//     name : "xyz",
//     id: 23,
//     gender: "male"
// }


// var obj2 = Object.assign(obj1)
// obj2.color="blue"

// console.log(obj1)
// console.log(obj2)

function sum (...arr){
    var sum = 0;
    for(i=0;i<arr.length;i++){
      /*
         var i =0;
         var x = i<arr.length;
         var i = i+1;

      */

        sum = sum + arr[i]
    }
    return sum;
    }
console.log(sum(20,24,56,60,70));
    

