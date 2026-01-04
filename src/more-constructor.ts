export {};

class Person {
  constructor(public name: string, protected age: number) { // TSではコンストラクタでアクセス修飾子を付与すると、メンバー変数の宣言と初期化を同時に行える　publicも省略できない
  }
}

const me = new Person('Taro', 30);
console.log(me);
