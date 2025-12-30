export {};

// tuple型　配列の要素の型と順番を固定する　型推論では表示されない
let profile: [string, number] = ['Ham', 43];
// profile = [43, 'Ham']; // エラー　型と順番が違うため
