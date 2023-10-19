/*
* 제네릭의 황금률
- 정의

- 타입 정보가 들어온 사례 
map : 배열 요소 타입 -> 새 배열의 요소 타입 결정

- 타입 정보가 들어오지 않은 사례
JSON.parse : 제공되는 JSON 문자열의 타입을 알 수 없음 -> any 반환 
*/

/*
* 타입 어서션 (타입 캐스트라고도 부름)
- JSON.parse와 같은 사례가 있어, 강제 타입 정의의 필요성
- 타입 시스템의 이해를 재정의하기 위한 구문
- 자바스크립트로 컴파일 될 때는 as 구문이 제거된다
? 값 as 재정의할 타입
*/

const data = `['grace', 'frankie']`;

// any
JSON.parse(data);

// string[]
JSON.parse(data) as string[];

// [string, string]
JSON.parse(data) as [string, string];

// ['grace', 'frankie']
JSON.parse(data) as ["grace", "frankie"];

// ! 타입 어서션을 지양해야 하나, 유용한 경우가 있다

/*
* 9.4.1 포착된 오류 타입 어서션
- Error 클래스 인스턴스라고 가정한다
*/

try {
} catch (error) {
  //unknown
  console.warn("error", error.message);

  // 타입 어서션
  console.warn("error", (error as Error).message);

  // 타입 가드 (더 안전함)
  console.warn("error", error instanceof Error ? error.message : error);
}

/* 
* 9.4.2 non-null 어서션
- null | undefined를 제거할 때
- Map.get : 값 또는 undefined를 반환하는 API
*/

// Date | undefined
let maybeDate = Math.random() > 0.5 ? undefined : new Date();

// Date
maybeDate as Date;
maybeDate!;

const counts = new Map([
  ["Lucy", "6"],
  ["Girls", "7"],
]);

// string | undefined
const maybeValue = counts.get("Lucy");
console.log(maybeValue.toUpperCase());

// string
const knownValue = counts.get("Lucy")!;
console.log(knownValue.toUpperCase());

/* 
* ! non-null 대안
- type guard
- nullish coalescing operator 
- Error 발생
*/

// type guard
const toUpperCaseWithGuard = (givenStr: string | null) => {
  if (givenStr === null) return null;
  return givenStr.toUpperCase();
};

// nullish coalescing operator(??)
const toUpperCaseWithOperator = (givenStr: string | null) => {
  return givenStr?.toUpperCase() ?? givenStr;
};

// Error 발생
const toUpperCaseWithError = (givenStr: string | null) => {
  if (givenStr === null) {
    throw new Error("unexpected err: givenStr not present");
  }
  return givenStr.toUpperCase();
};

/*
* 9.4.3 타입 어서션 주의사항
- 꼭 필요한 경우가 아니면 사용 지양
- 코드가 변경되면 오류 발생
*/

/*
* 선언 vs 어서션
- 선언 : 할당 가능성 검사 수행
- 어서션 : 타입 검사 중 일부를 건너뛰도록 지시
! 타입 선언을 사용하거나, 초기값에서 타입을 유추하도록 하자
*/

interface EnterTainer {
  acts: string[];
  name: string;
}

const declared: EnterTainer = {
  name: "Moms",
};

const asserted = {
  name: "Moms",
} as EnterTainer;

/*
* 어서션 할당 가능성
- 서로 관련이 없는 두 타입 간의 어셔선은 불가능
- 이중 타입 어서션 -> 최악!
*/

let myValue = "Stella" as number;
let myValueDouble = "Stella" as unknown as number;
