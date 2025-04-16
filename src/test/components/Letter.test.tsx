import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Provider } from "../../components/ui/provider";
import Letter from '../../components/Letter'


describe('Letter tests', () => {
  it('Render as a none color', () => {
    const component = render(
      <Provider>
        <Letter text="l" />
      </Provider>
    );
    expect(component).toBeDefined();
  });

  it('Render as a succes color', () => {
    const component = render(
      <Provider>
        <Letter text="l" color="success" />
      </Provider>
    );
    expect(component).toBeDefined();
  });

  it('Render as a next color', () => {
    const component = render(
      <Provider>
        <Letter text="l" color="next" />
      </Provider>
    );
    expect(component).toBeDefined();
  });

  it('Render as a fail color', () => {
    const component = render(
      <Provider>
        <Letter text="l" color="fail" />
      </Provider>
    );
    expect(component).toBeDefined();
  });
})
