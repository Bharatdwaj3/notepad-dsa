
import {Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
     <div className="h-20 w-inherit absolute inset-x-0 top-96 pl-72">
          <nav className=" text-black p-4 flex space-x-60">
            <Link to="/" className="hover:text-gray-950">Home</Link>
            <Link to="/about" className="hover:text-gray-50">About</Link>
            <Link to="/content" className="hover:text-gray-50">Content</Link>
          </nav>
        </div>
    </>
  )
}

export default Navbar;