module: {
  loaders: [
    { test: /\.(png|pdf)$/, loader: 'url-loader?limit=8192' }
  ]
}