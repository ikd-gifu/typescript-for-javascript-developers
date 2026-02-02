export {};
// 抽象クラス　オーバーロードをして利用することを想定したクラス
// overload.tsの内容を参考にしてください

// 抽象クラスは、**「設計図の設計図」**です。継承先のクラスに「このメソッドは必ず実装してね」と強制するために使います。
// 直接インスタンスを作れないクラスのことです。JavaScriptには抽象クラスを定義する構文はありません。一方、TypeScriptにはabstract修飾子があり抽象クラスを表現できます。
abstract class Animal {
  abstract cry(): string; // abstractがないと「抽象メソッドは抽象クラス内でのみ使用できます。」
}

class Lion extends Animal { // cryを実装する必要がある
  cry() {
    return 'Roar';
  }
}

class Tiger extends Animal {
  cry() {
    return 'Grr';
  }
} // cryを実装しないと「非抽象クラス 'Tiger' は、クラス 'Animal' からの継承抽象メンバー 'cry' を実装しません。」
