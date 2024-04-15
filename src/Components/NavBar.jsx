import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
    const [nav, setNav] = useState(false)


    const handleNav = () =>{
        setNav(!nav)
    }
  return (
    <div className=" h-[6vw] max-w-[1240px] mx-auto px-4 pt-10 text-white flex justify-around items-center ">
        <h1 className="w-full  text-3xl  font-bold  text-[#19f377dd]">React .</h1>
<ul className=" gap-4 hidden md:block md:flex  lg:block  lg:flex lg:justify-center text-medium  font-bold cursor-pointer ">
    <li>Home</li>
    <li>Company</li>
    <li>Resourses</li>
    <li>About</li>
    <li>Contact</li>
  

</ul>
<div><GiHamburgerMenu onClick={handleNav} className=" h-6 w-6 md:hidden lg:hidden xl:hidden "/></div>
{ nav && (
<div className=" fixed left-0 top-0 px-6 pt-[15vw] uppercase ease-in-out duration-500  bg-gray-800 h-screen w-[50%]"><ul>
    <li className="pt-5 py-4 border-b-zinc-400 border-b-2">Home</li>
    <li className=" pt-5 py-4 border-b-zinc-400 border-b-2">Company</li>
    <li className=" pt-5 py-4 border-b-zinc-400 border-b-2">Resourses</li>
    <li className=" pt-5 py-4 border-b-zinc-400 border-b-2">About</li>
    <li className=" pt-5 py-4 border-b-zinc-400 border-b-2">Contact</li>
  

</ul>
</div>)}
</div>
  )
}

export default NavBar