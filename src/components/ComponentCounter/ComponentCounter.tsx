import React, { useState } from 'react';

const ComponentCounter: React.FC = () => {
  // Definimos el estado inicial del contador como 0
  const [count, setCount] = useState<number>(0);

  // Función para incrementar el contador
  const increment = () => setCount(count + 1);

  // Función para decrementar el contador
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
};

export default ComponentCounter;