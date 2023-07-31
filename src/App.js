import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import SidebarMenu from "./components/SidebarMenu";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer nombre="Federico" mensajeCompleto="Buenas tardes, esto es por si habia que mostrar el mensaje completo"/>
      <SidebarMenu />
    </>
  );
}

export default App;