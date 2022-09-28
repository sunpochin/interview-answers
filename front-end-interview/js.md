

ref. 感謝前輩們分享：
- https://ithelp.ithome.com.tw/articles/10256018
- https://ithelp.ithome.com.tw/articles/10256017
- https://medium.com/starbugs/%E9%9D%A2%E8%A9%A6-%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%AB%E4%B8%80%E5%AE%9A%E8%A6%81%E6%9C%83%E7%9A%84-js-%E8%A7%80%E5%BF%B5%E9%A1%8C-%E4%B8%AD%E8%8B%B1%E5%B0%8D%E7%85%A7%E4%B9%8B%E4%B8%8A%E7%AF%87-3b0a3feda14f

## 〔JS基礎觀念〕
1. 變數有效範圍與var/let/const差異
 - JavaScript在ES6中新增了“let”宣告方式來取代”var”。在ES6之前，JavaScript的世界中並沒有區塊域(block)的概念，因此經常使用”var”宣告所有的變數，
 - var、let 一個是函數變數，另一個是區塊變數
 - 無宣告: global. var: function. let, const: block.
 - https://shubo.io/javascript-hoisting/ quote:"關於 var 可以「重複宣告」以及「先使用後宣告」，你可能會很好奇，這樣為什麼會對？畢竟這違反我們對一般程式語言的認知。其實這是因為：在 JavaScript 中，不管你在函數中的哪一行用 var 宣告變數，一律視為在函數的第一行宣告。也就是說，不論你宣告 var 變數的位置在哪，宣告的動作一律都會被「抬升」到函式的最頂端，這個特性就叫做 hoisting (提升)。要注意的是，只有「宣告」這個動作有 hoisting (提升) 的特性，賦值 (把值指定給變數) 的動作不會 hoisting。"
      - function hoisting: "這個特性可以解決一個問題，也就是兩個函數需要互相呼叫彼此的狀態，也就是 A() 裡面會呼叫到 B()，而 B() 裡面會呼叫的 A() 的遞迴狀況。"

2. Scope 作用域
 - Where and how to look for things. JS have two lexical scopes global and function
 - 變數在程式中可以被存取的範圍，可分為區域變數，全域變數。
3. 函式與函式的作用域
3. Hoisting提升是什麼?
 - JavaScript’s default behavior of moving declarations to the top.

4. Closure閉包是什麼?
 - 是函式以及該函式被宣告時所在的作用域環境（lexical environment）的組合。
 - https://openhome.cc/zh-tw/javascript/function/closure/
 - <iframe src="https://codesandbox.io/embed/closure-qg5z25?fontsize=14&hidenavigation=1&theme=dark&view=editor"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="closure"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

5. Callback 回呼是什麼、Callback Hell是什麼以及為何會產生?
 - example: 
 - <iframe src="https://codesandbox.io/embed/exciting-platform-hjlsqq?fontsize=14&hidenavigation=1&theme=dark&view=editor"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="callbackhell-promise"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
 - 延伸考題 What’s about async?
  - The async function is syntactic sugar for promise.
async/await 其實是 promise 語法糖，讓你可以用更簡潔的方法達到非同步。(async function 本身就會回傳 promise)
 -  [%https://gist.github.com/hannahpun/a095532d0454b56096896f1a6c7a1ba3]
  - [%https://gist.github.com/hannahpun/a095532d0454b56096896f1a6c7a1ba3#file-hook-js]


6. JS 事件傳遞機制:捕獲跟冒泡
7. this 指向、如何強制綁定this (call/apply/bind差異)
8. Event Loop
9. 同步與非同步、promise是什麼?

## 〔其他網路基礎觀念〕
1. http協定是什麼?
2. cookie/local Storage 如何運作?
3. MVC是什麼? MVVM又是什麼?
4. Restful API是什麼?
5. SPA是什麼?
6. Client端跟Server端資料如何傳遞、輸入網址後頁面是怎麼render出來的?


### in English
- https://www.g2i.co/blog/2021-front-end-developer-interview-questions-and-answers
1. What is the difference between == and ===?
    - Doubles equals checks for value only. Before checking, it does any necessary type coercion. For example, the string "1" will be == to the integer 1, but it will not be ===. Many projects these days prefer to always use ===. Although, some folks advocate writing code that works well with the == type coercion.
    - 

1. What is the `this` keyword in JavaScript?
    - this is a little tricky in JavaScript. Its value is determined by what the function you are inside of is called. In the global state, this is set to the window object. The value of this also depends on whether or not you are in strict mode. Inside a top-level function, a strict mode this will be undefined, whereas a non-strict mode this will be the window object. It's also worth knowing that the value of this can be overwritten with the bind method.

1. What is the difference between let, const, and var?
    * Originally, var was the only option JavaScript had for defining variables. In ES6, we got const and let as additional options. The important takeaways are:
      1. Variables defined with const cannot be reassigned.
      2. Const and let variables are block-scoped.
      3. Var variables are function scoped.
      4. Variables defined with var are hoisted.
        - Demo: https://jsfiddle.net/sunpochin/3ezog6uq/6/ 
        - https://shubo.io/javascript-hoisting/ quote:"關於 var 可以「重複宣告」以及「先使用後宣告」，你可能會很好奇，這樣為什麼會對？畢竟這違反我們對一般程式語言的認知。其實這是因為：在 JavaScript 中，不管你在函數中的哪一行用 var 宣告變數，一律視為在函數的第一行宣告。也就是說，不論你宣告 var 變數的位置在哪，宣告的動作一律都會被「抬升」到函式的最頂端，這個特性就叫做 hoisting (提升)。要注意的是，只有「宣告」這個動作有 hoisting (提升) 的特性，賦值 (把值指定給變數) 的動作不會 hoisting。"
      - function hoisting: "這個特性可以解決一個問題，也就是兩個函數需要互相呼叫彼此的狀態，也就是 A() 裡面會呼叫到 B()，而 B() 裡面會呼叫的 A() 的遞迴狀況。"

1. What is the difference between == and ===?
    - type === check type.
    - https://jsfiddle.net/sunpochin/Lthqewoj/8/
1. How can you access HTML elements with JavaScript?
    - Familiarize yourself with getElementById, querySelector, and querySelectorAll.

1. What options do we have to store data?
    - You can store user data in localStorage, cookies, or sessionStorage.
1. What is functional programming in JavaScript?
    - Functional programming refers to using pure functions. In the context of JavaScript, this means familiarizing yourself with map, filter, and reduce. It's also worth understanding the concept of immutability.

