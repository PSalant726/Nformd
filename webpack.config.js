var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/nformd.jsx",
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ["es2015","react"]
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ],
    noParse: /node_modules\/quill\/dist/
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", ".jsx" ],
    modulesDirectories: [
      'node_modules',
      'node_modules/blueimp-file-upload/js/vendor'
    ]
  }
};
