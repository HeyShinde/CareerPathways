import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-purple-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-semibold">
          <Link href="/">CareerPathways</Link>
        </div>
        <div className="flex space-x-5">
          <Link href="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-400">
            About
          </Link>
          <Link href="/donate" className="text-white hover:text-gray-400">
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
