import user_logo from '../../Img/Logo_user.png';
import banner from '../../Img/banner.jpg';
import Alert from '../Alerts/Alert';

const Login = () => {
    return (
        <div className="bg-center bg-no-repeat bg-local items-center min-h-screen flex justify-center bg-cover" 
        style={{ backgroundImage: `url(${banner})` }}>
                <form className="flex flex-col items-center bg-gray-100 py-8 rounded px-10  ">
                    <h1 className="mb-5 text-3xl text-center">Login</h1>
                    <img src={user_logo} alt="user" className="w-20" />
                    {/* <Alert/> */}
                    <label className="font-bold mt-2">Username</label>
                    <input type="text" placeholder="Enter username or email..." className="my-2 flex-grow h-8 px-8 rounded border border-grey-400 text-center"/>
                    <label className="font-bold">Password</label>
                    <input type="password" placeholder="Enter password..." className="my-2 flex-grow h-8 px-8 rounded border border-grey-400 text-center" />
                    <button type="submit" className="rounded bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-8 mt-2">Login</button>
                </form>
        </div>
    );
}
export default Login;