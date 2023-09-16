## CSS Interview Questions

- CSS 水平垂直置中的不同方法:
  {
  display: flex;
  justify-content: center;
  align-items: center;
  }

- CSS spcificity 優先性：
  !important > inline style > id > class = pseudo-class = [attribute] > tag = pseudo-element > universal selector

- CSS box model 是什麼？

  - CSS box model 是 CSS 處理 layout 的方式。每個元素都由它的 content, padding, border, margin 組成。

    CSS Box Model（CSS 盒模型）是一种用于描述 HTML 元素的布局和盒子模型的模型。它将每个 HTML 元素视为一个矩形的盒子，该盒子由四个部分组成，分别是内容（Content）、内边距（Padding）、边框（Border）和外边距（Margin）。这些部分组成了元素在页面上占用空间的方式。

    具体来说，CSS 盒模型的各个部分如下：

    内容（Content）：这是元素的实际内容，例如文本、图像或其他嵌套元素。内容的大小由元素的 width（宽度）和 height（高度）属性定义。

    内边距（Padding）：内边距是内容周围的空白区域，它用于控制内容与边框之间的距离。内边距可以使用 padding 属性进行设置。

    边框（Border）：边框是内边距的外部边界，它围绕在内边距的外部。边框具有不同的样式、宽度和颜色，可以通过 border 属性进行定义。

    外边距（Margin）：外边距是元素外部的空白区域，它用于控制元素与其他元素之间的距离。外边距可以使用 margin 属性进行设置。

    CSS 盒模型的布局和渲染方式取决于这些部分的计算。元素的总宽度和高度包括了内容的宽度和高度、内边距的宽度、边框的宽度以及外边距的宽度。

    了解和熟悉 CSS 盒模型对于设计和排版网页非常重要，因为它决定了元素的大小、内外距离和布局方式。通过调整这些部分的值，可以实现不同的页面布局和设计效果。

- https://www.g2i.co/blog/2021-front-end-developer-interview-questions-and-answers

1. What is the box model?
   - The CSS box model refers to the way CSS handles layout. Each element is composed of its content, padding, border, and margin.
1. Know your CSS selectors!
   - Many interview questions will require you to know class selectors like .foo and id selectors like #bar. It's also good to know that you can select siblings div + p, Descendents div p, and children div > p
1. CSS specificity

   - If your CSS has two conflicting selectors, who wins? For example, if you write https://jsfiddle.net/sunpochin/qz83guxo/18/
   - Will the word "hello" be red or blue? To solve this, CSS has a priority order for which types of selectors win over other ones. !important tags are the strongest, and the universal \* selector is the weakest. For a fun illustration to help you learn CSS specificity, check out specifishity.com: https://specifishity.com/

1. What are pseudo-elements?

   - Pseudo-elements are keywords that let you specify specific parts of an element instead of the entire thing. For example, you can select an element's ::first-line or select ::before an element.

1. What is Flexbox?
   - Flexbox is a W3 specified layout system for CSS. It allows you to easily position elements inside a container even if the size of that container is dynamic. You should familiarize yourself with some basic Flexbox layouts. Some free resources include:
   - A Complete Guide to Flexbox
   - Flexbox Zombies
