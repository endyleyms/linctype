import { useContext } from "react";
import {TypeContext} from "../components/context/TypingContext";
import { useApi } from "../Hooks/useApi";



export function useActions (){
  const context = useContext(TypeContext);
  
  if (!context) {
    throw new Error("useTypingStatus must be used within a TypeContextProvider");
  }
  
  const { dispatch, state } = context;
  const { fetchData, data, loading } = useApi<[]>();

  const handleRestart = () =>{
    dispatch({ type: 'RESET' })
  };

  const handleCancel = () => {
    dispatch({ type: 'RESET' })
  };

  const handleChange = ( value: string) => {
    dispatch({ type: "SET_INPUT", payload: value });
  }

  const useHandleSumbmit = async () =>{
    if (!state.name.trim()) return;


    const newEntry = {
      username: state.name,
      score: state.score,
      accuracy: state.accuracy,
      firstStrikeAccuracy: '',
      wpm: state.wpm,
      words: state.totalCount,
    };

    try {
     const scorePost = await fetchData({
        url: "http://localhost:3001/leaderboard",
        method: "POST",
        body: newEntry,
        onError: (err) => alert("Error data creating: " + err.message),
      })

      if(scorePost){
        await fetchData({
          url: "http://localhost:3001/leaderboard",
          method: "GET",
          onError: (err) => alert("Error fetching data: " + err.message),
        });
      }
    } catch (err) {
      console.error("❌ Error en la conexión:", err);
    }
  }

  return { handleRestart, handleCancel, handleChange, useHandleSumbmit, data, loading}
}
