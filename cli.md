zsh 配置框架 oh-my-zsh

*分屏

    cmd+d




==> Caveats
Add the following line to your ~/.bash_profile or ~/.zshrc file (and remember
to source the file to update your current session):
  [[ -s $(brew --prefix)/etc/profile.d/autojump.sh ]] && . $(brew --prefix)/etc/profile.d/autojump.sh


[autojump的用法](http://www.linuxidc.com/Linux/2015-08/121421.htm)
j 是 autojump 的一个封装，你可以使用 j 来代替 autojump， 相反亦可。

### 跳到先前到过的子目录‘/home/avi/autojump-test/b‘ 而不键入子目录的全名

    $ jc b

### 使用下面的命令，你就可以从命令行打开一个文件管理器，例如 GNOME Nautilus ，而不是跳到一个目录。

    $ jo www


功能需求和已知的冲突

- autojump 只能让你跳到那些你已经用 cd 到过的目录。一旦你用 cd 切换到一个特定的目录，这个行为就会被记录到 autojump 的数据库中，这样 autojump 才能工作。不管怎样，在你设定了 autojump 后，你不能跳到那些你没有用 cd 到过的目录。

- 你不能跳到名称以破折号 (-) 开头的目录。或许你可以考虑阅读我的有关操作文件或目录 的文章，尤其是有关操作那些以‘-‘ 或其他特殊字符开头的文件和目录的内容。

- 在 BASH shell 中，autojump 通过修改 $PROMPT_COMMAND 环境变量来跟踪目录的行为，所以强烈建议不要去重写 $PROMPT_COMMAND 这个环境变量。若你需要添加其他的命令到现存的 $PROMPT_COMMAND 环境变量中，请添加到$PROMPT_COMMAND 环境变量的最后。
=======
# iTerm Themes


[怎么安装autojump](http://macshuo.com/?p=676)

    brew install autojump

    ./install.py

    [[ -s ~/.autojump/etc/profile.d/autojump.sh ]] && . ~/.autojump/etc/profile.d/autojump.sh



#

npm init -y
npm install --save react react-dom && npm install --save-dev html-webpack-plugin webpack webpack-dev-server babel-{core,loader} babel-preset-{react,es2015,stage-0} style-loader css-loader
