export {};

let bmi: (height: number, weight: number) => number = (height: number, weight: number): number => {
  return weight / (height * height);
}

let bmi2: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height); // 処理が1行の場合は波括弧とreturnを省略可能

console.log(bmi(1.7, 60));
console.log(bmi2(1.7, 60));