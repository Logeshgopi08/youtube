import { Provider } from "react-redux";
import Body from "./Components/Body";
import Header from "./Components/Header";
import appStore from "./utlis/appstore";

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
