interface User {
  name: string;
  study(hours: number): void;
}

// 왜 타입을 any로 추론하지?
class AnyStudent implements User {
  name;
  study(hours) {
    console.log("study: ", hours);
  }
}

// 초기값 할당
class Student implements User {
  name = "";
  study(hours: number) {
    console.log("study: ", hours);
  }
}
