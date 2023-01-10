import { Firstpage } from "./pages";
import React,{ useContext } from 'react'
import QuestionContext from "./context/queations/QuestionContext";

function App() {
  const questions = useContext(QuestionContext)
  return (
    <div className="App">
      {
        questions.map((items)=>{
          return <Firstpage items={items}/>
         
        })
      }
   
    </div>
  );
}

export default App;
