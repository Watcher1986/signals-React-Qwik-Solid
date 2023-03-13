import { useRef } from 'react';

function App() {
  const filter = useRef('');
  const displayFilterRef = useRef();

  return (
    <div>
      <h1>React Signals</h1>

      <input
        type='text'
        onChange={(e) => {
          filter.current = e.target.value;
          displayFilterRef.current.textContent = `Filter: ${filter.current}`;
        }}
      />
      <div ref={displayFilterRef}>Filter: {filter.current}</div>
    </div>
  );
}

export default App;
