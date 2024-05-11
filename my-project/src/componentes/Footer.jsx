
import { NavLink } from 'react-router-dom'





export const Footer = () => {
  return (
    
        <nav className=" w-full  bg-black  h-[130px] py-3 mb-4 mt-2 ">
          
           
            <div  className=" text-slate-100 text-center py-5  text-7xl font-semibold ">
            
            </div>
            <div  className=" text-slate-100 gap-4 ">
            <ul  className=" flex  justify-around mx-6  align-text-bottom">
           
              <li className="text-2xl text-center">
                 <NavLink to={"/category/men's clothing"}>Aguirre Cristian ™</NavLink>
              </li>
             
              
                </ul>
            </div>
           
        </nav>
  )
  
}
