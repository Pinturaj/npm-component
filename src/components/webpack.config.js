module.exports = {
  // Other webpack configurations...
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // Other rules for CSS, images, etc.
    ],
  },
  // Other webpack configurations...
};
