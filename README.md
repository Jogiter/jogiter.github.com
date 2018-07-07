## Jogiter's Blog build on [Hexo](https://hexo.io/)

## Write

```sh
> git clone git@github.com:Jogiter/jogiter.github.com.git
> git checkout writing
> # write a blog or new a page
> # ...
> git commit -am 'new blog post'
> git push
```

> trivas will automatically build and deploy to github

## [site-config](https://segmentfault.com/a/1190000009054888)

**move [https://jogiter.github.io](https://jogiter.github.io) to [http://jogiter.cn](http://jogiter.cn)**

add a new file `CNAME` to `themes/source`, and it will be generated to the root of the github pages

CNAME(put your own domain in)

```text
jogiter.cn
```

**use [traivas](https://travis-ci.org) to automatically build build and deploy**

add `.traivas.yml` to the root of the project

.traivas.yml

```yml
language: node_js
cache:
  yarn: true
node_js:
  -   "8"
before_install:
  - git config --global user.name "Jogiter"
  - git config --global user.email "jogiter.g@gmail.com"
install:
  - yarn
script:
  - hexo clean
  - hexo g
after_success:
  - cd ./public
  - git init
  - git add --all .
  - git commit -m "Travis CI Auto Builder"
  # 这里的 REPO_TOKEN 即之前在 travis 项目的环境变量里添加的
  - git push --quiet --force https://$GITHUB_TOKEN@github.com/Jogiter/jogiter.github.io.git master
```

[Defining Variables in Repository Settings](https://docs.travis-ci.com/user/environment-variables#Defining-Variables-in-Repository-Settings)

add `GITHUB_TOKEN` values [personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)
