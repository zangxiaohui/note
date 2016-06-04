
    git add -A
    git commit -a -m'readme'
    git push -u origin master

[https://pages.github.com/](https://pages.github.com/)



Project Site
搭建项目站点

注意，代码不能放到 master 分支，而要放到 gh-pages 分支上。

在本地先创建分支

    git checkout -b gh-pages

创建远端的分支

    git push -u origin gh-pages

＃ 安装 nodejs

参考 nvm 的 README ，执行下面的命令，我用的是 Mac 但是 ubuntu 系统上应该也是一样的操作：

    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash

查看都有哪些版本可以安装：

    nvm ls-remote

可以看到当前最新版本是 v5.10.1 ，运行下面的命令来安装：

    nvm install v5.10.1

现在再来安装一个包，看看会被安装到什么位置：

    $ npm i -g gulp
    /Users/peter/.nvm/versions/node/v5.10.1/bin/gulp

可以看到 gulp 这个包安装到了 /Users/peter 之下。并且可执行文件也自动导出为系统命令了，可以通过运行下面的命令来确认：

    $ which gulp
    /Users/peter/.nvm/versions/node/v5.10.1/bin/gulp

＃＃设置默认版本
一个小问题，每次启动新 shell ，Node 还是老版本。如何写死成最新安装的 NVM 版本：

    nvm alias default 5.10.1
    default -> 5.10.1 (-> v5.10.1)

＃＃让 npm 使用淘宝镜像

nodejs 安装好之后，npm 这个装包命令也就装好了。npm 命令因为要从国外的服务器下载包，有时候速度不给力，所以这里给一个备选方案：自制一个 cnpm 命令，其实就是一个连接国内淘宝镜像的 npm 命令啦。

到 [taobao 相关页面](npm.taobao.org)，找到下面的命令：

    $ echo 'alias cnpm="npm --registry=https://registry.npm.taobao.org \
      --cache=$HOME/.npm/.cache/cnpm \
      --disturl=https://npm.taobao.org/dist \
      --userconfig=$HOME/.cnpmrc"' >> ~/.zshrc && source ~/.zshrc


    $ cnpm init # 生成一个 package.json 文件
    $ cnpm i -D gulp # -D 等价于 --save-dev

    cnpm i -D gulp-sass

cnpm i i就是install
注意，gulp-sass 依赖于 libsass ，这是一个 C++ 的包，需要在本地编译，所以要确保本地 Mac 机器上是有 Xcode 的( Linux 系统上要先安装 g++ ，执行 apt-get install g++ ，或者 yum install g++ 这样的命令 )。 装好之后，gulpfile.js 中写下面的内容


## How to resolve “Cannot find module” error

        rm -rf node_modules
        npm install


        du -sh main.css
        du -sh *

        cnpm i -D  gulp-imagemin imagemin-pngquant
