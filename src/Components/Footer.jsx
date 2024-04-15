import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className=" bg-black max-w-[1240px] mx-auto py-16 px-4  grid grid-cols-1 gap-8  text-gray-300 lg:grid-cols-2">
 <div>
 <h1 className="w-full  text-3xl  font-bold  text-[#19f377dd]">React .</h1>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae debitis animi veniam tempora </p>
 </div>
 <div className=" flex justify-between items-center md:justify-around md:px-16 lg:justify-around  ">
    
    <FaFacebookSquare size={30} />
    <FaInstagram size={30} />
    <FaSquareXTwitter size={30} />
    <FaSquareGithub size={30} />


    </div>
    <div className=" lg:col-span-2 flex justify-between">
        <div>
            <h3 className=" text-2xl font-bold">Solutions</h3>
            <ul>
                <li className=" py-2 text-sm">Analitics</li>
                <li className=" py-2 text-sm">Marketing</li>
                <li className=" py-2 text-sm">Commerce</li>
                <li className=" py-2 text-sm">Insights</li>
                </ul>
        </div>
        <div>
            <h3 className=" text-2xl font-bold">Support</h3>
            <ul>
                <li className=" py-2 text-sm">Pricing</li>
                <li className=" py-2 text-sm">Docomention</li>
                <li className=" py-2 text-sm">Guides</li>
                <li className=" py-2 text-sm">Api Status</li>
                </ul>
        </div>
        <div>
            <h3 className=" text-2xl font-bold">Company</h3>
            <ul>
                <li className=" py-2 text-sm">About</li>
                <li className=" py-2 text-sm">Blog</li>
                <li className=" py-2 text-sm">Carrer</li>
                <li className=" py-2 text-sm">Press</li>
                </ul>
        </div>

    </div>
    </div>
  )
}

export default Footer