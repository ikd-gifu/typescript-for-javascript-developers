export {};

// class VisaCard {
  // readonly owner: string;
// 
  // constructor(owner: string) {
    // this.owner = owner;
  // }
// }

class VisaCard {
  constructor(public readonly owner: string) { // publicは省略可能だが、わかりやすいために記述
  }
}

let myVisaCard = new VisaCard('Taro');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'Jiro'; // エラー　読み取り専用のため途中で変更できない
