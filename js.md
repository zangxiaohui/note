## JS 创建对象的几种方法

- 对象的字面量
- 构造器模式
- 工厂模式


** 1. 直接调用的时候它叫“普通函数”，此时用全局对象window做上下文。**
** 2. 用new操作符调用的时候它叫“构造函数”，此时用这个新生的对象做上下文。**
** 3. 用某个对象拽着它调用的时候，它叫做“方法”，此时用拽它的那个对象做上下文。**


1. 简单对象字面量

    //创建一个简单对象字面量
    var person = {};

    // 加入属性和方法
    person.name = 'ifcode';
    person.setName = function(theName) {
       person.name = theName;
    }

[JS创建对象的几种方式]()http://www.jianshu.com/p/f9a1203e33d0
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



构造器模式:

    function Person(name,age,job){
    this.name=name;
    this.age=age;
    this.job=job;
    this.introduce=function(){
    alert("My name is "+this.name+", I am"+age+"year(s) old, I am a "+job+".");
    }
    }

工厂模式：

    function createPerson(name,age,job){
    var o=new Object();
    o.name=name;
    o.age=age;
    o.job=job;
    return o;
    }






new 语句后面必须带构造函数，只有构造函数才能 new，这个构造函数负责对象的初始化。


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



# 在 ES6 中 改良的 5 个 JavaScript “缺陷”
