import React, { useState } from 'react';

function Counter() {
  // Mendefinisikan state "count" dengan nilai awal 0
  const [count, setCount] = useState(0);

  // Fungsi untuk menambah count
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <p>Nilai saat ini: {count}</p>
      <button onClick={decreaseCount}>Kurang</button>
      <button onClick={increaseCount}>Tambah</button>
    </div>
  );
}

export default Counter;
