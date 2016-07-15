    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash

这样 nvm 就安装好了，可能要重启一下 shell 才有 nvm 这个命令。
    nvm ls-remote


  nvm install v5.10.1





  $ nvm alias default 5.10.1



    $ echo 'alias cnpm="npm --registry=https://registry.npm.taobao.org \
  --cache=$HOME/.npm/.cache/cnpm \
  --disturl=https://npm.taobao.org/dist \
  --userconfig=$HOME/.cnpmrc"' >> ~/.zshrc && source ~/.zshrc

  打开自己的命令行，来执行一下。注意：如果您使用的是 bash （ Mac 和 ubuntu 系统的默认 shell ）请把上面的 .zshrc 替换为 .bashrc 。

    npm update react-dom
