# start webpack project

1. getting node ready

```bash
npm init -y

npm install --save-dev webpack webpack-cli
npm install --save-dev webpack-dev-server
```

```json
// and add to package.json
"scripts": {
"start": "webpack-dev-server --mode development --open",
"build": "webpack --mode production"
},
```

but only get index.js for you need to create webpack.config.js

2. create webpack.config.js
   add html webpack plugin

npm install --save-dev html-webpack-plugin

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

moudle.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  plugins: [new HtmlWebpackPlugin()],
};
```

and to add new pages to html-webpack-plugin

```js
new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});
```

npm install --save-dev html-loader
used for html files to load css and js
and add module rules to webpack.config.js

```js
 module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
```

css loader
npm install --save-dev css-loader style-loader

```js
//add to index.js
import "./css/styles.css";

//and rules

{
test: /\.css$/i,
use: ["style-loader", "css-loader"],
},

// to extract css into separate file
npm install --save-dev mini-css-extract-plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

plugins: [new MiniCssExtractPlugin({
filename: "css/style.css"
})],
{
test: /\.css$/i,
use: [
  {
loader: MiniCssExtractPlugin.loader,
options: {
esModule: false,
}
}, "css-loader"],

},

npm install css-minimizer-webpack-plugin --save-dev
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
    new CssMinimizerPlugin(),

```
