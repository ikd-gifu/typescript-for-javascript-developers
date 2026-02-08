export {};

let name ='Atushi';

name = 'Ham';

let nickname = 'Ham' as const;
// nickname = 'Hamtaro'; // 型 '"Hamtaro"' を型 '"Ham"' に割り当てることはできません
nickname = 'Ham';

let profile = { // constアサーションで値のリテラル化・readonly 化
  name: 'Atsushi',
  height: 178
} as const;

// let profile = { // constアサーションは無意味
//   name: string,
//   height: number
// } as const;

// 以下のパターンはあり
// 型として string/number を表したい
// const profile: { name: string; height: number } = {
//   name: 'Atsushi',
//   height: 178,
// };

// as const を使うとオブジェクトの全てのプロパティが読み取り専用になる
// nameが文字列リテラル型"Atsushi"、heightが数値リテラル型178になっている
// ネストされたオブジェクトや配列も全て読み取り専用になる
// let profile: {
//     readonly name: "Atsushi";
//     readonly height: 178;
// }

// profile.name = 'Ham'; // 読み取り専用プロパティであるため、'name' に代入することはできません
// profile.height = 180; // 読み取り専用プロパティであるため、'height' に代入することはできません
