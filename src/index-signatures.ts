export {};
// インデックスシグネチャ: Index Signatures
// オブジェクトの動的なプロパティの型定義を可能にする特殊な構文要素
// 「どんな名前のプロパティだとしても受け入れるよ！」 という機能を持った構文

// let profile: { name?: string } = {}; // ?がないと、{} には name プロパティが必須になる

interface Profile {
  name: string;
  underTwenty: boolean; // 型 'boolean' のプロパティ 'underTwenty' は'string' インデックス型 'string | number' に割り当てることはできません。
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'Ham', underTwenty: false }; // プロパティ 'underTwenty' は型 '{}' にありませんが、型 'Profile' では必須です。

// インデックスシグネチャの定義
// 「インデックス」は「キー（添字）」のこと
// { [ index: typeForIndex ]: typeForValue }

// profile.name = 'Ham'; // プロパティ 'name' は型 '{}' に存在しません。
// profile.age = 43; // プロパティ 'age' は型 '{}' に存在しません。

profile.name = 'Ham';
profile.age = 43; // 型 'number' を型 'string' に割り当てることはできません。
profile.nationality = 'Japan';
