export {};
// 型アサーション（Type Assertions）
// ある型をany型に指定した場合、後から型を指定し直すことができる
// TypeScriptで推論された型を上書きする機能のこと
// 「アサーション(Assertion)」は日本語で「主張、断言」、
// つまり「この変数の型は⚪︎⚪︎ですよ！」とコンパイラに明示的に伝えるような機能

let name: any = 'Ham';

// let length = name.length; // let length: any

// 型アサーションの書き方
// let length = name.length as number; // let length: number
let length = (name as string).length; // より早い段階で型を指定できる let length: number
// let length = (<string>name).length // 非推奨 ReactのJSX記法に似ているため

// length = 'foo'; // エラー: Type 'string' is not assignable to type 'number'.
