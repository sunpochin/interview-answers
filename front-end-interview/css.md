## CSS Interview Questions
- https://www.g2i.co/blog/2021-front-end-developer-interview-questions-and-answers
1. What is the box model?
    - The CSS box model refers to the way CSS handles layout. Each element is composed of its content, padding, border, and margin.
1. Know your CSS selectors!
    - Many interview questions will require you to know class selectors like .foo and id selectors like #bar. It's also good to know that you can select siblings div + p, Descendents div p, and children div > p
1. CSS specificity
    - If your CSS has two conflicting selectors, who wins? For example, if you write https://jsfiddle.net/sunpochin/qz83guxo/18/
    - Will the word "hello" be red or blue? To solve this, CSS has a priority order for which types of selectors win over other ones. !important tags are the strongest, and the universal * selector is the weakest. For a fun illustration to help you learn CSS specificity, check out specifishity.com: https://specifishity.com/

1. What are pseudo-elements?
    - Pseudo-elements are keywords that let you specify specific parts of an element instead of the entire thing. For example, you can select an element's ::first-line or select ::before an element.

1. What is Flexbox?
    - Flexbox is a W3 specified layout system for CSS. It allows you to easily position elements inside a container even if the size of that container is dynamic. You should familiarize yourself with some basic Flexbox layouts. Some free resources include:
    - A Complete Guide to Flexbox
    - Flexbox Zombies