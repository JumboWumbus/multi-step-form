import { Question } from "@/types";
import { useMultiStepForm } from "@/utils/useMultiStepForm"
import { FormEvent, useEffect, useState } from "react";
import QuestionItem from "../QuestionTemplate/QuestionTemplate";

let questionArray: Question[] = [
    {
      type: 'YN',
      content: {
        question: 'Is door bad?',
      },
  
      value: "DoorQuality"
    },
  
    {
      type: 'INPUT',
      content: {
        question: 'How bad the door?',
      },
      value: "DoorInfo"
    },
  
    {
      type: 'MULTI',
      content: {
        question: 'How many hinge does door own?',
        options: ['seven', 'nine', 'three', 'fourteen'],
      },
  
      value:"HingeNumber",
    },
  ];


export const MultiStepForm = ({questionList, onPageUpdate, pageAnswers}:{questionList:Question[], onPageUpdate: any, pageAnswers: any}) =>{
    
    const updateAnswers = (value:string, category:string) =>{
        setAnswers({...answers, [category] : value})
      }

      const [currentStepIndex, setCurrentStepIndex] = useState(0)

      const [answers, setAnswers] = useState({index: currentStepIndex});

      let steps = questionList.map((q,index)=>{
        return (
        <QuestionItem question={q} key={`question_${index}`} onChange={updateAnswers} answer={pageAnswers[currentStepIndex]? pageAnswers[currentStepIndex][q.value] : null}/>
        )});
      let step = steps[currentStepIndex]
      let isFirstStep = currentStepIndex === 0;
      let isLastStep = currentStepIndex === steps.length - 1;


      


    function next(){
        setCurrentStepIndex(i => {
          if(i >= steps.length -1) return i
          return i + 1
        })
      }
    
    
      function back(){
        setCurrentStepIndex(i => {
          if(i <= 0) return i
          return i - 1
        })
      }
    
      function goTo(index: number){
        setCurrentStepIndex(index)
      }



    
    

    useEffect(() => {
        // check if the answers isn't empty
        if (Object.keys(answers).length > 1) {
          // update page answers
          onPageUpdate(answers.index, answers);
          // update page number locally
          setAnswers({ index: currentStepIndex })
        } else {
          // update page number locally
          setAnswers({ index: currentStepIndex })
        }
      }, [currentStepIndex])

  
    function onSubmit(e: FormEvent) {
        e.preventDefault()
        next()
      }


    return(
        <form onSubmit={onSubmit}>
        <h2>{`Question ${currentStepIndex + 1} of ${steps.length}`}</h2>
        {step}

        <div>
          {!isFirstStep && <button type="button" onClick={back}>Back</button>}
          <button type="submit" >{isLastStep ? "Complete" : "Next"}</button>
        </div>
      </form>
    )
}