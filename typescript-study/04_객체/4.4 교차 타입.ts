type Artwork = {
  genre: string;
  name: string;
};

type Writing = {
  pages: number;
  name: string;
};

type WrittenArt = Artwork & Writing;

/*  WrittenArt 타입의 값은 다음과 같이 정의된다.
    {
        genre: string;
        name: string;
        pages: number;
    }
*/

type ShortPoem = { author: string } & (
  | { kigo: string; type: "haiku" }
  | { meter: number; type: "villanelle" }
);

const a: ShortPoem = {
  author: "a",
  kigo: "a",
  type: "haiku",
};

const b: ShortPoem = {
  author: "b",
  type: "villanelle",
};
