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
