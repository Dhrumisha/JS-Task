// function settime(from,to){
//     let current = from;
    
// setTimeout(function(){
//     // console.log(current);
    
// while(current<=to){
//     console.log(current);
//     current++;
// }
// },2000);
// }
// settime(2,5);

let time = 10;
const count = function(){
    console.log(time);
    if(time === 0){
        clearInterval(tick)
    }
    time--;
}
// let tick = setInterval(count,1000);
// console.log(tick);

// event loop working
// console.log("Test Start");
// setTimeout(()=>console.log("settimeout"),0)//this will not run 0 second because oof microtask-queue
// Promise.resolve("Resolved Promise 1").then((data)=>console.log(`${data}`))
// Promise.resolve("Resolved Promise 2").then((data)=>{
//     for (let i = 0; i < 100000000; i++) {
//     }
//     console.log(`${data}`)})
// console.log("test End");

function make_Get_Request(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }
  
//   make_Get_Request('https://example.com/data')
//     .then(data => {
//       console.log('Response data: ' + data);
//     })
//     .catch(error => {
//       console.log('Error: ' + error.message);
//     });
  
function asyncOperation1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Asynchronous Operation 1');
        resolve();
      }, 1000);
    });
  }
  
  function asyncOperation2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Asynchronous Operation 2');
        resolve();
    }, 2000);
    });
  }
  
  function asyncOperation3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Asynchronous Operation 3');
        resolve();
      }, 1500);
    });
  }
  
  async function performOperations() {
    try {
      await asyncOperation1();
      await asyncOperation2();
      await asyncOperation3();
      console.log('All operations completed');
    } catch (error) {
      console.log('Error:', error.message);
    }
  }
  
//   performOperations();


async function withoutData() {

    const res = await fetch("https://fakestoreapi.com/products/1").then(response => response.json()).then((data)=>console.log(data)
    )
}
// withoutData()


async function withAsyncAwait() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Hello World");
      }, 2000);
    });
  
    const data = await promise;
    console.log(data)
    console.log("Some Synchrnous Code");
  }
  
//   withAsyncAwait();

function withPromises() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Hello World, after 3 seconds");
      }, 3000);
    });
  
    promise.then((data) => {
      console.log(data);
    });
  
    
    console.log("Some Synchrnous Code");
  }
  
  withPromises();

