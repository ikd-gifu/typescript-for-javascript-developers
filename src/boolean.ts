// ファイルをモジュール化する
// ファイル内のトップレベルの変数・関数・型などは「そのファイルのローカルスコープ」
// に閉じ込められ、他ファイルのグローバル名前空間を汚さなくなる
export {};

let name = 'TypeScript';

let isFinished: boolean = true;
isFinished = false;
// isFinished = 1;
console.log({ isFinished });
