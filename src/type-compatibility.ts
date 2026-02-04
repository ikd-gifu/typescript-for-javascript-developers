export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible); // undefined

fooCompatible = barCompatible;
// 代入可能。型の互換性をコンパイラがチェック。any型はstring型と互換性があると判断される

console.log(typeof fooCompatible); // string 型がstringに遷移する

let fooImCompatible: string;
let barImCompatible: number = 1;

// fooImCompatible = barImCompatible; // 型 'number' を型 'string' に割り当てることはできません。

let fooString: string;
let barString: string = 'string';

// fooString = barString; // 同じ型なので代入可能

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral; // 文字列リテラル型は文字列型の集合の一部だから代入可能

let fooNumber: number;
let fooNumberLiteral: 100 = 100;
fooNumber = fooNumberLiteral; // 数値リテラル型は数値型の集合の一部だから代入可能

interface Animal {
  age: number; // メンバー
  name: string; // プロパティ 'name' は型 'Person' にありませんが、型 'Animal' では必須です。
}

class Person {
  // constructor(public age: number) {} // メンバー 
  constructor(public age: number, public name: string) {}
}

let me: Animal; // インターフェースを用いてAnimal 型の変数 me を「宣言」しているだけ
me = new Person(43, 'Ham'); // 初期化
// personクラスはAnimalクラスと依存関係なし。PersonクラスはAnimalクラスがなくても実装可能
// オブジェクトを代入できるかどうかは、そのオブジェクトの型は関係がない

// Animalのメンバーをコメントアウトしてもエラーにならない（meのインスタンスにPersonを代入できる）
// つまり、型の互換性があると判断されている

// name: string;をAnimalインターフェースに追加するとエラーになる
// プロパティ 'name' は型 'Person' にありませんが、型 'Animal' では必須です。
// 代入先（Animal）には代入する側（Person）のメンバーが全て含まれていなければならない
// Animal型のnameを削除するか、Personクラスにnameを追加する必要がある

// Personにnameを追加するとnew Person(43)に「2 個の引数が必要ですが、1 個指定されました。」とエラーになる

// オブジェクト間での型の互換性の評価においては、各々の型が一致しているかは気にしない
// 代入先オブジェクトが持つメンバーが、代入するオブジェクトのメンバーでも存在するか、
// そのメンバーの型に互換性があるかどうかをチェックしている
// この時、クラスの継承関係やインターフェースの実装を一才気にしない
// これを構造的部分型（structural subtyping）と呼ぶ
