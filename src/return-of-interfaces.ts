export {};
// src/interfaces.tsも参考にしてください

class Mahoutukai {}
class Souryo {}

// TSではクラスは単一継承しかできません。
// class Taro extends Mahoutukai, Souryo {} // クラスで拡張できるクラスは 1 つのみです
class Taro extends Mahoutukai {}

interface Kenjya {
  ionazun(): void; // シグネチャ（処理の実態がわからない宣言）
}
interface Senshi {
  kougeki(): void;
}

// インターフェースは複数実装（implement）が可能。継承のような機能
// 複数の散らばった機能をまとめて実装できる
// シグネチャがある場合、実装しないとエラーになる
class Jiro implements Kenjya, Senshi {
  ionazun() {
    console.log('ionazun');
  }

  kougeki() {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
