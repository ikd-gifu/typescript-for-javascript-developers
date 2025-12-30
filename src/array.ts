export {};

let numbers: number[] = [1, 2, 3];

// 非推奨な書き方
let numbers2: Array<number> = [1, 2, 3]
let strings2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];

let nijigenHairetu: number[][] = [
  [50, 100],
  [150, 200],
];

// ｜：または　複数の型の要素を持つ配列　共用型（union type）
let hairetu: (string | number | boolean)[] = [1, false, 'Japan'];
