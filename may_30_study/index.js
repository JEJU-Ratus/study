// fetch함수 공부
 // 구글로 요청을 보냄.
fetch('https://www.google.com')
.then((response) => response.text())
.then((result) => {console.log(result);});
// 웹 브라우저가 서버로 보내는 요청 : request
// 서버가 다시 보내주는 응답 : response
// fetch는 가져오다라는 뜻
// 파라미터로 넘어온 URL로 request를 보낸다. 그 다음 서버로부터 response가 오면 그 response를 받음
// 서버에 response가 오면 4번줄이 실행된다. response객체는 다른 이름을 사용해도 됨.
// 4번줄은 서버에 response가 오면 작동하는 함수로, callback함수라고도 한다.
// then이라는 메소드가 callback을 등록해주는 메소드이다.
// fetch 함수는 어떤 객체를 리턴하는데(Promise 객체)
// 이 객체의 then 메소드로, '리스폰스가 왔을 때 실행할 콜백'을 등록할 수 있습니다.
// 이렇게 등록된 콜백들은 then 메소드로 등록한 순서대로 실행되고, 이때 이전 콜백의 리턴값을 이후 콜백이 넘겨받아서 사용할 수 있다.