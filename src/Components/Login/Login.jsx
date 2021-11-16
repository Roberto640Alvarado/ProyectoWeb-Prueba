import user_logo from '../../Img/Logo_user.png';
const Login = () => {
    return (
        <div className="items-center min-h-screen bg-blue-400 flex justify-center" 
        /* class="w-full h-full"
        style="background-image: url('../../Img/banner.jpg')"*/> 
            <main className="">
                <form className="flex flex-col items-center bg-gray-100 py-8 rounded px-10  ">
                    <h1 className="mb-5 text-3xl text-center">Login</h1>
                    <img src={user_logo} alt="user" className="w-20" />
                    <label className="font-bold">Username</label>
                    <input type="text" placeholder="Enter username or email..." className="my-2 flex-grow h-8 px-2 rounded border border-grey-400 text-center"/>
                    <label className="font-bold">Password</label>
                    <input type="password" placeholder="Enter password..." className="my-2 flex-grow h-8 px-2 rounded border border-grey-400 text-center" />
                    <button type="submit" className="rounded bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-8">Login</button>
                </form>
            </main>
        </div>
    );
}
export default Login;