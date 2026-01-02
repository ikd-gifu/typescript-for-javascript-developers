export {};

type ObjectType = { // 型エイリアスを利用した型定義
  name: string;
  age: number;
};

interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface = {
  name: 'Ham-san',
  age: 43
};
