// const waitFor = delay => new Promise(resolve => setTimeout(resolve, delay));

// async function api1 () {
//     await waitFor(500);
//     return "A";
// }
// async function api2 () {
//     await waitFor(500);
//     return "B";
// }

// // async function api3 () {
// //     await waitFor(500);
// //     return "C";
// // }

// async function api3 () {
//     await waitFor(500);
//     throw "error"; // 丟出錯誤訊息
// }

// function callMutiApi () {
//     console.time();
//     // const a = await api1()
//     // const b = await api2()
//     // const c = await api3()
//     // console.log({ a, b, c });
//     const promises = [api1(), api2(), api3()];
//     Promise.all(promises)
//       .then((values) => {
//         console.log(values);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//       .finally(() => {
//         console.timeEnd();
//       });
//       // .
//       // console.log(res);
//       // console.timeEnd();
// }
// callMutiApi();

// // import fetch from "node-fetch";
// // const retFetch = fetch("https://jsonplaceholder.typicode.com/todos/1")
// // console.log(retFetch)



// // const callback = (fn, delay) => {
// //   setTimeout(() => {
// //     fn();
// //   }, delay);
// // };

// // callback(() => {
// //   console.log("Hello!");
// //   callback(() => {
// //     console.log("Hello!");
// //     callback(() => {
// //       console.log("Hello!");
// //       callback(() => {
// //         console.log("Hello!");
// //       }, 200);
// //     }, 200);
// //   }, 200);
// // }, 200);

// // new Promise((resolve, reject) => {
// //   console.log("executor 立即執行"); // executor 立即執行
// // });

// // function requestData(url) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       if (url === "explainthis.io") {
// //         resolve("hello welcome to explainthis");
// //       } else {
// //         reject("it is not explainthis");
// //       }
// //     }, 3000);
// //   });
// // }

// // // 1. 請求成功
// // requestData("explainthis.io").then((res) => {
// //   console.log(res); //hello welcome to explainthis
// // });

// // //2. 請求失敗
// // requestData("explainthis.com").catch((e) => console.log(e)); //it is not explainthis

// =======

let runPromise = (someone, timer, success = true) => {
  console.log(`${someone} 開始跑開始`);
  return new Promise((resolve, reject) => {
    // 傳入 resolve 與 reject，表示資料成功與失敗
    if (success) {
      setTimeout(function () {
        // 3 秒時間後，透過 resolve 來表示完成
        resolve(`${someone} 跑 ${timer / 1000} 秒時間(fulfilled)`);
      }, timer);
    } else {
      // 回傳失敗
      reject(`${someone} 跌倒失敗(rejected)`)
    }
  });
}

// 此段函式並不會影響其它函示的執行
runPromise('小明', 3000).then(someone => {
  console.log('小明', someone)
});
// 以下這段 console 會在 promise 結束前就執行
console.log('這裡執行了一段 console');

