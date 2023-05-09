import { AiOutlineShoppingCart,  AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-row justify-between py-5 md:justify-between">

      {/*logo*/}
      <div>
        <h2 className="text-yellow-200 font-extrabold text-xl relative left-2 hover:scale-105 duration-[1.5s] cursor-pointer">CROSSMOTORS</h2>
      </div>
      
      {/*links*/}
      {/*laptop links*/}
      <div>
        <ul className=" hidden text-yellow-50 list-none lg:flex gap-[15px] items-center">
        <Link to="/">
          <li className="hover:underline cursor-pointer hover:text-red-600">
            Home
            </li>
        </Link>
        <Link to="/About">
          <li className="hover:underline cursor-pointer hover:text-red-600">
            About us
            </li>
          </Link>
          <Link to="/Features">
          <li className="hover:underline cursor-pointer hover:text-red-600">
            Features
            </li>
          </Link>
          <Link to="/Feedback">
          <li className="hover:underline cursor-pointer hover:text-red-600">
            Feedback
            </li>
          </Link>
          <Link to="/Contact">
          <li className="hover:underline cursor-pointer hover:text-red-600">
            Contact
            </li>
          </Link>
        </ul>
      </div>

    {/*mobile link*/}
    {show && (
      <div className="lg:hidden absolute right-0 top-[70px] z-[900] bg-zinc-900 w-[170px] py-[10px] px-[10px]">
       <div className="flex justify-end">
        <AiOutlineClose className="text-white text-2xl cursor-pointer" onClick={() => setShow(false)}/>
        </div>
        <ul className="lg:hidden text-yellow-50 list-none  gap-[15px] items-right">
        <Link to="/">
          <li className="hover:underline cursor-pointer hover:text-red-600">
            Home
            </li>
        </Link>
        <Link to="/About">
          <li className="hover:underline cursor-pointer hover:text-red-600">
            About us
            </li>
          </Link>
          <Link to="/Features">
          <li className="hover:underline cursor-pointer hover:text-red-600">
            Features
            </li>
          </Link>
          <Link to="/Feedbacks">
          <li className="hover:underline cursor-pointer hover:text-red-600">
            Feedback
            </li>
          </Link>
          <Link to="/Contact">
          <li className="hover:underline cursor-pointer hover:text-red-600">
            Contact
            </li>
          </Link>
        </ul>
      </div>
    )};

      {/*cart icons*/}
      <div className="flex justify-evenly items-center mr-12">
        <p className="text-white font-bold mr-8">EN</p>
        <AiOutlineShoppingCart className="text-white text-2xl cursor-pointer hover:scale-105 duration-[1.2s] "/>
        <AiOutlineBars className="text-white ml-6 text-2xl cursor-pointer lg:hidden" onClick={() => setShow (true)}/>
      </div>
    </div>
  );
}

export default Navigation
