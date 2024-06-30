
import "./App.css";
import TestComp_1 from "./Components/TestComp_1";
import funExp from "./SumTwoNum";
import TestInputField from "./Components/TestInputField";
import TestDescribeSkipOnly from "./Components/TestDescribeSkipOnly";
import TestOnChangeEvent from "./Components/TestOnChangeEvent";
import TestOnClickEvent from "./Components/TestOnClickEvent";
import SnapShotTesting from "./Components/SnapShotTesting";
import ClassComponentTest from "./Components/ClassComponentTest";
import FunctionalCompMethodTest from "./Components/FunctionalCompMethodTest";
import Sementic from "./SementicTagTest_ByRole/Sementic";
import MultipleSementicElements from "./SementicTagTest_ByRole/MultipleSementicElements";
import MultipleElements from "./MultipleElement_ByAllRole/MultipleElements";
import OverRidingIdAttribute from "./Components/OverRidingIdAttribute";
import ProductsList from "./Product/ProductsList";
import TextMatchWithFunction from "./TextMatchWithFunction/TextMatchWithFunction";




console.log(funExp.SumTwoNum_1(10,10));
console.log(funExp.SumTwoNum_2(10,10));


function App() {
 
  return (
    <div className="App">
      {/* <TestComp_1/>
      <TestInputField/>
      <TestDescribeSkipOnly/>
      <TestOnChangeEvent/>
      <TestOnClickEvent/>
      <SnapShotTesting/>
      <ClassComponentTest/>
      <FunctionalCompMethodTest/>
      <Sementic/>
      <MultipleSementicElements/>
      <MultipleElements/>
      <OverRidingIdAttribute/> */}
      {/* <ProductsList/> */}

      <TextMatchWithFunction/>
      </div>
  );
}

export default App;
