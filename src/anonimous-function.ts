export {};

let bmi: (height: number, weight: number) => number = function(height: number, weight: number): number {
  return weight / (height * height); // 無名関数自体にも型注釈をつける
};

console.log(bmi(1.7, 60));
