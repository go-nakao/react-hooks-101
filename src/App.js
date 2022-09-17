import React, { useState } from "react";

export const App = props => {

  /*
    状態管理(propsを受け取っている)
    今回のブランチでやること：オブジェクトをuseStateに渡す
  */

  const [state, setState] = useState(props); //この部分で、props で受け取ったオブジェクトを定義
  const { name, price } = state;  //// propsを分割代入
  //関数を定義
  const incrementPrice = () => {
    setState({ ...state, price: price + 1 });
    //スプレッド構文参考：https://zenn.dev/axpensive/articles/6f35d3da03044f
  }
  const decrementPrice = () => {
    setState({ ...state, price: price - 1 });
  }
  const reset = () => {
    setState(props); //初期値を渡すことで、リセットできる
  }

  return (
    <div>
      <p>現在の{name}は、{price}円です。</p>
      <button onClick={incrementPrice}>金額設定+1</button>
      <br />
      <button onClick={decrementPrice}>金額設定-1</button>
      <br />
      <button onClick={reset}>初期値</button>
      <br />
      <input placeholder="サンプル" value={name} onChange={(e) => setState({ ...state, name: e.target.value })} />{/*nameを入力させる*/}
    </div>
  );
}

//propsの内容を定義
App.defaultProps = {
  name: '',
  price: 1000
}