export {};

// function returnNothing(): undefined {
//   console.log("I don't return anything!"); // undefinedを返す
//   return undefined; // エラーは解消されるが、関数の仕様と異なる
// }

// 関数のデータ型の指定方法
function returnNothing(): void { // 何も返さないことを期待する場合のデータ型
  console.log("I don't return anything!"); // undefinedを返す
}

console.log(returnNothing());
