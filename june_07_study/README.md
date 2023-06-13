# 23년 6월 7일 공부

## URL(Uniform Resource Locator)
- 규격화된 리소스 검색자.
- 웹에 존재하는 수많은 데이터 중 특정 데이터를 나타내는 문자열.
- URL의 구성 : Scheme(스킴.https:(프로토콜(통신규약)의 이름)) + HOST(도메인주소.) + PATH(서버에 있는 데이터 중 원하는 데이터를 특정) + Query(데이터에 관한 세부적 요구사항)
### 도메인 네임
- 하나의 도메인은 여러개의 도메인 네임으로 이루어져 있음.
- 더 상위의 도메인일수록 도메인 네임에서 오른쪽에 있다.
- 최상위 root domain이라는 것이 존재.
  - 인터넷 전체를 나타내는 단위. 보통은 빈 문자열로 놔둠. 굳이 표현하자면 가장 우측에 '.' 을 찍는 것 . 이론적으로는 가장 완벽한 도메인 네임이다.
  - ex) www.naver.com -> www.naver.com. (root domain)
- root domain의 하위에는 Top-Level Domain(TLD) 라는 것이 존재.
  - ex) .kr , .jp , .net 등 사이트가 속한 국가 또는 사이트가 제공하는 서비스의 카테고리를 나타냄
- TLD의 하위에는 Second-Level Domain(SLD) 가 존재.
  - ex) naver, daum, google 등 서비스를 대표하는 이름이 여기에 속한다.
- 한 단계 더 내려가면 Third-level domain이 있는데 이것이 www 이고, 더 내려가면 Fourth-level domain등 쭉 도메인이 생겨날 수 있는데, 우리는 보통 Third-Level domain(www) 정도 까지만 사용한다.

## Domain Name Resolution
- domain name만으로 어떻게 특정 서버와 통신할 수 있을까?
1. 로컬 컴퓨터에서 기본적으로 설정되어있는 Name Server에 domain의 IP주소를 요청.
   - Name server : domain name을 IP주소로 변환하는 과정에 참여하는 서버들. 로컬 컴퓨터에서 맨 처음 어떤 네임서버에 요청할 것인지는 미리 설정되어 있다.
2. 네임 서버는 루트 네임 서버에게 .kr , .com 등의 특정한 TLD로 끝나는 domain name들을 관리하는 네임 서버의 주소를 알려달라는 요청을 보낸다.
3. 루트 네임 서버는 네임 서버에게 특정한 TLD를 관리하는 네임 서버의 IP주소를 알려준다.
4. 다시 네임 서버는 특정 TLD를 관리하는 네임 서버에게 특정 SLD를 가지며, 특정 TLD를 가진 domain의 네임서버의 IP주소를 요청. 
   - ex) www.naver.com -> com을 관리하는 네임서버에게 naver.com이라는 domain의 네임서버의 IP주소를 요청.
5. 특정 TLD를 관리하는 네임서버는 domain의 네임서버의 IP주소를 제공
6. 다시 네임서버는 domain의 네임서버에게 domain의 IP주소를 요청.
7. domain의 네임 서버는 네임서버에게 IP주소를 제공
8. 마지막으로 네임서버는 로컬 컴퓨터에 domain의 IP주소를 알려주고, 로컬 컴퓨터는 해당 IP주소를 통해 domain 서버와 통신을 시작한다.

### 한 번 접속한 페이지는 위와 같은 절차를 다시 안해도 된다. 

## 서버가 보내주는 Response의 종류.
- HTML 코드
- 순수한 정보가 담겨있는 JSON 포맷 (JSON : JavaScript Objcet Notation / JS의 문법을 빌려 만들어진 데이터 포맷)

## Request의 종류
1. 데이터 조회(GET) -> GET Request (READ)
2. 데이터 추가(POST) -> POST Request (CREATE)
3. 데이터 수정(PUT) -> PUT Request (UPDATE)
4. 데이터 삭제(DELETE) -> DELETE Request (DELETE)
- 네가지를 구분하는 방법은 Method의 종류이다.(GET(R), POST(C), PUT(U), DELETE(D))