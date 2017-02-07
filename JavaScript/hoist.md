function foo(a) {
    var a;
    return a;
}
function bar(a) {
    var a = 'bye';
    return a;
}
[foo('hello'), bar('hello')]




这种说法不妥，正确的原理如下
进入执行上下文（在执行代码之前），变量对象的创建过程：
（1）函数的形参（当进入函数执行上下文时）
将作为变量对象的一个属性，其属性名就是形参的名字，其值就是实参的值；对于没有传递的参数，其值为undefined
（2）函数声明（FunctionDeclaration, FD）
将作为 变量对象的一个属性，其属性名和值都是函数对象创建出来的；如果变量对象已经包含了相同名字的属性，则替换它的值
（3）变量声明（var，VariableDeclaration）
将变量对象的一个属性，其属性名即为变量名，其值为undefined;如果变量名和已经声明的函数名或者函数的参数名相同，则不会影响已经存在的属性。
