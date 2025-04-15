import { useContext, useState } from "react";
import {TypeContext} from "../components/context/TypingContext"

export function useTypingStatus (data: string) {
  const context = useContext(TypeContext);

  if (!context) {
    throw new Error("useTypingStatus must be used within a TypeContextProvider");
  }

  const {state,  dispatch } = context;


  const onWordChange = (value: string | any[]) => {
    let count = 0;
    dispatch({ type: "SET_INPUT", payload: value.toString() });
    const newStatuses = Array.from(data).map((letter, index) => {
      if (index < value.length) {
        if (value[index] === letter.toLowerCase()) {
          count++;
          dispatch({ type: 'INCREMENT_COUNT' })
          return 'success';
        } else {
          return 'fail';
        }
      } else if (index === value.length) {
        return 'next';
      } else {
        return 'none';
      }
    });


    dispatch({
      type: "SET_STATUSES",
      payload: newStatuses,
    });

    if(data.length === value.length){
      dispatch({ type: 'FINISH' });
    }
  };

  return {
    correctCount: state.correctCount,
    statuses: state.statuses,
    onWordChange,
    finished: state.finished
  }
}
