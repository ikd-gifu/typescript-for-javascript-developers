export {};

function bmi(height: number, weight: number): number { // 引数と戻り値に型注釈をつける
  return weight / (height * height);
}

console.log(bmi(1.7, 60));
