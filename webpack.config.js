
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	context: '',//运行环境上下文默认是根目录
	entry: {
		main:'./src/script/main.js',
		a:'./src/script/a.js',
		b:'./src/script/b.js',
		c:'./src/script/c.js'
	}, //入口文件
	output: {
		path: __dirname + '/dist',
		filename: 'js/[name]-[chunkhash].js',
		publicPath: 'http://cdn.com/'  //线上地址打包之后会将js的路径改为该网址
	},
	plugins:[
		new htmlWebpackPlugin({
			title:'this is a.html',
			filename: 'a.html',
			template: 'index.html',
			inject: 'body',
			chunks: ['main', 'a'],
			minify: {
				collapseWhitespace: true,
				removeComments: true
			}
		}),
		new htmlWebpackPlugin({
			title:'this is b.html',
			filename: 'b.html',
			template: 'index.html',
			inject: 'body',
			chunks: ['b'],
			minify: {
				collapseWhitespace: true,
				removeComments: true
			}
		}),
		new htmlWebpackPlugin({
			title:'this is c.html',
			filename: 'c.html',
			template: 'index.html',
			inject: 'body',
			chunks: ['c'],
			minify: {
				collapseWhitespace: true,
				removeComments: true
			}
		})
	]
}