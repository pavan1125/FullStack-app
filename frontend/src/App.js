import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"
import Home from "./components/Home";
import LoginPage from "./components/loginPage";
function App() {

   const router=createBrowserRouter(
       createRoutesFromElements(
          <Route>
           <Route path="/" element={<LoginPage/>}/>
            <Route path="/Home" element={<Home/>}/>
          </Route>
       )
   )
  return (
     <RouterProvider router={router}/>
  );
}

export default App;
