

//#region  Question types

//TODO Add issue/action types
//TODO Figure out how to count the questions
//TODO figure out nested question logic

interface _IssueAction {
  issue: string,
  action: string[],
}


interface _QuestionProps {
  /**Input type: Yes/no, User input or Multiple choice */
  type: "YN" | "INPUT" | "MULTI",

  //section: number,

  /**Set if this question is nested */
  nested?: boolean | undefined,

  /**Issues with pre configured actions tied to them */
  issueAction?:_IssueAction[],

  value: string
}

interface YesNo_Question extends _QuestionProps {
  type: "YN",

  content:{
    /**The question itself */
    question: string,
  }
  
}

interface UserInput_Question extends _QuestionProps {
  type: "INPUT",
  
  content:{
    question: string,
  }
}

interface MultipleChoice_Question extends _QuestionProps {
  type: "MULTI",

  content:{
    question:string,
    options:string[],
  }

}

export type Question = YesNo_Question | UserInput_Question | MultipleChoice_Question


//#endregion