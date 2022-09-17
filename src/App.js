import React, { useState } from "react";

export const App = props => {
  const initialStates = {
    name: '',
    price: 1000
  }

  //状態管理(propsを受け取っている)
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);

  //関数を定義
  const incrementPrice = () => {
    setPrice((price) => price + 1)
  }

  const decrementPrice = () => {
    setPrice((price) => price - 1);
  }

  const resetPrice = () => {
    setPrice((price) => price = 0);
  }

  const reset1000 = () => {
    setPrice(props.price);
  }

  return (
    <div>
      <p>現在の{name}は、{price}円です。</p>
      <button onClick={incrementPrice}>金額設定+1</button>
      <br />
      <button onClick={decrementPrice}>金額設定-1</button>
      <br />
      <button onClick={resetPrice}>0リセット</button> <button onClick={reset1000}>初期値1000</button>
    </div>
  );
}

//propsの内容を定義
App.defaultProps = {
  name: '',
  price: 1000
}