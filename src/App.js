
import './App.css';
import AddComponent from './componet/addComponent/AddComponent';
import CounterComponent from './componet/counterComponent/CounterComponent';
import DividedComponent from './componet/dividedComponent/DividedComponent';
import MultipilyComponent from './componet/multipilyComponent/MultipilyComponent';
import SubtractComponent from './componet/subtractComponent/SubtractComponent';
import CounterContextProvider from './context/CounterContext';

function App() {
  return (
    <>
      <CounterContextProvider>
        <AddComponent />
        <br />
        <SubtractComponent />
        <br />
        <MultipilyComponent />
        <br />
        <DividedComponent />
        <br />
        <CounterComponent />

      </CounterContextProvider>


    </>
  );
}

export default App;
