export {};

let absence: null = null; // 型推論ではlet absence: anyになるので手動で指定
// absence = 'hello'; // エラー

let data: undefined = undefined; // 型推論ではlet data: anyになるので手動で指定
// data = 123; // エラー
