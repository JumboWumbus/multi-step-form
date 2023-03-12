import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import QuestionItem from '@/components/QuestionTemplate/QuestionTemplate';
import { Question } from '@/types';
import { type } from 'os';
import { useMultiStepForm } from '@/utils/useMultiStepForm';
import { FormEvent, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

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

export default function Home() {

  // const [answers, setAnswers] = useState([]);

  // const updateAnswers = (value:string, category:string) =>{
  //   setAnswers({...answers, [category] : value})
  // }

  const {steps, currentStepIndex, step, isFirstStep, isLastStep, back, next} = useMultiStepForm(questionArray.map((q,index)=>{return <QuestionItem question={q} key={`question_${index}`}/>}))

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    next()
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* {questionArray.map((q,index) => {
        return <QuestionItem question={q} key={`question_${index}`}/>;
      })} */}

      <form onSubmit={onSubmit}>
        <h2>{`Question ${currentStepIndex + 1} of ${steps.length}`}</h2>
        {step}

        <div>
          {!isFirstStep && <button type="button" onClick={back}>Back</button>}
          <button type="submit" >{isLastStep ? "Complete" : "Continue"}</button>
        </div>
      </form>
    </>
  );
}
