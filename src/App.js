import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer nombre="Federico" mensajeCompleto="Buenas tardes, esto es por si habia que mostrar el mensaje completo"/>
    </>
  );
}

export default App;