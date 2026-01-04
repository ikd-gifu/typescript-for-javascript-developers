export {};

// * owner
//  * 所有者
//  * 初期化時に設定できる
//  * 途中で変更できない
//  * 参照できる
// * secretNumber
//  * 個人番号
//  * 初期化時に設定できる
//  * 途中で変更できる
//  * 参照できない

class MyNumberCard {
  private _owner: string; // getterで参照可能にするため、privateに変更し_をつける
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() { // 参照可能にするためのgetterを定義
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('Taro', 1234567890);
console.log(card.debugPrint());
card.secretNumber = 111111111; // setterで途中変更可能
console.log(card.debugPrint());

// card.owner = 'Jiro'; // エラー　読み取り専用のため途中で変更できない
console.log(card.owner);
// card.secretNumber // エラー　privateメンバーには外部からアクセスできない
// card._secretNumber // エラー　privateメンバーには外部からアクセスできない
console.log(card.secretNumber); // undefined　setterのみ定義しているため、getterがない