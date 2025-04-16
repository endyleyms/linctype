import { renderHook, act } from "@testing-library/react";
import { useTypingStatus } from "../../Hooks/useTypingStatus";
import { TypeContextProvider } from "../../components/context/TypingContext";

describe('Typing Status', () => {
  const wrapper = ({ children }: any) => (
    <TypeContextProvider>{children}</TypeContextProvider>
  );

  it('Corect count input', () => {
    const { result } = renderHook(() => useTypingStatus('lorem'), { wrapper });
    act(() => {
      result.current.onWordChange('l');
    });

    expect(result.current.correctCount).toBe(1)

  })

  it('Incorrect count input', () => {
    const { result } = renderHook(() => useTypingStatus('lorem'), { wrapper });
    act(() => {
      result.current.onWordChange('p');
    });

    expect(result.current.correctCount).toBe(0)

  })

  it('Set Status', () => {
    const { result } = renderHook(() => useTypingStatus('lorem'), { wrapper });
    act(() => {
      result.current.onWordChange('lo');
    });

    expect(result.current.statuses).toHaveLength(5);

  })

  it('Its finished', () => {
    const { result } = renderHook(() => useTypingStatus('lorem'), { wrapper });

    act(() => {
      result.current.onWordChange('l');
    });

    act(() => {
      result.current.onWordChange('lorem');
    });

    expect(result.current.finished).toBe(true);

  })

  it('Its not finished', () => {
    const { result } = renderHook(() => useTypingStatus('lorem'), { wrapper });

    act(() => {
      result.current.onWordChange('l');
    });

    act(() => {
      result.current.onWordChange('lore');
    });

    expect(result.current.finished).toBe(false);

  })

})
