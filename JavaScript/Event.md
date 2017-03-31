＃ 事件绑定的方式有几种？ 或者叫监听事件

1、直接绑定在dom上  || HTML 内联属性

    <div onclick='func()'>按我</div>


2、使用推荐的标准模式

    var btn = document.getElementById('btn');
    btn.addEventListener('click', function() {
      console.log('111111')
    })






        // Use the handy event callback
            document.addEventListener( "DOMContentLoaded", completed, false );

            // A fallback to window.onload, that will always work
            window.addEventListener( "load", completed, false );
