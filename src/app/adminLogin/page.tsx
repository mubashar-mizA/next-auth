const page = () => {
    return (
        <div className="min-h-screen  flex items-center justify-center p-4">
            <div className="max-w-md rounded-lg bg-gray-800 p-6">
                <div className="text-white">
                    <h1 className="text-2xl ">Admin Login</h1>
                    <p className="text-sm">Accessable to Admin/Staff Only</p>
                    <p className="text-sm">Please enter id to proced</p>
                </div>
                <form>
                    <div className="text-center m-3">
                        <input className="w-full rounded-md p-2 text-black placeholder:black outline-none" type="text" placeholder="Enter your Id" /><br />
                    </div>
                    <div className="text-center  m-3">
                        <button className="bg-gray-400 p-2 rounded-lg" type="submit" >Proeed To Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default page