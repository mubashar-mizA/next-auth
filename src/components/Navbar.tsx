import Link from "next/link"
const Navbar = ()=>{
    return(
        <div className="sticky top-0  lg:my-4 max-w-5xl lg:flex-row flex-col flex justify-between items-center p-5">
            <h1 className="font-bold font-mono text-3xl text-gray-400"><a href="https://www.youtube.com/@sharpEdg23">sharpEdg.com</a></h1>
            <div className="flex lg:gap-x-10 gap-x-[40px] mt-4 lg:mt-0"> 
                <Link href='/adminLogin'><li className="list-none">Admin Login</li></Link>
                <Link href='/login'><li className="list-none">LMS</li></Link>
            </div>
            
        </div>
    )
}
export default Navbar