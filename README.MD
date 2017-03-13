# NEJ-CommonJS
> [NEJ](https://github.com/genify/nej) 是网易开源的一体化前端框架，而 NEJ-CommonJS 是 NEJ 的 CommonJS 版本


## 如何开始
### 1. 下载安装到本地
```bash
$ cd /path/to/yourproject
$ npm i --save nej-commonjs
```

### 2. 配置 webpack

由于 NEJ-CommonJS 中在模块内使用了 this 变量，所以需要使用 [imports-loader](https://github.com/webpack-contrib/imports-loader) ，来修正 this 指向到 window
#### a. 安装 imports-loader
```bash
$ cnpm i --save-dev imports-loader
```
#### b. 配置 webpack.config.js
```javascript
const webpack = require('webpack')
module.exports = { 
    module: {
        loaders: [{
            test: /nej\-commonjs/,
            loader: "imports-loader?this=>window"
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            DEBUG: JSON.stringify(false), // 是否为 debug 模式
            CMPT: JSON.stringify(true)    // 是否开启兼容模式，即 `NEJ.C('xxx')`
        })
    ],
}
```
_[查看 example](./example)_

## 如何使用

配置完成之后，使用 webpack 进行引入，具体文档见 [API手册](http://nej.netease.com/help/index.html)，享受 NEJ 带来的乐趣吧 :-)