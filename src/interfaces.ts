export {};

// typeは最終的に代入文になるのでセミコロンが必要
// 「オブジェクトの形状」を表すのに特化した構文
// type は同名再宣言ができない。拡張できない
type ObjectType = { // 型エイリアスを利用した型定義
  name: string;
  age: number;
};

// interface構文はブロック｛｝で終わる文なのでセミコロンが不要
// オブジェクト以外（union / intersection / プリミティブ / タプル等）も定義できる
// interface は同名で拡張できる（宣言マージ）。
interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface = { // ObjectTypeでも可
  name: 'Ham-san',
  age: 43
};
