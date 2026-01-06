export {};

// 関数：関数宣言を用いて、識別子（関数名）と関数が何をするかを定義する「本体」を持つ
function bmi(height: number, weight: number): number { // 引数と戻り値に型注釈をつける
  return weight / (height * height);
}

console.log(bmi(1.7, 60));
