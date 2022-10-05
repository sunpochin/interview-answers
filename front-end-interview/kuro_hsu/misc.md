## https://kuro.tw/posts/2017/10/12/What-is-THIS-in-JavaScript-%E4%B8%8A/
 1. this 代表的是 function 執行時所屬的物件
 1. 記住，this 代表的是 function 執行時所屬的物件，而不是 function 本身。


### 所以我說那個 this 到底是什麼又不是什麼
 * 看到這裡，你應該要有的基本觀念：
   1. this 不是 function 本身
   1. this 也不是 function 的 scope
   1. this 與 function 在何處被宣告完全無關，而是取決於 function 被呼叫的方式
   1. this 指的是，當 function 執行時，這個 scope 的 owner
   1. 當 function 是某個物件的 method，this 指的就是上層物件 全域變數的上層物件就是 window


 1. HTML 解析完會變成 DOM Tree
 1. CSS 解析完會變 CSSOM Tress
 1. 以上兩者結束會開始計算樣式該如何去套用到 HTML 上，並產生 Render Tree
 1. 版面配置 Layout 決定出每個元素在頁面上的位置
 1. 最後經過 Paint 將計算結果轉為實際的像素，繪製在畫面上


📖 渲染流程
▍Layout（排版）階段
▍Paint（繪圖）階段
▍Compositing（組合）階段

