export {};

const reducer = (accumulator: number, currentValue: number) => {
  console.log({ accumulator, currentValue });
  return accumulator + currentValue;
};

const sum: (...values: number[]) => number = (...values: number[]): number => { // restパラメータもJSの機能
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));

// Array.prototype.reduce()
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// JSの組み込み関数であるArray.prototype.reduce()は、配列の各要素に対して指定した関数を実行し、単一の値に集約するメソッドです。
// 例えば、数値の配列の合計を計算する場合、reduce()を使用して各要素を順番に加算していくことができます。