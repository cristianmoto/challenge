import  { useState, useEffect } from "react";
import { Loading } from "./Loading";
import { ProductoContenedor } from "./ProductoContenedor";


const Inicio= () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(delay); 
  }, []);

  return (
    <div>
      {isLoading ? <Loading /> : <ProductoContenedor/>}
    </div>
  );
};

export default Inicio;
