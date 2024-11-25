
import { Provider } from 'react-redux';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from "./components/MainContainer";
import WatchPage from './components/WatchPage';
import Demo from './components/Demo';
import Demo2 from './components/Demo2';
import SearchResults from './components/SearchResults';



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <>
    <Header/>,
    <Body/>
    </>,
    children: [
      {
        path: "/",
        element: <MainContainer/>,
      },
      {
        path: "/watch",
        element: <WatchPage/>,
      },
      {
        path: "/demo",
        element: 
        <>
        <Demo/>
        <Demo2/>
        </>
      },
      {
        path: "/search/:query",
        element: <SearchResults/>,
      },

    ],
  },
])

function App() {
  return (
    <Provider store={store}>
      
        <RouterProvider router={appRouter}/>
      
        
      
     
    </Provider>
  );
}

export default App;
