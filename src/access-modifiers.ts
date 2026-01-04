export {};

class Person { // クラス定義
  public name: string; // メンバー変数の宣言にアクセス修飾子を追加　明示しない場合はpublic扱い
  // private age: number; // 外部からアクセスできない
  protected age: number;
  protected nationality: string; // 継承先からはアクセス可能

  
  constructor(name: string, age: number, nationality: string) { // コンストラクタ　戻り値には型指定しない　returnしないため。voidも不要
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string { // メソッド定義
    return `name: ${this.name}, age: ${this.age}`; // privateメンバーにはクラス内部からアクセス可能
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality); // 親と同じメンバー変数は再定義不要
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality};` // privateメンバーにはアクセスできないが、protectedメンバーにはアクセス可能
  }
}

let taro = new Person('Taro', 30, 'Japan'); // インスタンス生成
console.log(taro.profile());
console.log(taro.name); // アクセス可能
// console.log(taro.age); // エラー　privateメンバーには外部からアクセスできない
// let hanako = new Person();
