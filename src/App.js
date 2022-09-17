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

  return (
    <div>
      <p>現在の{name}は、{price}円です。</p>
      <button onClick={incrementPrice}>金額設定+1</button>
      <br />
      <button onClick={decrementPrice}>金額設定-1</button>
      <br />
      <button onClick={resetPrice}>リセット</button>
    </div>
  );
}

//propsの内容を定義
App.defaultProps = {
  name: '',
  price: 1000
}