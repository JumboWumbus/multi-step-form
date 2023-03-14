import { Question } from "@/types";
import * as RadioGroup from '@radix-ui/react-radio-group';
import { FormEvent, useState } from "react";

export default function QuestionItem({question, onChange, answer}:{question:Question, onChange: any, answer: string}){

  const [currentValue, setCurrentValue] = useState(answer || "")
  

  const handleChange = (value:string) =>{
    setCurrentValue(value);
    onChange(value, question.value)
  }


  switch(question.type){
    case 'YN':
      return(
        <>
        
          <h1>{question.content.question}</h1>
    <RadioGroup.Root
    
      className="flex flex-col gap-2.5"
      aria-label="View density"
      onValueChange={(value) =>{onChange(value, question.value)}}
      value={currentValue}
    >
      <div className="flex items-center">
        <RadioGroup.Item
          className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-slate-400 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
          value="Yes"
          id="r1"
        >
          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-slate-800" />
        </RadioGroup.Item>
        <label className="text-white text-[15px] leading-none pl-[15px]" htmlFor="r1">
          Yes
        </label>
      </div>
      <div className="flex items-center">
        <RadioGroup.Item
          className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-slate-400 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
          value="No"
          id="r2"
        >
          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-slate-800" />
        </RadioGroup.Item>
        <label className="text-white text-[15px] leading-none pl-[15px]" htmlFor="r2">
          No
        </label>
      </div>
      
    </RadioGroup.Root>
        </>
      )
    case 'INPUT':
      return(
        <>

          <h1>{question.content.question}</h1>
          <input type="text" 
          required= {true}
          onChange={(e) => handleChange(e.target.value)} 
          value={currentValue}
          ></input>
      
        </>
      )
    case 'MULTI':
      return(
        <>
      
        <h1>{question.content.question}</h1>
        <RadioGroup.Root
      className="flex flex-col gap-2.5"
      aria-label="View density"
      value={currentValue}
      onValueChange={(value) =>{onChange(value, question.value)}}
    >
      {question.content.options.map((op, index) =>{
          return(
            <div className="flex items-center">
            <RadioGroup.Item
              className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-slate-400 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
              value={`${op}`}
              id={`option_${index}`}
            >
              <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-slate-800" />
            </RadioGroup.Item>
            <label className="text-white text-[15px] leading-none pl-[15px]" htmlFor="r1">
            {`${op}`}
            </label>
          </div>
          )
        })}
      
    </RadioGroup.Root>
        



        
      
        </>
      )
  }
}


     