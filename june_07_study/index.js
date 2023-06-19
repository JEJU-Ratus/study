//  데이터 다루기
//  JSON 데이터 다루기. -> JavaScript에는 JSON이라는 객체가 존재하는데, 이는 JSON데이터를 다루기 위한 객체이다.
//  이 JSON이라는 객체에 parse라는 메소드를 사용하면 string 타입의 데이터를 JavaScirpt의 객체로 변환 할 수 있다.

// fetch를 통해 사이트에 request를 보냄.
fetch('https://jsonplaceholder.typicode.com/users')
// then 메소드를 이용해 response를 callback
  .then((response) => response.text())
  // response.text()를 result에 callback
  .then((result) => {
    // result를 JSON객체를 통해 JS배열객체로 만듦.(역직렬화, Deserialize)
    const users = JSON.parse(result);
    // users 데이터의 수
    console.log(users.length);
    // users라는 배열을 순차적으로 순회하여 user라는 배열에 재배치 후 user의 name만 출력
    users.forEach((user) => {
      console.log(user.name);
    });
  });