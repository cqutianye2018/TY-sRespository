var path=require('path');
var ExtractTextPlugin=require('extract-text-webpack-plugin');
const VueLoaderPlugin=require('vue-loader/lib/plugin');

module.exports={
	entry:__dirname+'/main.js',
	output:{
		path:path.join(__dirname,'/dist'),
		publicPath:'/dist/',
		filename:'bundle.js',
		chunkFilename:'[name].chunk.js'
	},
	module:{
		rules:[
		   {
		   	test:/\.vue$/,
		   	loader:'vue-loader',
		   	options:{
		   		loaders:{
		   			css:ExtractTextPlugin.extract({
		   				use:'css-loader',
		   				fallback:'vue-style-loader'
		   			}),
		   			'scss': 'style-loader!css-loader!sass-loader'
		   		}
		   	}
		   },
		   {
		   	test:/\.js$/,
		   	loader:'babel-loader',
		   	exclude:/node_modules/
		   },
		   {
		  	test:/\.css$/,
		  	use:ExtractTextPlugin.extract({
		  		use:'css-loader',
		  		fallback:'style-loader'
		  	})
		   },
		   {
		   	test:/\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
		   	loader:'url-loader?limit=1024'
		   },
		   {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
           }
		]
	},
	plugins:[
	    new ExtractTextPlugin({
	    	filename:'[name].css',
	    	allChunks:true
	    }),
	    new VueLoaderPlugin()
	]
};


