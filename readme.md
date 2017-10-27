# nej.js

> [nej](https://github.com/genify/nej) 是网易开源的前端代码库，nej.js 是 nej 的 cjs 版本

## 如何开始

### 1. 下载安装到本地

```bash
$ cd /path/to/yourproject
$ npm i --save nej.js
```

### 2. 配置 webpack

由于 nej.js 中在模块内使用了 `this` 变量表示 `window` ，所以使用时需要 [imports-loader](https://github.com/webpack-contrib/imports-loader)

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
            test: /nej.js/,
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

## LICENSE

MIT

[license-url]: https://github.com/kaola-fed/nej.js/blob/master/LICENSE
[license-image]: https://img.shields.io/github/license/kaola-fed/nej.js.svg
