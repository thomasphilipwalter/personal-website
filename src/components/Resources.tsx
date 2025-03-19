function Resources() {
  return (
    <nav className="bg-white text-blue-700 py-4 w-full shadow-md">
      <ul className="flex justify-center space-x-6">
        <li>
          <a
            href="/thomas_walter_resume.pdf" 
            target="_blank"
            className="hover:text-gray-300"
          >
            Resume
          </a>
        </li>

        {/* GitHub - External Link */}
        <li>
          <a
            href="https://github.com/thomasphilipwalter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            GitHub
          </a>
        </li>

        {/* LinkedIn - External Link */}
        <li>
          <a
            href="https://www.linkedin.com/in/thomas-walter-46199a1b1/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Resources

