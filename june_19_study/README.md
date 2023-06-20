# fetch 함수와 비동기

- fetch함수는 request를 보내고 어떠한 객체를 리턴한다.(이 객체를 Promise 객체라고 한다.)
- 이후 해당 객체를 .then method를 통해 call back함수를 등록 하는데 이 콜백은 서버로부터 response를 받았을 때 실행된다.
- 이후의 .then method들은 각 call back함수가 리턴을 반환했을때 실행된다.
- 이때 call back은 등록만 하는것이고, 실행이 되는 것이 아니기 때문에 fetch함수 다음의 함수가 먼저 실행된다.
- 그 후 response가 도착하면 실행이 되는 것.
- 한번 시작된 작업이 완료되기 전에 다음 작업으로 넘어가는 것을 비동기 실행이라고 한다.