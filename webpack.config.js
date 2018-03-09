var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //抽取CSS文件插件
var OpenBrowserPlugin = require('open-browser-webpack-plugin'); 
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    quiet:true,
    inline: true,
    contentBase: "./app", 
    port: 8001
  },
  entry: {
    pages: __dirname +'/app/index.js',
    vendors:['react','react-dom','react-router'] 
  },
  output: {
    path: __dirname + '/app/dist',
    publicPath: '/dist/',
    filename: 'js/bundle.js',
    chunkFilename: 'js/chunk/[name].chunk.js'
  },
  module: {
    rules: [
      { test:  /\.(gif|png|jpg|svg)$/i, use: [
        {loader:'url-loader',options:{limit:8192,name:'img/[name].[ext]'}}
      ] },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader!css-loader') },
      { test: /\.less$/, loader: ExtractTextPlugin.extract('css-loader!less-loader') },
      { test: /\.js[x]?$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/, use: 'url-loader' }//url loader相当于一个文件加载器返回一个dataURL
    ]
  },
  //解析的扩展名
  resolve: {
    extensions: ['.js', '.jsx','jpg'],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name:'vendors',filename:'js/vendors.js'}),
    new ExtractTextPlugin("css/bundle.css"),
   new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8001/login' }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};
