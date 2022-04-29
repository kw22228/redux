1. npm init -y
2. npm install webpack-cli --save-dev (webpack cli는 터미널에서 webpack을 커맨드할수있게 해주는 도구)
3. npm install webpack-dev-server (개발을 하면서 계속 보게될 서버. (개발용서버))
4. npm install barbel-loader @babel/core @babel/preset-env @babel/preset-react --save-dev (개발환경에서만 사용하니 --save-dev로 해줌)
5. npm install html-webpack-plugin --save-dev (검색)

---

### webpack config

entry에 지정된 자바스크립트에서 시작해서, 입력으로 읽어들인 다음.
뭔가 변환과정을 거쳐서 그 변화과정을 출력시킴.

변환과정 -> 프로그램들을 모아서 return된 출력 값으로 최종적인 하나의 파일을 만듬.

-   module과 plugins
    ex) es6이상으로 만들어진 js파일을 입력받고(entry 설정)
    module에 이것을 es5로 변환해주는 transpilre를 하나 넣어주고
    plugins에 console.log라던가 주석을 제거해주는 기능을 세팅해주고
    bundling을 돌리면 순서대로 실행됨.

-   순서
    entry입력받기 -> module의 소프트웨어 입력값을 넘겨줌 -> module에서 처리후
    -> 변환된 파일을 plugin에게 넘김 -> plugin에서 일처리후
    -> 최종적으로 output파일로 써짐

### build

-   package json에 scripts에 추가.
-   build에 webpack으로 지정해주면 "build" 했을시 webpack.config.js를 따라감.
-   webpack 을 gloabl로 설치
-   webpack-cli, webpack-dev-server를 계속 설치문구가 나오면 npm link webpack-cli 해줌.
