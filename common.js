// 如何将浮点数点左边的数每三位添加一个逗号，如12000000.11转化为『12,000,000.11』?
function commafy(num){
    return num && num
        .toString()
        .replace(/(\d)(?=(\d{3})+\.)/g, function($1, $2){
            return $2 + ',';
        });
}

common.numFormat = function (num) {
    return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
};




优雅的数组降维

function flattenArray(arr) {
  return Array.prototype.concat.apply([], arr);
}


export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}




取出第一个参数
var key = Array.prototype.shift.call(arguments);


new Date().getTime() === Date.now() === +(new Date())


## 用Apply方法， 将数组转为函数的参数

Math.max.apply(null, [14, 3, 77]) === Math.max(...[14, 3, 77])

Array.prototype.push.apply(arr1, arr2) === arr1.push(...arr2)

new (Date.bind.apply(Date, [null, 2015, 1, 1]))


剩余参数 就相当于

// 下面的代码模拟了剩余数组
function f(a, b){
  var args = Array.prototype.slice.call(arguments, f.length);
  // ...
}

// 现在代码可以简化为这样了
function(a, b, ...args) {

}

Object.prototype.toString.call()






// 写插件时的参数配置
params = params || {};
for (var prop in defaults) {
    if (prop in params && typeof params[prop]==='object') {
        for (var subProp in defaults[prop]) {
            if (! (subProp in params[prop])) {
                params[prop][subProp] = defaults[prop][subProp];
            }
        }
    }
    else if (! (prop in params)) {
        params[prop] = defaults[prop]
    }
}
