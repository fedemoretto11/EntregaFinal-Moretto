import { BrowserRouter } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Main from "./components/Main";


// import SidebarMenu from "./components/SidebarMenu";

function App() {



  
  return (
    <BrowserRouter>
      <NavBar />
      <Main />
    </BrowserRouter>
  );
}

export default App;