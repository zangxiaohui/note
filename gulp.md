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



WARNING: You have '~/.profile' file, you might want to load it,
to do that add the following line to '/home/frozen/.bash_profile':
source ~/.profile
怎么加？
    echo "source ~/.profile" >> ~/.bash_profile


安装rvm
    gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
    curl -sSL https://get.rvm.io | bash -s stable
    // 修改 RVM 的 Ruby 安装源到国内的 [淘宝镜像服务器](http://ruby.taobao.org/)，这样能提高安装速度
    sed -i -e 's/ftp\.ruby-lang\.org\/pub\/ruby/ruby\.taobao\.org\/mirrors\/ruby/g' ~/.rvm/config/db
