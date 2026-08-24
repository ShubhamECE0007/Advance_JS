// const promise1 = new Promise((resolve, reject) => {
//     let success  = true;
//     if(success) {
//         resolve({
//             id:2503203100121,
//             username: "shubham singh"
            
//         });
//     }
//     else{
//         reject(new Error("Data not fetched"));
//     }
// })


// promise1
// .then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error.message);
// });

const promise2 = new Promise((resolve,reject)=>{
    let victory = true;
    if(victory){
        resolve({
            ProductName: "Iphone 14 pro max",
            Price: 150000,
            Quantity: 1
        });
    }
    else{
        reject(new Error("Order not fetched"));
    }


})

promise2
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error.message);
});