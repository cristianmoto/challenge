

import Producto from "./Producto";

export const ListaProducto = ({items}) => {
 

  return (
   
      <div className="w-auto grid grid-cols-2 gap-4">
      {items.map((item) => (
        <Producto key={item.id} item={item} />
      ))
      }
      </div>
   
  )
}
