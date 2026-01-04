export {};

class Person { // クラス定義
  name: string;
  age: number;
  
  constructor(name: string, age: number) { // コンストラクタ　戻り値には型指定しない　returnしないため。voidも不要
    this.name = name;
    this.age = age;
  }

  profile(): string { // メソッド定義
    return `name: ${this.name}, age: ${this.age}`;
  }
}

let taro = new Person('Taro', 30); // インスタンス生成
// let hanako = new Person();
console.log(taro.profile());
