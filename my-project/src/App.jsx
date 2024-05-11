import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./componentes/NavBar";
import { ProductoContenedor } from "./componentes/ProductoContenedor";
import { UserProvider } from "./context/UserProvider";
import { Footer } from "./componentes/Footer";
import Inicio from "./componentes/Inicio";
import { Error404 } from "./componentes/Error404";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path={"/"} element={<Inicio />} />
          <Route path={"/category/:id"} element={<ProductoContenedor />} />
          <Route path={"/*"} element={<Error404/>} />
          
        </Routes>

        <Footer />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
