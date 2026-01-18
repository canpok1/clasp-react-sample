import { useState } from 'react'

export default function App() {
  const [data, setData] = useState('未取得');

  const fetchData = () => {
    // GAS環境でのみ実行可能
    if (typeof google !== 'undefined') {
      google.script.run
        .withSuccessHandler((result: string) => {
          setData(result); // 成功したらReactの状態を更新
        })
        .getMessage(); // GAS側の関数名
    }
  };

  return (
    <div>
      <h1>GAS × React</h1>
      <button onClick={fetchData}>データを取得</button>
      <p>サーバーからの応答: {data}</p>
    </div>
  );
}
