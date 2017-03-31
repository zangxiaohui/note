#安装 Git 到命令行

    brew install git

#创建本地仓库

    cd project/
    git init

#命令行中要查看修改。可以这样，运行

    git status

#就可以看到本次的修改内容了。详细的代码还可以通过

    git diff

#tig
    brew install tig

    tig
    q //quit
    d //detail

tig = git log -p

git log -p
按j 往下翻页


### .gitconfig 文件
    [user]
      name = Xiaohui Zang
      email = zangxiaohui@me.com
    [core]
      editor = vim
    [alias]
      ci = commit -a -v
      co = checkout
      st = status
      br = branch
      throw = reset --hard HEAD
      throwh = reset --hard HEAD^
    [color]
      ui = true
    [push]
      default = current

### 做小的 commit，使得回滚成为可能

    git throw = git reset --hard HEAD
    git throwh = git reset --hard HEAD^

### 回滚单个文件

    git checkout filename

### 合并多个小版本

    git rebase -i HEAD
    git rebase -i HEAD----
    git rebase -i 40bcecaf964d66e1de5523bdb31ee88ffdbf9d66
    git rebase -i origin/master

### git的tab补全功能

    source ~/.git-completion.bash


git如果某个文件已经提交过，然后把它加到gitignore, 并不能忽略。解决办法：
先把这个文件名从ignore文件中删除，然后执行

    rm thefile
    git add -A
    commit

然后添加这个文件回ignore


#### You have either not added it yet (check git status/Untracked files) or ignored it (using .gitignore or .git/info/exclude files)

You can verify it using following git command, that lists all ignored files:

    git ls-files --others -i --exclude-standard



### merge

error: Your local changes to the following files would be overwritten by merge:
  git.md
Please, commit your changes or stash them before you can merge.

If you want remove all local changes from your working copy, simply stash them:

    git stash save --keep-index

then,

    git stash apply

If you don't need them anymore, you now can drop that stash:

    git stash drop



# 切换分支

git fetch
git status

   (use "git checkout -- <file>..." to discard changes in working directory)

  modified:   poll/frontend/js-src/components/activity/Activity.js
  modified:   poll/frontend/js-src/components/activityform/AwardTable.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)

  poll/frontend/js-src/components/activityform/untitled.js

no changes added to commit (use "git add" and/or "git commit -a")


git checkout -- poll

git branch

playPageAudio: function (pageIndex) {
            var self=this,
                dom=this.dom,
                data=self.options.data,
                pages=dom.find(".preview-item-page"),
                curPage = pages.eq(pageIndex);
            //销毁其他页面的音频播放组件
            var curPageJSON=data.pages[pageIndex];
            pages.find(".preview-element.audio").vishowAudio("destroy");
            curPage.find(".preview-element.audio").each(function(index,item){
                item=$(item);
                var audioJSON = _.find(curPageJSON.audios, function (audio) {
                    return ("ele-"+(audio.id || audio.hookId)) == item.attr("id");
                });
                if(audioJSON){
                    item.vishowAudio($.extend({},audioJSON,{
                        initPlay:true,
                        audioDom:"#"+item.attr("id")+">audio"
                    }));
                }
            });
        },


使用docker

打开
/Applications/Docker/Docker\ Quickstart\ Terminal.app



docker

    ls
    cd docker
    docker-compose up -d nginx
    //ERROR: Tag latest not found in repository docker.io/library/nginx
    docker pull nginx
    docker-compose up -d nginx

    docker-compose stop
    docker-compose start nginx





activity

    cd docker
    docker-compose ps
    docker-compose stop
    docker-compose rm
    y
    docker-compose up
    docker-compose up -d nginx
    docker-compose ps



使用 fix, add, change 而不是 fixed, added, changed
永远别忘了第2行是空行
用 Line break 来分割提交信息，让它在某些软件里面更容易读
请将每次提交限定于完成一次逻辑功能。并且可能的话，适当地分解为多次小更新，以便每次小型提交都更易于理解。


    Format of the commit message
    <type>(<scope>): <subject>
    <BLANK LINE>
    <body>
    <BLANK LINE>
    <footer>




    Allowed <type>
    This describes the kind of change that this commit is providing.
    feat (feature)
    fix (bug fix)
    docs (documentation)
    style (formatting, missing semi colons, …)
    refactor
    test (when adding missing tests)
    chore (maintain)








    Fix bug where user can't signup.

    [Bug #2873942]

    Users were unable to register if they hadn't visited the plans
    and pricing page because we expected that tracking
    information to exist for the logs we create after a user
    signs up.  I fixed this by adding a check to the logger
    to ensure that if that information was not available
    we weren't trying to write it.


    Redirect user to the requested page after login

    https://trello.com/path/to/relevant/card

    Users were being redirected to the home page after login, which is less
    useful than redirecting to the page they had originally requested before
    being redirected to the login form.

    * Store requested path in a session variable
    * Redirect to the stored location after successfully logging in the user



    Switch libvirt get_cpu_info method over to use config APIs

    The get_cpu_info method in the libvirt driver currently uses    XPath queries to extract information from the capabilities    XML document. Switch this over to use the new config class    LibvirtConfigCaps. Also provide a test case to validate    the data being returned.

    Closes-Bug: #1003373
    Implements: blueprint libvirt-xml-cpu-model
    Change-Id: I4946a16d27f712ae2adf8441ce78e6c0bb0bb657
