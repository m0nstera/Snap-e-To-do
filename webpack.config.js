module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  module: {
    rules: [
      {
        test: [/\.jsx$/], // Important that webpack compiles our React jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
   output: { // IMPORTANT: This is where we set the bundle to be built into a folder
    filename: 'bundle.js', // The name of the file to build
    path: __dirname + '/client/dist' // Where Webpack should place the file
  }
};