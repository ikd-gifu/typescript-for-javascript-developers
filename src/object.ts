export {};

let profile1: object = { name: 'Ham' }; // 制約が甘い
profile1 = { birthYear: 1990 }; // エラーにならない

let profile2: {
  name: string;
} = { name: 'Ham' }; // 可能な限り厳しい型制約をつけるのが理想
// profile2 = { birthYear: 1990 }; // 'birthYear' は型 '{ name: string; }' に存在しません
profile2 = { name: 'Hamu' }; // OK
