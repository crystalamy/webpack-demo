
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	context: '',//运行环境上下文默认是根目录
	entry: {
		main:'./src/script/main.js',
		a:'./src/script/a.js'
	}, //入口文件
	output: {
		path: __dirname + '/dist',
		filename: 'js/[name][chunkhash].js'
	},
	plugins:[
		new htmlWebpackPlugin({
			title:'haha',
			filename: 'index.html',
			template: 'index.html',
			inject: 'head',
			date: new Date()
		})
	]
}