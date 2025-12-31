export {};

// 呼び出し元には戻らない場合のアノテーション、必ずエラーを発生させる
function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log({ result }); // 出力されない。されたらおかしい
} catch (error) {
  console.log({ error })
}

let foo: void = undefined;
// let bar: never = null; // エラー: 'undefined' は 'never' に割り当てることはできません。
let bar: never = error('only me'); // error関数はnever型を返すので、barに割り当て可能
