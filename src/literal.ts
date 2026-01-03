export {};

// let dayOfTheWeek: string = '日'; // 曜日のみ設定したいが、string型だと他の文字列も入れられてしまう
// dayOfTheWeek = '月';
// dayOfTheWeek = '31'; // エラーにならない

let dayOfTheWeek: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日'; // 文字列型のliteral型　よく使う型
dayOfTheWeek = '月';
// dayOfTheWeek = '31'; // エラーになる

let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1; // 数値のliteral型　よく使う型
month = 12;
// month = 13; // エラーになる

let TRUE: true = true; // booleanのliteral型　実際に利用するケースは少ない
// TRUE = false; // エラーになる
