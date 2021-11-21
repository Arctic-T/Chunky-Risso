import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { categories } from "./utills/data";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar categories={categories} />
        <Routes>
          <Route
            exact
            path="/"
            element={<ItemListContainer greeting="Bienvenido a mi tienda!" />}
          />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer greeting="Bienvenido a mi tienda!" />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
