import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/Routes/NavBar";
import Main from "./components/Routes/Main";
import Footer from "./components/Routes/Footer";


// import SidebarMenu from "./components/SidebarMenu";

function App() {



  
  return (
    <BrowserRouter>
      <NavBar />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;