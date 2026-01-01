export {};

type Mojiretu = string; // string型のエイリアスを定義 型は大文字で始める

const fooString: string = "Hello";
const fooMojiretu: Mojiretu = "Hello"; // const fooMojiretu: string

const example1 = {
  name: 'Ham',
  age: 43
}

type Profile = { // 設定時にミスの可能性
    name: string;
    age: number;
}

const example2: Profile = {
  name: 'Ham',
  age: 43
}

type Profile2 = typeof example1; // 型を自動で取得、example1の型が変更されたら反映される
