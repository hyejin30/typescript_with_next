/*
* 9.3.1 keyof 
- 타입에 허용된 키를 반환한다
- 리터럴 유니언 타입은 최신 상태를 유지하기 어려움
- keyof 타입 연산자 사용 시, 항상 최신 상태를 유지할 수 있다
*/

interface Ratings {
  audience: number;
  critics: number;
}

// as-is : string 또는 'audience' | 'critics'
// to-be : keyof Ratings
const getKey = (ratings: Ratings, key: keyof Ratings): number => {
  return ratings[key];
};

const ratings: Ratings = { audience: 66, critics: 84 };

getKey(ratings, "audience");
getKey(ratings, "not valid");

/*
* 9.3.2 typeof  
- 값의 타입을 반환한다
- 리티럴 타입x 원시 타입으로 반환한다 
- ex. 'movie' -> string, 2 -> number
*/
// ! 자바스크립트의 typeof 연산자와 다르다
// ! js - 타입에 대한 문자열 이름 반환, ts - 컴파일된 js 코드에 나타나지 않음

const original = {
  medium: "movie",
  title: "Girls",
  ratings: 2,
};

let object: typeof original;

if (Math.random() > 0.5) {
  object = { ...original, medium: "play" };
} else {
  object = { ...original, medium: 2 };
}

/* 
* 9.3.3 keyof typeof
- 두 키워드를 함께 연결해 키를 간결하게 검색할 수 있다
- 명시적 타입이 없는 객체에 허용된 키를 표현할 수 있음 
*/

const ratings2 = {
  imdb: 8.4,
  metacritic: 82,
};

const logRating = (key: keyof typeof ratings2) => {
  console.log(ratings2[key]);
};

logRating("imdb");
logRating("invalid");
