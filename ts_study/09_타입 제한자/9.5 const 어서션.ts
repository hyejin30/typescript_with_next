/* 
 * as const
- 모든 값을 상수로 취급한다
- 배열 : 읽기 전용 튜플
- 리터럴 : 원시 타입 X 리터럴로 취급
- 객체 : 읽기 전용 속성
*/

import { describe } from "node:test";

// ? 예제 : 배열 -> 읽기 전용 튜플

// (number | string)[]
[0, ""];

// [0, ""]
[0, ""] as const;

/*
 * 9.5.1 리터럴에서 원시 타입으로
- 리터럴 값을 원시 타입으로 확장 X 
- 특정 리터럴로 이해하는 것이 유용할 때가 있다 
- Ex. 라이브러리 - 판별 필드가 특정 리터럴이 되도록 요구한다
*/

interface Joke {
  quote: string;
  style: "story" | "one-liner";
}

const tellJoke = (joke: Joke) => {
  if (joke.style === "one-liner") {
    console.log(joke.quote);
  } else {
    console.log(joke.quote.split("\n"));
  }
};

const narrowJoke = {
  quote: "If you stay alive for no other reason do it for spite",
  style: "one-liner" as const,
};

const wideJoke = {
  quote: "If you stay alive for no other reason do it for spite",
  style: "one-liner",
};

tellJoke(narrowJoke);
tellJoke(wideJoke); // style : one-liner | story

/*
 * 9.5.2 읽기 전용 객체
- 리터럴 값은 원시 타입으로 확장된다
  - 배열 -> array
  - 리터럴 문자열 -> string  
- const 어서션 사용 시, 구체적으로 전환된다
*/

const describe = (preference: "maybe" | "no" | "yes") => {
  switch (preference) {
    case "maybe":
      return "I suppose";
    case "no":
      return "No thanks";
    case "yes":
      return "Yes please";
  }
};

const mutable = {
  movie: "maybe", // string
  standup: "yes", // string
};

describe(mutable.movie); // movie: string

const readonly = {
  movie: "maybe", // 'maybe'
  standup: "yes", // 'yes'
} as const;

describe(readonly.movie); // movie: 'maybe'
