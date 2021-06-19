const Header = () => {
  return (
    <div className="h-24 px-6 md:px-0 w-screen md:w-2/3 flex items-center text-gray-700 justify-between">
      <a href="/" className="text-3xl font-medium">
        Unn<span className="text-primary">Plot</span>
      </a>
      <div>
        <a
          className="mr-3 hover:underline  hover:text-primary-dark"
          href="https://github.com/avikki/unnplot/"
        >
          Github
        </a>
        <a className="hover:underline hover:text-primary-dark" href="/support">
          Support Us
        </a>
      </div>
    </div>
  )
}

export default Header
