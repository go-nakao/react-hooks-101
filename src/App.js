import React, { useState } from "react";

export const App = () => {
  //初期値の設定
  const initialStates = {
    name: '',
    price: 1000
  }

  //状態管理
  const [name, setName] = useState(initialStates.name);
  const [price, setPrice] = useState(initialStates.price);

  return (
    <div>
      <p>現在の{name}は、{price}円です。</p>
    </div>
  );
}