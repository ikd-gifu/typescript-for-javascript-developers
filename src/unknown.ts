export {};

const kansu = (): number => 43;

let numberAny: any = kansu(); // コンパイル時にはエラーにならないが、実行時に問題が発生する可能性がある
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
// console.log(typeof numberUnknown); // 'number' typeofで型を取得
if (typeof numberUnknown === 'number') { // type guard 暫定的に型をつけて、型を絞り込む。実行時エラーを回避
  let sumUnknown = numberUnknown + 10;
}

// let sumUnknown = numberUnknown + 10; // 'numberUnknown''は 'unknown' 型です。
