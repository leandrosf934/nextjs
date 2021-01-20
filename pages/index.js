import { useState } from 'react';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Contador />
    </div>
  );
}

const Contador = () => {
  const [contador, setContador] = useState(1);
  function adicionarValor() {
    setContador(contador + 1);
  }
  return (
    <div>
      <div>{contador}</div>
      <button onClick={adicionarValor}>+</button>
    </div>
  );
};

export default Home;
