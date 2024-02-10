const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 애플리케이션 진입점
  entry: './src/index.js',

  // 번들링된 코드가 위치할 경로
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  // 개발 서버 설정
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    historyApiFallback: true,
    compress: true,
    port: 3000,
    open: true, // 개발 서버 시작 시 브라우저를 자동으로 열도록 설정
  },

  // 모듈 처리 방법
  module: {
    rules: [
      // JavaScript 및 JSX 파일 처리
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // CSS 파일 처리
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // 이미지 파일 처리
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // SASS 파일 처리
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  // 플러그인 설정
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
  ],

  // 소스 맵을 생성하여 디버깅을 용이하게 함
  devtool: 'inline-source-map',

  // 모듈 해석 방법
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
