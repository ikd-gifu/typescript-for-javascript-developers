import axios from 'axios';

export {};

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

// 以下を参照
// https://github.com/axios/axios
axios.get(url).then(function (response) { // any 型　サーバからのデータのため型推論ができない
  interface Article { //オブジェクトの形を定義 responseを確認して手動で設定
    id: number;
    title: string;
    description: string;
  }
  let data: Article[]; // any型で一旦おいても良いが、型安全性が失われるため避けるべき
  data = response.data;
  console.log(data);
});
