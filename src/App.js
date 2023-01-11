import React from "react";
import {Form} from "./pages/Form";
import Result from "./pages/Result";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/typeform/result" element={<Result />}/>
        <Route path="/" element={<Form />}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
