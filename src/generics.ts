export {};
// ジェネリクス（Generics）
// Genericsは汎用的なメソッドやクラスに特定の型を紐づけるための仕組み

// const echo = (arg: number):number => {
//   return arg;
// };

// const echo = (arg: string):string => {
//   return arg;
// };

// 抽象的な関数を作成すれば、型を指定するだけで様々な関数を作成できる
const echo = <T>(arg: T):T => {
  return arg;
};

console.log(echo<number>(100));
console.log(echo<string>('Hello!'));
console.log(echo<boolean>(true));

class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('Hello!').echo());
console.log(new Mirror<boolean>(true).echo());
