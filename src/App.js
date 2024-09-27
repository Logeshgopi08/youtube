import { Provider } from "react-redux";
import Body from "./Components/Body";
import Header from "./Components/Header";
import appStore from "./utlis/appstore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";

function App() {

  const appRouter = createBrowserRouter([
    {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element: <MainContainer/>
      },
      {
        path:"/watch",
        element :<WatchPage/>
      }
    ]
  }
])
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
