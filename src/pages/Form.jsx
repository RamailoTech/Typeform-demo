import React from 'react'
import QuestionContext from "./context/queations/QuestionContext";

export const Form = () => {
  return (
    <>
    {
        questions.map((items)=>{
          return <Firstpage items={items}/>
         
        })
      }
     </> 
  )
  
}

