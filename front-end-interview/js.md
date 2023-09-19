ref. 感謝前輩們分享：

- https://ithelp.ithome.com.tw/articles/10256018
- https://ithelp.ithome.com.tw/articles/10256017
- https://medium.com/starbugs/%E9%9D%A2%E8%A9%A6-%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%AB%E4%B8%80%E5%AE%9A%E8%A6%81%E6%9C%83%E7%9A%84-js-%E8%A7%80%E5%BF%B5%E9%A1%8C-%E4%B8%AD%E8%8B%B1%E5%B0%8D%E7%85%A7%E4%B9%8B%E4%B8%8A%E7%AF%87-3b0a3feda14f

## 〔JS 基礎觀念〕

1. 變數有效範圍與 var/let/const 差異

- JavaScript 在 ES6 中新增了“let”宣告方式來取代”var”。在 ES6 之前，JavaScript 的世界中並沒有區塊域(block)的概念，因此經常使用”var”宣告所有的變數，
- var、let 一個是函數變數，另一個是區塊變數
- 無宣告: global. var: function. let, const: block.
- https://shubo.io/javascript-hoisting/ quote:"關於 var 可以「重複宣告」以及「先使用後宣告」，你可能會很好奇，這樣為什麼會對？畢竟這違反我們對一般程式語言的認知。其實這是因為：在 JavaScript 中，不管你在函數中的哪一行用 var 宣告變數，一律視為在函數的第一行宣告。也就是說，不論你宣告 var 變數的位置在哪，宣告的動作一律都會被「抬升」到函式的最頂端，這個特性就叫做 hoisting (提升)。要注意的是，只有「宣告」這個動作有 hoisting (提升) 的特性，賦值 (把值指定給變數) 的動作不會 hoisting。"
  - function hoisting: "這個特性可以解決一個問題，也就是兩個函數需要互相呼叫彼此的狀態，也就是 A() 裡面會呼叫到 B()，而 B() 裡面會呼叫的 A() 的遞迴狀況。"

2. Scope 作用域

- Where and how to look for things. JS have two lexical scopes global and function
- 變數在程式中可以被存取的範圍，可分為區域變數，全域變數。

3. 函式與函式的作用域
4. Hoisting 提升是什麼?

- JavaScript’s default behavior of moving declarations to the top.

4. Closure 閉包是什麼?

- 是函式以及該函式被宣告時所在的作用域環境（lexical environment）的組合。
- https://openhome.cc/zh-tw/javascript/function/closure/
- <iframe src="https://codesandbox.io/embed/closure-qg5z25?fontsize=14&hidenavigation=1&theme=dark&view=editor"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="closure"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>

5. Callback 回呼是什麼、Callback Hell 是什麼以及為何會產生?

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
- [%https://gist.github.com/hannahpun/a095532d0454b56096896f1a6c7a1ba3]
- [%https://gist.github.com/hannahpun/a095532d0454b56096896f1a6c7a1ba3#file-hook-js]

6. JS 事件傳遞機制:捕獲跟冒泡
7. this 指向、如何強制綁定 this (call/apply/bind 差異)
8. Event Loop
9. 同步與非同步、promise 是什麼?

- 請說明事件循環(event loop)，以及 JS 處理同步/異步的順序。
- map() 跟 forEach() 的差別:
  map() 會回傳一個新的陣列，forEach() 不會回傳任何值。

## 〔其他網路基礎觀念〕

1. http 協定是什麼?
2. cookie/local Storage 如何運作?
3. MVC 是什麼? MVVM 又是什麼?
4. Restful API 是什麼?
5. SPA 是什麼?
6. Client 端跟 Server 端資料如何傳遞、輸入網址後頁面是怎麼 render 出來的?
7. 瀏覽器得到 HTML, CSS 之後如何渲染成畫面。
8. 使用 Array.reduce 完成。

9. javascript 多個 API 如何同時 call 並且等待回傳？

### in English

- https://www.g2i.co/blog/2021-front-end-developer-interview-questions-and-answers

10. What is the difference between == and ===?

- Doubles equals checks for value only. Before checking, it does any necessary type coercion. For example, the string "1" will be == to the integer 1, but it will not be ===. Many projects these days prefer to always use ===. Although, some folks advocate writing code that works well with the == type coercion.
-

11. What is the `this` keyword in JavaScript?

- this is a little tricky in JavaScript. Its value is determined by what the function you are inside of is called. In the global state, this is set to the window object. The value of this also depends on whether or not you are in strict mode. Inside a top-level function, a strict mode this will be undefined, whereas a non-strict mode this will be the window object. It's also worth knowing that the value of this can be overwritten with the bind method.

12. What is the difference between let, const, and var?

- Originally, var was the only option JavaScript had for defining variables. In ES6, we got const and let as additional options. The important takeaways are:
  1.  Variables defined with const cannot be reassigned.
  2.  Const and let variables are block-scoped.
  3.  Var variables are function scoped.
  4.  Variables defined with var are hoisted.
  - Demo: https://jsfiddle.net/sunpochin/3ezog6uq/6/
  - https://shubo.io/javascript-hoisting/ quote:"關於 var 可以「重複宣告」以及「先使用後宣告」，你可能會很好奇，這樣為什麼會對？畢竟這違反我們對一般程式語言的認知。其實這是因為：在 JavaScript 中，不管你在函數中的哪一行用 var 宣告變數，一律視為在函數的第一行宣告。也就是說，不論你宣告 var 變數的位置在哪，宣告的動作一律都會被「抬升」到函式的最頂端，這個特性就叫做 hoisting (提升)。要注意的是，只有「宣告」這個動作有 hoisting (提升) 的特性，賦值 (把值指定給變數) 的動作不會 hoisting。"
  - function hoisting: "這個特性可以解決一個問題，也就是兩個函數需要互相呼叫彼此的狀態，也就是 A() 裡面會呼叫到 B()，而 B() 裡面會呼叫的 A() 的遞迴狀況。"

13. What is the difference between == and ===?

- type === check type.
- https://jsfiddle.net/sunpochin/Lthqewoj/8/

14. How can you access HTML elements with JavaScript?

- Familiarize yourself with getElementById, querySelector, and querySelectorAll.

15. What options do we have to store data?

- You can store user data in localStorage, cookies, or sessionStorage.

16. What is functional programming in JavaScript?

- Functional programming refers to using pure functions. In the context of JavaScript, this means familiarizing yourself with map, filter, and reduce. It's also worth understanding the concept of immutability.

17. cookie , local storage , session storage 的差別？

- Cookie、Local Storage 和 Session Storage 是用來在網頁瀏覽器中儲存資料的不同機制，它們有不同的特點和使用情境。以下是它們之間的主要差異：

  Cookie：

  Cookie 是一種小型的文字檔案，通常以鍵值對的形式存儲在瀏覽器中。
  Cookie 的主要用途是在客戶端和伺服器之間儲存有關用戶的資訊，例如身份驗證、追蹤用戶訪問歷史等。
  Cookie 有一個過期時間，可以在設定時指定，可以是會話期間存在或長期存在。
  由於每次請求都會將 Cookie 發送到伺服器，因此它們可能會影響網站性能。
  Local Storage：

  Local Storage 是一種用來在瀏覽器中永久儲存資料的機制。這表示儲存在 Local Storage 中的資料不會在瀏覽器關閉後被清除，除非明確刪除或由網頁程式員覆寫。
  Local Storage 使用 JavaScript API 來儲存和檢索資料，並且以鍵值對的形式存儲。
  它的容量通常比 Cookie 大得多，通常在 5MB 到 10MB 之間，取決於瀏覽器。
  Session Storage：

  Session Storage 與 Local Storage 類似，但它的生命週期限於當前瀏覽器會話。當瀏覽器窗口或選項卡被關閉時，Session Storage 中的資料將被清除。
  Session Storage 也使用 JavaScript API 來儲存和檢索資料，並且以鍵值對的形式存儲。
  與 Local Storage 一樣，Session Storage 的容量通常在 5MB 到 10MB 之間。
  總結來說，Cookie 主要用於在客戶端和伺服器之間共享資訊，Local Storage 和 Session Storage 則用於在客戶端瀏覽器中儲存資料，它們的差異在於生命週期和容量。開發者需要根據具體的使用情境選擇合適的儲存機制。如果需要永久性儲存並跨會話共享資料，則 Local Storage 可能是最好的選擇，而 Session Storage 則適用於僅在當前會話中使用的資料。

18. 如果 cookie 不設定過期時間，會怎麼樣？
    如果不設定 Cookie 的過期時間（或將過期時間設為 0），則該 Cookie 將成為會話 Cookie（Session Cookie）。這意味著該 Cookie 僅在當前瀏覽器會話中存在，並且將在瀏覽器關閉後被自動刪除。這樣的 Cookie 通常用於在單個瀏覽器會話中儲存臨時資訊，如購物車內容或用戶登錄狀態。
    總結來說，如果 Cookie 不設定過期時間，則它將成為會話 Cookie，只在當前瀏覽器會話中有效，並在關閉瀏覽器後自動刪除。這對於需要短期儲存的臨時資訊非常有用，但對於需要長期儲存的資訊，你需要設定 Cookie 的過期時間，以確保它在瀏覽器會話之間持久存在。
19. this.

20. prototype, prototype chain, inheritance 是什麼？跟 object-oriented programming 的差別？

21. setTimeout 機制？
    setTimeout 是 JavaScript 中的一個計時器函數，用於在指定的時間延遲之後執行一段程式碼。這個函數有兩個主要參數：

    函數（Function）：要延遲執行的 JavaScript 函數或代碼塊。

    時間（Time）：延遲的時間，以毫秒（milliseconds，ms）為單位。也就是指定在多長時間之後執行函數。

    setTimeout 的基本語法如下：

    javascript
    Copy code
    setTimeout(function, time);
    下面是一個簡單的示例，演示如何使用 setTimeout：

    javascript
    Copy code
    // 延遲 3 秒後執行的函數
    function delayedFunction() {
    console.log('這個函數將在 3 秒後執行。');
    }

    setTimeout(delayedFunction, 3000); // 延遲 3000 毫秒（3 秒）
    當你調用 setTimeout 時，它會將指定的函數放入一個等待執行的佇列中，並在指定的時間（毫秒數後）將該函數移到執行佇列中。但值得注意的是，setTimeout 不保證函數將在指定的時間精確執行，因為執行緒可能受到其他代碼的影響。執行時間可能有些變化，但通常非常接近指定的時間。

    另外，如果你希望定期重複執行一段程式碼，可以使用 setInterval 函數，它與 setTimeout 類似，但會定期重複執行指定的函數。
