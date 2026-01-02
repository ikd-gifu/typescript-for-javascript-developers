export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154
}

const OchiaiHiromitus: Batter1 = {
  // throwingSpeed: 145, // オブジェクト リテラルは既知のプロパティのみ指定できます。'throwingSpeed' は型 'Batter1' に存在しません。
  battingAverage: 0.367
}

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// };

type TwoWayPlayer = Pitcher1 & Batter1; // Intersection Typesにより、2つの型を組み合わせる。メンテナンス性が向上する

const OtaniShouhei: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286
}
