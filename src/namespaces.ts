export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person { // exportをつけて外部からアクセス可能にする
    constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person { // exportをつけて外部からアクセス可能にする
    constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person { // exportをつけて外部からアクセス可能にする
    constructor(
    public firstName: string,
    public middleName: string,
    public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('Taro');
console.log(me.name);
const meOsaka = new Japanese.Osaka.Person('Jiro');
console.log(meOsaka.name);
const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);
