import { useState } from 'react'

export default function App() {
  const [data, setData] = useState('未取得');

  const fetchData = () => {
    if (typeof google === 'undefined') {
      setData('GASではないためデータ取得不可');
    } else {
      google.script.run
        .withSuccessHandler((result: string) => {
          setData(result);
        })
        .getMessage();
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
