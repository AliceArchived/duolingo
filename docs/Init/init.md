## Init

```shell
git config  user.name "Alice"
git config  user.email "alys8715ia@gmail.com"

git push --set-upstream origin work
git commit --amend --reset-author -m 'some comments'

git remote remove origin
git remote add origin xxx
git push -u origin main

```

## Debug

```shell
# 测试该 key 是否有效：
ssh -T git@github.com

# 检查 SSH Agent
ssh-add -l

# 如果没看到 ~/.ssh/id_rsa，就运行：
ssh-add ~/.ssh/id_rsa

# 验证当前身份：
ssh -i ~/.ssh/id_rsa -T git@github.com
```
