##

- 什麼是 virtual DOM? 為什麼要用 virtual DOM?
  virtual DOM 是一個概念，用 JS 模擬 DOM 的結構，當資料改變時，會先更新 virtual DOM，再跟真正的 DOM 做比對，只更新有改變的部分，這樣可以提升效能。

- 以下是关于 Vue.js 中 computed 和 watch 的差异的繁体中文解释：

  - 计算属性（computed）： - 声明方式：computed 属性是在 Vue 组件中声明的计算属性，通常作为组件的属性存在。
  - 用途：computed 属性用于计算和派生数据，通常是依赖于其他响应式数据的值的计算。它们是基于数据的衍生属性。
    自动缓存：

    computed 属性会自动缓存其计算结果，只有相关的响应式数据发生变化时，才会重新计算。这有助于提高性能，避免不必要的重复计算。
    返回值：

    computed 属性返回一个新的值，可以像普通属性一样访问，而不需要在模板中调用它们。Vue 会在需要时自动计算和更新它们。
    示例：

    javascript
    Copy code
    computed: {
    fullName() {
    return this.firstName + ' ' + this.lastName;
    }
    }
    观察器（watch）：

    - 声明方式：
      - watch 属性是一个函数，用于监视特定数据的变化，通常在 Vue 组件的 watch 选项中声明。
        用途：

    watch 用于执行自定义的响应逻辑，当特定数据发生变化时，它可以执行一些副作用，如发起异步请求、执行计算等。
    不自动缓存：

    watch 不会自动缓存数据的先前值，每当被监视的数据发生变化时，都会触发 watch 中定义的函数。
    返回值：

    watch 函数没有返回值，它主要用于执行副作用操作，如调用方法、发出通知等。
    示例：

    javascript
    Copy code
    watch: {
    firstName(newVal, oldVal) {
    console.log('firstName changed from ' + oldVal + ' to ' + newVal);
    }
    }
    总结：

    computed 用于计算和派生数据，具有自动缓存功能，适合用于衍生属性的计算。
    watch 用于执行自定义的响应逻辑，不会自动缓存数据的先前值，适合用于具有副作用操作的场景，如异步请求或特定数据变化时的复杂逻辑处理。
    选择使用哪个取决于你的需求。如果你只是需要计算数据并确保它们在依赖数据变化时自动更新，那么使用 computed 更合适。如果你需要执行自定义的响应逻辑或需要监视多个数据的变化，那么使用 watch 更合适。通常，它们可以在不同的情况下一起使用，以满足不同的需求。

- vue2 跟 vue3 的差異

- v-for 當中的 key 值能做什麼？

  - 确保唯一性：key 属性的主要作用是确保迭代的每个项都具有唯一的标识符。这有助于 Vue 在更新 DOM 时区分各个项，以确保正确的项被更新、添加或删除，而不会产生混淆。

  - 提高性能：通过提供唯一的 key 值，Vue 可以更快速地识别和比较 DOM 元素，从而提高渲染性能。如果没有提供 key，Vue 可能会使用默认的比较算法，导致不必要的 DOM 操作，性能下降。

  - 避免重复元素问题：如果不为 v-for 中的项提供 key，可能会导致在某些情况下出现重复元素的问题，尤其是在更新迭代数据时。通过为每个项提供唯一的 key，可以确保每个项在 DOM 中只出现一次。

  - 协助 Vue 的响应性：key 属性还可以帮助 Vue 更好地追踪迭代数据的变化。当数据项的 key 发生变化时，Vue 会将其视为一个新的项，并相应地更新 DOM，而不是试图复用之前的 DOM 元素。

* v-model 如何作到 雙向綁定
  https://israynotarray.com/vue/20210607/665675438/

* v-if
  https://www.cythilya.tw/2017/04/22/vue-conditional-rendering/

https://medium.com/@haha861924/2022-%E8%B6%8A%E6%8C%AB%E8%B6%8A%E5%8B%87%E7%9A%84%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%AB%E9%9D%A2%E8%A9%A6%E5%BF%83%E5%BE%97-f206b2157b3b
