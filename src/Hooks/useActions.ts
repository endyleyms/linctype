import { useContext } from "react";
import {TypeContext} from "../components/context/TypingContext"


export function useActions (){
  const context = useContext(TypeContext);

  if (!context) {
    throw new Error("useTypingStatus must be used within a TypeContextProvider");
  }

  const { dispatch } = context;
  const handleRestart = () =>{
    dispatch({ type: 'RESET' })
  }
  const handleCancel = () => {
    dispatch({ type: 'RESET' })
  }

  return { handleRestart, handleCancel}
}
