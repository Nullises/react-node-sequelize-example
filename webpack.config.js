module.exports = {
  // JavaScript entry point
  entry: './public/assets/App.js',
  // JavaScrip bundle file
  output: {
    path: './views',
    filename: 'index.js'
  },
  // Setup server
  devServer: {
    inline: true,
    port: 8081
  },
  module: {
    // JS, JSX and SASS loaders
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
};
