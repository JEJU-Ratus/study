# 리액트 공부

## 개인의견 및 오류해결방법
- ### 개인의견
  - 리액트의 경우 매번 LF오류가 발생해 파일 전체 업로드가 아닌 만든 스크립트파일 혹은 CSS파일만 업로드 하는게 나은 것으로 예상된다.
- ### 오류
  - Warning: You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".

    - 해당 오류는 import된 ReactDom의 주소를 react-dom으로 작성해서 발생한 오류로, react-dom/client로 수정하여 해결 하였다.

  - Manifest: Line: 1, column: 1, Syntax error.
    - 해당 오류는 CRA(creact-react-app)를 이용하여 리액트 프로젝트 생성시 만들어지는 manifest.json(웹 앱에대한 정보를 담고 있는 json)의 오류로, index.html 파일의 manifest코드의 rel을 manifest에서 /manifast로 바꾸면 해결된다. - 해당 오류는 index.html파일을 나름의 초기화 하지 않은 상태에 발생한 오류로, index.html을 위의 진행과정처럼 초기화 한다면 발생하지 않는다.


### 첫 번째

- 우선, 리액트 파일을 만드는 것 부터 시작한다. 이전의 환경 셋팅은 다른 검색을 통해보자.

- 터미널에 아래와 같이 작성한다.

​- 리액트 폴더 명은 무조건 영어 소문자 혹은 특수문자 일부만 사용 가능하다.

- npm init react-app . = 현재 디렉토리에서 프로젝트를 생성한다는 것.

​

- npm run start를 작성하면 프로젝트가 실행된다.

​

- 실행을 멈추고자 할 때는 Ctrl + c를 입력하면 된다.

​

- React에서는 App.js라는 파일을 보면 알 수 있듯 HTML 코드도 혼재해 있는데, 이를 JSX라고 칭한다.

​

- 리액트는 일반적인 사이트 실행과 달리, 수정 후 저장을 하면 실행 중에 실시간으로 반영된다.

​

- 컴포넌트(Components)는 리액트의 기본 단위라고 보면 된다. 자세한 내용은 검색이 필요하다.(App.js 같은 것들)

#

### 두 번째

- index.html 과 index.js를 빼고 public폴더와 src 폴더에서 다 지워야 태초의 상태가 된다.

- index.html : 웹 브라우저에서 가장 먼저 실행되는 파일

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

빼고 다 지워도 된다.

- index.js : imdex.html이 실행된 이후 실행되는 파일로 react 코드들 중 가장 먼저 실행되는 코드.

```JavaScript
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <h1>안녕 리액트!</h1>
);
```

빼고는 다 지워도 된다. reander : "화면에 그리다" 라는 뜻으로 html 을 표현 - JSX라는 문법이다.

- JSX는 html을 완전하게 사용하기에는 한계가 있음. 대표적으로 class와 for임.

- class는 객체지향 문법을 선언할 때 사용하게 되고, 진짜 class에 대해 작성하려면 className 이라는 문법을 이용해야한다.

- for은 input과 label을 연결하기 위해 사용하는 속성인데, JSX에서 for은 반복문으로 사용되어, htmlFor 라는 문법을 사용해야한다.

- 이벤트 핸들러의 경우, 카멜케이스를 이용해야한다.

- JSX문법에서 HTML을 사용 시 반드시 하나의 태그안에 모든 코드가 묶여있어야한다. 이는 프래그먼트로 대체할 수도 있다.

```HTML
 <Fragment></Fragment>
 <></> <!-- 프래그먼트의 함축표현방법 -->
```

- JSX와 함께 JavaScript를 사용할 수 있다.

#

### 세 번째

- 리액트 element : JSX문법을 변수 안에 담아서 랜더함수 안에 태그를 사용했을 때 나오는 결과 값

- 이를 함수 형태로 만든다면 커스텀 태그처럼 사용이 가능하다. 이를 리액트 컴포넌트라고 한다.

```JavaScript
function Hello(){
  <h1>hello!<h1>
}
```

리액트 컴포넌트는 그냥 함수를 선언하면 되는것이 아니고, 함수명의 가장 앞 문자는 대문자로 표시해야한다. 또한 return값이 JSX 문법이어야 한다.

- img의 src를 적용할 때는 따로 import를 이용해서 이미지명을 정한 후 해당 경로의 파일을 불러와 적용해야한다.

- 컴포넌트의 속성을 props 라고 한다. props는 여러 속성이 묶여있기 때문에 하나하나는 prop이라고 한다.

#

### 네 번째

- React의 prop은 우리가 만드는 것 말고, 기본적으로 존재하는 것도 있다. 대표적으로 children이 있는데, 컴포넌트의 자식들을 값으로 만든 prop 이다. 컴포넌트 함수에서 따로 가공하지 않고, 단순히 값을 보여주기 위함이라면 prop 자리에 children을 작성하면 값이 적용된다.

```JavaScript
function Button({children}) {
  return <button>{children}</button>
}
```

기존에는 prop의 값을 따로 지정해줘야 했다면 위와 같이 children을 썼을 땐

```JavaScript
// 기존
App{
  <Button prop = "버튼" />
}
// children을 사용
App{
  <Button>버튼</Button>
}
```

코드가 훨씬 직관적으로 작성된다.

- state는 리액트에서 변수와 같은데, 스테이트의 값을 바꾸면 리액트가 알아서 화면을 새로 렌더링 한다. 또한 스테이트를 사용하려면 리액트에서 함수를 불러와야 한다.

```JavaScript
import {useState} from 'react';
```

또한 파라미터로 초기값을 전달 받고 함수가 실행된 이후에는 배열의 형태로 요소를 반환 받는다.

```JavaScript
const [num, setNum] = useState(1); //첫번째 요소는 스테이트 값으로, 현재 변수의 값. 두번째 요소는 셋터 함수로, 이 함수를 호출할 때 파라미터로 전달하는 값으로 스테이트 값이 변함.
```

스테이트 값을 변경하려면, 값을 재할당 하는것이 아닌, 셋터함수를 통해 변경해야한다.

- 또한 스테이트를 작성할 때 배열은 주소를 참조하는 참조형 배열로, 내부의 값이 변경되어도 스테이트가 변경된 것으로 보지 않기 때문에 (...a) 문법인 스프레드 문법을 이용해야한다.

- 자식 컴포넌트의 state를 부모 컴포넌트로 올려주는 것을 스테이트 리프팅이라고 한다.

#

### 다섯번째

- 컴포넌트(부품)의 장점

  - 반복적인 개발이 줄어든다.
  - 오류를 고치기 쉽다.
  - 일을 쉽게 나눌 수 있다.

- React의 imline 속성. 기본적으로 inline속성 작성 방법과 같다. 그러나 차이점은 HTML과 다르게 React에서는 inline속성 값으로 객체를 넣어야 한다는 것이다.

```JavaScript
const style = {
  속성 = '값',
};

function abc(){
  return <button style={style}></button>
}
```

속성은 카멜케이스를 이용해야한다. 또한 겹치는 스타일은 스트라이프 문법을 이용하면 편하다.

#

### 여섯번째

- 클래스의 경우 margin과 같이 외부적인 요소를 다룰 때는 다른 부품 컴포넌트말고, 외부의 구조를 한눈에 볼 수 있는 APP컴포넌트에서 다루는 것이 좀 더 보기 좋다.

- 실제 데이터 값을 받아올 자리에 임시 데이터를 넣어 틀을 잡는데, 이 임시 데이터를 흉내내다라는 의미의 mock을 사용하여 mock data라고 한다.

