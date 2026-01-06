export {};

// アロー関数：無名関数のfunctionキーワードを省略し、矢印（=>）を用いて関数を定義する
// 引数が一つなら()も省略可能、処理が一行なら波括弧({})とreturnも省略可能
let bmi: (height: number, weight: number) => number = (height: number, weight: number): number => {
  return weight / (height * height);
}

let bmi2: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height); // 処理が1行の場合は波括弧とreturnを省略可能

console.log(bmi(1.7, 60));
console.log(bmi2(1.7, 60));