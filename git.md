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
