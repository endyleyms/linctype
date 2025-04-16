import { ReactNode, createContext, useReducer } from "react";

interface State {
  input: string;
  startTime: Date | null;
  endTime: Date | null;
  correctCount: number;
  totalCount: number;
  deleteCount: number;
  finished: boolean;
  statuses: ('none' | 'success' | 'fail' | 'next')[];
  wpm: number,
  score: number
}

interface TypeContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}

interface TypeContextProviderProps {
  children: ReactNode;
}

const initialState: State = {
  input: '',
  startTime: null,
  endTime: null,
  correctCount: 0,
  totalCount: 0,
  deleteCount: 0,
  finished: false,
  statuses: [],
  wpm: 0,
  score: 0
}

type Action =
  | { type: 'SET_INPUT'; payload: string }
  | { type: 'SET_START_TIME'; payload: Date }
  | { type: 'SET_END_TIME'; payload: Date }
  | { type: 'INCREMENT_COUNT'; payload: number }
  | { type: 'TOTAL_COUNT'; payload: number }
  | { type: 'DELETE_COUNT' }
  | { type: 'FINISH' }
  | { type: 'RESET' }
  | { type: 'SET_STATUSES'; payload: ('none' | 'success' | 'fail' | 'next')[] }
  | { type: 'SET_WPM'; payload: number }
  | { type: 'SET_SCORE'; payload: number };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_INPUT':
      return { ...state, input: action.payload };
    case 'SET_START_TIME':
      return { ...state, startTime: action.payload };
    case 'SET_END_TIME':
      return { ...state, endTime: action.payload };
    case 'INCREMENT_COUNT':
      return { ...state, correctCount: action.payload };
    case 'TOTAL_COUNT':
      return { ...state, totalCount: action.payload };
    case 'DELETE_COUNT':
      return { ...state, deleteCount: state.deleteCount + 1 };
    case 'FINISH':
      return { ...state, finished: true };
    case 'RESET':
      return initialState;
    case 'SET_STATUSES':
      return { ...state, statuses: action.payload };
    case 'SET_WPM':
      return { ...state, wpm: action.payload };
    case 'SET_SCORE':
      return { ...state, score: action.payload };
    default:
      return state;
  }
};

export const TypeContext = createContext<TypeContextType | undefined>(undefined);

export const TypeContextProvider: React.FC<TypeContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TypeContext.Provider value={{ state, dispatch }}>
      {children}
    </TypeContext.Provider>
  );

};
