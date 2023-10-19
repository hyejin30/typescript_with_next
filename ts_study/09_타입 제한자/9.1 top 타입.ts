/*
* top 타입
- 모든 값을 나타내는 타입
- 모든 타입은 top 타입에 할당할 수 있다
- any, unknown
*/

/*
* any 다시보기
- 타입 검사를 비활성화하기 때문에 안전하지 않음
*/

// ! 런타임 에러
const greet = (name: any) => {
  console.log(name.toUpperCase());
};

greet({ name: "Betty" });

/*
* unknown 
- any보다 더 안전한 top 타입
- unknown 타입 값에 접근할 수 었음
*/

// 접근하기 위해 타입 가드 필요
const greetSafety = (name: unknown) => {
  if (typeof name === "string") {
    console.log(name.toUpperCase());
  } else {
    console.log("I'm off");
  }
};

greetSafety("Betty"); // BETTY
greetSafety({}); // 로그 없음

// top 타입이 아닌 타입에는 할당할 수 없다
let value: unknown;

const logValue = (value: string) => {
  console.log(value);
};

logValue(value);
