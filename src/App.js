import React, { useState } from "react";

export const App = props => {
  const initialStates = {
    name: '',
    price: 1000
  }

  //状態管理(propsを受け取っている)
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);

  return (
    <div>
      <p>現在の{name}は、{price}円です。</p>
    </div>
  );
}

//propsの内容を定義
App.defaultProps = {
  name: '',
  price: 1000
}