# 리액트 첫번째 연습 프로젝트

## 진행 과정

- index.html/index.js 를 제외한 나머지 파일 정리.

- 폴더를 깃허브와 연동.

- 리액트의 경우 매번 LF오류가 발생해 파일 전체 업로드가 아닌 만든 스크립트파일 혹은 CSS파일만 업로드 하는게 나은 것으로 예상된다.

- index.js는 아래와 같이 남기고 나머지는 다 지운다.

```JavaScript
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(/* HTML문법이 들어갈 자리. */);
```

- mock.json 이라는 mock data 추가.

- 리액트는 컴포넌트로 이루어지는데, 최상위 컴포넌트는 보통 App.js인것 같다.

- 리뷰와 관련된 사이트를 만들 예정으로, mock.json을 연결할 ReviewList.js 컴포넌트를 만든다.

- index.html을 아래와 같이 남기고 나머지는 다 지운다.

```HTML
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

- 약간의 디자인 및 mock data 배치.

- reset.css를 추가.

## 발생한 오류

- Warning: You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".

  - 해당 오류는 import된 ReactDom의 주소를 react-dom으로 작성해서 발생한 오류로, react-dom/client로 수정하여 해결 하였다.

- Manifest: Line: 1, column: 1, Syntax error.
  - 해당 오류는 CRA(creact-react-app)를 이용하여 리액트 프로젝트 생성시 만들어지는 manifest.json(웹 앱에대한 정보를 담고 있는 json)의 오류로, index.html 파일의 manifest코드의 rel을 manifest에서 /manifast로 바꾸면 해결된다. - 해당 오류는 index.html파일을 나름의 초기화 하지 않은 상태에 발생한 오류로, index.html을 위의 진행과정처럼 초기화 한다면 발생하지 않는다.
