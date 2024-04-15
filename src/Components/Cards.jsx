
const Cards = () => {
  return (
    <div className=" px-8 w-full py-[10rem] bg-white" >
        <div  className=" max-w-[1280] mx-auto grid grid-cols-1 gap-8 lg:grid-cols-3 ">
            <div className=" w-full  flex flex-col justify-center shadow-2xl  items-center mx-auto border-[0.1vw] border-black hover:scale-105">
                <img src="single.png" alt="" className=" h-[25vw] w-[30vw] lg:p-20 " />
                <h1 className=" text-2xl font-bold">Single User</h1>
                <p className=" text-2xl py-4 font-bold  md:text-3xl lg:text-5xl">$149</p>
                
                    <p className=" text-lg pb-2 border-b-2 font-medium">500 GB Storage</p>
                    <p className=" text-lg pb-2 border-b-2 font-medium">One Granted User</p>
                    <p className=" text-lg pb-2 border-b-2  font-medium">Send up to 2 GB</p>
                    <button className=" font-bold text-medium md:text-22xl lg:2xl bg-[#19f377dd] h-[8vw] w-[20vw] md:h-[6vw] md:w-[15vw]  lg:h-[4vw] lg:w-[10vw]  my-4">Free Trial</button>

        

            </div>
            <div className=" w-full flex flex-col justify-center shadow-2xl   items-center mx-auto border-[0.1vw] border-black hover:scale-105">
                <img src="double.png" alt="" className=" h-[25vw] w-[30vw] lg:p-20  " />
                <h1 className=" text-2xl font-bold">Double User</h1>
                <p className=" text-2xl py-4 font-bold  md:text-3xl lg:text-5xl">$299</p>
                
                    <p className=" text-lg pb-2 border-b-2 font-medium">100 GB Storage</p>
                    <p className=" text-lg pb-2 border-b-2 font-medium">One Granted User</p>
                    <p className=" text-lg pb-2 border-b-2  font-medium">Send up to 4 GB</p>
                    <button className=" font-bold text-medium md:text-22xl lg:2xl bg-[#19f377dd] h-[8vw] w-[20vw] md:h-[6vw] md:w-[15vw]  lg:h-[4vw] lg:w-[10vw]  my-4">Free Trial</button>
        

            </div>
            <div className=" w-full flex flex-col justify-center shadow-2xl   items-center mx-auto border-[0.1vw] border-black hover:scale-105">
                <img src="triple.png" alt="" className=" h-[25vw] w-[30vw] lg:p-20  " />
                <h1 className=" text-2xl font-bold">Triple User</h1>
                <p className=" text-2xl py-4 font-bold  md:text-3xl lg:text-5xl">$549</p>
                
                    <p className=" text-lg pb-2 border-b-2 font-medium">150 GB Storage</p>
                    <p className=" text-lg pb-2 border-b-2 font-medium">One Granted User</p>
                    <p className=" text-lg pb-2 border-b-2  font-medium">Send up to 2 GB</p>
                    <button className=" font-bold text-medium md:text-22xl lg:2xl bg-[#19f377dd] h-[8vw] w-[20vw] md:h-[6vw] md:w-[15vw]  lg:h-[4vw] lg:w-[10vw]  my-4">Free Trial</button>

        

            </div>

            </div>
            
        </div>

    
  )
}

export default Cards