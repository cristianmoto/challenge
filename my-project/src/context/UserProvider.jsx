import { useEffect, useState } from "react";
import { Context } from "./Context";



export const UserProvider = ({children}) => {
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
    
        fetch("https://fakestoreapi.com/products")
        .then (respuesta => respuesta.json())
        .then (resultado => { 
           setProductos(resultado);
        });
    },[])

  return (
   <Context.Provider value={{ productos, setProductos}}>
    {children}

   
   </Context.Provider>
  )
}
