import { ReactNode, createContext, useReducer } from "react";

interface State {
  input: string;
  correctCount: number;
  finished: boolean;
  statuses: ('none' | 'success' | 'fail' | 'next')[];
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
  correctCount: 0,
  finished: false,
  statuses: []
}

type Action =
  | { type: 'SET_INPUT'; payload: string }
  | { type: 'INCREMENT_COUNT'; payload: number }
  | { type: 'FINISH' }
  | { type: 'RESET' }
  | { type: 'SET_STATUSES'; payload: ('none' | 'success' | 'fail' | 'next')[] };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_INPUT':
      return { ...state, input: action.payload };
    case 'INCREMENT_COUNT':
      return { ...state, correctCount: action.payload };
    case 'FINISH':
      return { ...state, finished: true };
    case 'RESET':
      return initialState;
    case 'SET_STATUSES':
      return { ...state, statuses: action.payload };
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
