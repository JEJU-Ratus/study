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
JSON.parse(객체) //String Type의 JSON객체를 JavaScript 객체로 변경하는 코드
JSON.stringify(객체) // JavaScript 객체를 String Type의 JSON 객체로 변경하는 코드
```
- 만약 보낸 Request가 POST나 PUT이라면 개발자도구의 Network탭의 Payload탭을 보면 내가 보낸 데이터를 담고 있는 Body 부분을 볼 수 있다.
- 또한 Response 탭을 보면 실제로 추가된 직원 정보가 JSON데이터로 잘 온 것을 알 수 있다.