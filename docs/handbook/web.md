	HTML

## HTML语义化

- 对人：增加代码的可读性，让代码更易维护
- 对机器：对搜索引擎更友好利于SEO

## HTML5新特性，

HTML5主要是关于图像、位置、存储、多任务等功能的增加：

- 语义化标签，如：article、footer、header、nav等
- 视频video、音频audio
- 画布canvas
- 表单控件，calemdar、date、time、email
- 地理
- 本地离线存储，localStorage长期存储数据，浏览器关闭后数据不丢失，sessionStorage的数据在浏览器关闭后自动删除
- 拖拽释放

## HTML5移除的元素·

- 纯表现的元素：`basefont、font、s、strike、tt、u、big、center`
- 对可选用性产生负面影响的元素：`frame、frameset、noframes`

## 块级元素

- display：block（转为块级）

- p、div、form、ul、li、ol、table、h1、h2、h3、h4、h5、h6、dl、dt、dd

## 行内元素

- span、a、img、button、input、select
- display:inline把元素转换为行内元素

## 行内块元素

- 不自动换行，可以声明宽高
- display: inline-block将元素转换为行内块元素

## 盒子模型

- 怪异模型：width
- 标准模型：width+padding+border

## margin 纵向重叠

- 上下margin会取较大值

## BFC

- BFC,Block Format Context，块级格式化上下文。形成一块独立的渲染区域，内部元素的渲染不会影响边界之外的元素
- 形成BFC的条件
  1. overflow不是visible
  2. display是flex或者inline-block等
  3. position是absolute或fixed
  4. float不是none
- BFC解决的问题
  - 垂直方向margin塌陷问题
  - float脱离文档流后，父元素高度塌陷问题

## 圣杯布局和双飞翼布局

- 圣杯：margin
- 双飞翼：float

## clearfix清除浮动   	 	

```css
// 垂直方向上margin塌陷问题
// 子元素float脱离文档流后，父元素高度塌陷问题
.clear::after{
	content:'';
	height:0;
	visibility:hidden;
	display:block;
    clear:both;
}
.clearfix{
    overflow:auto;
	*zoom:1
}
```

## flex使用

```css
.main{
    width: 300px;
    height: 300px;
    border: 1px solid red;
    display: flex;
}
.item{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: aqua;
}
.item:nth-child(1){
    align-self: flex-start;
}
.item:nth-child(2){
    align-self: center;
}
.item:nth-child(3){
    align-self: flex-end;
}
```

```html
<div class="main">
	<div class="item"></div>
	<div class="item"></div>
	<div class="item"></div>
</div>
```

## 水平垂直居中

```css
// 行级元素居中
.center{
	line-height:高度;
	text-align:center;
}
// 块级元素居中
// 第一种
.item{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
// 第二种
.item{
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    margin-left: -50px;
    margin-top: -50px;
}
// 第三种
.item{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
// 第四种
.item{
    display: flex;
    justify-content: center;
    align-items: center;
}
// 第五种
.main{
    margin: auto;
    display: grid;
}
.item{
    margin: auto;
}
```

##  *src* 和 *href* 的区别

- src：指向请求外部资源的来源地址（img，video，audio，script...）
- href：超链接，指向网络资源

## link和@import

- （1）link属于XHTML标签，除了加载CSS外，还能用于定义RSS, 定义rel连接属性等作用；而@import是CSS提供的，只能用于加载CSS;
- （2）页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;
- （3）import是CSS2.1 提出的，只在IE5以上才能被识别，而link是XHTML标签，无兼容问题。
