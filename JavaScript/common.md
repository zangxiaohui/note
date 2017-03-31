# 如何将浮点数点左边的数每三位添加一个逗号，如12000000.11转化为『12,000,000.11』?

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




# 优雅的数组降维

    function flattenArray(arr) {
      return Array.prototype.concat.apply([], arr);
    }

    const flatten = arr => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);

    // 第一个参数 input 即为需要展开的数组，所以 flatten 方法中传入的第一个参数肯定是数组（或者 arguments）；
    // 第二个参数 shallow 是个布尔值，如果为 false，则表示数组是深度展开，如果为 true 则表示只展开一层；
    // 第四个参数表示 input 展开的起始位置，即从 input 数组中第几个元素开始展开。
    // Internal implementation of a recursive `flatten` function.

    var flatten = function(input) {
      var output = [], idx = 0;
      for (var i = 0, length = input.length; i < length; i++) {
        var value = input[i];
        console.log(value);
        if (Array.isArray(value)) {

        }
      }
    }


    var ans = flatten([[1, 2], [3, 4]], false, false, 1);
    console.log(ans); // => [3, 4]
      var flatten = function(input, shallow, strict, startIndex) {
        var output = [], idx = 0;
        for (var i = startIndex || 0, length = input.length; i < length; i++) {
          var value = input[i];
          if (Array.isArray(value)) {
            // Flatten current level of array or arguments object.
            if (shallow) {
              var j = 0, len = value.length;
              while (j < len) output[idx++] = value[j++];
            } else {
              flatten(value, shallow, strict);
              idx = output.length;
            }
          } else if (!strict) {
            output[idx++] = value;
          }
        }
        return output;
      };


# 数组去重
    var arr = [1,1,'1','1',0,0,'0','0',undefined,undefined,null,null,NaN,NaN,{},{},[],[],/a/,/a/];


    // ES6
    function unique (arr) {
      const seen = new Map()
      return arr.filter((a) => !seen.has(a) && seen.set(a, 1))
    }

    function unique(arr) {
        var ret = [];
        var len = arr.length;
        var tmp = new Map();
        for(var i=0; i<len; i++){
            if(!tmp.get(arr[i])){
                tmp.set(arr[i], 1);
                ret.push(arr[i]);
            }
        }
        return ret;
    }

    // or
    function unique (arr) {
      return Array.from(new Set(arr))
    }

＃ Array.prototype.indexOf()

    function unique(arr) {
        return arr.filter(function(item, index){
            // indexOf返回第一个索引值，
            // 如果当前索引不是第一个索引，说明是重复值
            return arr.indexOf(item) === index;
        });
    }

    function unique(arr) {
        var ret = [];
        arr.forEach(function(item){
            if(ret.indexOf(item) === -1){
                ret.push(item);
            }
        });
        return ret;
    }

＃ Array.prototype.includes()

    function unique(arr) {
        var ret = [];
        arr.forEach(function(item){
            if(!ret.includes(item)){
                ret.push(item);
            }
        });
        return ret;
    }

# 双重遍历

    function unique(arr) {
        var ret = [];
        var len = arr.length;
        var isRepeat;
        for(var i=0; i<len; i++) {
            isRepeat = false;
            for(var j=i+1; j<len; j++) {
                if(arr[i] === arr[j]){
                    isRepeat = true;
                    break;
                }
            }
            if(!isRepeat){
                ret.push(arr[i]);
            }
        }
        return ret;
    }

    function unique(arr) {
        var ret = [];
        var len = arr.length;
        for(var i=0; i<len; i++){
            for(var j=i+1; j<len; j++){
                if(arr[i] === arr[j]){
                    j = ++i;
                }
            }
            ret.push(arr[i]);
        }
        return ret;
    }

    function unique(arr) {
        var ret = [];
        var len = arr.length;
        var tmp = {};
        var tmpKey;
        for(var i=0; i<len; i++){
            tmpKey = typeof arr[i] + JSON.stringify(arr[i]);
            if(!tmp[tmpKey]){
                tmp[tmpKey] = 1;
                ret.push(arr[i]);
            }
        }
        return ret;
    }
// 取出第一个参数
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

// 类数组是
{length: 3, 0: 'arg1', 1: 'arg2', 2: 'arg3'}

// 将类数组转化成数组
Array.prototype.slice.call(arguments)

// 主要是截去第一个参数， 得到的是剩余参数
Array.prototype.slice.call(arguments, 1)


var arr = [1,1,'1','1',0,0,'0','0',undefined,undefined,null,null,NaN,NaN,{},{},[],[],/a/,/a/]



# 数据判断

## 判断是否为dom

    function(obj) { return !!(obj && obj.nodeType === 1); };

## 判断是否为dom

    var isArray = Array.isArray || function(obj) { return Object.prototype.toString.call(obj) === '[object Array]'; };

## 判断是否是空对象

    export function isEmptyObject(obj) {
      return Object.keys(obj).length === 0;
    }

    var isEmpty = function(obj) {
      if (obj == null) return true; // null 或者 undefined
      return Object.keys(obj).length === 0; // 返回一个数组
    }

  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

## 判断对象是否有某个属性

    // Shortcut function for checking if an object has a given property directly
    // on itself (in other words, not on a prototype).
    var has = function(obj, path) {
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      return obj != null && hasOwnProperty.call(obj, path);
    };

    var has = function(obj, path) {
      var hasOwnProperty = Object.prototype.hasOwnProperty;

      return obj != null && hasOwnProperty.call(obj, path);

      if (!_.isArray(path)) {
        return obj != null && hasOwnProperty.call(obj, path);
      }
      var length = path.length;
      for (var i = 0; i < length; i++) {
        var key = path[i];
        if (obj == null || !hasOwnProperty.call(obj, key)) {
          return false;
        }
        obj = obj[key];
      }
      return !!length;
    };








var shallowProperty = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

var getLength = shallowProperty('length');




var flatten = function(input)






/a/  RegExp




function Polygon(sides) {
  if (this instanceof Polygon) {

  }
}




buildUrl : function(url, items) {
    var query = '';

    plupload.each(items, function(value, name) {
      query += (query ? '&' : '') + encodeURIComponent(name) + '=' + encodeURIComponent(value);
    });

    if (query) {
      url += (url.indexOf('?') > 0 ? '&' : '?') + query;
    }

    return url;
  },

function addURLParam(url, name, value) {
  url += (url.indexOf('?') == -1 ? '?' : '&');
  url += encodeURIComponent(name) + '=' + encodeURIComponent(value);
  return url;
}



function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}


const authBase = function (options, key){
    const token = common.getAccessToken();
    let show = false;
    if(token){
        const user = JSON.parse(Base64.decode(token.split(".")[1]));
        console.log(user)
        for(let option of options){
            if(option == user[key]){
                show = true;
                break;
            }
        }
    }
    return (com) => {
        return show? com: "";
    }
};
