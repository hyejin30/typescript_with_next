/*
* 타입 서술어  
- 사용자 정의 타입 가드
- 타입 검사 함수에 사용되며, 명시적 반환 타입을 가질 수 있다
*/

// * 잘못된 예제
const isNumberOfString = (value: unknown) => {
  return ["number", "string"].includes(typeof value);
};

const logValueIfExists = (value: number | string | null | undefined) => {
  // boolean 값만 반환. 인수의 타입 유추는 X
  const exist = isNumberOfString(value);

  if (exist) {
    value.toString();
  } else {
    console.log("not exists", value);
  }
};

// * 타입 서술어 예제 1
// (value: WideType): 매개변수명 is NarrowType

const isNumberOfString2 = (value: unknown): value is string | number => {
  return ["number", "string"].includes(typeof value);
};

const logValueIfExists2 = (value: number | string | null | undefined) => {
  const exist = isNumberOfString2(value);

  if (exist) {
    value.toString();
  } else {
    console.log("not exists", value);
  }
};

// * 타입 서술어 예제 2
// 인스턴스가 더 구체적인 인터페이스의 인스턴스인지 검사한다

interface Comedian {
  funny: boolean;
}

interface StandupComedian extends Comedian {
  routine: string;
}

const isStandupComedian = (value: Comedian): value is StandupComedian => {
  return "routine" in value;
};

const workWithComedian = (value: Comedian) => {
  if (isStandupComedian(value)) {
    console.log(value.routine);
  }

  console.log(value.routine);
};

// * 주의사항
// 타입 검사 이외의 것은 지양하자 (ex. 7자 이상)

// ! text?.length가 왜 never로 추론되는지 모르겠습니다
const isLongString = (input: string | undefined): input is string => {
  return !!(input && input.length >= 7);
};

const workWithText = (text: string | undefined) => {
  if (isLongString(text)) {
    console.log("long", text.length);
  } else {
    console.log("short", text?.length);
  }
};

const isLongString2 = (input: string | undefined) => {
  return !!(input && input.length >= 7);
};

const workWithText2 = (text: string | undefined) => {
  if (isLongString2(text)) {
    console.log("long", text?.length);
  } else {
    console.log("short", text?.length);
  }
};
