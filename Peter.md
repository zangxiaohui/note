# webpack-react-mole
webpack 构建工具

热模块替换功能

source map 功能

boilerplate ['bɒɪləpleɪt] n. 样板文件；引用


    git clone git@github.com:gaearon/react-transform-boilerplate.git
    cd react-transform-boilerplate
    ls
    npm i
    ls
    vim devServer.js
    node devServer.js
    vim package.json
    // node devServer.js === npm start


    open http://localhost:3000

HotModuleReplacementPlugin
热模块替换功能，在代码修改的过程中，页面没有刷新，页面的状态得以保存。


props 是一个Object
console.log(this)
let Counter = {
props: Object,
context: Object,
refs: Objects,
updater: Object,
state: Object,

}


webpack 就是一个 module bundler

    npm i -D === npm install --save-dev

peerDependencies
可选字段。兼容性依赖。如果你的包是插件，适合这种方式。
npm WARN peerDependencies The peer dependency node-sass@^3.4.2 included from sass-loader will no longer be automatically installed to fulfill the peerDependency in npm 3+. Your application will need to depend on it explicitly.

sass-loader需要依赖于node-sass



        npm update react-dom

        import Tabs from 'material-ui/lib/tabs/tabs';
        import Tab from 'material-ui/lib/tabs/tab';
