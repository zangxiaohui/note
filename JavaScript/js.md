# JS 创建对象的几种方法

- 工厂模式 (用函数来封装以特定接口创建对象，该函数返回一个对象，工厂模式美元解决对象识别的问题)
- 构造函数模式
- 原型模式


## 工厂模式：

    function createCar(sColor,iDoors,iMpg) {
      var oTempCar = new Object;
      oTempCar.color = sColor;
      oTempCar.doors = iDoors;
      oTempCar.mpg = iMpg;
      oTempCar.showColor = function() {
        alert(this.color);
      };
      return oTempCar;
    }

    var oCar1 = createCar("red",4,23);
    var oCar2 = createCar("blue",3,25);

    oCar1.showColor();    //输出 "red"
    oCar2.showColor();    //输出 "blue"


每次调用函数 createCar()，都要创建新函数 showColor()，意味着每个对象都有自己的 showColor() 版本。而事实上，每个对象都共享同一个函数。
有些开发者在工厂函数外定义对象的方法，然后通过属性指向该方法，从而避免这个问题：

    function showColor(){
      alert(this.color)
    }
    function createCar(sColor, iDoors, iMpg){
      oTempCar.showColor = showColor;
    }

## 构造函数方式

    function Car(sColor,iDoors,iMpg) {
      this.color = sColor;
      this.doors = iDoors;
      this.mpg = iMpg;
      this.showColor = function() {
        alert(this.color);
      };
    }

    var oCar1 = new Car("red",4,23);
    var oCar2 = new Car("blue",3,25);




** 1. 直接调用的时候它叫“普通函数”，此时用全局对象window做上下文。**
** 2. 用new操作符调用的时候它叫“构造函数”，此时用这个新生的对象做上下文。**
** 3. 用某个对象拽着它调用的时候，它叫做“方法”，此时用拽它的那个对象做上下文。**



## 原型模式

    // 原型模式
    function Person(){}
    Person.prototype.name = "Tayler Swift";
    Person.prototype.age = 22;
    Person.prototype.job = "singer";
    Person.prototype.sayName = function(){
      alert(this.name)
    }
    var person1 = new Person();




当复制保存着对象的某个变量时，操作的是对象的引用，但在为对象添加属性时，操作的是实际的对象。

1. 简单对象字面量

    //创建一个简单对象字面量
    var person = {};

    // 加入属性和方法
    person.name = 'ifcode';
    person.setName = function(theName) {
       person.name = theName;
    }

[JS创建对象的几种方式](http://www.jianshu.com/p/f9a1203e33d0)
非常简单，但一般情况下不推荐这种方法。JS good parts书中认为这种写法可读性不够强，作者推荐的是后面一种写法。

2. 嵌套对象字面量

    var person = {
        name: 'ifcode',
        setName: function(theName) {
            this.name = theName;
        }
    }

以上两种写法适用于只存在一个实例的对象


给对象定义方法，

A:如果用传统定义对象的方式，就需要先定义方法，然后再把这个方法名赋值给对象的一个属性，如果要调用这个方法不加括号，就是返回方法代码；如果要调用这个方法该对象属性后面加上括号，就得到方法的返回值

    function objrun(){
           return ‘123’;
    }
    var box = new Object();
    box.name=’abc’;
    box.age = 28;
    box.run = objrun;
    alert(box.run());              //结果为123
    // alert(box.run);              //结果为function objrun(){
                                                                   return ‘123’;
    }
    //如果box.run = objrun();
    //alert(box.run);              //结果为123，如果带上圆括号，就报错啦

B:用字面量定义，只需要直接在对象的这个属性上，写function就行，这个function上面没有函数名，他是个匿名函数，那怎么调用这个方法呢，用对象的这个属性名，要调用方法，同上就行

    var box = {
       name:’abc’,
       age:28,
       run:function(){
                  return ‘123’;
    }
    }
    alert(box.run());










    var date = Date(2016, 3, 20);
    date instanceof Date; // false
    Object.prototype.toString.call(date); // [object String] 并非 Date 类型

js特性原因，Date除了是一个构造器外，同时也是一个函数，这个没有new的例子相当于调用了Date函数然后把返回值赋值给date,并没有产生新的Date的实例，所以instanceof返回false。


不是Date一个对象的问题，是js语言的特性。
js的对象构造器，实际上是一个函数。
用new方式，会创建对象的一个新实例。
如果不用new，相当于直接调用函数。构造函数内如果有对this的引用，不会指向新实例本身（也不存在这个新实例），而是会指向调用构造函数时的上下文环境。


Javascript中调用一个函数（对象），使用new或者直接调用有什么区别？


    function Man(age){
      this.sex="male";
      this.age=age;
    }
    m1=Man(20);
    m2=new Man(21);







## 代码精简 js常见代码缩写

#### 变量递增/递减/乘/除

    growCount = growCount + 1;
    shrinkCount = shrinkCount -1;

等同于

    growCount ++;
    shrinkCount - -;

加减乘除

    growCount += 100；

等同于

    growCount = growCount + 100



# 在 ES6 中 改良的 5 个 JavaScript “缺陷”


Pay attention to the comments in the code below:

   var a = 4;    // a is a global variable, it can be accessed by the functions below

   function foo() {
       var b = a * 3;    // b cannot be accessed outside foo function, but can be accessed by functions
                       // defined inside foo
       function bar(c) {
       var b = 2;  // another `b` variable is created inside bar function scope
                   // the changes to this new `b` variable don't affect the old `b` variable
       console.log( a, b, c );
       }

       bar(b * 4);
   }

   foo(); // 4, 2, 48

# IIFE, Immediately Invoked Function Expression, is a common pattern for
creating local scopes example:

       (function(){ // the function expression is surrounded by parenthesis
           // variables defined here
           // can't be accessed outside
       })(); // the function is immediately invoked

- 比如JavaScript中没有命名空间，而且只有function代码块内部可以隔离变量作用域，自调用匿名函数就用来防止变量弥散到全局
- 1. js中没有块级作用域，用来隔离作用域避免污染，或者截断作用域链，避免闭包造成引用变量无法释放。
  2. 利用立即执行特性，返回需要的业务函数或对象，避免每次通过条件判断来处理。

- IIFE最常用的功能显然是隔离作用域。
- 还有种常用就是，用IIFE写惰性载入，因为函数被执行引擎以同步的方式立即执行了，所以当你在之后的代码访问这个变量的时候可以直接返回给你计算后的筛选结果了。

## if(something)与(something !=null)完全等价



隐式转换

NaN ≠ NaN
new Object ≠ newObject
js中对象的比较是用引用比较，而不是值比较
[1,2] == [1,2] 返回false
=======
## 正则

    '<p><a href="http://aaa.com/" target="_blank">新发现</a></p>'.replace(/href="(?:.+?)"/ig, 'href="#"');

    ?:匹配不获取

    ?懒惰匹配

    .+一个以上任意字符


事件处理函数的工作机制：
  在为某个元素添加了事件处理函数后，一旦事件发生，相应的js代码就会得到执行，被调用的js代码可以返回一个值，这个值将被传递给那个事件处理函数。
  e.g. 我们给某个链接添加了一个onclick事件处理函数，并让这个处理函数所触发的js代码返回boolean,这样一来，当这个链接被点击时，js返回的指是true，onclick时间处理函数就会认为“这个链接被点击了”，反之，会认为“这个链接被点击”


break跳出循环
continue跳出这次

1、事件处理方法中的return false 并不是终止事件，而是阻止事件宿主的默认行为；
1、不是在所有的事件处理方法中，return false都能阻止事件宿主的默认行为；
事实上，仅仅在HTML事件属性和DOM 0级事件处理方法中，才能通过返回return false的形式组织事件宿主的默认行为。
可参考[Document Object Model (DOM) Level 3 Events Specification](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow-default-cancel)


return 后面千万不要跟 换行(回车)
在ＩＥ里面，事件是通过回调函数实现的（ＭＳ的.NET, IE, Win32在事件处理上都是一致的）．如果没有return false了，就会接着往下执行，如果返回了一个false就跳出这个回调函数．




# [js中(function(){…})()立即执行函数写法理解](http://dengo.org/archives/1004)

函数声明：function fnName () {…};使用function关键字声明一个函数，再指定一个函数名，叫函数声明。

函数表达式 var fnName = function () {…};使用function关键字声明一个函数，但未给函数命名，最后将匿名函数赋予一个变量，叫函数表达式，这是最常见的函数表达式语法形式。

匿名函数：function () {}; 使用function关键字声明一个函数，但未给函数命名，所以叫匿名函数，匿名函数属于函数表达式，匿名函数有很多作用，赋予一个变量则创建函数，赋予一个事件则成为事件处理程序或创建闭包等等。

函数声明和函数表达式不同之处在于，一、Javascript引擎在解析javascript代码时会‘函数声明提升’（Function declaration Hoisting）当前执行环境（作用域）上的函数声明，而函数表达式必须等到Javascirtp引擎执行到它所在行时，才会从上而下一行一行地解析函数表达式，二、函数表达式后面可以加括号立即调用该函数，函数声明不可以，只能以fnName()形式调用 。以下是两者差别的两个例子。

可以看到输出结果，在function前面加！、+、 -甚至是逗号等到都可以起到函数定义后立即执行的效果，而（）、！、+、-、=等运算符，都将函数声明转换成函数表达式，消除了javascript引擎识别函数表达式和函数声明的歧义，告诉javascript引擎这是一个函数表达式，不是函数声明，可以在后面加括号，并立即执行函数的代码。

( function(){…} )()和( function (){…} () )是两种javascript立即执行函数的常见写法


加括号代表执行这个函数，不加括号代表把这个函数赋值给某个变量。 Ex：
function Test(){
alert( 郑久胜是笨蛋。 )
}
此时，Test代表这个函数的对象，Test()就是直接运行了。 var Fun=Test;就是让Fun也指向了Test，此时Fun()就相当于Test()。
那么我们来说下oBtn.onclick = Test;
oBtn.onclick也就相当于一个Fun，只不过它附属于oBtn这个标签。
等号是赋值操作如果是对象，就会把对象的指向付给变量。Test是对象指向，Test()就是执行了函数，它最终是个什么东西，就看函数体返回什么类型，Test里就一个alert，没有return任何东西，那么就相当于undefined。所以
oBtn.onclick=undeined了，你执行就没反应。
但是如果Test的内部返回的是一个函数比如：
    function Test(){
    alert( 郑久胜是笨蛋。 )
    return function(){alert( 怎么可能？ )}
    }
oBtn.onclick=Test()就相当于
oBtn.onclick=function(){alert( 怎么可能？ )}




function A(){
  for(var i=0; i<3; i++){  //这句的执行默认都是在结尾对i+1操作
    console.log(i); //0 1 2
  }
  console.log(i) //3 当i=2时，继续执行，执行后i+1=3，然后在进循环判断i已经不再小于三，这次跳出循环
}


一般对于某种类型t1，首次进入时countMap没有t1属性，所以会返回undefined，则初始化默认设置为1.
而后每次出现，都+1.
最后统计没种类型的出现次数，若全部相同，则同构。



TooBug  16:16:40
a=[{a:1},2,3,4]
b = a.slice();
TooBug  16:16:53
试着改一下b[0].a或者a[0].a
TooBug  16:09:30
浅复制也是复制。
TooBug  16:09:43
得有嵌套才能分出区别。



第一个i是函数的形参，是私有变量，与外面的i没有关系，被私有作用域保护起来了，

for (var i = 0, arr = []; i <= 3; i++) {
  arr.push(function(i){console.log(i)}(i))
}

arr[0]()
arr(1)()


(function(x) {
 return (function(y) {
 console.log(x);
 })(2)
})(1);



