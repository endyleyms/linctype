import { renderHook, act } from "@testing-library/react";
import { useCalcScore } from "../../Hooks/useCalcScore";


describe('calculate score', () => {
  it('calculate WPM correctly', () => {
    const { result } = renderHook(() => useCalcScore());
    const wpm = result.current.calcWPM(250, 60000);
    expect(wpm).toBe(50); // 250 / 5 = 50 words per minute
  });

  it('calculate accuracy correctly', () => {
    const { result } = renderHook(() => useCalcScore());
    const accuracy = result.current.calcAccuracy(100, 90);
    expect(accuracy).toBe(0.9);
  });

  it('return 0 accuracy when total count is 0', () => {
    const { result } = renderHook(() => useCalcScore());
    const accuracy = result.current.calcAccuracy(0, 0);
    expect(accuracy).toBe(0);
  });
})
