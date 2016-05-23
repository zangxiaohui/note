###

    $ npm init

npm init命令会为你创建一个package.json文件，这个文件保存着这个项目相关信息。比如你用到的各种依赖

    npm install --global gulp-cli

    npm install -save-dev

### browser-sync

####Ruby，Mac自带，如果没有请安装

####安装Gem

Gem是Ruby第三方插件管理器
下载Gem到本地后，在终端输入如下代码

    ## 检查gem版本
    gem -v
    ## 更新Gem(提示权限)
    gem update --system

gem update --system。这一步需要翻墙，否则会出现404错误。解决办法参考：https://ruby.taobao.org/


ruby 源码

    cd ruby-2.3.0/
    ./configure
    make
