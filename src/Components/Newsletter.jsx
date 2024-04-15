
const Newsletter = () => {
  return (
    <div className=" w-full py-16 px-4 text-white bg-black">
        <div className=" max-w-[1240px] mx-auto grid lg:grid-cols-3 ">
            <div className=" lg:col-span-2">
                <h1 className=" text-2xl sm:3xl md:text-4xl font-bold lg:text-5xl  py-2">Want tips & tricks to optimize your flow ?</h1>
                <p className=" text-lg font-medium">Sign up to our newsletter and stay up to date</p>
            </div>
            <div className=" mt-6 grid grid-cols-3">
                <input type="email" placeholder="Enter your Email"  className=" px-20  lg:py-3 lg:px-2 col-span-2  text-black"/>
                <button className=" px-6  bg-green-600 lg:px-12 py-4   ">Notify </button>
                <p className=" mt-4 text-lg  font-medium col-span-3">We Care about the protection of your data. Read our Privacy Policy</p>
            </div>
           
        </div>

    </div>
  )
}

export default Newsletter