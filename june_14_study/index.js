// 사이트 뒤에 우리가 보낼 Request의 설정을 담는다.
// 기본적으로 아무런 값을 입력하지 않으면 GET method가 설정되어 있다.

// POST

// 객체 선언
const newMember = {
  name : 'Jerry1',
  email : 'jerry@codeitmall.kr',
  department : 'engineering',
};

fetch('https://learn.codeit.kr/api/members', {
  method : 'POST',
  body :JSON.stringify(newMember),
})
  .then((response) => response.text())
  .then((result) => {console.log(result);});

// put

// 객체 선언
const member = {
  name : 'Jerry1',
  email : 'jerry1@codeitmall.kr', // 이름 변경
  department : 'marketing', // 부서 변경
};

// 주소의 끝에 Jerry1의 데이터 번호인 7을 넣음
fetch('https://learn.codeit.kr/api/members/7', {
  method : 'PUT', // method는 PUT으로 변경
  body :JSON.stringify(member),
})
  .then((response) => response.text())
  .then((result) => {console.log(result);});

// DELETE

// 주소의 끝에 Jerry1의 데이터 번호인 7을 넣음
fetch('https://learn.codeit.kr/api/members/7', {
  method : 'DELETE', // method는 DELETE으로 변경
})
  .then((response) => response.text())
  .then((result) => {console.log(result);});

// Content-Type 헤더 설정 - 필수로 작성해야 저비용.

// 객체 선언
const newMember = {
  name : 'Jerry1',
  email : 'jerry@codeitmall.kr',
  department : 'engineering',
};

fetch('https://learn.codeit.kr/api/members', {
  method : 'POST',
  headers: { // headers라는 프로퍼티를 생성
    'Content-Type' : 'application/json',// headers 프로퍼티안에 객체를 하나 만들고, 그 안에 Content-Type 프로퍼티 설정
  },
  body :JSON.stringify(newMember),
})
  .then((response) => response.text())
  .then((result) => {console.log(result);});