import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-around items-center max-w-6xl mx-auto p-3'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-slate-500'>Kumordzie</span>
                <span className='text-slate-700 justify-between'>Estate</span>
            </h1>
            <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                <input type="text" name="" id="" placeholder='Search...' className="bg-transparent focus:outline-none hover:outline-neutral-700 w-24 sm:w-64" />
                <FaSearch className="text-slate-600" />
            </form>
            <ul className="flex gap-4">
                <li className="hidden sm:inline text-slate-700 hover:underline"><Link path="/">Home</Link></li>
                <li className="hidden sm:inline text-slate-700 hover:underline"><Link path="/about">About</Link></li>
                <li className="hidden sm:inline text-slate-700 hover:underline"><Link path="/sign-in">Sign-In</Link></li>
            </ul>
        </div>
    </header>
  )
}

export default Header