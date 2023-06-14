# Request의 Head와 Body 그리고 fetch의 GET,POST,PUT,DELECT 사용법

- 하나의 Request는 Head와 Body로 이루어져있다.

## Head
- Request에 대한 부가 정보
  - method가 여기에 속함.
  - GET,DELETE(데이터가 필요 없는 method들)

## Body
- 실제 데이터를 담는 부분.
- Request를 보낼 때 어떤 데이터를 같이 보내야 한다면, Body에 담아서 보내야 한다.
  - POST, PUT(데이터를 담아서 보내야 하는 method들)

- 개발자 도구의 Network 탭을 보면 웹브라우저에 보낸 Request와 받은 Response를 볼 수 있다.
- Headers탭에서 Request의 Head 를 볼 수 있다.
```JavaScript
JSON.parse(객체) //String Type의 JSON객체를 JavaScript 객체로 변경하는 코드 (직렬화)
JSON.stringify(객체) // JavaScript 객체를 String Type의 JSON 객체로 변경하는 코드 (역직렬화)
```
- 만약 보낸 Request가 POST나 PUT이라면 개발자도구의 Network탭의 Payload탭을 보면 내가 보낸 데이터를 담고 있는 Body 부분을 볼 수 있다.
- 또한 Response 탭을 보면 실제로 추가된 직원 정보가 JSON데이터로 잘 온 것을 알 수 있다.
## 역직렬화를 좀 더 단순하게 하는 방법
```JavaScript
// json() 
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => {
    // result를 JSON객체를 통해 JS배열객체로 만듦.(역직렬화, Deserialize)
    const users = JSON.parse(result);
  });

/* 위의 코드에선 응답을 받아와 내용을 추출하기 위해 text()메소드를 사용하였다.
그리고 JS배열 객체로 만들기 위해 역직렬화를 실시하였는데, 이를 단축할 수 있는 메소드가 있으니, 바로 json()메소드 이다.
방법은 다음과 같다. */
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((result) => {const users = result;});

// text 메소드 대신 json메소드를 사용하면 Response의 내용이 JSON데이터에 해당하면 바로 Deserialization 까지 수행하게 되어, return값으로 JS객체를 return한다. 단, Response가 JSON데이터에 해당하지 않으면 오류가 발생하게 된다.

```

# WEB API와 REST API

## WEB APT
- API는 (Application Programming Interface)로, 개발할 때 사용할 수 있도록 특정 라이브러리나 플랫폼 등이 제공하는 데이터나 함수를 의미한다.
- 어느 URL로 어떤 리퀘스트를 보냈을 때, 무슨 처리가 수행되고 어떤 리스폰스가 오는지에 관해 미리 정해진 규격을 Web API라고한다.

## REST API
- 양이 너무 방대하기에 주요 특징적인 것만 작성 해봄
- URL은 리소르를 나타내기 위해서만 사용하고, 리소스 처리 방법은 메소드로 표현해야한다.
- 도큐먼트(파일)는 단수명사로, 컬렉션(폴더 혹은 디렉토리)은 복수 명사로 표시.

