# Promise

- 어떤 작업에 대한 상태정보를 가지고 있는 객체

## Promise의 상태
- pending : 진행 중
- fulfilled : 성공
- rejected : 실패
## Promise의 상태 진행 상세
- pending -> Response 도착 -> fulfilled -> 작업의 성공 결과를 얻음
- pending -> Response 도착 실패 -> rejected -> 작업의 실패 이유를 얻음

## .then method
- .then method는 promise 객체가 fulfilled일때 실행하는 콜백을 등록하는 메소드이다.
- text(),json() 메소드는 promise 객체를 return하는 메소드이다.

## promise chaining
- 비동기작업을 순차적으로 실행할 때 전체 코드를 좀 더 깔끔하게 보도록 작업하는 것.

## filter()
```JavaScript
// filter()는 배열에서 조건에 맞는 인덱스들을 추출해 새로운 배열을 만드는 함수이다.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
```

## map()
```JavaScript
// map()은 배열이 있고, 해당 배열에 추가적인 작업을 해서 새로운 배열을 만드는 함수이다.
const array1 = [1, 4, 9, 16];
// Pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1);
// Expected output: Array [2, 8, 18, 32]
```
## map() 두번째
```JavaScript
// 예를들어 객체 배열 arr이 있다고 가정하겠다.
const arr = [
  {
  'id' : 0,
  'name' : 'abc',
  'email' : 'abc@abc.com'
  }
    {
  'id' : 1,
  'name' : 'def',
  'email' : 'def@def.com'
  }
    {
  'id' : 2,
  'name' : 'ghi',
  'email' : 'ghi@ghi.com'
  }
]
// 여기서 각각의 객체에서 name만 추출하고 싶다면 다음과 같이 작업 할 수 있다.
const newArr = arr.map(info => info.name);
console.log(newArr);
```