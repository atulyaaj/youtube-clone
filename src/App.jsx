import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import store from "./utils/store";
import SuggestionPage from "./components/SuggestionPage";
import UseMemoDemo from "./components/UseMemoDemo";
import UseRefDemo from "./components/UseRefDemo";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/results",
        element: <SuggestionPage />,
      },
      {
        path: "/demo",
        element: (
          <>
            <UseMemoDemo />
            <UseRefDemo />
          </>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
