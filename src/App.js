
import "./App.css";
import TestComp_1 from "./Components/TestComp_1";
import funExp from "./SumTwoNum";
import TestInputField from "./Components/TestInputField";
import TestDescribeSkipOnly from "./Components/TestDescribeSkipOnly";
import TestOnChangeEvent from "./Components/TestOnChangeEvent";
import TestOnClickEvent from "./Components/TestOnClickEvent";
import SnapShotTesting from "./Components/SnapShotTesting";
import ClassComponentTest from "./Components/ClassComponentTest";



console.log(funExp.SumTwoNum_1(10,10));
console.log(funExp.SumTwoNum_2(10,10));


function App() {
 
  return (
    <div className="App">
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <TestComp_1/>
      <TestInputField/>
      <TestDescribeSkipOnly/>
      <TestOnChangeEvent/>
      <TestOnClickEvent/>
      <SnapShotTesting/>
      <ClassComponentTest/>
    </div>
  );
}

export default App;
