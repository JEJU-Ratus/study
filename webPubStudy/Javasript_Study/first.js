/*
// 칼로리 계산기

//변수 선언
let espresso = 10;
let milk = 170;
let chocolateSyrup = 50;
let whippedCream = 60;
*/

//함수 선언 - 함수를 사용함으로 코드 작성량을 줄일 수 있음.
/* function 함수이름() {
  명령; 
  명령;
};
*/

/*
//ex)여러나라의 인삿말
//1.함수 선언
function greetings(){
  console.log('Hi');
  console.log('안녕');
  console.log('こんにちは');
  console.log('你好');
  console.log('Guten Tag');
  console.log('Bonjour');
  console.log('Buongiorno');
};
//2. 함수 호출 - 선언한 함수를 콘솔에 띄우기 위해선 호출을 해야함.
greetings();
greetings();
*/

/*
//ex2) 애국가
//1. 함수 선언
function printChorus() {
  console.log('무궁화 삼천리 화려강산')
  console.log('대한 사람 대한으로 길이 보전하세')
};
//2. 함수 호출
// 여기에 코드를 작성하세요

console.log('1절');
console.log('동해 물과 백두산이 마르고 닳도록');
console.log('하느님이 보우하사 우리나라 만세');
printChorus();

console.log('2절');
console.log('남산 위에 저 소나무 철갑을 두른 듯');
console.log('바람서리 불변함은 우리 기상일세');
printChorus();

console.log('3절');
console.log('가을 하늘 공활한데 높고 구름 없이');
console.log('밝은 달은 우리 가슴 일편단심일세');
printChorus();

console.log('4절');
console.log('이 기상과 이 맘으로 충성을 다하여');
console.log('괴로우나 즐거우나 나라 사랑하세');
printChorus();
*/

//console.log(값) -> 여기서 값 을 파라미터(매개변수) 라고함.
// 값의 이름을 줄때는 의미가 있는 이름을 주는것이 좋음
/* 활용법
function welcome(name){
console.log(name)
};

welcome('bambi');

출력 ->>> bambi
*/

/*
//ex1. 
function welcome(name){
  console.log('안녕하세요 ' + name +'님');
};

welcome('민혁');
*/

// //ex2. 거듭제곱 출력하는 함수
// function printSquare(x){
//   console.log(x * x);
// };

// printSquare(3);
// printSquare(4);
// printSquare(5);

//실습 - TB를 GB와 MB로 변환

// function teraToGiga(volume){
//   console.log(volume + 'TB는');
//   console.log(volume * 1024 + 'GB' + ' 입니다.');
// };

// function teraToMega(volume){
//   console.log(volume + 'TB는'); 
//   console.log(volume * 1024 * 1024 + 'MB' + ' 입니다.');
// };

// teraToGiga(2);
// teraToMega(2);

//여러개의 파라미터 1.덧셈

// function printSum(num1,num2){
//   console.log(num1 + num2);
// };

// printSum(3,6)
// printSum(123,4)
// printSum(56,7890)

// 여러개의 파라미터 2.
// 파라미터가 늘어나면  코드가 복잡해지니 꼭 필요한 파라미터를 사용.
// function introduce(name, birth, nationality, job){
//   console.log('안녕하세요! 반갑습니다.');
//   console.log('제 이름은 ' + name + '입니다!');
//   console.log('제 생일은 ' + birth + '이고,');
//   console.log('국적은' + nationality +'입니다.');
//   console.log('마지막으로 ' + job + '에 다니고 있습니다..');
//   console.log('잘 부탁드립니다!');
// };

// introduce('송민혁','97.10.01','대한민국','더큰내일센터');

//실습 - bmi 지수 계산

// function bmiCalculator(name,weight,height){
//   console.log(name +'님의 체질량지수는 ' + (weight / (height * height / 10000)) + '입니다.' );
// };

// bmiCalculator('홀쭉이', 43.52, 160);
// bmiCalculator('코린이', 61.25, 175);
// bmiCalculator('통통이', 77.76, 180);

//return 함수

// function getTwo(){
//   return 2;
// };

// console.log(getTwo());

// function getTwice(number){
//   return number * 2;
// };

// let x = getTwice(5);
// let y = getTwice(2);

// console.log(x * y);


//amount - 맡긴금액/ term - 맡기는 기간 /rate - 이자율
// function interestCalculator(amount,term,rate){
//   return amount * term * (rate/100);
// };

// let amount = 3650000;

// let interest = interestCalculator(amount,1,4);
// let totalMoney = amount + interest;

// console.log('맡긴 금액은 ' + amount + '원 입니다.')
// console.log('이자는 ' + interest + '원 입니다.');
// console.log('최종 받을 금액은 ' + totalMoney +'원 입니다.');

// 맡긴금액은 amount 원 입니다.
// 이자는interestCalculator 원 입니다.
// 최종 받을 금액은 amount + interestCalculator원 입니다.

//템플릿 문자열
// function calcWage(name, time, wage) {
//   let total = time * wage;

//   console.log(`${name}님의 근무 시간은 총 ${time}시간이며, 최종 급여는 ${total}원 입니다.`); // 괄호 안에 코드를 채워 넣으세요
// }

// calcWage('김윤식', 208, 11340);
// calcWage('성규재', 175, 12160);
// calcWage('손태웅', 161, 13070);
// calcWage('허우선', 222, 10980);

// function expressMultiplication(num1, num2){
//   console.log(`${num1} * ${num2} = ${num1 * num2}`);
// };
// function expressMultiplication(num1, num2){
//   console.log(num1 + '*'  +num2  + '='  + num1 * num2);
// };
// // 테스트 코드
// expressMultiplication(3, 4);
// expressMultiplication(3, 2);
// expressMultiplication(7, 5);
// expressMultiplication(8, 9);
// expressMultiplication(5, 5);
// expressMultiplication(9, 9);

//상수를 표시할때는 const 로 표현하며 이름은 항상 대문자. 단어가 섞인다면 _로 나눈다. ex) MY_NUMBER
// 또한 상수는 값이 변하지 않늗다.

//if 문 1.성적 계산
// function printGrade(midtermScore,finalScore){
//   let totalScore = midtermScore + finalScore;

//   if(totalScore >= 90){
//     console.log('A');
//   }
//   else if(totalScore >= 80){
//     console.log('B');
//   }
//   else if(totalScore >= 70){
//     console.log('C');
//   }
//   else if(totalScore >= 60){
//     console.log('D');
//   }
//   else{
//     console.log('F');
//   }
// }


// printGrade(25, 35);
// printGrade(50, 45);
// printGrade(29, 24);
// printGrade(37, 42);

//if 문 2. 호칭정리
/* 조건 :
나이가 같은 경우: '친구'

자신보다 나이가 어릴 경우:
2 - 1. 상대방 성별이 남성인 경우: '남동생', 
2 - 2. 상대방 성별이 여성인 경우: '여동생'

자신보다 나이가 많을 경우:
3 - 1. 상대방 성별이 남성인 경우: '형',
3 - 2. 상대방 성별이 여성인 경우: '누나' */

// const MYAGE = 26;
// let myGender = 'male';

// let callFriend = '친구';
// let callYoungerBrother = '남동생';
// let callYoungerSister = '여동생';
// let callOlderBrother = '형';
// let callOlderSister = '누나';

// function whatShouldICallYou(age,gender){
//   if(age === MYAGE){
//   return callFriend;
//   }
//   else if(age < MYAGE){
//     if(gender === myGender){
//     return callYoungerBrother;
//     }
//     else{
//       return callYoungerSister;
//     }
//   }
//   else{
//     if(gender === myGender){
//       return callOlderBrother;
//     }
//     else{
//       return callOlderSister;
//     }
//   }
// }


// let result1 = whatShouldICallYou(25, 'female');
// let result2 = whatShouldICallYou(20, 'male');
// let result3 = whatShouldICallYou(26, 'female');
// let result4 = whatShouldICallYou(30, 'male');
// let result5 = whatShouldICallYou(31, 'female');

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);


// switch 문 1. 티켓값
// 
// let VIPPrice = 15;
// let RPrice = 13;
// let SPrice = 10;
// let APrice = 8;

// function checkPrice(grade) {
//   switch (grade) {
//     case 'VIP':
//       console.log(`${grade}석은 ${VIPPrice}만원 입니다.`);
//       break;
//     case 'R':
//       console.log(`${grade}석은 ${RPrice}만원 입니다.`);
//       break;
//     case 'S':
//       console.log(`${grade}석은 ${SPrice}만원 입니다.`);
//       break;
//     case 'A':
//       console.log(`${grade}석은 ${APrice}만원 입니다.`);
//       break;
//     default:
//       console.log('VIP, R, S, A 중에서 하나를 선택해 주세요.');
//   }
// }


// checkPrice('R');
// checkPrice('VIP');
// checkPrice('S');
// checkPrice('A');
// checkPrice('B');
/*
let myVoca = {
  // 코드를 작성해 주세요.
  addVoca: function(voca,mean){
    myVoca[voca] = mean; 
  },
  deleteVoca: function(voca){
    delete myVoca[voca];
  },
  printVoca: function(voca){
    console.log(`"${voca}"의 뜻은 "${myVoca[voca]}"입니다.`);
  }
};

// addVoca메소드 테스트 코드
myVoca.addVoca('parameter', '매개 변수');
myVoca.addVoca('element', '요소');
myVoca.addVoca('property', '속성');
console.log(myVoca);

// deleteVoca메소드 테스트 코드
myVoca.deleteVoca('parameter');
myVoca.deleteVoca('element');
console.log(myVoca);

// printVoca메소드 테스트 코드
myVoca.printVoca('property');
*/
/*
for(변수 in 객체){ 
  // 객체안에 있는 프로퍼티들을 가지고 반복적인 동작을 수행.
  // 객체의 프로퍼티 네임을 가져오는 반복문.
  // 소괄호 내부에 특정한 변수를 만들고, in 뒤에 반복할 객체를 넣으면,
  // 객체의 프로퍼티 네임이 변수에 할당되고, 객체의 프로퍼티 갯수만큼 반복.
  동작부
}
*/

//ex)for..in 예시
// let exam = {
//   name: '제송',
//   bornYear: 1997,
//   isVeryNice: true,
//   worstCourse: null,
//   bestCourse: 'JS 프로그래밍 기초.'
// }

// for(let temp in exam){
//   console.log(temp);
//   console.log(exam[temp]);
// }

// let hyesoonScore = {
// 	'데이터 모델링의 이해': 10,
// 	'데이터 모델과 성능': 8,
// 	'SQL 기본': 22,
// 	'SQL 활용': 18,
// 	'SQL 최적화 기본 원리': 20,
// };

// let minsoonScore = {
// 	'데이터 모델링의 이해': 14,
// 	'데이터 모델과 성능': 8,
// 	'SQL 기본': 12,
// 	'SQL 활용': 4,
// 	'SQL 최적화 기본 원리': 16,
// };

// function passChecker(scoreObject) {
// 	// 여기에 코드를 작성하세요
// 	let sum = 0;
	
//   for(let score in scoreObject){
//     sum = sum + scoreObject[score];
//     if(sum >= 60){
//       console.log(`축하합니다! 합격입니다!`);
//     }
//     else{
//       console.log(`아쉽지만 불합격입니다..`);
//     }
//   }
// }

// passChecker(hyesoonScore);
// passChecker(minsoonScore);

// let myDate = new Date();

// console.log(Date.now()); // true
// console.log(myDate.getTime());

// let fruits = ['레몬', '토마토', '딸기', '바나나'];
// let ages = [20, 24, 25, 29, 30, 33];
// let numbers = [];

// // fruits 배열에 '토마토'를 삭제하고 그 자리에 '사과', '청포도' 를 추가해 주세요
// fruits.splice(1,1,'사과','청포도');


// // fruits 배열의 첫 번째 요소를 삭제해 주세요

// fruits.splice(0,1);

// // ages 배열에 마지막 요소를 삭제해 주세요

// ages.splice(5);

// // ages 배열의 2번, 3번 인덱스를 26, 28로 변경해 주세요

// ages.splice(2,2,'26','28');

// // numbers 배열에 1, 2, 3, 5, 8, 9를 순서대로 추가해 주세요

// numbers.splice(0,0,'1','2','3','5','8','9');

// // 반복문을 활용해서 numbers 배열의 요소들 중 홀수를 모두 삭제해 주세요

// for(let i = 0; i< ages.length; i++){
//   if(numbers[i] % 2 !== 0){
//     numbers.splice(i,1);
//   }
// }

// // 테스트 코드
// console.log(fruits[1]);
// console.log(fruits[0]);
// console.log(ages[ages.length - 1]);
// console.log(ages[3]);
// console.log(numbers[3]);
// console.log(numbers);

// let groups = [
// 	['영준', '캡틴'], 
// 	['태순', '우재'],
// 	['재훈', '지웅'],
// 	['윤형', '동욱'],
// 	['규식', '소원'],
// ];

// let teams = [
// 	[],
// 	[],
// ];


// // 여기에 코드를 작성하세요
// for(i = 0; i < groups.length; i++){ // 행의 갯수
//   for(j = 0; j < groups[i].length; j++){ // 각 행의 열의 개수
//     teams[j][i] = groups[i][j];
//   }
// }

// // 테스트 코드
// console.log(teams[0]);
// console.log(teams[1]);

// function calculateChange(payment, cost) {
//   // 여기에 코드를 작성하세요
//   let change = payment - cost;
  
//   if(change >= 50000){
//     let shinsaimdang = change / 50000;
//     calculateChange(change, cost);
//   }
//   else if(change >= 10000){
//     let kingSejong = change / 10000;
//     calculateChange(change, cost);
//   }
//   else if(change >= 5000){
//     let yulgok = change / 5000;
//     calculateChange(change, cost);
//   }
//   else if(change >= 1000){
//     let toegye = change / 1000;
//   }
//   console.log(`50000원 지폐: ${shinsaimdang}장
// 10000원 지폐: ${kingSejong}장
// 5000원 지폐: ${yulgok}장
// 1000원 지폐: ${toegye}장`);
// }

// // 테스트 코드
// calculateChange(100000, 33000);
// console.log('');
// calculateChange(500000, 378000);


// function isPalindrome(word) {
//   // 여기에 코드를 작성하세요
//   let clearCount = 0;
  
//   for(i=0; i < word.length; i++){
//     if(word[i] === word[word.length-1-i]){
//       clearCount++;
//     }
//   }
//   if(clearCount === word.length){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
// // 테스트 코드
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("stars"));
// console.log(isPalindrome("기러기"));
// console.log(isPalindrome("123321"));
// console.log(isPalindrome("hello"));
// console.log(isPalindrome("kayak"));