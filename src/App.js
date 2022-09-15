import React, { useState } from "react";

export const App = () => {

  //状態管理するstate
  const [count, setCount] = useState(0);

  //イベント処理(直前の状態を引数として、関数を渡す)
  const countUp = () => {
    setCount((count) => count + 1);
  }
  const countDown = () => {
    setCount((count) => count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  const multiplication = () => {
    setCount((count) => count * 2);
  }

  const divideBy3 = () => {
    //countが3の倍数の時だけ、3で割る。=> count%3 === 0 が条件
    count % 3 === 0 ? setCount((count) => count / 3)
      : alert('３の倍数ではありません！！');
  }

  return (
    <>
      <p>カウント:{count}</p>
      <button onClick={countUp}>カウントアップ</button>
      <br />
      <br />
      <button onClick={countDown}>カウントダウン</button>
      <br />
      <br />
      <button onClick={reset}>リセット</button>
      <br />
      <br />
      <button onClick={multiplication}>*2</button>
      <br />
      <br />
      <button onClick={divideBy3}>3の倍数の時だけ、3で割る</button>
    </>
  );
}