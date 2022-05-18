# JavaScript

title：数据类型
---

- 基本类型：undefined，null，string，number，Boolean，symbol，bigInt
- 引用类型：Object（Function，Array，Date，Math等）
- 基本类型储存在栈中，引用类型在栈中存储了指针，该指针指向堆中该实体的起始地址

## title：&& 、|| 、 !!

- &&：二者为true返回true，否则返回false
- ||：其中有一个true返回true，全为false才返回false
- !!：将右侧值强制转为布尔值

title：数据类型转换

布尔：Boolean()

数字：Number()、parseInt()、parseFloat()

字符串：toString()、String()

## title：数据类型判断

- typeof： typeof 对于对象来说，除了函数都会显示 object ，不能准确判断对象

```js
console.log(typeof 2);               // number
console.log(typeof true);            // boolean
console.log(typeof 'str');           // string
console.log(typeof []);              // object     []数组的数据类型在 typeof 中被解释为 object
console.log(typeof function(){});    // function
console.log(typeof {});              // object
console.log(typeof undefined);       // undefined
console.log(typeof null);            // object     null 的数据类型被 typeof 解释为 object
```

- instanceof： 可以精准判断引用数据类型（Array，Function，Object），而基本数据类型不能被instanceof 精准判断。
  - instanceof是通过原型链来做比较

```js
console.log(2 instanceof Number);                    // false
console.log(true instanceof Boolean);                // false 
console.log('str' instanceof String);                // false  
console.log([] instanceof Array);                    // true
console.log(function(){} instanceof Function);       // true
console.log({} instanceof Object);                   // true    
```

-  constructor：根据构造器来判断类型

```js
console.log((2).constructor === Number); // true
console.log((true).constructor === Boolean); // true
console.log(('str').constructor === String); // true
console.log(([]).constructor === Array); // true
console.log((function() {}).constructor === Function); // true
console.log(({}).constructor === Object); // true
// 这里有一个坑，如果我创建一个对象，更改它的原型，constructor就会变得不可靠了
function Fn(){};
Fn.prototype = new Array();
var f = new Fn();
console.log(f.constructor === Fn);    // false
console.log(f.constructor === Array); // true 
```

-  Object.prototype.toString.call()  使用 Object 对象的原型方法 toString ，使用 call 进行狸猫换太子，借用Object的 toString 方法 

```js
var a = Object.prototype.toString;
console.log(a.call(2));
console.log(a.call(true));
console.log(a.call('str'));
console.log(a.call([]));
console.log(a.call(function(){}));
console.log(a.call({}));
console.log(a.call(undefined));
console.log(a.call(null));
```

## js内置对象

 js 中的内置对象主要指的是在程序执行前存在全局作用域里的由 js 定义的一些全局值属性、函数和用来实例化其他对象的构造函 数对象。 

```
全局的对象（ global objects ）或称标准内置对象，不要和 "全局对象（global object）" 混淆。这里说的全局的对象是说在全局作用域里的对象。全局作用域中的其他对象可以由用户的脚本创建或由宿主程序提供。

标准内置对象的分类

（1）值属性，这些全局属性返回一个简单值，这些值没有自己的属性和方法。

例如 Infinity、NaN、undefined、null 字面量

（2）函数属性，全局函数可以直接调用，不需要在调用时指定所属对象，执行结束后会将结果直接返回给调用者。

例如 eval()、parseFloat()、parseInt() 等

（3）基本对象，基本对象是定义或使用其他对象的基础。基本对象包括一般对象、函数对象和错误对象。

例如 Object、Function、Boolean、Symbol、Error 等

（4）数字和日期对象，用来表示数字、日期和执行数学计算的对象。

例如 Number、Math、Date

（5）字符串，用来表示和操作字符串的对象。

例如 String、RegExp

（6）可索引的集合对象，这些对象表示按照索引值来排序的数据集合，包括数组和类型数组，以及类数组结构的对象。例如 Array

（7）使用键的集合对象，这些集合对象在存储数据时会使用到键，支持按照插入顺序来迭代元素。

例如 Map、Set、WeakMap、WeakSet

（8）矢量集合，SIMD 矢量集合中的数据会被组织为一个数据序列。

例如 SIMD 等

（9）结构化数据，这些对象用来表示和操作结构化的缓冲区数据，或使用 JSON 编码的数据。

例如 JSON 等

（10）控制抽象对象

例如 Promise、Generator 等

（11）反射

例如 Reflect、Proxy

（12）国际化，为了支持多语言处理而加入 ECMAScript 的对象。

例如 Intl、Intl.Collator 等

（13）WebAssembly

（14）其他

例如 arguments
```

## null 和 undefined 

-  undefined 代表的含义是未定义 
-  null 代表的含义是空对象 
- 其实 null 不是对象，虽然 typeof null 会输出 object，但是这只是 JS 存在的一个悠久 Bug。在 JS 的最初版本中使用的是 32 位系统，为了性能考虑使用低位存储变量的类型信息，000 开头代表是对象，然而 null 表示为全零，所以将它错误的判断为 object 。虽然现在的内部类型判断代码已经改变了，但是对于这个 Bug 却是一直流传下来。

##  DOM 和 BOM

- DOM 指的是文档对象模型
- BOM 指的是浏览器对象模型 

## 三种事件模型

- DOM0级模型：
- IE 事件模型：
- DOM2 级事件模型：

## 事件委托

​	本质上是利用了浏览器事件冒泡的机制。因为事件在冒泡过程中会上传到父节点，并且父节点可以通过事件对象获取到 目标节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件，这种方式称为事件代理。 

## 事件传播

事件传播有三个阶段：

1. 捕获阶段–事件从 window 开始，然后向下到每个元素，直到到达目标元素事件或event.target。
2. 目标阶段–事件已达到目标元素。
3. 冒泡阶段–事件从目标元素冒泡，然后上升到每个元素，直到到达 window。

## DOM 操作

（1）创建新节点

```js
  createDocumentFragment()    //创建一个DOM片段
  createElement()   //创建一个具体的元素
  createTextNode()   //创建一个文本节点
```

（2）添加、移除、替换、插入

```js
appendChild(node)
removeChild(node)
replaceChild(new,old)
insertBefore(new,old)
```

（3）查找

```js
getElementById();
getElementsByName();
getElementsByTagName();
getElementsByClassName();
querySelector();
querySelectorAll();
```

（4）属性操作

```js
getAttribute(key);
setAttribute(key, value);
hasAttribute(key);
removeAttribute(key);
```

## js数组和字符串原生方法（后续）

## promise封装Ajax

```js
    function promiseUrl(mode, url) {
        let promise = new Promise(function (resolve, reject) {
            let xhr = new XMLHttpRequest();
            xhr.open(mode, url, true);
            xhr.onreadystatechange = function () {
                if (this.readyState !== 4) return;
                if (this.status === 200) {
                    resolve(this.response)
                } else {
                    reject(new Error(this.statusText))
                }
            }
            xhr.onerror = function () {
                reject(new Error(this.statusText))
            }
            xhr.responseType = "json";
            xhr.setRequestHeader("Accept", "application/json");
            xhr.send(null)
        })
        return promise
    }
```

## js 的几种模块规范

- CommonJS：require引入
- AMD：异步加载
- CMD：import和export来导入和导出模块

## 哪些操作会造成内存泄漏

- 1.意外的全局变量
- 2.被遗忘的计时器或回调函数
- 3.脱离 DOM 的引用
- 4.闭包

- 第一种情况是我们由于使用未声明的变量，而意外的创建了一个全局变量，而使这个变量一直留在内存中无法被回收。
- 第二种情况是我们设置了`setInterval`定时器，而忘记取消它，如果循环函数有对外部变量的引用的话，那么这个变量会被一直留在内存中，而无法被回收。
- 第三种情况是我们获取一个DOM元素的引用，而后面这个元素被删除，由于我们一直保留了对这个元素的引用，所以它也无法被回收。
- 第四种情况是不合理的使用闭包，从而导致某些变量一直被留在内存当中。

## `var`,`let`和`const`的区别

- var声明的变量会挂载在window上，而let和const声明的变量不会
- var声明变量存在变量提升，let和const不存在变量提升
- let和const声明形成块作用域
- 同一作用域下let和const不能声明同名变量，而var可以

## 箭头函数

