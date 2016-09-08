module.exports = {
  resolve: {
    extensions: ['', '.js', '.vue', '.html']
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
        },
        exclude: /node_modules/,
      },
    ]
  },
}
