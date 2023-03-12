import { Question } from "@/types";


export default function QuestionItem({question}:{question:Question}){




  switch(question.type){
    case 'YN':
      return(
        <>
        
          <h1>{question.content.question}</h1>
          <input type={"radio"} id="Yes" name={"answer"} value={"Yes"}/>
          <label htmlFor="yes">Yes</label>
          <input type={"radio"} id="No" name={"answer"} value={"No"}/>
          <label htmlFor="No">No</label>
        </>
      )
    case 'INPUT':
      return(
        <>

          <h1>{question.content.question}</h1>
          <input type="text"></input>
      
        </>
      )
    case 'MULTI':
      return(
        <>
      
        <h1>{question.content.question}</h1>
        {question.content.options.map((op, index) =>{
          return(
          <div key={`option_${index}`}>
          <input type={"radio"} id={`option_${index}`} name={"answer"} value={`${op}`}/>
          <label htmlFor={`option_${index}`}>{`${op}`}</label>
          </div>
          )
        })}
      
        </>
      )
  }
}