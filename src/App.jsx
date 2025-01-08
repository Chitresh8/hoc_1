import "./App.css";
import Counter from "./components/Counter/Counter";
import Heading from "./components/Counter/Heading";
import Person1 from "./components/HOC/Person1";
import Person2 from "./components/HOC/Person2";
// import Login from "./components/Login/Login";
// import EnhancedProtectedContent from './components/ProtectedContent/ProtectedContent';

function App() {
  return (
    <>
      <div>
        {/* <Login /> */}
        {/* <EnhancedProtectedContent /> */}
        {/* <h1>Higher Order Component</h1> */}
       <Counter/> 
       <Heading/>
       <Person1/>
       <Person2/>
      </div>
    </>
  );
}

export default App;
