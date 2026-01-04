export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number, // heightは必須引数　呼び出す時引数を渡す必要がある
  weight: number,
  printable?: boolean // printableは省略可能な引数　呼び出す時引数を渡してもしなくても良い
): number => {
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log({ bmi });
  }
  return bmi;
};

bmi(1.7, 60);

// bmi(身長,　体重、console.logで出力するかどうか？)
// bmi(1.7, 60, true);
// bmi(1.7, 60, false);
// bmi(1.7, 60); // 3つ目の引数を省略したい場合、どうする？
