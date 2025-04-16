import { useContext } from "react";
import {TypeContext} from "../components/context/TypingContext"
import { useCalcScore } from "./useCalcScore";

export function useTypingStatus (data: string) {
  const context = useContext(TypeContext);
  const {  calcWPM, calcAccuracy } = useCalcScore();

  if (!context) {
    throw new Error("useTypingStatus must be used within a TypeContextProvider");
  }

  const {state,  dispatch } = context;

// funcion que detecta la letra que se tipea, agregando diferentes estados
  const onWordChange = (value: string) => {
    let count = 0;

    //Inicio del conteo tiempo
    if (!state.startTime) {
      dispatch({ type: 'SET_START_TIME', payload: new Date() });
    }

    // Detecta si fue un backspace
    if (value.length < state.input.length) {
      dispatch({ type: "DELETE_COUNT" });
    }
    //Envía el dato del tipeado
    dispatch({ type: "SET_INPUT_LETTER", payload: value });

    const newStatuses = Array.from(data).map((letter, index) => {
      if (index < value.length) {
        if (value[index] === letter.toLowerCase()) {
          count++;
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

    //Cuentas las letras que coincidieron
    dispatch({ type: 'INCREMENT_COUNT', payload: count })

    //Actuliza el estado de cada letra
    dispatch({
      type: "SET_STATUSES",
      payload: newStatuses,
    });

    //detecta cuando finaliza le prueba
    if(data.length === value.length){

      const endTime = new Date();
      const startTime = state.startTime!;
      const millis = endTime.getTime() - startTime.getTime();


      dispatch({ type: 'FINISH' });
      dispatch({ type: 'SET_END_TIME', payload: new Date() });
      dispatch({ type: "TOTAL_COUNT", payload: value.length });

      const wpm = calcWPM(value.length, millis);
      const accuracy = calcAccuracy(value.length, state.correctCount);
      const scoreData = (wpm * value.length * accuracy) - state.deleteCount;

      dispatch({ type: 'SET_WPM', payload: wpm });
      dispatch({ type: 'SET_SCORE', payload: scoreData });
      dispatch({ type: 'SET_ACCURACY', payload: accuracy });
    }
  };

  return {
    correctCount: state.correctCount,
    statuses: state.statuses,
    onWordChange,
    finished: state.finished,
    score: state.score,
    wpm: state.wpm,
    accuracy: state.accuracy
  }
}
