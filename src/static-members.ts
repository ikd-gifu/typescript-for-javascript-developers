export {};

class Me {
  static isProgrammer: boolean = true; // 静的メンバー　コンストラクタによる動的な設定をしない
  static firstNmae: string = 'Taro';
  static lastName: string = 'Yamada';

  static work() {
    // return `Hey! ${Me.firstNmae}! Let's code!`; // この書き方も問題ないが、Meクラスに依存している
    return `Hey! ${this.firstNmae}! Let's code!`;
  } 
}

// let me = new Me();
// console.log(me.isProgrammer); // エラー　インスタンスからは静的メンバーにアクセスできない
console.log(Me.isProgrammer); // クラス名を通じて静的メンバーにアクセスする　インスタンス化しなくてもアクセスできる
console.log(Me.work());
