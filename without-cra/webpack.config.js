const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', //최종적인 서비스할 파일인지, 개발중인 상태의 파일인지 스위칭

    entry: './src/app.js', //어떤 js파일에서 시작할꺼다. (입력)

    //출력
    output: {
        path: path.resolve(__dirname, 'dist'), //안전한 경로를 위해 path사용
        filename: 'bundle.js', //파일명
    },

    //사용할 웹서버
    devServer: {
        compress: true, //압축
        port: 9999,
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, //js,jsx 파일만 해줌
                exclude: /node_modules/, //node_modules 파일 제외.
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack & babel',
            template: './public/index.html',
        }), //인스턴스 객체로 생성
    ],
};
