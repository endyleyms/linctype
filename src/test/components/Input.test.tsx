import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import InputField from "../../components/InputField";
import { Provider } from "../../components/ui/provider";


describe('Input field tests', () => {
  describe('Render component', () => {
    it('Inptu should render', () => {
      const component = render(
        <Provider>
          <InputField value={""} onChange={() => { }} placeholder="Enter your name" />
        </Provider>
      );
      expect(component).toBeDefined();
    });

    it('call onChange when typing', () => {
      const mockOnChange = jest.fn();
      render(
        <Provider>
          <InputField value={''} onChange={mockOnChange} placeholder="Enter your name" />
        </Provider>
      );
      const input = screen.getByPlaceholderText("Enter your name");

      fireEvent.change(input, { target: { value: "Wendy" } });

      expect(mockOnChange).toHaveBeenCalled();


    })
  })
})
