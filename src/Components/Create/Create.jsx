
const Create = () => {
    return (
        <div className="items-center min-h-screen flex justify-center bg-gray-900">
            <form className=" flex flex-col items-center bg-gray-300 px-14 py-10 rounded ">
                <h1 className=" flex text-center text-5xl font-bold mb-4 italic">New Post</h1>
                <div className="items-center flex w-full mt-6"> 
                    <label className="text-2xl font-medium w-1/3 text-left px-3">Title</label>
                    <input type="text" placeholder="Enter title" className="w-2/3 my-2  p-2  rounded border border-grey-400 text-center" />
                </div>
                <div className="flex items-center w-full mt-6">
                    <label className="text-2xl font-medium w-1/3 text-left px-3">Description</label>
                    <textarea type="text" placeholder="Enter description" className="w-80 my-2 py-4   rounded border border-grey-400 text-center" />
                </div>
                <div className=" flex items-center w-full mt-6">
                    <label className="text-2xl font-medium w-1/3 text-left px-3 "> URL Image</label>
                    <input type="te<xt" placeholder="Enter URL" className="w-2/3 my-2  p-2 rounded border border-grey-400 text-center" />
                </div>
                <button type="submit" className=" text-2xl rounded bg-yellow-300 hover:bg-yellow-500 text-black font-semibold px-14 py-2 mt-8">Add Post</button>
            </form>

        </div>
    )
}

export default Create;