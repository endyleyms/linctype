import { useContext } from "react";
import {TypeContext} from "../components/context/TypingContext";

// const [words, setWords] = useState(typeTest.split(" "));
//   const [startTime, setStartTime] = useState(new Date());

// const calcWordsPerMinute = (charsTyped: number, millis: number): number =>
//     Math.floor(charsTyped / 5 / (millis / 60000));

//     const checkFinished = () => {
//       if (!words.length) {
//         if (startTime) {
//           const timeMillis: number = new Date().getTime() - startTime.getTime();
//           const wpm = calcWordsPerMinute(typeTest.length, timeMillis);
//           setWordsPerMinute(wpm);
//         }
//       }
//     }

// useEffect(() => {
//   if (words.length !== 0) return;
//   checkFinished();
// }, [words, checkFinished]);


export function useActions (){
  const context = useContext(TypeContext);

  if (!context) {
    throw new Error("useTypingStatus must be used within a TypeContextProvider");
  }

  const { dispatch } = context;

  const handleRestart = () =>{
    dispatch({ type: 'RESET' })
  };

  const handleCancel = () => {
    dispatch({ type: 'RESET' })
  };

  const handleScore = () =>{}



  return { handleRestart, handleCancel, handleScore}
}
