// this 值 5 種判斷方式

// 1. 函式調用
// var name = "John";
// function callThis() {
//   console.log(this);
//   console.log(this.name);
// }
// callThis();


// 2. 物件方法調用
// 當一個函式是做為一個物件的方法來調用時，this 會指向這個物件。
// const john = {
//   name: "john",
//   callJohn() {
//     console.log(`hello, ${this.name}`);
//   },
// };

// john.callJohn();


// 3. 構造函式調用

// 當一個函式用 new 關鍵字調用時，此函式執行前會先創造一個新的物件，this 會指向這個新組成的物件。
// 如下面程式碼例子所示，最後呼叫結果為 Apple 。這是因為當構造函式 Cellphone 被 new 調用時，會先創造一個新的物件，讓 this 會指向這個新物件，＝在這個例子中，就印出了這個新物件的 brand 是 Apple。

// function Cellphone(brand) {
//   this.brand = brand;
//   console.log("constructor this: ", this)
// }

// Cellphone.prototype.getBrand = function () {
//   console.log("getBrand this: ", this)
//   return this.brand;
// };

// let newIPhone = new Cellphone("Apple");
// let newPixelPhone = new Cellphone("Google");

// console.log(newIPhone.getBrand()); // Apple
// console.log(newPixelPhone.getBrand()); // Google




// var name = '全域阿婆';
// function callName() {
//   console.log(this.name);
// }

// callName();                        // '全域阿婆'
// callName.call({name: '漂亮阿姨'});  // '漂亮阿姨'
// callName.apply({name: '漂亮阿姨'});  // '漂亮阿姨'


// // https://medium.com/%E5%BE%AE%E5%B3%AF%E9%A3%9B%E7%BF%94/%E4%BB%8B%E7%B4%B9-javascript-this-%E7%9A%84%E4%BA%94%E7%A8%AE%E7%94%A8%E6%B3%95-d279327fe53a
// var train = {
//     departure: '高雄',
//     arrival: '台南',
// }

// function showTrainInfo(arg1, arg2) {
//     console.log(`${this.departure} 到 ${this.arrival}`)
//     console.log(arg1, arg2)
// }

// showTrainInfo.call(train, '30分鐘', '區間車')    // output: 高雄 到 台南, 30分鐘 區間車
// // 效果等同於
// showTrainInfo.apply(train, ['30分鐘', '區間車']) // output: 高雄 到 台南, 30分鐘 區間車



// https://medium.com/%E5%BE%AE%E5%B3%AF%E9%A3%9B%E7%BF%94/%E4%BB%8B%E7%B4%B9-javascript-this-%E7%9A%84%E4%BA%94%E7%A8%AE%E7%94%A8%E6%B3%95-d279327fe53a
// var kaohsiungTrain = {
//     departure: '高雄',
//     arrival: '台南',
// }
// var pingtungTrain = {
//     departure: '屏東',
//     arrival: '台北',
// }
// function showTrainInfo(arg1) {
//     console.log(`${this.departure} 到 ${this.arrival}`)
//     console.log(arg1)
// }
// // bind 寫法
// var show = showTrainInfo.bind(kaohsiungTrain, 111)
// // // 函式表示式寫法
// // var show = function() {
// //   return showTrainInfo.call(kaohsiungTrain)     // call替換成apply也可以
// // }

// show()  // output: 高雄 到 台南

function who() {
    console.log(this.name)
}

var name = '大家好，這是全域 name'

var obj1 = {
    name: '微風',
    who: who,
    obj2: obj2
}

var obj2 = {
    name: '狐狸',
    who: who,
    obj1: obj1
}

// 情況二
const xxx = {
  callbackTest(fn) {
    fn()
  }
}

xxx.callbackTest(obj1.who)      // output: 大家好，這是全域 name