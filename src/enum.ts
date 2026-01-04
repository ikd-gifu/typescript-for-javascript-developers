export {};

enum Months {
  January = 1, // Months.January = 0 自動で0から始まるので、1に設定すると自動で変更される
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

// const MonthsJS = { // 設定が必要
  // January: 0,
  // February: 1,
// }
// 
// console.log(MonthsJS.January);
// console.log(MonthsJS.February);

enum COLORS { // 文字列列挙型
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#00FF00',
  BLUE = '#0000FF',
  // YELLOW = '#FFFF00',
  BLACK = '#000000'
}

let green = COLORS.GREEN;
console.log({ green });

enum COLORS {
  YELLOW = '#FFFF00',
  // GRAY // 列挙型メンバーには初期化子が必要です。
  GRAY = '#808080'
}

COLORS.YELLOW; // エラー、列挙型は変更不可、追加する
