
export function useCalcScore (){

  //calcula Words Per Minute
  const calcWPM = (totalCharacters: number, millis: number): number => {
    const minutes = millis / 60000;
    return Math.floor((totalCharacters / 5) / minutes);
  };

  //calcular accuracy
  const calcAccuracy = (totalCount:number, correctCount:number)=> {
    return totalCount > 0 ? correctCount / totalCount : 0;
  }

  return { calcWPM, calcAccuracy}

};
