yeoman

    npm install -g yo
    yo --version
    npm install -g generator-react-webpack
    npm ls -g --depth=1 2>/dev/null | grep generator
    mkdir my-new-project && cd my-new-project
    yo react-webpack



ES2015 模块也称为 ES6 模块的导出方式分两类，一类是 named exports (命名导出)，另一类是 default exports（默认导出），刚刚定义的 Hello 组件采用的是默认导出方式 export default xxx。这两种模块导出方式，又对应着不同的导入方式，详情请参考好多视频网第179期：使用 npm 和 ES6 模块进行前端开发。


docker

    ls
    cd docker
    docker-compose up -d nginx
    //ERROR: Tag latest not found in repository docker.io/library/nginx
    docker pull nginx
    docker-compose up -d nginx

    docker-compose stop
    docker-compose start nginx


    端口 807
    http://192.168.99.100:807/admin/activity/list2


# courses.reactjsprogram.com

    git clone
    ls
    git checkout solution
    ls
    npm install



    npm run production
    npm run start



    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      })
    ]
