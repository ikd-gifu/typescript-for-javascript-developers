export {};

class Animal {
  constructor(public name: string) {}
  
  run(): string {
    return 'I can run';
  }
}

class Lion extends Animal {
  // 初期化処理も必要（プロパティの宣言とコンストラクターでの代入）
  public speed: number;
  // 派生クラスのコンストラクターには 'super' の呼び出しを含める必要があります。
  constructor(name: string, speed: number) { // nameは親クラスで初期化処理済み
    // 引数の指定が必要
    super(name);

    this.speed = speed;
  }

  run(): string {
    return `${super.run()} ${this.speed}km/h.`; // 親クラスのメソッドを呼び出し
  }
}

// let animal = new Animal;
// console.log(animal.run());
// let lion = new Lion;
// console.log(lion.run());
console.log(new Animal('Mickey').run());
console.log(new Lion('Simba', 80).run());
