export {};

// シグネチャ　型の制約を行う　返り値の型も指定可能
function double(value: number): number;
function double(value: string): string;

// 実態ではany型を設定
function double(value: any): any {
  console.log(typeof value);
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
};

console.log(double(100));
console.log(double('Go '));
// console.log(double(true)); // シグネチャに合わないので、コンパイルエラー
