定义一个react的元器件

创建元器件用到的接口是 React.createClass({})

    var HelloWorld = React.createClass({
      render:function(){
        return (
          React.createElement("div",null,"Hello World!")
          )

      }
      })
