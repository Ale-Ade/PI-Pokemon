import { render, screen } from "@testing-library/react";
import App from "./App";
//import Card from "./component/Home/Card";
import Landing from "./component/Landing-Page/Initial.jsx";
import { BrowserRouter } from "react-router-dom";
/*import { Provider } from "react-redux";
import store from "./store/index";*/

/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getByText("HOME");
  expect(linkElement).toBeInTheDocument();
});

describe("<Landing/>", () => {
  let component;
  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <Landing>
          <div>testcontent</div>
        </Landing>
      </BrowserRouter>
    );
  });
  test("render", () => {
    component.getByText("Individual Project - Pokemon");
  });
});
