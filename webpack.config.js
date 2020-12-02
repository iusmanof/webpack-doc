const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js' // default: main.js
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [
              "style-loader",
              "css-loader",
              {
                loader: "postcss-loader",
                options: {
                  postcssOptions: {
                    plugins: [
                      [
                        require('autoprefixer')
                      ],
                    ],
                  },
                },
              },
            ],
          },
        ],
      },
};