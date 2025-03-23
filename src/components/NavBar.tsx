import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="bg-blue-100 text-blue-700 py-4 w-full shadow-md"> 
      <ul className="flex justify-center space-x-6">
        {["About Me", "Music", "Art"].map((item) => (
          <li key={item}>
            <Link to={`/${item.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-gray-300">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
