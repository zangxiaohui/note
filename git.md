### 做小的 commit，使得回滚成为可能

    git throw = git reset --hard HEAD
    git throwh = git reset --hard HEAD^

### 回滚单个文件

    git checkout filename

### 合并多个小版本

    git rebase -i HEAD
