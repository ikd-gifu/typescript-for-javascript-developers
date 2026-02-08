export {};
// 設定したい値が確定していない時に使う型: Nullable Types

// let profile: { name: string; age: number } = {
//   name: 'Ham',
//   age: null // 型 'null' を型 'number' に割り当てることはできません。ts(2322)
// nullable-type.ts(4, 30): 予期された型は、型 '{ name: string; age: number; }' 
// に対してここで宣言されたプロパティ 'age' から取得されています
// };
// tsconfig.jsonで"strictNullChecks": false,を設定するとエラーが消える
// ただし、他でもnullが許容されてしまう（nullableな状態）ため推奨されない
// profile = null;

// {}で型リテラルを定義
let profile: { name: string; age: number | null } = { // union型でnullを許容
  name: 'Ham',
  age: null
};
