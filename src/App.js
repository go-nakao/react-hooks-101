import React, { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);

  //イベント処理(直前の状態を引数として、関数を渡す)
  const countUp = () => {
    setCount((count) => count + 1);
  }
  const countDown = () => {
    setCount((count) => count - 1);
  }

  return (
    <>
      <p>カウント:{count}</p>
      <button onClick={countUp}>カウントアップ</button>
      <br />
      <br />
      <button onClick={countDown}>カウントダウン</button>
    </>
  );
}