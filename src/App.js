import React from 'react'
import Forecast from './components/Forecast'

function App() {
  return (
    <>
      <h1 className="m-3">Gare au mistral !</h1>
      <Forecast />
      <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
        Une app pour apprendre React et éviter d'être surpris par le mistral
      </footer>
    </>
  );
}

export default App