import { useContext, useState, useEffect } from "react";
import { Context } from "../context/Context";
import { ListaProducto } from "./ListaProducto";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDown, faSortAmountUp, faSort } from '@fortawesome/free-solid-svg-icons';

export const ProductoContenedor = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // Estado para rastrear el orden actual
  const { id } = useParams();
  const { productos } = useContext(Context); // trae productos desde el Storage 

  useEffect(() => {
    const filteredItems = productos.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    let sortedItems = id
      ? filteredItems.filter((item) => item.category === id)
      : filteredItems;

    if (sortedItems.length > 0) {
      sortedItems = sortItemsByPrice(sortedItems, sortOrder);
    }

    const promesa = new Promise((res) => {
      setTimeout(() => {
        res(sortedItems);
      }, 800);
    });

    promesa.then((res) => {
      setItems(res);
    });
  }, [id, searchTerm, productos, sortOrder]);

  const sortItemsByPrice = (itemsToSort, order) => {
    const sortedItems = [...itemsToSort].sort((a, b) => {
      if (order === "asc") {
        return a.price - b.price;
      } else if (order === "desc") {
        return b.price - a.price;
      } else {
        return 0; // Orden original
      }
    });
    return sortedItems;
  };

  const handleSortByPrice = () => {
    let newOrder;
    if (sortOrder === "asc") {
      newOrder = "desc";
    } else if (sortOrder === "desc") {
      newOrder = "orig";
    } else {
      newOrder = "asc";
    }

    setSortOrder(newOrder);
  };

  return (
    <div className="container mx-auto">
      <div className="">
        <div className="bg-black h-12 my-4">
          <label className="text-white text-2xl mx-2 my-1">Buscar</label>
          <input className="border-2 rounded-md border-black"
            type="text"
            placeholder="Buscar por nombre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="text-white" onClick={handleSortByPrice}> Ordenar precio
            {sortOrder === "asc"
              ? <FontAwesomeIcon icon={faSortAmountUp} className="text-2xl mx-2 text-center" />
              : sortOrder === "desc"
              ? <FontAwesomeIcon icon={faSortAmountDown} className="text-2xl mx-2 text-center" />
              : <FontAwesomeIcon icon={faSort}  className="text-2xl mx-2 text-center"/>}
          </button>
        </div>
        <ListaProducto items={items} />
      </div>
    </div>
  );
};
