
import { Link } from "react-router-dom";

const Producto = ({item}) => {
    return (
      <div className=" flex  border-2 rounded-md bg-white  shadow-inner">
            <Link to={"/item/" + item.id} >
                <div  className=" text-wrap text-justify grid grid-cols-2 p-4 ">
                 <img src={item.image} className=" w-[300px]" alt={item.title} />
                    <div className="flex-none" >
                        <div>
                        <p className=" text-2xl  font-sans font-semibold">{item.title}</p>
                        <p  className=" p-2 text-xs">{item.description}</p>
                        </div>
                       <div>
                        <p className="w-[80px] bg-sky-600 text-xl border-black border-2 rounded-md mx-5  text-slate-200 text-center align-bottom my-7">${item.price}</p>
                        </div>
                    </div>
                    
                </div>
            </Link>
        </div>


    )
}

export default Producto;
