export {};

const nextYearSalary = (currentSalary: number, rate: number = 1.1) => { // デフォルト引数はJSの機能
  return currentSalary * rate;
};

console.log(nextYearSalary(1000));
