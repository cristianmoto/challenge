import { NavLink } from "react-router-dom"



export const NavBar = () => {
  return (
        <nav className=" w-full  bg-black  h-[180px] py-3 mb-4 ">
          
           
            <div  className=" text-slate-100 text-center py-5  text-7xl font-semibold ">
            <NavLink to={"/"}> DEMO</NavLink> 
            </div>
            <div  className=" text-slate-100 gap-4 ">
            <ul  className=" flex  justify-around mx-6  align-text-bottom">
           
              <li className="text-3xl text-center">
                 <NavLink to={"/category/men's clothing"}>Hombre</NavLink>
              </li>
              <li className="text-3xl text-center">
                <NavLink to={"/category/women's clothing"}>Mujer</NavLink>
               </li>
               <li className="text-3xl text-center">
                    <NavLink to={"/category/jewelery"}>Joyeria</NavLink>
                </li>
                <li className="text-3xl text-center">
                       <NavLink to={"/category/electronics"}>Electronica</NavLink>
                </li>
              
                </ul>
            </div>
           
        </nav>
  )
}
